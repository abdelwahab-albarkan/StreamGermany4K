import { LegalPage } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Cookie-Richtlinie",
  description:
    "Informationen zur Verwendung von Cookies und ähnlichen Technologien auf StreamGermany4K.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie-Richtlinie"
      intro={`Erklärung zur Verwendung von Cookies auf ${SITE.name}.`}
    >
      <h2>1. Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden.
      </p>

      <h2>2. Notwendige Cookies</h2>
      <p>
        Diese Cookies sind für den Betrieb der Website technisch erforderlich (z. B. Session-Cookies zur Speicherung des Warenkorbs oder der Spracheinstellung).
      </p>

      <h2>3. Verwaltung von Cookies</h2>
      <p>
        Sie können Ihre Browser-Einstellungen so anpassen, dass Sie über das Setzen von Cookies informiert werden oder das Speichern von Cookies generell verhindern.
      </p>
    </LegalPage>
  );
}
