import type { Metadata } from "next";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { canonical } from "@/lib/site";

const sections = [
  { title: "How to use the color screen tool", body: ["Pick a preset color or enter a HEX or RGB value. Use the brightness slider, then open fullscreen.", "You can also use the keyboard shortcuts. Press 1 through 9 for preset colors, F for fullscreen and Space to show or hide controls."] },
  { title: "Common uses", body: ["Use color screens for lighting, display testing, backgrounds, focus and quick color checks. You can share a color with a direct URL like /color-screen?color=ff0000.", "Solid colors are helpful when you need a clean color source without opening a design app or downloading an image."] },
  { title: "HEX and RGB colors", body: ["HEX values use six characters, such as ff0000 for red. RGB values use red, green and blue numbers from 0 to 255.", "The tool keeps the fields in sync, so you can use whichever format is easier."] },
  { title: "Direct color links", body: ["Add a color parameter to the URL to open a color directly. For example, /color-screen?color=00ff00 opens a green screen.", "This makes it easy to save common colors or send a specific color to another device."] }
];
const faqs = [
  { question: "Can I use a HEX color?", answer: "Yes. Enter a value like #ff0000 or ff0000." },
  { question: "Can I share the color?", answer: "Yes. The copy link button adds the current color to the URL." }
];

export const metadata: Metadata = {
  title: "Full Screen Color Tool | Custom Browser Color Screen",
  description: "Choose any full-screen color with preset colors, HEX codes or RGB values. Use it for lighting, testing, backgrounds or focus.",
  alternates: { canonical: canonical("/color-screen") },
  openGraph: { title: "Full Screen Color Tool", description: "Choose any full-screen browser color with presets, HEX or RGB.", url: canonical("/color-screen") }
};

export default function Page() {
  return (
    <ToolPageTemplate path="/color-screen" title="Full Screen Color Tool" intro="Choose any full-screen color with preset colors, HEX codes or RGB values." sections={sections} faqs={faqs} current="/color-screen">
      <FullscreenColorTool initialColor="#ff0000" title="Custom color screen" allowDownload />
    </ToolPageTemplate>
  );
}
