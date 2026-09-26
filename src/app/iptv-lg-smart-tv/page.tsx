import Link from "next/link";
import { Tv, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf LG Smart TV installieren (webOS Anleitung 2026)",
  description:
    "IPTV auf LG Smart TV nutzen: Die besten webOS Player-Apps (Smart IPTV, Net IPTV, SmartOne), Schritt-für-Schritt Einrichtung & Tipps für stabiles 4K Streaming.",
  path: "/iptv-lg-smart-tv",
});

const apps = [
  {
    name: "Smart One IPTV",
    text: "Einer der zuverlässigsten IPTV-Player im LG Content Store. Schnelle Ladezeiten, übersichtlicher EPG und einfache M3U/Xtream Einrichtung.",
  },
  {
    name: "Net IPTV",
    text: "Beliebte webOS-App mit übersichtlicher Senderliste. Die Freischaltung erfolgt einfach über die MAC-Adresse des LG Fernsehers.",
  },
  {
    name: "Smart IPTV (SIPTV)",
    text: "Der Klassiker auf LG TVs. Lädt Wiedergabelisten direkt per Upload auf der Entwickler-Website. Sehr stabil bei Live-TV.",
  },
  {
    name: "SS IPTV",
    text: "Kostenfreie Alternative für LG webOS mit flexibler Playlist-Verwaltung und Unterstützung verschiedener Video-Stream-Formate.",
  },
];

const faq = [
  {
    q: "Welche ist die beste IPTV-App für LG Smart TV?",
    a: "Auf LG Smart TVs mit webOS gehören SmartOne IPTV, Net IPTV und Smart IPTV (SIPTV) zu den stabilsten Apps. Sie lassen sich direkt aus dem LG Content Store installieren.",
  },
  {
    q: "Benötige ich einen zusätzlichen Receiver oder TV Stick für meinen LG Fernseher?",
    a: "Nein. Wenn Ihr LG Smart TV über webOS und einen Internetzugang verfügt, können Sie IPTV direkt über eine App aus dem LG Content Store ohne Zusatzgeräte nutzen.",
  },
  {
    q: "Unterstützt mein LG TV 4K & HD Streaming mit StreamGermany4K?",
    a: "Ja, alle LG Smart TVs mit 4K-Display geben IPTV-Streams in voller 4K- und Full-HD-Auflösung wieder, sofern Ihre Internetverbindung ausreichend schnell ist (empfohlen ab 16–25 Mbit/s).",
  },
];

export default function LgSmartTvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Geräte", path: "/geraete" },
            { name: "LG Smart TV", path: "/iptv-lg-smart-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Tv className="w-4 h-4" />
            LG webOS Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf <span className="text-brand-accent">LG Smart TV</span> einrichten
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            LG Fernseher mit webOS eignen sich hervorragend für IPTV-Streaming in gestochen scharfer
            4K-Qualität. Hier erfahren Sie, welche Apps im LG Content Store am besten funktionieren und
            wie Sie StreamGermany4K in wenigen Minuten einrichten.
          </p>
        </div>

        {/* Steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Schritt-für-Schritt Anleitung für LG webOS</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">LG Content Store öffnen</h3>
                <p className="text-brand-text">
                  Drücken Sie die Home-Taste auf Ihrer LG Magic Remote und öffnen Sie den LG Content Store.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">IPTV Player App suchen</h3>
                <p className="text-brand-text">
                  Suchen Sie nach einer kompatiblen App wie <strong>SmartOne IPTV</strong> oder <strong>Net IPTV</strong> und installieren Sie diese auf Ihrem LG TV.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Zugangsdaten (M3U / Xtream) eintragen</h3>
                <p className="text-brand-text">
                  Öffnen Sie die App und tragen Sie die Zugangsdaten ein, die Sie nach dem{" "}
                  <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">
                    Kauf Ihres StreamGermany4K-Abos
                  </Link>{" "}
                  erhalten haben.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Empfohlene IPTV-Apps für LG Smart TV</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {apps.map((app) => (
            <div key={app.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{app.name}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu IPTV auf LG TVs" />

      <Cta
        heading="Bereit für 4K IPTV auf Ihrem LG Smart TV?"
        text="Starten Sie direkt mit StreamGermany4K und genießen Sie Live-TV & VOD auf Ihrem LG Fernseher."
        primaryLabel="Preise & Laufzeiten"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
