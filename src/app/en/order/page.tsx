import { Suspense } from "react";
import { OrderForm } from "@/components/order/OrderForm";
import { legalMetadata } from "@/lib/seo";
import { getPlans } from "@/lib/pricing";

// Utility/conversion page — noindex,follow. Excluded from the sitemap.
export const metadata = legalMetadata({
  title: "Order",
  description:
    "Select your plan, app option, and payment method – then complete your order directly via WhatsApp.",
  path: "/en/order",
  locale: "en",
});

export default function EnglishOrderPage() {
  const plans = getPlans("en");

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Order</h1>
          <p className="text-brand-text text-lg leading-relaxed max-w-2xl">
            Select your plan, app setup preference, and payment method – then complete your order
            directly via WhatsApp.
          </p>
        </div>
        <Suspense fallback={<div className="text-brand-text">Loading order …</div>}>
          <OrderForm plans={plans} locale="en" />
        </Suspense>
      </div>
    </div>
  );
}
