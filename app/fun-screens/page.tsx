import type { Metadata } from "next";
import { FAQBlock } from "@/components/FAQBlock";
import { FunScreenCard } from "@/components/FunScreenCard";
import { JsonLd } from "@/components/JsonLd";
import { ResponsibleUseNotice } from "@/components/ResponsibleUseNotice";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";
import { funScreens } from "@/lib/fun-screens";

const faqs = [
  { question: "Are these real system screens?", answer: "No. They are visual effects only. Nothing is actually broken, crashing or updating." },
  { question: "How do I exit fullscreen?", answer: "Press Esc where supported or use the on-screen exit button." },
  { question: "Can I use these in videos?", answer: "Yes, as harmless visual effects. Use them responsibly and do not copy real company logos." }
];

export const metadata: Metadata = {
  title: "Fun Screens | Harmless Full-Screen Visual Effects",
  description: "Harmless full-screen visual effects for jokes, videos and backgrounds. Press Esc to exit fullscreen.",
  alternates: { canonical: canonical("/fun-screens") },
  openGraph: {
    title: "Fun Screens | Harmless Full-Screen Visual Effects",
    description: "Browse fake visual effects, screensavers, glitch screens and code rain backgrounds.",
    url: canonical("/fun-screens")
  }
};

export default function FunScreensPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Fun Screens", path: "/fun-screens" }]), faqSchema(faqs)]} />
      <h1 className="text-3xl font-bold sm:text-4xl">Fun Screens</h1>
      <p className="mt-3 max-w-3xl text-gray-700">Harmless full-screen visual effects for jokes, videos and backgrounds. Press Esc to exit fullscreen.</p>
      <div className="mt-5">
        <ResponsibleUseNotice />
      </div>
      <section className="mt-8" aria-labelledby="fun-screen-list">
        <h2 id="fun-screen-list" className="text-2xl font-bold">Available fun screens</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {funScreens.map((screen) => <FunScreenCard key={screen.slug} title={screen.cardTitle} href={`/${screen.slug}`} description={screen.cardDescription} />)}
        </div>
      </section>
      <section className="my-8" aria-labelledby="fun-chooser">
        <h2 id="fun-chooser" className="text-2xl font-bold">Which fun screen should I use?</h2>
        <div className="mt-3 overflow-x-auto rounded border border-line bg-white">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              <tr className="border-b border-line"><th className="px-3 py-3">Simple joke</th><td className="px-3 py-3">Broken Screen Prank or Fake Loading Screen</td></tr>
              <tr className="border-b border-line"><th className="px-3 py-3">Background</th><td className="px-3 py-3">DVD Screensaver, Code Rain or Glitch Screen</td></tr>
              <tr><th className="px-3 py-3">Generic effect</th><td className="px-3 py-3">Fake Blue Screen, Fake Frozen Screen or Fake Error Screen</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <FAQBlock items={faqs} />
    </main>
  );
}
