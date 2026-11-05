# Services cleanup and global SEO — 5 November 2026

Branch `fix-seo/aeo`. Uncommitted; nothing pushed or deployed.

## 1. Placeholder services removed

| Removed | Where it was | Now |
|---|---|---|
| Digital Marketing, System Support, Training | Footer "Services" column, plus the catch-all route `src/app/services/[...slug]/page.tsx` that rendered the three "In development" pages | Footer links deleted; route file deleted. `/services/digital-marketing`, `/services/system-support` and `/services/training` return **404**, and no page links to them. They were never in the sitemap or the header. |

There are no redirects: none of these pages had an equivalent page to point to, so 404 is the correct signal. The home page still says "System support — round-the-clock help…"; that describes DigiNizam's 24/7 support, not the removed page, and it is not a link.

## 2. Research (5 Nov 2026)

**Method:**
- Google Autocomplete (US, UK, PK and UAE markets) for the seeds "custom software development", "software development company", "web development services", "web development company", "hris software", "hr software" and "payroll software": 473 suggestions.
- Web searches for each service.
- **No search volumes or difficulty scores were available, and none are estimated.**

| Service | Query patterns observed (autocomplete) | Who ranks / competes (search results) | Target chosen |
|---|---|---|---|
| Software Solution | custom software development company / services / cost / for small businesses; what is custom software development; custom vs off-the-shelf; software development company in Pakistan / Lahore / UAE / USA | Directory listings (Clutch, DesignRush, TechBehemoths) and Pakistani firms marketing to US/UK/UAE clients | **"custom software development services"** (global) |
| Web Development | web development services / company; web development services cost; web development vs software development; web development company in Pakistan / Lahore / Dubai / USA | Agencies and cost guides (DesignRush, WebFX, vendor blogs); price ranges vary widely | **"web development services"** (global; "Pakistan" removed from the title) |
| HR Digitalization | hr software in pakistan; best hr software in pakistan; hr software for payroll and attendance; what is HRIS; hris system cost; hr software for small business | Local HR/payroll vendors (Paypeople, SmartHCM, WebHR, HysabOne, MyFlexiHR) that compete on EOBI/PESSI/FBR features; plus software directories | **"HRIS / HR software for payroll and attendance"**, with Pakistan kept in the description and FAQ |

Google's guidance that no one can guarantee a #1 ranking was cited in the results. The Web Development page's old "push your website to the top of Google" claim contradicted it.

## 3. Changes per page

| Page | Title (before → after) | H1 (before → after) | Content fixes | Added |
|---|---|---|---|---|
| `/services/software-solution` | unchanged: "Custom Software Development Services \| DigiNizam"; new description | "Software Solution" → **"Custom Software Development Services"** | Removed "future-proof", "predictive pipelines", "multi-cloud/serverless", "Enterprise Cloud" badge; renamed "What We Do" → "Custom Software We Build" and "We Convert Your Idea Into a Reality" → "From Idea to Working Software"; vision changed from "across the region" to "worldwide"; accurate alt text | 5 FAQs + FAQPage, Service schema (areaServed Worldwide), related-service links |
| `/services/web-development` | "Web Development Services Pakistan" → **"Web Development Services for Businesses \| DigiNizam"** | "Web Development" → **"Web Development Services"** | Removed "top of Google", "sub-second loading", "Enterprise-Grade Security", "Flawless", "rigorous automated testing", "continuous 24/7 optimization"; template headings "Product Suite Composition" / "Idea Into a Reality" replaced with "Web Development Services" / "From Brief to Launch"; accurate alt text | 5 FAQs + FAQPage, Service schema (Worldwide), related-service links |
| `/services/hr-digitalization` | "HR Digitalization & HRIS Software Pakistan" → **"HRIS & HR Software for Payroll and Attendance \| DigiNizam"** | "HR Digitalization" → **"HR Digitalization & HRIS Software"** | (Previous round: grammar, unsupported payroll and compliance claims, alt text) | 5 FAQs + FAQPage, related-service links (Service schema added earlier) |

All FAQ answers describe only what the pages show. They promise no prices, timelines or rankings: pricing is "agreed after reviewing requirements", in line with the rest of the site. International clients are covered by the owner-confirmed fact that DigiNizam serves customers globally in English. The HR FAQ notes that payroll and labour rules differ by country.

The sitemap `lastmod` for the three service URLs is set to 2026-11-05.

## 4. Validation (local production build, `prod-local`, port 3100)

- Build: PASS (55 static pages; the 3 placeholder pages are gone). ESLint on services, Footer and Navbar: 0 errors, 0 warnings.
- Crawl: 0 broken internal links; 0 duplicate titles or descriptions; canonical and JSON-LD checks clean; sitemap 42/42 URLs return 200.
- Each service page: one H1 matching the target keyword; Service + FAQPage (5 questions) + site graph; 45 internal links; about 540–630 words (up from about 230 on software and web).
- Mobile (375 px): no overflow, FAQ accordion works, no console errors.

## 5. Needs your input

1. **`public/webdev.png`** shows a DigiNizam dashboard with **₹ (Indian rupee)** amounts. Consider a version in PKR or without a currency.
2. **HR images** (from the earlier report): `genhrisservice.jpg` shows another company's product (iFirma); `timeattendencehr.png` is a hiring dashboard used in the attendance section.
3. Real **portfolio or case studies** for software and web projects would strengthen these pages more than anything else. None were added, because none were provided.
4. Optional: list DigiNizam's software and web services on **Clutch** and **DesignRush**, the directories that rank for "software development company in Pakistan", using real reviews only.
