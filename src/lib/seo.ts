import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { type Locale, getAlternateUrl } from "@/i18n/config";

/**
 * Default social-share image (self-hosted).
 */
const getOgImage = (locale: Locale) => ({
  url: "/images/iptv-deutschland-hero.jpg",
  width: 1344,
  height: 768,
  alt:
    locale === "en"
      ? "StreamGermany4K – Premium 4K IPTV for Germany"
      : "StreamGermany4K – Premium IPTV in 4K für Deutschland",
});

/**
 * Metadata builder for indexable SEO pages (home, commercial, informational).
 * - Sets a self-referencing canonical on the production domain.
 * - Sets bidirectional hreflang alternate links (de, en, x-default).
 * - Localized OpenGraph + Twitter defaults.
 */
export function pageMetadata(spec: {
  title: string;
  description: string;
  path: string; // e.g. "/iptv-anbieter" or "/en/iptv-providers"
  locale?: Locale;
  keywords?: string[] | string;
  index?: boolean;
}): Metadata {
  const locale: Locale = spec.locale ?? (spec.path.startsWith("/en") ? "en" : "de");
  const index = spec.index ?? true;
  const ogImage = getOgImage(locale);

  // Derive German and English URLs for hreflang
  const dePath = getAlternateUrl(spec.path, "de");
  const enPath = getAlternateUrl(spec.path, "en");

  const languages = index
    ? {
        de: dePath,
        en: enPath,
        "x-default": dePath,
      }
    : undefined;

  return {
    title: spec.title,
    description: spec.description,
    keywords: spec.keywords,
    alternates: {
      canonical: spec.path,
      ...(languages ? { languages } : {}),
    },
    robots: { index, follow: true },
    openGraph: {
      title: spec.title,
      description: spec.description,
      url: spec.path,
      siteName: SITE.name,
      locale: locale === "en" ? "en_GB" : "de_DE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: spec.title,
      description: spec.description,
      images: [ogImage.url],
    },
  };
}

/**
 * Metadata builder for legal/policy and utility pages (e.g. /order).
 * - Canonical on the current URL.
 * - noindex, follow.
 */
export function legalMetadata(spec: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const locale: Locale = spec.locale ?? (spec.path.startsWith("/en") ? "en" : "de");
  const ogImage = getOgImage(locale);

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
      locale: locale === "en" ? "en_GB" : "de_DE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: spec.title,
      description: spec.description,
      images: [ogImage.url],
    },
  };
}
