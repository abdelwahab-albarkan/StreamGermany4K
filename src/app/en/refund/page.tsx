import { LegalPage, PH } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";

export const metadata = legalMetadata({
  title: "Cancellation & Refund Policy",
  description:
    "Cancellation and refund policy of StreamGermany4K for digital streaming subscriptions and deliverables.",
  path: "/remboursement",
  locale: "en",
});

export default function RefundEnglishPage() {
  return (
    <LegalPage
      title="Cancellation &amp; Refund Policy"
      intro={`Statutory right of withdrawal for digital contents under EU/German consumer law.`}
      locale="en"
    >
      <h2>Right of Withdrawal</h2>
      <p>
        You have the statutory right to withdraw from this contract within 14 days without stating reasons. The withdrawal period expires 14 days after the conclusion of the contract.
      </p>

      <h2>Expiration of the Right of Withdrawal for Digital Content</h2>
      <p>
        The right of withdrawal expires prematurely in the case of a contract for the delivery of digital content not supplied on a tangible medium, if performance has begun after the consumer has provided prior express consent and acknowledged that they thereby lose their right of withdrawal once performance begins.
      </p>

      <h2>Model Withdrawal Form</h2>
      <p>
        If you wish to withdraw from the contract prior to activation, please send an informal email to: <PH>[SUPPORT EMAIL]</PH>.
      </p>
    </LegalPage>
  );
}
