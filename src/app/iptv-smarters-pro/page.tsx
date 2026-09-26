import { MonitorPlay, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Smarters Pro einrichten: Installation & Xtream-Login (2026)",
  description:
    "IPTV Smarters Pro auf Smart TV, Fire TV Stick & Android einrichten: Installation aus offiziellen Quellen, Xtream-Codes-Login und Schritt-für-Schritt-Anleitung mit Ihren eigenen Zugangsdaten.",
  path: "/iptv-smarters-pro",
});

const features = [
  { title: "Kategorisierte Übersicht", text: "Automatische Unterteilung in Live TV, VOD Filme und Serien mit Cover-Bildern und Details." },
  { title: "Plattformübergreifend", text: "Verfügbar für Windows, macOS, Android, iOS, Samsung Tizen und LG webOS." },
  { title: "Integrierter Player", text: "Nutzen Sie den integrierten ExoPlayer / VLC Player für unterbrechungsfreies 4K & HD Streaming." },
  { title: "Kindersicherung & EPG", text: "Möglichkeit zur Einrichtung von PIN-Codes für Jugendschutz und vollständigen EPG-TV-Guide." },
];

const faq = [
  {
    q: "Wo kann ich IPTV Smarters Pro sicher herunterladen?",
    a: "Auf Android TV / Fire TV nutzen Sie am besten die Downloader-App oder laden die APK von der offiziellen IPTV Smarters Website herunter. Für iOS/Samsung/LG ist die App direkt in den jeweiligen Stores verfügbar.",
  },
  {
    q: "Wie lautet die Zugangsart für StreamGermany4K in IPTV Smarters Pro?",
    a: "Wählen Sie beim Login-Bildschirm die Option „Login with Xtream Codes API“. Tragen Sie dort Name, Nutzername, Passwort und Server-URL ein.",
  },
  {
    q: "Ist IPTV Smarters Pro kostenlos?",
    a: "Ja, die Basis-Version von IPTV Smarters Pro ist komplett kostenlos nutzbar.",
  },
];

export default function SmartersProPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "IPTV Apps", path: "/iptv-apps" },
            { name: "IPTV Smarters Pro", path: "/iptv-smarters-pro" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <MonitorPlay className="w-4 h-4" />
            IPTV Smarters Pro Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-accent">IPTV Smarters Pro</span> einrichten & nutzen
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            IPTV Smarters Pro ist einer der weltweit bekanntesten All-in-One Multi-Media-Player. Die App zeichnet
            sich durch eine übersichtliche Benutzeroberfläche und extrem einfache Xtream-Codes-Einrichtung auf nahezu allen Geräten aus.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Highlights von IPTV Smarters Pro</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">Schritt-für-Schritt Login via Xtream API</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">App öffnen & &quot;Add User&quot; klicken</h3>
                <p className="text-brand-text">
                  Wählen Sie die Option <strong>Login with Xtream Codes API</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Zugangsdaten eintragen</h3>
                <p className="text-brand-text">
                  Geben Sie einen beliebigen Profilnamen (z.B. &quot;StreamGermany4K&quot;), Ihren Benutzernamen, Ihr Passwort und die Server-URL aus Ihrer Bestellung ein.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">&quot;Add User&quot; bestätigen</h3>
                <p className="text-brand-text">
                  Die App lädt Ihre Inhalte automatisch und gliedert Live TV, Filme & Serien übersichtlich auf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV Smarters Pro" />

      <Cta
        heading="Starten Sie IPTV Smarters Pro mit StreamGermany4K"
        text="Erleben Sie flüssiges Streaming in HD und 4K auf Ihrem bevorzugten Gerät."
        primaryLabel="Preise vergleichen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
