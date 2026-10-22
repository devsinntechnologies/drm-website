# DigiNizam Week 1–2 SEO/AEO review

Prepared 22 October 2026 (Asia/Karachi). Reviewable local changes only. **No deployment or production verification performed.**

## Decisions and scope

Read all 11 workbook tabs, starting with `00 Read First` and `10 Copilot Prompt`, and inspected repository instructions plus the installed Next.js 16.2.3 metadata, routing and JSON-LD guides. Compared the existing code before editing; the original working tree was clean. Most core metadata and heroes already matched and were retained. Workbook editorial instructions were treated as implementation requirements, never public copy.

The current owner correction takes precedence over the workbook pricing drafts: no fixed published pricing; demo first; if the customer proceeds, discuss requirements and agree on pricing. The Pricing title/H1 now omit “Plans”, and its main CTA is **Book a Demo to Discuss Pricing**. Free Forever, package/terminal/usage promises, fee/cancellation promises and daily-backup claims are absent from the rendered pricing flow. No prices, ranges, discounts or limits were invented.

Global customers, English-only offering, month-end invoice billing and genuine 24/7 support use the supplied owner facts. Processor acceptance/integration, multilingual, AI/forecasting, unlimited/performance, portal/reorder and unsupported tax-integration promises were removed or replaced with scoped workbook copy. No alternative processors, certifications, offices, clients or results were invented. Existing assets and visual styles remain; unverified testimonial blocks on Pricing and Demo are withheld.

Industry pages, the Industries hub, blogs, Contact and service-page rewrites remain deferred. Shared changes affect the footer anchor, default metadata/application schema, FAQ accessibility and optional CTA label. The Demo thank-you contact helper was also corrected as a narrowly related flow fix. No routes, form delivery implementation, analytics configuration, dependencies or lockfiles were changed.

## Code and local production checks

| Check | Result / evidence |
| --- | --- |
| Production build | `npm.cmd run build` — exit 0; compiled, TypeScript passed, 52 pages generated. See [build.log](build.log). |
| Changed-code lint | ESLint on all changed TS/TSX plus the browser QA script — exit 0, no errors; one pre-existing inline analytics warning. See [changed-files-lint.log](changed-files-lint.log). |
| Full repository lint | Initial `npm.cmd run lint` — exit 1, 14 existing errors and 67 warnings in unrelated files. This is **not** a full-lint pass. |
| Diff whitespace | `git diff --check` — exit 0. |
| Browser suite | `PASS` — exit 0. Command: `node scripts/verify-core-seo.mjs` against `next start --port 3100`. [Machine-readable results](qa-results.json). |
| Server and browser rendering | 5/5 pages checked for title/description, Open Graph/Twitter, canonical, robots, one H1/main, heading progression and exact hero copy. |
| Visible answers | 24/24 targets; Pricing expanded by keyboard with `aria-controls`/`aria-expanded`. |
| Internal links | 23/23 workbook contextual pairs; 29 distinct rendered internal destinations checked for HTTP success. Actual Home → Features click checked. |
| Mobile | 10/10 page/viewport combinations at 360px and 430px: overflow, H1/CTA visibility and loaded images. [Screenshots](screenshots/). |
| Canonical redirects | Local proxy requests simulate www, old hosts and insecure apex, preserving path/query and returning 301 to the preferred HTTPS host. Live infrastructure remains unverified. |
| Structured data | Server/DOM JSON-LD parses; one SoftwareApplication with consistent publisher ID, global description, no Offer, fabricated ratings/reviews or operating systems. No core FAQPage/QAPage added. External Schema Validator/Rich Results Test remains pending; parsing is not rich-result eligibility. |
| Crawl files | Local robots/sitemap checks; only the five meaningful core revision dates updated. No thank-you/private URLs added. |
| Controlled Demo flow | Required/invalid email checks, international inputs, mocked delivery failure and successful retry, success-only routing, consumed cookie and repeated/direct thank-you redirect. No real email sent. |

An initial browser run found a Features h2 → h4 skip. Inventory labels were corrected to h3 before the final build and suite. Visual mobile review also found the longer Home capability text clipped inside a fixed-height preview. The card now grows with its content, and the final suite checks that its text and controls fit. Next.js still emits an environment warning about an additional lockfile in the parent user directory; the production build succeeds.

## Required answer coverage

| Workbook ID | Page | Question | Local visible coverage |
| --- | --- | --- | --- |
| 1 | `/` | What is POS software? | Pass |
| 2 | `/` | What does a POS system do? | Pass |
| 3 | `/` | Who uses POS software? | Pass |
| 4 | `/features` | Can POS software manage inventory? | Pass |
| 5 | `/features` | Can POS software work without internet? | Pass |
| 6 | `/features` | Can POS software manage multiple stores? | Pass |
| 7 | `/features` | What reports should a business track in POS software? | Pass |
| 13 | `/features` | What is inventory management software? | Pass |
| 14 | `/features` | How does inventory software reduce stock problems? | Pass |
| 15 | `/pricing` | How much does POS software cost? | Pass |
| 16 | `/pricing` | What affects POS software pricing? | Pass |
| 17 | `/pricing` | Is POS hardware included in software pricing? | Pass |
| 18 | `/pricing` | How do I get a DigiNizam quote? | Pass |
| 19 | `/demo` | What happens in a POS software demo? | Pass |
| 20 | `/demo` | Who should book a POS demo? | Pass |
| 21 | `/demo` | What should I prepare for a POS demo? | Pass |
| 22 | `/about` | Who is DigiNizam? | Pass |
| 23 | `/about` | Does DigiNizam provide 24/7 support? | Pass |
| 24 | `/about` | Does DigiNizam serve customers globally? | Pass |
| 25 | `/about` | What industries does DigiNizam support? | Pass |
| 26 | `/features` | What is multi-store POS software? | Pass |
| 27 | `/features` | What is offline POS software? | Pass |
| 28 | `/` | How does POS software improve daily operations? | Pass |
| 30 | `/features` | Can POS software manage purchases and suppliers? | Pass |

## Changed application files

45 existing files changed. Each path links to its reviewable source; the evidence above covers the final rendered core pages.

| File | Requirement / change |
| --- | --- |
| [public/sitemap.xml](../../public/sitemap.xml) | F14/T06: real content revision date (2026-10-22) for only the five core pages; other entries unchanged. |
| [src/app/about/page.tsx](../../src/app/about/page.tsx) | F07/F08: four clean answers, global/English/24-hour support facts, contextual links and closing CTA. |
| [src/app/demo/page.tsx](../../src/app/demo/page.tsx) | One main landmark; pricing link reflects a discussion, preserving the existing route and form. |
| [src/app/layout.tsx](../../src/app/layout.tsx) | F01: global default/social title; existing English language, fonts, navigation and analytics preserved. |
| [src/app/page.tsx](../../src/app/page.tsx) | F08: four supplied Home answers, contextual industry link, supplied closing copy; one main landmark. |
| [src/app/pricing/page.tsx](../../src/app/pricing/page.tsx) | Owner correction: demo-first pricing metadata/answers and exact main CTA; no package promises; unverified testimonial withheld; optional FAQPage removed. |
| [src/components/Footer.tsx](../../src/components/Footer.tsx) | F01: shared Features anchor now describes POS and inventory features rather than restaurant-only inventory. |
| [src/components/about/AboutMission.tsx](../../src/components/about/AboutMission.tsx) | 03: mission and what-we-build copy; removes Pakistan-first positioning and unsupported leadership language. |
| [src/components/about/AboutTeam.tsx](../../src/components/about/AboutTeam.tsx) | 03/F17: supplied product-development/workflow copy replaces unverified technology-stack claims; same card layout. |
| [src/components/about/AboutValues.tsx](../../src/components/about/AboutValues.tsx) | 03: supplied practical product-development copy replaces the future-proof systems promise. |
| [src/components/about/AboutWhyUs.tsx](../../src/components/about/AboutWhyUs.tsx) | 03/F01/F05: support, configuration, global English offering and industry scope; removes hundreds-of-branches and local-market promises. |
| [src/components/common/SiteCTA.tsx](../../src/components/common/SiteCTA.tsx) | Optional CTA label permits the exact pricing CTA; existing callers retain their default behavior. |
| [src/components/demo/DemoForm.tsx](../../src/components/demo/DemoForm.tsx) | F11/F12/F17: correct helper and international placeholders; supplied preparation copy replaces anonymous testimonial; removes unconfirmed session duration. Delivery logic unchanged. |
| [src/components/demo/DemoHero.tsx](../../src/components/demo/DemoHero.tsx) | 03: exact supplied concise demo hero copy. |
| [src/components/demo/DemoSeoSections.tsx](../../src/components/demo/DemoSeoSections.tsx) | F07/F08: clean next steps and three answer targets; owner-confirmed pricing sequence; no conversion implementation notes in public text. |
| [src/components/demo/ThankYouContent.tsx](../../src/components/demo/ThankYouContent.tsx) | F11 supporting flow: contact the visitor at their supplied details; removes own-number confusion and unconfirmed response/session timing. |
| [src/components/features/FeaturesChef.tsx](../../src/components/features/FeaturesChef.tsx) | F05/03: supported staff/access configuration copy replaces unsupported per-chef timing/productivity claims. |
| [src/components/features/FeaturesCloud.tsx](../../src/components/features/FeaturesCloud.tsx) | F05/03: conditional offline scope and sync questions replace universal availability and zero-downtime claims. |
| [src/components/features/FeaturesHeroDetailed.tsx](../../src/components/features/FeaturesHeroDetailed.tsx) | F01: relevant global image alt; matching H1 and hero retained. |
| [src/components/features/FeaturesInventory.tsx](../../src/components/features/FeaturesInventory.tsx) | F05/03: qualified inventory/item/location controls replace infinite products, lag-free and unlimited-store claims; heading levels corrected. |
| [src/components/features/FeaturesKDS.tsx](../../src/components/features/FeaturesKDS.tsx) | F05/03: scoped order/kitchen/billing copy replaces precision promises, unverified named apps and automated deductions. |
| [src/components/features/FeaturesModules.tsx](../../src/components/features/FeaturesModules.tsx) | F05/03: purchase/supplier configuration copy replaces vendor portal and auto-reorder; normal section heading. |
| [src/components/features/FeaturesPageContent.tsx](../../src/components/features/FeaturesPageContent.tsx) | F08: all nine Features question targets, including missing offline definition; global context/CTA; one main landmark. |
| [src/components/features/FeaturesPowerful.tsx](../../src/components/features/FeaturesPowerful.tsx) | F05/03: supported industry-workflow copy replaces unverified loyalty, commission-free ordering and automated-alert promises. |
| [src/components/features/FeaturesRecipe.tsx](../../src/components/features/FeaturesRecipe.tsx) | F05/03: scoped industry/order/configuration copy replaces unverified automatic recipe costing and outcome guarantees. |
| [src/components/features/FeaturesSalient.tsx](../../src/components/features/FeaturesSalient.tsx) | F04/F05/03: English offering and scoped capabilities replace multilingual and unverified tax-integration claims. |
| [src/components/features/InventorySeoSections.tsx](../../src/components/features/InventorySeoSections.tsx) | F01/F07/03: global POS, reporting, branches and industry copy; removes editorial directions and localized generic anchors. |
| [src/components/home/AllIndustriesSection.tsx](../../src/components/home/AllIndustriesSection.tsx) | 03: supplied industry overview; direct existing industry routes retained. |
| [src/components/home/AwardBannerSection.tsx](../../src/components/home/AwardBannerSection.tsx) | F02: exact global multi-outlet heading/body; recognition label replaced; animated design retained, with literal word spacing in the DOM. |
| [src/components/home/BoostSales.tsx](../../src/components/home/BoostSales.tsx) | F03/F05/03: supplied orders/billing copy replaces payment acceptance, loyalty/commission and sales-outcome promises. |
| [src/components/home/ComplianceStripSection.tsx](../../src/components/home/ComplianceStripSection.tsx) | F03/F05: confirmed support, English/global offering, month-end invoices and setup copy replace processor and unverified tax-integration claims. |
| [src/components/home/HeroSection.tsx](../../src/components/home/HeroSection.tsx) | F05: unsupported AI label replaced; already-correct H1, hero and CTA behavior retained. |
| [src/components/home/HomeAiSection.tsx](../../src/components/home/HomeAiSection.tsx) | F05/03: supplied multi-store, stock, reporting and confirmed support replace forecasting/reorder/AI claims; layout retained. |
| [src/components/home/HomeCapabilitiesSection.tsx](../../src/components/home/HomeCapabilitiesSection.tsx) | F01/03: supplied platform, billing, inventory, orders and reports copy with relevant Features link. |
| [src/components/home/SmartFeaturesGridSection.tsx](../../src/components/home/SmartFeaturesGridSection.tsx) | F03/F05/03: scoped workbook capability copy replaces payment acceptance, unlimited invoicing and loyalty promises; interactive behavior retained. |
| [src/components/home/Testimonials.tsx](../../src/components/home/Testimonials.tsx) | F02: this component is a business banner; exact global final heading and scoped body replace Pakistan-first/outcome claims. |
| [src/components/home/Whatwedo.tsx](../../src/components/home/Whatwedo.tsx) | F05/03: supported inventory copy replaces full-supply-chain/real-time assertion. |
| [src/components/home/Whoweare.tsx](../../src/components/home/Whoweare.tsx) | F01/03: supplied Why DigiNizam and practical product-development copy replace Pakistan-first and delivery/cost assertions. |
| [src/components/pricing/PricingBenefits.tsx](../../src/components/pricing/PricingBenefits.tsx) | Owner correction: questions to confirm software, hardware and agreed terms; confirmed invoicing/support; no fee/cancellation/backup guarantees. |
| [src/components/pricing/PricingHero.tsx](../../src/components/pricing/PricingHero.tsx) | Owner correction: demo-first hero without fixed plans. |
| [src/components/pricing/PricingPlans.tsx](../../src/components/pricing/PricingPlans.tsx) | Owner correction: existing three-card visual becomes demo, requirements discussion and agreed pricing; exact main CTA; all prices/limits/packages removed. |
| [src/components/pricing/PricingSeoSections.tsx](../../src/components/pricing/PricingSeoSections.tsx) | 03 + owner correction: inclusions, hardware, cost factors, branches and agreed-pricing process; month-end invoicing retained. |
| [src/components/seo/JsonLd.tsx](../../src/components/seo/JsonLd.tsx) | T09: escape less-than characters when serializing JSON-LD, following installed Next.js guidance. |
| [src/components/seo/SeoFaq.tsx](../../src/components/seo/SeoFaq.tsx) | T07/T12: semantic headings, linked controls/panels, native hidden state and keyboard expansion; shared visual treatment retained. |
| [src/lib/seo.ts](../../src/lib/seo.ts) | F10: global application description and consistent entity IDs; incomplete Offer and unverified operating systems removed; canonicals retained. |

Added review/QA files: this report, `build.log`, `changed-files-lint.log`, `qa-results.json`, screenshots, and `scripts/verify-core-seo.mjs` with `scripts/seo-core-expectations.json`. Expectations derive from workbook tabs 03/04/05 and the later owner pricing correction.

## Pending owner, external and live verification

- **Product fact gates:** exact offline/device/module support, synchronization, inventory/variant controls, staff permissions, supplier/receiving functions and kitchen behavior still need product-owner evidence. The marketing repository is not proof of the POS backend. Copy uses the workbook’s scoped supported-configuration wording; this is no blanket capability approval. Unproven forecasting, auto-reorder, portal, unlimited/performance and integration promises were withheld.
- **Commercial details:** setup/maintenance fees, cancellation terms and daily backups remain unconfirmed and are not presented as approved facts. Confirm hardware and agreed terms with each customer.
- **First-hand evidence:** owner approval/provenance for existing product imagery and any testimonial/customer evidence. No new case study, client identity, statistic or certification added. Withheld testimonials require approval before reuse.
- **Form/analytics:** real EmailJS delivery and receipt, real GA4 success event firing exactly once, GA4 property-side thank-you conversion configuration, Clarity/consent behavior and no-PII network validation. Analytics and real mail were blocked in local controlled tests. The existing demo flow counts leads from the GA4 thank-you configuration, not a newly introduced site-code event.
- **Production:** normal deployment review/approval, deployment URL/version/date, cache/build alignment, live rendered five-page copy/metadata/schema/links/robots/sitemap, live www/HTTP/legacy-host redirects, and production form QA. No live pass is claimed from localhost.
- **Search/performance:** GSC URL Inspection/selected canonicals/indexing, fresh GSC/GA4 baselines and post-recrawl comparison, external schema validation, PageSpeed/CrUX/CWV, full contrast/screen-reader/device audit. Local screenshots and loaded-image checks are not a CWV or comprehensive accessibility pass.
- **Deferred scope:** Week 3 Industries hub mismatch and industry/regulatory/certification evidence cleanup (especially Pharmacy); six later AEO questions (8–12 and 29); later blog review. The three footer service routes are existing Coming Soon pages. Their intended indexability, distinct metadata/canonicals and sitemap inclusion need a supporting follow-up decision; they are not described as broken links.
- **Repository lint debt:** existing errors in `next.config.ts`, `Hero.tsx`, `ThemeToggle.tsx`, `StickyDemoBar.tsx`, `ContactOfficeInfo.tsx`, `ThankYouGate.tsx`, unused Home modules (`AnalyticsSection`, `InventorySection`, `OrderManagementSection`, `SmartPosSection`), withheld `PricingTestimonial.tsx`, and `SalonPageContent.tsx`. No unrelated cleanup was folded into this scope.

## Reproduce local browser QA

Use a local production server and an external Playwright install (the application dependencies are unchanged). The test refuses non-local origins and mocks all outbound delivery/analytics.

```powershell
npm.cmd run build
npm.cmd run start -- --port 3100
# In another shell, point to an installed Playwright package:
$env:PLAYWRIGHT_MODULE_PATH = Join-Path $env:TEMP "diginizam-seo-qa\node_modules\playwright"
# Optional if using an existing compatible Chromium executable:
$env:SEO_QA_CHROMIUM_EXECUTABLE = "<path-to-chrome.exe>"
node scripts/verify-core-seo.mjs
```

The browser package was installed outside the repository for this task. No automatic deployment, ranking improvement, indexing, AI citation or all-site SEO completion is claimed.
