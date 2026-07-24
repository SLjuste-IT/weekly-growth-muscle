# Security Policy

## Reporting a vulnerability

If you believe you've found a security vulnerability in the **Weekly Growth Muscle**
website (<https://wgmuscle.serverkakoulabs.org>) or in this repository, please report it privately.

**Please do not open a public GitHub issue for security problems.**

Instead, email **contact@serverkakoulabs.org** with:

- A description of the issue and where you found it (page URL or file path)
- Steps to reproduce it
- The potential impact, if you know it

You'll get an acknowledgement as soon as possible — usually within a few days — and
updates as the report is investigated and resolved. Responsible disclosure is
appreciated: please allow a reasonable window to fix an issue before disclosing it
publicly.

## Scope

This is a **static website** — plain HTML, CSS, and vanilla JavaScript with no backend,
no user accounts, and no server-side data storage. Page interactions such as the workout
log run entirely in the visitor's browser via `localStorage`; nothing is sent to a server.

**In scope**

- The live site at <https://wgmuscle.serverkakoulabs.org>
- Source in this repository, including the Content-Security-Policy and other headers in [`_headers`](../_headers)

**Out of scope**

- The hosting platform itself (Cloudflare Pages) — report those to the vendor directly
- Issues that require an already-compromised device, browser, or network

## Supported versions

The site is continuously deployed, so only the current live version is supported.
There are no tagged releases or maintenance branches.

Thank you for helping keep the site and its visitors safe.
