import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ScreenTools",
  description: "Learn about ScreenTools, a simple utility site for full-screen colors, display checks and screen lighting.",
  alternates: { canonical: canonical("/about") },
  openGraph: { title: "About ScreenTools", description: "Simple browser screen tools.", url: canonical("/about") }
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <h1>About ScreenTools</h1>
      <p>ScreenTools is a free collection of browser-based screen tools for screen colors, display testing, lighting, focus and harmless visual effects.</p>
      <p>The site is built for people who need a quick white screen, black screen, custom color screen, dead pixel test, monitor test, screen flashlight or video call light.</p>
      <p>The tools do not require accounts, payments, downloads or browser extensions. Fun screens are clearly labeled as visual effects only.</p>
      <h2>Install as app</h2>
      <p>You can install ScreenTools as a browser app on supported browsers for faster access to fullscreen tools and web screensavers. Use your browser menu and look for Install, Add to Home Screen or Add app.</p>
    </main>
  );
}
