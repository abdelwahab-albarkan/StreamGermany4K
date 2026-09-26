import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "TiviMate IPTV Player einrichten: EPG, Multi-View & Xtream (2026)",
  description:
    "TiviMate IPTV Player auf Fire TV Stick & Android TV einrichten: EPG-Integration, Xtream-Codes-Login und Tipps für unterbrechungsfreies Streaming mit Ihren eigenen Zugangsdaten.",
  path: "/iptv-tivimate",
});

const features = [
  { title: "Klassisches TV-Menü", text: "TiviMate bietet die modernste EPG-Senderübersicht im Stil klassischer Kabel- und Satelliten-Receiver." },
  { title: "Multi-View / Bild-in-Bild", text: "Sehen Sie bis zu 4 Live-Streams gleichzeitig auf einem Bildschirm (ideal für Sportübertragungen)." },
  { title: "Mehrere Playlists verwalten", text: "Fügen Sie mehrere M3U-Playlists oder Xtream-Codes-Zugänge nahtlos in einer App zusammen." },
  { title: "Catch-Up / Replay Support", text: "Unterstützt zeitversetztes Fernsehen und Replay-Funktionen Ihres IPTV-Anbieters." },
];

const faq = [
  {
    q: "Was ist der TiviMate IPTV Player?",
    a: "TiviMate ist eine der beliebtesten und am besten bewerteten IPTV-Player-Apps für Android TV, Fire TV Stick und Google TV.",
  },
  {
    q: "Benötige ich TiviMate Premium für StreamGermany4K?",
    a: "Nein, die Grundversion von TiviMate ist kostenlos nutzbar. Die TiviMate Premium Version schaltet Zusatzfunktionen wie Multi-Screen, erweiterte EPG-Funktionen und Aufnahmen frei.",
  },
  {
    q: "Wie richte ich StreamGermany4K in TiviMate ein?",
    a: "Öffnen Sie TiviMate, wählen Sie „Wiedergabeliste hinzufügen“, wählen Sie „Xtream Codes“ und geben Sie Server-URL, Benutzername und Passwort aus Ihrer Abo-Bestätigung ein.",
  },
];

export default function TivimatePage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "IPTV Apps", path: "/iptv-apps" },
            { name: "TiviMate IPTV Player", path: "/iptv-tivimate" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            TiviMate Setup Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-accent">TiviMate IPTV Player</span> einrichten & optimieren
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            TiviMate gilt weltweit als die Benchmark unter den IPTV-Playern für Android-basierte Geräte wie den{" "}
            <Link href="/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Amazon Fire TV Stick</Link>{" "}
            oder <Link href="/iptv-android-tv" className="text-brand-accent hover:underline">Android TV Boxen</Link>.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Warum TiviMate die beste Wahl ist</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">TiviMate mit Xtream Codes einrichten</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">TiviMate starten</h3>
                <p className="text-brand-text">
                  Klicken Sie nach dem Start auf &quot;Wiedergabeliste hinzufügen&quot; (Add Playlist).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Xtream Codes Login wählen</h3>
                <p className="text-brand-text">
                  Geben Sie Ihre Zugangsdaten (Server-URL, Benutzername, Passwort) ein, die Sie beim{" "}
                  <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">
                    StreamGermany4K Kauf
                  </Link>{" "}
                  erhalten haben.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Fertigstellen & EPG genießen</h3>
                <p className="text-brand-text">
                  Klicken Sie auf &quot;Verarbeiten&quot;. TiviMate lädt sofort Ihre deutsche Kanalliste und das Live-TV-Programm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu TiviMate" />

      <Cta
        heading="TiviMate mit StreamGermany4K im 4K-Stream nutzen"
        text="Holt das Maximum aus Ihrem TiviMate Player heraus mit superschnellen deutschen Streaming-Servern."
        primaryLabel="Tarife ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
