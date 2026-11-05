# DigiNizam deep global SEO, keyword and competitor research — 4 November 2026

Second-stage research on branch `fix-seo/aeo`. Stage-1 work (see `AUDIT-2026-11-04.md`) is preserved in local commit `1acc0e1` (1 ahead of origin, not pushed). This stage added 4 small source edits, left uncommitted. Nothing was committed, pushed, deployed or uploaded.

**Data honesty:** no search volumes, keyword difficulty, rankings, traffic or backlink counts appear in this report, because no tool that measures them was available (see §15). Demand evidence comes from Google Autocomplete (real queries, no volumes) and from what search results show. Performance numbers are real Lighthouse runs from PageSpeed Insights.

---

## 1. Executive summary

1. **DigiNizam has almost no off-site footprint.** Web searches for `DigiNizam POS`, `"DigiNizam" -site:diginizam.com` and `diginizam.com` returned **no** results about DigiNizam: no directory listings, reviews, press or mentions. This is the biggest gap. On-page work cannot build an entity that search engines and AI answer engines cannot corroborate.
2. **Head terms are owned by aggregators and global brands.** "Best restaurant management software" and "retail POS software" results are Capterra, Software Advice, GetApp, G2, FitGap and vendor roundups (Toast, Square, Lightspeed, TouchBistro, SevenRooms, Nory). A new domain will not realistically rank for these soon.
3. **Two niches are realistic.**
   - **Snooker / pool club software.** The results are thin: a few small products (CueFlow, CueDesk, VIP Snooker, Syscom Sportsphere, CafeTimer, Chalkboard), mostly visible through **Capterra/GetApp/Software Advice listings** rather than strong websites. DigiNizam already has the deepest snooker content of any site seen, with a product page plus three 1,600-word guides.
   - **Pakistan-modified queries.** Autocomplete shows active demand ("best pos software in pakistan", "pos software price in pakistan", "retail pos software in pakistan", "restaurant pos in pakistan", "inventory management software in pakistan"). Local competitors (Oscar POS, Moneypex, HysabOne, CORN POS) publish dedicated Pakistan pages, and the Lahore office makes this a legitimate market for DigiNizam.
4. **Performance is good in the lab; there is no field data.** Mobile Performance scores were 91–98, CLS 0 everywhere and TBT 30–140 ms. LCP is **3.2 s on the homepage** (above the 2.5 s "good" line), caused by an **1,830 ms element render delay**, not image download. CrUX returned **"No Data"** for every URL, so Core Web Vitals pass/fail **cannot be stated**.
5. **Search Console was not accessible.** The browser's Google account has no DigiNizam property. Indexing, queries, CTR and cannibalization by real data are **not verified**.
6. **Implemented this stage (small, evidence-based):** 2 new restaurant FAQs, 2 new snooker FAQs plus FAQPage markup on the snooker page, and fixed a triple-duplicated H2 on `/features`.

---

## 2. Keyword research

**Method:** Google Autocomplete (`suggestqueries.google.com`) for 9 seed terms × 8 modifiers × 3 markets (US, GB, PK), giving 531 suggestion lines, plus SERP inspection. "Markets" lists where the suggestion appeared. **Volume and KD: not available for any keyword.** Opportunity is a qualitative judgement based on who currently ranks.

### A/B. Restaurant management and restaurant POS software

| Keyword | Type / intent | Markets | Who ranks (observed) | Opportunity | Target URL |
|---|---|---|---|---|---|
| restaurant management software | Primary, commercial | US, GB, PK | Capterra, Software Advice, vendor roundups | Low | `/products/restaurant` |
| restaurant pos software | Primary, commercial | GB, PK | Aggregators, Toast/Square | Low | `/products/restaurant` |
| what is restaurant management software / system | Informational question | US, GB, PK | Vendor blogs | Medium | `/blog/what-is-a-restaurant-pos-system` (+ restaurant FAQ) |
| what is restaurant pos (system) / what is pos in restaurant | Informational question | US, GB, PK | Vendor blogs | Medium | `/blog/what-is-a-restaurant-pos-system` |
| how to use restaurant pos system | Informational | US, GB, PK | — | Medium | `/blog/what-is-a-restaurant-pos-system` |
| restaurant pos and management system; POS vs restaurant management software | Comparison | US, GB, PK | nory.ai, onehubpos, G2 (vendor content) | Medium | `/products/restaurant` FAQ (added); possible blog |
| restaurant pos with inventory management | Commercial long-tail | US, GB, PK | Vendor pages | Medium | `/products/restaurant` |
| restaurant inventory management software (free) | Commercial | US, GB, PK | Vendors | Medium | `/blog/restaurant-inventory-management-reduce-food-waste` |
| restaurant pos software price / how much are restaurant pos systems | Commercial | US, GB, PK | Vendors, aggregators | Medium | `/pricing`, `/blog/pos-software-pricing-guide` |
| restaurant pos in pakistan; restaurant pos pakistan | Country commercial | US, GB, PK | oscar.pk (≈10 posts), Moneypex, HysabOne, CORN POS | **High (local)** | `/products/restaurant` (has Pakistan FAQ) |
| restaurant pos software free / free download | Transactional (free) | US, GB, PK | Free tools | Not a fit (no free plan published) | — |
| cafe pos free; pos software for cafe | Commercial | US, GB | Vendors | Low–medium | `/products/cafe` |

### C/D. Retail management and retail POS software

| Keyword | Type / intent | Markets | Opportunity | Target URL |
|---|---|---|---|---|
| retail pos software / best retail pos software | Primary, commercial | US, GB, PK | Low (aggregators, Square, Lightspeed, Shopify) | `/products/retail` |
| retail management software / store management software | Primary, commercial | US, GB, PK | Low | `/products/retail` |
| what is retail pos software / what is pos system in retail | Informational | US, GB, PK | Medium | `/blog/what-is-retail-pos-software` |
| what pos system do most retailers use | Informational | US, GB, PK | Medium | `/blog/how-to-choose-retail-pos-software` |
| retail pos system for small business | Commercial long-tail | US, GB, PK | Low–medium | `/products/retail` |
| retail pos software in pakistan; pos software for retail shop in pakistan | Country commercial | US, GB, PK / PK | **High (local)** | `/products/retail` (Pakistan section exists) |
| retail shop management software | Commercial | US, GB, PK | Medium | `/products/retail` (FAQ exists) |
| pos system vs cash register | Comparison | US, GB, PK | Medium | `/blog/manual-billing-vs-retail-pos-software` |

### E. Inventory management software

| Keyword | Type / intent | Markets | Opportunity | Target URL |
|---|---|---|---|---|
| inventory management software | Primary | US, GB, PK | Very low (Zoho, Odoo, aggregators) | `/features` |
| what is inventory management software / what does it do | Informational | US, GB, PK | Medium | `/features` (Quick answers) |
| inventory management software for retail / retail inventory management software for small business | Commercial | US, GB, PK | Medium | `/blog/retail-inventory-management-software` → `/products/retail` |
| inventory management software for restaurants | Commercial | US, GB, PK | Medium | `/blog/restaurant-inventory-management-reduce-food-waste` |
| inventory management software for grocery store / supermarket | Commercial | US, GB, PK | Medium | `/products/supermarket` |
| inventory management software for pharmacy | Commercial | GB, PK | Medium | `/products/pharmacy` |
| inventory management software in pakistan / price in pakistan | Country commercial | PK / US, GB, PK | **High (local)** | No dedicated page; candidate |
| inventory management software vs erp | Comparison | US, GB, PK | Medium | Content gap |

### F. Snooker club management software

| Keyword | Type / intent | Markets | Who ranks | Opportunity | Target URL |
|---|---|---|---|---|---|
| snooker club management software | Primary, commercial | US, GB, PK | Capterra/GetApp/Software Advice listings for CueFlow on 8+ country domains; CueDesk; Syscom; Vyrox | **High** | `/products/snooker` |
| snooker club software / software for snooker club | Commercial | US, GB, PK | Same | **High** | `/products/snooker` |
| snooker club billing software | Commercial long-tail | US, GB, PK | Same | **High** | `/products/snooker` |
| snooker club management software free | Transactional (free) | US, GB, PK | — | Not a fit | — |
| pool hall / billiards table timer billing software (semantic) | Commercial | SERP check | CueFlow, CafeTimer, Chalkboard, getunion, SambaPOS forum | **High** — DigiNizam pages say "snooker" not "pool/billiards" in titles | `/products/snooker` (body mentions pool halls) |
| snooker club software Pakistan | Country | SERP check | No Pakistan-specific product found; Arab News shows active club scene | **High (local)** | `/products/snooker` |
| snooker table price in pakistan; snooker table for sale … | Hardware/shopping | PK | OLX, Daraz | Not a fit (not DigiNizam's product) | — |

### G. Business management software

| Keyword | Type / intent | Markets | Opportunity | Target URL |
|---|---|---|---|---|
| business management software / for small business | Primary | US, GB, PK | Very low (generic, dominated) | `/` |
| what is business management software | Informational | US, GB, PK | Low | `/` Quick answers |
| best business management software in pakistan | Country commercial | US, GB, PK | Medium (local) | `/` or a future Pakistan page |

### H. Industry-specific solutions

| Keyword (autocomplete-observed) | Target URL | Note |
|---|---|---|
| pos software for pharmacy | `/products/pharmacy` | Claims were heavily restricted in stage 1; keep factual |
| pos software for supermarket / grocery store | `/products/supermarket` | |
| pos software for cafe | `/products/cafe` | |
| pos software for nail salon (US) | `/products/salon` | Salon page targets salon/spa billing |
| pos software for mobile shop (PK) | none | Gap; only if the product supports it (owner to confirm) |

---

## 3. Competitor analysis

Only facts observed on the pages or results cited are listed. No traffic or backlink data was available.

| Competitor | Segment / market | Observed structure and strategy | Positioning / claims seen | Relevance to DigiNizam |
|---|---|---|---|---|
| Toast, Square, Lightspeed, TouchBistro, Clover, Shopify POS | Global restaurant / retail | Dominate "best … software" roundups (therestauranthq, SevenRooms, Homebase, FitGap) | Payments-led, published pricing | Not a realistic ranking competitor; do not target their head terms |
| Nory (nory.ai) | Global restaurant ops | 2,300–2,600-word "restaurant management software vs POS" article with a ~20-row task table and 7 FAQs | Operations-layer vendor | Shows the format that wins comparison intent |
| Oscar POS (oscar.pk) | Pakistan restaurant / retail | ≥10 Pakistan-targeted blog posts (e.g. "Best Restaurant Management Systems in Pakistan", ~1,500 words, 10 FAQs; "How Does a Restaurant POS System Work in Pakistan?"); solution pages; demo CTA | FBR/SRB integration (other posts), PRA receipts, cloud, multi-branch; no prices | Direct local competitor; owns Pakistan informational queries |
| Moneypex (moneypex.com/pk) | Pakistan retail / restaurant / pharmacy | `/pk/` subfolder with industry pages (restaurant, retail, pharmacy, mobile shop, distribution, manufacturing) and a dedicated `/pk/fbr` page | **Published pricing (PKR 2,500/month)**, 7-day trial, offline selling, FBR Tier-1 / PRA / SRB integration, 24/7 support | Direct local competitor; strongest transactional page structure |
| HysabOne | Pakistan accounting/POS | Industry pages plus a Pakistan restaurant POS guide | Publishes indicative PKR price ranges; "#1" claims | Local |
| CORN POS | Pakistan restaurant / retail | Product site plus GoodFirms listing (founded 2012) | Restaurant-first | Local, older brand |
| CueFlow | Snooker / pool / billiards (India, Middle East) | Visibility mainly via **Capterra/GetApp/Software Advice listings on many country domains** and LinkedIn | Table timing, billing, canteen POS, tournaments, analytics; free trial | Closest snooker competitor |
| CueDesk | Snooker / billiards (cloud) | Capterra listing (from $8), Product Hunt | Memberships, multi-location, receipts | Snooker competitor |
| VIP Snooker, Syscom Sportsphere, Vyrox, CafeTimer, Chalkboard | Snooker / billiards | Single product pages | Online booking, offline timers, table maps | Niche competitors |

**What DigiNizam already does better:** snooker topical depth (product page with 21 documented modules and 3 long guides), honest capability scoping (planned vs available modules), and consistent industry pages with FAQs.

**Where DigiNizam is behind:**
- No third-party listings (competitors' snooker visibility comes from those listings).
- No published pricing (Moneypex publishes it; DigiNizam's model is pricing after a demo, which is a business choice).
- No Pakistan content cluster, after the 4 Nov removal of the Pakistan blogs (see §10).
- No POS-vs-management comparison content.

---

## 4. Google Search Console findings

**Not available.** A Google account is signed in to the browser, but Search Console shows the "Add a website" welcome screen, so that account has no DigiNizam property. No property was added or verified.

These need GSC access (owner action):
- Indexed vs not-indexed pages and exclusion reasons; whether the 42 sitemap URLs are indexed.
- Sitemap processing status.
- Queries, impressions, clicks, CTR and average position; pages at positions 5–30.
- **Whether the removed Pakistan blog URLs** (`/blog/best-pos-software-for-restaurants-in-pakistan`, `/blog/pos-software-price-in-pakistan`, `/blog/how-to-choose-best-retail-pos-software-pakistan`, now 308-redirected to global posts) **had impressions.** This is the most important GSC question (§10).
- Real cannibalization between `/products/snooker` and `/blog/what-is-snooker-club-management-software`, and between `/` and `/features`.
- Google-selected canonical for `www` vs apex.

---

## 5. PageSpeed and Core Web Vitals

**Tool:** PageSpeed Insights web UI (Lighthouse 13.6.0, emulated Moto G Power, Slow 4G), run on the **live** site on 4 Nov 2026 at about 15:26–15:35 PKT. The keyless PSI API returned a daily-quota error, so the UI was used instead. Live pages do not yet include this branch's changes.

| URL (mobile) | Perf | FCP | LCP | TBT | CLS | SI | CrUX field data |
|---|---|---|---|---|---|---|---|
| `/` | 91 | 1.2 s | **3.2 s** | 30 ms | 0 | 4.2 s | No Data |
| `/products/restaurant` | 93 | 1.2 s | 2.8 s | 90 ms | 0 | 4.2 s | No Data |
| `/products/retail` | 98 | 0.9 s | 2.4 s | 60 ms | 0 | 1.4 s | No Data |
| `/products/snooker` | 98 | 0.9 s | 0.9 s | 140 ms | 0 | 2.5 s | No Data |
| `/blog/what-is-a-restaurant-pos-system` | 93 | 1.2 s | 2.9 s | 100 ms | 0 | 4.1 s | No Data |

Not run, because the session budget went to the pages above: desktop runs, `/features`, `/pricing`, `/demo`. Desktop is normally faster than mobile, but it is **not verified**.

**Findings:**
- **Home LCP 3.2 s.** The LCP element is the hero image `/hero-pos-terminal.webp` (`fetchpriority="high"`, 92 KB). Breakdown: TTFB 0 ms, resource load delay 230 ms, load duration 320 ms, **element render delay 1,830 ms**. The file arrives in about 0.55 s but paints late. The entrance animation is already transform-only, so the likely causes are main-thread work (hydration of client components) and paint cost (a large `drop-shadow` filter on the image plus a `blur-[72px]` glow). **Not changed:** this needs a local performance trace to confirm before editing the visual effect.
- Restaurant insights: render-blocking requests (≈490 ms estimated saving), unused JavaScript (≈125 KiB), 4 long main-thread tasks.
- **Restaurant hero video:** `/restaurant-hero.mp4` is 22.47 MB, autoplay/loop/muted, with no `poster`. Lighthouse does not score it as LCP, so the lab score stays at 93, but every visitor downloads it, which matters most for mobile data users. Recommended:
  - Re-encode with `ffmpeg -i restaurant-hero.mp4 -vf "scale=-2:720" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart restaurant-hero-720.mp4`; typically 1–3 MB for a short loop.
  - Optionally add a WebM/VP9 source.
  - Add a `poster` frame and `preload="metadata"`.
  - Delete the three unused byte-identical copies (`pharmacy-hero.mp4`, `supermarket-hero.mp4`, `restaurant1.mp4`).
  - ffmpeg is not installed on this machine.
- **Accessibility (restaurant page):** contrast failures, and the `<video>` has no captions track (decorative and muted, so `aria-hidden` is an option). Best Practices: console errors logged on the live page, plus missing security headers (HSTS, CSP, COOP, XFO).

---

## 6. AEO / GEO research

**Question sources:** Autocomplete question forms, the questions in the brief, and comparison-article FAQs (nory.ai, oscar.pk).

| Industry | High-value user questions | DigiNizam coverage before | Action |
|---|---|---|---|
| Restaurant | What is the difference between POS and restaurant management software? How does restaurant POS work? What is the best restaurant management software? What is KOT? | Partly (best-software, Pakistan FAQ; KOT section; blog) | **Added** difference and how-it-works FAQs (schema follows the visible FAQ) |
| Restaurant | How can a restaurant track daily sales and expenses? | Not covered. The restaurant page does not state expense features. | Not added: expense tracking for restaurants is unconfirmed. Owner to confirm. |
| Retail | What pos system do most retailers use? How do retailers manage inventory? What is retail shop management software? | Covered (retail FAQs + 4 retail guides) | None |
| Snooker | What software do snooker clubs use? How do clubs manage table sessions? How to track daily sales and expenses? | Sessions covered (FAQ + guide); "what software" and daily sales/expenses only in the blog | **Added** 2 FAQs and FAQPage markup (the page previously had a visible FAQ but no markup) |
| Entity | What is DigiNizam? Where is it based? Who is it for? | Added in stage 1 (home + About) | — |

**Entity readiness:** on-site entity data is now consistent (Organization/WebSite/SoftwareApplication, `sameAs`, Lahore, English, 24/7). AI engines and Google still have **no independent source** confirming DigiNizam (§1, §9). That limits citations more than any on-page change. No technique guarantees AI citations.

**Capability consistency issues still open:**
- Offline scope (Restaurant/Cafe vs Features).
- On the snooker page, "Table Management … reservations" (current) sits next to "Online table booking (planned)". Likely fine (in-house reservations vs online booking), but worth one line of clarification.

---

## 7. Content gap analysis

| Priority | Gap | Evidence | Recommendation |
|---|---|---|---|
| High | No POS-vs-restaurant-management comparison content | Autocomplete "restaurant pos and management system"; dedicated competitor articles | FAQ added. Next, a guide "Restaurant POS vs restaurant management software" with a task table, linking to `/products/restaurant` |
| High | No Pakistan cluster since 4 Nov | PK autocomplete; oscar.pk / Moneypex local pages | Decide after GSC data (§10) |
| High | Snooker page never says "pool hall" / "billiards" in title or H1 | SERPs for "pool hall billiards table timer billing software" show the same buyers | Owner decision: adding "Pool" to the H1/title is justified only if the product fits pool halls (the body already says "snooker clubs and pool halls") |
| Medium | `/features` sections repeat near-identical copy ("Explore retail billing and inventory." 3×) | Crawl / heading outline | H2s made distinct this stage. Copy rewrite needs product input |
| Medium | Thin pages | Words: `/partner` 149, `/hiring` 150, `/services/software-solution` 227, `/services/web-development` 244, `/industries` 310 | Expand with real service details from the owner |
| Medium | Inventory topic has no hub | "inventory management software for retail/restaurants/pharmacy/in pakistan" | `/features` covers it. Consider an inventory guide only once the product scope is confirmed |
| Medium | Restaurant daily sales and expense tracking | Brief + autocomplete | Only if the restaurant module includes expenses |
| Low | Pharmacy, supermarket, salon, distribution have no guides | Autocomplete "pos software for pharmacy / supermarket" | After the High items |
| Low | Weak CTAs on blog index ("Book a free demo") | — | Acceptable; leave |

**Cannibalization review (by content; no GSC data):**
- `/products/snooker` (H2 "What Is Snooker Club Management Software?") vs `/blog/what-is-snooker-club-management-software`. Intent differs (commercial vs informational) and they link to each other. Monitor in GSC.
- `/` vs `/features`. Home is the "POS software" target and Features is "POS & inventory features". No change.

**Separate strategies:**
- **Restaurant:** compete on long-tail comparison and how-it-works intent, plus Pakistan local intent. Do not chase "best restaurant management software".
- **Retail:** the retail cluster is complete (4 guides). Focus on internal links and small-shop / Pakistan long-tail.
- **Snooker:** treat it as the flagship niche. Get third-party listings, consider pool/billiards wording, and add a "how to choose snooker club software" checklist guide only once listings exist.

---

## 8. Keyword-to-URL mapping

| Primary keyword | One target URL | Supporting URLs |
|---|---|---|
| POS software | `/` | `/features` |
| POS and inventory management features | `/features` | — |
| restaurant POS software / restaurant management software | `/products/restaurant` | 4 restaurant guides |
| what is a restaurant POS system | `/blog/what-is-a-restaurant-pos-system` | — |
| how to choose restaurant POS software | `/blog/how-to-choose-restaurant-pos-software` | — |
| restaurant inventory management | `/blog/restaurant-inventory-management-reduce-food-waste` | `/products/restaurant` |
| POS software pricing / price | `/pricing` | `/blog/pos-software-pricing-guide` (quote comparison) |
| retail POS software / retail management software | `/products/retail` | 4 retail guides |
| what is retail POS software | `/blog/what-is-retail-pos-software` | — |
| retail inventory management software | `/blog/retail-inventory-management-software` | `/products/retail` |
| manual billing vs POS / POS vs cash register | `/blog/manual-billing-vs-retail-pos-software` | — |
| how to choose retail POS software | `/blog/how-to-choose-retail-pos-software` | — |
| snooker club management software | `/products/snooker` | 3 snooker guides |
| what is snooker club management software | `/blog/what-is-snooker-club-management-software` | — |
| snooker table session management / timing | `/blog/snooker-table-session-management` | — |
| snooker club sales and expense tracking | `/blog/snooker-club-sales-expense-tracking` | — |
| [industry] POS software (16 others) | `/products/[industry]` | `/industries` hub |
| industry POS solutions | `/industries` | — |

Internal linking re-check (crawl after this stage's build):
- 0 orphan indexable pages; 0 broken links.
- Hub pages get 48 internal links each, and guide pages get 3–7.
- Anchors are descriptive.
- 15 of 17 industry pages still get only 2–3 contextual links each, because the navbar dropdown links are not in the HTML until hover. Recommendation from stage 1 stands.

---

## 9. Backlink and authority opportunities

No backlink tool was available, so referring domains are **unknown**. Web search found **no** third-party mentions of DigiNizam.

Quality-first opportunities, in order:
1. **Gartner Digital Markets listings** (Capterra, GetApp, Software Advice; one free vendor listing covers all three). Evidence: these listings are the main way snooker competitors appear for "snooker club management software" across country domains. List the snooker product and the general POS product separately if allowed. Collect **genuine** reviews from real customers only.
2. **G2** and **GoodFirms** product profiles (CORN POS uses GoodFirms).
3. **Google Business Profile** for the Lahore office, if eligible (a real address is needed).
4. **Pakistan business and tech ecosystem:** P@SHA membership listing (if a member), the Lahore Chamber of Commerce directory, and local tech press for genuine news such as launches or customer milestones.
5. **Snooker ecosystem:** the Pakistan Billiards & Snooker Association, club owners' communities and cue-sports suppliers. Offer useful resources (the session-billing guide), not paid links.
6. **Product Hunt** launch for the snooker product (CueDesk used it).
7. **Owned profiles:** make LinkedIn, Facebook, YouTube and X descriptions match the site's entity description, and rename the `rmsdevsinn` X handle if possible.

Avoid: paid link packages, PBNs, generic web directories, and fake or incentivised reviews.

---

## 10. International SEO recommendations

| Page type | Audience | Status |
|---|---|---|
| Home, Features, Pricing, Demo, Industries, 16 industry pages, all 11 guides | Global (English) | Correct |
| Retail "Retail Shop Management Software in Pakistan" section; Restaurant Pakistan FAQ | Pakistan, intentional | Keep |
| Contact, Hiring, HR Digitalization, Web Development (titles include "Pakistan") | Pakistan, intentional | Keep; owner to confirm the HR/web-dev market |

**Key finding stage 1 could not see:** autocomplete shows clear Pakistan-modified demand, and local competitors target it with dedicated pages. On 4 Nov the three Pakistan blog posts were redirected to global editions (`next.config.ts`). That is sound for a global brand, but it may have removed pages that matched real queries.

**Recommendation:** check GSC impressions for those three URLs before doing anything.
- If they had meaningful impressions, add one genuine, non-duplicate Pakistan page. Examples: "POS software in Pakistan: pricing and buying guide", or a localized section on the existing restaurant and retail pages. Cover local realities only where the product supports them. **Do not claim FBR/PRA/SRB integration** unless the owner documents it; stage 1 removed such claims.
- **No hreflang**: one English site, with no separate regional versions. Not justified.
- No regional subfolders or ccTLD until there is real localization (language, pricing, compliance).

---

## 11. Priority action plan

| Priority | Action | Evidence | Pages | Expected benefit | Owner |
|---|---|---|---|---|---|
| Critical | Fix `www.diginizam.com` TLS + 301 to apex | curl `SEC_E_WRONG_PRINCIPAL` (stage 1, re-confirmed) | all | Brand URL works; no split signals | Hosting |
| Critical | Connect Search Console (Domain property) and submit the sitemap | No property in the signed-in account | all | Enables every data-driven decision below | Owner |
| High | List DigiNizam (snooker + POS) on Capterra/GetApp/Software Advice and G2 | Snooker SERPs dominated by these listings; zero brand mentions | `/products/snooker`, `/` | Discovery, entity corroboration, referral traffic | Owner / marketing |
| High | Compress the restaurant hero video; remove duplicates | 22.47 MB file, no poster | `/products/restaurant` | Mobile data and load cost | Dev (needs ffmpeg) |
| High | Investigate home LCP render delay (1,830 ms) with a local trace; test removing the image `drop-shadow`/blur | PSI LCP breakdown | `/` | LCP toward < 2.5 s (lab) | Dev |
| High | Decide the Pakistan content strategy using GSC data | PK autocomplete; local competitors; 4 Nov redirects | restaurant, retail, pricing | Local commercial traffic | Owner + SEO |
| Medium | Write "Restaurant POS vs restaurant management software" guide | Competitor articles; autocomplete | new blog → `/products/restaurant` | Comparison-intent visibility | Content |
| Medium | Confirm whether pool halls / billiards fit; if so, add to the snooker title/H1 | Pool/billiards SERPs | `/products/snooker` | Wider niche coverage | Owner |
| Medium | Rewrite the duplicated `/features` copy; expand thin service pages | Crawl word counts | `/features`, `/services/*`, `/partner` | Quality, intent match | Content + product |
| Medium | Make navbar industry links crawlable | Inlink counts | 15 industry pages | Stronger internal links | Dev |
| Low | Security headers (HSTS, CSP, XFO); video `aria-hidden`; contrast | PSI Best Practices / Accessibility | all | Trust, accessibility | Dev |
| Low | Run desktop PSI and Rich Results Test after deploy | Not run | key pages | Verification | SEO |

---

## 12. Changes implemented this stage (uncommitted)

| Issue | Evidence | File | Change |
|---|---|---|---|
| Restaurant page lacked the POS-vs-management and how-it-works answers | Autocomplete; competitor comparison articles | `src/components/restaurant/RestaurantPageContent.tsx` | 2 FAQs added, using only capabilities already stated on the page (orders, KOT, billing, linked stock, reports). FAQPage JSON-LD updates automatically from the same array. |
| Snooker page lacked "what software do clubs use" and daily sales/expense answers; FAQ had no markup | Brief questions; snooker SERPs; page already lists these modules | `src/components/snooker/SnookerPageContent.tsx` | 2 FAQs added (planned modules flagged as planned); FAQPage JSON-LD added |
| `/features` had the H2 "Industry Workflows" three times | Crawl heading outline | `src/components/features/FeaturesRecipe.tsx`, `src/components/features/FeaturesPowerful.tsx` | Headings now "Retail Billing and Restaurant Order Workflows" and "One Platform for Retail, Restaurants and More"; same styling |

**Validation (local production build, `next start -p 3200`):**
- Build and TypeScript pass; 58 static pages.
- Crawl: 49 HTML pages; 0 broken links, 0 duplicate titles/descriptions, 0 canonical issues, 0 JSON-LD parse errors.
- FAQPage questions match the visible FAQs on both pages.
- ESLint clean on the 4 files.
- Snooker FAQ renders on mobile, with no overflow and no console errors.
- Sitemap: no change needed (`/products/restaurant` and `/products/snooker` already have `lastmod` 2026-11-04).

---

## 13. Remaining issues

- Everything in §11 not marked as implemented.
- Stage-1 open items: offline-scope confirmation, domain email, privacy policy review, placeholder service links, X handle.
- Restaurant expense tracking: capability unconfirmed, so no content was added.

## 14. Tools and sources used

**Tools:**
- Google Autocomplete endpoint (US/GB/PK).
- Web search (note: the search tool's index is not Google's; results indicate the competitive landscape, not Google rankings).
- PageSpeed Insights web UI (Lighthouse 13.6.0) and the PSI API (quota-blocked).
- curl.
- Local Next.js production build with a custom crawler.
- Built-in browser (Search Console access check).

**Sources:**
- https://www.softwareadvice.com/restaurant-management/
- https://www.capterra.com/restaurant-management-software/pricing-guide/
- https://www.therestauranthq.com/restaurants/best-restaurant-management-software/
- https://sevenrooms.com/blog/restaurant-management-software/
- https://www.nory.ai/blog/restaurant-management-software-vs-pos
- https://onehubpos.com/blog/rms-or-pos-a-strategic-guide-for-modern-restaurateurs
- https://g2.com/categories/restaurant-management
- https://wf.joinhomebase.com/blog/retail-pos-software
- https://www.getapp.com/retail-consumer-services-software/retail-management-systems/org/small-business/
- https://oscar.pk/blog/best-restaurant-management-systems-in-pakistan
- https://oscar.pk/blog/how-does-a-restaurant-pos-system-work-in-pakistan
- https://moneypex.com/pk/pos
- https://blog.hysabone.com/?p=66
- https://www.goodfirms.co/software/corn-pos
- https://www.getapp.com/all-software/a/snooker-club-management-software/
- https://www.capterra.com/p/10047006/Snooker-Club-Management-Software/
- https://www.capterra.com/p/10043123/CueDesk/
- https://www.linkedin.com/company/cueflow
- https://www.producthunt.com/p/cue-desk/cuedesk
- https://sportsphere.syscomindia.com/snooker-billiards-booking-software
- https://www.vyrox.com/snooker-software-billiard-system
- https://handycafe.com/en/blog/software-for-a-billiards-hall
- https://www.arabnews.pk/node/2595227
- PSI reports: https://pagespeed.web.dev/analysis/https-diginizam-com/p60ct86nsg and https://pagespeed.web.dev/analysis/https-diginizam-com-products-restaurant/j8vh2k93ma (plus retail, snooker and blog runs)

## 15. Limitations and unavailable data

- **Search volume, keyword difficulty, CPC, SERP positions:** unavailable. There was no Keyword Planner (needs a Google Ads account), Ahrefs or Semrush access. None were estimated.
- **Search Console and analytics:** no access. GA4 and Clarity were not inspected.
- **Backlinks / referring domains:** no tool. Only brand-mention searches were run.
- **CrUX field data:** PSI reports "No Data" for every tested URL. Core Web Vitals pass/fail is unknown.
- **Desktop PSI, and `/features`, `/pricing`, `/demo`:** not run (API quota; session time).
- Capterra pages returned HTTP 403 to the fetch tool; competitor facts come from search snippets and other pages.
- Web search results are US-centric and not Google; Pakistan results were checked with explicit "Pakistan" queries.
- Rich Results / Schema validators: not run on local pages (not publicly reachable). Run them after deployment.
