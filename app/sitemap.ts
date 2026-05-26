import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-pages";
import { guides, site, toolLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/guides", "/about", "/contact", "/privacy", "/terms", "/bulk-screen-testing"];
  const toolPages = toolLinks.map((tool) => tool.href);
  const guidePages = guides.map((guide) => guide.href);
  const seoPages = seoLandingPages.map((page) => `/${page.slug}`);
  return [...staticPages, ...toolPages, ...guidePages, ...seoPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-05-26"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/guides/") ? 0.5 : 0.8
  }));
}
