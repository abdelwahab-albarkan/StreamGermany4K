import Link from "next/link";
import { Wifi, MonitorSmartphone, Server, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Reviews: What Customer Feedback Really Tells You",
  description:
    "How to interpret IPTV reviews and ratings objectively: Key factors influencing streaming performance, reading reviews critically, and setting realistic expectations.",
  path: "/en/iptv-reviews",
  locale: "en",
});

const factors = [
  { icon: Wifi, title: "Your Local Connection", text: "The single biggest factor: Smooth HD/4K streaming requires a fast, low-latency connection. The same app can perform very differently across networks." },
  { icon: Server, title: "Server & Network Infrastructure", text: "A provider's true infrastructure quality is revealed during evening prime time – that is when real reliability separates from marketing hype." },
  { icon: MonitorSmartphone, title: "Device & App Setup", text: "Hardware, player app, and correct configuration significantly impact playback. An outdated device or misconfigured buffer can cause issues unrelated to the stream." },
  { icon: Search, title: "Source Authenticity", text: "The IPTV space is rife with fake or sponsored reviews. Look for concrete, verifiable descriptions – generic praise without specifics means very little." },
];

const faq = [
  {
    q: "What factors determine my IPTV experience?",
    a: "Primarily your internet connection, hardware capability, player app configuration, and the provider's server stability. This is why two users on different networks can have varying experiences.",
  },
  {
    q: "How reliable are online IPTV reviews?",
    a: "Varying. Many online ratings are incentivized or fabricated. Focus on detailed, balanced feedback rather than aggregate star ratings, and test the service directly.",
  },
  {
    q: "Does StreamGermany4K display customer reviews?",
    a: "We deliberately avoid staged testimonials or fabricated 5-star ratings. We emphasize verified technical information, multi-device support, transparent pricing, and direct self-evaluation.",
  },
];

export default function EnglishIptvReviewsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Reviews", path: "/en/iptv-reviews" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Reviews: <span className="text-brand-accent">How to Evaluate Feedback Critically</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              When researching IPTV reviews, viewers want to know what to genuinely expect. The honest
              reality is that user experience depends heavily on variables outside the provider&apos;s direct control
              – notably local internet bandwidth, router stability, and player app setup.
            </p>
            <p>
              This guide helps you analyze reviews critically and set realistic expectations. Learn how to
              test streaming quality in our{" "}
              <Link href="/en/iptv-test" className="text-brand-accent hover:underline">
                IPTV Test Guide
              </Link>
              .
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What Truly Shapes the IPTV Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {factors.map((f) => (
            <div key={f.title} className="glass rounded-2xl border border-brand-gray/50 p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center shrink-0">
                <f.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Forming Your Own Assessment</h2>
          <p>
            Third-party reviews provide helpful orientation, but nothing replaces personal testing. Utilize the
            criteria in our{" "}
            <Link href="/en/iptv-providers" className="text-brand-accent hover:underline">
              Providers Guide
            </Link>
            , compare features in our{" "}
            <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">
              IPTV Comparison
            </Link>
            , and review available durations on the{" "}
            <Link href="/en/pricing" className="text-brand-accent hover:underline">
              Pricing Page
            </Link>
            .
          </p>
        </div>
      </div>

      <Faq items={faq} heading="IPTV Reviews &amp; Ratings FAQ" />

      <Cta
        heading="Form Your Own First-Hand Impression"
        text="Rather than relying solely on third-party reviews: evaluate StreamGermany4K with our flexible 3-month plan."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="IPTV Test Guide"
        secondaryHref="/en/iptv-test"
      />
    </div>
  );
}
