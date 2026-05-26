export type FunEffect =
  | "broken"
  | "update"
  | "blue-crash"
  | "dvd"
  | "glitch"
  | "code-rain"
  | "loading"
  | "frozen"
  | "error";

export type FunScreenPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
  effect: FunEffect;
  motionWarning?: boolean;
  sections: Array<{ title: string; body: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const funScreens: FunScreenPage[] = [
  {
    slug: "broken-screen-prank",
    title: "Broken Screen Prank | Fake Cracked Glass Screen Effect",
    h1: "Broken Screen Prank",
    description: "Open a fake broken screen visual effect in full screen. A harmless cracked glass screen simulator for jokes, videos and backgrounds.",
    cardTitle: "Broken Screen Prank",
    cardDescription: "A fake cracked glass screen effect with safe exit controls.",
    effect: "broken",
    related: ["fake-blue-screen", "glitch-screen", "fake-error-screen"],
    sections: [
      { title: "What is a broken screen prank?", body: ["A broken screen prank is a visual effect that draws fake cracks over a plain background. Nothing is actually broken. The effect uses generated lines and shapes, not downloaded images or real device damage."] },
      { title: "How to use it", body: ["Choose a crack style and background, then start fullscreen. Press Esc to exit where your browser supports it. Use reset if you add extra cracks while tapping."] },
      { title: "Safe ways to use it", body: ["Use it for videos, backgrounds or light jokes with people who will understand it quickly. Do not use it to scare someone, damage trust, or pretend a device was really broken."] }
    ],
    faqs: [
      { question: "Does this break my screen?", answer: "No. This is a visual effect only. Nothing is actually broken." },
      { question: "Can I exit fullscreen?", answer: "Yes. Press Esc where supported, or use the on-screen exit button." }
    ]
  },
  {
    slug: "fake-windows-update",
    title: "Fake Windows Update Screen | Full Screen Update Simulator",
    h1: "Fake Windows Update Screen",
    description: "Open a fake Windows-style update screen in full screen. A harmless update simulator for jokes, videos and backgrounds.",
    cardTitle: "Fake Update",
    cardDescription: "A generic update-style screen with custom progress.",
    effect: "update",
    related: ["fake-loading-screen", "fake-frozen-screen", "fake-blue-screen"],
    sections: [
      { title: "What is a fake update screen?", body: ["This is a generic update-style visual effect. It does not use Windows logos, real system dialogs or real update commands. Nothing is installing or changing on your device."] },
      { title: "How to use it", body: ["Choose the starting percent, duration and message. Start fullscreen and use it as a harmless visual for a video, background or quick joke. Press Esc to exit fullscreen."] },
      { title: "Good uses for videos and jokes", body: ["It can work as a background for a skit, a stream scene or a harmless visual gag. Avoid using it in ways that cause panic or block someone from using their own device."] }
    ],
    faqs: [
      { question: "Is this a real update?", answer: "No. It is a visual effect only." },
      { question: "Does it copy Windows?", answer: "No. It is generic and does not use Windows logos or exact system text." }
    ]
  },
  {
    slug: "fake-blue-screen",
    title: "Fake Blue Screen | Full Screen Crash Screen Simulator",
    h1: "Fake Blue Screen",
    description: "Open a fake blue crash screen in full screen. A harmless visual simulator for jokes, videos and backgrounds.",
    cardTitle: "Fake Blue Screen",
    cardDescription: "A generic crash-style blue screen effect.",
    effect: "blue-crash",
    related: ["fake-error-screen", "fake-windows-update", "glitch-screen"],
    sections: [
      { title: "What is a fake blue screen?", body: ["This page shows a generic blue crash-style screen. It does not use Microsoft branding, real QR codes or exact operating system text. Nothing is actually wrong with your computer."] },
      { title: "How to use it", body: ["Customize the headline if you want, start fullscreen, and press Esc to exit. Keep the text clearly fake and do not ask for passwords, payments or security actions."] },
      { title: "Safe use note", body: ["Use this as a visual effect only. Do not use it to make someone think their device, files or account are at risk."] }
    ],
    faqs: [
      { question: "Is this a real crash?", answer: "No. It is a harmless screen effect." },
      { question: "Can it restart my computer?", answer: "No. It runs in the browser only." }
    ]
  },
  {
    slug: "dvd-screensaver",
    title: "DVD Screensaver Online | Bouncing Logo Screen",
    h1: "DVD Screensaver Online",
    description: "Open a bouncing screensaver effect in full screen. Customize the text, color and speed for a simple nostalgic screen effect.",
    cardTitle: "DVD Screensaver",
    cardDescription: "A bouncing custom text screen. No real DVD logo.",
    effect: "dvd",
    related: ["code-rain-screen", "glitch-screen", "fake-loading-screen"],
    sections: [
      { title: "What is a bouncing screensaver?", body: ["This is a simple bouncing text effect inspired by old screensavers. It uses your custom text, not the actual DVD logo."] },
      { title: "How to customize it", body: ["Change the text, background, color, speed and size. Start fullscreen and watch the corner hit counter if you are waiting for a perfect bounce."] },
      { title: "Use it as a background", body: ["The effect works well as a light background for videos, streams or idle screens. Press Esc to exit fullscreen."] }
    ],
    faqs: [
      { question: "Does this use the DVD logo?", answer: "No. It uses custom text or a generic label." },
      { question: "Can I change the text?", answer: "Yes. Use the custom text field." }
    ]
  },
  {
    slug: "glitch-screen",
    title: "Glitch Screen Effect | Full Screen Digital Glitch Visual",
    h1: "Glitch Screen Effect",
    description: "Open a full-screen digital glitch effect for videos, backgrounds and harmless visual effects.",
    cardTitle: "Glitch Screen",
    cardDescription: "A controlled digital glitch visual with motion warning.",
    effect: "glitch",
    motionWarning: true,
    related: ["code-rain-screen", "fake-blue-screen", "fake-error-screen"],
    sections: [
      { title: "What is a glitch screen?", body: ["A glitch screen is a stylized visual effect with blocks, noise and color shifts. It is not a real system problem."] },
      { title: "How to use it", body: ["Choose intensity, color mode and speed. Keep motion low if people will watch for more than a moment. The effect avoids rapid strobe patterns."] },
      { title: "Motion warning", body: ["Contains motion. Avoid using this if you are sensitive to flashing, animation or visual effects."] }
    ],
    faqs: [
      { question: "Is this safe for sensitive viewers?", answer: "It contains motion. Avoid it if you are sensitive to flashing or visual effects." },
      { question: "Is it a real error?", answer: "No. It is a visual effect only." }
    ]
  },
  {
    slug: "code-rain-screen",
    title: "Code Rain Screen Effect | Full Screen Falling Code Visual",
    h1: "Code Rain Screen Effect",
    description: "Open a full-screen code rain effect for backgrounds, videos and fun screen visuals.",
    cardTitle: "Code Rain",
    cardDescription: "A falling code rain canvas with color and density controls.",
    effect: "code-rain",
    motionWarning: true,
    related: ["dvd-screensaver", "glitch-screen", "fake-loading-screen"],
    sections: [
      { title: "What is code rain?", body: ["Code rain is a falling text visual made with canvas. It is useful as a background for videos, streams or fun displays. It does not use movie logos or branded artwork."] },
      { title: "How to use it", body: ["Choose a color, speed and density. Start fullscreen and press Esc to exit. Lower density if the screen feels too busy."] },
      { title: "Responsible use", body: ["This is a visual background only. Do not present it as a real device, account or private-data event."] }
    ],
    faqs: [
      { question: "Does this show real code?", answer: "No. It displays random visual characters." },
      { question: "Can I change the color?", answer: "Yes. Choose green, blue, white or amber." }
    ]
  },
  {
    slug: "fake-loading-screen",
    title: "Fake Loading Screen | Full Screen Loading Simulator",
    h1: "Fake Loading Screen",
    description: "Open a fake loading screen in full screen with custom text, progress and timing.",
    cardTitle: "Fake Loading Screen",
    cardDescription: "A customizable loading screen simulator.",
    effect: "loading",
    related: ["fake-windows-update", "fake-frozen-screen", "dvd-screensaver"],
    sections: [
      { title: "What is a fake loading screen?", body: ["It is a full-screen loading visual with a progress bar or spinner. It does not load files, install software or change your device."] },
      { title: "How to use it", body: ["Set the message, starting percent, duration and end message. Start fullscreen, then exit with Esc or the on-screen button."] },
      { title: "Safe default copy", body: ["Use harmless text like Loading, Almost ready, or This is a visual effect only. Avoid security or payment warnings."] }
    ],
    faqs: [
      { question: "Is anything actually loading?", answer: "No. This is a visual effect only." },
      { question: "Can I change the message?", answer: "Yes. Use the custom message control." }
    ]
  },
  {
    slug: "fake-frozen-screen",
    title: "Fake Frozen Screen | Full Screen Freeze Effect",
    h1: "Fake Frozen Screen",
    description: "Open a fake frozen screen visual effect. A harmless full-screen freeze simulator for jokes and videos.",
    cardTitle: "Fake Frozen Screen",
    cardDescription: "A frosted overlay and generic frozen-screen visual.",
    effect: "frozen",
    related: ["fake-loading-screen", "fake-error-screen", "broken-screen-prank"],
    sections: [
      { title: "What is a fake frozen screen?", body: ["It is a visual effect that makes the screen look stuck or frosted. It does not copy real operating system dialogs and it does not freeze the browser."] },
      { title: "How to use it", body: ["Start fullscreen and use it for a harmless video or background. Press Esc to exit. The browser remains under your control."] },
      { title: "Safe use note", body: ["Do not use it to interrupt someone else's work or make them think a device is damaged."] }
    ],
    faqs: [
      { question: "Is the browser frozen?", answer: "No. The page is still interactive." },
      { question: "Does it copy real app dialogs?", answer: "No. It uses generic visual elements only." }
    ]
  },
  {
    slug: "fake-error-screen",
    title: "Fake Error Screen | Full Screen Error Message Simulator",
    h1: "Fake Error Screen",
    description: "Create a fake full-screen error message for harmless jokes, videos and backgrounds.",
    cardTitle: "Fake Error Screen",
    cardDescription: "A generic error-style screen with custom text.",
    effect: "error",
    related: ["fake-blue-screen", "fake-frozen-screen", "glitch-screen"],
    sections: [
      { title: "What is a fake error screen?", body: ["It is a custom full-screen message for harmless visuals. Keep it generic and do not ask viewers to take account, money, device or private-data actions."] },
      { title: "How to use it", body: ["Choose a theme, headline, message and optional progress bar. Keep the wording clearly generic and avoid anything that asks the viewer to take risky action."] },
      { title: "Responsible use", body: ["Use this for videos, backgrounds or obvious jokes. Do not use it to mislead people about accounts, money, device safety or private data."] }
    ],
    faqs: [
      { question: "Can I make a scary warning?", answer: "No. Keep it generic and clearly harmless." },
      { question: "Can I exit fullscreen?", answer: "Yes. Press Esc where supported or use the exit control." }
    ]
  }
];
