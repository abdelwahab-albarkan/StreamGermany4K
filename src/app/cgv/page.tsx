import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von StreamGermany4K für digitale Streaming-Dienste und Zugänge.",
  path: "/cgv",
});

export default function CgvPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen (AGB)"
      intro={`Allgemeine Geschäftsbedingungen für die Nutzung der von ${SITE.name} angebotenen digitalen Dienste.`}
    >
      <LegalNote title="Rechtlicher Hinweis für den Betreiber">
        <p>
          Diese AGB müssen vor dem offiziellen Verkaufsstart von einem spezialisierten Rechtsanwalt für deutsches IT- und Verbraucherrecht geprüft und ergänzt werden.
        </p>
      </LegalNote>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Bereitstellung digitaler Zugangsdaten
        und Streaming-Dienste zwischen <PH>[FIRMENNAME / BETREIBER]</PH> (nachfolgend &quot;Anbieter&quot;) und Kunden über die Website {SITE.name}.
      </p>

      <h2>2. Vertragsschluss &amp; Digitale Inhalte</h2>
      <p>
        Die Präsentation der Produkte auf der Website stellt kein bindendes Angebot dar. Durch Absenden der Bestellung gibt der Kunde ein verbindliches Angebot ab.
        Der Vertrag kommt durch Zustellung der digitalen Zugangsdaten (M3U / Xtream API Daten) per E-Mail zustande.
      </p>

      <h2>3. Preise &amp; Zahlungsbedingungen</h2>
      <p>
        Alle angegebenen Preise verstehen sich in US-Dollar (USD). Die zur Verfügung stehenden Zahlungsarten werden im Bestellprozess angezeigt.
      </p>

      <h2>4. Bereitstellung der Zugangsdaten</h2>
      <p>
        Die Freischaltung des digitalen Zugangs erfolgt in der Regel kurzfristig nach erfolgreichem Zahlungseingang an die vom Kunden angegebene E-Mail-Adresse.
      </p>

      <h2>5. Pflichten des Kunden &amp; Nutzungseinschränkungen</h2>
      <p>
        Der Kunde ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln und nicht an Dritte weiterzugeben. Die Anzahl der zeitgleichen Streams richtet sich nach dem gebuchten Tarif.
      </p>

      <h2>6. Gewährleistung &amp; Technische Voraussetzungen</h2>
      <p>
        Der Anbieter gewährleistet die Bereitstellung des Dienstes im Rahmen der technischen Möglichkeiten. Voraussetzung für die Nutzung ist eine ausreichend schnelle Internetverbindung des Kunden.
      </p>

      <h2>7. Anwendbares Recht</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
      </p>
    </LegalPage>
  );
}
