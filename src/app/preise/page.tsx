import { PricingCard } from "@/components/cards/PricingCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { getPlans } from "@/lib/pricing";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IPTV Preise: Kosten und Pakete im Überblick",
  description:
    "Was kostet IPTV? Transparente Preise bei StreamGermany4K – drei Laufzeiten zur Auswahl. Leistungen und Zahlung verständlich erklärt.",
  path: "/preise",
});


const faq = [
  {
    q: "Was kostet IPTV bei StreamGermany4K?",
    a: "Es gibt drei Laufzeiten – 3 Monate, 6 Monate und 1 Jahr. Die aktuellen Preise sehen Sie in den Tarifkarten oben; sie werden transparent angezeigt, ohne versteckte Gebühren.",
  },
  {
    q: "Gibt es versteckte Gebühren oder eine automatische Verlängerung?",
    a: "Nein. Sie zahlen den ausgewiesenen Preis für die gewählte Laufzeit. Es gibt keine automatische Vertragsbindung darüber hinaus – nach Ablauf entscheiden Sie neu, ob Sie verlängern möchten.",
  },
  {
    q: "Welche Laufzeit lohnt sich?",
    a: "Eine kürzere Laufzeit bietet mehr Flexibilität, eine längere Laufzeit den besten Preis pro Monat. Wählen Sie die Option, die zu Ihrer Nutzung passt.",
  },
  {
    q: "Wie bestelle ich?",
    a: "Auf der Bestellseite wählen Sie Paket, App-Option und Zahlungsmethode und senden Ihre Anfrage anschließend direkt über WhatsApp. Die nächsten Schritte erhalten Sie im Chat.",
  },
];

export default function PreisePage() {
  const plans = getPlans();
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Preise", path: "/preise" }]} />

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IPTV Preise &amp; <span className="text-brand-accent">Pakete</span>
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Transparente Kosten, klare Laufzeiten, keine versteckten Gebühren. Wählen Sie die Laufzeit,
            die zu Ihrer Nutzung passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              planId={plan.id}
              duration={plan.duration}
              features={plan.features}
              isPopular={plan.isPopular}
              badge={plan.badge}
            />
          ))}
        </div>

        {/* Payment / trust strip */}
        <div className="mt-14">
          <PaymentMethods />
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Was den IPTV-Preis bestimmt</h2>
          <div className="space-y-4 text-brand-text leading-relaxed">
            <p>
              Der Preis für IPTV richtet sich vor allem nach der Laufzeit und dem Leistungsumfang. Eine
              längere Laufzeit senkt den Preis pro Monat, während eine kürzere Laufzeit mehr Flexibilität
              bietet. Auch Bildqualität (bis 4K) und die unterstützten Geräte fliessen in die Wahl ein.
            </p>
            <p>
              Achten Sie nicht nur auf den reinen Preis, sondern auf das Gesamtpaket aus Qualität,
              Stabilität und Support. Worauf es dabei ankommt, erklären wir im{" "}
              <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>;
              einen strukturierten Überblick gibt der{" "}
              <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">IPTV-Vergleich</Link>.
              Wenn Sie sich entschieden haben, führt Sie die{" "}
              <Link href="/order" className="text-brand-accent hover:underline">Bestellseite</Link>{" "}
              durch die nächsten Schritte.
            </p>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu Preisen &amp; Abo" />

      <Cta
        heading="Passendes Abo gefunden?"
        text="Schliessen Sie in wenigen Schritten ab und richten Sie StreamGermany4K auf Ihrem Gerät ein."
        primaryLabel="IPTV kaufen"
        primaryHref="/order"
        secondaryLabel="Anbieter-Ratgeber"
        secondaryHref="/iptv-anbieter"
      />
    </div>
  );
}
