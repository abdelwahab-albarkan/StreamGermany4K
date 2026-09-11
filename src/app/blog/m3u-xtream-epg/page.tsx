import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/lib/jsonld";
import { getPost } from "@/lib/blog";

const post = getPost("m3u-xtream-epg")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faq = [
  {
    q: "Was ist besser: M3U oder Xtream Codes?",
    a: "Beide führen zum gleichen Ziel. Xtream-Login (Benutzername, Passwort, Server-URL) ist oft komfortabler, weil die App Senderlisten und EPG automatisch verwaltet. Eine M3U-URL ist ein einzelner Link, der die Playlist enthält – ebenfalls einfach, aber weniger dynamisch.",
  },
  {
    q: "Brauche ich den EPG separat?",
    a: "Meist nicht. Bei einem Xtream-Login liefert der Anbieter den EPG in der Regel automatisch mit. Bei M3U kann eine separate EPG-Quelle (XMLTV) nötig sein, je nach App.",
  },
  {
    q: "Woher bekomme ich M3U- oder Xtream-Zugangsdaten?",
    a: "Von Ihrem IPTV-Anbieter nach dem Kauf. Nutzen Sie ausschliesslich legale, autorisierte Quellen – frei kursierende Listen aus unbekannten Quellen sind oft rechtlich problematisch und unzuverlässig.",
  },
];

export default function M3uXtreamEpgPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <JsonLd data={articleSchema({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.date })} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Ratgeber", path: "/blog" }, { name: "M3U, Xtream & EPG", path: `/blog/${post.slug}` }]} />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">M3U, Xtream Codes &amp; EPG einfach erklärt</h1>

        <p className="text-brand-text text-lg leading-relaxed mb-6">
          <strong className="text-white">Kurz gesagt:</strong> M3U und Xtream Codes sind zwei Wege, wie Ihre
          IPTV-App die Senderliste Ihres Anbieters lädt. Der EPG ist der elektronische Programmführer, der
          anzeigt, was gerade und später läuft. Diese Begriffe begegnen Ihnen bei fast jeder Einrichtung.
        </p>

        <div className="space-y-8 text-brand-text leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Was ist eine M3U-Playlist?</h2>
            <p>
              Eine M3U-Datei (oder M3U-URL) ist im Grunde eine Senderliste: eine Textdatei, die auf die
              einzelnen Streams verweist. Sie tragen den M3U-Link einmal in Ihrer IPTV-App ein, und die App
              lädt daraus die verfügbaren Sender. Das Format ist weit verbreitet und funktioniert mit den
              meisten Playern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Was sind Xtream Codes?</h2>
            <p>
              „Xtream“ bezeichnet einen Login-Typ, bei dem Sie in der App Benutzername, Passwort und eine
              Server-URL eingeben. Der Vorteil: Die App kann Senderkategorien, Abrufinhalte (VOD) und den EPG
              automatisch und dynamisch verwalten – besonders komfortabel, wenn sich die Senderliste ändert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Was ist der EPG?</h2>
            <p>
              EPG steht für „Electronic Program Guide“ – den elektronischen Programmführer. Er zeigt das
              aktuelle und kommende Programm je Sender an, oft mit Beschreibungen. Ein aktueller, korrekt
              zugeordneter EPG macht die Bedienung deutlich angenehmer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">M3U oder Xtream – was nehme ich?</h2>
            <p>
              Für die meisten Nutzer ist der Xtream-Login die bequemere Wahl, weil EPG und Kategorien
              automatisch mitkommen. Eine M3U-URL ist ebenso gültig und manchmal die einzige Option einer App.
              Beide erhalten Sie von Ihrem Anbieter – die Einrichtung je Gerät zeigt die{" "}
              <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>.
            </p>
          </section>
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu M3U, Xtream &amp; EPG" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white mb-4">Verwandte Artikel</h2>
        <ul className="space-y-2 text-brand-text">
          <li><Link href="/blog/was-ist-iptv" className="text-brand-accent hover:underline">Was ist IPTV? Einfach erklärt</Link></li>
          <li><Link href="/blog/iptv-ruckelt" className="text-brand-accent hover:underline">IPTV ruckelt oder puffert? Ursachen &amp; Lösungen</Link></li>
        </ul>
      </div>

      <Cta
        heading="Zugangsdaten erhalten und loslegen"
        text="M3U oder Xtream – Ihre Zugangsdaten bekommen Sie beim Kauf. Danach ist alles in Minuten eingerichtet."
        primaryLabel="IPTV kaufen"
        primaryHref="/iptv-kaufen"
        secondaryLabel="Geräte &amp; Einrichtung"
        secondaryHref="/geraete"
      />
    </div>
  );
}
