import Link from "next/link";
import { PlayCircle, CalendarClock, ListVideo, Settings2, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Best IPTV Apps & Players: Overview and Selection Guide",
  description:
    "Which IPTV app is right for you? What makes a great IPTV player, popular applications, and what to look for regarding M3U, Xtream, and EPG support.",
  path: "/iptv-apps",
  locale: "en",
});

const criteria = [
  { icon: PlayCircle, title: "Stable Playback", text: "Smooth decoding without buffering or stutter – the single most important trait of any player." },
  { icon: Settings2, title: "M3U & Xtream", text: "Support for both connection methods to match your server credentials perfectly." },
  { icon: CalendarClock, title: "EPG Integration", text: "A clean, responsive electronic program guide makes navigating live TV effortless." },
  { icon: ListVideo, title: "Channel Organization", text: "Categories, favorites, and search functionality for effortless browsing across thousands of channels." },
];

const faq = [
  {
    q: "Which IPTV app is the absolute best?",
    a: "There is no single best app for everyone – it depends on your operating system and personal preference. Look for stable playback, M3U and Xtream support, an intuitive EPG guide, and fast response times on your specific device.",
  },
  {
    q: "Does an IPTV app include TV channels by itself?",
    a: "No. An IPTV app is purely a media player. Content is loaded via your access credentials from an authorized service provider. Without valid credentials, the app displays nothing.",
  },
  {
    q: "Are IPTV player apps free?",
    a: "Some players are free, while others offer premium features through a small one-time unlock fee. Regardless, you will always need separate provider credentials to stream.",
  },
];

export default function IptvAppsEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/en" }, { name: "IPTV Apps", path: "/en/iptv-apps" }]} />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Best <span className="text-brand-accent">IPTV Apps</span> &amp; Players Overview
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            An IPTV app is the software player that decodes and renders your provider&apos;s stream – the app itself
            does not host any content. Finding the right app depends on rock-solid stability, format compatibility (M3U or Xtream), and ease of navigation on your TV or mobile device.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What Makes a Great IPTV Player?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Popular IPTV Players &amp; Setup Guides</h2>
            <p className="mb-4">
              Here are the most widely recommended and reliable IPTV players available today:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <Link href="/en/iptv-tivimate" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">TiviMate IPTV Player</span>
                <span className="text-xs text-brand-text">The premier player for Android &amp; Fire TV</span>
              </Link>
              <Link href="/en/iptv-smarters-pro" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">IPTV Smarters Pro</span>
                <span className="text-xs text-brand-text">Multi-platform player for Smart TV &amp; mobile</span>
              </Link>
              <Link href="/en/kodi-iptv-addons" className="p-4 rounded-xl glass hover:border-brand-accent/50 border border-brand-gray/50 text-white font-medium flex flex-col justify-between transition-all">
                <span className="text-lg font-bold text-brand-accent mb-1">Kodi IPTV Addons</span>
                <span className="text-xs text-brand-text">PVR Simple Client integration</span>
              </Link>
            </div>
          </section>

          <section className="glass rounded-2xl border border-brand-accent/30 p-6">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
              <p className="text-sm">
                <strong className="text-white">Note:</strong> An IPTV app is a neutral playback tool. Always use it
                with an authorized provider and your own private credentials. Publicly shared playlist links often
                carry significant quality and reliability problems.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Which App on Which Device?</h2>
            <p>
              Optimal app choices vary across hardware platforms. Explore our dedicated guides for{" "}
              <Link href="/en/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire TV Stick</Link>,{" "}
              <Link href="/en/iptv-samsung" className="text-brand-accent hover:underline">Samsung Smart TV</Link>, and the{" "}
              <Link href="/en/devices" className="text-brand-accent hover:underline">Complete Devices Overview</Link>.
            </p>
          </section>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about IPTV Apps" />

      <Cta
        heading="App Installed? Get Your High-Speed Access"
        text="Your app is ready – get instant access to 4K live channels, sports, and video on demand."
        primaryLabel="IPTV Comparison"
        primaryHref="/en/iptv-comparison"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
