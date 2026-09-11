import Link from "next/link";
import { Wifi, MonitorSmartphone, Server, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Erfahrungen: Was Bewertungen wirklich aussagen",
  description:
    "IPTV Erfahrungen und Bewertungen richtig einordnen: Wovon Ihre IPTV-Erfahrung tatsächlich abhängt, wie Sie Reviews kritisch lesen und was realistische Erwartungen sind.",
  path: "/iptv-erfahrungen",
});

const factors = [
  { icon: Wifi, title: "Ihre Internetverbindung", text: "Der wichtigste Faktor: Für ruckelfreies HD/4K braucht es eine ausreichend schnelle, stabile Verbindung. Dieselbe App kann bei zwei Nutzern sehr unterschiedlich laufen." },
  { icon: Server, title: "Server- und Netzqualität", text: "Wie gut ein Anbieter seine Infrastruktur betreibt, zeigt sich vor allem zur Primetime am Abend – dann trennt sich Zuverlässigkeit von Werbeversprechen." },
  { icon: MonitorSmartphone, title: "Gerät und Einrichtung", text: "Endgerät, App und korrekte Einrichtung beeinflussen die Erfahrung stark. Ein älteres Gerät oder eine falsche Konfiguration kann Probleme verursachen, die nicht am Dienst liegen." },
  { icon: Search, title: "Quelle der Bewertung", text: "Im IPTV-Umfeld kursieren viele gefälschte oder gekaufte Bewertungen. Prüfen Sie, ob eine Erfahrung konkret und nachvollziehbar ist – pauschales Lob ohne Details sagt wenig aus." },
];

const faq = [
  {
    q: "Wovon hängt meine IPTV-Erfahrung ab?",
    a: "Zu einem grossen Teil von Ihrer eigenen Internetverbindung, dem verwendeten Gerät und der Einrichtung – und natürlich von der Server- und Netzqualität des Anbieters. Deshalb kann derselbe Dienst bei zwei Nutzern unterschiedlich erlebt werden.",
  },
  {
    q: "Wie zuverlässig sind IPTV-Erfahrungsberichte im Internet?",
    a: "Unterschiedlich. Gerade im IPTV-Bereich gibt es viele gefälschte oder gekaufte Bewertungen. Verlassen Sie sich nicht auf pauschale Sterne, sondern auf konkrete, nachvollziehbare Schilderungen – und testen Sie am Ende selbst.",
  },
  {
    q: "Zeigt StreamGermany4K Kundenbewertungen an?",
    a: "Wir stellen bewusst keine erfundenen Testimonials oder Sternebewertungen dar. Statt auf inszenierte Reviews setzen wir auf transparente Informationen zu Qualität, Geräten, Preisen und der Möglichkeit, den Dienst selbst zu prüfen.",
  },
];

export default function IptvErfahrungenPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "IPTV Erfahrungen", path: "/iptv-erfahrungen" }]} />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Erfahrungen: <span className="text-brand-accent">Bewertungen richtig einordnen</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Wer nach IPTV-Erfahrungen oder Bewertungen sucht, möchte wissen: Was kommt wirklich auf mich
              zu? Die ehrliche Antwort ist, dass die Erfahrung stark von Faktoren abhängt, die nicht allein
              am Anbieter liegen – allen voran Ihrer Internetverbindung und Ihrem Gerät.
            </p>
            <p>
              Diese Seite hilft Ihnen, Erfahrungsberichte kritisch zu lesen und realistische Erwartungen zu
              entwickeln – ohne inszenierte Testimonials. Wie Sie IPTV selbst prüfen, zeigt der{" "}
              <Link href="/iptv-test" className="text-brand-accent hover:underline">IPTV-Test-Ratgeber</Link>.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Wovon die IPTV-Erfahrung wirklich abhängt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {factors.map((f) => (
            <div key={f.title} className="glass rounded-2xl border border-brand-gray/50 p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                <f.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Erfahrungen sammeln – am besten selbst</h2>
          <p>
            Fremde Erfahrungen sind ein Anhaltspunkt, ersetzen aber nicht den eigenen Eindruck. Nutzen Sie
            die Kriterien im{" "}
            <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>,
            stellen Sie Angebote im{" "}
            <Link href="/iptv-vergleich" className="text-brand-accent hover:underline">IPTV-Vergleich</Link>{" "}
            gegenüber oder lassen Sie sich unter{" "}
            <Link href="/bester-iptv" className="text-brand-accent hover:underline">Bester IPTV Anbieter</Link>{" "}
            nach Nutzungstyp leiten – und prüfen Sie die Qualität anschliessend selbst. Die Preise dazu finden
            Sie auf der{" "}
            <Link href="/preise" className="text-brand-accent hover:underline">Preisseite</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fragen zu IPTV Erfahrungen &amp; Bewertungen" />

      <Cta
        heading="Machen Sie sich Ihr eigenes Bild"
        text="Statt sich auf fremde Bewertungen zu verlassen: Prüfen Sie StreamGermany4K risikoarm mit dem monatlich kündbaren Einstieg."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV testen"
        secondaryHref="/iptv-test"
      />
    </div>
  );
}
