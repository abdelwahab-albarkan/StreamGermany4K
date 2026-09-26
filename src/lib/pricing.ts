import type { Locale } from "@/i18n/config";

/**
 * Single source of truth for the subscription packages, reused by the homepage
 * pricing section, /preise, /en/pricing, the /order flow and the comparison table.
 *
 * Prices are shown in USD ($). Each plan has a stable `id` used as the /order
 * query parameter (?plan=<id>). Features are qualitative facts already used
 * across the site — no invented channel/VOD counts, uptime, device limits,
 * support tiers or activation claims.
 */
export interface Plan {
  id: PlanId; // stable id, used as ?plan= value
  title: string; // duration label, e.g. "3 Monate" or "3 Months"
  price: string; // numeric total for the period; rendered with a leading "$"
  duration?: string; // optional extra label under the price
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export type PlanId = "3-months" | "6-months" | "1-year";

/** Currency symbol — kept here so no component hard-codes it. */
export const CURRENCY = "$";

const FEATURES_DE = [
  "Live-TV, Sport, Filme & Serien",
  "Auf vielen Geräten nutzbar",
  "HD- & 4K-Qualität (je nach Inhalt)",
  "Persönlicher Support bei der Einrichtung",
];

const FEATURES_EN = [
  "Live TV, Sports, Movies & Series",
  "Usable on multiple devices",
  "HD & 4K quality (content dependent)",
  "Personal setup assistance & support",
];

export function getPlans(locale: Locale = "de"): Plan[] {
  const isEn = locale === "en";
  const features = isEn ? FEATURES_EN : FEATURES_DE;

  return [
    { id: "3-months", title: isEn ? "3 Months" : "3 Monate", price: "30", features },
    { id: "6-months", title: isEn ? "6 Months" : "6 Monate", price: "50", features },
    { id: "1-year", title: isEn ? "1 Year" : "1 Jahr", price: "70", features },
  ];
}

/** Look up a plan by id; returns undefined for unknown/invalid ids. */
export function getPlanById(id?: string | null, locale: Locale = "de"): Plan | undefined {
  return getPlans(locale).find((p) => p.id === id);
}
