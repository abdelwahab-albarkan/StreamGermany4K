import { PricingCard } from "@/components/cards/PricingCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { getPlans } from "@/lib/pricing";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IPTV Preise: Kosten, Abos und Laufzeiten im Überblick",
  description:
    "Was kostet IPTV? Transparente Preise und Laufzeiten bei StreamGermany4K – vom Monatsabo bis zum Jahresabo. Kosten, Leistungen und Zahlung verständlich erklärt.",
  path: "/preise",
});


const faq = [
  {
    q: "Was kostet IPTV bei StreamGermany4K?",
    a: "Die Kosten hängen von der Laufzeit ab: Je länger das Abo, desto günstiger der Preis pro Monat. Ein Monatszugang eignet sich zum Ausprobieren, ein Jahresabo ist auf Dauer am wirtschaftlichsten. Die aktuellen Preise finden Sie in den Tarifkarten oben.",
  },
  {
    q: "Gibt es versteckte Gebühren oder einen Vertrag mit Mindestlaufzeit?",
    a: "Nein. Sie zahlen den ausgewiesenen Preis für die gewählte Laufzeit. Es gibt keine automatische Vertragsbindung darüber hinaus – nach Ablauf entscheiden Sie neu, ob Sie verlängern möchten.",
  },
  {
    q: "Lohnt sich das Monatsabo oder das Jahresabo mehr?",
    a: "Das Monatsabo bietet maximale Flexibilität und niedrige Einstiegskosten. Das Jahresabo hat den niedrigsten Preis pro Monat und lohnt sich, wenn Sie IPTV dauerhaft nutzen möchten.",
  },
  {
    q: "Wie kann ich bezahlen?",
    a: "Die verfügbaren Zahlungsarten werden Ihnen beim Kauf angezeigt. Den Ablauf von Bestellung, Zahlung und Freischaltung beschreiben wir auf der Seite „IPTV kaufen“.",
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
            IPTV Preise &amp; <span className="text-brand-accent">Abos</span>
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Transparente Kosten, klare Laufzeiten, keine versteckten Gebühren. Wählen Sie die Laufzeit,
            die zu Ihrer Nutzung passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
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
              Der Preis für IPTV richtet sich vor allem nach der Laufzeit und dem Leistungsumfang. Längere
              Laufzeiten senken den Preis pro Monat spürbar, während ein kurzes Abo mehr Flexibilität bietet.
              Auch die Anzahl der parallel nutzbaren Geräte und die maximale Bildqualität (bis 4K) fliessen
              in die Tarifwahl ein.
            </p>
            <p>
              Achten Sie bei jedem Angebot nicht nur auf den reinen Preis, sondern auf das Gesamtpaket aus
              Qualität, Stabilität und Support. Worauf es dabei ankommt, erklären wir im{" "}
              <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>;
              die Tarife stellen wir im{" "}
              <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">IPTV-Vergleich</Link>{" "}
              direkt gegenüber.
              Wenn Sie sich entschieden haben, führt Sie die Seite{" "}
              <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
              durch Bestellung und Einrichtung.
            </p>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu Preisen &amp; Abo" />

      <Cta
        heading="Passendes Abo gefunden?"
        text="Schliessen Sie in wenigen Schritten ab und richten Sie StreamGermany4K auf Ihrem Gerät ein."
        primaryLabel="IPTV kaufen"
        primaryHref="/iptv-kaufen"
        secondaryLabel="Anbieter-Ratgeber"
        secondaryHref="/iptv-anbieter"
      />
    </div>
  );
}
