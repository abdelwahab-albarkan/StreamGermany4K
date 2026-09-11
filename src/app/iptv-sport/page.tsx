import Link from "next/link";
import Image from "next/image";
import { Gauge, MonitorSmartphone, CalendarClock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Sport: Live-Sport in Deutschland streamen",
  description:
    "Live-Sport per IPTV in Deutschland: Fussball, Formel 1, Tennis, Boxen und mehr in 4K/HD auf Smart-TV, Fire TV Stick & Handy. Worauf es beim Sport-Streaming ankommt.",
  path: "/iptv-sport",
});

const categories = [
  { emoji: "⚽", name: "Fussball", text: "Ligen und internationale Wettbewerbe – je nach Senderangebot." },
  { emoji: "🏎️", name: "Formel 1 & Motorsport", text: "Rennwochenenden live mitverfolgen." },
  { emoji: "🎾", name: "Tennis", text: "Grand-Slam-Turniere und Tour-Events." },
  { emoji: "🥊", name: "Boxen & MMA", text: "Kampfsport-Events in hoher Qualität." },
  { emoji: "🏈", name: "American Football", text: "US-Sport für Nachtschwärmer." },
  { emoji: "🏒", name: "Eishockey", text: "Nationale und internationale Ligen." },
  { emoji: "🏀", name: "Basketball", text: "Europäischer und US-Basketball." },
  { emoji: "🏐", name: "Weitere Sportarten", text: "Volleyball, Handball, Radsport und mehr." },
];

const criteria = [
  { icon: Gauge, title: "Stabilität zur Primetime", text: "Sport wird oft zeitgleich von vielen geschaut. Ein stabiler Stream am Abend ist entscheidend – testen Sie gezielt zu Spielzeiten." },
  { icon: MonitorSmartphone, title: "Gerät & Bildqualität", text: "Für 4K braucht es ein 4K-fähiges Gerät und ausreichend Bandbreite. Welche Geräte laufen, zeigt die Geräte-Übersicht." },
  { icon: CalendarClock, title: "EPG & Senderliste", text: "Ein aktueller Programmführer hilft, Übertragungen schnell zu finden. Welche Sender enthalten sind, hängt vom Angebot ab." },
];

const faq = [
  {
    q: "Kann ich Fussball und grosse Wettbewerbe per IPTV schauen?",
    a: "Ob bestimmte Ligen oder Wettbewerbe verfügbar sind, hängt vom Senderangebot des jeweiligen Anbieters und den Übertragungsrechten ab. Nutzen Sie ausschliesslich autorisierte, legale Dienste – von unrealistisch günstigen „Alles-inklusive“-Versprechen sollten Sie Abstand nehmen.",
  },
  {
    q: "Läuft Sport-Streaming in 4K?",
    a: "Auf 4K-fähigen Geräten und mit ausreichend schneller Internetverbindung ist 4K möglich, sofern der jeweilige Sender bzw. Inhalt in 4K bereitgestellt wird. Andernfalls sehen Sie in HD.",
  },
  {
    q: "Warum ruckelt Sport abends häufiger?",
    a: "Zur Primetime sind Netze und Server stärker ausgelastet. Eine stabile Verbindung (idealerweise LAN) und ein leistungsfähiges Gerät reduzieren Ruckler deutlich. Mehr dazu im IPTV-Test-Ratgeber.",
  },
];

export default function IptvSportPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Sport", path: "/iptv-sport" }]} />

        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Sport: <span className="text-brand-accent">Live-Sport streamen</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Mit IPTV verfolgen Sie Live-Sport flexibel über das Internet – auf dem Smart-TV, dem Fire TV
              Stick oder mobil. Welche Sportarten und Wettbewerbe enthalten sind, hängt vom Senderangebot ab.
              Diese Seite zeigt, worauf es beim Sport-Streaming ankommt.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-sport-streaming.jpg"
            alt="Live-Sport per IPTV auf dem Fernseher streamen"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Sportarten &amp; Wettbewerbe</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="text-3xl mb-3" aria-hidden="true">{c.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-1">{c.name}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Worauf es beim Sport-Streaming ankommt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
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
        <p className="text-brand-text leading-relaxed max-w-3xl mt-6">
          Prüfen Sie die Qualität selbst mit dem{" "}
          <Link href="/iptv-test" className="text-brand-accent hover:underline">IPTV-Test-Ratgeber</Link>,
          finden Sie das passende Gerät in der{" "}
          <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>{" "}
          und vergleichen Sie Angebote im{" "}
          <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">IPTV-Vergleich</Link>.
        </p>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV &amp; Sport" />

      <Cta
        heading="Sport live in 4K erleben"
        text="Wählen Sie Ihr Abo und richten Sie StreamGermany4K in wenigen Minuten auf Ihrem Gerät ein."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
