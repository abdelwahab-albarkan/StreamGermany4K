import Link from "next/link";
import { Eye, Signal, ListChecks, Clock, ShieldQuestion } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Test: Anbieter und Streaming-Qualität richtig prüfen",
  description:
    "IPTV Test als Ratgeber: Welche Kriterien bei der Prüfung eines IPTV-Anbieters zählen und wie Sie Qualität und Stabilität selbst bewerten. Hinweis: derzeit ohne kostenlosen Testzugang.",
  path: "/iptv-test",
});

const checkpoints = [
  { icon: Eye, title: "Bild- und Tonqualität", text: "Prüfen Sie, ob Sender wirklich in der angegebenen Auflösung (bis 4K) laufen und Ton sauber synchron ist – nicht nur bei einem einzelnen Sender." },
  { icon: Signal, title: "Stabilität über den Tag", text: "Testen Sie zu unterschiedlichen Zeiten, besonders abends zur Primetime. Gutes IPTV bleibt auch unter Last flüssig." },
  { icon: ListChecks, title: "Sender, VOD & EPG", text: "Sind die für Sie wichtigen Sender vorhanden, ist die Mediathek nutzbar und der Programmführer (EPG) aktuell und korrekt?" },
  { icon: Clock, title: "Geräte & Einrichtung", text: "Läuft der Dienst zuverlässig auf Ihrem Gerät (Smart-TV, Fire TV, Android, iOS, PC) und ist die Einrichtung nachvollziehbar?" },
  { icon: ShieldQuestion, title: "Support im Ernstfall", text: "Stellen Sie vor dem Test eine Frage an den Support und achten Sie darauf, wie schnell und hilfreich die Antwort ausfällt." },
];

const faq = [
  {
    q: "Gibt es bei StreamGermany4K einen kostenlosen Testzugang?",
    a: "Aktuell bieten wir keinen kostenlosen Test bzw. Testzugang an. Sie können StreamGermany4K aber mit dem monatlich kündbaren Einstiegsabo risikoarm ausprobieren und die Qualität in Ruhe selbst prüfen.",
  },
  {
    q: "Worauf sollte ich bei einem IPTV-Test achten?",
    a: "Vor allem auf Streaming-Qualität und Stabilität über den Tag, das Sender- und VOD-Angebot, einen aktuellen EPG, die Kompatibilität mit Ihrem Gerät und die Erreichbarkeit des Supports. Der reine Preis sagt über die Qualität wenig aus.",
  },
  {
    q: "Wie lange sollte ein IPTV-Test dauern?",
    a: "Idealerweise über mehrere Tage und zu verschiedenen Uhrzeiten – gerade die Abendstunden sind entscheidend. So erkennen Sie, ob der Dienst auch unter hoher Last zuverlässig bleibt.",
  },
  {
    q: "Sind kostenlose IPTV-Angebote eine gute Alternative zum Test?",
    a: "Von unrealistisch günstigen oder komplett kostenlosen „Alles-inklusive“-Angeboten sollten Sie Abstand nehmen: Sie sind häufig unseriös oder rechtlich fragwürdig. Ein seriöser, transparenter Anbieter ist die bessere Grundlage.",
  },
];

export default function IptvTestPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Test", path: "/iptv-test" }]} />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Test: <span className="text-brand-accent">Qualität und Anbieter richtig prüfen</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Bevor Sie sich für einen IPTV-Dienst entscheiden, lohnt sich ein strukturierter Test. Ein
              guter IPTV-Test schaut nicht nur auf den Preis, sondern prüft Bildqualität, Stabilität,
              Sender- und VOD-Angebot sowie den Support – am besten über mehrere Tage.
            </p>
            <p>
              Einen klassischen kostenlosen Testzugang bieten wir derzeit nicht an. Mit dem monatlich
              kündbaren Einstiegsabo können Sie StreamGermany4K aber risikoarm in der Praxis ausprobieren.
              Die Laufzeiten und Kosten finden Sie auf der Seite{" "}
              <Link href="/preise" className="text-brand-accent hover:underline">Preise</Link>.
            </p>
          </div>
        </div>

        <div className="glass rounded-xl border border-brand-accent/30 p-5 mb-14 max-w-3xl">
          <p className="text-brand-text text-sm leading-relaxed">
            <strong className="text-white">Hinweis:</strong> „IPTV Test“ meint auf dieser Seite das{" "}
            <strong className="text-white">Prüfen und Bewerten</strong> der Qualität eines Anbieters – nicht
            einen kostenlosen Testzugang. Einen solchen Gratis-Test bieten wir derzeit nicht an.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Diese Punkte gehören in jeden IPTV-Test</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {checkpoints.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Vom Test zur Entscheidung</h2>
          <p>
            Wenn Sie diese Punkte geprüft haben, hilft ein Blick auf die einzelnen Bewertungskriterien im{" "}
            <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>,
            eine Empfehlung nach Nutzungstyp unter{" "}
            <Link href="/bester-iptv" className="text-brand-accent hover:underline">Bester IPTV Anbieter</Link>{" "}
            und der direkte{" "}
            <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">Tarifvergleich</Link>{" "}
            bei der Auswahl. Realistische Erwartungen an einen IPTV-Dienst beschreiben wir unter{" "}
            <Link href="/iptv-erfahrungen" className="text-brand-accent hover:underline">IPTV Erfahrungen</Link>.
          </p>
          <p>
            Sind Sie überzeugt, führt Sie die Seite{" "}
            <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
            durch Bestellung und Einrichtung.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zum IPTV-Test" />

      <Cta
        heading="Prüfen Sie StreamGermany4K selbst"
        text="Es gibt keinen kostenlosen Testzugang – mit dem monatlich kündbaren Einstiegsabo prüfen Sie die Qualität aber risikoarm in Ruhe selbst."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
