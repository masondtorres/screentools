# ScreenTools

ScreenTools is a fast, mobile-first Next.js utility site for full-screen color tools, dead pixel testing, monitor testing, screen flashlight use and video call lighting.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel

Import the GitHub repo in Vercel and deploy with the default Next.js settings.

Use these settings:

- Framework preset: `Next.js`
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave blank/default
- Environment variables for basic tools: none required
- Environment variables for the contact form:
  - `RESEND_API_KEY=your_resend_api_key_here`
  - `CONTACT_EMAIL=masondtorres@duck.com`

The app uses the Next.js App Router. `app/sitemap.ts` generates `/sitemap.xml`, and `app/robots.ts` generates `/robots.txt`.

No Google Analytics key, AdSense code, payment provider or database is required for launch. The contact form uses Resend only when `RESEND_API_KEY` is configured in the deployment environment.

## Add Google Analytics later

Add the script in `app/layout.tsx`. Event placeholders live in `lib/analytics.ts` for fullscreen, color, timer, copy link, download, affiliate and email signup events.

## Add AdSense later

Use `components/AdPlaceholder.tsx` as the replacement point for ad units. Do not show ads inside fullscreen mode.

## Add affiliate links

Replace the placeholder links in `components/RecommendedGear.tsx` with real affiliate URLs. Keep labels clear and avoid fake prices, reviews or ratings.

## Future monetization path

1. B2B bulk screen testing inquiries through `/bulk-screen-testing`.
2. AdSense or Journey by Mediavine after traffic grows.
3. Affiliate links on buyer-intent guide pages.
4. Downloadable testing packs after the free checklist is proven.

Keep monetization flags off until each layer is real: `ENABLE_ADS=false`, `ENABLE_AFFILIATES=false`, and `ENABLE_PAID_DOWNLOADS=false`.

## Bulk Screen Testing Lead Workflow

Purpose: Capture business inquiries from people who need to test many screens with a simple browser-based workflow.

Audience: Phone repair shops, electronics refurbishers, resellers, schools, IT departments, office managers, AV installers and small businesses.

Trigger: A visitor clicks a bulk screen testing CTA and lands on `/contact?reason=bulk-screen-testing`.

Owner: Mason.

Approval point: Mason reviews every lead before any quote.

Output: Screen testing checklist, custom workflow recommendation or setup quote.

Failure point: The form works but no one replies.

Rollback step: Disable the bulk CTA or route it to general contact.

Test case: Submit a fake bulk inquiry for 25 screens.

Internal reply script:

Subject: Bulk screen testing setup

Body:

Thanks for reaching out. A few quick questions so I can point you in the right direction:

1. How many screens do you need to test?
2. Are these laptops, monitors, TVs or mixed devices?
3. Is this a one-time check or a repeat workflow for your team?

Once I have that, I’ll send back the simplest setup path.

## Configure contact email

The public contact email is set with `CONTACT_EMAIL` and defaults to `masondtorres@duck.com`. Contact CTAs use that value. The `/contact` form posts to a server API route and sends through Resend when `RESEND_API_KEY` is configured.

Use the Resend free tier only unless the project owner chooses otherwise later. The Resend API key must be set only in Vercel environment variables or a local `.env.local` file. Do not commit API keys. The sender/domain should be verified in Resend before production email sending is expected to work reliably.

## Add new tool pages

Create a new folder under `app/`, add a `page.tsx`, set unique metadata, and use `ToolPageTemplate` with crawlable text, FAQ data and related tools. Add the tool to `toolLinks` in `lib/site.ts`.

## Add language versions later

Add locale segments such as `app/es/` or configure Next.js international routing. Keep metadata, canonical URLs, sitemap entries and translated FAQ schema unique for each language page.
