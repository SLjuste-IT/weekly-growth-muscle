# Weekly Growth Muscle

A 10-week, 4-day hypertrophy program presented as a fast, static website — plain HTML, CSS, and vanilla JavaScript with **no build step**.

Pages: program (`index.html`), cardio, nutrition, supplement, wellness, a device-only workout log, plus About, Contact, Privacy, and Terms.

## Getting the code on GitHub

This repository was initialised and pushed with:

```bash
git init -b main
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/SLjuste-IT/weekly-growth-muscle.git
git push -u origin main
```

## Deploy on Cloudflare Pages

This is a static site, so there's nothing to build.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this repository, then set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the repo root)
3. **Save and Deploy.**
4. Under the project's **Custom domains** tab, add `serverkakoulabs.org`.

Security headers ship in [`_headers`](_headers). Sitemap: `/sitemap.xml` · Robots: `/robots.txt`

## After AdSense approval

- Paste your `ca-pub-…` loader inside the `applyConsent()` function in [`assets/enhance.js`](assets/enhance.js) so ads load only after consent.
- Extend the `Content-Security-Policy` in [`_headers`](_headers) with Google's ad domains (noted in that file's comments).
