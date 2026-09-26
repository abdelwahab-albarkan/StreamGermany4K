import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Legal Notice",
  description:
    "Legal Notice of StreamGermany4K: Statutory company identification pursuant to § 5 DDG / TMG.",
  path: "/mentions-legales",
  locale: "en",
});

export default function LegalNoticeEnglishPage() {
  return (
    <LegalPage
      title="Legal Notice (Impressum)"
      intro={`Statutory provider identification for ${SITE.name} pursuant to § 5 Digital Services Act (DDG / German law).`}
      locale="en"
    >
      <LegalNote title="To be completed by the operator">
        <p>
          The placeholders in brackets below must be filled in with the official registered information of the website operator.
        </p>
      </LegalNote>

      <h2>1. Information pursuant to § 5 DDG</h2>
      <ul>
        <li>Company / Operator Name: <PH>[COMPANY / OPERATOR NAME]</PH></li>
        <li>Legal Form: <PH>[LEGAL FORM e.g. GmbH / Sole Proprietorship]</PH></li>
        <li>Street &amp; Number: <PH>[STREET AND NUMBER]</PH></li>
        <li>Postal Code &amp; City: <PH>[POSTAL CODE AND CITY]</PH></li>
        <li>Country: Germany</li>
        <li>Commercial Register: <PH>[LOCAL COURT AND REGISTER NUMBER]</PH></li>
        <li>VAT ID: <PH>[VAT ID NUMBER]</PH></li>
        <li>Email Address: <PH>[CONTACT EMAIL]</PH></li>
        <li>Phone: <PH>[PHONE NUMBER]</PH></li>
      </ul>

      <h2>2. Authorized Representatives</h2>
      <p>
        Represented by: <PH>[MANAGING DIRECTOR / OWNER]</PH>
      </p>

      <h2>3. Copyright &amp; Trademark Rights</h2>
      <p>
        The content and works published on this website are governed by German copyright law. Any duplication,
        processing, distribution, or commercialization beyond the scope of copyright requires written consent from the author.
      </p>
      <p>
        All trademarks, logos, and product names displayed on this website remain the property of their respective
        owners and are used solely for descriptive compatibility purposes.
      </p>

      <h2>4. Disclaimer</h2>
      <p>
        The contents of our web pages have been created with the utmost care. However, we cannot guarantee the accuracy,
        completeness, or timeliness of the content. As a service provider, we are responsible for our own content according to general laws.
      </p>

      <h2>Related Legal Documents</h2>
      <ul>
        <li><a href="/en/terms-of-use">Terms of Use</a></li>
        <li><a href="/en/terms">Terms and Conditions (AGB)</a></li>
        <li><a href="/en/privacy">Privacy Policy (GDPR)</a></li>
        <li><a href="/en/cookies">Cookie Policy</a></li>
        <li><a href="/en/refund">Cancellation &amp; Refund Policy</a></li>
      </ul>
    </LegalPage>
  );
}
