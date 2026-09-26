import Link from "next/link";
import { Gauge, ListVideo, MonitorSmartphone, CalendarClock, BadgeEuro, CreditCard, Headphones, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Anbieter Deutschland: Worauf Sie bei der Auswahl achten sollten",
  description:
    "Wie erkennt man einen guten IPTV-Anbieter in Deutschland? Die wichtigsten Kriterien – Qualität, Angebot, Geräte, EPG, Preis, Support und Recht – verständlich erklärt.",
  path: "/iptv-anbieter",
});

const criteria = [
  { icon: Gauge, title: "Qualität & Stabilität", text: "Flüssiges Streaming ohne ständiges Ruckeln, stabile Server und eine gleichbleibende Bildqualität bis 4K sind das wichtigste Kriterium." },
  { icon: ListVideo, title: "Sender- & VOD-Angebot", text: "Passen die enthaltenen Live-Sender und die Film-/Serienmediathek (VOD) zu Ihren Interessen – etwa deutschsprachige Sender und Sport?" },
  { icon: MonitorSmartphone, title: "Gerätekompatibilität", text: "Läuft der Dienst mit den gängigen Apps auf Ihren Geräten – Smart-TV, Fire TV, Android, iOS, Windows oder Mac?" },
  { icon: CalendarClock, title: "EPG & Bedienung", text: "Ein aktueller Programmführer (EPG), eine aufgeräumte Senderliste und Funktionen wie Catch-up erleichtern den Alltag." },
  { icon: BadgeEuro, title: "Preis-Leistung & Laufzeiten", text: "Transparente Preise, faire Laufzeiten und keine versteckten Gebühren – kurze Laufzeiten zum Testen, längere zum Sparen." },
  { icon: CreditCard, title: "Zahlung & Widerruf", text: "Nachvollziehbare Zahlungsarten und klare Informationen zu Widerruf und Rückabwicklung schaffen Vertrauen." },
  { icon: Headphones, title: "Support & Erreichbarkeit", text: "Ein erreichbarer Support hilft bei Einrichtung und Rückfragen – gerade beim ersten Setup ist das Gold wert." },
  { icon: Scale, title: "Rechtliches & Seriosität", text: "Ein seriöser Anbieter kommuniziert transparent. Nutzen Sie IPTV nur für legale Inhalte und meiden Sie unrealistisch billige „Alles-für-nichts“-Angebote." },
];

const faq = [
  {
    q: "Woran erkenne ich einen guten IPTV-Anbieter?",
    a: "An der Kombination aus stabiler Streaming-Qualität, passendem Sender- und VOD-Angebot, breiter Gerätekompatibilität, einem aktuellen EPG, transparenten Preisen und erreichbarem Support. Kein einzelner Punkt entscheidet allein – es ist das Gesamtpaket.",
  },
  {
    q: "Wie viele Geräte kann ich gleichzeitig nutzen?",
    a: "Das hängt vom gewählten Tarif ab – die Anzahl gleichzeitiger Streams unterscheidet sich je nach Paket. Einen Überblick finden Sie auf der Preisseite und im Tarifvergleich.",
  },
  {
    q: "Ist IPTV in Deutschland legal?",
    a: "IPTV als Technologie ist legal. Entscheidend ist, dass die gestreamten Inhalte rechtmässig angeboten und genutzt werden. Seien Sie bei extrem günstigen Angeboten mit riesigen Versprechen skeptisch und achten Sie auf einen transparenten Anbieter.",
  },
];

export default function IptvAnbieterPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Anbieter", path: "/iptv-anbieter" }]} />

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Anbieter in Deutschland: <span className="text-brand-accent">worauf es ankommt</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Die Auswahl an IPTV-Anbietern ist gross – und die Werbeversprechen ähneln sich. Wer den für
              sich besten IPTV-Anbieter finden möchte, sollte deshalb nicht nur auf den Preis schauen,
              sondern auf klare, überprüfbare Kriterien. Dieser Ratgeber zeigt, worauf es beim Vergleich
              wirklich ankommt.
            </p>
            <p>
              StreamGermany4K ist ein auf Deutschland ausgerichteter Premium-IPTV-Dienst. Die folgenden
              Punkte helfen Ihnen, Anbieter objektiv einzuordnen – unabhängig davon, für wen Sie sich am
              Ende entscheiden. Suchen Sie eine Empfehlung nach Nutzungstyp, hilft die Seite{" "}
              <Link href="/bester-iptv" className="text-brand-accent hover:underline">Bester IPTV Anbieter</Link>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Die wichtigsten Kriterien im Überblick</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">So schneidet StreamGermany4K ab</h2>
          <p>
            StreamGermany4K legt den Schwerpunkt auf stabile Streaming-Qualität in 4K und HD, breite
            Gerätekompatibilität über die gängigen IPTV-Apps sowie eine unkomplizierte Einrichtung. Die
            konkreten Funktionen finden Sie auf der Seite{" "}
            <Link href="/features" className="text-brand-accent hover:underline">Funktionen</Link>, die
            Laufzeiten und Kosten auf der Seite{" "}
            <Link href="/preise" className="text-brand-accent hover:underline">Preise</Link>. Einen direkten{" "}
            <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">Tarifvergleich</Link>{" "}
            finden Sie auf der Vergleichsseite.
          </p>
          <p>
            Möchten Sie tiefer einsteigen? Der{" "}
            <Link href="/iptv-test" className="text-brand-accent hover:underline">IPTV-Test-Ratgeber</Link>{" "}
            zeigt, wie Sie Qualität selbst prüfen, und unter{" "}
            <Link href="/iptv-erfahrungen" className="text-brand-accent hover:underline">IPTV Erfahrungen</Link>{" "}
            ordnen wir Bewertungen ehrlich ein. Wenn Sie starten möchten, begleitet Sie die Seite{" "}
            <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
            durch Bestellung, Zahlung und Einrichtung.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zur Anbieterwahl" />

      <Cta
        heading="Kriterien geprüft? Dann kann es losgehen."
        text="Vergleichen Sie die Laufzeiten oder starten Sie direkt mit StreamGermany4K."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
