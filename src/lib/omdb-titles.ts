/**
 * Curated IMDb IDs for the homepage "Filme & Serien" preview.
 *
 * OMDb has no discovery/trending endpoint, so we fetch metadata for a fixed,
 * hand-picked list of well-known titles by IMDb ID. These are real IMDb IDs —
 * nothing fabricated. Keep the lists short (12–16 each): every ID is one cached
 * server-side OMDb request, and the free tier has a daily limit.
 */

export const MOVIE_IDS: string[] = [
  "tt0111161", // The Shawshank Redemption
  "tt0468569", // The Dark Knight
  "tt1375666", // Inception
  "tt0816692", // Interstellar
  "tt0133093", // The Matrix
  "tt0110912", // Pulp Fiction
  "tt0137523", // Fight Club
  "tt0109830", // Forrest Gump
  "tt0172495", // Gladiator
  "tt0068646", // The Godfather
  "tt1160419", // Dune (2021)
  "tt15398776", // Oppenheimer
  "tt7286456", // Joker
  "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
];

export const SERIES_IDS: string[] = [
  "tt0903747", // Breaking Bad
  "tt0944947", // Game of Thrones
  "tt4574334", // Stranger Things
  "tt0386676", // The Office (US)
  "tt7366338", // Chernobyl
  "tt8111088", // The Mandalorian
  "tt2442560", // Peaky Blinders
  "tt5180504", // The Witcher
  "tt3032476", // Better Call Saul
  "tt5753856", // Dark
  "tt11198330", // House of the Dragon
  "tt3581920", // The Last of Us
  "tt1475582", // Sherlock
  "tt6468322", // Money Heist (La Casa de Papel)
];
