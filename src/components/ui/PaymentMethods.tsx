import { PAYMENT_METHODS } from "@/lib/payments";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/**
 * "Sichere Zahlung" trust strip. Each brand logo sits on a white chip so it stays
 * clearly visible on the dark background.
 */
export function PaymentMethods({ locale = "de" }: { locale?: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="glass rounded-2xl border border-brand-gray/50 px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 text-center max-w-3xl mx-auto">
      <span className="text-brand-text text-sm">{dict.pricing.securePayment}</span>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {PAYMENT_METHODS.map((m) => (
          <span key={m.alt} className="inline-flex items-center justify-center h-10 w-16 rounded-lg bg-white px-2 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.src} alt={m.alt} loading="lazy" className="max-h-6 w-auto object-contain" />
          </span>
        ))}
      </div>
    </div>
  );
}
