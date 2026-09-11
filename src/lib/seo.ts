import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Default social-share image (self-hosted). Page-level `openGraph`/`twitter`
 * blocks fully replace the layout defaults, so they must re-declare the image.
 */
const OG_IMAGE = {
  url: "/images/iptv-deutschland-hero.jpg",
  width: 1344,
  height: 768,
  alt: "StreamGermany4K – Premium IPTV in 4K für Deutschland",
};

/**
 * Metadata builder for indexable SEO pages (home, commercial, informational).
 * - Sets a self-referencing canonical on the production domain (via metadataBase).
 * - German OpenGraph + Twitter defaults.
 * - Indexable by default; pass `index: false` for exceptions.
 */
export function pageMetadata(spec: {
  title: string;
  description: string;
  path: string; // e.g. "/iptv-anbieter" ("/" for home)
  keywords?: string[] | string;
  index?: boolean;
}): Metadata {
  const index = spec.index ?? true;
  return {
    title: spec.title,
    description: spec.description,
    keywords: spec.keywords,
    alternates: { canonical: spec.path },
    robots: { index, follow: true },
    openGraph: {
      title: spec.title,
      description: spec.description,
      url: spec.path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: spec.title,
      description: spec.description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Metadata builder for legal/policy pages.
 * - Canonical on the production domain.
 * - noindex (legal pages are not SEO landing pages) but follow.
 */
export function legalMetadata(spec: {
  title: string;
  description: string;
  path: string; // e.g. "/impressum"
}): Metadata {
  return {
    title: spec.title,
    description: spec.description,
    alternates: { canonical: spec.path },
    robots: { index: false, follow: true },
    openGraph: {
      title: spec.title,
      description: spec.description,
      url: spec.path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [OG_IMAGE],
    },
  };
}
