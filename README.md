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
- Environment variables: none required for the MVP

The app uses the Next.js App Router. `app/sitemap.ts` generates `/sitemap.xml`, and `app/robots.ts` generates `/robots.txt`.

No Google Analytics key, AdSense code, payment provider or database is required for launch.

## Add Google Analytics later

Add the script in `app/layout.tsx`. Event placeholders live in `lib/analytics.ts` for fullscreen, color, timer, copy link, download, affiliate and email signup events.

## Add AdSense later

Use `components/AdPlaceholder.tsx` as the replacement point for ad units. Do not show ads inside fullscreen mode.

## Add affiliate links

Replace the placeholder links in `components/RecommendedGear.tsx` with real affiliate URLs. Keep labels clear and avoid fake prices, reviews or ratings.

## Configure contact email

The public contact email is set in `lib/config.ts` as `contactEmail`. Current value: `masondtorres@duck.com`. Contact CTAs use `mailto:` links only. Do not add a static contact form unless it sends through a real backend or form service.

## Add new tool pages

Create a new folder under `app/`, add a `page.tsx`, set unique metadata, and use `ToolPageTemplate` with crawlable text, FAQ data and related tools. Add the tool to `toolLinks` in `lib/site.ts`.

## Add language versions later

Add locale segments such as `app/es/` or configure Next.js international routing. Keep metadata, canonical URLs, sitemap entries and translated FAQ schema unique for each language page.
