import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical, whiteVariants } from "@/lib/site";

const sections = [
  { title: "How to use your screen as a light", body: ["Choose bright white, warm light or soft light. Raise brightness only as much as you need, then open fullscreen.", "On phones and tablets, keep the device stable and avoid covering vents while the screen is bright."] },
  { title: "Common uses", body: ["Use it for quick desk light, finding an item, soft background light or a temporary reading light. Do not stare directly at a bright screen for long periods.", "Warm light can feel softer at night. Bright white gives the most light when you need to see something quickly."] },
  { title: "Brightness and comfort", body: ["Start with lower brightness and raise it slowly. A bright screen in a dark room can feel harsh and may bother your eyes."] },
  { title: "Screen flashlight limits", body: ["A screen flashlight is not a replacement for a real flashlight in unsafe areas. Use it only for simple, low-risk lighting needs."] }
];
const faqs = [
  { question: "Can I use this on a phone?", answer: "Yes. It works in the browser on phones, tablets and computers." },
  { question: "Is a screen flashlight safe?", answer: "Use normal care. Avoid staring at a bright screen and lower brightness when possible." }
];

export const metadata: Metadata = {
  title: "Screen Flashlight | Use Your Screen as a Light",
  description: "Use your phone, tablet or monitor as a simple screen flashlight with white, warm and soft light modes.",
  alternates: { canonical: canonical("/screen-flashlight") },
  openGraph: { title: "Screen Flashlight", description: "Use your screen as a simple bright, warm or soft light.", url: canonical("/screen-flashlight") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/screen-flashlight" title="Screen Flashlight" intro="Use your phone, tablet or monitor as a simple screen flashlight with white, warm and soft light modes." sections={sections} faqs={faqs} current="/screen-flashlight">
      <FullscreenColorTool initialColor="#ffffff" presets={whiteVariants} title="Screen flashlight" />
    </ToolPageTemplate>
  );
}
