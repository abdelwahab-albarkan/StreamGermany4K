"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateUrl, getLocaleFromPath, setLocaleCookie } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export function LanguageSwitcher({
  variant = "desktop",
  onSelect,
}: {
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
}) {
  const pathname = usePathname() || "/";
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearch(window.location.search || "");
    }
  }, [pathname]);

  const fullPath = search ? `${pathname}${search}` : pathname;
  const currentLocale = getLocaleFromPath(pathname);
  const dict = getDictionary(currentLocale);

  const deHref = getAlternateUrl(fullPath, "de");
  const enHref = getAlternateUrl(fullPath, "en");

  /**
   * Switch locale with a full-document navigation.
   *
   * The German and English homepages share the middleware rule that 307-redirects
   * "/" to "/en" based on the `user_locale` cookie. A client-side <Link> navigation
   * prefetches "/" while the cookie is still "en", caches that redirect, and then
   * sends the user back to "/en" even after the cookie flips to "de" — so the
   * "Deutsch" button on an English page appeared to do nothing. Forcing a real
   * navigation (after writing the cookie) guarantees the request carries the new
   * cookie and bypasses the stale prefetch, so middleware resolves the correct
   * locale route. `prefetch={false}` also stops the links from pre-caching that
   * redirect in the first place.
   */
  const handleSelect = (
    e: React.MouseEvent<HTMLAnchorElement>,
    locale: "de" | "en",
    href: string,
  ) => {
    setLocaleCookie(locale);
    onSelect?.();

    // Preserve native behaviour for new-tab / modified / non-primary clicks.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    e.preventDefault();
    const current = `${window.location.pathname}${window.location.search}`;
    if (href !== current) {
      window.location.assign(href);
    }
  };

  if (variant === "mobile") {
    return (
      <div
        role="group"
        aria-label={dict.langSwitcher.ariaLabel}
        className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10"
      >
        <Link
          href={deHref}
          prefetch={false}
          onClick={(e) => handleSelect(e, "de", deHref)}
          aria-current={currentLocale === "de" ? "true" : undefined}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            currentLocale === "de"
              ? "bg-brand-accent text-white shadow-glow-cyan"
              : "text-brand-text hover:text-white hover:bg-white/5"
          }`}
        >
          <span aria-hidden="true">🇩🇪</span>
          <span>{dict.langSwitcher.deLabel}</span>
        </Link>
        <Link
          href={enHref}
          prefetch={false}
          onClick={(e) => handleSelect(e, "en", enHref)}
          aria-current={currentLocale === "en" ? "true" : undefined}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
            currentLocale === "en"
              ? "bg-brand-accent text-white shadow-glow-cyan"
              : "text-brand-text hover:text-white hover:bg-white/5"
          }`}
        >
          <span aria-hidden="true">🇬🇧</span>
          <span>{dict.langSwitcher.enLabel}</span>
        </Link>
      </div>
    );
  }

  // Desktop segmented switcher
  return (
    <div
      role="group"
      aria-label={dict.langSwitcher.ariaLabel}
      className="inline-flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold"
    >
      <Link
        href={deHref}
        prefetch={false}
        onClick={(e) => handleSelect(e, "de", deHref)}
        aria-current={currentLocale === "de" ? "true" : undefined}
        title="Deutsch"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all ${
          currentLocale === "de"
            ? "bg-brand-accent text-white shadow-sm"
            : "text-brand-text hover:text-white hover:bg-white/5"
        }`}
      >
        <span aria-hidden="true">🇩🇪</span>
        <span>DE</span>
      </Link>
      <Link
        href={enHref}
        prefetch={false}
        onClick={(e) => handleSelect(e, "en", enHref)}
        aria-current={currentLocale === "en" ? "true" : undefined}
        title="English"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all ${
          currentLocale === "en"
            ? "bg-brand-accent text-white shadow-sm"
            : "text-brand-text hover:text-white hover:bg-white/5"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span>
        <span>EN</span>
      </Link>
    </div>
  );
}
