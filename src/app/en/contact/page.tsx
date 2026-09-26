import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata = legalMetadata({
  title: "Contact & Support",
  description:
    "Contact StreamGermany4K: Reach our support team for questions regarding your IPTV subscription, device setup, and orders.",
  path: "/en/contact",
  locale: "en",
});

export default function EnglishContactPage() {
  return (
    <LegalPage
      title="Contact & Support"
      intro={`Have questions about ${SITE.name} or need assistance with setup? Here is how to reach us.`}
      locale="en"
    >
      <h2>How to Reach Us</h2>
      <ul>
        <li>Email: <PH>{SITE.contactEmail ?? "[CONTACT-EMAIL]"}</PH></li>
        <li>WhatsApp / Phone: <PH>{SITE.whatsapp.display}</PH></li>
      </ul>

      <h2>Legal Information</h2>
      <p>
        Full provider details can be found in the{" "}
        <Link href="/en/legal-notice">Legal Notice</Link>. Information on data processing is detailed in our{" "}
        <Link href="/en/privacy">Privacy Policy</Link>.
      </p>

      <h2>Useful Links</h2>
      <ul>
        <li><Link href="/en/buy-iptv">Buy IPTV &amp; Setup</Link></li>
        <li><Link href="/en/pricing">Pricing &amp; Plans</Link></li>
        <li><Link href="/en/terms">Terms of Service</Link></li>
        <li><Link href="/en/refund">Refund Policy</Link></li>
      </ul>

      <LegalNote title="Contact Details Notice">
        <p>
          Please ensure all support requests include your device type and preferred IPTV player application for the fastest assistance.
        </p>
      </LegalNote>
    </LegalPage>
  );
}
