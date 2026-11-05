# Owner confirmations: implementation and ISO 9001 report — 4 November 2026

Branch `fix-seo/aeo`. These changes are uncommitted, on top of local commits `1acc0e1` and `23ed4ed`. Nothing was pushed or deployed.

## 1. ISO 9001 report (no changes made)

Scope:
- **Source:** full-text search of the repository, excluding `node_modules` and `.next`, for `ISO 9001`, `ISO-9001`, `ISO9001`, `ISO <number>`, `ISO certified`, `certified` and `certification`.
- **Rendered HTML:** all 42 sitemap URLs plus the 6 noindex placeholder pages, checked on the **local build** and on the **live site** (`https://diginizam.com`, read-only). The check covers visible content, `<title>`/meta tags, JSON-LD and the embedded page data.

| Where | ISO 9001 mentions | Other certification wording |
|---|---|---|
| Source files (`src/`) | **None** | None in customer-facing claims. Unrelated feature text only: "tax certificates" (HR self-service portal) and "certifications" in staff records (`StaffSection.tsx`, not rendered on any page). The `ProductCertificates` component name remains, but it renders only support facts (24/7 support, global, English, month-end invoices). |
| Local build, 48 pages | **None** | None |
| Live site, 48 pages | **None** | **1 item:** `https://diginizam.com/partner`, partner benefits card (body HTML): "Certified partner program — Training and certification so you sell with confidence." Source on the live version: `src/components/partner/PartnerPageContent.tsx` (`benefits` array). This branch already replaced it in stage 1 (commit `1acc0e1`) with "Product demos". It is a partner-program claim, not an ISO claim; flagged for your review. |
| Docs (`docs/seo-review/REVIEW.md`) | Historical note that an "ISO 9001 certified" badge was **removed** in October | Internal documentation, not published |

**Conclusion:** no ISO 9001 claim exists on the live site or on this branch, so nothing awaits your review for ISO. No certification claim was added.

## 2. Confirmations applied

| Item | What changed | Files |
|---|---|---|
| A. Offline | Hedged "offline-ready in supported setups / confirm which tasks…" wording replaced with: **all modules in the DigiNizam app keep working without internet, data syncs automatically with the server when the connection returns, and offline working applies to the app, not the web portal.** Applied on Features (2 Quick answers, offline section, advantages list), the homepage capability card, the Retail FAQ, and the Restaurant and Cafe sections and FAQ. Generic buyer advice in blog posts is unchanged. | `features/FeaturesPageContent.tsx`, `features/FeaturesCloud.tsx`, `features/FeaturesSalient.tsx`, `home/SmartFeaturesGridSection.tsx`, `retail/RetailPageContent.tsx`, `restaurant/RestaurantPageContent.tsx`, `cafe/CafePageContent.tsx` |
| B. Support email | **Unchanged.** Owner confirmed `diginizam0@gmail.com` is correct (4 Nov 2026). It is used on Contact, the Partner form error message and the Organization schema. | — |
| C. Partner and HR | Footer links removed (commented in code). Pages stay live (HTTP 200) and in the sitemap. The Careers/Hiring link stays. `/partner` is still reachable from the navbar "Contact" menu. | `components/Footer.tsx` |
| D. X link | Unchanged | — |
| E. Privacy policy | Unchanged | — |
| F. Restaurant expense tracking | Restaurant "Reports & Analytics" section renamed "Reports, Analytics & Expense Tracking", with an expense paragraph. "Expense tracking" added to the POS-vs-management FAQ. New FAQ: "How can a restaurant track daily sales and expenses?" FAQPage schema follows the same content. | `restaurant/RestaurantPageContent.tsx` |
| G. Snooker booking | Table Management now says "staff-recorded reservations and bookings". The "Online table booking (Planned)" card became "Online customer self-booking", badge **Custom option**: not available; staff manage reservations; can be built as a custom feature for an additional charge. Section retitled "Planned Modules and Custom Options". Both snooker FAQs and two snooker blog posts updated to match. | `snooker/SnookerPageContent.tsx`, `lib/blog/posts/what-is-snooker-club-management-software.ts`, `lib/blog/posts/snooker-table-session-management.ts` |
| H. ISO 9001 | Report above; nothing changed | — |

## 3. Verification (local production build, `next start -p 3200`)

- Build and TypeScript pass. ESLint shows no errors on the changed files.
- Crawl:
  - 49 HTML pages; 0 broken internal links; 0 duplicate titles or descriptions; 0 canonical, H1 or JSON-LD errors.
  - All 42 sitemap URLs return 200.
- Old offline and online-booking wording no longer renders on any page. ISO rescan: 0 hits.
- `/partner` and `/services/hr-digitalization` return 200 but now have 0 crawlable internal links, as expected after hiding them. `/hiring` keeps sitewide links.
- Snooker and restaurant pages: visually checked on mobile, with no overflow and no console errors.

## 4. Decisions needed

1. ~~Email~~: resolved, `diginizam0@gmail.com`.
2. ~~Partner and HR in the sitemap~~: resolved (owner approved). Both pages are `noindex, follow`, removed from `public/sitemap.xml` (42 → 40 URLs), still HTTP 200 and crawlable (robots.txt allows them), with self-canonicals. At launch: remove `index: false` / `follow: true` in `src/app/partner/page.tsx` and `src/app/services/hr-digitalization/page.tsx`, re-add both sitemap entries, and restore the footer links.
3. **Section 2 ("Remaining Technical…") of your message was cut off.** Please resend it.
4. **Deployment:** not done. When ready, the branch needs your approval to push, review and merge into `main` and deploy. The `www` TLS fix in the Vercel domain settings is separate from the code.
