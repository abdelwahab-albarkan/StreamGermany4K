export type Locale = "de" | "en";

export const DEFAULT_LOCALE: Locale = "de";
export const LOCALES: Locale[] = ["de", "en"];
export const LOCALE_COOKIE = "user_locale";

/**
 * Bidirectional mapping between German URLs (default, root) and English URLs (/en/...).
 */
export const ROUTE_PAIRS: { de: string; en: string }[] = [
  { de: "/", en: "/en" },
  { de: "/preise", en: "/en/pricing" },
  { de: "/order", en: "/en/order" },
  { de: "/iptv-anbieter", en: "/en/iptv-providers" },
  { de: "/bester-iptv", en: "/en/best-iptv" },
  { de: "/iptv-vergleich", en: "/en/iptv-comparison" },
  { de: "/iptv-kaufen", en: "/en/buy-iptv" },
  { de: "/iptv-sport", en: "/en/iptv-sports" },
  { de: "/iptv-test", en: "/en/iptv-test" },
  { de: "/iptv-erfahrungen", en: "/en/iptv-reviews" },
  { de: "/geraete", en: "/en/devices" },
  { de: "/iptv-fire-tv-stick", en: "/en/iptv-fire-tv-stick" },
  { de: "/iptv-samsung", en: "/en/iptv-samsung" },
  { de: "/iptv-lg-smart-tv", en: "/en/iptv-lg-smart-tv" },
  { de: "/iptv-apple-tv", en: "/en/iptv-apple-tv" },
  { de: "/iptv-android-tv", en: "/en/iptv-android-tv" },
  { de: "/iptv-apps", en: "/en/iptv-apps" },
  { de: "/iptv-tivimate", en: "/en/iptv-tivimate" },
  { de: "/iptv-smarters-pro", en: "/en/iptv-smarters-pro" },
  { de: "/kodi-iptv-addons", en: "/en/kodi-iptv-addons" },
  { de: "/features", en: "/en/features" },
  { de: "/contact", en: "/en/contact" },
  { de: "/blog", en: "/en/blog" },
  { de: "/mentions-legales", en: "/en/legal-notice" },
  { de: "/cgv", en: "/en/terms" },
  { de: "/cgu", en: "/en/terms-of-use" },
  { de: "/confidentialite", en: "/en/privacy" },
  { de: "/cookies", en: "/en/cookies" },
  { de: "/remboursement", en: "/en/refund" },
];

/**
 * Derives the active locale from a pathname.
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return "de";
}

/**
 * Sets the user's manual language selection in a persistent cookie.
 */
export function setLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

/**
 * Retrieves the stored user language preference from cookie if present.
 */
export function getLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`));
  if (match && (match[1] === "de" || match[1] === "en")) {
    return match[1] as Locale;
  }
  return null;
}

/**
 * Returns the equivalent URL in the target locale while preserving query parameters.
 */
export function getAlternateUrl(currentPathWithSearch: string, targetLocale: Locale): string {
  const [pathname, search] = currentPathWithSearch.split("?");
  const query = search ? `?${search}` : "";

  // Normalize pathname (remove trailing slash except root)
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (targetLocale === "en") {
    // Already in English
    if (normalized === "/en" || normalized.startsWith("/en/")) {
      return `${normalized}${query}`;
    }
    // Check direct route pair
    const pair = ROUTE_PAIRS.find((p) => p.de === normalized);
    if (pair) {
      return `${pair.en}${query}`;
    }
    // Blog subpage handling
    if (normalized.startsWith("/blog/")) {
      return `/en${normalized}${query}`;
    }
    return `/en${normalized}${query}`;
  } else {
    // Target is German (de)
    if (normalized === "/en") {
      return `/${query}`;
    }
    const pair = ROUTE_PAIRS.find((p) => p.en === normalized);
    if (pair) {
      return `${pair.de}${query}`;
    }
    if (normalized.startsWith("/en/blog/")) {
      return `${normalized.replace("/en/blog/", "/blog/")}${query}`;
    }
    if (normalized.startsWith("/en/")) {
      return `${normalized.replace("/en/", "/")}${query}`;
    }
    return `${normalized}${query}`;
  }
}
