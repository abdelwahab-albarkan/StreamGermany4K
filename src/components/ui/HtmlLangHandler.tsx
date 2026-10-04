"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/i18n/config";

/**
 * Keeps the <html lang> attribute in sync with the active locale on the client.
 *
 * The root layout renders a static `<html lang="de">` (the default locale), and
 * the English subtree additionally wraps its content in `<div lang="en-GB">` so
 * the English *content* is correctly tagged even in the server-rendered HTML.
 * This handler, mounted once in the root layout, fixes the remaining runtime gap:
 * it updates `document.documentElement.lang` to match the current route on every
 * navigation — including a client-side EN→DE switch, which previously left the
 * document element stuck on the English value.
 *
 * An optional explicit `lang` still overrides the pathname when provided.
 */
export function HtmlLangHandler({ lang }: { lang?: string }) {
  const pathname = usePathname() || "/";
  const resolved = lang ?? (getLocaleFromPath(pathname) === "en" ? "en" : "de");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = resolved;
    }
  }, [resolved]);

  return null;
}
