# Boldwool Fibre Fidelity — NL advisor pitch

Static one-pager for grant advisors (Dutch / EKOO). Same visual shell as
[boldwool-mali-pitch](https://github.com/Lennart1970/boldwool-mali-pitch): Vite + React + Tailwind,
amber/stone palette, `Section` / `Photo` / `BigNumber` patterns.

**Live (after Pages is on):** https://lennart1970.github.io/boldwool-fibre-fidelity-nl/

## Content

Copy source: advisor one-pager (Fibre Fidelity / textile upcycling). Site language is Dutch for
advisor-facing UI; the locked NL claim paragraph is verbatim.

**Claim ladder (do not blur):**
1. Industrial POC — Havivank line → Fibre Fidelity felt fabric (process principle)
2. Trial end products — artisan sneaker + bodywarmers (proef-eindproducten; not factory throughput)
3. Open research — follow-up make processes + material performance (abrasion/wash/bond/tensile)

## Develop

```bash
npm install
npm run dev
```

## Build (writes to `/docs` for GitHub Pages)

```bash
npm run build
```

Vite `base` is `/boldwool-fibre-fidelity-nl/`. Built assets land in `docs/` (committed).

## Enable GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`main`**, folder: **`/docs`**
4. Save — site serves at `https://lennart1970.github.io/boldwool-fibre-fidelity-nl/`

Merge the PR that contains `docs/` to `main` before (or right after) enabling Pages.

## Soft status

Draft for advisors — not for subsidieportaal submit.
