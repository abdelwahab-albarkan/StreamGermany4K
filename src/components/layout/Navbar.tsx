"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the mobile menu is open: lock body scroll and allow Escape to close.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-brand-darker/90 backdrop-blur-md border-b border-white/8 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" aria-label="StreamGermany4K – Startseite" className="flex items-center shrink-0" onClick={closeMenu}>
            <Logo priority className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gradient px-5 h-10 text-sm font-semibold text-white shadow-glow-cyan hover:brightness-110 transition-all"
            >
              Jetzt bestellen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-brand-surface/60 text-white hover:border-brand-accent/50 hover:text-brand-accent active:scale-95 transition-all"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: tap-to-close backdrop + premium dropdown panel */}
      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={closeMenu}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-default"
          />
          <div id="mobile-menu" className="lg:hidden absolute top-full inset-x-0 z-50 px-4 pt-3 animate-fade-in">
            <div className="rounded-2xl border border-white/10 bg-brand-darker/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
              <nav className="p-2" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-white text-base font-medium hover:bg-brand-surface hover:text-brand-accent active:bg-brand-surface transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-brand-muted" />
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-white/10">
                <Link
                  href="/order"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-brand-gradient h-11 px-6 text-base font-semibold text-white hover:brightness-110 transition-all"
                >
                  Jetzt bestellen
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
