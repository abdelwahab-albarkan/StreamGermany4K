import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Terms and Conditions (AGB)",
  description:
    "Terms and Conditions of StreamGermany4K for digital streaming access and services.",
  path: "/cgv",
  locale: "en",
});

export default function TermsEnglishPage() {
  return (
    <LegalPage
      title="Terms &amp; Conditions (AGB)"
      intro={`General Terms and Conditions for utilizing digital services provided by ${SITE.name}.`}
      locale="en"
    >
      <LegalNote title="Legal Notice for Operator">
        <p>
          These terms should be reviewed and customized by legal counsel specialized in German and EU digital consumer protection laws.
        </p>
      </LegalNote>

      <h2>1. Scope of Application</h2>
      <p>
        These General Terms and Conditions govern all contracts regarding the provision of digital access credentials and streaming services between <PH>[COMPANY / OPERATOR NAME]</PH> (&quot;Provider&quot;) and customers via the website {SITE.name}.
      </p>

      <h2>2. Formation of Contract &amp; Digital Deliverables</h2>
      <p>
        Product presentations on this website do not constitute legally binding offers. By submitting an order, the customer submits a binding offer. The contract becomes effective upon transmission of digital access credentials (M3U / Xtream API data) via email or instant messaging.
      </p>

      <h2>3. Pricing &amp; Terms of Payment</h2>
      <p>
        All listed prices are stated in US Dollars (USD). Supported payment methods are displayed clearly throughout the order process.
      </p>

      <h2>4. Delivery of Digital Credentials</h2>
      <p>
        Digital access activation takes place promptly following verified receipt of payment to the email address or messaging handle designated by the customer.
      </p>

      <h2>5. Customer Obligations &amp; Permitted Use</h2>
      <p>
        The customer agrees to maintain confidentiality over access credentials and not distribute them to unauthorized third parties. Simultaneous streams are limited according to the chosen subscription plan.
      </p>

      <h2>6. Warranty &amp; Technical Requirements</h2>
      <p>
        The provider maintains service delivery within the boundaries of technical feasibility. A reliable broadband connection at the customer&apos;s location is required for streaming.
      </p>

      <h2>7. Applicable Law</h2>
      <p>
        The laws of the Federal Republic of Germany apply, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).
      </p>
    </LegalPage>
  );
}
