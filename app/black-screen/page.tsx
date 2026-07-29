import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical } from "@/lib/site";

const sections = [
  { title: "What is a black screen used for?", body: ["A black screen gives you a dark, empty screen. It can reduce light, help focus and show backlight bleed on some displays.", "It is also useful when you want a monitor to stay on without showing a busy page or bright image."] },
  { title: "How to use it", body: ["Press Go Full Screen, dim your room if needed and inspect the screen. Use Esc to exit when your browser supports it.", "If native fullscreen is blocked by your browser, the page uses a full-window fallback so the tool still works."] },
  { title: "Common uses", body: ["Use a black screen for a clean visual space, low-light work, display checks or temporary screen privacy.", "For monitor checks, look for bright patches, uneven glow, stuck pixels or light leaking near the edges."] },
  { title: "Black screen for focus", body: ["A plain black screen removes visual clutter. It can be useful during breaks, audio work or when you want a simple dark background nearby."] },
  { title: "Black screen for monitor checks", body: ["A black background can make backlight bleed easier to see. This is a visual check only. It does not repair or calibrate your display."] }
];
const faqs = [
  { question: "Will this turn off my monitor?", answer: "No. It only shows a black page in your browser." },
  { question: "Can this test backlight bleed?", answer: "It can help you see bright patches on dark screens, but it does not diagnose hardware by itself." }
];

export const metadata: Metadata = {
  title: "Black Screen Online | Full Screen Black Background Tool",
  description: "Open a full-screen black screen for focus, monitor testing, reduced light or clean visual space. Free and works in your browser.",
  alternates: { canonical: canonical("/black-screen") },
  openGraph: { title: "Black Screen Online", description: "Open a full-screen black background tool in your browser.", url: canonical("/black-screen") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/black-screen" title="Black Screen Online" intro="Open a full-screen black screen for focus, monitor testing, reduced light or clean visual space." sections={sections} faqs={faqs} current="/black-screen">
      <FullscreenColorTool initialColor="#000000" presets={[{ name: "Black", hex: "#000000" }]} showBrightness={false} title="Black screen preview" />
    </ToolPageTemplate>
  );
}
