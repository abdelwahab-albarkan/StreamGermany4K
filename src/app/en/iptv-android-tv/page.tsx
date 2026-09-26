import Link from "next/link";
import { CheckCircle2, Cpu } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Set up IPTV on Android TV, Google TV & Android Boxes (2026 Guide)",
  description:
    "Install IPTV on Android TV, Google TV, NVIDIA Shield & Smart TV Boxes: TiviMate, XCIPTV, IPTV Smarters Pro guide & tips for buffer-free 4K streaming.",
  path: "/iptv-android-tv",
  locale: "en",
});

const devices = [
  { name: "NVIDIA Shield TV / Pro", text: "The most powerful Android TV streaming box with 4K AI Upscaling for ultra-smooth IPTV performance." },
  { name: "Google Chromecast with Google TV", text: "Cost-effective 4K streaming device with full Google Play Store access and smooth interface." },
  { name: "Android Smart TVs (Sony, Philips, TCL)", text: "Televisions with integrated Android TV or Google TV OS run IPTV players directly with no extra box required." },
  { name: "Xiaomi Mi Box S / TV Stick 4K", text: "Popular Android TV hardware with 4K HDR support and wide app ecosystem compatibility." },
];

const faq = [
  {
    q: "Which is the best IPTV app for Android TV?",
    a: "TiviMate IPTV Player is widely regarded as the best player on Android TV and Google TV, followed closely by IPTV Smarters Pro and XCIPTV.",
  },
  {
    q: "Can I sideload Android TV apps via APK?",
    a: "Yes, Android TV allows straightforward installation of third-party APKs using the Downloader app or a USB flash drive.",
  },
  {
    q: "What internet speed is required for 4K IPTV on Android TV?",
    a: "For reliable, buffer-free 4K streaming, we recommend a stable broadband connection of at least 25 Mbps (ideally connected via LAN cable or 5GHz Wi-Fi).",
  },
];

export default function AndroidTvEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
            { name: "Android TV & Boxes", path: "/en/iptv-android-tv" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            Android TV &amp; Google TV Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Up IPTV on <span className="text-brand-accent">Android TV &amp; Google TV</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Android TV and Google TV offer the most versatile ecosystem for IPTV streaming. With full access to the
            Google Play Store, top player applications like TiviMate are readily available.
          </p>
        </div>

        {/* Devices Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Supported Android TV Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {devices.map((d) => (
            <div key={d.name} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{d.name}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Setup in 3 Simple Steps</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Open Google Play Store</h3>
                <p className="text-brand-text">
                  Search for <Link href="/en/iptv-tivimate" className="text-brand-accent hover:underline">TiviMate</Link> or <Link href="/en/iptv-smarters-pro" className="text-brand-accent hover:underline">IPTV Smarters Pro</Link> and install the app. If you use <Link href="/en/kodi-iptv-addons" className="text-brand-accent hover:underline">Kodi</Link>, you can also configure the PVR Simple Client.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Enter Xtream Codes / M3U</h3>
                <p className="text-brand-text">
                  Select &quot;Xtream Codes API&quot; or &quot;M3U Playlist&quot; as your login method and enter the server details provided by StreamGermany4K.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Enable EPG &amp; Start Streaming</h3>
                <p className="text-brand-text">
                  Once saved, the player automatically synchronizes channels, logos, categories, and the TV guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about Android TV" />

      <Cta
        heading="Start 4K IPTV on Your Android TV Now"
        text="Get your subscription from StreamGermany4K and experience seamless, buffer-free entertainment."
        primaryLabel="Plans & Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
