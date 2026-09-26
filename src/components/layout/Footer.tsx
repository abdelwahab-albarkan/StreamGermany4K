"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getLegalLinks,
  getFooterIptvLinks,
  getFooterDeviceLinks,
  getFooterSupportLinks,
  SITE,
} from "@/lib/site";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsApp";
import { Logo } from "@/components/ui/Logo";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import { getLocaleFromPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

const references = [
  { label: "StreamB4", href: "https://streamb4.com" },
  { label: "GermanyStreamTV", href: "https://germanystreamtv.com" },
  { label: "4K IPTV FR", href: "https://4kiptvfr.com" },
];

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

export function Footer({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname() || "/";
  const locale = propLocale ?? getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  const iptvLinks = getFooterIptvLinks(locale);
  const deviceLinks = getFooterDeviceLinks(locale);
  const supportLinks = getFooterSupportLinks(locale);
  const legalLinks = getLegalLinks(locale);

  const homeHref = locale === "en" ? "/en" : "/";
  const contactHref = locale === "en" ? "/en/contact" : "/contact";
  const privacyHref = locale === "en" ? "/en/privacy" : "/confidentialite";
  const legalHref = locale === "en" ? "/en/legal-notice" : "/mentions-legales";
  const termsHref = locale === "en" ? "/en/terms" : "/cgv";

  const MAIL_HREF = SITE.contactEmail ? `mailto:${SITE.contactEmail}` : contactHref;

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
              <h3 className="text-2xl font-bold text-white mb-1">{dict.footer.questionsTitle}</h3>
              <p className="text-brand-text">{dict.footer.questionsSubtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <WhatsAppButton label={dict.footer.whatsappSupport} />
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
            <Link href={homeHref} aria-label={`${SITE.name} – ${dict.nav.home}`} className="inline-flex items-center mb-4">
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="text-brand-text text-sm leading-relaxed mb-5 max-w-sm">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <WhatsAppButton label={dict.footer.whatsappSupport} className="text-sm" />
              <a
                href={MAIL_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg h-11 px-4 text-sm font-semibold text-white border border-brand-gray hover:border-brand-accent/60 hover:bg-brand-surface transition-all"
              >
                <Mail className="w-4 h-4 text-brand-accent" /> {dict.footer.emailSupport}
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

          <FooterColumn title={dict.footer.colIptv} links={iptvLinks} />
          <FooterColumn title={dict.footer.colDevices} links={deviceLinks} />

          {/* Support column */}
          <div>
            <h4 className="text-white font-semibold mb-4">{dict.footer.colSupport}</h4>
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
                  href={contactHref}
                  className="inline-flex items-center gap-1 py-1 font-semibold text-brand-accent hover:gap-2 transition-all"
                >
                  {dict.footer.contactLink} <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
            <div className="glass rounded-xl border border-white/8 p-4">
              <p className="text-white text-sm font-semibold mb-1">{dict.footer.setupHelpTitle}</p>
              <p className="text-brand-text text-xs leading-relaxed mb-3">
                {dict.footer.setupHelpText}
              </p>
              <WhatsAppButton label={dict.footer.contactSupport} className="text-xs h-9 px-3 w-full" />
            </div>
          </div>

          <FooterColumn title={dict.footer.colLegal} links={legalLinks} />
        </div>

        {/* ---- References ---- */}
        <div className="border-t border-white/8 pt-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2">
            <span className="text-brand-muted text-xs uppercase tracking-wider">{dict.footer.otherProjects}</span>
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
          <p className="text-white font-semibold text-sm text-center mb-4">{dict.footer.paymentMethods}</p>
          <PaymentMethods locale={locale} />
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-brand-text text-sm order-2 md:order-1">
            &copy; {year} {SITE.name}. {dict.footer.rightsReserved}
          </p>
          <nav className="order-1 md:order-2 flex items-center gap-2 text-sm text-brand-text" aria-label={dict.footer.colLegal}>
            <Link href={privacyHref} className="hover:text-brand-accent transition-colors">
              {locale === "en" ? "Privacy Policy" : "Datenschutz"}
            </Link>
            <span className="text-brand-gray">·</span>
            <Link href={legalHref} className="hover:text-brand-accent transition-colors">
              {locale === "en" ? "Legal Notice" : "Impressum"}
            </Link>
            <span className="text-brand-gray">·</span>
            <Link href={termsHref} className="hover:text-brand-accent transition-colors">
              {locale === "en" ? "Terms of Service" : "AGB"}
            </Link>
          </nav>
          <p className="text-brand-text/60 text-xs order-3">
            {dict.footer.omdbCredit}{" "}
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
