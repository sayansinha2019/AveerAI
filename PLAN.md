# EMA.ai Website Replica — Plan

## Goal

Replicate the visual design and structure of ema.ai as a static/semi-dynamic site.
Dynamic backend features (demo booking, live CMS content) will be stubbed.

-----

## Phase 1 — Content Extraction

**Method:** Playwright crawl (bypasses 403, captures JS-rendered DOM)

### Steps

1. Install Playwright: `pip install playwright && playwright install chromium`
1. Run crawl script to capture:
- Full rendered HTML of each page/route
- Screenshots of each section (for visual reference)
- Network requests log (to identify API calls / CMS endpoints)
1. Target pages:
- `/` (homepage)
- `/customer-experience`
- `/doc-gen`
- `/gwe-generative-workflow-engine`
- Any visible nav links

### Output

- `raw/` — raw HTML per page
- `screenshots/` — full-page and section screenshots
- `network_log.json` — captured API calls

-----

## Phase 2 — Stack Decision

|Option                   |When to use                                     |
|-------------------------|------------------------------------------------|
|Plain HTML + Tailwind CDN|Fastest, no build step, good for static replica |
|Next.js + Tailwind       |If you want routing, components, easy deployment|
|React + Vite + Tailwind  |Middle ground — component-based, no SSR overhead|

**Recommended:** Next.js + Tailwind (matches likely original stack, easiest to extend)

-----

## Phase 3 — Component Breakdown (Homepage)

Based on ema.ai structure, expected sections:

1. **Navbar** — logo, nav links, CTA button (“Request Demo”)
1. **Hero** — headline, subheadline, animated background or video, CTA buttons
1. **Logos Bar** — “Trusted by” enterprise logos (static images)
1. **Feature Highlights** — 3–4 cards: EmaFusion™, GWE™, Governance, Integrations
1. **Use Case Tabs** — Customer Support / HR / Finance / Sales (tab-switched content)
1. **Stats/Social Proof** — counters (85% ticket deflection, etc.)
1. **Integrations Grid** — 200+ app logos grid
1. **Testimonials** — quote carousel or grid
1. **Security/Compliance** — SOC2, HIPAA, ISO badges
1. **CTA Section** — “Ready to transform your enterprise?” + demo form
1. **Footer** — links, social, legal

-----

## Phase 4 — Build Order

```
Week 1
├── Set up Next.js project + Tailwind
├── Build Navbar + Footer (reused everywhere)
├── Build Hero section
└── Build Logos Bar

Week 2
├── Feature Highlights cards
├── Use Case Tabs (static content, no API)
└── Stats counters (animate on scroll with Framer Motion or CSS)

Week 3
├── Integrations Grid
├── Testimonials section
├── Security badges section
└── CTA + stubbed demo form (no backend, just a toast/success state)

Week 4
├── Sub-pages (Customer Experience, Doc Gen, GWE)
├── Responsive polish (mobile/tablet)
└── Animations pass (entry animations, hover states)
```

-----

## Phase 5 — Dynamic Parts to Stub

|Original Feature  |Stub Approach                                         |
|------------------|------------------------------------------------------|
|Demo request form |Static form → console.log or success toast            |
|Blog / news feed  |Hardcode 3–4 static posts                             |
|Chatbot widget    |Remove or replace with a static “Chat with Ema” button|
|Animated counters |CSS counter animation on scroll, hardcoded values     |
|CMS-driven content|Hardcode all text/copy from crawled HTML              |

-----

## Phase 6 — Deployment

- **Vercel** (recommended for Next.js) — free tier, instant deploy
- Or **Netlify** for static export

```bash
# Build and export
next build && next export
# Deploy
vercel deploy
```

-----

## Tools & Libraries

|Tool           |Purpose                               |
|---------------|--------------------------------------|
|`playwright`   |Crawl + screenshot ema.ai             |
|`next`         |App framework                         |
|`tailwindcss`  |Styling                               |
|`framer-motion`|Scroll animations, section transitions|
|`lucide-react` |Icons                                 |
|`clsx`         |Conditional class merging             |

-----

## Risks & Mitigations

|Risk                                  |Mitigation                                               |
|--------------------------------------|---------------------------------------------------------|
|Playwright still blocked by Cloudflare|Add realistic browser headers + slow scroll simulation   |
|Fonts/custom icons not captured       |Identify font from DevTools → load via Google Fonts / CDN|
|Animations hard to replicate exactly  |Approximate with Framer Motion; tweak from screenshots   |
|Sub-pages missed in crawl             |Manually visit each route and trigger crawl              |

-----

## Acceptance Criteria

- [ ] Homepage visually matches ema.ai at desktop (1440px) and mobile (375px)
- [ ] All nav links route to correct sub-pages
- [ ] Demo form shows success state on submit
- [ ] No broken images or layout shifts
- [ ] Lighthouse score > 85 (performance)
- [ ] Deployed and publicly accessible URL

-----

*Last updated: April 2026*

---

## Local Replica Status

Built locally now:

- `/`
- `/customer-experience`
- `/doc-gen`
- `/gwe-generative-workflow-engine`

What a teammate should assume:

- these four routes are the current real implementation
- additional routes may exist locally but can still be placeholders
- backend/demo submission flows are not implemented as production systems

Localized with placeholders now:

- Ema-owned routes that were previously sending users back to `ema.ai` or `ema.co`
- external Ema-adjacent destinations such as builder, support, and newsletter links

Next pages to replicate for reducing dependency further:

1. `/employee-experience`
2. `/voice-ai-employee`
3. `/finops`
4. `/trust-and-security`
5. `/emafusion`
