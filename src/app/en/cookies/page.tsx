import { LegalPage } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Cookie Policy",
  description:
    "Information on cookies and similar technologies used on StreamGermany4K.",
  path: "/cookies",
  locale: "en",
});

export default function CookiesEnglishPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro={`Explanation of how cookies are used on ${SITE.name}.`}
      locale="en"
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored locally on your device when you browse websites.
      </p>

      <h2>2. Essential Cookies</h2>
      <p>
        These cookies are technically required for essential website operation (such as remembering your language preference or shopping session).
      </p>

      <h2>3. Managing Cookie Preferences</h2>
      <p>
        You can customize your browser settings to alert you before cookies are set, or reject non-essential cookies entirely at any time.
      </p>
    </LegalPage>
  );
}
