import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS_DE } from "@/lib/blog";

/**
 * Only canonical, indexable pages belong here. Legal pages (noindex), contact (noindex),
 * and order pages (noindex) are intentionally excluded.
 */
interface RouteMapping {
  de: string;
  en: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const INDEXABLE_ROUTES: RouteMapping[] = [
  { de: "/", en: "/en", priority: 1.0, changeFrequency: "weekly" },
  { de: "/preise", en: "/en/pricing", priority: 0.9, changeFrequency: "monthly" },
  { de: "/iptv-anbieter", en: "/en/iptv-providers", priority: 0.9, changeFrequency: "monthly" },
  { de: "/bester-iptv", en: "/en/best-iptv", priority: 0.9, changeFrequency: "monthly" },
  { de: "/iptv-vergleich", en: "/en/iptv-comparison", priority: 0.9, changeFrequency: "monthly" },
  { de: "/iptv-kaufen", en: "/en/buy-iptv", priority: 0.9, changeFrequency: "monthly" },
  { de: "/iptv-sport", en: "/en/iptv-sports", priority: 0.8, changeFrequency: "monthly" },
  { de: "/iptv-test", en: "/en/iptv-test", priority: 0.8, changeFrequency: "monthly" },
  { de: "/iptv-erfahrungen", en: "/en/iptv-reviews", priority: 0.7, changeFrequency: "monthly" },
  { de: "/geraete", en: "/en/devices", priority: 0.8, changeFrequency: "monthly" },
  { de: "/iptv-fire-tv-stick", en: "/en/iptv-fire-tv-stick", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-samsung", en: "/en/iptv-samsung", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-lg-smart-tv", en: "/en/iptv-lg-smart-tv", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-apple-tv", en: "/en/iptv-apple-tv", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-android-tv", en: "/en/iptv-android-tv", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-apps", en: "/en/iptv-apps", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-tivimate", en: "/en/iptv-tivimate", priority: 0.7, changeFrequency: "monthly" },
  { de: "/iptv-smarters-pro", en: "/en/iptv-smarters-pro", priority: 0.7, changeFrequency: "monthly" },
  { de: "/kodi-iptv-addons", en: "/en/kodi-iptv-addons", priority: 0.7, changeFrequency: "monthly" },
  { de: "/features", en: "/en/features", priority: 0.6, changeFrequency: "monthly" },
  { de: "/blog", en: "/en/blog", priority: 0.6, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of INDEXABLE_ROUTES) {
    const deUrl = new URL(route.de, SITE.domain).toString();
    const enUrl = new URL(route.en, SITE.domain).toString();

    // German Entry
    entries.push({
      url: deUrl,
      lastModified: "2026-09-09",
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          de: deUrl,
          en: enUrl,
          "x-default": deUrl,
        },
      },
    });

    // English Entry
    entries.push({
      url: enUrl,
      lastModified: "2026-09-09",
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          de: deUrl,
          en: enUrl,
          "x-default": deUrl,
        },
      },
    });
  }

  // Blog posts
  for (const post of BLOG_POSTS_DE) {
    const deUrl = new URL(`/blog/${post.slug}`, SITE.domain).toString();
    entries.push({
      url: deUrl,
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
