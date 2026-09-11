import Link from "next/link";
import { PlayCircle, CalendarClock, ListVideo, Settings2, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Beste IPTV-Apps & Player: Überblick und Auswahlkriterien",
  description:
    "Welche IPTV-App ist die richtige? Was einen guten IPTV-Player ausmacht, welche bekannten Apps es gibt und worauf Sie bei M3U, Xtream und EPG achten sollten – neutral erklärt.",
  path: "/iptv-apps",
});

const criteria = [
  { icon: PlayCircle, title: "Stabile Wiedergabe", text: "Flüssiges Abspielen ohne häufige Aussetzer – die wichtigste Eigenschaft eines Players." },
  { icon: Settings2, title: "M3U & Xtream", text: "Unterstützung beider Zugangsarten, damit die App zu Ihren Zugangsdaten passt." },
  { icon: CalendarClock, title: "EPG-Unterstützung", text: "Ein sauber eingebundener Programmführer erleichtert das Navigieren im Live-TV." },
  { icon: ListVideo, title: "Senderlisten & Favoriten", text: "Kategorien, Suchfunktion und Favoriten sorgen für Übersicht bei vielen Sendern." },
];

const faq = [
  {
    q: "Welche IPTV-App ist die beste?",
    a: "Es gibt nicht die eine beste App – es kommt auf Ihr Gerät und Ihre Vorlieben an. Achten Sie auf stabile Wiedergabe, Unterstützung von M3U und Xtream, einen guten EPG und eine übersichtliche Bedienung.",
  },
  {
    q: "Enthält eine IPTV-App selbst Sender?",
    a: "Nein. Eine IPTV-App ist nur der Player. Die Inhalte kommen über Ihre Zugangsdaten von einem Anbieter. Ohne gültigen, legalen Zugang zeigt die App nichts an.",
  },
  {
    q: "Sind IPTV-Apps kostenlos?",
    a: "Manche Player sind kostenlos, andere kostenpflichtig oder mit einmaliger Freischaltung. Unabhängig davon benötigen Sie immer ein separates Abo bzw. Zugangsdaten eines Anbieters.",
  },
];

export default function IptvAppsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Apps", path: "/iptv-apps" }]} />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beste <span className="text-brand-accent">IPTV-Apps</span> im Überblick
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Eine IPTV-App ist der Player, der die Sender Ihres Anbieters anzeigt – die App selbst enthält keine
            Inhalte. Wichtig ist deshalb weniger „die eine beste App“ als die Kombination aus stabiler
            Wiedergabe, passender Zugangsart (M3U oder Xtream) und guter Bedienung auf Ihrem Gerät.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Was macht einen guten IPTV-Player aus?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-8 text-brand-text leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Bekannte IPTV-Player & Anleitungen</h2>
            <p className="mb-4">
              Zu den verbreitetsten und stabilsten IPTV-Playern zählen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <Link href="/iptv-tivimate" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">TiviMate IPTV Player</span>
                <span className="text-xs text-brand-text">Der Top-Player für Android & Fire TV</span>
              </Link>
              <Link href="/iptv-smarters-pro" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">IPTV Smarters Pro</span>
                <span className="text-xs text-brand-text">Multi-Plattform Player für Smart TV & Mobile</span>
              </Link>
              <Link href="/kodi-iptv-addons" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">Kodi IPTV Addons</span>
                <span className="text-xs text-brand-text">PVR Simple Client Einbindung</span>
              </Link>
            </div>
          </section>

          <section className="glass rounded-2xl border border-brand-accent/30 p-6">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong className="text-white">Wichtig:</strong> Eine IPTV-App ist ein neutrales Werkzeug.
                Nutzen Sie sie ausschliesslich mit einem legalen, autorisierten Anbieter und Ihren eigenen
                Zugangsdaten. Frei kursierende Listen aus unbekannten Quellen sind oft rechtlich problematisch.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Welche App auf welchem Gerät?</h2>
            <p>
              Die passende App und die Einrichtung unterscheiden sich je Plattform. Konkrete Anleitungen finden
              Sie unter{" "}
              <Link href="/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire TV Stick</Link>,{" "}
              <Link href="/iptv-samsung" className="text-brand-accent hover:underline">Samsung Smart TV</Link>{" "}
              sowie in der{" "}
              <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>. Was
              M3U, Xtream und EPG genau bedeuten, erklärt der{" "}
              <Link href="/blog/m3u-xtream-epg" className="text-brand-accent hover:underline">Technik-Ratgeber</Link>.
            </p>
          </section>
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu IPTV-Apps" />

      <Cta
        heading="App startklar – jetzt Zugang sichern"
        text="Die App ist nur der Player. Für Live-TV, Sport und Filme brauchen Sie ein Abo mit gültigen Zugangsdaten."
        primaryLabel="IPTV Vergleich"
        primaryHref="/iptv-vergleich"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
