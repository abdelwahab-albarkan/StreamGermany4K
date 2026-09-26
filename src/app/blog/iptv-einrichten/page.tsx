import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/lib/jsonld";
import { getPost } from "@/lib/blog";

const post = getPost("iptv-einrichten")!;

export const metadata = pageMetadata({
  title: "IPTV einrichten: Schritt-für-Schritt Anleitung (2026)",
  description:
    "IPTV einrichten leicht gemacht: Komplettanleitung für Smart TV, Fire TV Stick, Android TV & Apple TV. Von der M3U Playlist & Xtream API bis zum fertigen TV-Empfang.",
  path: "/blog/iptv-einrichten",
});

export default function IptvEinrichtenPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <JsonLd data={articleSchema({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.date })} />
        <Breadcrumbs
          items={[
            { name: "Startseite", path: "/" },
            { name: "Ratgeber", path: "/blog" },
            { name: "IPTV einrichten", path: "/blog/iptv-einrichten" },
          ]}
        />

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Anleitung & Praxis-Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Schritt-für-Schritt einrichten (Anleitung 2026)
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Die Einrichtung von IPTV auf modernen Fernsehern, TV-Sticks oder Smartphones dauert meist weniger als 5 Minuten.
            In dieser Anleitung erfahren Sie genau, welche Voraussetzungen nötig sind und wie Sie Ihre Zugangsdaten eingeben.
          </p>
        </div>

        <div className="space-y-10 text-brand-text leading-relaxed text-lg mb-16">
          <section className="glass rounded-2xl border border-brand-gray/50 p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white">Voraussetzungen für den IPTV-Empfang</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                <span><strong>Stabile Internetverbindung:</strong> Für HD reichen 10–16 Mbit/s, für flüssiges 4K-Streaming empfehlen wir mindestens 25 Mbit/s.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                <span><strong>Kompatibles Gerät:</strong> Smart TV (Samsung, LG, Sony), Amazon Fire TV Stick, Android TV Box, Apple TV oder PC/Smartphone.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                <span><strong>IPTV Player App:</strong> Apps wie TiviMate, IPTV Smarters Pro, SmartOne oder GSE Smart IPTV.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                <span><strong>Gültiger Zugang (M3U / Xtream API):</strong> Zugangsdaten, die Sie nach der Bestellung bei <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">StreamGermany4K</Link> erhalten.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Methode 1: Einrichtung per Xtream Codes API (Empfohlen)</h2>
            <p>
              Die Xtream-Codes-Variante ist besonders benutzerfreundlich, da Sie sich keine langen URLs merken müssen.
              Sie benötigen lediglich 3 Angaben:
            </p>
            <div className="bg-brand-gray/20 border border-brand-gray/50 rounded-xl p-6 font-mono text-sm space-y-2 text-white">
              <div><strong>Server-URL:</strong> http://line.streamgermany4k.example:8080</div>
              <div><strong>Benutzername:</strong> Ihr individueller Username</div>
              <div><strong>Passwort:</strong> Ihr persönliches Passwort</div>
            </div>
            <p>
              Tragen Sie diese Daten in Ihrer IPTV-App unter &quot;Add User&quot; oder &quot;Xtream API&quot; ein. Die Senderlisten und EPG-Daten laden sich danach vollautomatisch.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Methode 2: Einrichtung per M3U-Playlist URL</h2>
            <p>
              Bei älteren IPTV-Playern oder bestimmten Smart-TV-Apps (wie Smart IPTV / SIPTV) geben Sie eine Web-Adresse (M3U-URL) ein.
              Kopieren Sie dazu den M3U-Link aus Ihrer Abo-Bestätigung und fügen Sie ihn in das Playlist-Feld des Players oder auf der Upload-Seite der App ein.
            </p>
          </section>

          <section className="glass rounded-2xl border border-brand-gray/50 p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white">Gerätespezifische Anleitungen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link href="/iptv-fire-tv-stick" className="p-4 rounded-xl bg-brand-gray/30 hover:border-brand-accent/50 border border-brand-gray/50 flex items-center justify-between text-white font-medium transition-all">
                <span>Amazon Fire TV Stick Guide</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
              <Link href="/iptv-samsung" className="p-4 rounded-xl bg-brand-gray/30 hover:border-brand-accent/50 border border-brand-gray/50 flex items-center justify-between text-white font-medium transition-all">
                <span>Samsung Smart TV Guide</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
              <Link href="/iptv-lg-smart-tv" className="p-4 rounded-xl bg-brand-gray/30 hover:border-brand-accent/50 border border-brand-gray/50 flex items-center justify-between text-white font-medium transition-all">
                <span>LG Smart TV Guide</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
              <Link href="/iptv-android-tv" className="p-4 rounded-xl bg-brand-gray/30 hover:border-brand-accent/50 border border-brand-gray/50 flex items-center justify-between text-white font-medium transition-all">
                <span>Android TV & Boxen Guide</span>
                <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
            </div>
          </section>
        </div>

        <Cta
          heading="Bereit für Ihr eigenes IPTV-Erlebnis?"
          text="Wählen Sie jetzt Ihren Wunschtarif aus und testen Sie StreamGermany4K auf Ihrem Smart-TV oder Fire TV Stick."
          primaryLabel="Preise & Abos"
          primaryHref="/preise"
          secondaryLabel="IPTV kaufen"
          secondaryHref="/order"
        />
      </div>
    </div>
  );
}
