import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical, whiteVariants } from "@/lib/site";

const sections = [
  { title: "What is a white screen used for?", body: ["A white screen gives you a plain bright background. It can help with light, focus, screen cleaning and simple display checks."] },
  { title: "How to use the white screen tool", body: ["Choose a white mode, set the brightness, then press Go Full Screen. Press F to enter fullscreen from the keyboard."] },
  { title: "Common uses", body: ["Use it as a soft lamp, a clean background, a focus screen or a quick monitor check."] },
  { title: "White screen for video calls", body: ["A white or warm white screen can add light to your face during a call. Lower the brightness if it feels harsh."] },
  { title: "White screen for screen cleaning", body: ["A bright white screen can make dust and smudges easier to see. Turn off fullscreen before cleaning near controls."] },
  { title: "White screen for dead pixel checks", body: ["White can reveal dark dead pixels. Check the whole screen slowly, including the corners."] }
];
const faqs = [
  { question: "Can I use warm white?", answer: "Yes. This page includes warm white and cool white options." },
  { question: "Can I download a white image?", answer: "Yes. Use the Download PNG button to save a simple white PNG." }
];

export const metadata: Metadata = {
  title: "White Screen Online | Full Screen White Background Tool",
  description: "Open a full-screen white screen for lighting, focus, screen cleaning, video calls and monitor testing. Free, fast and works on any device.",
  alternates: { canonical: canonical("/white-screen") },
  openGraph: { title: "White Screen Online", description: "Open a full-screen white background tool in your browser.", url: canonical("/white-screen") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/white-screen" title="White Screen Online" intro="Open a full-screen white screen for lighting, focus, screen cleaning, video calls and monitor testing." sections={sections} faqs={faqs} current="/white-screen">
      <FullscreenColorTool initialColor="#ffffff" presets={whiteVariants} title="White screen preview" allowDownload />
    </ToolPageTemplate>
  );
}
