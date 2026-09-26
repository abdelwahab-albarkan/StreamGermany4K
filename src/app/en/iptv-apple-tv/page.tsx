import Link from "next/link";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Set up IPTV on Apple TV, iPhone & iPad (tvOS / iOS Guide 2026)",
  description:
    "IPTV on Apple TV 4K, iPhone & iPad: Best iOS/tvOS player apps (IPTVX, GSE Smart IPTV, iPlayTV), fast M3U/Xtream setup & fluid 4K streaming.",
  path: "/iptv-apple-tv",
  locale: "en",
});

const apps = [
  {
    name: "IPTVX",
    text: "One of the most modern IPTV players for Apple TV 4K and iOS. Features an interface reminiscent of top streaming platforms with automatic EPG synchronization.",
  },
  {
    name: "iPlayTV",
    text: "Outstanding tvOS app for Apple TV featuring instantaneous channel zapping, favorite management, and multi-playlist support.",
  },
  {
    name: "GSE Smart IPTV",
    text: "Established app for iPhone, iPad, and Apple TV supporting numerous playlist formats (M3U, Xtream API, XMLTV EPG).",
  },
  {
    name: "Smarters Player Lite",
    text: "Official iOS / tvOS version of IPTV Smarters with structured categorization for Live TV, movies, and TV series.",
  },
];

const faq = [
  {
    q: "What is the best IPTV player for Apple TV 4K?",
    a: "IPTVX and iPlayTV provide the smoothest performance and the most polished user interface on Apple TV 4K (tvOS).",
  },
  {
    q: "Can I use my StreamGermany4K subscription on Apple TV and iPhone simultaneously?",
    a: "You can configure your credentials across multiple household devices for flexible viewing.",
  },
  {
    q: "Does AirPlay work from iPhone / iPad to Apple TV?",
    a: "Yes, you can easily stream or mirror IPTV content from your iOS device directly to your Apple TV via AirPlay.",
  },
];

export default function AppleTvEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
            { name: "Apple TV & iOS", path: "/en/iptv-apple-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Apple tvOS &amp; iOS Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV on <span className="text-brand-accent">Apple TV, iPhone &amp; iPad</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Powered by Apple&apos;s high-performance Bionic chips in the Apple TV 4K, enjoy ultra-fast channel zapping
            and seamless 60fps streaming. Here is how to configure IPTV on your Apple devices.
          </p>
        </div>

        {/* Steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Setup on Apple TV &amp; iOS</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Open App Store on Apple TV</h3>
                <p className="text-brand-text">
                  Search the tvOS App Store for <strong>IPTVX</strong>, <strong>iPlayTV</strong>, or <strong>GSE Smart IPTV</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Add Account (M3U / Xtream API)</h3>
                <p className="text-brand-text">
                  Enter the Server URL, Username, and Password from your confirmation email or message from{" "}
                  <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
                    StreamGermany4K
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Load EPG &amp; Channel List</h3>
                <p className="text-brand-text">
                  The app automatically syncs all channels, categories, and electronic program guide (EPG) data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Top IPTV Players for Apple TV &amp; iOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {apps.map((app) => (
            <div key={app.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{app.name}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{app.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about Apple Devices" />

      <Cta
        heading="Experience Premium IPTV on Apple TV 4K"
        text="Choose your preferred subscription and enjoy live television in outstanding picture quality."
        primaryLabel="Plans & Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
