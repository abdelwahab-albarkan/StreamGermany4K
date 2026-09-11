import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Impressum",
  description:
    "Impressum von StreamGermany4K: Gesetzliche Anbieterkennzeichnung gemäß § 5 DDG / TMG.",
  path: "/mentions-legales",
});

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      intro={`Gesetzliche Anbieterkennzeichnung für die Website ${SITE.name} gemäß § 5 Digitale-Dienste-Gesetz (DDG).`}
    >
      <LegalNote title="Vom Betreiber zu vervollständigen">
        <p>
          Die nachstehenden Platzhalter in eckigen Klammern müssen mit den echten gesetzlichen Angaben
          des Seitenbetreibers ausgefüllt werden. Die Angabe eines vollständigen Impressums ist gesetzlich vorgeschrieben.
        </p>
      </LegalNote>

      <h2>1. Angaben gemäß § 5 DDG</h2>
      <ul>
        <li>Firmenname / Name: <PH>[FIRMENNAME / BETREIBER]</PH></li>
        <li>Rechtsform: <PH>[RECHTSFORM z.B. GmbH / Einzelunternehmen]</PH></li>
        <li>Strasse &amp; Hausnummer: <PH>[STRASSE UND HAUSNUMMER]</PH></li>
        <li>PLZ &amp; Ort: <PH>[PLZ UND ORT]</PH></li>
        <li>Land: Deutschland</li>
        <li>Handelsregister: <PH>[AMTSGERICHT UND REGISTERNUMMER]</PH></li>
        <li>Umsatzsteuer-ID: <PH>[UST-IDNR.]</PH></li>
        <li>E-Mail-Adresse: <PH>[E-MAIL ANZEIGEN]</PH></li>
        <li>Telefon: <PH>[TELEFONNUMMER]</PH></li>
      </ul>

      <h2>2. Vertretungsberechtigte Personen</h2>
      <p>
        Vertreten durch: <PH>[GESCHÄFTSFÜHRER / INHABER]</PH>
      </p>

      <h2>3. Urheberrecht &amp; Markenrechte</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
      <p>
        Alle auf dieser Website genannten Marken, Senderlogos und Produktnamen sind Eigentum ihrer jeweiligen Inhaber und
        dienen ausschließlich der Information und Kompatibilitätsbeschreibung.
      </p>

      <h2>4. Haftungsausschluss (Disclaimer)</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
        der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Verwandte Dokumente</h2>
      <ul>
        <li><a href="/cgu">Nutzungsbedingungen</a></li>
        <li><a href="/cgv">Allgemeine Geschäftsbedingungen (AGB)</a></li>
        <li><a href="/confidentialite">Datenschutzerklärung</a></li>
        <li><a href="/cookies">Cookie-Richtlinie</a></li>
        <li><a href="/remboursement">Widerrufsbelehrung</a></li>
      </ul>
    </LegalPage>
  );
}
