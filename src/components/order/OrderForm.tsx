"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsApp";
import { whatsappUrl } from "@/lib/site";
import { CURRENCY, type Plan, type PlanId } from "@/lib/pricing";
import { PAYMENT_METHODS } from "@/lib/payments";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export function OrderForm({
  plans,
  locale = "de",
}: {
  plans: Plan[];
  locale?: Locale;
}) {
  const dict = getDictionary(locale);
  const search = useSearchParams();
  const initial = plans.find((p) => p.id === search?.get("plan"))?.id ?? plans[0].id;

  const [planId, setPlanId] = useState<PlanId>(initial);
  const [app, setApp] = useState<string>("");
  const [payment, setPayment] = useState<string>("");

  const plan = plans.find((p) => p.id === planId) || plans[0];
  const appOption = dict.order.appOptions.find((o) => o.value === app);
  const appLabel = appOption?.label ?? "";
  const complete = Boolean(app && payment);

  const isEn = locale === "en";
  const message = isEn
    ? `Hello, I would like to order the following plan:\n\n` +
      `Plan: ${plan.title}\n` +
      `Price: ${CURRENCY}${plan.price}\n` +
      `Application / Setup: ${appLabel}\n` +
      `Payment method: ${payment}\n\n` +
      `Please send me the next steps.`
    : `Hallo, ich möchte folgendes Paket bestellen:\n\n` +
      `Paket: ${plan.title}\n` +
      `Preis: ${CURRENCY}${plan.price}\n` +
      `App / Einrichtung: ${appLabel}\n` +
      `Zahlungsmethode: ${payment}\n\n` +
      `Bitte senden Sie mir die nächsten Schritte.`;

  const orderHref = whatsappUrl(message);

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Left: steps */}
      <div className="space-y-10">
        {/* Step 1 — Paket / Plan */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">{dict.order.step1Title}</h2>
          <div role="radiogroup" aria-label={dict.order.step1Title} className="grid sm:grid-cols-3 gap-3">
            {plans.map((p) => {
              const selected = p.id === planId;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setPlanId(p.id)}
                  className={`relative text-left rounded-2xl border p-4 min-h-[92px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    selected
                      ? "border-brand-accent bg-brand-accent/10 shadow-glow-cyan"
                      : "border-white/10 bg-brand-surface/40 hover:border-brand-accent/50"
                  }`}
                >
                  {selected && (
                    <span className="absolute top-3 right-3 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent text-white">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <span className="block text-white font-semibold">{p.title}</span>
                  <span className="block text-2xl font-extrabold text-white mt-1">
                    {CURRENCY}
                    {p.price}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2 — App / Einrichtung */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">{dict.order.step2Title}</h2>
          <div role="radiogroup" aria-label={dict.order.step2Title} className="space-y-3">
            {dict.order.appOptions.map((opt) => {
              const selected = app === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setApp(opt.value)}
                  className={`w-full flex items-start gap-3 text-left rounded-xl border p-4 min-h-[56px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    selected
                      ? "border-brand-accent bg-brand-accent/10"
                      : "border-white/10 bg-brand-surface/40 hover:border-brand-accent/50"
                  }`}
                >
                  <span
                    className={`shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selected ? "border-brand-accent" : "border-brand-muted"
                    }`}
                  >
                    {selected && <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />}
                  </span>
                  <span className="text-white text-sm sm:text-base">{opt.label}</span>
                </button>
              );
            })}
          </div>
          {app === "help" && (
            <p className="mt-3 text-brand-text/70 text-sm leading-relaxed">{dict.order.appHelpNote}</p>
          )}
        </section>

        {/* Step 3 — Zahlungsmethode / Payment Method */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">{dict.order.step3Title}</h2>
          <div role="radiogroup" aria-label={dict.order.step3Title} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PAYMENT_METHODS.map((m) => {
              const selected = payment === m.alt;
              return (
                <button
                  key={m.alt}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={m.alt}
                  onClick={() => setPayment(m.alt)}
                  className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border p-3 min-h-[72px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    selected
                      ? "border-brand-accent bg-brand-accent/10"
                      : "border-white/10 bg-brand-surface/40 hover:border-brand-accent/50"
                  }`}
                >
                  {selected && (
                    <span className="absolute top-1.5 right-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-brand-accent text-white">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                  <span className="inline-flex items-center justify-center h-8 w-14 rounded-md bg-white px-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.src} alt="" aria-hidden="true" loading="lazy" className="max-h-5 w-auto object-contain" />
                  </span>
                  <span className="text-brand-text text-xs">{m.alt}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Right: Bestellübersicht / Order Summary (sticky) */}
      <aside className="lg:sticky lg:top-28">
        <div className="glass rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-4">{dict.order.summaryTitle}</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-brand-text">{dict.order.summaryPlan}</dt>
              <dd className="text-white font-medium text-right">{plan.title}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-text">{dict.order.summaryPrice}</dt>
              <dd className="text-white font-medium text-right">
                {CURRENCY}
                {plan.price}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-text">{dict.order.summaryApp}</dt>
              <dd className="text-white font-medium text-right">
                {appLabel || <span className="text-brand-muted font-normal">{dict.order.pleaseSelect}</span>}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-text">{dict.order.summaryPayment}</dt>
              <dd className="text-white font-medium text-right">
                {payment || <span className="text-brand-muted font-normal">{dict.order.pleaseSelect}</span>}
              </dd>
            </div>
          </dl>

          {complete ? (
            <a
              href={orderHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg h-12 px-6 text-base font-semibold text-white bg-[#25D366] hover:bg-[#1ebe57] active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-darker min-h-[44px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {dict.order.whatsappCta}
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg h-12 px-6 text-base font-semibold text-white/60 bg-white/10 cursor-not-allowed min-h-[44px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {dict.order.whatsappCta}
            </button>
          )}
          {!complete && (
            <p className="mt-2 text-brand-muted text-xs text-center">{dict.order.selectionHint}</p>
          )}

          <p className="mt-4 flex items-start gap-2 text-brand-text/70 text-xs leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
            {dict.order.securityNote}
          </p>
        </div>
      </aside>
    </div>
  );
}
