"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, X } from "lucide-react";
import { getLocaleFromPath } from "@/i18n/config";
import { getDictionary } from "@/i18n";

const CONSENT_KEY = "streamgermany4k_cookie_consent";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (choice: "all" | "essential") => {
    localStorage.setItem(CONSENT_KEY, choice);
    setShow(false);
  };

  if (!mounted || !show) return null;

  const cookieHref = locale === "en" ? "/en/cookies" : "/cookies";

  return (
    <div
      role="region"
      aria-label={dict.cookie.title}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-slide-up"
    >
      <div className="glass rounded-2xl border border-white/15 bg-brand-darker/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/80">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
            <h3 className="text-white font-bold text-sm">{dict.cookie.title}</h3>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("essential")}
            aria-label="Schließen / Close"
            className="text-brand-muted hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-brand-text text-xs leading-relaxed mb-4">{dict.cookie.text}</p>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-brand-accent px-4 py-2 text-xs font-semibold text-white hover:bg-brand-accentHover transition-colors min-h-[40px]"
          >
            {dict.cookie.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => handleConsent("essential")}
            className="flex-1 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-brand-text hover:text-white hover:bg-white/10 transition-colors min-h-[40px]"
          >
            {dict.cookie.rejectNonEssential}
          </button>
        </div>

        <div className="mt-3 text-center">
          <Link
            href={cookieHref}
            className="text-[11px] text-brand-muted hover:text-brand-accent transition-colors underline"
          >
            {dict.cookie.managePreferences}
          </Link>
        </div>
      </div>
    </div>
  );
}
