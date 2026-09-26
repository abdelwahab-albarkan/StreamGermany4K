import { FeatureCard } from "@/components/cards/FeatureCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Cta } from "@/components/sections/Cta";
import { Tv, Zap, MonitorPlay, Globe, ShieldCheck, Film, Headphones, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { SITE, stat } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Features: 4K Quality, VOD Library & Multi-Device Support",
  description:
    "Explore the key features of StreamGermany4K: 4K and HD streaming, extensive VOD library, multi-device compatibility, EPG, catch-up, and fast setup.",
  path: "/en/features",
  locale: "en",
});

const features = [
  { title: "4K & HD Picture Quality", description: "Movies, series, and sports in 4K and Full HD – designed for smooth, stutter-free playback.", icon: Tv },
  { title: "Prompt Activation", description: "Receive your login credentials promptly after ordering and start streaming in minutes.", icon: Zap },
  { title: "Multi-Device Compatibility", description: "Smart TV, Fire TV, Android, iOS, Windows, and Mac – usable with all popular IPTV apps.", icon: MonitorPlay },
  { title: "High-Performance Servers", description: "Infrastructure engineered for speed and stability, providing a dependable viewing experience.", icon: Globe },
  { title: "Secure Streaming", description: "Encrypted data transmission and respect for European data privacy standards.", icon: ShieldCheck },
  { title: "On-Demand VOD Library", description: stat(SITE.stats.vod, "An extensive") + (SITE.stats.vod ? " movies & series collection on demand" : " library of movies, series, and documentaries on demand."), icon: Film },
  { title: "Setup Assistance & Support", description: `Assistance with installation and questions – ${stat(SITE.stats.support, "personal")} customer support.`, icon: Headphones },
  { title: "High Availability", description: SITE.stats.uptime ? `Targeted server uptime of ${SITE.stats.uptime}.` : "High-availability infrastructure engineered so you never miss live action.", icon: Clock },
];

export default function EnglishFeaturesPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Features", path: "/en/features" },
          ]}
        />

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Features of <span className="text-brand-accent">StreamGermany4K</span>
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Everything for a modern IPTV experience: premium visual quality, an extensive on-demand
            catalogue, and smooth operation across all your devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>

      <Cta
        heading="Ready to Experience These Features?"
        text="Review available subscription plans or get started with StreamGermany4K today."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
