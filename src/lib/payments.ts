/**
 * Central list of the payment methods actually configured for this project.
 * Kept in a data-only module (no component, no "use client") so it can be
 * imported safely by both Server Components (the payment trust strip) and
 * Client Components (the /order flow) without a server/client module conflict.
 */
export const PAYMENT_METHODS = [
  { src: "/images/Visa_Inc._logo_(2005–2014).svg.webp", alt: "Visa" },
  { src: "/images/Mastercard-logo.svg.webp", alt: "Mastercard" },
  { src: "/images/Paypal_2014_logo.png", alt: "PayPal" },
  { src: "/images/Apple_Pay_logo.svg.webp", alt: "Apple Pay" },
];
