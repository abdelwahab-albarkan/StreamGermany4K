import Link from "next/link";
import { Terminal, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kodi IPTV Addons & PVR Simple Client einrichten (Anleitung 2026)",
  description:
    "Addons für Kodi & PVR IPTV Simple Client einrichten: Schritt-für-Schritt Anleitung für Kodi 20/21 Nexus/Omega, M3U Playlist Einbindung & EPG Konfiguration.",
  path: "/kodi-iptv-addons",
});

const features = [
  { title: "PVR IPTV Simple Client", text: "Das offizielle, vorinstallierte Kodi-Addon zur perfekten Wiedergabe von M3U-Playlists und EPG-Daten." },
  { title: "Kodi 20 & 21 Kompatibilität", text: "Vollständig optimiert für aktuelle Kodi-Releases (Nexus & Omega) auf Windows, Android TV und Linux." },
  { title: "Individuelle Skin-Anpassung", text: "Kodi erlaubt die Gestaltung des TV-Interfaces mit beliebigen Skins (z.B. Titan, Amber, Arctic Horizon)." },
  { title: "EPG & Logo Synchronisation", text: "Lädt EPG-Programmdaten und Senderlogos automatisch im Hintergrund." },
];

const faq = [
  {
    q: "Welches Kodi Addon ist das beste für IPTV?",
    a: "PVR IPTV Simple Client ist der offizielle und stabilste PVR-Client für Kodi. Er ist direkt im offiziellen Kodi Repository enthalten.",
  },
  {
    q: "Auf welchen Geräten kann ich Kodi installieren?",
    a: "Kodi läuft auf Windows, macOS, Android TV, Amazon Fire TV Stick, Linux und Raspberry Pi.",
  },
  {
    q: "Benötige ich externe Repositorys für PVR IPTV Simple Client?",
    a: "Nein. Der PVR IPTV Simple Client gehört zum Standard-Umfang von Kodi und muss lediglich unter „PVR-Clients“ aktiviert werden.",
  },
];

export default function KodiAddonsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "IPTV Apps", path: "/iptv-apps" },
            { name: "Kodi IPTV Addons", path: "/kodi-iptv-addons" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Terminal className="w-4 h-4" />
            Kodi PVR Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-accent">Kodi IPTV Addons</span> & PVR Simple Client
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Kodi ist das mächtigste Open-Source Mediencenter für Power-User. Mit dem integrierten{" "}
            <strong>PVR IPTV Simple Client</strong> verwandeln Sie Kodi in eine vollwertige TV-Zentrale mit M3U-Support und EPG.
          </p>
        </div>

        <div className="glass rounded-2xl border border-brand-accent/30 p-5 mb-14 max-w-3xl">
          <p className="text-brand-text text-sm leading-relaxed">
            <strong className="text-white">Hinweis:</strong> Diese Anleitung nutzt ausschliesslich den
            offiziellen, in Kodi enthaltenen <strong>PVR IPTV Simple Client</strong> zusammen mit Ihren
            eigenen, legalen StreamGermany4K-Zugangsdaten. Wir empfehlen keine Drittanbieter-Repositorys oder
            inoffiziellen Addons für unautorisierte Streams.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Highlights der Kodi IPTV-Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Einrichtung im PVR IPTV Simple Client</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Addons &gt; PVR-Clients aufrufen</h3>
                <p className="text-brand-text">
                  Öffnen Sie in Kodi die Einstellungen, navigieren Sie zu <strong>Addons &gt; Aus Repository installieren &gt; PVR-Clients</strong> und wählen Sie <strong>PVR IPTV Simple Client</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">M3U-URL in Konfiguration eintragen</h3>
                <p className="text-brand-text">
                  Klicken Sie auf &quot;Konfigurieren&quot;, wählen Sie den Reiter &quot;General&quot; und tragen Sie den M3U-Playlist-Link Ihres{" "}
                  <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">
                    StreamGermany4K Abos
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
                <h3 className="text-lg font-bold text-white mb-1">Kodi neustarten & TV-Menü nutzen</h3>
                <p className="text-brand-text">
                  Aktivieren Sie das Addon und starten Sie Kodi neu. Im Hauptmenü erscheint nun der neue Reiter &quot;TV&quot; mit allen Kanälen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu Kodi IPTV" />

      <Cta
        heading="Binden Sie StreamGermany4K in Ihr Kodi-Setup ein"
        text="Stabiles M3U-Streaming für Ihren PVR IPTV Simple Client in echter 4K-Qualität."
        primaryLabel="Preise & Laufzeiten"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
