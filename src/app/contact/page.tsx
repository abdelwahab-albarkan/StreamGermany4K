import { LegalPage, PH, LegalNote } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = legalMetadata({
  title: "Kontakt & Support",
  description:
    "Kontakt zu StreamGermany4K: So erreichen Sie unseren Support bei Fragen rund um Ihr IPTV-Abo, Einrichtung und Bestellung.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Kontakt & Support"
      intro={`Sie haben Fragen zum Dienst ${SITE.name} oder brauchen Hilfe bei der Einrichtung? So erreichen Sie uns.`}
    >
      <h2>So erreichen Sie uns</h2>
      <ul>
        <li>E-Mail: <PH>[KONTAKT-E-MAIL]</PH></li>
        <li>Telefon: <PH>[TELEFON]</PH></li>
        <li>Weiterer Kanal (Messenger o. Ä.): <PH>[KONTAKTKANAL]</PH></li>
      </ul>

      <h2>Rechtliche Angaben</h2>
      <p>
        Die vollständigen Angaben zum Betreiber finden Sie im{" "}
        <a href="/mentions-legales">Impressum</a>. Informationen zur Verarbeitung Ihrer personenbezogenen
        Daten enthält die <a href="/confidentialite">Datenschutzerklärung</a>.
      </p>

      <h2>Nützliche Seiten</h2>
      <ul>
        <li><a href="/iptv-kaufen">IPTV kaufen &amp; einrichten</a></li>
        <li><a href="/preise">Preise &amp; Abos</a></li>
        <li><a href="/cgv">AGB</a></li>
        <li><a href="/remboursement">Widerruf &amp; Rückabwicklung</a></li>
      </ul>

      <LegalNote title="Kontaktdaten ergänzen">
        <p>
          Im aktuellen Stand sind keine echten Kontaktdaten (E-Mail, Telefon) hinterlegt. Tragen Sie vor dem
          Livegang gültige Kontaktdaten ein – sie sind unter anderem für die gesetzlichen
          Informationspflichten gegenüber Verbrauchern erforderlich.
        </p>
      </LegalNote>
    </LegalPage>
  );
}
