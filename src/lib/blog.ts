/**
 * Blog article registry. Metadata only — each article's body lives in its own
 * page.tsx with bespoke content (no templated filler). Used by the /blog index,
 * the sitemap and related-article links.
 *
 * `date` is a stable publication date (not regenerated), so we never fabricate
 * "freshness". Bump it only on a real content update.
 * `cover` is a self-hosted editorial image in /public/images.
 */
export interface BlogPost {
  slug: string;
  title: string; // list/card title (H1 may differ)
  description: string;
  excerpt: string;
  date: string; // ISO, e.g. "2026-09-09"
  cover: string; // /images/...
  coverAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "was-ist-iptv",
    title: "Was ist IPTV? Einfach erklärt",
    description:
      "Was ist IPTV und wie funktioniert es? Eine verständliche Erklärung von Live-TV über das Internet – inklusive Vorteilen, Voraussetzungen und Abgrenzung zu Kabel und Satellit.",
    excerpt: "Fernsehen über das Internet statt über Kabel oder Satellit – wie IPTV funktioniert und was Sie dafür brauchen.",
    date: "2026-09-09",
    cover: "/images/wie-funktioniert-iptv.jpg",
    coverAlt: "Illustration: So funktioniert IPTV über das Internet",
  },
  {
    slug: "iptv-ruckelt",
    title: "IPTV ruckelt oder puffert? Ursachen & Lösungen",
    description:
      "IPTV ruckelt, puffert oder funktioniert nicht? Die häufigsten Ursachen und eine Schritt-für-Schritt-Anleitung zur Lösung – von der Internetverbindung bis zu App und Gerät.",
    excerpt: "Buffering, Ruckler oder schwarzes Bild? So finden und beheben Sie die Ursache Schritt für Schritt.",
    date: "2026-09-09",
    cover: "/images/iptv-ohne-buffering-illustration.jpg",
    coverAlt: "IPTV ohne Buffering – flüssiges Streaming",
  },
  {
    slug: "m3u-xtream-epg",
    title: "M3U, Xtream Codes & EPG einfach erklärt",
    description:
      "M3U-Playlist, Xtream Codes und EPG verständlich erklärt: Was die Begriffe bedeuten, wie sie zusammenhängen und worin sich M3U und Xtream bei der Einrichtung unterscheiden.",
    excerpt: "Was M3U, Xtream Codes und der EPG-Programmführer bedeuten – und welcher Zugang für die Einrichtung praktischer ist.",
    date: "2026-09-09",
    cover: "/images/iptv-streaming-technologie.jpg",
    coverAlt: "IPTV-Streaming-Technologie: M3U, Xtream Codes und EPG",
  },
  {
    slug: "iptv-einrichten",
    title: "IPTV Schritt-für-Schritt einrichten (Anleitung 2026)",
    description:
      "IPTV einrichten leicht gemacht: Schritt-für-Schritt Anleitung zur Installation auf Smart TV, Fire TV Stick, Android & Apple TV – von der M3U-URL bis zum fertigen Live-TV.",
    excerpt: "Kompletter Einrichtungs-Guide: So installieren Sie IPTV-Apps und Zugangsdaten in wenigen Minuten auf jedem Gerät.",
    date: "2026-09-09",
    cover: "/images/iptv-installation-anleitung.jpg",
    coverAlt: "IPTV Installation und Einrichtung Schritt für Schritt",
  },
  {
    slug: "waipu-tv-magenta-tv-alternative",
    title: "Waipu.tv & MagentaTV Alternative: IPTV im Vergleich 2026",
    description:
      "Suchen Sie eine leistungsstarke Alternative zu Waipu.tv, MagentaTV oder 1&1 HD-TV? Erfahren Sie Vor- und Nachteile von IPTV-Lösungen bezüglich Kanalauswahl, Bildqualität und Flexibilität.",
    excerpt: "Waipu.tv & MagentaTV im Vergleich mit unabhängigem IPTV – Senderangebot, 4K-Qualität, Gerätetyp und Kosten auf einen Blick.",
    date: "2026-09-09",
    cover: "/images/iptv-vergleich-editorial.jpg",
    coverAlt: "IPTV-Anbieter im Vergleich – redaktionelle Übersicht",
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
