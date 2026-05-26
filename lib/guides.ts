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
  },
  {
    title: "White Screen vs Black Screen",
    slug: "white-screen-vs-black-screen",
    description: "Compare white and black screens for lighting, focus, cleaning and monitor checks.",
    intro: "Use a white screen when you need light, dust checks or a bright blank background. Use a black screen when you want less light, a calmer view or a backlight bleed check.",
    sections: [
      { title: "Quick answer", paragraphs: ["A white screen is best for light, cleaning checks and finding dark marks. A black screen is best for low-light focus, edge glow checks and finding bright stuck pixels.", "Neither screen fixes hardware. They help you create a simple viewing condition so you can see what is already on the display."] },
      { title: "Step-by-step choice", paragraphs: ["Start by asking what you need. If you need to light your face, find dust or make a bright background, choose white. If you need to reduce light, rest your eyes or inspect glow near the panel edges, choose black.", "Open the page, adjust brightness and enter fullscreen. Keep the room lighting close to how you normally use the screen unless you are testing a specific issue. Press Esc to exit fullscreen where supported."] },
      { title: "Best uses for white", paragraphs: ["White is useful as a quick lamp, video call light, screen cleaning check and dark pixel check. It also works as a clean background for simple photos or visual reset.", "Warm white is often better for faces. Bright white is better for dust. Cool white can feel clearer in daylight."] },
      { title: "Best uses for black", paragraphs: ["Black is useful when you want less light from a monitor. It can make bright stuck pixels, glow, backlight bleed and edge light easier to see in a dim room.", "A black screen does not turn the display off. It still uses the screen, but it creates a darker browser view."] },
      { title: "Common mistakes", paragraphs: ["Do not use white at full brightness in a dark room for a long time. Do not judge backlight bleed with reflections on the display. Do not assume one test color tells the whole story.", "For a real display check, compare white, black, gray and primary colors. For focus, choose the color that pulls the least attention in your room."] }
    ],
    faqs: [
      { question: "Is a black screen better for focus?", answer: "Often yes in dim rooms. White can be better if you need light." },
      { question: "Which screen is better for cleaning?", answer: "White shows dust well. Black shows fingerprints and oily smudges." },
      { question: "Does black turn off my monitor?", answer: "No. It shows black in the browser while the display stays on." }
    ],
    related: [
      { title: "White Screen", href: "/white-screen" },
      { title: "Black Screen", href: "/black-screen" },
      { title: "Gray Screen", href: "/gray-screen" }
    ]
  },
  {
    title: "How to Check Backlight Bleed",
    slug: "how-to-check-backlight-bleed",
    description: "Use a black screen in a dim room to inspect edge glow and possible backlight bleed.",
    intro: "To check backlight bleed, open a black screen in fullscreen, dim the room, and inspect the edges and corners from your normal viewing position. Some glow can be normal depending on the panel and brightness.",
    sections: [
      { title: "Quick answer", paragraphs: ["Backlight bleed is easiest to see on a black screen. Lower reflections, use normal brightness first, and look for uneven bright patches near the edges.", "This check helps you document what you see. It does not repair the display or decide warranty coverage."] },
      { title: "Step-by-step test", paragraphs: ["Clean the screen and reduce reflections. Open the Backlight Bleed Test page and press Go Full Screen. Sit where you normally sit, not at an extreme side angle.", "Let your eyes adjust for a few seconds. Look around each corner and edge. If the whole screen looks gray, lower brightness and test again."] },
      { title: "What to look for", paragraphs: ["Look for bright patches that stay in the same place. Edge glow, cloudy corners and uneven black levels can all be easier to see on a dark screen.", "A phone camera may exaggerate glow. Use photos for notes, but trust what you can see in normal use."] },
      { title: "Common mistakes", paragraphs: ["Do not test in a room with bright reflections. Do not test only at maximum brightness unless you use the screen that way. Do not compare two monitors with different brightness or local dimming settings.", "Do not press on the screen to change the glow. Pressure can damage a panel."] },
      { title: "Photo note", paragraphs: ["If the display is new and the issue is clear, take one wide photo and one closer photo at normal brightness. Contact the seller or manufacturer if you need help with their policy. This is not legal advice."] }
    ],
    faqs: [
      { question: "Is backlight bleed always a defect?", answer: "Not always. Some glow can be normal. Severity depends on the panel, brightness and viewing angle." },
      { question: "What color should I use?", answer: "Use black in a dim room." },
      { question: "Can ScreenTools fix it?", answer: "No. It only helps you inspect the screen." }
    ],
    related: [
      { title: "Backlight Bleed Test", href: "/backlight-bleed-test" },
      { title: "Black Screen", href: "/black-screen" },
      { title: "Monitor Test", href: "/monitor-test" }
    ]
  },
  {
    title: "Dead Pixel vs Stuck Pixel",
    slug: "dead-pixel-vs-stuck-pixel",
    description: "Learn the difference between dead pixels and stuck pixels and which colors reveal each issue.",
    intro: "A dead pixel usually stays dark. A stuck pixel stays on one color or stays bright while the rest of the screen changes.",
    sections: [
      { title: "Quick answer", paragraphs: ["Dead pixels and stuck pixels look similar because both are tiny dots that do not match the screen. The difference is behavior: dead pixels are often dark, while stuck pixels may stay red, green, blue or bright.", "Use several full-screen colors to compare the dot. One color is not enough."] },
      { title: "Step-by-step check", paragraphs: ["Clean the screen first. Open the Dead Pixel Test page and enter fullscreen. Check white, black, red, green, blue, yellow, cyan, magenta and gray.", "Watch the same spot as colors change. If it stays black on every color, it may be dead. If it changes on some colors but not others, it may be stuck or a subpixel issue."] },
      { title: "What each issue means", paragraphs: ["A dead pixel may not light up. It can show as a black dot on white or bright colors. A stuck pixel may be locked to one color channel and show as red, green, blue or white.", "Dust can mimic either issue. If the mark moves when wiped, it is surface dirt, not a pixel problem."] },
      { title: "Common mistakes", paragraphs: ["Do not judge from a screenshot because screenshots do not capture hardware defects. Do not inspect only the center of the screen. Corners and edges matter too.", "Do not rely on a single color. A subpixel issue may hide until you use the right color."] },
      { title: "What to do next", paragraphs: ["If the device is new, take photos in more than one color and check the seller policy. If it is an older device, decide whether the dot affects normal use before spending time on repair options.", "ScreenTools does not repair pixels. It helps you find and describe what you see."] }
    ],
    faqs: [
      { question: "Which is worse, dead or stuck?", answer: "It depends on the display and location. A dead pixel is often dark, while a stuck pixel may be more visible on some colors." },
      { question: "Can I see this in a screenshot?", answer: "No. A screenshot captures the image, not the physical panel." },
      { question: "Which tool should I use?", answer: "Use the Dead Pixel Test or Stuck Pixel Test." }
    ],
    related: [
      { title: "Dead Pixel Test", href: "/dead-pixel-test" },
      { title: "Stuck Pixel Test", href: "/stuck-pixel-test" },
      { title: "Monitor Test", href: "/monitor-test" }
    ]
  },
  {
    title: "Best Screen Colors for Focus",
    slug: "best-screen-colors-for-focus",
    description: "Pick simple screen colors for focus, breaks and low-distraction second monitors.",
    intro: "The best screen color for focus depends on your room. Black is calm in dim rooms, soft gray is neutral, and warm white works when you need light.",
    sections: [
      { title: "Quick answer", paragraphs: ["Use black if light distracts you. Use gray if you want a neutral background. Use warm white if you need a little light while staying focused.", "A focus screen should reduce visual noise. It should not become another thing to adjust every minute."] },
      { title: "Step-by-step setup", paragraphs: ["Pick the screen you use least, or open a focus color on a second monitor. Choose black, blank, gray or warm white. Set brightness lower than normal if the display is near your eyes.", "If you need a timed session, use Focus Timer Screen. Keep the timer simple and avoid switching colors often."] },
      { title: "Use-case table guide", paragraphs: ["For writing in a dim room, black or dark gray is usually best. For reading notes at a desk, warm white can help. For a visual reset between tasks, blank white or blank gray can work well.", "If your room is bright, a black screen may reflect more. In that case, gray can feel calmer."] },
      { title: "Common mistakes", paragraphs: ["Do not use saturated red or blue as a long focus background unless it truly helps you. Strong colors often pull attention.", "Do not keep the screen at full brightness. Do not use motion effects as a focus screen. Movement tends to distract."] },
      { title: "Best settings", paragraphs: ["Use a low or medium brightness. Choose a color that matches the room. Hide controls in fullscreen. Press Esc when you are done.", "For a second monitor, a blank screen can be better than turning it off if you still want light or a timer."] }
    ],
    faqs: [
      { question: "Is black best for focus?", answer: "Often in dim rooms, yes. Gray can be better in bright rooms." },
      { question: "Should I use bright colors?", answer: "Usually no. Strong colors can be distracting for long sessions." },
      { question: "Can I use a timer?", answer: "Yes. Use Focus Timer Screen." }
    ],
    related: [
      { title: "Focus Timer Screen", href: "/focus-timer-screen" },
      { title: "Blank Screen", href: "/blank-screen" },
      { title: "Black Screen", href: "/black-screen" }
    ]
  },
  {
    title: "How to Use a Screen Flashlight Safely",
    slug: "how-to-use-a-screen-flashlight-safely",
    description: "Use your phone, tablet or monitor as a simple light without straining your eyes.",
    intro: "A screen flashlight is useful for short, low-risk tasks. Use comfortable brightness, point the screen away from your eyes, and do not rely on it where a real flashlight is needed for safety.",
    sections: [
      { title: "Quick answer", paragraphs: ["Choose bright white for the most light, warm white for comfort, or soft light for camera use. Raise brightness slowly and use a timer if you only need the light for a short time.", "A screen is not a safety light. Use a real flashlight for dark stairs, repairs, driving, outdoor tasks or emergencies."] },
      { title: "Step-by-step use", paragraphs: ["Open Screen Flashlight. Start with medium brightness. Point the screen at the object or area you want to light. Avoid staring into the display.", "If you use a phone, hold it steady or prop it up safely. If you use a laptop or monitor, make sure vents are not blocked and the device has normal airflow."] },
      { title: "Best settings", paragraphs: ["Bright white gives maximum light. Warm light is better at night. Soft light is better near your face or camera. Cool white can work well in daylight.", "Use the timer when possible. It helps avoid leaving a bright screen on and draining battery."] },
      { title: "Common mistakes", paragraphs: ["Do not start at maximum brightness in a dark room. Do not place the screen directly against fabric or soft surfaces that block heat. Do not use flashing or moving effects as a flashlight.", "Do not use a screen flashlight where dropping the device would create another problem."] },
      { title: "When to use another light", paragraphs: ["Use a real flashlight for anything involving tools, water, stairs, roads or safety. A screen light is best for finding something nearby, adding desk light or making a quick room glow."] }
    ],
    faqs: [
      { question: "Can a phone screen be a flashlight?", answer: "Yes, for short simple tasks. It is not as strong or reliable as a real flashlight." },
      { question: "Can bright screen light hurt my eyes?", answer: "It can feel harsh. Lower brightness and avoid staring at it." },
      { question: "Which ScreenTools page should I use?", answer: "Use Screen Flashlight or Soft Light Screen." }
    ],
    related: [
      { title: "Screen Flashlight", href: "/screen-flashlight" },
      { title: "Soft Light Screen", href: "/soft-light-screen" },
      { title: "Warm Light Screen", href: "/warm-light-screen" }
    ]
  },
  {
    title: "How to Test a Used Monitor Before Buying",
    slug: "how-to-test-a-used-monitor-before-buying",
    description: "Check a used monitor with browser-based color, pixel, uniformity and backlight tests before you buy.",
    intro: "Before buying a used monitor, check it with solid colors, gray uniformity, a black backlight test, grid alignment and text sharpness. These quick checks can reveal problems before money changes hands.",
    sections: [
      { title: "Quick answer", paragraphs: ["Bring a laptop if possible, open ScreenTools, and test the monitor in fullscreen. Check white, black, red, green, blue, gray, grid, gradient and text sharpness.", "This does not replace a full professional test, but it gives you a practical screen check in a few minutes."] },
      { title: "Step-by-step checklist", paragraphs: ["First, inspect the outside of the monitor. Look for cracks, pressure marks, damaged ports and loose stands. Connect it and set a normal resolution and refresh rate.", "Second, run Dead Pixel Test. Move through white, black, red, green, blue and gray. Look for dark dots, bright dots or colored dots that do not change.", "Third, run Monitor Test. Use grid for alignment, gradient for banding, checkerboard for scaling, and text sharpness for readability. Then run Backlight Bleed Test in a dimmer area if possible."] },
      { title: "What to ask the seller", paragraphs: ["Ask whether the monitor has been repaired, dropped or used with burn-in risk. Ask if all ports work. Ask if you can test it for a few minutes before paying.", "If the seller will not let you test a used monitor at all, be careful. A short browser test is reasonable for most local sales."] },
      { title: "Common mistakes", paragraphs: ["Do not test only the desktop wallpaper. Wallpapers can hide defects. Do not judge sharpness before setting the correct resolution. Do not ignore the corners.", "Do not rely on photos from the listing. You need to see the actual panel running."] },
      { title: "Limits of this check", paragraphs: ["ScreenTools can show visual patterns and colors. It cannot test every port, speaker, menu setting, warranty status or long-term reliability.", "Use the results as one part of your decision. If you see a problem, decide whether the price still makes sense."] }
    ],
    faqs: [
      { question: "What is the fastest used monitor test?", answer: "Run Dead Pixel Test, Gray Screen, Backlight Bleed Test and Text Sharpness." },
      { question: "Can I test with only a phone?", answer: "A phone can help with visual checks, but a laptop is better for testing the monitor itself." },
      { question: "Should I buy a monitor with one bad pixel?", answer: "That is a personal choice based on price, location of the pixel and how much it bothers you." }
    ],
    related: [
      { title: "Monitor Test", href: "/monitor-test" },
      { title: "Dead Pixel Test", href: "/dead-pixel-test" },
      { title: "Screen Uniformity Test", href: "/screen-uniformity-test" }
    ]
  }
];
