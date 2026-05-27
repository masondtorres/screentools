export type ClusterPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  cards: Array<{ title: string; href: string; description: string }>;
  table: Array<{ need: string; tool: string; href: string; why: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedGuides: Array<{ title: string; href: string }>;
};

export const clusterPages: ClusterPage[] = [
  {
    slug: "color-screens",
    title: "Color Screens | Full-Screen Browser Color Tools",
    h1: "Color Screens",
    description: "Open white, black, custom and preset color screens in your browser for lighting, focus, cleaning and display checks.",
    intro: "Use these full-screen color tools when you need a plain screen fast. Choose white for light, black for low light, gray for uniformity, or a custom color for testing and backgrounds.",
    cards: [
      { title: "White Screen", href: "/white-screen", description: "Bright, warm and cool white screens for light, cleaning and focus." },
      { title: "Black Screen", href: "/black-screen", description: "A dark blank screen for focus, low light and backlight checks." },
      { title: "Color Screen", href: "/color-screen", description: "Pick any HEX or RGB color and share a direct color link." },
      { title: "Red Screen", href: "/red-screen", description: "Check red subpixels and use a strong full-screen red background." },
      { title: "Green Screen", href: "/green-screen", description: "Inspect green subpixels or use a simple green background." },
      { title: "Blue Screen", href: "/blue-screen", description: "Check the blue color channel or use a calm blue background." },
      { title: "Yellow Screen", href: "/yellow-screen", description: "Use a bright mixed color for visibility and display checks." },
      { title: "Gray Screen", href: "/gray-screen", description: "Check uniformity, tint shifts, smudges and streaks." },
      { title: "Blank Screen", href: "/blank-screen", description: "A simple blank background for focus and visual reset." },
      { title: "Full Screen White", href: "/full-screen-white", description: "A direct white fullscreen page for exact-match white screen use." },
      { title: "Full Screen Black", href: "/full-screen-black", description: "A direct black fullscreen page for low-light and testing use." }
    ],
    table: [
      { need: "Need more light", tool: "White Screen", href: "/white-screen", why: "White gives the most screen light." },
      { need: "Need less light", tool: "Black Screen", href: "/black-screen", why: "Black reduces glare and visual noise." },
      { need: "Need a specific color", tool: "Color Screen", href: "/color-screen", why: "HEX, RGB and share links are supported." },
      { need: "Need to check uniformity", tool: "Gray Screen", href: "/gray-screen", why: "Gray shows uneven tint and brightness." }
    ],
    faqs: [
      { question: "Do color screens work on phones?", answer: "Yes. They run in the browser. Fullscreen support depends on the browser." },
      { question: "Can I share a color?", answer: "Yes. Use Color Screen and copy the direct setup link." }
    ],
    relatedGuides: [
      { title: "What Is a White Screen Used For?", href: "/guides/what-is-a-white-screen-used-for" },
      { title: "Best Colors for Monitor Testing", href: "/guides/best-colors-for-monitor-testing" }
    ]
  },
  {
    slug: "screen-tests",
    title: "Screen Tests | Dead Pixel, Monitor and Uniformity Checks",
    h1: "Screen Tests",
    description: "Run browser-based screen tests for dead pixels, stuck pixels, monitor patterns, backlight bleed and uniformity.",
    intro: "Use these tests to inspect a display with solid colors and simple patterns. They can reveal possible issues, but they do not repair hardware.",
    cards: [
      { title: "Dead Pixel Test", href: "/dead-pixel-test", description: "Cycle solid colors to inspect dead and stuck pixels." },
      { title: "Monitor Test", href: "/monitor-test", description: "Use colors, gradients, grids, checkerboards and text checks." },
      { title: "Backlight Bleed Test", href: "/backlight-bleed-test", description: "Use a black screen in a dim room to inspect glow." },
      { title: "Stuck Pixel Test", href: "/stuck-pixel-test", description: "Cycle colors to reveal pixels that stay on one color." },
      { title: "Screen Uniformity Test", href: "/screen-uniformity-test", description: "Use gray and color fields to compare brightness and tint." },
      { title: "Bulk Screen Testing Help", href: "/bulk-screen-testing", description: "Request help creating a simple repeatable workflow for many screens." }
    ],
    table: [
      { need: "Tiny dark dot", tool: "Dead Pixel Test", href: "/dead-pixel-test", why: "White and color screens make dark pixels easier to see." },
      { need: "Colored dot", tool: "Stuck Pixel Test", href: "/stuck-pixel-test", why: "Color cycling can reveal a pixel stuck on one channel." },
      { need: "Edge glow", tool: "Backlight Bleed Test", href: "/backlight-bleed-test", why: "Black in a dim room shows bright patches." },
      { need: "Uneven brightness", tool: "Screen Uniformity Test", href: "/screen-uniformity-test", why: "Gray makes patchy panels easier to compare." },
      { need: "Repeated checks across devices", tool: "Bulk Screen Testing Help", href: "/bulk-screen-testing", why: "It helps teams plan a repeatable test order." }
    ],
    faqs: [
      { question: "Can these tests fix a screen?", answer: "No. They help you inspect possible issues only." },
      { question: "Should I test in fullscreen?", answer: "Yes. Fullscreen removes browser bars and gives a cleaner check." }
    ],
    relatedGuides: [
      { title: "How to Test a Monitor for Dead Pixels", href: "/guides/how-to-test-monitor-for-dead-pixels" },
      { title: "Dead Pixel vs Stuck Pixel", href: "/guides/dead-pixel-vs-stuck-pixel" }
    ]
  },
  {
    slug: "screen-lighting",
    title: "Screen Lighting | Use Your Screen as a Light",
    h1: "Screen Lighting",
    description: "Use your phone, tablet or monitor as a simple screen light for video calls, desks and short lighting tasks.",
    intro: "Screen lighting tools turn a display into a plain light source. Use them for short tasks, video calls and soft fill light.",
    cards: [
      { title: "Screen Flashlight", href: "/screen-flashlight", description: "Bright white, warm and soft light modes with brightness control." },
      { title: "Zoom Light", href: "/zoom-light", description: "Warm and cool white light for video calls." },
      { title: "White Screen", href: "/white-screen", description: "A simple bright screen for light, cleaning and focus." },
      { title: "Warm Light Screen", href: "/warm-light-screen", description: "A warmer screen color for softer room and call lighting." },
      { title: "Soft Light Screen", href: "/soft-light-screen", description: "A low-harshness screen light for camera use." }
    ],
    table: [
      { need: "Quick light", tool: "Screen Flashlight", href: "/screen-flashlight", why: "It has simple light presets." },
      { need: "Video call light", tool: "Zoom Light", href: "/zoom-light", why: "Warm and cool white are easier on camera." },
      { need: "Softer light", tool: "Soft Light Screen", href: "/soft-light-screen", why: "It starts with a gentler white." }
    ],
    faqs: [
      { question: "Is a screen as bright as a flashlight?", answer: "No. It is useful for short simple tasks, not safety-critical light." },
      { question: "Which light is best for video calls?", answer: "Warm white or soft white usually looks more natural than pure bright white." }
    ],
    relatedGuides: [
      { title: "How to Use Your Screen as a Light", href: "/guides/how-to-use-your-screen-as-a-light" },
      { title: "How to Use a White Screen for Video Calls", href: "/guides/how-to-use-a-white-screen-for-video-calls" }
    ]
  },
  {
    slug: "focus-screens",
    title: "Focus Screens | Simple Full-Screen Focus Tools",
    h1: "Focus Screens",
    description: "Open low-distraction white, black and blank screens for focus, breaks, reading and timer sessions.",
    intro: "Focus screens give you a quiet full-screen background. Use a blank color, a black screen, or a simple timer when you want fewer visual distractions.",
    cards: [
      { title: "Blank Screen", href: "/blank-screen", description: "A simple blank background for visual reset and focus." },
      { title: "Black Screen", href: "/black-screen", description: "A low-light blank screen for breaks and quiet work." },
      { title: "White Screen", href: "/white-screen", description: "A clean bright screen for focus, light or cleaning." },
      { title: "Focus Timer Screen", href: "/focus-timer-screen", description: "A plain fullscreen timer with low-distraction background options." }
    ],
    table: [
      { need: "Dark workspace", tool: "Black Screen", href: "/black-screen", why: "It lowers light and visual noise." },
      { need: "Clean reset", tool: "Blank Screen", href: "/blank-screen", why: "It gives a plain background without extra controls." },
      { need: "Timed focus", tool: "Focus Timer Screen", href: "/focus-timer-screen", why: "It combines a timer with a quiet screen." }
    ],
    faqs: [
      { question: "Can a blank screen help focus?", answer: "It can reduce visual clutter, especially on a second monitor." },
      { question: "Which color is best for focus?", answer: "Black is calmer in dim rooms. White works better when you want light." }
    ],
    relatedGuides: [
      { title: "Best Screen Colors for Focus", href: "/guides/best-screen-colors-for-focus" },
      { title: "White Screen vs Black Screen", href: "/guides/white-screen-vs-black-screen" }
    ]
  }
];
