import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { SITE, stat } from "@/lib/site";
import { getPlans, CURRENCY } from "@/lib/pricing";

export const metadata = pageMetadata({
  title: "IPTV Vergleich 2026: Anbieter, Angebote und Tarife gegenüberstellen",
  description:
    "IPTV Vergleich 2026 für Deutschland: So stellen Sie Angebote strukturiert gegenüber und finden den passenden Tarif. Plus die StreamGermany4K-Tarife im direkten Vergleich.",
  path: "/iptv-vergleich",
});

// Row = comparison dimension; values per plan. Prices/durations/connections are
// plan definitions; content claims (Sender/VOD) route through the stats fallback.
const senderRow = SITE.stats.channels ? `${SITE.stats.channels} Sender` : "Grosse Senderauswahl";
const plans = getPlans(); // central pricing (no duplicated price values)
const rows: { label: string; basic: string | boolean; premium: string | boolean; ultimate: string | boolean }[] = [
  { label: "Preis", basic: `${CURRENCY}${plans[0].price}`, premium: `${CURRENCY}${plans[1].price}`, ultimate: `${CURRENCY}${plans[2].price}` },
  { label: "Laufzeit", basic: plans[0].title, premium: plans[1].title, ultimate: plans[2].title },
  { label: "Live-Sender", basic: senderRow, premium: senderRow, ultimate: senderRow },
  { label: "Bildqualität", basic: "HD & SD", premium: "bis 4K", ultimate: "bis 4K" },
  { label: "Parallele Geräte", basic: "1", premium: "2", ultimate: "3" },
  { label: "Catch-up TV (7 Tage)", basic: false, premium: true, ultimate: true },
  { label: "Support", basic: "Standard", premium: "Premium", ultimate: "VIP-Priority" },
];

const dimensions = [
  "Bild- und Streaming-Qualität (bis 4K) sowie Stabilität",
  "Passendes Sender- und VOD-Angebot für Ihre Interessen",
  "Gerätekompatibilität (Smart-TV, Fire TV, Android, iOS, PC)",
  "EPG, Senderliste und Zusatzfunktionen wie Catch-up",
  "Laufzeit und Preis-Leistung – kurz zum Testen, lang zum Sparen",
  "Zahlung, Widerruf und erreichbarer Support",
];

const faq = [
  {
    q: "Wie vergleiche ich IPTV-Anbieter am besten?",
    a: "Stellen Sie die Angebote entlang fester Kriterien gegenüber – Qualität, Sender-/VOD-Angebot, Geräte, EPG, Laufzeit/Preis und Support. Ein Vergleich anhand einer Tabelle ist objektiver als ein Blick nur auf den Preis. Die einzelnen Kriterien erklären wir ausführlich im Anbieter-Ratgeber.",
  },
  {
    q: "Was ist beim Vergleich wichtiger – Preis oder Qualität?",
    a: "Beides zählt, aber ein sehr niedriger Preis nützt wenig, wenn Streaming-Qualität oder Stabilität nicht stimmen. Wählen Sie das beste Gesamtpaket für Ihre Nutzung, statt allein auf den günstigsten Tarif zu schauen.",
  },
  {
    q: "Worin unterscheiden sich die StreamGermany4K-Tarife?",
    a: "Vor allem in Laufzeit, maximaler Bildqualität (bis 4K), der Anzahl paralleler Geräte, Catch-up und Support-Stufe. Der Sender- und VOD-Umfang ist bei allen Tarifen gleich. Die vollständigen Preise finden Sie auf der Preisseite.",
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-brand-accent mx-auto" aria-label="enthalten" />;
  if (value === false) return <Minus className="w-5 h-5 text-brand-text/40 mx-auto" aria-label="nicht enthalten" />;
  return <span>{value}</span>;
}

export default function IptvVergleichPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Vergleich", path: "/iptv-vergleich" }]} />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Vergleich: <span className="text-brand-accent">Angebote richtig gegenüberstellen</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Ein guter IPTV-Vergleich schaut über den Preis hinaus. Wer Angebote strukturiert
              gegenüberstellt, erkennt schnell, welcher Tarif zur eigenen Nutzung passt. Diese Seite zeigt,
              welche Punkte Sie vergleichen sollten – und stellt die Tarife von StreamGermany4K direkt
              gegenüber.
            </p>
            <p>
              Die vollständigen Bewertungskriterien finden Sie im{" "}
              <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>,
              eine Empfehlung nach Nutzungstyp unter{" "}
              <Link href="/bester-iptv" className="text-brand-accent hover:underline">Bester IPTV Anbieter</Link>{" "}
              und die Details zu Kosten auf der Seite{" "}
              <Link href="/preise" className="text-brand-accent hover:underline">Preise</Link>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">StreamGermany4K-Tarife im Vergleich</h2>
        <div className="overflow-x-auto -mx-4 px-4 mb-6">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-brand-gray">
                <th className="py-4 pr-4 font-semibold text-brand-text">Merkmal</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[0].title}</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[1].title}</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[2].title}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-brand-gray/40">
                  <td className="py-3 pr-4 text-brand-text">{r.label}</td>
                  <td className="py-3 px-4 text-center text-white"><Cell value={r.basic} /></td>
                  <td className="py-3 px-4 text-center text-white"><Cell value={r.premium} /></td>
                  <td className="py-3 px-4 text-center text-white bg-brand-accent/5"><Cell value={r.ultimate} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-brand-text/70 mb-16">
          Sender- und VOD-Umfang sind bei allen Tarifen identisch – Unterschiede liegen in Laufzeit,
          Bildqualität, parallelen Geräten und Support. Alle Preise im Detail auf der{" "}
          <Link href="/preise" className="text-brand-accent hover:underline">Preisseite</Link>.
        </p>

        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Diese Punkte sollten Sie vergleichen</h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Unabhängig vom Anbieter lohnt sich der Vergleich entlang dieser Dimensionen:
          </p>
          <ul className="space-y-3 mb-6">
            {dimensions.map((d) => (
              <li key={d} className="flex items-start gap-3 text-brand-text">
                <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-text leading-relaxed">
            Wie Sie einen Anbieter zusätzlich praktisch prüfen, zeigt der{" "}
            <Link href="/iptv-test" className="text-brand-accent hover:underline">IPTV-Test-Ratgeber</Link>;
            worauf es bei{" "}
            <Link href="/iptv-erfahrungen" className="text-brand-accent hover:underline">IPTV Erfahrungen</Link>{" "}
            ankommt, lesen Sie separat. Haben Sie sich entschieden, führt Sie die Seite{" "}
            <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
            durch Bestellung und Einrichtung. StreamGermany4K setzt dabei auf{" "}
            {stat(SITE.stats.uptime, "stabile Server")}
            {SITE.stats.uptime ? " Verfügbarkeit" : ""} und eine unkomplizierte Nutzung auf gängigen Geräten.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zum IPTV-Vergleich" />

      <Cta
        heading="Tarife verglichen? Jetzt starten."
        text="Sehen Sie sich die Preise im Detail an oder schliessen Sie direkt Ihr passendes IPTV-Abo ab."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
