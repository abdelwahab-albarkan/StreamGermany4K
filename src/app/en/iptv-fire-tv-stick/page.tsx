import Link from "next/link";
import Image from "next/image";
import { Cpu, Download, KeyRound, Gauge, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV on Amazon Fire TV Stick: Installation, Apps & Setup Guide",
  description:
    "How to use IPTV on the Amazon Fire TV Stick: Compatible models, installing player apps via Appstore or Downloader, entering credentials, and streaming in 4K with troubleshooting tips.",
  path: "/en/iptv-fire-tv-stick",
  locale: "en",
});

const steps = [
  { icon: Download, title: "1. Install IPTV App", text: "Open the Amazon Appstore and search for a compatible IPTV player. If your preferred app is not listed, install it via the Downloader app (ensure developer options are enabled)." },
  { icon: KeyRound, title: "2. Enter Credentials", text: "Launch the app and enter your StreamGermany4K login details (via M3U URL or Xtream API credentials). The app will load your channel list and EPG guide." },
  { icon: Gauge, title: "3. Stream in 4K/HD", text: "Select a channel and enjoy live TV, sports, or movies. 4K playback is supported on Fire TV Stick 4K and 4K Max models." },
];

const troubleshooting = [
  "Buffering/stuttering: Verify your Wi-Fi signal (prefer 5 GHz) or use an optional Ethernet adapter for wired stability, and pause background downloads.",
  "App freezing: Restart the Fire TV device and clear the app cache in Fire OS Settings > Applications.",
  "No signal / channel error: Check credential expiration and refresh the M3U or Xtream playlist in the app settings.",
  "4K playback issues: Ensure your television HDMI port supports HDCP 2.2 and your internet connection has sufficient bandwidth.",
];

const faq = [
  {
    q: "Which Fire TV models are supported?",
    a: "All models running Fire OS: Fire TV Stick (including Lite), Fire TV Stick 4K, 4K Max, and Fire TV Cube. 4K playback requires a 4K-capable hardware model.",
  },
  {
    q: "How do I sideload an IPTV app not in the Appstore?",
    a: "Install the official 'Downloader' app from the Amazon Appstore, permit installation from unknown sources in Fire TV settings, and download the APK from the app provider's verified source.",
  },
  {
    q: "Why might video stutter on Fire TV Sticks?",
    a: "Usually local wireless congestion. A 5 GHz Wi-Fi band or an Ethernet adapter provides significant stability improvements.",
  },
];

export default function EnglishIptvFireTvStickPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
            { name: "Fire TV Stick", path: "/en/iptv-fire-tv-stick" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV on the <span className="text-brand-accent">Amazon Fire TV Stick</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              The Amazon Fire TV Stick is one of the most accessible ways to bring IPTV to any television:
              affordable, compact, and quick to set up. Since Fire OS is based on Android, popular IPTV player
              apps can be installed directly from the Appstore or sideloaded.
            </p>
            <p>
              Here is how to set up StreamGermany4K on your Fire TV Stick step by step, with practical quality and
              troubleshooting tips.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-fire-tv-stick.jpg"
            alt="IPTV setup on Amazon Fire TV Stick"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="glass rounded-2xl border border-brand-gray/50 p-6 mb-16 max-w-3xl flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6 text-brand-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Hardware Compatibility</h2>
            <p className="text-brand-text text-sm leading-relaxed">
              Fire TV Stick (Lite), Fire TV Stick 4K, 4K Max, and Fire TV Cube – all running Fire OS. A steady
              internet connection is recommended; an optional Ethernet adapter provides the best stability.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Setup in 3 Simple Steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-brand-accent" /> Troubleshooting &amp; Tips
          </h2>
          <ul className="space-y-3">
            {troubleshooting.map((t) => (
              <li key={t} className="flex items-start gap-3 text-brand-text">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-text leading-relaxed mt-6">
            Explore other devices in our{" "}
            <Link href="/en/devices" className="text-brand-accent hover:underline">Devices Overview</Link>{" "}
            – such as{" "}
            <Link href="/en/iptv-samsung" className="text-brand-accent hover:underline">IPTV on Samsung Smart TV</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Fire TV Stick IPTV FAQ" />

      <Cta
        heading="Get Your Fire TV Stick Ready"
        text="Receive your credentials and start streaming on your Amazon Fire TV Stick in minutes."
        primaryLabel="Buy IPTV"
        primaryHref="/en/order"
        secondaryLabel="View Pricing"
        secondaryHref="/en/pricing"
      />
    </div>
  );
}
