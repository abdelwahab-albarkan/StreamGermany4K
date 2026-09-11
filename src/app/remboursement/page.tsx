import { LegalPage, PH } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";

export const metadata = legalMetadata({
  title: "Widerrufsbelehrung & Rückerstattung",
  description:
    "Widerrufsbelehrung von StreamGermany4K für den Kauf digitaler Inhalte und Streaming-Zugänge.",
  path: "/remboursement",
});

export default function RemboursementPage() {
  return (
    <LegalPage
      title="Widerrufsbelehrung &amp; Rückerstattung"
      intro={`Informationen zum Widerrufsrecht bei digitalen Inhalten gemäß EGBGB.`}
    >
      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>

      <h2>Erlöschen des Widerrufsrechts bei digitalen Inhalten</h2>
      <p>
        Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten, wenn der Unternehmer mit der Ausführung des Vertrags begonnen hat, nachdem der Verbraucher ausdrücklich zugestimmt hat und seine Kenntnis davon bestätigt hat, dass er durch seine Zustimmung mit Beginn der Ausführung des Vertrags sein Widerrufsrecht verliert.
      </p>

      <h2>Muster-Widerrufsformular</h2>
      <p>
        Wenn Sie den Vertrag wiederrufen möchten, senden Sie eine formlose E-Mail an: <PH>[SUPPORT-EMAIL]</PH>.
      </p>
    </LegalPage>
  );
}
