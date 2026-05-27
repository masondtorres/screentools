import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ScreenTools",
    short_name: "ScreenTools",
    description: "Fullscreen screen tools, display tests, lighting tools and browser-based web screensavers.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f3f6fb",
    theme_color: "#0f172a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}
