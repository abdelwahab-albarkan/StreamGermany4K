import { MOVIE_IDS, SERIES_IDS } from "@/lib/omdb-titles";

/**
 * Server-only OMDb client.
 *
 * SECURITY CONTRACT
 * -----------------
 * - The key is read ONLY from the server-only env var `OMDB_API_KEY`. It MUST
 *   NOT be prefixed with `NEXT_PUBLIC_` and this module MUST NOT be imported
 *   from a Client Component — either would leak the key into the browser bundle.
 * - The key value is never returned, serialized, logged, or put in an error.
 * - Responses are cached and revalidated hourly (`next: { revalidate }`), so
 *   OMDb is not called on every request (the free tier is daily-rate-limited).
 * - Missing key or a failed request degrades gracefully: individual failures are
 *   skipped, and with no key the exported list functions return [] so the
 *   homepage shows an editorial fallback instead of errors or fake data.
 *
 * OMDb has no discovery endpoint, so we fetch a curated list of real IMDb IDs
 * (see lib/omdb-titles.ts) by id: https://www.omdbapi.com/?apikey=…&i=tt…
 */

const OMDB_BASE = "https://www.omdbapi.com/";
// The curated title list is effectively static (ratings drift very slowly), so a
// 24h revalidate keeps the homepage statically cached far longer and makes the
// background ISR regeneration — the only time an OMDb call sits in the render
// path — 24× rarer, removing almost all cold-navigation spikes.
const REVALIDATE_SECONDS = 86400; // 24 hours

/** Normalised title used by the homepage VOD marquee (source-agnostic). */
export interface VodTitle {
  id: string; // imdbID
  title: string;
  year: string | null;
  posterUrl: string | null; // null when OMDb returns "N/A"
  imdbRating: number | null; // parsed; null when unavailable
}

/** Raw OMDb by-id response (only the fields we use). */
interface OmdbResponse {
  Response: "True" | "False";
  imdbID?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
  imdbRating?: string;
  Type?: string;
  Error?: string;
}

function normalise(raw: OmdbResponse): VodTitle | null {
  if (raw.Response !== "True" || !raw.imdbID || !raw.Title) return null;
  const poster = raw.Poster && raw.Poster !== "N/A" ? raw.Poster : null;
  const ratingNum = raw.imdbRating && raw.imdbRating !== "N/A" ? Number.parseFloat(raw.imdbRating) : NaN;
  const year = raw.Year && raw.Year !== "N/A" ? raw.Year.replace(/–.*$/, "").trim() : null;
  return {
    id: raw.imdbID,
    title: raw.Title,
    year: year || null,
    posterUrl: poster,
    imdbRating: Number.isFinite(ratingNum) ? ratingNum : null,
  };
}

/**
 * Fetch one title by IMDb ID. Returns null on any problem (no key, network
 * error, non-OK status, OMDb "False" response) — never throws, never logs the
 * key. Cached + revalidated by Next's data cache.
 */
async function fetchById(imdbId: string): Promise<VodTitle | null> {
  const key = process.env.OMDB_API_KEY;
  if (!key) return null;
  try {
    // Direct id lookup — works for both movies and series (OMDb resolves the type).
    const url = `${OMDB_BASE}?apikey=${encodeURIComponent(key)}&i=${encodeURIComponent(imdbId)}&plot=short`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    const data = (await res.json()) as OmdbResponse;
    return normalise(data);
  } catch {
    return null; // never surface the key or the underlying error
  }
}

/** Public single-title helpers (server-only). */
export const getMovieById = (imdbId: string) => fetchById(imdbId);
export const getSeriesById = (imdbId: string) => fetchById(imdbId);

/** Fetch the curated list; drop any titles that failed (partial success is fine). */
async function fetchMany(ids: string[]): Promise<VodTitle[]> {
  if (!process.env.OMDB_API_KEY) return [];
  const results = await Promise.all(ids.map((id) => fetchById(id)));
  return results.filter((t): t is VodTitle => t !== null);
}

export const getHomepageMovies = () => fetchMany(MOVIE_IDS);
export const getHomepageSeries = () => fetchMany(SERIES_IDS);
