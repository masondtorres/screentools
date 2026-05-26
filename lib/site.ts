export const site = {
  name: "ScreenTools",
  url: "https://you-are-building-a-production-ready-ruby.vercel.app",
  description: "Fast full-screen color tools for lighting, focus, screen cleaning and monitor testing."
};

export const toolLinks = [
  { title: "White Screen", href: "/white-screen", description: "Open a clean white screen for light, focus and cleaning." },
  { title: "Black Screen", href: "/black-screen", description: "Use a black screen for low light, focus and display checks." },
  { title: "Color Screen", href: "/color-screen", description: "Pick any full-screen color with HEX or RGB controls." },
  { title: "Dead Pixel Test", href: "/dead-pixel-test", description: "Cycle colors to inspect dead or stuck pixels." },
  { title: "Monitor Test", href: "/monitor-test", description: "Check colors, gradients, grids, sharpness and backlight." },
  { title: "Screen Flashlight", href: "/screen-flashlight", description: "Turn your phone, tablet or monitor into a light." },
  { title: "Zoom Light", href: "/zoom-light", description: "Use your screen as soft light for video calls." }
];

export const guides = [
  "What Is a White Screen Used For?",
  "How to Test a Monitor for Dead Pixels",
  "How to Use Your Screen as a Light",
  "How to Clean Your Screen Safely",
  "Best Colors for Monitor Testing",
  "How to Use a White Screen for Video Calls"
].map((title) => ({
  title,
  href: `/guides/${title.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")}`,
  description: "A short plain-language guide for using simple screen tools."
}));

export const presetColors = [
  { name: "White", hex: "#ffffff", key: "1" },
  { name: "Black", hex: "#000000", key: "2" },
  { name: "Red", hex: "#ff0000", key: "3" },
  { name: "Green", hex: "#00b050", key: "4" },
  { name: "Blue", hex: "#0057ff", key: "5" },
  { name: "Yellow", hex: "#fff200", key: "6" },
  { name: "Orange", hex: "#ff8a00", key: "7" },
  { name: "Purple", hex: "#7c3aed", key: "8" },
  { name: "Pink", hex: "#ff4fa3", key: "9" }
];

export const whiteVariants = [
  { name: "Bright white", hex: "#ffffff" },
  { name: "Warm white", hex: "#fff2d8" },
  { name: "Cool white", hex: "#eef6ff" },
  { name: "Soft light", hex: "#fff7ed" }
];

export function canonical(path: string) {
  return `${site.url}${path}`;
}
