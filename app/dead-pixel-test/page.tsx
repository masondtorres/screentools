import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical } from "@/lib/site";

const sections = [
  { title: "How to test for dead pixels", body: ["Clean the screen first. Open fullscreen. Check each solid color slowly from edge to edge. A dead pixel may appear as a tiny dark dot.", "Move your eyes across the full screen, including the corners. Dust can look like a bad pixel, so wipe the screen gently before deciding."] },
  { title: "What colors to use", body: ["Use white, black, red, green, blue and yellow. Different colors can reveal different stuck or dead pixels.", "White helps reveal dark pixels. Black helps reveal bright stuck pixels. Red, green and blue can show subpixel problems."] },
  { title: "Manual and auto-cycle modes", body: ["Manual mode gives you time to inspect each color. Auto-cycle is useful for a quick pass when you already know what to look for.", "Use the interval selector if the colors change too quickly. Pause auto-cycle when you see something you want to inspect. In fullscreen, tap to advance to the next color or swipe left and right on touch screens."] },
  { title: "Step checklist", body: ["1. Clean the screen gently. 2. Open fullscreen. 3. Check white, black, red, green, blue, yellow, cyan, magenta and gray. 4. Pause on any suspicious mark. 5. Take photos if you need to document a new device issue.", "If the screen is under warranty, check the seller or manufacturer policy before trying anything risky. This is not legal advice."] },
  { title: "Dead pixel vs stuck pixel", body: ["A dead pixel usually stays dark. A stuck pixel may stay red, green, blue or another color. This tool helps you spot issues, but it does not repair hardware.", "If your display is under warranty, take photos and check the maker's pixel policy."] }
];
const faqs = [
  { question: "Can this repair a dead pixel?", answer: "No. It only helps you find possible pixel problems." },
  { question: "Should I use auto-cycle?", answer: "Auto-cycle is useful for a quick pass. Manual mode is better when you want more time on each color." }
];

export const metadata: Metadata = {
  title: "Dead Pixel Test Online | Full Screen Monitor Color Test",
  description: "Test your screen for dead or stuck pixels with full-screen colors. Cycle through white, black, red, green and blue in your browser.",
  alternates: { canonical: canonical("/dead-pixel-test") },
  openGraph: { title: "Dead Pixel Test Online", description: "Cycle full-screen colors to inspect dead or stuck pixels.", url: canonical("/dead-pixel-test") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/dead-pixel-test" title="Dead Pixel Test Online" intro="Test your screen for dead or stuck pixels with full-screen colors." sections={sections} faqs={faqs} current="/dead-pixel-test">
      <FullscreenColorTool mode="dead-pixel" title="Dead pixel test" showTimer={false} />
    </ToolPageTemplate>
  );
}
