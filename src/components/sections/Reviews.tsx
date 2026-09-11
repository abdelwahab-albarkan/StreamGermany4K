import Link from "next/link";
import { Star, Quote, Headphones, Rocket, Wallet, MessageCircle } from "lucide-react";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsApp";
import { REVIEWS } from "@/lib/reviews";
import { whatsappUrl } from "@/lib/site";

/**
 * Renders real customer reviews from lib/reviews.ts. While none are configured it
 * shows a premium TRUST section (not testimonials) — no fabricated names, ratings
 * or Review/AggregateRating schema. As soon as real reviews are added to
 * reviews.ts, the same section switches to displaying them.
 */

// Trust pillars — factual capabilities, explicitly NOT customer reviews.
const trust = [
  { icon: Headphones, title: "Persönlicher Support", text: "Bei Fragen zur Einrichtung oder Nutzung helfen wir direkt weiter." },
  { icon: Rocket, title: "Einfache Einrichtung", text: "Klare Anleitungen für Smart TVs, Fire TV, Android TV, Apple TV und weitere Geräte." },
  { icon: Wallet, title: "Transparente Preise", text: "Klare Laufzeiten und Preise ohne versteckte Angaben." },
  { icon: MessageCircle, title: "Direkter Kontakt", text: "Fragen? Unser Support ist direkt per WhatsApp erreichbar." },
];

const feedbackHref = whatsappUrl(
  "Hallo StreamGermany4K, ich habe Ihren Service genutzt und möchte gern mein ehrliches Feedback geben:",
);

export function Reviews() {
  const hasReviews = REVIEWS.length > 0;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Vertrauen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {hasReviews ? (
              <>Erfahrungen mit <span className="text-gradient">StreamGermany4K</span></>
            ) : (
              <>Erfahrungen, die für sich <span className="text-gradient">sprechen</span></>
            )}
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto text-lg leading-relaxed">
            {hasReviews
              ? "Rückmeldungen von Nutzerinnen und Nutzern."
              : "Wir bauen auf echten Kundenerfahrungen – keine erfundenen Bewertungen."}
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="glass rounded-2xl border border-white/8 p-6 flex flex-col">
                <Quote className="w-7 h-7 text-brand-accent/60 mb-3" aria-hidden="true" />
                <blockquote className="text-brand-text leading-relaxed flex-grow">{r.quote}</blockquote>
                {typeof r.rating === "number" && (
                  <div className="flex items-center gap-0.5 mt-4" aria-label={`${r.rating} von 5`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < r.rating! ? "text-brand-accent fill-brand-accent" : "text-brand-gray"}`}
                      />
                    ))}
                  </div>
                )}
                <figcaption className="mt-4 text-sm text-white font-medium">
                  {r.author}
                  {r.source && <span className="text-brand-text font-normal"> · {r.source}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            {/* Trust pillars (factual, not testimonials — no names/ratings/schema). */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trust.map((t) => (
                <div
                  key={t.title}
                  className="group glass rounded-2xl border border-white/8 p-6 transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-glow-cyan"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-4 text-brand-accent transition-transform group-hover:scale-105">
                    <t.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                  <p className="text-brand-text text-sm leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>

            {/* Support CTA + honest feedback invitation. */}
            <div className="mt-10 max-w-3xl mx-auto rounded-2xl p-[1px] bg-brand-gradient">
              <div className="rounded-2xl bg-brand-card px-6 py-8 sm:px-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Frage zum Service?</h3>
                <p className="text-brand-text mb-6">
                  Unser Support hilft dir gern weiter – schnell und unkompliziert.
                </p>
                <div className="flex justify-center">
                  <WhatsAppButton label="WhatsApp Support" />
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-brand-text leading-relaxed mb-4">
                    Du hast bereits unseren Service genutzt?
                    <br className="hidden sm:block" /> Wir freuen uns über dein ehrliches Feedback.
                  </p>
                  <a
                    href={feedbackHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg h-11 px-6 font-semibold text-white border border-brand-gray hover:border-brand-accent/60 hover:bg-brand-surface transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Feedback senden
                  </a>
                </div>
              </div>
            </div>

            {/* Optional deeper reading (kept from the honest transparency stance). */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/iptv-erfahrungen" className="text-brand-accent hover:gap-2 inline-flex items-center gap-1 font-medium">
                Wie man IPTV-Erfahrungen realistisch einordnet
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
