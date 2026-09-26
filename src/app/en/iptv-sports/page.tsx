import Link from "next/link";
import Image from "next/image";
import { Gauge, MonitorSmartphone, CalendarClock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Sports: Stream Live Sports in Germany",
  description:
    "Live sports via IPTV in Germany: Football, Formula 1, tennis, combat sports, and more in 4K/HD on Smart TVs, Fire TV Sticks, and mobile devices.",
  path: "/en/iptv-sports",
  locale: "en",
});

const categories = [
  { emoji: "⚽", name: "Football", text: "Top leagues and major tournaments – depending on channel availability." },
  { emoji: "🏎️", name: "Formula 1 & Motorsport", text: "Follow race weekends live with crystal-clear coverage." },
  { emoji: "🎾", name: "Tennis", text: "Grand Slam championships and international tour events." },
  { emoji: "🥊", name: "Boxing & MMA", text: "Combat sports events in sharp high-definition quality." },
  { emoji: "🏈", name: "American Football", text: "US sports action and prime matchups." },
  { emoji: "🏒", name: "Ice Hockey", text: "National competitions and international championship leagues." },
  { emoji: "🏀", name: "Basketball", text: "European competitions and top US basketball." },
  { emoji: "🏐", name: "Other Sports", text: "Volleyball, handball, cycling, darts, and more." },
];

const criteria = [
  { icon: Gauge, title: "Prime-Time Stability", text: "Live sports attract large concurrent audiences. Reliable evening server stability is crucial – test during live games." },
  { icon: MonitorSmartphone, title: "Hardware & Resolution", text: "Streaming in 4K requires 4K-capable hardware and sufficient network bandwidth." },
  { icon: CalendarClock, title: "EPG & Channel Organization", text: "An up-to-date program guide makes finding broadcast schedules seamless and fast." },
];

const faq = [
  {
    q: "Can I watch football and international leagues via IPTV?",
    a: "Availability of specific leagues and matches depends on the channel lineup and broadcasting rights. Always use legitimate services and avoid unrealistic 'all-inclusive' promises.",
  },
  {
    q: "Are sports streamed in 4K resolution?",
    a: "Yes – on 4K hardware and with adequate network bandwidth, 4K streaming is supported when the channel provides a 4K feed. HD is delivered otherwise.",
  },
  {
    q: "Why can sports stream buffering occur in the evening?",
    a: "Prime-time network and server traffic peaks during live games. A wired LAN connection and high-performance device minimize buffering significantly.",
  },
];

export default function EnglishIptvSportsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Sports", path: "/en/iptv-sports" },
          ]}
        />

        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Sports: <span className="text-brand-accent">Stream Live Sports in 4K</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              With IPTV, stream live sports flexibly across your Smart TV, Fire TV Stick, tablet, or smartphone.
              Available sports and competitions depend on channel offerings.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-sport-streaming.jpg"
            alt="Streaming live sports over IPTV"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Sports &amp; Competitions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="text-3xl mb-3" aria-hidden="true">{c.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-1">{c.name}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What Matters for Sports Streaming</h2>
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
          Test performance in our{" "}
          <Link href="/en/iptv-test" className="text-brand-accent hover:underline">IPTV Test Guide</Link>,
          explore supported hardware in our{" "}
          <Link href="/en/devices" className="text-brand-accent hover:underline">Devices Overview</Link>, and
          compare subscriptions in our{" "}
          <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">IPTV Comparison</Link>.
        </p>
      </div>

      <Faq items={faq} heading="Live Sports &amp; IPTV FAQ" />

      <Cta
        heading="Experience Live Sports in 4K"
        text="Choose your plan and set up StreamGermany4K on your favorite device in minutes."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
