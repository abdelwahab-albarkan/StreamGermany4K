/**
 * Single source of truth for the subscription packages, reused by the homepage
 * pricing section, /preise, the /order flow and the comparison table.
 *
 * Prices are shown in USD ($). Each plan has a stable `id` used as the /order
 * query parameter (?plan=<id>). Features are qualitative facts already used
 * across the site — no invented channel/VOD counts, uptime, device limits,
 * support tiers or activation claims.
 */
export interface Plan {
  id: PlanId; // stable id, used as ?plan= value
  title: string; // German duration label, e.g. "3 Monate"
  price: string; // numeric total for the period; rendered with a leading "$"
  duration?: string; // optional extra label under the price
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export type PlanId = "3-months" | "6-months" | "1-year";

/** Currency symbol — kept here so no component hard-codes it. */
export const CURRENCY = "$";

// Shared, honest feature list (the plans differ only by duration/price).
const FEATURES = [
  "Live-TV, Sport, Filme & Serien",
  "Auf vielen Geräten nutzbar",
  "HD- & 4K-Qualität (je nach Inhalt)",
  "Persönlicher Support bei der Einrichtung",
];

export function getPlans(): Plan[] {
  return [
    { id: "3-months", title: "3 Monate", price: "30", features: FEATURES },
    { id: "6-months", title: "6 Monate", price: "50", features: FEATURES },
    { id: "1-year", title: "1 Jahr", price: "70", features: FEATURES },
  ];
}

/** Look up a plan by id; returns undefined for unknown/invalid ids. */
export function getPlanById(id?: string | null): Plan | undefined {
  return getPlans().find((p) => p.id === id);
}
