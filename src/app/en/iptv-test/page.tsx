import Link from "next/link";
import { Eye, Signal, ListChecks, Clock, ShieldQuestion } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV Test: How to Evaluate Streaming Quality & Providers",
  description:
    "IPTV testing guide: Key criteria when evaluating an IPTV provider, and how to verify streaming stability. Note: No free trials currently available.",
  path: "/en/iptv-test",
  locale: "en",
});

const checkpoints = [
  { icon: Eye, title: "Picture & Audio Quality", text: "Verify that streams deliver true advertised resolution (up to 4K) and that audio remains cleanly synchronized across channels." },
  { icon: Signal, title: "Daylong Stability", text: "Test at different times of day, particularly during evening prime time. Quality IPTV maintains smooth playback even under heavy network load." },
  { icon: ListChecks, title: "Channels, VOD & EPG", text: "Check whether your essential live channels are present, the VOD library is functional, and the TV guide (EPG) is accurate." },
  { icon: Clock, title: "Devices & Installation", text: "Confirm the service runs smoothly on your hardware (Smart TV, Fire TV, Android, iOS, PC) with clear setup guides." },
  { icon: ShieldQuestion, title: "Customer Support Responsiveness", text: "Reach out with a preliminary question before committing, observing how prompt and helpful the response is." },
];

const faq = [
  {
    q: "Does StreamGermany4K offer a free trial?",
    a: "We currently do not offer a free trial or test period. You can evaluate StreamGermany4K with our flexible 3-month plan with no long-term contract lock-in.",
  },
  {
    q: "What should I look for during an IPTV evaluation?",
    a: "Focus on streaming consistency throughout the day, channel/VOD catalogue completeness, EPG reliability, hardware compatibility, and responsive support.",
  },
  {
    q: "How long should an evaluation last?",
    a: "Ideally over several days and during peak evening hours, ensuring you observe performance under actual prime-time traffic conditions.",
  },
  {
    q: "Are free IPTV services a good alternative?",
    a: "Steer clear of completely free or unrealistically cheap 'all-inclusive' offers: they are often unstable, intrusive, or legally questionable.",
  },
];

export default function EnglishIptvTestPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Test", path: "/en/iptv-test" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Test: <span className="text-brand-accent">How to Evaluate Quality &amp; Providers</span>
          </h1>
          <div className="space-y-4 text-brand-text text-lg leading-relaxed">
            <p>
              Before choosing an IPTV service, structured testing is worthwhile. A thorough evaluation examines
              picture quality, server stability, channel breadth, VOD offerings, and support responsiveness.
            </p>
            <p>
              We do not offer a free trial. You can test StreamGermany4K with our flexible 3-month plan. View all
              durations and prices on our{" "}
              <Link href="/en/pricing" className="text-brand-accent hover:underline">
                Pricing Page
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="glass rounded-xl border border-brand-accent/30 p-5 mb-14 max-w-3xl">
          <p className="text-brand-text text-sm leading-relaxed">
            <strong className="text-white">Note:</strong> &quot;IPTV Test&quot; refers to{" "}
            <strong className="text-white">evaluating and verifying</strong> streaming quality – not a free trial.
            Free trial periods are not currently offered.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Evaluation Checkpoints</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {checkpoints.map((c) => (
            <div key={c.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-gray/50 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">From Testing to Choosing</h2>
          <p>
            Review criteria in our{" "}
            <Link href="/en/iptv-providers" className="text-brand-accent hover:underline">
              Providers Guide
            </Link>
            , usage recommendations in{" "}
            <Link href="/en/best-iptv" className="text-brand-accent hover:underline">
              Best IPTV Provider
            </Link>
            , and direct plan comparisons in our{" "}
            <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">
              IPTV Comparison
            </Link>
            .
          </p>
          <p>
            When you are ready, our{" "}
            <Link href="/en/buy-iptv" className="text-brand-accent hover:underline">
              Buy IPTV
            </Link>{" "}
            guide assists with ordering and configuration.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="IPTV Testing FAQ" />

      <Cta
        heading="Evaluate StreamGermany4K"
        text="No free trial is offered – start with our flexible 3-month plan to evaluate quality on your own terms."
        primaryLabel="View Pricing"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
