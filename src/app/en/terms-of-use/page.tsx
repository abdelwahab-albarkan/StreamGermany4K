import { LegalPage } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for StreamGermany4K: Rules and guidelines for visiting and browsing our platform.",
  path: "/cgu",
  locale: "en",
});

export default function TermsOfUseEnglishPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={`Rules and guidelines governing your access to and use of ${SITE.name}.`}
      locale="en"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and browsing {SITE.name}, you agree to comply with and be bound by these Terms of Use.
      </p>

      <h2>2. Permitted Use</h2>
      <p>
        The content on this website is provided for informational purposes. Any automated scraping, abusive requests, or attacks against server infrastructure are strictly prohibited.
      </p>

      <h2>3. Liability for External Links</h2>
      <p>
        Our website contains links to external third-party websites over whose content we have no control. The respective provider or operator of the linked pages is solely responsible for their content.
      </p>

      <h2>4. Modifications</h2>
      <p>
        We reserve the right to modify these Terms of Use at any time with future effect.
      </p>
    </LegalPage>
  );
}
