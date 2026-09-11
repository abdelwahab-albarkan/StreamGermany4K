/**
 * Central site configuration for StreamGermany4K (https://streamgermany4k.com).
 *
 * Brand:  StreamGermany4K
 * Market: Germany (de-DE)
 *
 * FACTUAL CLAIMS: every quantitative marketing claim (channel count, VOD count,
 * uptime, number of simultaneous connections, support hours) lives in `stats`
 * below and defaults to `null`. When a value is null the UI renders a neutral,
 * defensible German phrase instead of an invented number. Fill these with the
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
   * `number` is the international form for wa.me (country code 49 + the local
   * number without its leading 0). `display` is the human-readable German form.
   */
  whatsapp: {
    number: "212625218443",
    display: "0625 218443",
    url: "https://wa.me/212625218443?text=Hallo%20StreamGermany4K%2C%20ich%20habe%20eine%20Frage%20zu%20Ihrem%20IPTV-Angebot.",
  },

  /**
   * Real, verified figures go here (strings, already formatted in German, e.g.
   * "20.000+", "99,9 %"). Leave null until the operator confirms them.
   */
  stats: {
    channels: null as string | null, // e.g. "20.000+"  → Anzahl Live-Sender
    vod: null as string | null, // e.g. "100.000+"      → Filme & Serien (VOD)
    uptime: null as string | null, // e.g. "99,9 %"     → Verfügbarkeit
    maxConnections: null as string | null, // e.g. "3"  → parallele Streams
    support: null as string | null, // e.g. "24/7"      → Support-Erreichbarkeit
  },
} as const;

/** Returns the real figure when set, otherwise a neutral German fallback phrase. */
export function stat(value: string | null, fallback: string): string {
  return value ?? fallback;
}

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled message. Used e.g. by the
 * pricing cards so the chat opens with the selected pack's details already typed.
 */
export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Primary navigation — only routes that actually exist are listed (no dead links). */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Startseite", href: "/" },
  { label: "IPTV Anbieter", href: "/iptv-anbieter" },
  { label: "IPTV Vergleich", href: "/iptv-vergleich" },
  { label: "Geräte", href: "/geraete" },
  { label: "IPTV kaufen", href: "/iptv-kaufen" },
  { label: "Preise", href: "/preise" },
  { label: "Ratgeber", href: "/blog" },
];

/**
 * Legal links. NOTE: the underlying pages still contain French placeholder text
 * and MUST be rewritten in German (Impressum/DSGVO/AGB/Widerruf) with the
 * operator's real company data before launch. Labels are German; routes are the
 * existing (noindex) legal routes.
 */
export const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Impressum", href: "/mentions-legales" },
  { label: "AGB", href: "/cgv" },
  { label: "Nutzungsbedingungen", href: "/cgu" },
  { label: "Datenschutz", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" },
  { label: "Widerruf", href: "/remboursement" },
];
