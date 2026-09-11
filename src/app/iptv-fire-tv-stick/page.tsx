import Link from "next/link";
import Image from "next/image";
import { Cpu, Download, KeyRound, Gauge, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf Fire TV Stick: Installation, Apps & Einrichtung",
  description:
    "IPTV auf dem Amazon Fire TV Stick nutzen: kompatible Modelle, IPTV-App über Appstore oder Downloader installieren, Zugangsdaten eintragen und in 4K streamen. Mit Tipps bei Pufferung.",
  path: "/iptv-fire-tv-stick",
});

const steps = [
  { icon: Download, title: "1. IPTV-App installieren", text: "Öffnen Sie den Amazon Appstore und suchen Sie nach einem IPTV-Player. Ist die gewünschte App dort nicht verfügbar, lässt sie sich per Sideloading über die „Downloader“-App installieren (Entwickleroptionen dafür in den Fire-TV-Einstellungen aktivieren)." },
  { icon: KeyRound, title: "2. Zugangsdaten eintragen", text: "Starten Sie die App und tragen Sie Ihre StreamGermany4K-Zugangsdaten (z. B. per M3U-Link oder Xtream-Login) ein. Die App lädt Senderliste und Programmführer (EPG)." },
  { icon: Gauge, title: "3. Streamen in 4K/HD", text: "Wählen Sie einen Sender und starten Sie Live-TV, Sport oder Filme. Auf Fire TV Stick 4K und 4K Max ist 4K-Wiedergabe möglich, sofern Inhalt und Leitung es hergeben." },
];

const troubleshooting = [
  "Pufferung/Ruckeln: Verbindung prüfen – möglichst starkes WLAN (5 GHz) oder ein Ethernet-Adapter für den Fire TV Stick, andere Downloads pausieren.",
  "App friert ein: Fire TV neu starten und den App-Cache in den Einstellungen leeren.",
  "Kein Bild/„Kein Signal“: Zugangsdaten und deren Gültigkeit prüfen und den M3U-/Xtream-Zugang neu laden.",
  "4K läuft nicht flüssig: Ein Fire TV Stick 4K/4K Max und eine ausreichend schnelle Leitung sind Voraussetzung.",
];

const faq = [
  {
    q: "Welche Fire-TV-Modelle werden unterstützt?",
    a: "Alle gängigen Modelle mit Fire OS – Fire TV Stick (inkl. Lite), Fire TV Stick 4K und 4K Max sowie Fire TV Cube. 4K-Wiedergabe setzt ein 4K-fähiges Modell voraus.",
  },
  {
    q: "Wie installiere ich eine IPTV-App, die nicht im Appstore ist?",
    a: "Über Sideloading: Installieren Sie die „Downloader“-App aus dem Appstore, erlauben Sie in den Einstellungen die Installation aus unbekannten Quellen und laden Sie die App-Datei über den vom App-Anbieter genannten Weg. Nutzen Sie dabei nur legale Quellen.",
  },
  {
    q: "Warum ruckelt das Bild auf dem Fire TV Stick?",
    a: "Meist liegt es an der Verbindung. Ein starkes 5-GHz-WLAN oder ein Ethernet-Adapter sorgt für Stabilität. Für 4K braucht es zusätzlich ein 4K-Modell und ausreichend Bandbreite.",
  },
];

export default function IptvFireTvStickPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Geräte", path: "/geraete" },
            { name: "Fire TV Stick", path: "/iptv-fire-tv-stick" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf dem <span className="text-brand-accent">Amazon Fire TV Stick</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Der Fire TV Stick ist einer der beliebtesten Wege, IPTV auf den Fernseher zu bringen: günstig,
              klein und schnell eingerichtet. Da Fire OS auf Android basiert, lassen sich gängige IPTV-Apps
              direkt aus dem Appstore oder per Sideloading installieren.
            </p>
            <p>
              So richten Sie StreamGermany4K auf Ihrem Fire TV Stick ein – Schritt für Schritt, mit Tipps zu
              Qualität und häufigen Problemen.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-fire-tv-stick.jpg"
            alt="IPTV auf dem Amazon Fire TV Stick nutzen"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="glass rounded-2xl border border-brand-gray/50 p-6 mb-16 max-w-3xl flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6 text-brand-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Kompatibilität</h2>
            <p className="text-brand-text text-sm leading-relaxed">
              Fire TV Stick (Lite), Fire TV Stick 4K, 4K Max und Fire TV Cube – alle mit Fire OS. Empfohlen wird
              eine stabile Verbindung; für den Stick gibt es optional einen Ethernet-Adapter.
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
            Weitere Geräte finden Sie in der{" "}
            <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>{" "}
            – etwa{" "}
            <Link href="/iptv-samsung" className="text-brand-accent hover:underline">IPTV auf Samsung Smart TV</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV auf dem Fire TV Stick" />

      <Cta
        heading="Fire TV Stick startklar machen"
        text="Holen Sie sich Ihre Zugangsdaten und streamen Sie in wenigen Minuten auf dem Fire TV Stick."
        primaryLabel="IPTV kaufen"
        primaryHref="/iptv-kaufen"
        secondaryLabel="Preise ansehen"
        secondaryHref="/preise"
      />
    </div>
  );
}
