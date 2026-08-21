# Run Doc — NEXTRIP Clone

## Reproduce Artifacts

No `.env` or build artifacts needed — this is a plain static site (HTML + CSS + JS).

Dependencies: none (uses `npx serve` with no local install required).

## How to Run

```bash
npx -y serve -s . -l 3000
```

Or via the npm script:

```bash
npm run dev
```

This starts a static file server on port 3000 serving the project root.
