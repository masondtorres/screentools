export type SeoLandingPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  color?: string;
  presets?: Array<{ name: string; hex: string }>;
  intro: string;
  quickAnswer?: string;
  cluster?: { title: string; href: string };
  summaryRows?: Array<{ label: string; value: string }>;
  sections: Array<{ title: string; body: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
};

const rawSeoLandingPages: SeoLandingPage[] = [
  {
    slug: "red-screen",
    title: "Red Screen Online | Full Screen Red Background",
    h1: "Red Screen Online",
    description: "Open a full-screen red screen for display checks, color testing, lighting effects and simple backgrounds.",
    color: "#ff0000",
    intro: "Use a red screen to check red subpixels, create a strong color background or inspect how a display handles saturated color.",
    sections: [
      { title: "What a red screen is useful for", body: ["A red screen is helpful when testing the red channel on a monitor, phone or tablet. If a pixel does not respond on red but appears on other colors, it may point to a subpixel issue.", "Red also works as a bold background or low-detail color fill when you need a simple full-screen color fast."] },
      { title: "How to use it", body: ["Open fullscreen, lower brightness if the room is dark, and scan the display from edge to edge. Use the dead pixel test if you want to compare red with white, black, green and blue."] }
    ],
    faqs: [
      { question: "Can a red screen find dead pixels?", answer: "It can help reveal red subpixel problems, but you should test several colors." },
      { question: "Can I share this red screen?", answer: "Yes. Use the copy link button or use /color-screen?color=ff0000." }
    ]
  },
  {
    slug: "green-screen",
    title: "Green Screen Online | Full Screen Green Background",
    h1: "Green Screen Online",
    description: "Open a full-screen green screen for display testing, color checks and simple browser backgrounds.",
    color: "#00b050",
    intro: "Use a green screen to inspect green subpixels and test how a display handles a bright, solid green field.",
    sections: [
      { title: "Display testing use", body: ["Green is one of the three primary screen color channels. A full-screen green field can reveal stuck or weak green subpixels that may not show on white alone.", "It can also make dust and surface marks easier to compare against other solid colors."] },
      { title: "Best way to inspect", body: ["Use fullscreen and check the whole panel slowly. Follow with red, blue, white and black if you are doing a real pixel test."] }
    ],
    faqs: [
      { question: "Is this a chroma key tool?", answer: "No. It is a simple browser green screen, not a video editor or chroma key app." },
      { question: "Does it work on mobile?", answer: "Yes. It works in modern mobile browsers, with fullscreen support depending on the browser." }
    ]
  },
  {
    slug: "blue-screen",
    title: "Blue Screen Online | Full Screen Blue Background",
    h1: "Blue Screen Online",
    description: "Open a full-screen blue screen for monitor testing, backgrounds and color checks.",
    color: "#0057ff",
    intro: "A blue screen helps you check the blue color channel and create a clean full-screen blue background in the browser.",
    sections: [
      { title: "Why use blue", body: ["Blue can reveal subpixel issues that are not obvious on red or green. It is also useful for checking color uniformity on screens that show blue tint or uneven patches.", "Use it as part of a set of solid-color checks rather than as the only test."] },
      { title: "How to test", body: ["Open the screen in fullscreen, scan slowly, then compare with white, black, red, green and gray. Lower brightness if the blue feels intense."] }
    ],
    faqs: [
      { question: "Can a blue screen fix a monitor?", answer: "No. It only helps you inspect the screen visually." },
      { question: "What should I compare it with?", answer: "Compare blue with red, green, white, black and gray." }
    ]
  },
  {
    slug: "yellow-screen",
    title: "Yellow Screen Online | Full Screen Yellow Background",
    h1: "Yellow Screen Online",
    description: "Open a full-screen yellow screen for combined red and green channel checks, backgrounds and lighting.",
    color: "#fff200",
    intro: "A yellow screen combines red and green channels, which can reveal color issues that do not show on one primary color alone.",
    sections: [
      { title: "Useful checks", body: ["Yellow can help reveal tint shifts, stuck pixels and uneven brightness. It is especially useful after checking red and green separately.", "It is bright, so use the brightness slider if you are in a dim room."] },
      { title: "Common uses", body: ["Use it for display checks, color comparison, a bright temporary background or a warm-looking light source. For video calls, warm white is usually more natural."] }
    ],
    faqs: [
      { question: "Why is yellow useful for monitor testing?", answer: "It combines red and green, so it can reveal issues in those channels together." },
      { question: "Is yellow good for lighting?", answer: "It can be bright, but warm white usually looks more natural." }
    ]
  },
  {
    slug: "pink-screen",
    title: "Pink Screen Online | Full Screen Pink Background",
    h1: "Pink Screen Online",
    description: "Open a full-screen pink screen for color backgrounds, display checks and soft lighting effects.",
    color: "#ff4fa3",
    intro: "A pink screen is useful when you need a soft saturated background or want to compare how a display handles warm mixed colors.",
    sections: [
      { title: "Pink as a test color", body: ["Pink is not a core pixel-test color, but it can show uneven tint, banding or color shifts that feel less obvious on primary colors.", "It is best used after a basic white, black, red, green and blue check."] },
      { title: "Background and light uses", body: ["Pink can work as a simple full-screen background or a soft color wash. Use lower brightness if it is close to your eyes."] }
    ],
    faqs: [
      { question: "Is pink part of a dead pixel test?", answer: "It can help, but primary colors and gray are more important." },
      { question: "Can I choose a different pink?", answer: "Yes. Use the Color Screen page and enter your own HEX or RGB value." }
    ]
  },
  {
    slug: "purple-screen",
    title: "Purple Screen Online | Full Screen Purple Background",
    h1: "Purple Screen Online",
    description: "Open a full-screen purple screen for backgrounds, color checks and display inspection.",
    color: "#7c3aed",
    intro: "Purple combines red and blue, making it useful for checking mixed-color behavior and for creating a simple full-screen background.",
    sections: [
      { title: "When purple helps", body: ["Purple can make some tint and uniformity issues easier to notice, especially after you have checked red and blue separately.", "It can also be used as a clean full-screen color for focus, photography backgrounds or simple visual setups."] },
      { title: "How to use it safely", body: ["Use fullscreen, keep brightness comfortable, and exit with Esc where supported. For monitor testing, compare with white, black and gray too."] }
    ],
    faqs: [
      { question: "Does purple test red and blue?", answer: "It uses both red and blue channels, so it can help compare mixed-color behavior." },
      { question: "Can I make it darker?", answer: "Yes. Lower brightness or use the custom color screen." }
    ]
  },
  {
    slug: "orange-screen",
    title: "Orange Screen Online | Full Screen Orange Background",
    h1: "Orange Screen Online",
    description: "Open a full-screen orange screen for warm color backgrounds, light and display checks.",
    color: "#ff8a00",
    intro: "An orange screen gives a warm full-screen color for backgrounds, soft light effects and checking display color shifts.",
    sections: [
      { title: "Best uses", body: ["Orange can create a warm glow from a monitor or tablet. It can also help compare warm color rendering against yellow, red and white.", "For video calls, orange may be too saturated. Warm white is usually better for natural skin tones."] },
      { title: "Testing tip", body: ["If orange looks patchy, compare it with gray and yellow. Solid warm colors can make uneven tint easier to see."] }
    ],
    faqs: [
      { question: "Is orange good for video call lighting?", answer: "Usually warm white is better. Orange can look too strong." },
      { question: "Can I use it on a phone?", answer: "Yes. It works in the browser on phones and tablets." }
    ]
  },
  {
    slug: "gray-screen",
    title: "Gray Screen Online | Full Screen Uniformity Test",
    h1: "Gray Screen Online",
    description: "Open a full-screen gray screen for monitor uniformity, tint checks, streaks and cleaning checks.",
    color: "#808080",
    intro: "A gray screen is one of the best simple checks for display uniformity, streaks, tint shifts and surface marks.",
    sections: [
      { title: "Why gray matters", body: ["Gray sits between black and white, so uneven brightness and color tint can be easier to see. It is useful for checking large monitors and laptop screens.", "It can also reveal streaks after cleaning because smears often show clearly on mid-gray."] },
      { title: "How to inspect", body: ["Open fullscreen and sit at your normal viewing distance. Look for patches that are warmer, cooler, brighter or darker than nearby areas. Some variation is normal on many displays."] }
    ],
    faqs: [
      { question: "Is gray good for monitor testing?", answer: "Yes. Gray is useful for uniformity and tint checks." },
      { question: "Can gray show cleaning streaks?", answer: "Yes. Mid-gray often makes streaks easier to see." }
    ]
  },
  {
    slug: "blank-screen",
    title: "Blank Screen Online | Simple Full Screen Background",
    h1: "Blank Screen Online",
    description: "Open a blank full-screen background for focus, cleaning, light, privacy or simple screen testing.",
    color: "#ffffff",
    intro: "A blank screen gives you a clean full-screen background without distractions. Use white, black or a custom color depending on the task.",
    sections: [
      { title: "What blank screen means", body: ["A blank screen is just a plain color filling the browser. It can help with focus, lighting, cleaning or display checks.", "Use white for light and dust. Use black for low light or backlight checks. Use gray for uniformity."] },
      { title: "How to choose a color", body: ["If you are not sure, start with white. Switch to black if you want less light. Use Color Screen if you need a specific HEX or RGB value."] }
    ],
    faqs: [
      { question: "Is a blank screen the same as turning off the monitor?", answer: "No. The monitor stays on and shows a plain browser page." },
      { question: "Can I make it black?", answer: "Yes. Use Black Screen or set a custom color." }
    ]
  },
  {
    slug: "full-screen-white",
    title: "Full Screen White | Browser White Screen",
    h1: "Full Screen White",
    description: "Open a full-screen white browser page for light, video calls, cleaning and monitor checks.",
    color: "#ffffff",
    presets: [{ name: "Bright white", hex: "#ffffff" }, { name: "Warm white", hex: "#fff2d8" }, { name: "Cool white", hex: "#eef6ff" }],
    intro: "Full Screen White opens a clean white browser screen with brightness, timer and fullscreen controls.",
    sections: [
      { title: "Best uses", body: ["Use full-screen white when you need light, a blank background, a cleaning check or a simple display check.", "Warm white is more comfortable for video calls. Bright white is better for spotting dust."] },
      { title: "How to use it", body: ["Choose a white mode, adjust brightness, and open fullscreen. Use Esc to exit when your browser supports it."] }
    ],
    faqs: [
      { question: "Why not use the normal White Screen page?", answer: "You can. This page is a direct landing page for people searching for full-screen white." },
      { question: "Can I download a white PNG?", answer: "Use the White Screen page for the PNG download option." }
    ]
  },
  {
    slug: "full-screen-black",
    title: "Full Screen Black | Browser Black Screen",
    h1: "Full Screen Black",
    description: "Open a full-screen black browser page for focus, low light, backlight checks and clean visual space.",
    color: "#000000",
    presets: [{ name: "Black", hex: "#000000" }],
    intro: "Full Screen Black gives you a dark blank browser page for focus, low-light use and basic monitor checks.",
    sections: [
      { title: "Best uses", body: ["A black screen reduces light and creates a clean visual space. It is useful during breaks, audio work or display checks.", "It can also help reveal backlight bleed or bright stuck pixels in a dim room."] },
      { title: "How to inspect", body: ["Open fullscreen, reduce reflections, and look around the edges and corners. This is a visual check, not a hardware repair tool."] }
    ],
    faqs: [
      { question: "Does full-screen black turn off the display?", answer: "No. It shows black in the browser while the screen remains on." },
      { question: "Can it show backlight bleed?", answer: "It can help you see glow or bright patches, especially in a dark room." }
    ]
  },
  {
    slug: "screen-cleaning",
    title: "Screen Cleaning Screen | Find Dust, Smudges and Streaks",
    h1: "Screen Cleaning Screen",
    description: "Use a plain full-screen background to find dust, fingerprints, smudges and streaks before cleaning a display.",
    color: "#ffffff",
    presets: [{ name: "White", hex: "#ffffff" }, { name: "Gray", hex: "#808080" }, { name: "Black", hex: "#000000" }],
    intro: "Use white, gray and black screens to spot dust, fingerprints and streaks before and after cleaning.",
    sections: [
      { title: "How it helps", body: ["White makes dust and dark marks easier to see. Black shows fingerprints and oily smudges. Gray is useful for checking streaks after wiping.", "Always clean gently. Do not spray liquid directly on a screen."] },
      { title: "Safe cleaning reminder", body: ["Use a clean microfiber cloth. If needed, lightly dampen the cloth, not the display. Avoid rough paper towels, harsh chemicals and heavy pressure."] }
    ],
    faqs: [
      { question: "Which color is best for cleaning?", answer: "White is best for dust. Black is useful for fingerprints. Gray helps show streaks." },
      { question: "Should I clean while fullscreen is active?", answer: "Exit fullscreen or lock the screen before wiping near controls and edges." }
    ]
  },
  {
    slug: "backlight-bleed-test",
    title: "Backlight Bleed Test | Full Screen Black Monitor Check",
    h1: "Backlight Bleed Test",
    description: "Use a full-screen black background to check for backlight bleed, glow and bright patches on a display.",
    color: "#000000",
    presets: [{ name: "Black", hex: "#000000" }],
    intro: "A backlight bleed test uses a black full-screen background in a dim room so you can look for uneven glow near the edges and corners.",
    sections: [
      { title: "How to test", body: ["Dim the room, open the black screen in fullscreen, and let your eyes adjust. Look around the edges and corners for bright patches or uneven glow.", "Some glow can be normal depending on the panel type, brightness and viewing angle."] },
      { title: "Common mistakes", body: ["Do not test with room reflections on the screen. Do not judge from an extreme side angle unless that is how you normally use the monitor.", "Lower brightness and test again if everything looks washed out."] },
      { title: "Warranty note", body: ["If a new display has a clear issue, take photos at normal brightness and contact the seller or manufacturer. This is not legal advice."] }
    ],
    faqs: [
      { question: "Is backlight bleed easier to see on black?", answer: "Yes. Bright patches stand out most on a dark screen." },
      { question: "Can this fix backlight bleed?", answer: "No. It only helps you inspect the display." }
    ]
  },
  {
    slug: "stuck-pixel-test",
    title: "Stuck Pixel Test Online | Full Screen Color Cycle",
    h1: "Stuck Pixel Test",
    description: "Use full-screen colors to look for stuck pixels that stay red, green, blue or bright while the rest of the screen changes.",
    color: "#ff0000",
    presets: [{ name: "Red", hex: "#ff0000" }, { name: "Green", hex: "#00b050" }, { name: "Blue", hex: "#0057ff" }, { name: "White", hex: "#ffffff" }, { name: "Black", hex: "#000000" }],
    intro: "A stuck pixel test uses solid color screens to reveal pixels that stay on one color when the rest of the display changes.",
    sections: [
      { title: "How to use it", body: ["Clean the screen, open fullscreen, and move through red, green, blue, white and black. Pause on any color where a tiny dot stays different from the surrounding screen.", "Use the Dead Pixel Test if you want auto-cycle controls and the full color sequence."] },
      { title: "Best uses", body: ["This page is useful when a pixel looks bright or colored instead of dark. Red, green and blue are the most important colors because they match the main subpixel channels."] },
      { title: "Common mistakes", body: ["Do not assume a mark is a stuck pixel until you clean the screen. Do not use this page as a repair tool. It helps you inspect only."] }
    ],
    faqs: [
      { question: "What does a stuck pixel look like?", answer: "It may stay red, green, blue, white or bright while the rest of the screen changes." },
      { question: "Can this repair a stuck pixel?", answer: "No. It only helps you inspect the display." }
    ]
  },
  {
    slug: "screen-uniformity-test",
    title: "Screen Uniformity Test | Gray and Color Display Check",
    h1: "Screen Uniformity Test",
    description: "Check screen brightness and tint uniformity with gray and solid color full-screen backgrounds.",
    color: "#808080",
    presets: [{ name: "Gray", hex: "#808080" }, { name: "White", hex: "#ffffff" }, { name: "Black", hex: "#000000" }, { name: "Blue", hex: "#0057ff" }],
    intro: "A screen uniformity test helps you compare brightness, tint and patchiness across a display using gray and solid colors.",
    sections: [
      { title: "How to test uniformity", body: ["Open the gray screen in fullscreen and sit at your normal viewing distance. Look for areas that appear warmer, cooler, brighter or darker than the rest.", "Repeat with white and black. Gray is the main check, but other colors can show tint and glow issues."] },
      { title: "Best settings", body: ["Use normal brightness first. Then lower and raise brightness to see whether the issue changes. Avoid reflections and test from your normal viewing angle."] },
      { title: "Common mistakes", body: ["Do not judge uniformity from a sharp side angle unless that is how you use the display. Do not compare two screens with different brightness settings."] }
    ],
    faqs: [
      { question: "Why use gray for uniformity?", answer: "Gray makes uneven brightness and tint easier to compare than many saturated colors." },
      { question: "Is some uniformity variation normal?", answer: "Yes. Many displays have small differences across the panel." }
    ]
  },
  {
    slug: "warm-light-screen",
    title: "Warm Light Screen | Full Screen Warm White Light",
    h1: "Warm Light Screen",
    description: "Open a warm full-screen light for video calls, desk light and softer evening lighting.",
    color: "#fff2d8",
    presets: [{ name: "Warm white", hex: "#fff2d8" }, { name: "Soft amber", hex: "#ffe6b8" }, { name: "Bright white", hex: "#ffffff" }],
    intro: "A warm light screen uses a softer white color that can feel more comfortable at night or on video calls.",
    sections: [
      { title: "How to use it", body: ["Choose warm white, lower brightness, and open fullscreen. Place the screen so it lights the room or your face without pointing harsh light into your eyes."] },
      { title: "Best uses", body: ["Warm light is useful for video calls, desk light and calm backgrounds. It often looks more natural than pure white in rooms with warm lamps."] },
      { title: "Common mistakes", body: ["Do not set brightness to maximum in a dark room. Do not use orange or yellow if you want natural camera lighting; warm white is usually better."] }
    ],
    faqs: [
      { question: "Is warm light good for video calls?", answer: "Yes. It can look natural in rooms with warm lamps." },
      { question: "Is warm light easier on the eyes?", answer: "Many people find it softer than bright cool white, especially at night." }
    ]
  },
  {
    slug: "soft-light-screen",
    title: "Soft Light Screen | Gentle Full Screen Light",
    h1: "Soft Light Screen",
    description: "Use a soft full-screen light for camera fill, gentle room light and short low-harshness lighting tasks.",
    color: "#fff7ed",
    presets: [{ name: "Soft light", hex: "#fff7ed" }, { name: "Warm white", hex: "#fff2d8" }, { name: "Cool white", hex: "#eef6ff" }],
    intro: "A soft light screen gives you a gentle full-screen light source with brightness control.",
    sections: [
      { title: "How to use it", body: ["Start with soft light and medium brightness. Open fullscreen, check the room or camera preview, then adjust brightness slowly."] },
      { title: "Best uses", body: ["Soft light works well for video calls, quick photos, reading nearby labels and adding gentle fill light on a desk."] },
      { title: "Common mistakes", body: ["Do not place the screen too close to your eyes. Do not use it as your only light where safety matters."] }
    ],
    faqs: [
      { question: "What makes this different from white screen?", answer: "It starts with a softer warm white instead of pure bright white." },
      { question: "Can I use it on a phone?", answer: "Yes. It works in the browser, with fullscreen support depending on the device." }
    ]
  },
  {
    slug: "focus-timer-screen",
    title: "Focus Timer Screen | Full Screen Minimal Timer",
    h1: "Focus Timer Screen",
    description: "Use a simple full-screen focus timer with quiet background colors and no account required.",
    color: "#111827",
    presets: [{ name: "Dark focus", hex: "#111827" }, { name: "Soft white", hex: "#f8fafc" }, { name: "Warm gray", hex: "#e5e7eb" }],
    intro: "A focus timer screen gives you a plain fullscreen background with a timer so a second monitor can stay useful without distracting you.",
    sections: [
      { title: "How to use it", body: ["Choose a low-distraction background, set the timer, and open fullscreen. Keep the color comfortable for your room and press Esc to exit when supported."] },
      { title: "Best uses", body: ["Use it for short focus sessions, breaks, reading time or a second monitor that you do not want filled with apps."] },
      { title: "Common mistakes", body: ["Do not use a bright white timer in a dark room if it pulls attention. Pick black or warm gray for lower visual noise."] }
    ],
    faqs: [
      { question: "Does this require an account?", answer: "No. It runs in your browser." },
      { question: "Can I use a dark background?", answer: "Yes. Dark focus is the default preset." }
    ]
  }
];

export const seoLandingPages: SeoLandingPage[] = rawSeoLandingPages.map((page) => ({
  ...page,
  quickAnswer: page.quickAnswer ?? `${page.intro} Choose a color, open it full screen, adjust brightness if needed, and press Esc to exit where supported.`,
  cluster: page.cluster ?? inferCluster(page.slug),
  summaryRows: page.summaryRows ?? [
    { label: "Best for", value: inferBestFor(page.slug) },
    { label: "Main control", value: "Color presets, brightness, timer and fullscreen." },
    { label: "Exit", value: "Press Esc where supported or use the on-screen exit button." }
  ]
}));

function inferCluster(slug: string) {
  if (["backlight-bleed-test", "stuck-pixel-test", "screen-uniformity-test"].includes(slug)) return { title: "Screen Tests", href: "/screen-tests" };
  if (["warm-light-screen", "soft-light-screen"].includes(slug)) return { title: "Screen Lighting", href: "/screen-lighting" };
  if (["blank-screen", "focus-timer-screen"].includes(slug)) return { title: "Focus Screens", href: "/focus-screens" };
  return { title: "Color Screens", href: "/color-screens" };
}

function inferBestFor(slug: string) {
  if (slug.includes("bleed")) return "Checking edge glow on a dark screen.";
  if (slug.includes("uniformity")) return "Checking brightness and tint consistency.";
  if (slug.includes("stuck")) return "Finding pixels stuck on one color.";
  if (slug.includes("light")) return "Using the screen as a soft light source.";
  if (slug.includes("focus")) return "Low-distraction timed focus sessions.";
  if (slug.includes("cleaning")) return "Finding dust, fingerprints and streaks.";
  return "Opening a plain full-screen color quickly.";
}
