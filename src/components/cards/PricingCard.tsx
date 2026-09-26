import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsApp";
import { CURRENCY } from "@/lib/pricing";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

interface PricingCardProps {
  title: string;
  price: string; // total for the period, e.g. "30"
  planId?: string; // when set, the CTA opens /order?plan=<planId> or /en/order?plan=<planId>
  duration?: string; // optional label under the price
  features: string[];
  isPopular?: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string; // overrides the default /order link
  locale?: Locale;
}

export function PricingCard({
  title,
  price,
  planId,
  duration,
  features,
  isPopular,
  badge,
  ctaLabel,
  ctaHref,
  locale = "de",
}: PricingCardProps) {
  const dict = getDictionary(locale);
  const defaultLabel = ctaLabel ?? dict.pricing.orderCta;
  const defaultBaseOrder = locale === "en" ? "/en/order" : "/order";
  const resolvedHref = ctaHref ?? (planId ? `${defaultBaseOrder}?plan=${planId}` : defaultBaseOrder);
  const isExternal = resolvedHref.startsWith("http");
  const isWhatsApp = resolvedHref.includes("wa.me");

  const btnClasses = `inline-flex w-full items-center justify-center gap-2 rounded-md h-12 px-8 text-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark ${
    isPopular
      ? "bg-brand-accent text-white hover:bg-brand-accentHover shadow-[0_0_15px_rgba(0, 217, 255,0.4)]"
      : "border border-brand-gray bg-transparent text-white hover:bg-brand-gray"
  }`;

  const cta = (
    <>
      {isWhatsApp && <WhatsAppIcon className="w-5 h-5" />}
      {defaultLabel}
    </>
  );

  return (
    <div
      className={`relative p-8 rounded-2xl glass border ${
        isPopular
          ? "border-brand-accent bg-brand-dark/80 md:scale-105 shadow-[0_0_30px_rgba(0, 217, 255,0.15)] z-10"
          : "border-brand-gray/50 hover:border-brand-gray bg-[#0f0f0f]/50"
      } transition-all duration-300 flex flex-col`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap">
          {badge ?? (locale === "en" ? "Popular" : "Beliebt")}
        </div>
      )}

      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-extrabold text-white">
            {CURRENCY}
            {price}
          </span>
          {duration && <span className="text-brand-text mb-1">/ {duration}</span>}
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-brand-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        {isExternal ? (
          <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={btnClasses}>
            {cta}
          </a>
        ) : (
          <Link href={resolvedHref} className={btnClasses}>
            {cta}
          </Link>
        )}
      </div>
    </div>
  );
}
