# Final review: Partner, HR Digitalization, www TLS and Git state — 4 November 2026

Branch `fix-seo/aeo`: 3 local commits (`1acc0e1`, `23ed4ed`, `65d3a85`) plus the uncommitted changes below. **Nothing has been pushed, merged or deployed.**

## 1. Partner page (`/partner`)

| Check | Result |
|---|---|
| HTTP / indexing | 200; `index, follow`; canonical `https://diginizam.com/partner`; no `X-Robots-Tag`; in the sitemap |
| Header | Contact menu → "Become a Partner" (desktop and mobile; verified) |
| Footer | Quick Links → "Become a partner" (restored) |
| Title / description | "Become a DigiNizam Partner \| Reseller & Consultant Program" (58) / 159 characters, unique |
| Headings | One H1 ("Grow with DigiNizam"), then H2/H3 in order |
| "Certified partner program" claim | **Live site still shows it.** The repository has no evidence of a formal certification program. This branch already replaces it with: *"Product demos — Review the DigiNizam platform in a demo before you present it to your clients."* It takes effect when the branch is deployed. |
| Response-time promise | "within two business days" was replaced earlier with neutral wording (it takes effect on deploy) |
| Form | Tested at 375 px with the EmailJS request **stubbed** (no email sent): empty submit is blocked by required fields; a failed send shows "Could not submit. Email diginizam0@gmail.com directly."; a successful send shows "Application received…" and resets the fields. Form code is unchanged. |
| Layout | No horizontal overflow at 375 px or 1024 px; no console errors |

**Needs your confirmation (not changed, since the claims are existing and cannot be verified from the code):** the other three benefit cards describe program commitments:
- "Territory support — Co-branded materials and local market guidance"
- "Recurring revenue — Earn on implementations, subscriptions and add-on services"
- "Dedicated channel team — Pre-sales help, demo support and partner onboarding"

Please confirm that each is offered. If any is not, I'll replace it with an accurate description.

## 2. HR Digitalization page (`/services/hr-digitalization`)

| Check | Result |
|---|---|
| HTTP / indexing | 200; `index, follow`; self-canonical; in the sitemap |
| Header | **New** "Services" menu (desktop and mobile) → Software Solution, Web Development, HR Digitalization |
| Footer | Services → "HR Digitalization" (restored) |
| Structured data | **Added** `Service` JSON-LD (name, serviceType, description, url, provider → Organization `@id`), matching visible content |
| Headings | H1 "HR Digitalization" → 5 H2 → H3 cards; outline is clean |
| Mobile | No overflow at 375 px; all images have alt text; no paragraph under 12 px; no console errors |

**Fixes made:**

| Problem | Before | After |
|---|---|---|
| Template leftover | "GEN HRIS Services" | "DigiNizam HRIS Services" |
| Grammar | "has evolved an advanced HR software … to make sure efficient management of human assets" | "has developed HR software known as a Human Resource Information System (HRIS). It brings employee records, HR workflows and personnel data together…" |
| Contradiction with site-wide "online payment integration is not available" | "automated salary disbursements"; badge "One-Click Salary Disbursal & Tax Compliance" | "payroll calculations, deductions and payslips"; badge "Payroll Calculations & Payslips" |
| Unverified compliance claim | "compliance with labour regulations across different regions" | "Confirm your payroll rules and local requirements with the team during setup." |
| Unverified integrations | "Integrated with biometric machines, facial recognition, and mobile check-in"; badge "Biometric & Shift Synchronization" | "confirm which attendance devices, such as biometric machines, your setup will connect to"; badge "Shift & Attendance Records" |
| Proposal-style placeholder headings | "Project Description & Scope of Work"; "We Convert Your Idea Into a Reality" | "HR Modules for Every Stage of Employment"; "Digitize Your HR Operations" |
| Overstated card copy | "360-degree … automated increment calculation tools"; "Job posting automation" | "performance evaluations and increment calculations"; "Job postings, applicant tracking…" |
| Readability | Body and card text at 11 px | 12–13 px, matching sibling paragraphs |
| Alt text did not match the images | "DigiNizam HRIS Service"; "Payroll Software"; "Time and Attendance" | Accurate descriptions (below) |
| Lint | 3 unused imports | Removed |

**Needs your action — images (not replaced; new assets are needed):**
1. `public/genhrisservice.jpg` shows **another company's product** ("iFirma", a Polish invoicing app, with PLN prices) on a laptop and tablet, under "DigiNizam HRIS Services". Replace it with a DigiNizam HRIS screenshot.
2. `public/timeattendencehr.png` is a DigiNizam **hiring/employer dashboard** ("Country: India", AI screening, sample candidates) shown in the Time & Attendance section. Use an attendance screenshot there, or move this image to the Recruitment card. Also confirm that the AI features it shows exist.
3. `public/payrollhr.jpg` (calculator and euro notes) is a generic stock photo. It's acceptable, but a payroll screen would be stronger.

Kept as-is: page purpose, the Pakistan focus in the title/description, Value/Mission/Vision (the vision is aspirational), the hero video, and the `/contact` CTA.

## 3. Header and footer status (verified in the rendered build)

| Link | Desktop header | Mobile header | Footer |
|---|---|---|---|
| Partner | Contact → Become a Partner | Contact → Become a Partner | Quick Links → Become a partner |
| HR Digitalization | Services → HR Digitalization (new) | Services → HR Digitalization (new) | Services → HR Digitalization |
| Hiring | Contact → We are hiring | Contact → We are hiring | Quick Links → Careers |

The header fits at 1024 px with the extra item. The Services menu opens on hover or click. Placeholder services (Digital Marketing, System Support, Training) are not in the header.

## 4. Sitemap and indexing

- `public/sitemap.xml`: **42 URLs**, all HTTP 200 and all indexable. `/partner` and `/services/hr-digitalization` are restored in their original positions (`lastmod` 2026-11-04).
- `robots.txt`: `Allow: /` plus the sitemap URL.
- `noindex` remains only on the intended placeholder pages: `/support`, `/terms`, `/clientele`, the 3 placeholder services, `/contact/thank-you`, and `/thank-you` (gated redirect with an `X-Robots-Tag`).
- All canonicals are absolute `https://diginizam.com/...` and self-referencing.

## 5. www SSL/TLS diagnosis (read-only checks, 4 Nov 2026)

| Check | Result |
|---|---|
| Apex DNS | `diginizam.com` A `216.198.79.1` (Vercel) |
| www DNS | `www.diginizam.com` CNAME `cname.vercel-dns.com` (**correct**) |
| Nameservers | `solar.dns-parking.com`, `lunar.dns-parking.com` (Hostinger) |
| CAA | No CAA on the apex. www follows Vercel's CAA, which allows `letsencrypt.org`, so CAA is **not blocking** issuance |
| Certificate served for `diginizam.com` | CN=diginizam.com, SAN **`diginizam.com` only**, Let's Encrypt YR2, valid 11 Oct 2026 → 9 Jan 2027 |
| Certificate served for `www.diginizam.com` | **The same certificate, SAN `diginizam.com` only**, so browsers report `ERR_CERT_COMMON_NAME_INVALID` and curl reports `SEC_E_WRONG_PRINCIPAL` |
| `http://diginizam.com/partner?x=1` | 308 → `https://diginizam.com/partner?x=1` |
| `https://diginizam.com/partner?x=1` | 200 (HSTS `max-age=63072000`) |
| `http://www.diginizam.com/partner?x=1` | 308 → `https://www.diginizam.com/partner?x=1` → **TLS failure** |
| `https://www.diginizam.com/partner?x=1` (ignoring the cert) | **307** → `https://diginizam.com/partner?x=1` (path and query kept) |
| Redirect loops | None |
| Mixed content | 0 `http://` asset references on `/`, `/partner`, `/services/hr-digitalization`, `/products/restaurant` |

**Conclusion:** DNS is correct, and Vercel already treats `www` as a redirect to the apex. Vercel simply has **no certificate issued for `www.diginizam.com`**. The redirect is also **307 (temporary)** rather than 308. This cannot be fixed in code. No DNS or Vercel settings were changed.

**Exact Vercel steps (owner or admin of the Vercel team):**
1. Vercel Dashboard → the DigiNizam website project → **Settings → Domains**.
2. Find `www.diginizam.com`.
   - If it shows **Invalid Configuration** or **Pending Verification**, follow the instruction shown (usually: confirm the CNAME `cname.vercel-dns.com`, already correct, then click **Refresh**).
   - If a **TXT verification** record is requested (the domain is linked to another Vercel account/team), add that TXT record at Hostinger DNS, then click **Verify**.
3. Open **Edit** on `www.diginizam.com` → set **Redirect to** `diginizam.com` with status **308 Permanent Redirect**, then **Save**.
4. If the certificate still isn't issued after the domain shows "Valid Configuration": remove `www.diginizam.com` from the project and add it again (choose "Redirect to diginizam.com", 308). With the CLI: `vercel certs issue www.diginizam.com`.
5. Wait about 1–10 minutes, then verify:
   - `curl -I https://www.diginizam.com/partner` should return `308` with `location: https://diginizam.com/partner`, with no certificate error.
   - Open `https://www.diginizam.com` in a private browser window; it should land on `https://diginizam.com/` with a padlock.
6. Optional after that: in Search Console, add a **Domain property** (`diginizam.com`) so both hosts are covered.

## 6. Git review

- **State before this round:** clean working tree; no staged changes; no untracked files. 3 commits ahead of `origin/fix-seo/aeo`; no deletions in any commit.
- **`origin/main`** has 1 commit not on this branch (`5cb0664` "fix auto text write animation", `AwardBannerSection.tsx` only). `git merge-tree` shows a **clean merge** with no conflicts.
- **This round (uncommitted, 6 files):**
  - `public/sitemap.xml`: +2 entries
  - `src/app/partner/page.tsx`: noindex removed
  - `src/app/services/hr-digitalization/page.tsx`: noindex removed; Service JSON-LD added
  - `src/components/Footer.tsx`: 2 links restored
  - `src/components/Navbar.tsx`: Services menu, desktop and mobile
  - `src/components/services/HrDigitalizationContent.tsx`: content, alt-text and readability fixes
- **Whole branch vs `origin/main`:** 44 files, +843 / −145.

**Approved items re-checked in the final build:**

| Item | Status |
|---|---|
| Offline claims | App-only wording; all modules offline with auto-sync; "not the web portal" |
| Restaurant expense tracking | Present (Reports section + 2 FAQs) |
| Snooker booking | Staff-managed; online self-booking shown as a paid "Custom option" |
| Support email | `diginizam0@gmail.com` everywhere |
| ISO 9001 | 0 mentions (source, local build, live) |
| Privacy policy | Unchanged |
| X link | Unchanged |
| Structured data | Organization/WebSite/SoftwareApplication graph; BlogPosting/Breadcrumb/FAQ on posts; FAQPage on industry pages; Service on HR |

## 7. Build and test results (local production build, `next start -p 3200`)

| Check | Result |
|---|---|
| `npm run build` | PASS (58 static pages) |
| TypeScript (`tsc --noEmit`) | PASS |
| ESLint on changed files | PASS, 0 errors and 0 warnings |
| Full crawl | 49 HTML pages; 0 broken internal links; 0 links to redirects; 0 duplicate titles or descriptions |
| Canonicals | All self-referencing and absolute |
| Sitemap | 42/42 URLs return 200 and are indexable; no noindex URL in the sitemap |
| Robots / noindex | Partner and HR `index, follow`; placeholders `noindex` as intended |
| JSON-LD | All blocks parse on all pages |
| Mobile 375 px | Partner and HR: no overflow; menus work |
| Desktop 1024 px | Header fits; Services and Contact menus work |
| Console | No errors on Partner or HR (fresh tab) |
| Partner form | Stubbed submit: validation, error and success paths PASS |

Not run: real EmailJS delivery (would send a real enquiry), and Lighthouse on the local build.

## 8. Remaining items needing your approval

1. Confirm the 3 Partner benefit cards (§1).
2. Provide replacement images for the HR page (§2): the iFirma screenshot is the priority.
3. Vercel `www` certificate and 308 redirect (§5): a dashboard action.
4. Earlier open items still apply:
   - compress the 22.5 MB restaurant video;
   - connect Search Console;
   - Capterra/GetApp/G2 listings;
   - home LCP render-delay investigation.
5. Approval to commit the 6 uncommitted files.

## 9. Deployment steps (do not run until approved)

1. Commit this round on `fix-seo/aeo`:
   ```bash
   git add -A && git commit -m "Restore Partner/HR visibility and indexing; add Services menu; HR page fixes"
   ```
2. Bring in `main`'s extra commit (clean merge confirmed):
   ```bash
   git merge origin/main
   ```
3. Rebuild and re-test locally:
   ```bash
   npm run build && npx next start -p 3200
   ```
4. Push the branch and open a PR into `main`:
   ```bash
   git push origin fix-seo/aeo
   ```
   Review the Vercel **Preview** deployment URL: header menus, `/partner`, `/services/hr-digitalization`, forms, and `/sitemap.xml`.
5. Merge the PR into `main`. Vercel then deploys production automatically, if production is linked to `main`.
6. After deploy:
   - check `https://diginizam.com/sitemap.xml` (42 URLs), `/partner` and `/services/hr-digitalization` (view-source `robots` = `index, follow`);
   - submit the sitemap in Search Console;
   - run the Rich Results Test on `/`, `/products/restaurant` and one blog post.
7. Separately, complete the Vercel `www` steps in §5 and re-run the curl checks.
