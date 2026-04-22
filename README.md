# Ema Replica Frontend

This repo contains a local, reusable frontend replica of the core `ema.ai` marketing/product experience.

## What This Repo Is

- A `Next.js` app built from local snapshots of live page payloads
- A high-fidelity frontend replica for selected core product pages
- A local-only experience: Ema-owned links stay inside the app

## What Is Done

Built as real local pages:

- `/`
- `/customer-experience`
- `/doc-gen`
- `/gwe-generative-workflow-engine`

Built as local placeholders so users do not get kicked out to the original site:

- `/employee-experience`
- `/finops`
- `/voice-ai-employee`
- `/emafusion`
- `/trust-and-security`
- `/agent-library`
- `/document-analytics`
- `/knowledge-insights`
- `/app-navigator`
- `/ai-employee-builder`
- `/ai-employees`
- `/sales-marketing`
- `/customer-support`
- selected company/resource pages such as `/about-us`, `/blog`, `/resources`, `/partners`, `/integrations`

## What To Expect

- The current app is strongest on the homepage, customer experience, doc gen, and GWE pages.
- Some pages are still placeholders by design. They exist locally to preserve flow, but they are not yet replicated in detail.
- Images, video, and some fonts still load from remote asset URLs for fidelity.
- The app is frontend-focused. Lead forms, demos, and CMS-backed flows are not implemented as real backend features.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open:

```text
http://127.0.0.1:3000
```

## Refreshing Content Snapshots

The frontend is driven by local JSON snapshots under `src/data/snapshots`.

To refresh the currently configured live snapshots:

```bash
npm run fetch:snapshots
```

Important:

- This updates content structure/data from the live site.
- It does not automatically build new pages.
- If the live payload shape changes, components may need updates.

## Important Files

- `src/app/` — route entry points
- `src/components/site/` — reusable page sections and page implementations
- `src/data/snapshots/` — saved page payloads
- `src/lib/ema.ts` — media/link helpers
- `src/lib/routes.ts` — route registry for built vs placeholder pages
- `.github/PLAN.md` — active implementation backlog
- `.github/NOTES.md` — current project notes
- `.github/DECISIONS.md` — repo decisions

## Core Constraints

- Keep Ema-owned navigation local.
- Prefer replacing placeholders with real pages over adding more placeholder-only surface area.
- Keep diffs maintainable; avoid dumping raw scraped HTML into the app.

## Recommended Next Work

Priority order:

1. `/employee-experience`
2. `/voice-ai-employee`
3. `/finops`
4. `/trust-and-security`
5. `/emafusion`

## Known Gaps

- Several product/company pages are still placeholders
- Remote assets are still a dependency
- Navigation is intentionally trimmed/localized rather than fully mirroring every original link
- Some interactions are approximated rather than pixel-identical
