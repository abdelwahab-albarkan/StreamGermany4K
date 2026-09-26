import type { Locale } from "@/i18n/config";

/**
 * Central site configuration for StreamGermany4K (https://streamgermany4k.com).
 *
 * Brand:  StreamGermany4K
 * Market: Germany (de-DE) & English (en)
 *
 * FACTUAL CLAIMS: every quantitative marketing claim (channel count, VOD count,
 * uptime, number of simultaneous connections, support hours) lives in `stats`
 * below and defaults to `null`. When a value is null the UI renders a neutral,
 * defensible phrase instead of an invented number. Fill these with the
 * operator's REAL figures in this one place — do not hard-code numbers in pages.
 */
export const SITE = {
  name: "StreamGermany4K",
  brand: "StreamGermany4K",
  domain: "https://streamgermany4k.com",
  locale: "de_DE",
  // No verified contact address exists in the codebase yet — kept null so pages
  // render a visible placeholder instead of an invented address.
  contactEmail: "support@streamb4.com" as string | null,

  /**
   * Central WhatsApp click-to-chat config — referenced everywhere (nav, footer,
   * pricing, floating button) so the number lives in exactly one place.
   */
  whatsapp: {
    number: "212625218443",
    display: "0625 218443",
    url: "https://wa.me/212625218443?text=Hallo%20StreamGermany4K%2C%20ich%20habe%20eine%20Frage%20zu%20Ihrem%20IPTV-Angebot.",
    urlEn: "https://wa.me/212625218443?text=Hello%20StreamGermany4K%2C%20I%20have%20a%20question%20about%20your%20IPTV%20service.",
  },

  /**
   * Real, verified figures go here. Leave null until the operator confirms them.
   */
  stats: {
    channels: null as string | null,
    vod: null as string | null,
    uptime: null as string | null,
    maxConnections: null as string | null,
    support: null as string | null,
  },
} as const;

/** Returns the real figure when set, otherwise a neutral fallback phrase. */
export function stat(value: string | null, fallback: string): string {
  return value ?? fallback;
}

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled message.
 */
export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Primary navigation per locale — all routes actually exist. */
export function getNavLinks(locale: Locale = "de"): { label: string; href: string }[] {
  if (locale === "en") {
    return [
      { label: "Home", href: "/en" },
      { label: "IPTV Providers", href: "/en/iptv-providers" },
      { label: "IPTV Comparison", href: "/en/iptv-comparison" },
      { label: "Devices", href: "/en/devices" },
      { label: "Buy IPTV", href: "/en/buy-iptv" },
      { label: "Pricing", href: "/en/pricing" },
      { label: "Guides", href: "/en/blog" },
    ];
  }

  return [
    { label: "Startseite", href: "/" },
    { label: "IPTV Anbieter", href: "/iptv-anbieter" },
    { label: "IPTV Vergleich", href: "/iptv-vergleich" },
    { label: "Geräte", href: "/geraete" },
    { label: "IPTV kaufen", href: "/iptv-kaufen" },
    { label: "Preise", href: "/preise" },
    { label: "Ratgeber", href: "/blog" },
  ];
}

/** Backward-compatible export for existing German references */
export const NAV_LINKS = getNavLinks("de");

/** Legal navigation per locale */
export function getLegalLinks(locale: Locale = "de"): { label: string; href: string }[] {
  if (locale === "en") {
    return [
      { label: "Legal Notice", href: "/en/legal-notice" },
      { label: "Terms of Service", href: "/en/terms" },
      { label: "Terms of Use", href: "/en/terms-of-use" },
      { label: "Privacy Policy", href: "/en/privacy" },
      { label: "Cookies", href: "/en/cookies" },
      { label: "Refund Policy", href: "/en/refund" },
    ];
  }

  return [
    { label: "Impressum", href: "/mentions-legales" },
    { label: "AGB", href: "/cgv" },
    { label: "Nutzungsbedingungen", href: "/cgu" },
    { label: "Datenschutz", href: "/confidentialite" },
    { label: "Cookies", href: "/cookies" },
    { label: "Widerruf", href: "/remboursement" },
  ];
}

export const LEGAL_LINKS = getLegalLinks("de");

export function getFooterIptvLinks(locale: Locale = "de"): { label: string; href: string }[] {
  if (locale === "en") {
    return [
      { label: "IPTV Providers", href: "/en/iptv-providers" },
      { label: "Buy IPTV", href: "/en/buy-iptv" },
      { label: "IPTV Pricing", href: "/en/pricing" },
      { label: "IPTV Comparison", href: "/en/iptv-comparison" },
      { label: "IPTV Test", href: "/en/iptv-test" },
      { label: "IPTV Reviews", href: "/en/iptv-reviews" },
      { label: "Best IPTV", href: "/en/best-iptv" },
      { label: "IPTV Sports", href: "/en/iptv-sports" },
    ];
  }

  return [
    { label: "IPTV Anbieter", href: "/iptv-anbieter" },
    { label: "IPTV kaufen", href: "/iptv-kaufen" },
    { label: "IPTV Preise", href: "/preise" },
    { label: "IPTV Vergleich", href: "/iptv-vergleich" },
    { label: "IPTV Test", href: "/iptv-test" },
    { label: "IPTV Erfahrungen", href: "/iptv-erfahrungen" },
    { label: "Bestes IPTV", href: "/bester-iptv" },
    { label: "IPTV Sport", href: "/iptv-sport" },
  ];
}

export function getFooterDeviceLinks(locale: Locale = "de"): { label: string; href: string }[] {
  const prefix = locale === "en" ? "/en" : "";
  const devPath = locale === "en" ? "/en/devices" : "/geraete";

  return [
    { label: "Samsung TV", href: `${prefix}/iptv-samsung` },
    { label: "LG TV", href: `${prefix}/iptv-lg-smart-tv` },
    { label: "Fire TV Stick", href: `${prefix}/iptv-fire-tv-stick` },
    { label: "Apple TV", href: `${prefix}/iptv-apple-tv` },
    { label: "Android TV", href: `${prefix}/iptv-android-tv` },
    { label: "Smart TV", href: devPath },
    { label: "iPhone & iPad", href: devPath },
    { label: "Windows / PC", href: devPath },
    { label: "IPTV Apps", href: `${prefix}/iptv-apps` },
    { label: "IPTV Smarters Pro", href: `${prefix}/iptv-smarters-pro` },
  ];
}

export function getFooterSupportLinks(locale: Locale = "de"): { label: string; href: string }[] {
  if (locale === "en") {
    return [
      { label: "Installation", href: "/en/devices" },
      { label: "IPTV Apps", href: "/en/iptv-apps" },
      { label: "IPTV Sports", href: "/en/iptv-sports" },
      { label: "FAQ", href: "/en#faq" },
      { label: "Blog", href: "/en/blog" },
      { label: "Help & Setup", href: "/en/blog/iptv-einrichten" },
    ];
  }

  return [
    { label: "Installation", href: "/geraete" },
    { label: "IPTV Apps", href: "/iptv-apps" },
    { label: "IPTV Sport", href: "/iptv-sport" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Hilfe & Einrichtung", href: "/blog/iptv-einrichten" },
  ];
}
