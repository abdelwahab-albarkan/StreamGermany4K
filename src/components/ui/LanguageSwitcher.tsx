"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const search = searchParams?.toString();
  const fullPath = search ? `${pathname}?${search}` : pathname;
  const currentLocale = getLocaleFromPath(pathname);
  const dict = getDictionary(currentLocale);

  const deHref = getAlternateUrl(fullPath, "de");
  const enHref = getAlternateUrl(fullPath, "en");

  const handleSelect = (locale: "de" | "en") => {
    setLocaleCookie(locale);
    if (onSelect) {
      onSelect();
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
          onClick={() => handleSelect("de")}
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
          onClick={() => handleSelect("en")}
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
        onClick={() => handleSelect("de")}
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
        onClick={() => handleSelect("en")}
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
