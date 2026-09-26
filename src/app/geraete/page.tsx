import Link from "next/link";
import Image from "next/image";
import { Download, KeyRound, PlayCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV auf allen Geräten: Smart-TV, Fire TV Stick, Handy & mehr",
  description:
    "Auf welchen Geräten läuft StreamGermany4K? Übersicht zu Smart-TVs (Samsung, LG), Fire TV Stick, Apple TV, Android TV, Smartphone, Tablet und Computer – mit Einrichtung in 3 Schritten.",
  path: "/geraete",
});

const categories = [
  {
    img: "/images/iptv-live-tv-wohnzimmer.jpg",
    imgAlt: "IPTV auf dem Smart-TV im Wohnzimmer",
    title: "Smart-TV",
    text: "Samsung (Tizen), LG (webOS), Sony, Philips und Hisense: Auf vielen Smart-TVs läuft eine IPTV-App direkt aus dem TV-App-Store.",
    href: "/iptv-samsung",
    linkLabel: "IPTV auf Samsung Smart TV",
  },
  {
    img: "/images/iptv-fire-tv-stick.jpg",
    imgAlt: "IPTV per Streaming-Stick auf dem Fernseher",
    title: "Streaming-Sticks & -Boxen",
    text: "Amazon Fire TV Stick, Apple TV, Android-TV-/Google-TV-Geräte, NVIDIA Shield und Android-Boxen erweitern jeden Fernseher um IPTV.",
    href: "/iptv-fire-tv-stick",
    linkLabel: "IPTV auf Fire TV Stick",
  },
  {
    img: "/images/iptv-multi-geraete.jpg",
    imgAlt: "IPTV auf Smartphone und Tablet",
    title: "Smartphone & Tablet",
    text: "Auf iPhone, iPad und Android-Geräten nutzen Sie IPTV mobil über eine kompatible Player-App aus dem jeweiligen App-Store.",
    href: "/iptv-apple-tv",
    linkLabel: "IPTV auf Apple-Geräten",
  },
  {
    img: "/images/iptv-windows-pc.jpg",
    imgAlt: "IPTV auf Windows-PC und Mac",
    title: "Computer",
    text: "Unter Windows und macOS schauen Sie IPTV über einen IPTV-Player oder den Browser – praktisch am Schreibtisch oder Laptop.",
    href: null,
    linkLabel: null,
  },
];

const steps = [
  { icon: Download, title: "1. IPTV-App installieren", text: "Installieren Sie eine mit StreamGermany4K kompatible IPTV-App aus dem App-Store Ihres Geräts." },
  { icon: KeyRound, title: "2. Zugangsdaten eintragen", text: "Tragen Sie Ihre StreamGermany4K-Zugangsdaten in der App ein – fertig eingerichtet ist alles in wenigen Minuten." },
  { icon: PlayCircle, title: "3. Loslegen", text: "Starten Sie Live-TV, Sport und Filme in 4K/HD – auf dem Gerät Ihrer Wahl, zu Hause oder unterwegs." },
];

const faq = [
  {
    q: "Auf welchen Geräten läuft StreamGermany4K?",
    a: "Auf den gängigen Geräten mit einer IPTV-App: Smart-TVs (u. a. Samsung, LG), Amazon Fire TV Stick, Apple TV, Android- und Google-TV-Geräte, Android-Boxen, iPhone/iPad, Android-Smartphones sowie Windows- und macOS-Computer.",
  },
  {
    q: "Brauche ich spezielle Hardware?",
    a: "Nein. Sie benötigen ein kompatibles Gerät mit einer IPTV-App und eine stabile Internetverbindung. Ältere Smart-TVs lassen sich bei Bedarf mit einem günstigen Streaming-Stick nachrüsten.",
  },
  {
    q: "Auf wie vielen Geräten kann ich gleichzeitig schauen?",
    a: "Das hängt vom gewählten Tarif ab – die Anzahl paralleler Streams unterscheidet sich je nach Paket. Details finden Sie auf der Preisseite.",
  },
  {
    q: "Was hilft bei Pufferung oder Rucklern?",
    a: "Meist die Verbindung: Nutzen Sie möglichst LAN oder ein starkes WLAN, starten Sie Gerät und App neu und schliessen Sie andere bandbreitenintensive Anwendungen. Für 4K ist eine ausreichend schnelle Leitung wichtig.",
  },
];

export default function GeraetePage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Geräte", path: "/geraete" }]} />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV auf <span className="text-brand-accent">Ihren Geräten</span> nutzen
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              StreamGermany4K ist geräteunabhängig: Ob Smart-TV, Streaming-Stick, Smartphone oder Computer –
              mit einer kompatiblen IPTV-App und Ihren Zugangsdaten streamen Sie Live-TV, Sport und Filme in
              4K/HD. Hier finden Sie den Überblick, auf welchen Geräten IPTV läuft und wie die Einrichtung
              grundsätzlich abläuft.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Unterstützte Gerätekategorien</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {categories.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 overflow-hidden">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 640px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed mb-3">{c.text}</p>
                {c.href && c.linkLabel && (
                  <Link href={c.href} className="inline-flex items-center gap-1 text-sm text-brand-accent hover:underline">
                    {c.linkLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">So funktioniert IPTV auf jedem Gerät</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
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
        <p className="text-brand-text leading-relaxed max-w-3xl">
          Gerätespezifische Anleitungen:{" "}
          <Link href="/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire TV Stick</Link> • {" "}
          <Link href="/iptv-samsung" className="text-brand-accent hover:underline">Samsung Smart TV</Link> • {" "}
          <Link href="/iptv-lg-smart-tv" className="text-brand-accent hover:underline">LG Smart TV</Link> • {" "}
          <Link href="/iptv-apple-tv" className="text-brand-accent hover:underline">Apple TV & iOS</Link> • {" "}
          <Link href="/iptv-android-tv" className="text-brand-accent hover:underline">Android TV & Boxen</Link>.
          Welche App sich eignet, zeigt{" "}
          <Link href="/iptv-apps" className="text-brand-accent hover:underline">Beste IPTV-Apps</Link>.
          Noch kein Abo? Auf der Seite{" "}
          <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
          erhalten Sie Ihre Zugangsdaten.
        </p>
      </div>

      <Faq items={faq} heading="Fragen zu Geräten &amp; Einrichtung" />

      <Cta
        heading="Auf Ihrem Gerät startklar in Minuten"
        text="Sichern Sie sich Ihr Abo und richten Sie StreamGermany4K auf Smart-TV, Stick, Handy oder Computer ein."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/order"
      />
    </div>
  );
}
