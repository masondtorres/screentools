import type { MetadataRoute } from "next";
import { clusterPages } from "@/lib/clusters";
import { funScreens } from "@/lib/fun-screens";
import { seoLandingPages } from "@/lib/seo-pages";
import { guides, site, toolLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/guides", "/fun-screens", "/about", "/contact", "/privacy", "/terms", "/bulk-screen-testing"];
  const toolPages = toolLinks.map((tool) => tool.href);
  const clusters = clusterPages.map((page) => `/${page.slug}`);
  const guidePages = guides.map((guide) => guide.href);
  const seoPages = seoLandingPages.map((page) => `/${page.slug}`);
  const funPages = funScreens.map((page) => `/${page.slug}`);
  return [...staticPages, ...clusters, ...toolPages, ...guidePages, ...seoPages, ...funPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-05-26"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/guides/") ? 0.5 : 0.8
  }));
}
