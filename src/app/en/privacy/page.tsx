import { LegalPage, PH } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Privacy Policy (GDPR)",
  description:
    "Privacy Policy of StreamGermany4K pursuant to GDPR / DSGVO: Information regarding the collection and processing of personal data.",
  path: "/confidentialite",
  locale: "en",
});

export default function PrivacyEnglishPage() {
  return (
    <LegalPage
      title="Privacy Policy (GDPR)"
      intro={`Information on the nature, scope, and purpose of personal data processing on ${SITE.name}.`}
      locale="en"
    >
      <h2>1. Data Controller</h2>
      <p>
        The data controller pursuant to the EU General Data Protection Regulation (GDPR) is: <PH>[COMPANY / OPERATOR NAME]</PH>, Email: <PH>[PRIVACY EMAIL]</PH>.
      </p>

      <h2>2. Collection and Storage of Personal Data</h2>
      <p>
        When accessing our website, information is automatically transmitted to our server via your browser (e.g. IP address, timestamp, browser type, and operating system) for technical delivery.
      </p>

      <h2>3. Purpose of Processing</h2>
      <p>
        Data is processed to ensure smooth website connectivity, optimal performance, and server stability and security.
      </p>

      <h2>4. Your Rights Under GDPR</h2>
      <p>
        You have the right to information (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), and restriction of processing (Art. 18 GDPR) regarding your personal data.
      </p>
    </LegalPage>
  );
}
