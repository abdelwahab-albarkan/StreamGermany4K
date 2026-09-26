import Link from "next/link";
import { Terminal, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kodi IPTV Addons & PVR Simple Client Setup (2026 Guide)",
  description:
    "Addons for Kodi & PVR IPTV Simple Client: Step-by-step setup for Kodi 20/21 Nexus & Omega, M3U playlist integration & EPG configuration.",
  path: "/kodi-iptv-addons",
  locale: "en",
});

const features = [
  { title: "PVR IPTV Simple Client", text: "The official, built-in Kodi addon for high-performance playback of M3U playlists and EPG XMLTV guides." },
  { title: "Kodi 20 & 21 Compatibility", text: "Fully optimized for current Kodi releases (Nexus & Omega) across Windows, Android TV, and Linux." },
  { title: "Custom Skin Adaptability", text: "Kodi allows full interface customization with community skins (such as Titan, Amber, or Arctic Horizon)." },
  { title: "EPG & Channel Logo Sync", text: "Automatically pulls electronic TV guide metadata and broadcaster logos in the background." },
];

const faq = [
  {
    q: "Which Kodi addon is best for IPTV?",
    a: "PVR IPTV Simple Client is the official, most stable PVR client for Kodi. It is included natively in the official Kodi repository.",
  },
  {
    q: "On which operating systems can I install Kodi?",
    a: "Kodi runs on Windows, macOS, Android TV, Amazon Fire TV Stick, Linux, and Raspberry Pi.",
  },
  {
    q: "Do I need unofficial third-party repositories for PVR IPTV Simple Client?",
    a: "No. PVR IPTV Simple Client is part of standard Kodi and simply needs to be enabled under 'PVR Clients'.",
  },
];

export default function KodiAddonsEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Apps", path: "/en/iptv-apps" },
            { name: "Kodi IPTV Addons", path: "/en/kodi-iptv-addons" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <Terminal className="w-4 h-4" />
            Kodi PVR Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-accent">Kodi IPTV Addons</span> &amp; PVR Simple Client
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Kodi is the most capable open-source media center for power users. With the built-in{" "}
            <strong>PVR IPTV Simple Client</strong>, transform Kodi into a full-fledged TV entertainment hub with M3U support and EPG.
          </p>
        </div>

        <div className="glass rounded-2xl border border-brand-accent/30 p-5 mb-14 max-w-3xl">
          <p className="text-brand-text text-sm leading-relaxed">
            <strong className="text-white">Note:</strong> This guide strictly utilizes the official{" "}
            <strong>PVR IPTV Simple Client</strong> included with Kodi along with your authorized StreamGermany4K subscription. We do not endorse unofficial third-party add-ons for unauthorized streaming.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Highlights of Kodi IPTV Integration</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">Setup in PVR IPTV Simple Client</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Navigate to Add-ons &gt; PVR Clients</h3>
                <p className="text-brand-text">
                  In Kodi Settings, go to <strong>Add-ons &gt; Install from repository &gt; PVR clients</strong> and select <strong>PVR IPTV Simple Client</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Add M3U URL in Configuration</h3>
                <p className="text-brand-text">
                  Click &quot;Configure&quot;, go to the &quot;General&quot; tab, and enter the M3U playlist URL from your{" "}
                  <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
                    StreamGermany4K plan
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Restart Kodi &amp; Access TV Menu</h3>
                <p className="text-brand-text">
                  Enable the add-on and restart Kodi. The &quot;TV&quot; section on the main menu will now display all your live channels and TV guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about Kodi IPTV" />

      <Cta
        heading="Integrate StreamGermany4K into Your Kodi Setup"
        text="Reliable M3U streaming for PVR IPTV Simple Client in crisp 4K quality."
        primaryLabel="Plans & Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
