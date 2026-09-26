import { Suspense } from "react";
import { OrderForm } from "@/components/order/OrderForm";
import { legalMetadata } from "@/lib/seo";
import { getPlans } from "@/lib/pricing";

// Utility/conversion page — noindex,follow. Excluded from the sitemap.
export const metadata = legalMetadata({
  title: "Bestellung",
  description:
    "Wählen Sie Ihr Paket, Ihre App-Option und Zahlungsmethode und senden Sie Ihre Anfrage anschließend direkt über WhatsApp.",
  path: "/order",
});

export default function OrderPage() {
  const plans = getPlans();
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bestellung</h1>
          <p className="text-brand-text text-lg leading-relaxed max-w-2xl">
            Wählen Sie Ihr Paket, Ihre App-Option und Ihre Zahlungsmethode – anschließend senden Sie
            Ihre Bestellung direkt über WhatsApp.
          </p>
        </div>
        <Suspense fallback={<div className="text-brand-text">Bestellung wird geladen …</div>}>
          <OrderForm plans={plans} />
        </Suspense>
      </div>
    </div>
  );
}
