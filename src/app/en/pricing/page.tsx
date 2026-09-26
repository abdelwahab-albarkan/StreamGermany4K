import { PricingCard } from "@/components/cards/PricingCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { getPlans } from "@/lib/pricing";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IPTV Pricing: Costs and Plans Overview",
  description:
    "How much does IPTV cost? Transparent pricing at StreamGermany4K – 3 plans to choose from. Features and payment clearly explained.",
  path: "/en/pricing",
  locale: "en",
});

const faq = [
  {
    q: "How much does IPTV cost at StreamGermany4K?",
    a: "We offer 3 subscription plans – 3 Months, 6 Months, and 1 Year. Current prices are displayed transparently in the cards above with zero hidden fees.",
  },
  {
    q: "Are there any hidden fees or automatic renewals?",
    a: "No. You pay the exact advertised price for the duration you choose. There is no automatic contract lock-in – once your period ends, you decide whether to extend.",
  },
  {
    q: "Which plan offers the best value?",
    a: "Shorter plans offer more flexibility, while the 1-year plan offers the lowest cost per month. Select the duration that fits your viewing habits.",
  },
  {
    q: "How do I place an order?",
    a: "On our order page, select your plan, application setup preference, and payment method, then complete your order directly via WhatsApp. Next steps are shared in the chat.",
  },
];

export default function EnglishPricingPage() {
  const plans = getPlans("en");

  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "Pricing", path: "/en/pricing" },
          ]}
        />

        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IPTV Prices &amp; <span className="text-brand-accent">Plans</span>
          </h1>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Transparent costs, clear durations, no hidden fees. Choose the plan that fits your viewing
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              planId={plan.id}
              duration={plan.duration}
              features={plan.features}
              isPopular={plan.isPopular}
              badge={plan.badge}
              locale="en"
            />
          ))}
        </div>

        {/* Payment / trust strip */}
        <div className="mt-14">
          <PaymentMethods locale="en" />
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Determines the IPTV Price</h2>
          <div className="space-y-4 text-brand-text leading-relaxed">
            <p>
              The price of an IPTV subscription depends primarily on duration and feature scope. A longer
              duration reduces the cost per month, while a shorter duration provides maximum flexibility.
              Picture quality (up to 4K) and supported devices also factor into your choice.
            </p>
            <p>
              Look not just at the bottom-line price, but at the overall package of quality, streaming
              stability, and responsive customer service. Learn more in our{" "}
              <Link href="/en/iptv-providers" className="text-brand-accent hover:underline">
                Providers Guide
              </Link>
              , or review our structured{" "}
              <Link href="/en/iptv-comparison" className="text-brand-accent hover:underline">
                IPTV Comparison
              </Link>
              . When you are ready, our{" "}
              <Link href="/en/order" className="text-brand-accent hover:underline">
                Order Page
              </Link>{" "}
              guides you through the next steps.
            </p>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Questions About Pricing &amp; Plans" />

      <Cta
        heading="Found the Right Plan?"
        text="Complete your order in a few simple steps and get StreamGermany4K running on your device."
        primaryLabel="Buy IPTV"
        primaryHref="/en/order"
        secondaryLabel="Providers Guide"
        secondaryHref="/en/iptv-providers"
      />
    </div>
  );
}
