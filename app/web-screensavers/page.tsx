import type { Metadata } from "next";
import Link from "next/link";
import { FAQBlock } from "@/components/FAQBlock";
import { FunScreenCard } from "@/components/FunScreenCard";
import { JsonLd } from "@/components/JsonLd";
import { funScreens } from "@/lib/fun-screens";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

const faqs = [
  { question: "What is a web screensaver?", answer: "A web screensaver is a fullscreen browser visual effect. It runs on a web page and does not require an executable download." },
  { question: "Are these Windows .scr screensavers?", answer: "No. ScreenTools does not provide Windows .scr files, installers or executable downloads." },
  { question: "How do I exit?", answer: "Press Esc where supported. Each effect also shows a small exit hint in fullscreen." },
  { question: "Can I use these for videos?", answer: "Yes. They are useful as video backgrounds, display ambience and harmless visual effects." }
];

export const metadata: Metadata = {
  title: "Free Web Screensavers and Fullscreen Visual Effects",
  description: "Use free browser-based web screensavers and fullscreen visual effects. No download required.",
  alternates: { canonical: canonical("/web-screensavers") },
  openGraph: {
    title: "Free Web Screensavers and Fullscreen Visual Effects",
    description: "Browser-based fullscreen visual effects for ambience, videos and harmless jokes.",
    url: canonical("/web-screensavers")
  }
};

export default function WebScreensaversPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Web Screensavers", path: "/web-screensavers" }]), faqSchema(faqs)]} />
      <section className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">No download required</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">Free Web Screensavers and Fullscreen Visual Effects</h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-700">Use ScreenTools as a fullscreen web screensaver, video background, harmless joke screen or display ambience tool. Everything runs in your browser.</p>
      </section>

      <section className="content-prose mt-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
        <h2>Quick answer</h2>
        <p>A web screensaver is a fullscreen browser effect. You choose an effect, open it full screen, and press Esc to exit. ScreenTools does not provide Windows .scr files, installers or executable downloads.</p>
      </section>

      <section className="mt-10" aria-labelledby="best-web-screensavers">
        <h2 id="best-web-screensavers" className="text-2xl font-bold">Best web screensavers</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {funScreens.map((screen) => <FunScreenCard key={screen.slug} title={screen.cardTitle} href={`/${screen.slug}`} description={screen.cardDescription} />)}
        </div>
      </section>

      <section className="content-prose mt-10">
        <h2>How to use a web screensaver</h2>
        <ol>
          <li>Choose an effect such as Code Rain, DVD Bounce, Glitch or Fake Loading.</li>
          <li>Adjust the controls before fullscreen.</li>
          <li>Use Copy share link if you want to save the setup.</li>
          <li>Open the effect full screen.</li>
          <li>Press Esc to exit when you are done.</li>
        </ol>

        <h2>Why browser-based screensavers are safer than executable downloads</h2>
        <p>Browser-based screensavers do not require installers, .scr files or unknown executable downloads. They run inside the browser and can be closed with normal browser controls. That makes them better for quick ambience, videos and temporary displays.</p>

        <h2>Available effects</h2>
        <p>ScreenTools includes Code Rain, DVD Bounce, Glitch, Fake Loading, Cracked Glass, Fake Blue Screen, Fake Update, Fake Frozen and Fake Error effects. Each page includes setup controls, related links and safety notes outside fullscreen mode.</p>

        <h2>Install as app</h2>
        <p>You can install ScreenTools as a browser app on supported browsers for faster access to fullscreen tools and web screensavers. Use your browser menu and look for Install, Add to Home Screen or Add app.</p>

        <h2>Related fun screens</h2>
        <p>Start with <Link href="/code-rain-screen">Code Rain Screen</Link>, <Link href="/dvd-screensaver">DVD Screensaver</Link>, <Link href="/glitch-screen">Glitch Screen</Link> or <Link href="/broken-screen-prank">Broken Screen Prank</Link>.</p>
      </section>

      <FAQBlock items={faqs} />
    </main>
  );
}
