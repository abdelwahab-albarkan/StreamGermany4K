import { LegalPage, PH } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von StreamGermany4K gemäß DSGVO (GDPR): Informationen zur Verarbeitung personenbezogener Daten.",
  path: "/confidentialite",
});

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Datenschutzerklärung (DSGVO)"
      intro={`Informationen über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf ${SITE.name}.`}
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: <PH>[FIRMENNAME / BETREIBER]</PH>, E-Mail: <PH>[DATENSCHUTZ-EMAIL]</PH>.
      </p>

      <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser).
      </p>

      <h2>3. Zweck der Datenverarbeitung</h2>
      <p>
        Die Datenverarbeitung erfolgt zur Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, zur Gewährleistung einer komfortablen Nutzung sowie zur Systemsicherheit und -stabilität.
      </p>

      <h2>4. Rechte der betroffenen Person</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO) sowie Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
      </p>
    </LegalPage>
  );
}
