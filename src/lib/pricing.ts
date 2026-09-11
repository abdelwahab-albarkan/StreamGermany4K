import { SITE, stat } from "@/lib/site";

/**
 * Single source of truth for the subscription packages, reused by /preise, the
 * homepage pricing preview and (as reference values) the comparison table.
 * Packages are period-based: the title is the duration, the price is the total
 * for that period. Content claims (Sender/VOD) route through the SITE.stats
 * fallback so no figures are invented.
 */
export interface Plan {
  title: string; // period, e.g. "3 Monate"
  price: string; // total price for the period, e.g. "40"
  duration?: string; // optional extra label under the price (omitted for period packages)
  features: string[];
  isPopular?: boolean; // highlighted card
  badge?: string; // badge text (defaults to "Beliebt" in the card)
}

export function getPlans(): Plan[] {
  const channels = SITE.stats.channels ? `${SITE.stats.channels} Live-Sender` : "Grosse Auswahl an Live-Sendern";
  const vod = SITE.stats.vod ? `${SITE.stats.vod} Filme & Serien` : "Umfangreiche Film- & Serienmediathek";
  return [
    {
      title: "3 Monate",
      price: "40",
      features: [channels, vod, "HD- & SD-Qualität", "1 Gerät gleichzeitig", "Standard-Support", "Anti-Ruckel-Technologie"],
    },
    {
      title: "6 Monate",
      price: "55",
      features: [channels, vod, "4K, FHD, HD & SD", "2 Geräte gleichzeitig", `${stat(SITE.stats.support, "Premium")}-Support`, "Anti-Ruckel-Technologie", "Catch-up TV (7 Tage)"],
    },
    {
      title: "1 Jahr",
      price: "80",
      isPopular: true,
      badge: "Bestes Angebot",
      features: [channels, vod, "4K, FHD, HD & SD", "3 Geräte gleichzeitig", "VIP-Priority-Support", "Anti-Ruckel-Technologie", "Catch-up TV (7 Tage)", "Kostenlose Updates"],
    },
  ];
}
