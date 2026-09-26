import Link from "next/link";
import Image from "next/image";
import { Tv, Download, KeyRound, Gauge, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf Samsung Smart TV: Einrichtung, App & Kompatibilität",
  description:
    "IPTV auf dem Samsung Smart TV (Tizen) einrichten: passende App aus dem Smart Hub, Zugangsdaten eintragen und in 4K streamen. Plus Lösung, wenn keine IPTV-App verfügbar ist.",
  path: "/iptv-samsung",
});

const steps = [
  { icon: Download, title: "1. App im Smart Hub finden", text: "Öffnen Sie auf Ihrem Samsung TV den Smart Hub bzw. die Samsung-Apps und suchen Sie einen kompatiblen IPTV-Player. Das App-Angebot hängt vom Modelljahr und der Tizen-Version ab." },
  { icon: KeyRound, title: "2. Zugangsdaten eintragen", text: "Starten Sie die App und hinterlegen Sie Ihre StreamGermany4K-Zugangsdaten (M3U-Link oder Xtream-Login). Anschliessend werden Senderliste und EPG geladen." },
  { icon: Gauge, title: "3. In 4K/HD schauen", text: "Auf Samsung UHD-Modellen ist 4K-Wiedergabe möglich, sofern Inhalt und Internetverbindung es zulassen. Für ein flüssiges Bild empfiehlt sich eine stabile Verbindung." },
];

const troubleshooting = [
  "Keine passende IPTV-App im Smart Hub: Ältere oder eingeschränkte Tizen-Versionen bieten weniger Apps. In diesem Fall nutzen Sie einen Streaming-Stick am HDMI-Anschluss.",
  "Pufferung/Ruckeln: Verbindung prüfen – LAN-Kabel oder starkes WLAN, andere bandbreitenintensive Geräte pausieren.",
  "App startet nicht/veraltet: TV-Software und App aktualisieren, TV kurz vom Strom trennen (Neustart).",
  "Kein Bild: Zugangsdaten und Gültigkeit prüfen und den Zugang in der App neu laden.",
];

const faq = [
  {
    q: "Läuft IPTV auf jedem Samsung Smart TV?",
    a: "Samsung Smart TVs nutzen das Betriebssystem Tizen. Auf vielen Modellen lässt sich eine IPTV-App aus dem Smart Hub installieren; bei älteren Geräten kann die App-Auswahl eingeschränkt sein. Dann hilft ein günstiger Streaming-Stick am HDMI-Anschluss.",
  },
  {
    q: "Was tun, wenn keine IPTV-App verfügbar ist?",
    a: "Schliessen Sie z. B. einen Amazon Fire TV Stick an den HDMI-Anschluss an und installieren Sie dort die IPTV-App. So nutzen Sie IPTV unabhängig vom App-Angebot Ihres Samsung TVs.",
  },
  {
    q: "Unterstützt der Samsung TV 4K-Streaming?",
    a: "Auf Samsung UHD-/4K-Modellen ja – vorausgesetzt, der Inhalt liegt in 4K vor und Ihre Internetleitung ist schnell genug. HD-Modelle geben entsprechend in HD wieder.",
  },
];

export default function IptvSamsungPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Geräte", path: "/geraete" },
            { name: "Samsung Smart TV", path: "/iptv-samsung" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf dem <span className="text-brand-accent">Samsung Smart TV</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Samsung Smart TVs laufen mit dem Betriebssystem Tizen. Für IPTV installieren Sie eine
              kompatible App direkt aus dem Smart Hub – ganz ohne Zusatzgerät, sofern Ihr Modell die App
              anbietet. So richten Sie StreamGermany4K auf Ihrem Samsung TV ein.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-samsung-tv-setup.jpg"
            alt="IPTV auf einem Samsung Smart TV einrichten"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="glass rounded-2xl border border-brand-gray/50 p-6 mb-16 max-w-3xl flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
            <Tv className="w-6 h-6 text-brand-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Kompatibilität</h2>
            <p className="text-brand-text text-sm leading-relaxed">
              Samsung Smart TVs mit Tizen und Zugriff auf den Smart Hub. Das verfügbare App-Angebot variiert
              je nach Modelljahr und Tizen-Version – ältere Geräte lassen sich per Streaming-Stick nachrüsten.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Einrichtung in 3 Schritten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
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

        <div className="max-w-3xl mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-brand-accent" /> Häufige Probleme &amp; Lösungen
          </h2>
          <ul className="space-y-3">
            {troubleshooting.map((t) => (
              <li key={t} className="flex items-start gap-3 text-brand-text">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-text leading-relaxed mt-6">
            Kein Zusatzgerät zur Hand? Die{" "}
            <Link href="/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire-TV-Stick-Anleitung</Link>{" "}
            zeigt die Einrichtung über HDMI. Alle Plattformen im Überblick: die{" "}
            <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV auf dem Samsung Smart TV" />

      <Cta
        heading="Samsung TV startklar machen"
        text="Holen Sie sich Ihre Zugangsdaten und richten Sie StreamGermany4K auf Ihrem Samsung Smart TV ein."
        primaryLabel="IPTV kaufen"
        primaryHref="/order"
        secondaryLabel="Preise ansehen"
        secondaryHref="/preise"
      />
    </div>
  );
}
