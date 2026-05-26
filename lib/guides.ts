export type GuideArticle = {
  title: string;
  slug: string;
  description: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ title: string; href: string }>;
};

export const guideArticles: GuideArticle[] = [
  {
    title: "What Is a White Screen Used For?",
    slug: "what-is-a-white-screen-used-for",
    description: "Learn practical uses for a white screen, including light, video calls, cleaning, focus and monitor checks.",
    intro: "A white screen is a plain bright screen you can open in your browser. People use it as a simple light source, a clean background, a way to see dust on a display, and a quick check for dark pixels or uneven color.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "A white screen is useful when you need a bright, blank display without downloading anything. It can help light your face for a call, make dust easier to see before cleaning, fill a room with soft light, or show dark marks on a monitor.",
          "It is not a repair tool and it will not fix a screen. It is a simple visual tool that helps you see what is already there."
        ]
      },
      {
        title: "How to use a white screen",
        paragraphs: [
          "Open the white screen tool. Pick bright white, warm white, or cool white. Start with lower brightness if you are in a dark room. Press Go Full Screen when you are ready. If your browser supports native fullscreen, it will use it. If not, the page uses a full-window fallback.",
          "Use the timer if you only need the white screen for a short task. This is helpful for quick lighting during a video call or while cleaning a display. Press Esc to exit fullscreen where your browser supports it."
        ]
      },
      {
        title: "Best uses",
        paragraphs: [
          "For lighting, place the screen in front of you and lower brightness until it feels comfortable. Warm white often looks better at night. Cool white can look cleaner in daylight.",
          "For cleaning, open a white screen and look for dust, streaks, and fingerprints. Turn off fullscreen or lock your screen before wiping near controls. Use a soft microfiber cloth and avoid spraying liquid directly on the display.",
          "For display checks, white can reveal dark pixels, dust spots, pressure marks, and uneven color. Move your eyes slowly across the panel, including the edges and corners."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not stare at a bright white screen for a long time, especially in a dark room. Lower the brightness if your eyes feel strained.",
          "Do not assume every mark is a bad pixel. Dust on the surface can look like a pixel issue. Clean the screen gently before judging.",
          "Do not use a white screen as proof that a monitor is perfect. It is only one visual check. Use black, red, green, blue, gray, and gradient tests for a broader view."
        ]
      },
      {
        title: "Related ScreenTools links",
        paragraphs: [
          "Use the White Screen page for the main tool. Use the Dead Pixel Test for color cycling. Use the Zoom Light page if your goal is better video call lighting. Use the Screen Cleaning page if you are checking dust and smudges."
        ]
      }
    ],
    faqs: [
      { question: "Is a white screen safe to use?", answer: "Yes, for normal short use. Lower brightness if the screen feels harsh and avoid staring directly at it for long periods." },
      { question: "Can a white screen fix dead pixels?", answer: "No. It can help you see pixel problems, but it does not repair hardware." },
      { question: "Is warm white better than bright white?", answer: "Warm white is often more comfortable at night. Bright white gives the most light." }
    ],
    related: [
      { title: "White Screen", href: "/white-screen" },
      { title: "Dead Pixel Test", href: "/dead-pixel-test" },
      { title: "Zoom Light", href: "/zoom-light" }
    ]
  },
  {
    title: "How to Test a Monitor for Dead Pixels",
    slug: "how-to-test-monitor-for-dead-pixels",
    description: "Use solid full-screen colors to check a monitor, phone or tablet for dead or stuck pixels.",
    intro: "To test for dead pixels, clean the screen, open a solid color in fullscreen, and inspect the panel one color at a time. Use white, black, red, green, blue, yellow, cyan, magenta, and gray.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "A dead pixel test works by showing solid colors across the whole screen. A dead pixel may stay dark. A stuck pixel may stay red, green, blue, white, or another color while the rest of the screen changes.",
          "The test does not repair a display. It helps you spot possible problems so you can decide whether to keep testing, document the issue, or contact the seller or manufacturer."
        ]
      },
      {
        title: "Step-by-step test",
        paragraphs: [
          "First, clean the screen gently with a microfiber cloth. Dust and lint can look like bad pixels, so remove surface marks before you begin.",
          "Second, open the Dead Pixel Test page and press Go Full Screen. Start with white, then black, then red, green, blue, yellow, cyan, magenta, and gray. Move slowly. Check the center, edges, and corners.",
          "Third, use manual mode when you need more time. Use auto-cycle only after you understand what you are looking for. If colors move too quickly, pause the cycle or increase the interval."
        ]
      },
      {
        title: "What each color shows",
        paragraphs: [
          "White can reveal dark pixels, dust, and pressure marks. Black can reveal bright stuck pixels and backlight issues. Red, green, and blue help you inspect subpixels because each screen pixel is made from those color channels.",
          "Yellow, cyan, and magenta combine color channels. They can reveal problems that are less obvious on red, green, or blue alone. Gray is useful for checking uniformity and faint marks."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not check only one color. A stuck subpixel may hide on some colors and appear on others.",
          "Do not test with browser chrome, menus, or ads visible. Use fullscreen so the whole panel shows the same color.",
          "Do not confuse a speck of dust with a dead pixel. If the mark moves when you wipe the screen, it is not a pixel problem."
        ]
      },
      {
        title: "Photo and warranty note",
        paragraphs: [
          "If you find a clear issue on a new display, take photos in more than one test color. Include the full screen and a close-up if possible. Check the seller or manufacturer policy for pixel defects. This is a practical note, not legal advice."
        ]
      }
    ],
    faqs: [
      { question: "What is the best color for finding dead pixels?", answer: "White is good for dark dead pixels. Black is good for bright stuck pixels. Use several colors for a complete check." },
      { question: "Can this tool fix stuck pixels?", answer: "No. It only helps you inspect the screen." },
      { question: "How long should I test?", answer: "A careful check usually takes a few minutes. Take more time on large monitors." }
    ],
    related: [
      { title: "Dead Pixel Test", href: "/dead-pixel-test" },
      { title: "Monitor Test", href: "/monitor-test" },
      { title: "White Screen", href: "/white-screen" }
    ]
  },
  {
    title: "How to Use Your Screen as a Light",
    slug: "how-to-use-your-screen-as-a-light",
    description: "Turn a phone, tablet or monitor into a simple light source using full-screen white and warm colors.",
    intro: "You can use your screen as a light by opening a bright full-screen color, setting the brightness, and pointing the screen toward the area you want to light.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "A screen light is useful for short, simple tasks. It can help you find something on a desk, add soft light to a room, or improve your face lighting for a video call.",
          "It is not a replacement for a real flashlight in unsafe places. Use it for low-risk tasks and avoid staring into a bright screen."
        ]
      },
      {
        title: "Step-by-step setup",
        paragraphs: [
          "Open the Screen Flashlight page. Choose bright white if you need the most light. Choose warm light if you want a softer look. Choose soft light when a bright screen feels harsh.",
          "Set the brightness lower than you think you need, then raise it slowly. Press Go Full Screen. Place the device so the light faces the object or area, not your eyes.",
          "Use the timer if you only need light for a short time. This can help avoid leaving a bright screen on by accident."
        ]
      },
      {
        title: "Good uses",
        paragraphs: [
          "A phone screen can work as a small desk light. A tablet can give a wider soft glow. A monitor can add a large wash of light to a room or your face.",
          "Warm white is often easier on your eyes at night. Cool white can feel clearer when you are working in daylight. Bright white gives the strongest light but can feel harsh in a dark room."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not use maximum brightness by default. It may strain your eyes and drain battery faster.",
          "Do not cover vents on laptops or tablets while the screen is bright. Keep the device stable and let heat escape normally.",
          "Do not use a screen as your only light in a place where safety matters. A screen is not as dependable as a flashlight."
        ]
      },
      {
        title: "Related ScreenTools links",
        paragraphs: [
          "Use Screen Flashlight for a general light. Use White Screen for a clean bright background. Use Zoom Light for video calls, where warm and cool white settings matter more."
        ]
      }
    ],
    faqs: [
      { question: "Can I use my phone screen as a flashlight?", answer: "Yes, for short simple tasks. It is not as strong as a real flashlight." },
      { question: "Which color is best for light?", answer: "Bright white gives the most light. Warm white is often more comfortable." },
      { question: "Will this damage my screen?", answer: "Normal short use should be fine. Avoid leaving high brightness on longer than needed." }
    ],
    related: [
      { title: "Screen Flashlight", href: "/screen-flashlight" },
      { title: "White Screen", href: "/white-screen" },
      { title: "Zoom Light", href: "/zoom-light" }
    ]
  },
  {
    title: "How to Clean Your Screen Safely",
    slug: "how-to-clean-your-screen-safely",
    description: "Clean a phone, laptop, tablet or monitor screen safely with a soft cloth and simple checks.",
    intro: "To clean a screen safely, turn it off or show a plain screen to find marks, use a microfiber cloth, avoid harsh chemicals, and never spray liquid directly onto the display.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "The safest basic method is a clean dry microfiber cloth. If needed, lightly dampen the cloth with water or a screen-safe cleaner. Wipe gently and keep liquid away from openings, edges, keyboards, and speakers.",
          "A white or gray screen can help you see dust and streaks before you clean. A black screen can help show fingerprints and oily smudges."
        ]
      },
      {
        title: "Step-by-step cleaning",
        paragraphs: [
          "First, unplug the device if possible. Turn it off or open a plain screen only long enough to inspect dust and marks. Do not press hard on the panel.",
          "Second, wipe with a clean microfiber cloth in slow, light passes. For stubborn marks, dampen the cloth slightly. The cloth should not drip.",
          "Third, dry the screen with another clean part of the cloth. Wait a moment before closing a laptop lid or putting a case back on a phone."
        ]
      },
      {
        title: "What to avoid",
        paragraphs: [
          "Do not spray liquid directly on the display. Liquid can run into edges and damage the device.",
          "Do not use paper towels, rough cloths, window cleaner, bleach, or abrasive pads. These can scratch coatings or leave residue.",
          "Do not clean while angry or rushed. Most screen damage happens from pressure, rough material, or too much liquid."
        ]
      },
      {
        title: "Using ScreenTools while cleaning",
        paragraphs: [
          "Use the White Screen page to find dust and small marks. Use a gray screen to check for streaks after cleaning. Use a black screen to inspect fingerprints and oily patches.",
          "Do not wipe directly over active controls if you can avoid it. Exit fullscreen or lock the device before cleaning the edges."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not confuse dust with dead pixels. If a dot moves or disappears after cleaning, it was on the surface.",
          "Do not use too much pressure on laptop panels or monitors. Gentle repeated passes are safer than one hard wipe."
        ]
      }
    ],
    faqs: [
      { question: "Can I use water to clean a screen?", answer: "A slightly damp microfiber cloth is usually fine. Do not spray water directly on the device." },
      { question: "Can I use glass cleaner?", answer: "Avoid normal glass cleaners unless the device maker says it is safe. Many screens have coatings." },
      { question: "Which ScreenTools page helps with cleaning?", answer: "White Screen, Gray Screen, and Screen Cleaning are the most useful." }
    ],
    related: [
      { title: "Screen Cleaning", href: "/screen-cleaning" },
      { title: "White Screen", href: "/white-screen" },
      { title: "Gray Screen", href: "/gray-screen" }
    ]
  },
  {
    title: "Best Colors for Monitor Testing",
    slug: "best-colors-for-monitor-testing",
    description: "Learn which solid colors help reveal dead pixels, stuck pixels, backlight bleed and uniformity issues.",
    intro: "The best monitor test colors are white, black, red, green, blue, yellow, cyan, magenta, and gray. Each color reveals a different kind of issue.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "Use white to find dark pixels and dust. Use black to find bright stuck pixels and backlight bleed. Use red, green, and blue to check subpixels. Use gray to check uniformity. Use yellow, cyan, and magenta to catch problems that only appear when color channels combine.",
          "No single color is enough. A useful monitor test cycles through several full-screen colors and patterns."
        ]
      },
      {
        title: "Step-by-step color test",
        paragraphs: [
          "Start with white and scan the full screen. Move slowly and check each corner. Then switch to black and look for bright points or uneven glow.",
          "Next, use red, green, and blue. These colors can show subpixel issues. A tiny dot that appears only on one color may point to a stuck subpixel.",
          "Finish with gray, yellow, cyan, and magenta. Gray is useful for uniformity. The combined colors can reveal tint shifts or pixels that were hard to see on primary colors."
        ]
      },
      {
        title: "Patterns beyond solid colors",
        paragraphs: [
          "A grid helps check alignment and scaling. A gradient helps reveal banding. Text sharpness checks whether small text looks clear. A checkerboard can make scaling or pixel structure issues easier to notice.",
          "Backlight bleed is easiest to inspect on a black screen in a dim room. Reflections can fool you, so reduce room light before judging."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not judge color accuracy by eye from a browser test. For color-critical work, use calibration hardware.",
          "Do not test with night shift, blue light filters, HDR changes, or unusual display modes active unless you are testing those settings on purpose.",
          "Do not stop at a screenshot. Screenshots do not show panel hardware issues. You must look at the actual display."
        ]
      },
      {
        title: "Related ScreenTools links",
        paragraphs: [
          "Use Monitor Test for patterns. Use Dead Pixel Test for color cycling. Use Backlight Bleed Test for a dark screen. Use Gray Screen for uniformity checks."
        ]
      }
    ],
    faqs: [
      { question: "What color finds dead pixels?", answer: "White often reveals dark dead pixels. Black can reveal bright stuck pixels." },
      { question: "What color checks uniformity?", answer: "Gray is useful because uneven tint and brightness changes are easier to see." },
      { question: "Can browser colors calibrate a monitor?", answer: "No. They can help with visual checks, but calibration needs proper hardware." }
    ],
    related: [
      { title: "Monitor Test", href: "/monitor-test" },
      { title: "Dead Pixel Test", href: "/dead-pixel-test" },
      { title: "Backlight Bleed Test", href: "/backlight-bleed-test" }
    ]
  },
  {
    title: "How to Use a White Screen for Video Calls",
    slug: "how-to-use-a-white-screen-for-video-calls",
    description: "Use a white or warm white screen as a simple light source for video calls.",
    intro: "A white screen can improve video call lighting by giving your face a soft light source from the front. Use warm white or cool white, lower brightness, and place the screen near your camera.",
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "Open a white screen, set it to warm or cool white, lower the brightness, and place it in front of you near your webcam. The screen should light your face, not point into your eyes at full brightness.",
          "This works best as a quick fix. If you take calls often, a desk lamp or ring light may be easier to control."
        ]
      },
      {
        title: "Step-by-step setup",
        paragraphs: [
          "Open the Zoom Light or White Screen page. Pick warm white for a softer look or cool white for a cleaner daylight look. Start around medium brightness.",
          "Place the browser window on the screen nearest your camera. If you have one display, use split screen so you can keep your meeting controls visible. If you have two displays, put the light on one screen and the call on the other.",
          "Check your camera preview. If your face looks washed out, lower the brightness. If your face is still dark, move the screen closer or raise brightness slightly."
        ]
      },
      {
        title: "Best settings",
        paragraphs: [
          "Warm white is often better at night or in rooms with warm lamps. Cool white can work better near daylight or cooler room lights. Soft light is a good starting point if bright white feels harsh.",
          "The best setting is the one that looks natural in your camera preview. Do not chase perfect studio lighting. The goal is a clear face and fewer shadows."
        ]
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Do not put the screen far off to one side unless you want strong shadows. Front light is usually more flattering.",
          "Do not use full brightness by default. It can make your face look flat or washed out, and it may bother your eyes.",
          "Do not use brand logos or fake meeting alerts as backgrounds. A plain light source is cleaner and safer."
        ]
      },
      {
        title: "Related ScreenTools links",
        paragraphs: [
          "Use Zoom Light for video calls. Use White Screen for a simple bright light. Use Screen Flashlight if you want quick light modes on a phone or tablet."
        ]
      }
    ],
    faqs: [
      { question: "Does a white screen work with Zoom?", answer: "Yes. It is just a light source in your browser, so it can help with Zoom, Google Meet, Teams, or any video call app." },
      { question: "Should I use warm or cool white?", answer: "Use warm white at night or with warm lamps. Use cool white near daylight." },
      { question: "Can I use one screen for the call and the light?", answer: "Yes. Use split screen or a smaller browser window if you need to see call controls." }
    ],
    related: [
      { title: "Zoom Light", href: "/zoom-light" },
      { title: "White Screen", href: "/white-screen" },
      { title: "Screen Flashlight", href: "/screen-flashlight" }
    ]
  }
];
