import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

/**
 * Only canonical, indexable pages belong here. Legal pages (noindex) and the
 * noindex /contact support page are intentionally excluded.
 *
 * `lastModified` uses stable per-page dates (not `new Date()`), so we never
 * fabricate "fresh" timestamps just to trigger recrawls. Bump a page's date
 * only when its content actually changes.
 */
const LAST_MODIFIED: Record<string, string> = {
  "/": "2026-09-09",
  "/iptv-anbieter": "2026-09-09",
  "/bester-iptv": "2026-09-09",
  "/iptv-vergleich": "2026-09-09",
  "/iptv-kaufen": "2026-09-09",
  "/preise": "2026-09-09",
  "/iptv-sport": "2026-09-09",
  "/iptv-test": "2026-09-09",
  "/iptv-erfahrungen": "2026-09-09",
  "/geraete": "2026-09-09",
  "/iptv-fire-tv-stick": "2026-09-09",
  "/iptv-samsung": "2026-09-09",
  "/iptv-lg-smart-tv": "2026-09-09",
  "/iptv-apple-tv": "2026-09-09",
  "/iptv-android-tv": "2026-09-09",
  "/iptv-apps": "2026-09-09",
  "/iptv-tivimate": "2026-09-09",
  "/iptv-smarters-pro": "2026-09-09",
  "/kodi-iptv-addons": "2026-09-09",
  "/features": "2026-09-09",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/iptv-anbieter", priority: 0.9, changeFrequency: "monthly" },
    { path: "/bester-iptv", priority: 0.9, changeFrequency: "monthly" },
    { path: "/iptv-vergleich", priority: 0.9, changeFrequency: "monthly" },
    { path: "/iptv-kaufen", priority: 0.9, changeFrequency: "monthly" },
    { path: "/preise", priority: 0.9, changeFrequency: "monthly" },
    { path: "/iptv-sport", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iptv-test", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iptv-erfahrungen", priority: 0.7, changeFrequency: "monthly" },
    { path: "/geraete", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iptv-fire-tv-stick", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-samsung", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-lg-smart-tv", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-apple-tv", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-android-tv", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-apps", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-tivimate", priority: 0.7, changeFrequency: "monthly" },
    { path: "/iptv-smarters-pro", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kodi-iptv-addons", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/features", priority: 0.6, changeFrequency: "monthly" },
  ];

  const staticEntries = entries.map((e) => ({
    url: new URL(e.path, SITE.domain).toString(),
    lastModified: LAST_MODIFIED[e.path] ?? "2026-09-09",
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: new URL(`/blog/${post.slug}`, SITE.domain).toString(),
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
