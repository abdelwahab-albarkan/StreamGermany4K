import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Set up TiviMate IPTV Player: EPG, Multi-View & Xtream Codes (2026)",
  description:
    "Configure TiviMate IPTV Player on Fire TV Stick & Android TV: EPG setup, Xtream Codes login, and performance tips for buffer-free streaming.",
  path: "/iptv-tivimate",
  locale: "en",
});

const features = [
  { title: "Classic Cable/Sat TV Grid", text: "TiviMate features the most polished EPG grid layout modeled after traditional high-end satellite receivers." },
  { title: "Multi-View / Picture-in-Picture", text: "Watch up to 4 live streams concurrently on one display – perfect for simultaneous sports matches." },
  { title: "Multiple Playlist Management", text: "Combine multiple M3U playlists or Xtream Codes accounts seamlessly within a single interface." },
  { title: "Catch-Up & Replay Support", text: "Full integration for time-shifted TV, catch-up programs, and provider archive replays." },
];

const faq = [
  {
    q: "What is TiviMate IPTV Player?",
    a: "TiviMate is widely considered the gold standard of IPTV player applications designed specifically for Android TV, Google TV, and Amazon Fire TV devices.",
  },
  {
    q: "Do I need TiviMate Premium for StreamGermany4K?",
    a: "No, the free tier of TiviMate works great for watching live channels. The optional Premium upgrade unlocks multi-view, recording, and advanced EPG customizations.",
  },
  {
    q: "How do I add StreamGermany4K to TiviMate?",
    a: "Open TiviMate, select 'Add Playlist', choose 'Xtream Codes', and enter the Server URL, Username, and Password from your subscription confirmation.",
  },
];

export default function TivimateEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Apps", path: "/en/iptv-apps" },
            { name: "TiviMate IPTV Player", path: "/en/iptv-tivimate" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            TiviMate Setup Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Up &amp; Optimize <span className="text-brand-accent">TiviMate IPTV Player</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            TiviMate is renowned worldwide as the benchmark IPTV player for Android-based hardware such as the{" "}
            <Link href="/en/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Amazon Fire TV Stick</Link>{" "}
            and <Link href="/en/iptv-android-tv" className="text-brand-accent hover:underline">Android TV Boxes</Link>.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why TiviMate is the Top Choice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Configuring TiviMate with Xtream Codes</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Launch TiviMate</h3>
                <p className="text-brand-text">
                  On the start screen, select &quot;Add Playlist&quot;.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Select Xtream Codes Login</h3>
                <p className="text-brand-text">
                  Enter your Server URL, Username, and Password received with your{" "}
                  <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
                    StreamGermany4K order
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Apply &amp; Enjoy Live EPG</h3>
                <p className="text-brand-text">
                  Click &quot;Process&quot;. TiviMate immediately downloads your German channel lineup and electronic TV guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about TiviMate" />

      <Cta
        heading="Combine TiviMate with StreamGermany4K 4K Streams"
        text="Unlock the full potential of TiviMate with blazing-fast European streaming infrastructure."
        primaryLabel="View Plans"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
