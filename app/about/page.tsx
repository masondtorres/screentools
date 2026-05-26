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
      <p>ScreenTools is a small utility website for full-screen colors, monitor checks and screen lighting. The goal is to keep each tool fast, simple and usable without an account.</p>
      <p>The site is built for people who need a quick white screen, black screen, color screen, dead pixel test or video call light.</p>
    </main>
  );
}
