import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { SITE, stat } from "@/lib/site";
import { getPlans, CURRENCY } from "@/lib/pricing";

export const metadata = pageMetadata({
  title: "IPTV Comparison 2026: Compare Providers, Plans and Features",
  description:
    "IPTV comparison 2026 for Germany: How to systematically compare services and find the ideal subscription. Plus StreamGermany4K plans in direct comparison.",
  path: "/en/iptv-comparison",
  locale: "en",
});

const senderRow = SITE.stats.channels ? `${SITE.stats.channels} Channels` : "Wide Channel Selection";
const plans = getPlans("en");

const rows: { label: string; basic: string | boolean; premium: string | boolean; ultimate: string | boolean }[] = [
  { label: "Price", basic: `${CURRENCY}${plans[0].price}`, premium: `${CURRENCY}${plans[1].price}`, ultimate: `${CURRENCY}${plans[2].price}` },
  { label: "Duration", basic: plans[0].title, premium: plans[1].title, ultimate: plans[2].title },
  { label: "Live Channels", basic: senderRow, premium: senderRow, ultimate: senderRow },
  { label: "Picture Quality", basic: "HD & SD", premium: "up to 4K", ultimate: "up to 4K" },
  { label: "Parallel Devices", basic: "1", premium: "2", ultimate: "3" },
  { label: "Catch-up TV (7 Days)", basic: false, premium: true, ultimate: true },
  { label: "Customer Support", basic: "Standard", premium: "Priority", ultimate: "VIP Priority" },
];

const dimensions = [
  "Picture & streaming stability (up to 4K) with minimal buffering",
  "Tailored channel and on-demand VOD library for your preferences",
  "Broad hardware compatibility (Smart TV, Fire TV, Android, iOS, PC)",
  "Electronic Program Guide (EPG) and catch-up playback features",
  "Flexible durations and value for money – short for testing, long to save",
  "Secure payment options, transparent terms, and responsive support",
];

const faq = [
  {
    q: "How should I compare IPTV providers?",
    a: "Examine services across key criteria – streaming quality, channel/VOD catalogue, device compatibility, EPG reliability, subscription flexibility, and customer support. A direct comparison matrix gives an objective picture rather than looking at price alone.",
  },
  {
    q: "What matters more – price or streaming stability?",
    a: "Both matter, but a low price is meaningless if streams constantly stutter during games or movies. Choose the best all-round package with proven server stability and responsive help.",
  },
  {
    q: "How do StreamGermany4K plans differ?",
    a: "They differ primarily in subscription duration, maximum picture quality (up to 4K), number of simultaneous connections, and support tier. Channel and VOD access is identical across all plans.",
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-brand-accent mx-auto" aria-label="included" />;
  if (value === false) return <Minus className="w-5 h-5 text-brand-text/40 mx-auto" aria-label="not included" />;
  return <span>{value}</span>;
}

export default function EnglishIptvComparisonPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Comparison", path: "/en/iptv-comparison" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Comparison: <span className="text-brand-accent">Compare Plans Side by Side</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              A good IPTV comparison looks far beyond the surface price. Evaluating streaming features
              systematically helps you choose the subscription that matches your viewing habits.
            </p>
            <p>
              Learn about our evaluation framework in the{" "}
              <Link href="/en/iptv-providers" className="text-brand-accent hover:underline">
                Providers Guide
              </Link>
              , view usage-based recommendations under{" "}
              <Link href="/en/best-iptv" className="text-brand-accent hover:underline">
                Best IPTV Provider
              </Link>
              , and explore pricing options on the{" "}
              <Link href="/en/pricing" className="text-brand-accent hover:underline">
                Pricing Page
              </Link>
              .
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">StreamGermany4K Plans Comparison</h2>
        <div className="overflow-x-auto -mx-4 px-4 mb-6">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-brand-gray">
                <th className="py-4 pr-4 font-semibold text-brand-text">Feature</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[0].title}</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[1].title}</th>
                <th className="py-4 px-4 font-bold text-white text-center">{plans[2].title}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-brand-gray/40">
                  <td className="py-3 pr-4 text-brand-text">{r.label}</td>
                  <td className="py-3 px-4 text-center text-white"><Cell value={r.basic} /></td>
                  <td className="py-3 px-4 text-center text-white"><Cell value={r.premium} /></td>
                  <td className="py-3 px-4 text-center text-white bg-brand-accent/5"><Cell value={r.ultimate} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-brand-text/70 mb-16">
          Channel and VOD library access is identical across plans – differences lie in duration, 4K picture quality,
          simultaneous connections, and support tier. View full pricing on the{" "}
          <Link href="/en/pricing" className="text-brand-accent hover:underline">Pricing Page</Link>.
        </p>

        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Key Criteria to Compare</h2>
          <p className="text-brand-text leading-relaxed mb-6">
            Regardless of provider, consider these key dimensions before choosing:
          </p>
          <ul className="space-y-3 mb-6">
            {dimensions.map((d) => (
              <li key={d} className="flex items-start gap-3 text-brand-text">
                <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-text leading-relaxed">
            Learn how to test a provider in practice in our{" "}
            <Link href="/en/iptv-test" className="text-brand-accent hover:underline">IPTV Test Guide</Link>;
            read about authentic user feedback in{" "}
            <Link href="/en/iptv-reviews" className="text-brand-accent hover:underline">IPTV Reviews</Link>.
            When you are ready, our{" "}
            <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">Buy IPTV</Link>{" "}
            guide walks you through ordering and setup. StreamGermany4K delivers{" "}
            {stat(SITE.stats.uptime, "reliable servers")}
            {SITE.stats.uptime ? " uptime" : ""} and smooth playback across all popular devices.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="IPTV Comparison FAQ" />

      <Cta
        heading="Compared Plans? Get Started Today."
        text="Review pricing details or choose the IPTV subscription that fits you best."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
