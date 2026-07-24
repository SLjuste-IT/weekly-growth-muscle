# Weekly Growth Muscle

**A 10-week, 4-day hypertrophy program, delivered as a fast static website.**
Plain HTML, CSS, and vanilla JavaScript — **no build step, no framework, no dependencies.**

![Static site](https://img.shields.io/badge/static-no%20build%20step-brightgreen)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20vanilla%20JS-blue)
[![Live](https://img.shields.io/badge/live-serverkakoulabs.org-ff6a3d)](https://serverkakoulabs.org)

🔗 **Live site:** <https://serverkakoulabs.org>

---

## Overview

Weekly Growth Muscle is a training site built around a simple idea: hit each muscle
group hard **once a week** with heavy compound lifts, eat big, and grow. The program
is organised as a 4-day split over 10 weeks, presented with interactive day tabs and
per-exercise cards (sets, reps, and demo photos).

Every page is hand-written HTML with a shared CSS design system — it loads fast, works
offline-friendly, and needs nothing more than a static file host to deploy.

## Features

- **Interactive program** — day tabs and exercise cards driven by tiny vanilla JS.
- **Full training guide** — dedicated pages for cardio, nutrition, supplements, and wellness/recovery.
- **In-browser workout log** — `log.html` saves your sets locally via `localStorage`; nothing is ever sent to a server.
- **Performance-first** — optimized JPEGs, a poster image with a **desktop-only** hero video (phones and reduced-motion visitors skip the download), and lazy, dependency-free scripts.
- **SEO-ready** — canonical tags, Open Graph / Twitter cards, JSON-LD structured data, `sitemap.xml`, and `robots.txt`.
- **Security headers** — a `_headers` file ships a Content-Security-Policy plus hardening headers (Cloudflare / Netlify format).
- **Privacy-aware** — a cookie-consent banner gates any future ad/analytics scripts (see [Privacy & AdSense](#privacy-cookies--adsense)).
- **Responsive & accessible** — mobile-friendly layout, 44px tap targets, focus-visible states, and a `prefers-reduced-motion` fallback.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — the 10-week, 4-day program |
| `cardio.html` | Cardio & conditioning |
| `nutrition.html` | Nutrition & meal guidance |
| `supplement.html` | Supplement guide |
| `wellness.html` | Recovery, sleep & wellness |
| `log.html` | Workout log (saved in your browser) |
| `about.html` | About the author |
| `contact.html` | Contact form |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service (incl. `#health` medical disclaimer) |

## Tech stack

- **HTML5** — one file per page, no templating.
- **CSS** — `assets/base.css` (global design system, nav, footer), `assets/pages.css` (legal/trust pages), `assets/enhance.css` (cookie banner).
- **Vanilla JavaScript** — `assets/enhance.js` (cookie consent + progressive enhancement). No bundler, no npm packages.

## Project structure

```text
weekly-growth-muscle/
├── index.html            # Home — the 10-week, 4-day program
├── cardio.html           # Cardio & conditioning
├── nutrition.html        # Nutrition & meal guidance
├── supplement.html       # Supplement guide
├── wellness.html         # Recovery, sleep & wellness
├── log.html              # Workout log (localStorage, device-only)
├── about.html            # About the author
├── contact.html          # Contact form
├── privacy.html          # Privacy policy
├── terms.html            # Terms of service
├── assets/
│   ├── base.css          # Global design system, nav, footer
│   ├── pages.css         # Shared styles for the legal/trust pages
│   ├── enhance.css       # Cookie-consent banner styling
│   └── enhance.js        # Cookie consent + progressive enhancement
├── img/                  # Hero + exercise/cardio imagery
├── apple-touch-icon.png  # 180×180 home-screen icon
├── _headers              # Security headers + CSP (Cloudflare / Netlify)
├── robots.txt            # Crawl directives
└── sitemap.xml           # XML sitemap
```

## Run it locally

There's no build step — just serve the folder with any static file server and open it
in a browser. Pick whichever you have installed:

```bash
# Python 3
python -m http.server 8000

# Node (no install needed)
npx --yes http-server -p 8000 -c-1
```

Then visit <http://localhost:8000>. In VS Code, the **Live Server** extension works too —
or simply open `index.html` directly (note: some features behave best when served over HTTP).

## Publish to GitHub

The repository already points at its remote:

```text
origin  →  https://github.com/SLjuste-IT/weekly-growth-muscle.git
```

So publishing changes is just:

```bash
git add -A
git commit -m "Update site"
git push
```

<details>
<summary>Starting from a brand-new repo instead?</summary>

```bash
git init -b main
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
</details>

## Deploy

### Cloudflare Pages (recommended — used in production)

Static site, so there's nothing to build.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this repository, then set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the repo root)
3. **Save and Deploy.**
4. Under the project's **Custom domains** tab, add `serverkakoulabs.org`.

Security headers in [`_headers`](_headers) are applied automatically by Cloudflare Pages.

### GitHub Pages (alternative)

Because it's a plain static site, GitHub Pages works too: **Settings → Pages →** deploy
from the `main` branch, root (`/`) folder. Note that GitHub Pages **does not** apply the
[`_headers`](_headers) file, so the custom CSP/security headers won't be present there —
Cloudflare Pages (or Netlify) is preferred for that reason.

## SEO & performance

- Per-page `<title>`, meta description, canonical URL, and Open Graph / Twitter tags.
- JSON-LD structured data: `Organization` + `WebSite` on the home page, `Article` on the guide pages.
- [`sitemap.xml`](sitemap.xml) and [`robots.txt`](robots.txt) reference the production domain.
- Images are pre-optimized JPEGs; the hero video only loads on desktop, non-reduced-motion viewports.

## Privacy, cookies & AdSense

The site is **ad-free by default** — no third-party ad or analytics scripts load until a
visitor accepts the cookie banner (consent is stored in `localStorage` under `wgm-consent`).

When Google AdSense is approved:

- Paste your `ca-pub-…` loader inside the `applyConsent()` function in
  [`assets/enhance.js`](assets/enhance.js) so ads load **only after** consent.
- Extend the `Content-Security-Policy` in [`_headers`](_headers) with Google's ad domains
  (the required hosts are noted in that file's comments).

## Content & disclaimer

Written from first-hand training experience by one dedicated lifter — **not** a doctor,
dietitian, or certified trainer. The content is educational and is **not** medical advice;
consult a professional before starting any program. A medical disclaimer is linked in every
page's footer ([`terms.html#health`](terms.html)). Imagery is AI-generated and belongs to the author.

## License

Personal project. The source code and imagery are the author's own; please don't
republish the site or its content wholesale without permission.
