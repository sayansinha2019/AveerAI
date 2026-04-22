# Notes

- The replica is snapshot-driven. Live page payloads are stored in `src/data/snapshots`.
- Assets are still served from original remote URLs for fidelity.
- Navigation now keeps Ema-owned links inside localhost by mapping them to local built pages or local placeholders.
- Third-party destinations that previously left the app are redirected to local placeholders with the original target shown.
- Current handoff expectation:
  - teammate should expect 4 real replicated pages
  - teammate should expect several placeholder pages
  - teammate should not assume backend/demo flows are implemented
- Current priority is turning the remaining core product placeholders into real pages, not expanding blog/company content.
