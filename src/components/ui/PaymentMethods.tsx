const METHODS = [
  { src: "/images/Visa_Inc._logo_(2005–2014).svg.webp", alt: "Visa" },
  { src: "/images/Mastercard-logo.svg.webp", alt: "Mastercard" },
  { src: "/images/Paypal_2014_logo.png", alt: "PayPal" },
  { src: "/images/Apple_Pay_logo.svg.webp", alt: "Apple Pay" },
];

/**
 * "Sichere Zahlung" trust strip. Each brand logo sits on a white chip so it stays
 * clearly visible on the dark background (many payment marks are dark/coloured).
 * Uses plain <img> because the source filenames contain special characters and
 * these are tiny, below-fold, decorative trust marks.
 */
export function PaymentMethods() {
  return (
    <div className="glass rounded-2xl border border-brand-gray/50 px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 text-center max-w-3xl mx-auto">
      <span className="text-brand-text text-sm">Sichere Zahlung – gängige Zahlungsarten:</span>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {METHODS.map((m) => (
          <span key={m.alt} className="inline-flex items-center justify-center h-10 w-16 rounded-lg bg-white px-2 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.src} alt={m.alt} loading="lazy" className="max-h-6 w-auto object-contain" />
          </span>
        ))}
      </div>
    </div>
  );
}
