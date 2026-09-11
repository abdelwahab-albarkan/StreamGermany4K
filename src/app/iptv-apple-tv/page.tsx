import Link from "next/link";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf Apple TV, iPhone & iPad einrichten (tvOS / iOS Guide)",
  description:
    "IPTV auf Apple TV 4K, iPhone & iPad: Die besten iOS/tvOS Player-Apps (IPTVX, GSE Smart IPTV, iPlayTV), schnelle M3U-Einrichtung & flüssiges 4K Streaming.",
  path: "/iptv-apple-tv",
});

const apps = [
  {
    name: "IPTVX",
    text: "Einer der modernsten IPTV-Player für Apple TV 4K und iOS. Bietet eine Benutzeroberfläche im Stil bekannter Streaming-Dienste mit automatischer EPG-Synchronisation.",
  },
  {
    name: "iPlayTV",
    text: "Hervorragende tvOS-App für Apple TV mit flüssiger Umschaltzeit, Favoritenverwaltung und Multi-Playlist-Unterstützung.",
  },
  {
    name: "GSE Smart IPTV",
    text: "Bewährte App für iPhone, iPad und Apple TV mit umfangreicher Formatunterstützung (M3U, Xtream API, EPG XMLTV).",
  },
  {
    name: "Smarters Player Lite",
    text: "Offizielle iOS/tvOS-Version von IPTV Smarters mit strukturierter Trennung von Live-TV, Filmen und Serien.",
  },
];

const faq = [
  {
    q: "Welches ist der beste IPTV-Player für Apple TV 4K?",
    a: "IPTVX und iPlayTV bieten die flüssigste Performance und die ansprechendste Benutzeroberfläche auf Apple TV 4K (tvOS).",
  },
  {
    q: "Kann ich mein StreamGermany4K Abo auf Apple TV und iPhone gleichzeitig nutzen?",
    a: "Ja, je nach gewähltem Tarif können Sie Ihre Zugangsdaten auf mehreren Geräten im selben Haushalt einrichten.",
  },
  {
    q: "Funktioniert AirPlay von iPhone / iPad auf Apple TV?",
    a: "Ja, Sie können IPTV-Streams auch bequem per AirPlay von Ihrem iPhone oder iPad direkt an Apple TV übertragen.",
  },
];

export default function AppleTvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Geräte", path: "/geraete" },
            { name: "Apple TV & iOS", path: "/iptv-apple-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Apple tvOS & iOS Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf <span className="text-brand-accent">Apple TV, iPhone & iPad</span> nutzen
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Dank des leistungsstarken Apple A-Series Prozessors im Apple TV 4K genießen Sie extrem kurze
            Umschaltzeiten und flüssiges 60fps-Streaming. Erfahren Sie hier, wie Sie IPTV auf Apple-Geräten einrichten.
          </p>
        </div>

        {/* Steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Einrichtung auf Apple TV & iOS</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">App Store auf Apple TV öffnen</h3>
                <p className="text-brand-text">
                  Suchen Sie im tvOS App Store nach <strong>IPTVX</strong>, <strong>iPlayTV</strong> oder <strong>GSE Smart IPTV</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Zugang (M3U / Xtream API) hinzufügen</h3>
                <p className="text-brand-text">
                  Geben Sie die Server-URL, Benutzername und Passwort aus Ihrer Bestätigung von{" "}
                  <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">
                    StreamGermany4K
                  </Link>{" "}
                  ein.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">EPG & Senderliste laden</h3>
                <p className="text-brand-text">
                  Die App lädt automatisch Ihre deutsche Senderliste sowie den elektronischen Programmführer (EPG).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Top IPTV Player für Apple TV & iOS</h2>
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

      <Faq items={faq} heading="Fragen zu IPTV auf Apple-Geräten" />

      <Cta
        heading="Erleben Sie Premium IPTV auf Ihrem Apple TV 4K"
        text="Wählen Sie Ihren gewünschten Tarif und schauen Sie Live-TV in bester Bildqualität."
        primaryLabel="Preise & Abos"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
