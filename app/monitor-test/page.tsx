import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical } from "@/lib/site";

const sections = [
  { title: "How to test your monitor", body: ["Open each test pattern in fullscreen. Look for uneven color, bent grid lines, blurry text, banding or bright patches on dark screens.", "Test one display at a time. If you use more than one monitor, move the browser window to the screen you want to check before entering fullscreen."] },
  { title: "What each test checks", body: ["Solid color checks color uniformity. Gradients show banding. The grid checks alignment. Checkerboard helps reveal scaling issues. Text checks sharpness. The backlight screen helps reveal glow or bleed. Gray uniformity helps show tint and brightness changes.", "These checks are visual. They can help you notice obvious problems, but they do not replace a colorimeter or repair test."] },
  { title: "Color uniformity", body: ["A solid color should look even from edge to edge. Some small variation is normal, especially on large or older panels."] },
  { title: "Grid and sharpness", body: ["The grid should look straight and evenly spaced. Text should look clear at your normal viewing distance and display scaling."] },
  { title: "Backlight bleed check", body: ["Use the dark test in a dim room. Look for bright patches near edges or corners. Lower room reflections before judging the result."] }
];
const faqs = [
  { question: "Is this a professional calibration tool?", answer: "No. It is a simple browser test for quick visual checks." },
  { question: "Does it work on external monitors?", answer: "Yes. Move your browser window to the display you want to test, then open fullscreen." }
];

export const metadata: Metadata = {
  title: "Monitor Test Online | Screen Color, Grid and Sharpness Test",
  description: "Run simple browser-based monitor tests for color, sharpness, alignment, gradients and backlight issues.",
  alternates: { canonical: canonical("/monitor-test") },
  openGraph: { title: "Monitor Test Online", description: "Run browser-based monitor tests for colors, grids and sharpness.", url: canonical("/monitor-test") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/monitor-test" title="Monitor Test Online" intro="Run simple browser-based monitor tests for color, sharpness, alignment, gradients and backlight issues." sections={sections} faqs={faqs} current="/monitor-test">
      <FullscreenColorTool mode="monitor" title="Monitor test" showTimer={false} />
    </ToolPageTemplate>
  );
}
