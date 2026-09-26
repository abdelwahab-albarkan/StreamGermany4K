import { Locale } from "@/i18n/config";

/**
 * Blog article registry. Metadata only — each article's body lives in its own
 * page.tsx with bespoke content (no templated filler). Used by the /blog index,
 * the sitemap and related-article links.
 */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  cover: string;
  coverAlt: string;
}

export const BLOG_POSTS_DE: BlogPost[] = [
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

export const BLOG_POSTS_EN: BlogPost[] = [
  {
    slug: "was-ist-iptv",
    title: "What is IPTV? Simply Explained",
    description:
      "What is IPTV and how does it work? A clear guide to live TV over the internet – including benefits, requirements, and comparison with cable & satellite.",
    excerpt: "Watch television over high-speed internet instead of cable or satellite – how IPTV works and what you need.",
    date: "2026-09-09",
    cover: "/images/wie-funktioniert-iptv.jpg",
    coverAlt: "Illustration: How IPTV streaming over the internet works",
  },
  {
    slug: "iptv-ruckelt",
    title: "IPTV Buffering or Freezing? Causes & Fixes",
    description:
      "Is IPTV buffering, freezing, or not playing? Discover the most common causes and a step-by-step troubleshooting guide for broadband, apps, and devices.",
    excerpt: "Buffering, stuttering, or black screens? Follow our step-by-step diagnostic guide to restore smooth streaming.",
    date: "2026-09-09",
    cover: "/images/iptv-ohne-buffering-illustration.jpg",
    coverAlt: "IPTV without buffering – smooth streaming setup",
  },
  {
    slug: "m3u-xtream-epg",
    title: "M3U, Xtream Codes & EPG Explained",
    description:
      "Understand M3U playlists, Xtream Codes API, and EPG guides: what they mean, how they relate, and which login method is best for your setup.",
    excerpt: "What M3U playlists, Xtream Codes, and electronic TV guides mean – and how to set them up easily.",
    date: "2026-09-09",
    cover: "/images/iptv-streaming-technologie.jpg",
    coverAlt: "IPTV streaming technology: M3U, Xtream Codes, and EPG",
  },
  {
    slug: "iptv-einrichten",
    title: "Step-by-Step IPTV Setup Guide (2026)",
    description:
      "Setting up IPTV made easy: Step-by-step tutorial for Smart TVs, Fire TV Sticks, Android, and Apple TV – from M3U URL to full live television.",
    excerpt: "Complete setup guide: Install IPTV apps and configure your access credentials in minutes on any device.",
    date: "2026-09-09",
    cover: "/images/iptv-installation-anleitung.jpg",
    coverAlt: "IPTV installation and setup step by step",
  },
  {
    slug: "waipu-tv-magenta-tv-alternative",
    title: "Waipu.tv & MagentaTV Alternatives: IPTV Comparison 2026",
    description:
      "Looking for a high-performance alternative to traditional German TV providers? Discover the pros and cons of IPTV regarding 4K quality, channel breadth, and flexibility.",
    excerpt: "Traditional providers vs independent IPTV – channel lineup, 4K quality, device flexibility, and cost overview.",
    date: "2026-09-09",
    cover: "/images/iptv-vergleich-editorial.jpg",
    coverAlt: "IPTV provider comparison – editorial overview",
  },
];

export const BLOG_POSTS = BLOG_POSTS_DE;

export function getBlogPosts(locale: Locale = "de"): BlogPost[] {
  return locale === "en" ? BLOG_POSTS_EN : BLOG_POSTS_DE;
}

export function getPost(slug: string, locale: Locale = "de"): BlogPost | undefined {
  const posts = getBlogPosts(locale);
  return posts.find((p) => p.slug === slug);
}
