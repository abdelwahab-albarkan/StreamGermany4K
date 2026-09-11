/**
 * REAL customer reviews only.
 *
 * Do NOT add fabricated testimonials, invented customer names, fake star ratings
 * or unverifiable quotes. Populate this array only with genuine, consented
 * feedback (optionally with a source label/link). Leave it empty otherwise — the
 * Reviews section renders an honest state when there are none.
 *
 * To add a real review, push an object like:
 *   { quote: "…", author: "Max M.", source: "Trustpilot", rating: 5 }
 */
export interface Review {
  quote: string;
  author: string; // first name / initials, exactly as the customer consented to
  source?: string; // optional platform or source label
  rating?: number; // optional 1–5, only if a genuine rating was given
}

export const REVIEWS: Review[] = [];
