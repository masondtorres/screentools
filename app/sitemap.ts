import type { MetadataRoute } from "next";
import { guides, site, toolLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/guides", "/about", "/contact", "/privacy", "/terms"];
  const toolPages = toolLinks.map((tool) => tool.href);
  const guidePages = guides.map((guide) => guide.href);
  return [...staticPages, ...toolPages, ...guidePages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-05-26"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/guides/") ? 0.5 : 0.8
  }));
}
