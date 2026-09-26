import Link from "next/link";
import { Tv, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Install IPTV on LG Smart TV (webOS Setup Guide 2026)",
  description:
    "How to use IPTV on LG Smart TV: Best webOS player apps (SmartOne IPTV, Net IPTV, Smart IPTV), step-by-step setup & tips for stable 4K streaming.",
  path: "/iptv-lg-smart-tv",
  locale: "en",
});

const apps = [
  {
    name: "Smart One IPTV",
    text: "One of the most reliable IPTV players in the LG Content Store. Fast channel switching, clear EPG, and straightforward M3U / Xtream setup.",
  },
  {
    name: "Net IPTV",
    text: "Popular webOS application with an organized channel interface. Activation is done easily via your LG TV's MAC address.",
  },
  {
    name: "Smart IPTV (SIPTV)",
    text: "The classic IPTV player on LG TVs. Loads playlists directly via web upload to the developer portal. Highly stable for live television.",
  },
  {
    name: "SS IPTV",
    text: "Free alternative for LG webOS offering flexible playlist management and multi-format video stream support.",
  },
];

const faq = [
  {
    q: "Which is the best IPTV app for LG Smart TV?",
    a: "On LG webOS TVs, SmartOne IPTV, Net IPTV, and Smart IPTV (SIPTV) are among the most stable and feature-complete apps. They can be installed directly from the LG Content Store.",
  },
  {
    q: "Do I need a separate receiver or streaming box for my LG TV?",
    a: "No. If your LG Smart TV runs webOS with an internet connection, you can stream IPTV directly through an app without any additional hardware.",
  },
  {
    q: "Does my LG TV support 4K & HD streaming with StreamGermany4K?",
    a: "Yes, all 4K-capable LG Smart TVs display IPTV streams in native 4K and Full HD resolution, provided your internet connection is sufficiently fast (16–25+ Mbps recommended).",
  },
];

export default function LgSmartTvEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
            { name: "LG Smart TV", path: "/en/iptv-lg-smart-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Tv className="w-4 h-4" />
            LG webOS Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Up IPTV on <span className="text-brand-accent">LG Smart TV</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            LG TVs running webOS are ideally suited for IPTV streaming in crystal-clear 4K quality. Discover which
            apps work best in the LG Content Store and how to get StreamGermany4K running in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Guide for LG webOS</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Open LG Content Store</h3>
                <p className="text-brand-text">
                  Press the Home button on your LG Magic Remote and launch the LG Content Store / Apps section.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Search for an IPTV Player App</h3>
                <p className="text-brand-text">
                  Search for a compatible player such as <strong>SmartOne IPTV</strong> or <strong>Net IPTV</strong> and install it on your LG TV.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Enter Credentials (M3U / Xtream)</h3>
                <p className="text-brand-text">
                  Open the app and input the access credentials you received after{" "}
                  <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
                    ordering your StreamGermany4K plan
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Recommended IPTV Apps for LG Smart TV</h2>
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

      <Faq items={faq} heading="Frequently Asked Questions about LG TVs" />

      <Cta
        heading="Ready for 4K IPTV on Your LG Smart TV?"
        text="Get started immediately with StreamGermany4K and enjoy Live TV & VOD on your LG screen."
        primaryLabel="Plans & Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
