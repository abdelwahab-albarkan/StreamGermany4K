import { LegalPage } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Nutzungsbedingungen",
  description:
    "Nutzungsbedingungen der Website StreamGermany4K: Regeln für den Besuch und die Nutzung unserer Plattform.",
  path: "/cgu",
});

export default function CguPage() {
  return (
    <LegalPage
      title="Nutzungsbedingungen"
      intro={`Bedingungen für die Nutzung der Website und Dienste von ${SITE.name}.`}
    >
      <h2>1. Akzeptanz der Bedingungen</h2>
      <p>
        Mit dem Zugriff auf die Website {SITE.name} erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.
      </p>

      <h2>2. Nutzung der Inhalte</h2>
      <p>
        Die Inhalte dieser Website dienen ausschließlich der Information von Verbrauchern in Deutschland. Jede missbräuchliche Nutzung, automatisiertes Scraping oder Angriff auf die Serverstruktur ist untersagt.
      </p>

      <h2>3. Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
      </p>

      <h2>4. Änderungen der Nutzungsbedingungen</h2>
      <p>
        Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit mit Wirkung für die Zukunft anzupassen.
      </p>
    </LegalPage>
  );
}
