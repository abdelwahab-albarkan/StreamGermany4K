import { de, type Dictionary } from "./de";
import { en } from "./en";
import { type Locale, DEFAULT_LOCALE } from "./config";

export * from "./config";
export type { Dictionary };

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return locale === "en" ? en : de;
}
