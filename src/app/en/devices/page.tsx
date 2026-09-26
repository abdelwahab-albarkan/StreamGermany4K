import Link from "next/link";
import Image from "next/image";
import { Download, KeyRound, PlayCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV on All Devices: Smart TV, Fire TV Stick, Mobile & More",
  description:
    "Which devices work with StreamGermany4K? Overview of Smart TVs (Samsung, LG), Fire TV Stick, Apple TV, Android TV, smartphones, tablets, and computers – ready in 3 steps.",
  path: "/en/devices",
  locale: "en",
});

const categories = [
  {
    img: "/images/iptv-live-tv-wohnzimmer.jpg",
    imgAlt: "IPTV on living room Smart TV",
    title: "Smart TV",
    text: "Samsung (Tizen), LG (webOS), Sony, Philips, and Hisense: Most smart televisions run IPTV apps downloaded directly from their app stores.",
    href: "/en/iptv-samsung",
    linkLabel: "IPTV on Samsung Smart TV",
  },
  {
    img: "/images/iptv-fire-tv-stick.jpg",
    imgAlt: "IPTV via streaming stick on television",
    title: "Streaming Sticks & Boxes",
    text: "Amazon Fire TV Stick, Apple TV, Android/Google TV devices, NVIDIA Shield, and Android TV boxes upgrade any display into an IPTV hub.",
    href: "/en/iptv-fire-tv-stick",
    linkLabel: "IPTV on Fire TV Stick",
  },
  {
    img: "/images/iptv-multi-geraete.jpg",
    imgAlt: "IPTV on mobile devices and tablets",
    title: "Smartphones & Tablets",
    text: "Stream on iPhone, iPad, and Android smartphones and tablets using compatible player apps from the App Store and Google Play.",
    href: "/en/iptv-apple-tv",
    linkLabel: "IPTV on Apple Devices",
  },
  {
    img: "/images/iptv-windows-pc.jpg",
    imgAlt: "IPTV on Windows PC and Mac",
    title: "Computers & Laptops",
    text: "Watch on Windows and macOS using IPTV player software or web players – ideal for desktop and laptop setups.",
    href: null,
    linkLabel: null,
  },
];

const steps = [
  { icon: Download, title: "1. Install IPTV App", text: "Download a compatible IPTV player application from your device's official app store." },
  { icon: KeyRound, title: "2. Enter Credentials", text: "Input your StreamGermany4K login credentials into the app – configuration takes just a few minutes." },
  { icon: PlayCircle, title: "3. Start Streaming", text: "Enjoy live TV channels, sports, and movies in 4K/HD – at home or on the go." },
];

const faq = [
  {
    q: "Which devices support StreamGermany4K?",
    a: "All common devices with an IPTV player app: Smart TVs (Samsung, LG, Sony, Philips), Amazon Fire TV Stick, Apple TV, Android/Google TV, Android boxes, iPhone/iPad, Android phones, Windows PCs, and macOS.",
  },
  {
    q: "Do I need special hardware?",
    a: "No special equipment is required. Any compatible device with an IPTV app and stable internet connection is sufficient.",
  },
  {
    q: "How many devices can stream concurrently?",
    a: "The number of simultaneous streams depends on your selected plan. View our Pricing Page for specific details.",
  },
  {
    q: "What helps reduce buffering on streaming devices?",
    a: "Use an Ethernet cable or strong 5 GHz Wi-Fi, restart the app and device, and ensure sufficient broadband speed for 4K streams.",
  },
];

export default function EnglishDevicesPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Devices", path: "/en/devices" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV on <span className="text-brand-accent">Your Favorite Devices</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              StreamGermany4K is device-agnostic: Whether on Smart TVs, streaming sticks, smartphones, or computers –
              with a compatible player app and your login details, you can stream Live TV, sports, and movies in 4K/HD.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Supported Hardware Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {categories.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 overflow-hidden">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 640px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed mb-3">{c.text}</p>
                {c.href && c.linkLabel && (
                  <Link href={c.href} className="inline-flex items-center gap-1 text-sm text-brand-accent hover:underline">
                    {c.linkLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How IPTV Works on Any Device</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
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
        <p className="text-brand-text leading-relaxed max-w-3xl">
          Dedicated device guides:{" "}
          <Link href="/en/iptv-fire-tv-stick" className="text-brand-accent hover:underline">Fire TV Stick</Link> • {" "}
          <Link href="/en/iptv-samsung" className="text-brand-accent hover:underline">Samsung Smart TV</Link> • {" "}
          <Link href="/en/iptv-lg-smart-tv" className="text-brand-accent hover:underline">LG Smart TV</Link> • {" "}
          <Link href="/en/iptv-apple-tv" className="text-brand-accent hover:underline">Apple TV & iOS</Link> • {" "}
          <Link href="/en/iptv-android-tv" className="text-brand-accent hover:underline">Android TV & Boxes</Link>.
          Explore our recommended apps in{" "}
          <Link href="/en/iptv-apps" className="text-brand-accent hover:underline">Best IPTV Apps</Link>.
          Ready to order? Visit{" "}
          <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">Buy IPTV</Link>{" "}
          to get your credentials.
        </p>
      </div>

      <Faq items={faq} heading="Devices &amp; Setup FAQ" />

      <Cta
        heading="Ready to Stream on Your Device in Minutes"
        text="Choose your plan and set up StreamGermany4K on Smart TVs, streaming sticks, mobile devices, or computers."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
