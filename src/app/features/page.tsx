import { FeatureCard } from "@/components/cards/FeatureCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Cta } from "@/components/sections/Cta";
import { Tv, Zap, MonitorPlay, Globe, ShieldCheck, Film, Headphones, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SITE, stat } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Funktionen: 4K-Qualität, VOD-Mediathek & Multi-Device",
  description:
    "Die Funktionen von StreamGermany4K im Überblick: 4K- und HD-Streaming, grosse VOD-Mediathek, Gerätekompatibilität, EPG, Catch-up und schnelle Einrichtung.",
  path: "/features",
});

const features = [
  { title: "4K- & HD-Qualität", description: "Filme, Serien und Sport in 4K und Full HD – ausgelegt auf ein flüssiges Bild ohne Ruckeln.", icon: Tv },
  { title: "Sofortige Freischaltung", description: "Nach dem Kauf erhalten Sie Ihre Zugangsdaten zeitnah und starten in wenigen Minuten.", icon: Zap },
  { title: "Multi-Device", description: "Smart-TV, Fire TV, Android, iOS, Windows oder Mac – nutzbar mit den gängigen IPTV-Apps.", icon: MonitorPlay },
  { title: "Leistungsfähige Server", description: "Auf Geschwindigkeit und Stabilität ausgelegte Server für ein zuverlässiges Streaming-Erlebnis.", icon: Globe },
  { title: "Sicheres Streaming", description: "Datenschutz nach europäischen Vorgaben und eine verschlüsselte Datenübertragung.", icon: ShieldCheck },
  { title: "VOD-Mediathek", description: stat(SITE.stats.vod, "Eine umfangreiche") + (SITE.stats.vod ? " Filme & Serien auf Abruf" : " Auswahl an Filmen, Serien und Dokus auf Abruf."), icon: Film },
  { title: "Support & Einrichtung", description: `Hilfe bei Installation und Rückfragen – ${stat(SITE.stats.support, "persönlicher")} Support.`, icon: Headphones },
  { title: "Hohe Verfügbarkeit", description: SITE.stats.uptime ? `Angestrebte Server-Verfügbarkeit von ${SITE.stats.uptime}.` : "Auf hohe Verfügbarkeit ausgelegte Infrastruktur, damit Sie nichts verpassen.", icon: Clock },
];

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Funktionen", path: "/features" }]} />

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Funktionen von <span className="text-brand-accent">StreamGermany4K</span>
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Alles für ein modernes IPTV-Erlebnis: hochwertige Bildqualität, eine grosse Mediathek und eine
            unkomplizierte Nutzung auf all Ihren Geräten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>

      <Cta
        heading="Überzeugt von den Funktionen?"
        text="Sehen Sie sich die Laufzeiten an oder starten Sie direkt mit Ihrem IPTV-Abo."
        primaryLabel="Preise ansehen"
        primaryHref="/preise"
        secondaryLabel="IPTV kaufen"
        secondaryHref="/iptv-kaufen"
      />
    </div>
  );
}
