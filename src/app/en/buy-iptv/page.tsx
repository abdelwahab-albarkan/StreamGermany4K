import Link from "next/link";
import { ShoppingCart, KeyRound, Download, PlayCircle, Wifi, MonitorSmartphone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Buy IPTV: Order Flow, Payment, and Setup Step by Step",
  description:
    "Buy IPTV online at StreamGermany4K: Choose a plan, pay securely, receive access credentials, and set up in minutes. Complete ordering walkthrough.",
  path: "/en/buy-iptv",
  locale: "en",
});

const steps = [
  { icon: ShoppingCart, title: "1. Select Plan", text: "Choose the subscription period on our pricing page that matches your habits – from 3 months to 1 year." },
  { icon: KeyRound, title: "2. Order & Pay", text: "Complete your order with your preferred payment method on the order page." },
  { icon: Download, title: "3. Receive Credentials", text: "Receive your access details along with simple installation instructions for your device." },
  { icon: PlayCircle, title: "4. Install & Stream", text: "Install your IPTV player app, enter your credentials, and start streaming in 4K/HD." },
];

const requirements = [
  { icon: Wifi, title: "Stable Internet Connection", text: "For smooth streaming in HD/4K, a fast, reliable internet connection via Ethernet LAN or strong Wi-Fi is recommended." },
  { icon: MonitorSmartphone, title: "Compatible Device", text: "Smart TV (Samsung, LG), Amazon Fire TV Stick, Android/Google TV, iOS, Windows, or Mac with an IPTV player app." },
];

const faq = [
  {
    q: "How do I purchase an IPTV subscription?",
    a: "Select your desired plan, submit your order via WhatsApp, and receive your credentials and setup instructions. Then configure your player app and begin streaming.",
  },
  {
    q: "How quickly is my access activated?",
    a: "You will typically receive your credentials promptly after placing your order, allowing you to configure your app immediately.",
  },
  {
    q: "Which devices can I use for streaming?",
    a: "Any supported hardware: Smart TVs, Fire TV Sticks, Android/Google TV devices, iOS (iPhone/iPad), Windows PCs, and Mac.",
  },
  {
    q: "What is the refund policy?",
    a: "Details on refunds and cancellations can be found in our Refund Policy. Please review the terms applicable to digital content access.",
  },
];

export default function EnglishBuyIptvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Buy IPTV", path: "/en/buy-iptv" },
          ]}
        />

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Buy IPTV Online – <span className="text-brand-accent">Simple &amp; Fast</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Purchasing an IPTV subscription with StreamGermany4K is simple: choose your duration,
              complete your order, and configure your preferred streaming app in minutes.
            </p>
            <p>
              Unsure which package fits best? Review our{" "}
              <Link href="/en/pricing" className="text-brand-accent hover:underline">Pricing Page</Link>,{" "}
              <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">IPTV Comparison</Link>, and{" "}
              <Link href="/en/iptv-providers" className="text-brand-accent hover:underline">Providers Guide</Link>{" "}
              for complete guidance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">4 Simple Steps to Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What You Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          {requirements.map((r) => (
            <div key={r.title} className="glass rounded-2xl border border-brand-gray/50 p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Faq items={faq} heading="Buying &amp; Setup FAQ" />

      <Cta
        heading="Ready to Start Streaming?"
        text="Choose your plan and complete your order in a few simple steps via WhatsApp."
        primaryLabel="Order Now"
        primaryHref="/en/order"
        secondaryLabel="View Pricing"
        secondaryHref="/en/pricing"
      />
    </div>
  );
}
