# Weekly Growth Muscle

A 10-week, 4-day hypertrophy program presented as a fast, static website — plain HTML, CSS, and vanilla JavaScript with **no build step**.

Pages: program (`index.html`), cardio, nutrition, supplement, wellness, a device-only workout log, plus About, Contact, Privacy, and Terms.

## Deploy on Cloudflare Pages

This is a static site, so there's nothing to build.

1. Push this repo to GitHub (see below).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick this repository, then set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the repo root)
4. **Save and Deploy.**
5. Under the project's **Custom domains** tab, add `serverkakoulabs.org`.

- Security headers ship in [`_headers`](_headers).
- Sitemap: `/sitemap.xml` · Robots: `/robots.txt`

## After AdSense approval

- Paste your `ca-pub-…` loader inside the `applyConsent()` function in [`assets/enhance.js`](assets/enhance.js) so ads load only after consent.
- Extend the `Content-Security-Policy` in [`_headers`](_headers) with Google's ad domains (noted in that file's comments).
