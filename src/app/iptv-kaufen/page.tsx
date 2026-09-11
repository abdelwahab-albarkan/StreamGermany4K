import Link from "next/link";
import { ShoppingCart, KeyRound, Download, PlayCircle, Wifi, MonitorSmartphone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV kaufen: Ablauf, Zahlung und Einrichtung Schritt für Schritt",
  description:
    "IPTV online kaufen bei StreamGermany4K: Tarif wählen, bezahlen, Zugangsdaten erhalten und in wenigen Minuten einrichten. So läuft der Kauf Ihres IPTV-Abos ab.",
  path: "/iptv-kaufen",
});

const steps = [
  { icon: ShoppingCart, title: "1. Tarif wählen", text: "Wählen Sie auf der Preisseite die Laufzeit, die zu Ihrer Nutzung passt – vom Monatsabo bis zum Jahresabo." },
  { icon: KeyRound, title: "2. Bestellen & bezahlen", text: "Schliessen Sie die Bestellung ab. Die verfügbaren Zahlungsarten werden Ihnen beim Kauf angezeigt." },
  { icon: Download, title: "3. Zugangsdaten erhalten", text: "Nach der Bestellung erhalten Sie Ihre Zugangsdaten und eine Anleitung für die passende IPTV-App." },
  { icon: PlayCircle, title: "4. Installieren & starten", text: "App installieren, Zugangsdaten eintragen – und Live-TV, Sport und Filme in 4K/HD starten." },
];

const requirements = [
  { icon: Wifi, title: "Stabile Internetverbindung", text: "Für flüssiges Streaming in HD/4K empfiehlt sich eine ausreichend schnelle, stabile Verbindung – idealerweise per LAN oder gutem WLAN." },
  { icon: MonitorSmartphone, title: "Ein kompatibles Gerät", text: "Smart-TV (z. B. Samsung, LG), Amazon Fire TV Stick, Android/Google TV, iOS, Windows oder Mac mit einer gängigen IPTV-App." },
];

const faq = [
  {
    q: "Wie kaufe ich IPTV bei StreamGermany4K?",
    a: "Sie wählen auf der Preisseite eine Laufzeit, schliessen die Bestellung ab und erhalten anschliessend Ihre Zugangsdaten samt Einrichtungshinweisen. Danach installieren Sie die passende App und tragen die Daten ein.",
  },
  {
    q: "Wie schnell ist mein Zugang nach dem Kauf aktiv?",
    a: "In der Regel erhalten Sie Ihre Zugangsdaten zeitnah nach abgeschlossener Bestellung und können sofort mit der Einrichtung beginnen.",
  },
  {
    q: "Auf welchen Geräten kann ich IPTV nutzen?",
    a: "Auf gängigen Geräten mit einer IPTV-App: Smart-TVs, Amazon Fire TV Stick, Android- und Google-TV-Geräte, iOS sowie Windows und macOS.",
  },
  {
    q: "Habe ich ein Widerrufsrecht?",
    a: "Informationen zu Widerruf und Rückabwicklung finden Sie in unseren rechtlichen Hinweisen (Widerruf). Bitte beachten Sie die dort genannten Bedingungen für digitale Inhalte.",
  },
];

export default function IptvKaufenPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV kaufen", path: "/iptv-kaufen" }]} />

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV kaufen – <span className="text-brand-accent">so einfach geht&apos;s</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              IPTV online zu kaufen ist bei StreamGermany4K unkompliziert: Sie wählen eine Laufzeit,
              schliessen die Bestellung ab und richten den Dienst anschliessend in wenigen Minuten auf
              Ihrem Gerät ein. Diese Seite erklärt den Ablauf Schritt für Schritt.
            </p>
            <p>
              Noch unsicher, welches Abo passt? Ein Blick auf die{" "}
              <Link href="/preise" className="text-brand-accent hover:underline">Preise</Link>, den{" "}
              <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">Tarifvergleich</Link>{" "}
              und den{" "}
              <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>{" "}
              hilft bei der Entscheidung.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">In vier Schritten zum IPTV-Abo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Das brauchen Sie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          {requirements.map((r) => (
            <div key={r.title} className="glass rounded-2xl border border-brand-gray/50 p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Faq items={faq} heading="Fragen zum Kauf &amp; zur Einrichtung" />

      <Cta
        heading="Bereit loszulegen?"
        text="Wählen Sie Ihre Laufzeit und sichern Sie sich Premium-IPTV in 4K bei StreamGermany4K."
        primaryLabel="Preise &amp; Abo wählen"
        primaryHref="/preise"
      />
    </div>
  );
}
