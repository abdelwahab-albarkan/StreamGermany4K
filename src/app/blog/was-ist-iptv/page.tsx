import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/lib/jsonld";
import { getPost } from "@/lib/blog";

const post = getPost("was-ist-iptv")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faq = [
  {
    q: "Wofür steht die Abkürzung IPTV?",
    a: "IPTV steht für „Internet Protocol Television“ – also Fernsehen, das über das Internetprotokoll übertragen wird, statt über Kabel, Satellit oder Antenne.",
  },
  {
    q: "Brauche ich für IPTV einen speziellen Receiver?",
    a: "Nein. Sie benötigen kein klassisches Empfangsgerät, sondern lediglich ein internetfähiges Gerät mit einer IPTV-App – etwa Smart-TV, Fire TV Stick, Smartphone oder Computer.",
  },
  {
    q: "Was ist der Unterschied zwischen IPTV und Streaming-Diensten wie Netflix?",
    a: "Beide laufen über das Internet. Klassische Streaming-Dienste bieten vor allem eigene Filme und Serien auf Abruf, während IPTV den Schwerpunkt auf Live-TV-Sender legt – oft ergänzt um eine Abruf-Mediathek (VOD).",
  },
];

export default function WasIstIptvPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <JsonLd data={articleSchema({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.date })} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Ratgeber", path: "/blog" }, { name: "Was ist IPTV?", path: `/blog/${post.slug}` }]} />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Was ist IPTV? Einfach erklärt</h1>

        <p className="text-brand-text text-lg leading-relaxed mb-6">
          <strong className="text-white">Kurz gesagt:</strong> IPTV (Internet Protocol Television) ist
          Fernsehen über das Internet. Statt das Signal über Kabel, Satellit oder Antenne zu empfangen,
          streamen Sie Live-Sender und Abrufinhalte über Ihre Internetverbindung – auf dem Gerät Ihrer Wahl.
        </p>

        <div className="space-y-8 text-brand-text leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Wie funktioniert IPTV?</h2>
            <p>
              Bei IPTV werden Fernsehinhalte als Datenpakete über das Internetprotokoll übertragen. Eine
              IPTV-App auf Ihrem Gerät ruft die Sender über Ihre Zugangsdaten ab und spielt sie in Echtzeit
              ab. Weil alles über die Internetleitung läuft, sind Sie nicht an einen festen Empfangsweg oder
              einen bestimmten Raum mit Kabelanschluss gebunden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Was brauche ich für IPTV?</h2>
            <p>Für den Einstieg genügen drei Dinge:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Eine stabile Internetverbindung (für 4K/HD entsprechend schneller).</li>
              <li>Ein kompatibles Gerät mit IPTV-App – Smart-TV, Fire TV Stick, Smartphone oder Computer. Einen Überblick gibt die <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Seite</Link>.</li>
              <li>Zugangsdaten eines IPTV-Anbieters. Wie das abläuft, zeigt <Link href="/iptv-kaufen" className="text-brand-accent hover:underline">IPTV kaufen</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">IPTV vs. Kabel, Satellit und DVB-T</h2>
            <p>
              Der wichtigste Unterschied ist die Flexibilität: Kabel und Satellit binden Sie an feste
              Anschlüsse und Geräte, IPTV läuft überall dort, wo Internet verfügbar ist. Zudem sind
              Senderauswahl, Programmführer (EPG) und Zusatzfunktionen wie eine Abruf-Mediathek meist direkt
              in der App gebündelt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Ist IPTV legal?</h2>
            <p>
              IPTV als Technologie ist völlig legal. Entscheidend ist, dass die Inhalte über einen
              autorisierten, seriösen Anbieter rechtmässig bereitgestellt werden. Von unrealistisch günstigen
              „Alles-für-fast-nichts“-Angeboten sollten Sie Abstand nehmen. Worauf Sie bei der Auswahl achten,
              erklärt der <Link href="/iptv-anbieter" className="text-brand-accent hover:underline">Anbieter-Ratgeber</Link>.
            </p>
          </section>
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu „Was ist IPTV?“" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white mb-4">Verwandte Artikel</h2>
        <ul className="space-y-2 text-brand-text">
          <li><Link href="/blog/iptv-ruckelt" className="text-brand-accent hover:underline">IPTV ruckelt oder puffert? Ursachen &amp; Lösungen</Link></li>
          <li><Link href="/blog/m3u-xtream-epg" className="text-brand-accent hover:underline">M3U, Xtream Codes &amp; EPG einfach erklärt</Link></li>
        </ul>
      </div>

      <Cta
        heading="IPTV-Anbieter richtig auswählen"
        text="Sie wissen jetzt, was IPTV ist – der nächste Schritt ist die Wahl eines passenden Anbieters."
        primaryLabel="Anbieter-Ratgeber"
        primaryHref="/iptv-anbieter"
        secondaryLabel="IPTV Vergleich"
        secondaryHref="/iptv-vergleich"
      />
    </div>
  );
}
