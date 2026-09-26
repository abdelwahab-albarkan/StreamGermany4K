import Link from "next/link";
import { Gauge, ListVideo, MonitorSmartphone, CalendarClock, BadgeDollarSign, CreditCard, Headphones, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Providers Germany: Key Criteria for Choosing the Right Service",
  description:
    "How to recognize a top IPTV provider in Germany: Key criteria including quality, channel scope, devices, EPG, pricing, support, and legal transparency.",
  path: "/en/iptv-providers",
  locale: "en",
});

const criteria = [
  { icon: Gauge, title: "Quality & Stability", text: "Smooth streaming without persistent buffering, stable server infrastructure, and consistent picture quality up to 4K are paramount." },
  { icon: ListVideo, title: "Channels & VOD Catalogue", text: "Does the package include the live TV channels and on-demand movies/series that match your interests – including German TV and live sports?" },
  { icon: MonitorSmartphone, title: "Device Compatibility", text: "Does the service run reliably across popular player apps on your hardware – Smart TV, Fire TV, Android, iOS, Windows, or Mac?" },
  { icon: CalendarClock, title: "EPG & Navigation", text: "An up-to-date Electronic Program Guide (EPG), intuitive channel categorization, and catch-up features make daily viewing effortless." },
  { icon: BadgeDollarSign, title: "Pricing & Duration", text: "Transparent pricing without hidden fees or surprise renewals – short durations for testing, longer subscriptions for maximum value." },
  { icon: CreditCard, title: "Secure Payment", text: "Trusted, transparent payment methods and clear terms create peace of mind." },
  { icon: Headphones, title: "Support & Availability", text: "Responsive customer support to assist with initial application setup and technical troubleshooting." },
  { icon: Scale, title: "Transparency & Trust", text: "Reputable providers communicate clearly. Stream legal content and beware of unrealistic 'everything-for-nothing' offers." },
];

const faq = [
  {
    q: "How do I recognize a good IPTV provider?",
    a: "Look for a proven combination of streaming stability, broad channel and VOD coverage, wide device support, up-to-date EPG guides, transparent pricing, and responsive customer support.",
  },
  {
    q: "How many devices can I stream on simultaneously?",
    a: "This depends on the plan chosen – the number of simultaneous streams varies per tier. Review the Pricing and Comparison pages for exact details.",
  },
  {
    q: "Is IPTV legal in Germany?",
    a: "IPTV technology itself is completely legal. The legality depends on streaming properly licensed broadcasts. Choose transparent providers and avoid shady, unrealistic offers.",
  },
];

export default function EnglishIptvProvidersPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Providers", path: "/en/iptv-providers" },
          ]}
        />

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Providers in Germany: <span className="text-brand-accent">What Really Matters</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              The market for IPTV services is vast – and marketing claims often sound identical. Finding the
              right provider requires looking past surface pricing to evaluate concrete, verifiable criteria.
            </p>
            <p>
              StreamGermany4K is a premium IPTV service optimized for the German market. The criteria below
              will help you evaluate providers objectively. For recommendations based on viewing habits,
              explore our{" "}
              <Link href="/en/best-iptv" className="text-brand-accent hover:underline">
                Best IPTV Provider
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Evaluation Criteria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">How StreamGermany4K Performs</h2>
          <p>
            StreamGermany4K focuses on reliable streaming quality in 4K and HD, broad compatibility across
            standard player apps, and straightforward setup walkthroughs. Explore detailed features on our{" "}
            <Link href="/en/features" className="text-brand-accent hover:underline">
              Features Page
            </Link>
            , or compare durations on the{" "}
            <Link href="/en/pricing" className="text-brand-accent hover:underline">
              Pricing Page
            </Link>
            . A side-by-side plan breakdown is available in our{" "}
            <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">
              IPTV Comparison
            </Link>
            .
          </p>
          <p>
            Want to test performance? Our{" "}
            <Link href="/en/iptv-test" className="text-brand-accent hover:underline">
              IPTV Test Guide
            </Link>{" "}
            explains how to verify streaming quality, while{" "}
            <Link href="/en/iptv-reviews" className="text-brand-accent hover:underline">
              IPTV Reviews
            </Link>{" "}
            provides authentic customer feedback insights. When you are ready to start, our{" "}
            <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
              Buy IPTV
            </Link>{" "}
            guide assists with ordering, payment, and setup.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Questions About Choosing a Provider" />

      <Cta
        heading="Evaluated the Criteria? Get Started."
        text="Review available plans or start streaming with StreamGermany4K today."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
