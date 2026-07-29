import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { RecommendedGear } from "@/components/RecommendedGear";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical, whiteVariants } from "@/lib/site";

const sections = [
  { title: "How to use your screen for video call lighting", body: ["Place the screen in front of you, choose warm or cool white, and lower brightness until your face looks natural. Keep the call window visible on another display or split screen if needed.", "The light should face you, not the camera. Avoid placing it far off to one side unless you want stronger shadows."] },
  { title: "Best settings", body: ["Warm white is often softer at night. Cool white can look cleaner in daylight. Soft light is best when a bright screen feels harsh.", "If your face looks too bright, lower the screen brightness before changing camera settings."] },
  { title: "Quick setup", body: ["Put the browser window near your webcam. Open fullscreen. Then start or return to your video call.", "If you only have one screen, use split screen or a smaller browser window so you can still see your call controls."] },
  { title: "When to use a real light", body: ["A screen can help in a pinch. A desk lamp or ring light gives more control if you take calls often."] }
];
const faqs = [
  { question: "Does this work with Zoom and Google Meet?", answer: "Yes. It is just a browser light source, so it can help with any video call app." },
  { question: "Should I use full brightness?", answer: "Usually no. Start low and raise brightness only if your camera image is still dark." }
];

export const metadata: Metadata = {
  title: "Zoom Light Screen | Use Your Screen for Video Call Lighting",
  description: "Use your screen as a quick light source for Zoom, Google Meet and video calls. Choose warm, cool or bright white.",
  alternates: { canonical: canonical("/zoom-light") },
  openGraph: { title: "Zoom Light Screen", description: "Use your screen as light for video calls.", url: canonical("/zoom-light") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/zoom-light" title="Zoom Light Screen" intro="Use your screen as a quick light source for Zoom, Google Meet and video calls." sections={sections} faqs={faqs} current="/zoom-light" extra={<RecommendedGear />}>
      <FullscreenColorTool initialColor="#fff2d8" presets={whiteVariants} title="Zoom light screen" />
    </ToolPageTemplate>
  );
}
