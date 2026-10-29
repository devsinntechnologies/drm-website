// Run against `next start`, never production: form delivery and analytics are stubbed.
// PLAYWRIGHT_MODULE_PATH may point to an external Playwright install so this QA
// does not change the application's dependencies or lockfile.
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || "playwright");
const base = process.env.SEO_QA_BASE_URL || "http://localhost:3100";
assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname), "Use a local production server for controlled form QA.");
const fixture = JSON.parse(await readFile(new URL("./seo-core-expectations.json", import.meta.url), "utf8"));
const output = path.resolve(process.env.SEO_QA_ARTIFACT_DIR || "docs/seo-review");
await mkdir(path.join(output, "screenshots"), { recursive: true });
const result = { environment: "Local production build; external analytics blocked; EmailJS mocked", scope: process.env.SEO_QA_FORM_ONLY ? "form-only" : "full", base, pages: [], answers: [], links: [], mobile: [], forms: {}, errors: [] };
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const browser = await chromium.launch({ headless: true, executablePath: process.env.SEO_QA_CHROMIUM_EXECUTABLE });
result.browser = browser.version();
result.node = process.version;

async function sweep(page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 650) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(70);
  }
  await page.waitForTimeout(1100);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
}

async function contextFor(viewport) {
  const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
  context.setDefaultTimeout(20000);
  context.setDefaultNavigationTimeout(30000);
  await context.route("**/*", async (route) => {
    if (new URL(route.request().url()).origin === new URL(base).origin) return route.continue();
    // No real mail, analytics, Clarity or third-party scripts run in this suite.
    return route.fulfill({ status: 200, contentType: "text/javascript", body: "" });
  });
  return context;
}

function inspectDocument(doc) {
  const one = (selector) => {
    const nodes = [...doc.querySelectorAll(selector)];
    return nodes.map((node) => node.content || node.href || node.textContent.trim());
  };
  return {
    title: one("title"), description: one('meta[name="description"]'),
    canonical: one('link[rel="canonical"]'), robots: one('meta[name="robots"]'),
    ogTitle: one('meta[property="og:title"]'), ogDescription: one('meta[property="og:description"]'),
    twitterTitle: one('meta[name="twitter:title"]'), twitterDescription: one('meta[name="twitter:description"]'),
    h1: one("h1"), mainCount: doc.querySelectorAll("main").length,
    schemas: one('script[type="application/ld+json"]').map((text) => JSON.parse(text)),
    headings: [...doc.querySelectorAll("main h1, main h2, main h3, main h4")].map((h) => ({ level: Number(h.tagName[1]), text: h.textContent.trim() })),
    mainLinks: [...doc.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href")),
  };
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 30 && !ready; attempt++) {
    try {
      ready = (await fetch(base, { signal: AbortSignal.timeout(1000) })).ok;
    } catch { /* The local production server may still be starting. */ }
    if (!ready) await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  assert(ready, "Local production server did not become ready");
  if (!process.env.SEO_QA_FORM_ONLY) {
  const context = await contextFor({ width: 1440, height: 1000 });
  const page = await context.newPage();
  page.on("pageerror", (error) => result.errors.push(error.message));
  const internal = new Set();
  for (const [route, expected] of Object.entries(fixture.pages)) {
    const response = await page.goto(base + route, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200, route);
    assert(!/noindex|none/i.test(response.headers()["x-robots-tag"] || ""), route + " X-Robots-Tag");
    const html = await response.text();
    const server = await page.evaluate(({ html, fn }) => {
      const inspect = new Function("return (" + fn + ")")();
      return inspect(new DOMParser().parseFromString(html, "text/html"));
    }, { html, fn: inspectDocument.toString() });
    const dom = await page.evaluate((fn) => new Function("return (" + fn + ")")()(document), inspectDocument.toString());
    for (const [label, view] of [["server", server], ["DOM", dom]]) {
      assert.deepEqual(view.title, [expected.title], `${route} ${label} title`);
      assert.deepEqual(view.description, [expected.description], `${route} ${label} description`);
      assert.equal(view.canonical.length, 1);
      assert.equal(new URL(view.canonical[0]).href, new URL(route, "https://diginizam.com").href);
      assert.deepEqual(view.h1, [expected.h1], `${route} ${label} H1`);
      assert.equal(view.mainCount, 1, route + " main landmark");
      assert(view.robots.length === 1 && view.robots[0].includes("index, follow"));
      assert.deepEqual(view.ogTitle, [expected.title]);
      assert.deepEqual(view.ogDescription, [expected.description]);
      assert.deepEqual(view.twitterTitle, [expected.title]);
      assert.deepEqual(view.twitterDescription, [expected.description]);
      assert.equal(view.schemas.length, 1);
      const schema = view.schemas[0];
      assert.equal(schema["@type"], "SoftwareApplication");
      assert.equal(schema["@id"], "https://diginizam.com/#software");
      assert.equal(schema.publisher["@id"], "https://diginizam.com/#organization");
      assert(!schema.offers && !schema.operatingSystem && !schema.aggregateRating && !schema.review);
      assert(!JSON.stringify(schema).includes("Pakistan"));
      for (let i = 1; i < view.headings.length; i++) {
        assert(view.headings[i].level <= view.headings[i - 1].level + 1, `${route} heading skip: ${view.headings[i].text}`);
      }
    }
    await sweep(page);
    assert(await page.locator("h1").locator("..").getByText(expected.hero, { exact: true }).isVisible(), route + " hero");
    for (const section of expected.requiredSections || []) {
      const heading = page.getByRole("heading", { name: section.heading, exact: true });
      assert.equal(await heading.count(), 1);
      const container = heading.locator("xpath=ancestor::section[1]");
      const text = container.getByText(section.body, { exact: true });
      assert(await text.isVisible(), route + " required section copy: " + section.heading);
    }
    for (const q of fixture.questions.filter((q) => q.path === route)) {
      const heading = page.getByRole("heading", { name: q.heading, exact: true });
      assert.equal(await heading.count(), 1, `Q${q.id} heading`);
      if (route === "/pricing") {
        const button = heading.getByRole("button");
        await button.focus();
        if (await button.getAttribute("aria-expanded") !== "true") await page.keyboard.press("Enter");
        assert.equal(await button.getAttribute("aria-expanded"), "true");
        const panelId = await button.getAttribute("aria-controls");
        const panel = page.locator(`[id="${panelId}"]`);
        assert(await panel.isVisible(), `Q${q.id} panel`);
        assert.equal(normalize(await panel.innerText()), normalize(q.answer));
      } else {
        const answer = page.getByText(q.answer, { exact: true });
        assert.equal(await answer.count(), 1, `Q${q.id} answer count`);
        await answer.scrollIntoViewIfNeeded();
        assert(await answer.isVisible(), `Q${q.id} visible answer`);
      }
      result.answers.push({ id: q.id, route, question: q.question, visible: true });
    }
    for (const link of fixture.links.filter((l) => l.source === route)) {
      assert(dom.mainLinks.includes(link.target), `${route} contextual link to ${link.target}`);
      result.links.push({ ...link, crawlable: true });
    }
    const copy = await page.locator("body").innerText();
    const alts = await page.locator("img").evaluateAll((nodes) => nodes.map((n) => n.alt).join(" "));
    assert(!/JazzCash|EasyPaisa|5\+ global languages|AI built into|Sales forecasting|Infinite Products|Zero Downtime|Free Forever|Unlimited orders|Unlimited terminals|Vendor Portal|No setup fees|Cancel anytime|Free daily backups|without creating unsupported|only live product reports|we do not publish unverified/i.test(copy + alts), route + " unsupported/editorial copy");
    assert(!/POS software (?:in|for) Pakistan|businesses across Pakistan|Pakistan's retail ecosystem|Pakistani businesses|software price in Pakistan/i.test(copy + alts));
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    hrefs.forEach((href) => internal.add(href));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(output, "screenshots", `${route === "/" ? "home" : route.slice(1)}-desktop.png`) });
    result.pages.push({ route, status: response.status(), metadata: dom, serverAndDomMatch: true, heroVisible: true });
    console.log(`Passed desktop metadata, answers, links and schema: ${route}`);
  }
  // Test an actual Next.js client navigation, including metadata after navigation.
  await page.goto(base);
  await page.locator('main a[href="/features"]').first().click();
  await page.waitForURL(base + "/features");
  assert.equal(await page.title(), fixture.pages["/features"].title);
  result.navigation = "Home contextual feature link: click and destination metadata passed";
  result.hostRedirects = [];
  for (const host of ["www.diginizam.com", "rms.devsinntechnologies.com", "www.rms.devsinntechnologies.com", "diginizam.com"]) {
    const response = await context.request.get(base + "/features?source=local-qa", { headers: { host, "x-forwarded-proto": "http" }, maxRedirects: 0 });
    assert.equal(response.status(), 301, host);
    assert.equal(response.headers().location, "https://diginizam.com/features?source=local-qa");
    result.hostRedirects.push({ host, status: response.status(), location: response.headers().location });
  }
  const destinations = [];
  for (const href of internal) {
    const url = new URL(href, base);
    const response = await context.request.get(url.href);
    assert.equal(response.status(), 200, "Internal destination " + href);
    if (url.hash) {
      const html = await response.text();
      const id = decodeURIComponent(url.hash.slice(1));
      assert(html.includes(`id="${id}"`), "Missing fragment " + href);
    }
    destinations.push({ href, finalUrl: response.url(), status: response.status() });
  }
  result.destinations = destinations;
  const robots = await context.request.get(base + "/robots.txt");
  assert.equal(robots.status(), 200);
  assert((await robots.text()).includes("Sitemap: https://diginizam.com/sitemap.xml"));
  const sitemap = await context.request.get(base + "/sitemap.xml");
  assert.equal(sitemap.status(), 200);
  const xml = (await sitemap.text()).replace(/\r\n/g, "\n");
  assert(!xml.includes("/thank-you"));
  for (const route of Object.keys(fixture.pages)) {
    assert(xml.includes(`<loc>https://diginizam.com${route}</loc>\n    <lastmod>2026-10-22</lastmod>`));
  }
  result.crawlFiles = "Local robots and sitemap passed; five core revision dates retained";
  await context.close();

  for (const width of [360, 430]) {
    const context = await contextFor({ width, height: 900 });
    const page = await context.newPage();
    page.on("pageerror", (error) => result.errors.push(error.message));
    for (const route of Object.keys(fixture.pages)) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await sweep(page);
      const size = await page.evaluate(() => ({ viewport: innerWidth, content: document.documentElement.scrollWidth }));
      assert(size.content <= size.viewport + 1, `${route} overflow at ${width}: ${JSON.stringify(size)}`);
      assert(await page.locator("h1").isVisible());
      const cta = page.locator('main a[href="/demo"]').first();
      await cta.scrollIntoViewIfNeeded();
      assert(await cta.isVisible());
      await page.waitForFunction(() => [...document.images].every((image) => image.complete), undefined, { timeout: 30000 });
      const images = await page.locator("img").evaluateAll((nodes) => nodes.filter((n) => !n.complete || !n.naturalWidth).map((n) => n.src));
      assert.deepEqual(images, [], route + " image loading");
      if (route === "/") {
        const panel = page.locator("main section").filter({ has: page.getByRole("heading", { name: "Industry Workflows", exact: true }) }).first();
        await panel.scrollIntoViewIfNeeded();
        const clipped = await panel.locator('[class*="lg:col-span-7"] > div').evaluate((element) => {
          const bounds = element.getBoundingClientRect();
          return [...element.querySelectorAll("h3, p, button")].filter((node) => {
            const box = node.getBoundingClientRect();
            return box.bottom > bounds.bottom + 1 || box.right > bounds.right + 1 || box.left < bounds.left - 1;
          }).map((node) => node.textContent || node.getAttribute("aria-label"));
        });
        assert.deepEqual(clipped, [], "Home capability content must fit its card");
        await panel.screenshot({ path: path.join(output, "screenshots", `home-capabilities-${width}.png`) });
      }
      if (route === "/pricing") {
        const pricingCta = page.getByRole("link", { name: "Book a Demo to Discuss Pricing", exact: true }).first();
        await pricingCta.scrollIntoViewIfNeeded();
        assert(await pricingCta.isVisible());
        await page.screenshot({ path: path.join(output, "screenshots", `pricing-process-${width}.png`) });
      }
      if (route === "/demo") {
        await page.locator("form").scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(output, "screenshots", `demo-form-${width}.png`) });
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(output, "screenshots", `${route === "/" ? "home" : route.slice(1)}-${width}.png`) });
      result.mobile.push({ route, width, overflow: false, h1Visible: true, ctaVisible: true, imagesLoaded: true });
      console.log(`Passed mobile layout and images: ${route} at ${width}px`);
    }
    await context.close();
  }
  }

  console.log("Checking controlled Demo form");
  const formContext = await contextFor({ width: 430, height: 900 });
  const formPage = await formContext.newPage();
  formPage.on("pageerror", (error) => result.errors.push(error.message));
  let mode = "fail";
  let sends = 0;
  let thankYouRequests = 0;
  formPage.on("request", (request) => {
    if (request.isNavigationRequest() && new URL(request.url()).pathname === "/thank-you") thankYouRequests++;
  });
  await formPage.route("https://api.emailjs.com/api/v1.0/email/send", async (route) => {
    if (route.request().method() === "OPTIONS") {
      return route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-methods": "POST", "access-control-allow-headers": "content-type" } });
    }
    sends++;
    const payload = route.request().postDataJSON();
    assert.equal(payload.template_params.user_phone, "+44 20 7946 0958");
    assert.equal(payload.template_params.city, "London");
    await new Promise((resolve) => setTimeout(resolve, 300));
    await route.fulfill({ status: mode === "fail" ? 500 : 200, headers: { "access-control-allow-origin": "*" }, contentType: "text/plain", body: mode === "fail" ? "Controlled test failure" : "OK" });
  });
  const direct = await formContext.request.get(base + "/thank-you", { maxRedirects: 0 });
  assert.equal(direct.status(), 307);
  assert(new URL(direct.headers().location, base).pathname === "/demo");
  await formPage.goto(base + "/demo", { waitUntil: "networkidle" });
  const form = formPage.locator("form");
  const submit = form.getByRole("button", { name: "Book free demo", exact: true });
  assert.equal(await formPage.locator("#city").getAttribute("placeholder"), "Your city");
  assert.equal(await formPage.locator("#user_phone").getAttribute("placeholder"), "Include country code");
  await submit.click();
  assert.equal(sends, 0);
  assert.equal(await form.evaluate((el) => el.checkValidity()), false);
  await formPage.locator("#user_name").fill("Controlled QA business");
  await formPage.locator("#city").fill("London");
  await formPage.locator("#user_email").fill("invalid");
  for (const phone of ["+1 202 555 0100", "+971 50 123 4567", "+92 328 460 2903", "+44 20 7946 0958"]) {
    await formPage.locator("#user_phone").fill(phone);
    assert(await formPage.locator("#user_phone").evaluate((el) => el.checkValidity()));
  }
  await submit.click();
  assert.equal(sends, 0, "Invalid email cannot send");
  await formPage.locator("#user_email").fill("controlled-qa@example.com");
  await submit.click();
  await formPage.getByText("Could not schedule your demo. Please try again or contact us.", { exact: true }).waitFor();
  console.log("Passed controlled Demo validation and delivery failure");
  assert.equal(formPage.url(), base + "/demo");
  assert(!(await formContext.cookies()).some((c) => c.name === "dn_demo_success"));
  assert.equal(thankYouRequests, 0);
  mode = "success";
  await submit.click();
  await formPage.waitForURL(base + "/thank-you");
  console.log("Passed controlled Demo successful retry");
  assert.equal(sends, 2, "One failed request plus one successful retry");
  assert.equal(thankYouRequests, 1);
  assert(!(await formContext.cookies()).some((c) => c.name === "dn_demo_success"));
  // The page shell can fire `load` just before the streamed content is revealed.
  await formPage.getByRole("heading", { level: 1, name: "Thank you — we'll be in touch" }).waitFor({ state: "visible" });
  await formPage.reload();
  await formPage.waitForURL(base + "/demo");
  result.forms = { delivery: "Mocked only; no real email sent", requiredFields: "pass", invalidEmail: "pass", internationalInputs: "US, UAE, Pakistan, UK accepted", failureKeepsForm: "pass", retryRoutesAfterSuccess: "pass", successCookieConsumed: "pass", directAndRepeatedThankYouAccess: "redirects to /demo", analytics: "GA4/Clarity scripts blocked; property-side event configuration and real delivery pending" };
  await formContext.close();
  assert.deepEqual(result.errors, [], "Browser runtime errors");
  result.status = "PASS";
} catch (error) {
  result.status = "FAIL";
  result.failure = error.stack;
  process.exitCode = 1;
} finally {
  await browser.close();
  await writeFile(path.join(output, "qa-results.json"), JSON.stringify(result, null, 2) + "\n");
  console.log(JSON.stringify({ status: result.status, pages: result.pages.length, answers: result.answers.length, contextualLinks: result.links.length, mobileChecks: result.mobile.length, destinations: result.destinations?.length, failure: result.failure }, null, 2));
}
