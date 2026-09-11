import Link from "next/link";
import { Trophy, Film, Users, Wallet, Sparkles, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { SITE, stat } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bester IPTV Anbieter 2026: Worauf es bei der Wahl ankommt",
  description:
    "Bester IPTV Anbieter 2026? Die ehrliche Antwort hängt von Ihrem Bedarf ab. So bewerten Sie Anbieter objektiv – mit Entscheidungshilfe nach Nutzungstyp, ganz ohne Fake-Rankings.",
  path: "/bester-iptv",
});

const useCases = [
  { icon: Trophy, title: "Für Sport-Fans", text: "Hier zählt vor allem Stabilität zur Primetime und ein passendes Sport-Senderangebot. Testen Sie die Qualität gezielt zu Spielzeiten." },
  { icon: Film, title: "Für Film & Serien", text: "Wichtig sind ein grosser VOD-Katalog und echte 4K-/HD-Qualität. Prüfen Sie, ob die Mediathek aktuell gehalten wird." },
  { icon: Users, title: "Für mehrere Geräte", text: "Wer parallel auf mehreren Geräten schauen möchte, achtet auf die Anzahl gleichzeitiger Streams – bei StreamGermany4K je nach Tarif." },
  { icon: Wallet, title: "Fürs Budget", text: "Mit einer kurzen Laufzeit risikoarm einsteigen, bei Zufriedenheit auf ein Jahresabo mit dem niedrigsten Monatspreis wechseln." },
  { icon: Sparkles, title: "Für Einsteiger", text: "Entscheidend sind eine einfache Einrichtung und erreichbarer Support. So gelingt der Start auch ohne technisches Vorwissen." },
  { icon: ShieldCheck, title: "Für Sicherheitsbewusste", text: "Setzen Sie auf transparente, seriöse Anbieter und legale Inhalte – und meiden Sie unrealistisch billige „Alles-inklusive“-Versprechen." },
];

const faq = [
  {
    q: "Was ist der beste IPTV-Anbieter in Deutschland?",
    a: "Das lässt sich nicht pauschal sagen: „Am besten“ hängt von Ihrer Nutzung ab. Wer Sport schaut, gewichtet anders als jemand mit Fokus auf Filme oder mehrere Geräte. Bewerten Sie Anbieter anhand fester Kriterien und Ihres eigenen Bedarfs.",
  },
  {
    q: "Gibt es eine offizielle Rangliste der besten IPTV-Anbieter 2026?",
    a: "Nein. Kursierende „Top-10“-Listen sind oft werblich oder nicht nachvollziehbar. Verlässlicher ist es, klare Kriterien anzulegen und einen Anbieter selbst zu prüfen, statt sich auf pauschale Rankings zu verlassen.",
  },
  {
    q: "Ist der teuerste IPTV-Anbieter automatisch der beste?",
    a: "Nein. Ein hoher Preis ist keine Garantie für Qualität, ein sehr niedriger oft ein Warnsignal. Entscheidend ist das Verhältnis aus Streaming-Qualität, Angebot, Zuverlässigkeit und Support.",
  },
  {
    q: "Woran erkenne ich einen seriösen IPTV-Anbieter?",
    a: "An transparenter Kommunikation, nachvollziehbaren Preisen und Zahlungsarten, klaren rechtlichen Angaben und einem erreichbaren Support. Von komplett kostenlosen oder unrealistisch günstigen „Alles-inklusive“-Angeboten sollten Sie Abstand nehmen.",
  },
];

export default function BesterIptvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Bester IPTV Anbieter", path: "/bester-iptv" }]} />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bester IPTV Anbieter 2026: <span className="text-brand-accent">so treffen Sie die richtige Wahl</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              „Wer ist der beste IPTV-Anbieter?“ – die ehrliche Antwort lautet: Das hängt von Ihrem Bedarf
              ab. Statt einer fragwürdigen Pauschal-Rangliste bekommen Sie hier eine sachliche
              Entscheidungshilfe, mit der Sie den für Sie besten IPTV-Dienst finden – auch für 2026.
            </p>
            <p>
              Wir verzichten bewusst auf reißerische Bestplatzierungs-Behauptungen, erfundene Auszeichnungen
              oder Fake-Bewertungen.
              Die vollständigen Bewertungskriterien finden Sie im{" "}
              <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>,
              einen direkten Tarifvergleich im{" "}
              <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">IPTV-Vergleich</Link>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Was den besten IPTV-Anbieter ausmacht</h2>
        <p className="text-brand-text leading-relaxed max-w-3xl mb-10">
          In fast jeder Bewertung stehen dieselben Faktoren oben: an erster Stelle Streaming-Qualität und
          Stabilität, dann ein passendes Sender- und VOD-Angebot, breite Gerätekompatibilität, ein aktueller
          EPG, ein faires Preis-Leistungs-Verhältnis und erreichbarer Support. Ein niedriger Preis allein
          macht keinen Anbieter zum besten.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Der beste IPTV-Anbieter je nach Bedarf</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((u) => (
            <div key={u.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <u.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{u.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ehrlich statt Fake-Ranking</h2>
          <p>
            Die verlässlichste Einschätzung entsteht, wenn Sie selbst prüfen. Nutzen Sie den{" "}
            <Link href="/iptv-test" className="text-brand-accent hover:underline">IPTV-Test-Ratgeber</Link>,
            um Qualität und Stabilität zu bewerten, und ordnen Sie fremde{" "}
            <Link href="/iptv-erfahrungen" className="text-brand-accent hover:underline">Erfahrungen</Link>{" "}
            kritisch ein – im IPTV-Umfeld kursieren viele gekaufte Bewertungen.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 pt-4">StreamGermany4K als Wahl</h2>
          <p>
            StreamGermany4K positioniert sich als Premium-IPTV-Dienst für Deutschland mit Fokus auf 4K-/HD-
            Qualität, {stat(SITE.stats.uptime, "stabile Server")}
            {SITE.stats.uptime ? " Verfügbarkeit" : ""}, breiter Gerätekompatibilität und fairen Laufzeiten.
            Ob das für Sie die beste Wahl ist, entscheiden Sie am besten anhand der{" "}
            <Link href="/preise" className="text-brand-accent hover:underline">Preise</Link> und Ihres eigenen
            Eindrucks. Zum Start führt Sie die Seite{" "}
            <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>{" "}
            durch Bestellung und Einrichtung.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zum besten IPTV-Anbieter" />

      <Cta
        heading="Finden Sie Ihren besten IPTV-Anbieter"
        text="Vergleichen Sie die Tarife und prüfen Sie StreamGermany4K anhand Ihrer eigenen Anforderungen."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV Vergleich"
        secondaryHref="/iptv-vergleich"
      />
    </div>
  );
}
