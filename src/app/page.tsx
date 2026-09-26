import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, WifiOff, Settings, MonitorPlay, Layers, CheckCircle2,
  Zap, BookOpen, Trophy, Wallet, Headphones, KeyRound, PlayCircle,
  Sparkles, Film, Cpu, Star, ShieldCheck,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { MovieShowcase } from "@/components/sections/MovieShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPlans } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV in Deutschland – Premium 4K Streaming",
  description:
    "StreamGermany4K ist Ihr Premium-IPTV-Dienst für Deutschland: Live-TV, Sport und Filme in 4K/HD auf Smart-TV, Fire TV Stick, Handy und mehr. Anbieter vergleichen, Preise verstehen und einfach starten.",
  path: "/",
});

/* ----------------------------------------------------------------------------
 * Section data. Kept as small arrays so each section stays declarative and the
 * JSX below reads as a clear, ordered long-form homepage. No invented figures.
 * ------------------------------------------------------------------------- */

// "Live-Sport" quick tiles (no fabricated matches/scores — categories only).
const sports = [
  { emoji: "⚽", name: "Fussball" },
  { emoji: "🏎️", name: "Formel 1" },
  { emoji: "🎾", name: "Tennis" },
  { emoji: "🥊", name: "Boxen & MMA" },
  { emoji: "🏈", name: "US-Sport" },
  { emoji: "🏒", name: "Eishockey" },
];

// "Alles an einem Ort" — entertainment categories with editorial imagery.
const entertainment = [
  { img: "/images/iptv-live-tv-wohnzimmer.jpg", alt: "Live-TV auf dem Smart-TV im Wohnzimmer", title: "Live TV", text: "Deutsche und internationale Sender live über das Internet.", href: "/iptv-vergleich" },
  { img: "/images/iptv-sport-streaming.jpg", alt: "Live-Sport per IPTV streamen", title: "Sport", text: "Fussball, Formel 1, Tennis und mehr – je nach Angebot.", href: "/iptv-sport" },
  { img: "/images/iptv-heimkino.jpg", alt: "Filme im Heimkino streamen", title: "Filme", text: "Eine grosse Auswahl an Filmen in der Abruf-Mediathek.", href: "/iptv-vergleich" },
  { img: "/images/iptv-entertainment-dashboard.jpg", alt: "Serien in der IPTV-Mediathek", title: "Serien", text: "Serien und Dokus bequem auf Abruf (VOD).", href: "/iptv-vergleich" },
  { img: "/images/iptv-4k-qualitaet.jpg", alt: "Inhalte in 4K-Qualität", title: "4K Entertainment", text: "Gestochen scharfe Bildqualität bis 4K, je nach Inhalt.", href: "/features" },
  { img: "/images/iptv-multi-geraete.jpg", alt: "IPTV auf mehreren Geräten", title: "Multi-Device", text: "Auf Smart-TV, Stick, Handy und Computer nutzbar.", href: "/geraete" },
];

// Problem -> Solution.
const problems = [
  { icon: WifiOff, title: "Ständiges Buffering", text: "Ruckler und Aussetzer mitten im Spiel oder Film." },
  { icon: Settings, title: "Komplizierte Einrichtung", text: "Unklare Anleitungen und Frust beim ersten Setup." },
  { icon: MonitorPlay, title: "Inkompatible Geräte", text: "Apps, die auf dem eigenen Gerät nicht laufen." },
  { icon: Layers, title: "Unübersichtliche Apps", text: "Chaotische Senderlisten ohne Programmführer." },
];
const solutions = [
  "Auf Stabilität ausgelegte Server und Tipps gegen Buffering",
  "Klare, gerätespezifische Einrichtungs-Anleitungen",
  "Kompatibilität mit den gängigen IPTV-Playern",
  "Verständliche Ratgeber und erreichbarer Support",
];

// Benefits (6).
const benefits = [
  { icon: Zap, title: "Einfache Einrichtung", description: "In wenigen Minuten startklar – ohne technisches Vorwissen." },
  { icon: MonitorPlay, title: "Auf vielen Geräten", description: "Smart-TV, Fire TV Stick, Apple TV, Android, iOS, Windows und Mac." },
  { icon: BookOpen, title: "Klare Anleitungen", description: "Schritt-für-Schritt-Ratgeber für jedes unterstützte Gerät." },
  { icon: Trophy, title: "Sport & Entertainment", description: "Live-TV, Sport und eine grosse Film- und Serienauswahl." },
  { icon: Wallet, title: "Flexible Pakete", description: "Vom Monatszugang bis zum Jahresabo – passend zu Ihrer Nutzung." },
  { icon: Headphones, title: "Persönlicher Support", description: "Hilfe bei Einrichtung und Rückfragen, wenn Sie sie brauchen." },
];

// Device wall: 2 featured (editorial) + smaller product tiles, linked to guides.
const featuredDevices = [
  { img: "/images/iptv-samsung-tv-setup.jpg", alt: "IPTV auf dem Samsung Smart TV", title: "Samsung Smart TV", text: "Direkt aus dem Smart Hub (Tizen) – ohne Zusatzgerät.", href: "/iptv-samsung" },
  { img: "/images/iptv-lg-smart-tv.jpg", alt: "IPTV auf dem LG Smart TV", title: "LG Smart TV", text: "Über webOS und den LG Content Store.", href: "/iptv-lg-smart-tv" },
];
const deviceTiles = [
  { img: "/images/firestick.png", label: "Fire TV Stick", href: "/iptv-fire-tv-stick" },
  { img: "/images/appletv.png", label: "Apple TV", href: "/iptv-apple-tv" },
  { img: "/images/androidtvbox.png", label: "Android TV", href: "/iptv-android-tv" },
  { img: "/images/iphone17.png", label: "iPhone & iPad", href: "/geraete" },
  { img: "/images/chromecast.png", label: "Chromecast", href: "/geraete" },
  { img: "/images/nvidiashield.png", label: "NVIDIA Shield", href: "/geraete" },
];

// Apps / players.
const apps = [
  { name: "IPTV Smarters Pro", href: "/iptv-smarters-pro", text: "Multi-Plattform-Player mit Xtream- und M3U-Unterstützung." },
  { name: "TiviMate", href: "/iptv-tivimate", text: "Beliebter Player für Fire TV und Android TV mit starkem EPG." },
  { name: "Smart-TV-Apps", href: "/iptv-apps", text: "Native IPTV-Apps direkt aus dem App-Store Ihres Fernsehers." },
];

// How it works (3 steps).
const steps = [
  { n: "01", icon: Wallet, title: "Paket auswählen", text: "Wählen Sie die Laufzeit, die zu Ihrer Nutzung passt – vom Monats- bis zum Jahresabo." },
  { n: "02", icon: KeyRound, title: "Zugang & Einrichtung", text: "Nach der Bestellung erhalten Sie Ihre Zugangsdaten und richten die App auf Ihrem Gerät ein." },
  { n: "03", icon: PlayCircle, title: "Streaming starten", text: "Zugangsdaten eintragen – und Live-TV, Sport und Filme in 4K/HD starten." },
];

// Real setup/interface screenshots (labelled honestly as UI/setup, not proof of customers).
const proofShots = [
  { img: "/images/iptv-installation-anleitung.jpg", alt: "Geführte IPTV-Einrichtung Schritt für Schritt", label: "Geführte Einrichtung" },
  { img: "/images/iptv-samsung-app-store.jpg", alt: "IPTV-App im Smart-TV App-Store", label: "App aus dem Store" },
  { img: "/images/iptv-google-tv-dashboard.jpg", alt: "IPTV-Programmübersicht auf Google TV", label: "Programmübersicht" },
  { img: "/images/iptv-android-tv-setup.jpg", alt: "IPTV-Einrichtung auf Android TV", label: "Android TV Einrichtung" },
  { img: "/images/iptv-multi-geraete.jpg", alt: "IPTV auf mehreren Geräten", label: "Mehrere Geräte" },
  { img: "/images/beste-iptv-apps-dashboard.jpg", alt: "Übersichtliche IPTV-App mit Senderliste", label: "Übersichtliche App" },
];

// Transparency section (makes the empty reviews state feel intentional).
const transparency = [
  "Klare Pakete und transparente Preise",
  "Verständliche, gerätespezifische Einrichtung",
  "Echte Interface- und Setup-Screenshots",
  "Erreichbarer Support bei Rückfragen",
  "Ausführliche Geräte- und App-Anleitungen",
  "Keine erfundenen Bewertungen oder Statistiken",
];

const faq = [
  { q: "Was ist IPTV?", a: "IPTV (Internet Protocol Television) ist Fernsehen über das Internet statt über Kabel, Satellit oder Antenne. Sie streamen Live-Sender und Abrufinhalte über eine App auf Ihrem Gerät." },
  { q: "Auf welchen Geräten funktioniert der Dienst?", a: "Auf gängigen Geräten mit einer IPTV-App: Smart-TVs (z. B. Samsung, LG), Fire TV Stick, Apple TV, Android- und Google-TV-Geräte, iOS sowie Windows und macOS." },
  { q: "Wie richte ich IPTV auf meinem Smart TV ein?", a: "In der Regel installieren Sie eine kompatible IPTV-App aus dem App-Store Ihres Fernsehers und tragen Ihre Zugangsdaten ein. Gerätespezifische Anleitungen finden Sie in der Geräte-Übersicht." },
  { q: "Welche Apps kann ich verwenden?", a: "Sie entscheiden, welchen kompatiblen Player Sie nutzen möchten – etwa IPTV Smarters Pro oder TiviMate. Einen Überblick gibt die Seite „IPTV Apps“." },
  { q: "Unterstützt ihr 4K?", a: "Ja – auf 4K-fähigen Geräten und mit ausreichend schneller Internetverbindung ist 4K möglich, sofern der Inhalt in 4K vorliegt. Andernfalls sehen Sie in HD." },
  { q: "Wie funktioniert die Einrichtung?", a: "In drei Schritten: Paket auswählen, Zugangsdaten erhalten und die App auf Ihrem Gerät einrichten. Der Ablauf ist auf der Seite „IPTV kaufen“ beschrieben." },
  { q: "Was mache ich bei Problemen wie Ruckeln?", a: "Meist liegt es an der Internetverbindung. Nutzen Sie möglichst LAN oder ein starkes WLAN und starten Sie Gerät und App neu. Mehr dazu im Ratgeber „IPTV ruckelt“." },
  { q: "Wie kann ich den Support kontaktieren?", a: "Über die Kontaktseite. Dort finden Sie die Möglichkeiten, uns bei Fragen zu Einrichtung und Bestellung zu erreichen." },
];

/** Thin cyan→violet gradient line at the top of an alternating section. */
function Divider() {
  return <div className="section-divider pointer-events-none absolute top-0 inset-x-0 h-px" aria-hidden="true" />;
}

export default function Home() {
  const plans = getPlans();
  return (
    <div className="flex flex-col">
      {/* 1) Hero */}
      <Hero />

      {/* 2) Live / Sport */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-2 bg-brand-gradient opacity-10 blur-2xl rounded-3xl" aria-hidden="true" />
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/iptv-sport-streaming.jpg" alt="Live-Sport per IPTV streamen" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Live & Sport"
              icon={Trophy}
              title={<>Live-Sport auf einen <span className="text-gradient">Blick</span></>}
              subtitle="Fussball, Formel 1, Tennis oder Kampfsport – verfolgen Sie Live-Sport flexibel über das Internet. Welche Sender und Wettbewerbe enthalten sind, hängt vom jeweiligen Angebot ab."
            />
            <div className="grid grid-cols-3 gap-3 my-8">
              {sports.map((s) => (
                <div key={s.name} className="glass rounded-xl border border-white/8 px-3 py-3 text-center hover:border-brand-accent/40 transition-colors">
                  <div className="text-2xl mb-1" aria-hidden="true">{s.emoji}</div>
                  <div className="text-brand-text text-xs">{s.name}</div>
                </div>
              ))}
            </div>
            <Link href="/iptv-sport" className="inline-flex items-center gap-2 text-brand-accent hover:gap-3 transition-all font-medium">
              Alle Sport-Events ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3) Filme & Serien (OMDb, graceful fallback) */}
      <MovieShowcase />

      {/* Pricing preview + payment methods */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Preise"
            icon={Wallet}
            title={<>Transparente <span className="text-gradient">Preise &amp; Pakete</span></>}
            subtitle="Wählen Sie die Laufzeit, die zu Ihrer Nutzung passt – ohne versteckte Gebühren."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {plans.map((plan) => (
              <PricingCard key={plan.id} title={plan.title} price={plan.price} planId={plan.id} duration={plan.duration} features={plan.features} isPopular={plan.isPopular} badge={plan.badge} />
            ))}
          </div>
          <PaymentMethods />
          <div className="text-center mt-8">
            <Link href="/preise" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              Alle Details zu Preisen &amp; Laufzeiten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4) Alles an einem Ort — entertainment categories */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Entertainment"
            icon={Film}
            title={<>Alles an <span className="text-gradient">einem Ort</span></>}
            subtitle="Live-TV, Sport, Filme und Serien – gebündelt in einem Dienst, auf jedem Gerät."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainment.map((c) => (
              <Link key={c.title} href={c.href} className="group glass rounded-2xl border border-white/8 hover:border-brand-accent/50 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow-cyan">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/85 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{c.title}</h3>
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
                  <ArrowRight className="w-5 h-5 text-brand-accent shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Problem -> Solution */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Problem & Lösung"
            icon={Sparkles}
            title={<>Genug von <span className="text-gradient">Streaming-Problemen?</span></>}
            subtitle="Die häufigsten Frustpunkte – und wie StreamGermany4K sie angeht."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <div key={p.title} className="glass rounded-2xl border border-white/8 p-5">
                  <p.icon className="w-6 h-6 text-brand-muted mb-3" />
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-brand-text text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl p-[1px] bg-brand-gradient">
              <div className="rounded-2xl bg-brand-card p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Einfacher <span className="text-gradient">streamen.</span></h3>
                <p className="text-brand-text mb-6">Wir setzen an genau diesen Punkten an:</p>
                <ul className="space-y-3">
                  {solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-brand-text">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Why / Benefits */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Vorteile"
            icon={ShieldCheck}
            title={<>Warum <span className="text-gradient">StreamGermany4K?</span></>}
            subtitle="Ein Premium-IPTV-Angebot, das auf Qualität, Stabilität und einfache Bedienung ausgelegt ist."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <FeatureCard key={b.title} title={b.title} description={b.description} icon={b.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* 6b) Technik & Qualität — cinematic image band (qualitative claims only) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-2 bg-brand-gradient opacity-10 blur-2xl rounded-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/iptv-server-infrastruktur.jpg"
                alt="Moderne, auf Stabilität ausgelegte Streaming-Technik"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Technik & Qualität"
              icon={Cpu}
              title={<>Premium-Qualität, <span className="text-gradient">moderne Technik</span></>}
              subtitle="Auf Bildqualität, Stabilität und einfache Bedienung ausgelegt – damit Streaming einfach funktioniert."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: MonitorPlay, title: "Bildqualität bis 4K", text: "Gestochen scharf auf 4K-fähigen Geräten – sonst in HD." },
                { icon: Zap, title: "Moderne Streaming-Technologie", text: "Auf einen stabilen, flüssigen Stream ausgelegt." },
                { icon: Layers, title: "Grosse Gerätekompatibilität", text: "Smart-TV, Fire TV Stick, Apple TV, Android, iOS und mehr." },
                { icon: Settings, title: "Klare Einrichtung", text: "Verständliche, gerätespezifische Anleitungen für den Start." },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center shrink-0 text-brand-accent">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/features" className="mt-8 inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              Mehr zu Funktionen &amp; Qualität <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7) Devices — featured + tile wall */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Geräte"
            icon={MonitorPlay}
            title={<>Deine Geräte. <span className="text-gradient">Dein Streaming.</span></>}
            subtitle="Vom Smart-TV bis zum Streaming-Stick – mit einer kompatiblen App startklar."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featuredDevices.map((d) => (
              <Link key={d.title} href={d.href} className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-brand-accent/50 transition-all">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={d.img} alt={d.alt} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-brand-text text-sm mb-2">{d.text}</p>
                  <span className="inline-flex items-center gap-1 text-brand-accent text-sm font-medium">Anleitung ansehen <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {deviceTiles.map((d) => (
              <Link key={d.label} href={d.href} className="glass rounded-2xl border border-white/8 hover:border-brand-accent/50 p-4 flex flex-col items-center gap-3 transition-all hover:-translate-y-1">
                <div className="relative w-full h-20">
                  <Image src={d.img} alt={d.label} fill sizes="(max-width: 640px) 40vw, 150px" className="object-contain" />
                </div>
                <span className="text-sm text-brand-text text-center">{d.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/geraete" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              Alle unterstützten Geräte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8) Apps / players */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="Apps & Player"
            icon={Layers}
            title={<>Kompatible <span className="text-gradient">Apps &amp; Player</span></>}
            subtitle="Sie entscheiden, welche kompatible App Sie verwenden möchten – aus offiziellen Quellen, für die legale Nutzung."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apps.map((a) => (
              <Link key={a.name} href={a.href} className="group glass rounded-2xl border border-white/8 hover:border-brand-accent/50 p-6 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{a.name}</h3>
                  <ArrowRight className="w-5 h-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-brand-text text-sm leading-relaxed">{a.text}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/iptv-apps" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              Alle IPTV-Apps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9) How it works — 3 steps with connecting line on desktop */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="So funktioniert's"
            icon={Cpu}
            title={<>IPTV in <span className="text-gradient">3 einfachen Schritten</span></>}
            subtitle="Von der Auswahl bis zum ersten Stream – ohne kompliziertes Setup."
          />
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {steps.map((s) => (
                <div key={s.n} className="glass rounded-2xl border border-white/8 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-extrabold text-gradient opacity-80">{s.n}</span>
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-brand-text leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/order" className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gradient px-8 text-lg font-semibold text-white shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:brightness-110 transition-all">
              Jetzt bestellen
            </Link>
          </div>
        </div>
      </section>

      {/* 10) Real setup / interface screenshots — 1 featured + supporting */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="In Aktion"
            icon={PlayCircle}
            title={<>So sieht die <span className="text-gradient">Einrichtung</span> aus</>}
            subtitle="Echte Interface- und Setup-Screenshots aus dem Projekt – keine erfundenen Kundenbeweise."
          />
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-4">
            <Image src={proofShots[0].img} alt={proofShots[0].alt} fill sizes="(max-width: 1024px) 100vw, 1152px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/70 to-transparent" />
            <span className="absolute bottom-4 left-5 text-white font-semibold">{proofShots[0].label}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {proofShots.slice(1).map((p) => (
              <div key={p.label} className="glass rounded-xl border border-white/8 overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 220px" className="object-cover" />
                </div>
                <div className="px-3 py-2 text-center text-brand-text text-xs">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11) Transparency — makes the empty reviews state intentional */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="Ehrlichkeit"
            icon={Star}
            title={<>Transparent statt <span className="text-gradient">übertrieben</span></>}
            subtitle="Wir setzen auf nachvollziehbare Informationen statt auf inszenierte Versprechen."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transparency.map((t) => (
              <div key={t} className="glass rounded-xl border border-white/8 p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-brand-text leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12) Reviews (real reviews from lib/reviews.ts; honest empty-state otherwise) */}
      <Reviews />

      {/* 14) FAQ (with FAQPage JSON-LD) */}
      <Faq items={faq} heading="Häufige Fragen zu IPTV" />

      {/* 15) Final CTA */}
      <Cta
        heading="Bereit für ein besseres Streaming-Erlebnis?"
        text="Bestellen Sie in wenigen Schritten oder sehen Sie sich vorab die Einrichtung an."
        primaryLabel="Jetzt bestellen"
        primaryHref="/order"
        secondaryLabel="Einrichtung ansehen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
