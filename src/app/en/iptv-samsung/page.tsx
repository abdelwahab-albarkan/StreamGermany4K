import Link from "next/link";
import Image from "next/image";
import { Tv, Download, KeyRound, Gauge, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV on Samsung Smart TV: Setup, Apps & Compatibility",
  description:
    "Set up IPTV on your Samsung Smart TV (Tizen): find a compatible app in the Smart Hub, enter credentials, and stream in 4K. Includes solutions when no IPTV app is available.",
  path: "/iptv-samsung",
  locale: "en",
});

const steps = [
  {
    icon: Download,
    title: "1. Find App in Smart Hub",
    text: "Open Smart Hub or Samsung Apps on your Samsung TV and search for a compatible IPTV player. App availability depends on model year and Tizen OS version.",
  },
  {
    icon: KeyRound,
    title: "2. Enter Access Credentials",
    text: "Launch the app and enter your StreamGermany4K credentials (M3U link or Xtream codes login). Your channel list and EPG will load automatically.",
  },
  {
    icon: Gauge,
    title: "3. Watch in 4K / HD",
    text: "4K playback is supported on Samsung UHD models whenever content and broadband speeds permit. A stable high-speed connection is recommended.",
  },
];

const troubleshooting = [
  "No IPTV app in Smart Hub: Older or restricted Tizen versions offer fewer apps. In this case, simply connect a streaming stick to an HDMI port.",
  "Buffering / stuttering: Check your connection – prefer a LAN Ethernet cable or strong 5GHz Wi-Fi, and pause bandwidth-heavy background downloads.",
  "App does not start / outdated: Update TV firmware and app version, or power cycle the TV (unplug from wall socket for 30 seconds).",
  "Black screen / no stream: Verify credentials and subscription validity, then refresh the playlist in the app.",
];

const faq = [
  {
    q: "Does IPTV work on every Samsung Smart TV?",
    a: "Samsung Smart TVs run on Tizen OS. Many models support installing an IPTV app from the Smart Hub; older models with restricted app stores can be easily upgraded with an affordable HDMI streaming stick.",
  },
  {
    q: "What should I do if no IPTV app is available in the Smart Hub?",
    a: "Connect an Amazon Fire TV Stick or Google TV device to an HDMI port and install the IPTV app there. This enables full IPTV functionality regardless of your TV model year.",
  },
  {
    q: "Does Samsung TV support 4K streaming?",
    a: "Yes, on Samsung UHD/4K models with a sufficiently fast broadband connection (25+ Mbps recommended). HD models will stream smoothly in 1080p Full HD.",
  },
];

export default function IptvSamsungEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
            { name: "Samsung Smart TV", path: "/en/iptv-samsung" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV on <span className="text-brand-accent">Samsung Smart TV</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Samsung Smart TVs run on the Tizen operating system. For IPTV, you can install a compatible player app
              directly from the Smart Hub without extra hardware if supported by your model. Here is how to configure
              StreamGermany4K on your Samsung TV.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-gray/50 mb-16">
          <Image
            src="/images/iptv-samsung-tv-setup.jpg"
            alt="Setting up IPTV on a Samsung Smart TV"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="glass rounded-2xl border border-brand-gray/50 p-6 mb-16 max-w-3xl flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
            <Tv className="w-6 h-6 text-brand-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Compatibility</h2>
            <p className="text-brand-text text-sm leading-relaxed">
              Samsung Smart TVs running Tizen with access to the Smart Hub. Available player apps vary by model year and
              software version – older models can be retrofitted with an HDMI streaming stick.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Setup in 3 Easy Steps</h2>
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
            <AlertTriangle className="w-6 h-6 text-brand-accent" /> Common Issues &amp; Solutions
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
            Prefer an external device? Check our{" "}
            <Link href="/en/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire TV Stick Guide</Link>{" "}
            for HDMI streaming. View all supported platforms in the{" "}
            <Link href="/en/devices" className="text-brand-accent hover:underline">Device Overview</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about Samsung Smart TV" />

      <Cta
        heading="Get Your Samsung TV Ready"
        text="Get your instant credentials and configure StreamGermany4K on your Samsung Smart TV today."
        primaryLabel="Buy IPTV"
        primaryHref="/en/order"
        secondaryLabel="View Plans"
        secondaryHref="/en/pricing"
      />
    </div>
  );
}
