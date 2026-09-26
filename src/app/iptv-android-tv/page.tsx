import Link from "next/link";
import { CheckCircle2, Cpu } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf Android TV, Google TV & Boxen einrichten (Guide 2026)",
  description:
    "IPTV auf Android TV, Google TV, NVIDIA Shield & Smart TV Boxen installieren: TiviMate, XCIPTV, IPTV Smarters Pro Anleitung & Tipps für unterbrechungsfreies 4K Streaming.",
  path: "/iptv-android-tv",
});

const devices = [
  { name: "NVIDIA Shield TV / Pro", text: "Die leistungsstärkste Android TV Box mit 4K AI Upscaling für extrem flüssiges IPTV-Streaming." },
  { name: "Google Chromecast mit Google TV", text: "Preiswerter 4K-Streaming-Stick mit vollem Google Play Store Zugriff und hervorragender Performance." },
  { name: "Android Smart TVs (Sony, Philips, TCL)", text: "Fernseher mit integriertem Android TV Betriebssystem können IPTV-Player direkt ohne Zusatzbox ausführen." },
  { name: "Xiaomi Mi Box S / TV Stick 4K", text: "Beliebte Android TV Hardware mit 4K HDR Unterstützung und breiter App-Kompatibilität." },
];

const faq = [
  {
    q: "Welche ist die beste IPTV-App für Android TV?",
    a: "TiviMate IPTV Player gilt als die unangefochtene Nummer 1 auf Android TV und Google TV, gefolgt von IPTV Smarters Pro und XCIPTV.",
  },
  {
    q: "Kann ich Android TV Apps per APK sideloaden?",
    a: "Ja, Android TV erlaubt die einfache Installation von Drittanbieter-APKs (z.B. per Downloader App oder USB-Stick).",
  },
  {
    q: "Welche Internetgeschwindigkeit benötige ich für 4K IPTV auf Android TV?",
    a: "Für unterbrechungsfreies 4K-Streaming empfehlen wir eine stabile Verbindung mit mindestens 25 Mbit/s (vorzugsweise per LAN-Kabel oder 5 GHz WLAN).",
  },
];

export default function AndroidTvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Geräte", path: "/geraete" },
            { name: "Android TV & Boxen", path: "/iptv-android-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            Android TV & Google TV Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf <span className="text-brand-accent">Android TV & Google TV</span> einrichten
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Android TV und Google TV bieten das vielseitigste Ökosystem für IPTV. Durch den uneingeschränkten
            Zugriff auf den Google Play Store stehen Ihnen die besten Player-Apps wie TiviMate zur Verfügung.
          </p>
        </div>

        {/* Devices Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Unterstützte Android TV Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {devices.map((d) => (
            <div key={d.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{d.name}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Einrichtung in 3 einfachen Schritten</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Google Play Store öffnen</h3>
                <p className="text-brand-text">
                  Suchen Sie nach <Link href="/iptv-tivimate" className="text-brand-accent hover:underline">TiviMate</Link> oder <Link href="/iptv-smarters-pro" className="text-brand-accent hover:underline">IPTV Smarters Pro</Link> und installieren Sie die App. Wer bereits <Link href="/kodi-iptv-addons" className="text-brand-accent hover:underline">Kodi</Link> nutzt, kann IPTV auch dort über den PVR Simple Client einrichten.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Xtream Codes / M3U eingeben</h3>
                <p className="text-brand-text">
                  Wählen Sie &quot;Xtream Codes API&quot; oder &quot;M3U Playlist&quot; als Zugangsart und tragen Sie Ihre Serverdaten von StreamGermany4K ein.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">EPG aktivieren & Streamen</h3>
                <p className="text-brand-text">
                  Nach dem Abspeichern synchronisiert die App automatisch alle deutschen Sender und den EPG-TV-Guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV auf Android TV" />

      <Cta
        heading="Jetzt 4K IPTV auf Ihrem Android TV starten"
        text="Sichern Sie sich Ihr Zugangspaket bei StreamGermany4K und genießen Sie unterbrechungsfreies Fernsehen."
        primaryLabel="Preise & Tarife"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
