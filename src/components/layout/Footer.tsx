import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { LEGAL_LINKS, SITE } from "@/lib/site";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsApp";
import { Logo } from "@/components/ui/Logo";
import { PaymentMethods } from "@/components/ui/PaymentMethods";

// Every internal href points at a route that actually exists (no dead links).
const iptvLinks = [
  { label: "IPTV Anbieter", href: "/iptv-anbieter" },
  { label: "IPTV kaufen", href: "/iptv-kaufen" },
  { label: "IPTV Preise", href: "/preise" },
  { label: "IPTV Vergleich", href: "/iptv-vergleich" },
  { label: "IPTV Test", href: "/iptv-test" },
  { label: "IPTV Erfahrungen", href: "/iptv-erfahrungen" },
  { label: "Bestes IPTV", href: "/bester-iptv" },
  { label: "IPTV Sport", href: "/iptv-sport" },
];
const deviceLinks = [
  { label: "Samsung TV", href: "/iptv-samsung" },
  { label: "LG TV", href: "/iptv-lg-smart-tv" },
  { label: "Fire TV Stick", href: "/iptv-fire-tv-stick" },
  { label: "Apple TV", href: "/iptv-apple-tv" },
  { label: "Android TV", href: "/iptv-android-tv" },
  { label: "Smart TV", href: "/geraete" },
  { label: "iPhone & iPad", href: "/geraete" },
  { label: "Windows / PC", href: "/geraete" },
  { label: "IPTV Apps", href: "/iptv-apps" },
  { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro" },
];
const supportLinks = [
  { label: "Installation", href: "/geraete" },
  { label: "IPTV Apps", href: "/iptv-apps" },
  { label: "IPTV Sport", href: "/iptv-sport" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Hilfe & Einrichtung", href: "/blog/iptv-einrichten" },
];
// External reference links (other projects) — NOT partners, NOT backlinks, not dominant.
const references = [
  { label: "StreamB4", href: "https://streamb4.com" },
  { label: "GermanyStreamTV", href: "https://germanystreamtv.com" },
  { label: "4K IPTV FR", href: "https://4kiptvfr.com" },
];

const MAIL_HREF = SITE.contactEmail ? `mailto:${SITE.contactEmail}` : "/contact";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-1 text-brand-text text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="inline-block py-1 hover:text-brand-accent transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-darker border-t border-white/8 pt-16 pb-8">
      {/* subtle ambient glow + top gradient line (decorative) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="section-divider absolute top-0 inset-x-0 h-px" />
        <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-brand-cyan/[0.05] blur-[130px]" />
        <div className="absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-violet/[0.05] blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Contact / support strip ---- */}
        <div className="mb-14 rounded-2xl p-[1px] bg-brand-gradient">
          <div className="rounded-2xl bg-brand-card/90 px-6 py-8 sm:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Du hast Fragen?</h3>
              <p className="text-brand-text">Wir helfen dir bei Einrichtung, Geräten und allgemeinen Fragen.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <WhatsAppButton label="WhatsApp Support" />
              <a
                href={MAIL_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg h-11 px-5 font-semibold text-white border border-brand-gray hover:border-brand-accent/60 hover:bg-brand-surface transition-all break-all"
              >
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                {SITE.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* ---- Main columns ---- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 mb-12">
          {/* Brand / about */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" aria-label="StreamGermany4K – Startseite" className="inline-flex items-center mb-4">
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="text-brand-text text-sm leading-relaxed mb-5 max-w-sm">
              Modernes Streaming für TV, Sport, Filme und Serien – optimiert für Smart-TV, Fire TV Stick,
              Apple TV, Android, iOS und mehr.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <WhatsAppButton label="WhatsApp Support" className="text-sm" />
              <a
                href={MAIL_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg h-11 px-4 text-sm font-semibold text-white border border-brand-gray hover:border-brand-accent/60 hover:bg-brand-surface transition-all"
              >
                <Mail className="w-4 h-4 text-brand-accent" /> E-Mail Support
              </a>
            </div>

            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center gap-2 text-brand-text">
                <WhatsAppIcon className="w-4 h-4 text-brand-accent shrink-0" />
                WhatsApp: <span className="text-white">{SITE.whatsapp.display}</span>
              </li>
              {SITE.contactEmail && (
                <li className="flex items-center gap-2 text-brand-text">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href={MAIL_HREF} className="text-white hover:text-brand-accent transition-colors break-all">
                    {SITE.contactEmail}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <FooterColumn title="IPTV" links={iptvLinks} />
          <FooterColumn title="Geräte & Apps" links={deviceLinks} />

          {/* Support column with a stronger contact link + support block */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-1 text-brand-text text-sm mb-4">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="inline-block py-1 hover:text-brand-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 py-1 font-semibold text-brand-accent hover:gap-2 transition-all"
                >
                  Kontakt <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
            <div className="glass rounded-xl border border-white/8 p-4">
              <p className="text-white text-sm font-semibold mb-1">Fragen zur Einrichtung?</p>
              <p className="text-brand-text text-xs leading-relaxed mb-3">
                Unser Support hilft dir bei Fragen zu App, Gerät und Einrichtung.
              </p>
              <WhatsAppButton label="Support kontaktieren" className="text-xs h-9 px-3 w-full" />
            </div>
          </div>

          <FooterColumn title="Rechtliches" links={LEGAL_LINKS} />
        </div>

        {/* ---- References (other projects — external, not partners) ---- */}
        <div className="border-t border-white/8 pt-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2">
            <span className="text-brand-muted text-xs uppercase tracking-wider">Weitere Projekte</span>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {references.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-sm text-brand-text hover:text-brand-accent transition-colors"
                  >
                    {r.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Payment methods ---- */}
        <div className="border-t border-white/8 pt-8 mb-8">
          <p className="text-white font-semibold text-sm text-center mb-4">Zahlungsmethoden</p>
          <PaymentMethods />
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-brand-text text-sm order-2 md:order-1">
            &copy; {year} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <nav className="order-1 md:order-2 flex items-center gap-2 text-sm text-brand-text" aria-label="Rechtliches">
            <Link href="/confidentialite" className="hover:text-brand-accent transition-colors">Datenschutz</Link>
            <span className="text-brand-gray">·</span>
            <Link href="/mentions-legales" className="hover:text-brand-accent transition-colors">Impressum</Link>
            <span className="text-brand-gray">·</span>
            <Link href="/cgv" className="hover:text-brand-accent transition-colors">AGB</Link>
          </nav>
          {/* OMDb attribution (kept, subtle). */}
          <p className="text-brand-text/60 text-xs order-3">
            Filmdaten bereitgestellt von{" "}
            <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
              OMDb API
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
