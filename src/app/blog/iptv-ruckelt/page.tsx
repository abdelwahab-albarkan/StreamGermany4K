import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, articleSchema } from "@/lib/jsonld";
import { getPost } from "@/lib/blog";

const post = getPost("iptv-ruckelt")!;

export const metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const causes = [
  { h: "Zu langsame oder instabile Internetverbindung", t: "Die häufigste Ursache. Für HD sollten Sie stabile Bandbreite haben, für 4K deutlich mehr. WLAN am Rand der Reichweite oder viele parallele Downloads führen zu Puffern." },
  { h: "WLAN statt Kabel", t: "Ein schwaches oder überlastetes WLAN ruckelt schneller. Ein LAN-Kabel oder ein Ethernet-Adapter (z. B. am Fire TV Stick) sorgt für Stabilität." },
  { h: "Überlastetes oder veraltetes Gerät", t: "Ältere Sticks/TVs oder zu wenig Arbeitsspeicher können bei hoher Auflösung an ihre Grenzen kommen. Ein Neustart und das Schliessen von Hintergrund-Apps helfen oft." },
  { h: "App oder Cache", t: "Eine veraltete App-Version oder ein voller Cache verursacht Aussetzer. App aktualisieren und den Cache in den Einstellungen leeren." },
  { h: "Falsche oder abgelaufene Zugangsdaten", t: "Ein schwarzes Bild oder „kein Signal“ liegt oft an ungültigen Zugangsdaten. Zugang in der App neu laden und die Gültigkeit prüfen." },
];

const faq = [
  {
    q: "Warum ruckelt mein IPTV nur abends?",
    a: "Abends zur Primetime sind Netze und Server stärker ausgelastet. Ruckelt es vor allem dann, deutet das auf eine grenzwertige Internetverbindung oder einen überlasteten Anbieter-Server hin.",
  },
  {
    q: "Hilft ein VPN gegen Buffering?",
    a: "In der Regel nicht – ein VPN kann die Geschwindigkeit sogar reduzieren. Buffering ist meist ein Bandbreiten-, WLAN- oder Server-Thema, kein VPN-Thema.",
  },
  {
    q: "IPTV funktioniert gar nicht mehr – was tun?",
    a: "Prüfen Sie zuerst die Internetverbindung, starten Sie Gerät und App neu und laden Sie den Zugang neu. Bleibt das Problem, kontrollieren Sie die Gültigkeit Ihrer Zugangsdaten.",
  },
];

export default function IptvRuckeltPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <JsonLd data={articleSchema({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.date })} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Ratgeber", path: "/blog" }, { name: "IPTV ruckelt", path: `/blog/${post.slug}` }]} />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">IPTV ruckelt oder puffert? Ursachen &amp; Lösungen</h1>

        <p className="text-brand-text text-lg leading-relaxed mb-6">
          <strong className="text-white">Kurz gesagt:</strong> In den allermeisten Fällen liegt Ruckeln oder
          Buffering nicht am Sender, sondern an der Verbindung zwischen Ihrem Gerät und dem Internet. Mit den
          folgenden Schritten grenzen Sie die Ursache schnell ein und beheben sie meist selbst.
        </p>

        <div className="space-y-4 text-brand-text leading-relaxed mb-10">
          <h2 className="text-2xl font-bold text-white">Die häufigsten Ursachen</h2>
          {causes.map((c, i) => (
            <div key={c.h} className="glass rounded-xl border border-brand-gray/50 p-5">
              <h3 className="font-bold text-white mb-1">{i + 1}. {c.h}</h3>
              <p className="text-sm">{c.t}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-brand-text leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Schritt für Schritt zur Lösung</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Internet testen: Läuft ein anderer Stream (z. B. YouTube) in hoher Qualität flüssig? Wenn nicht, liegt es an der Leitung.</li>
            <li>Auf Kabel umsteigen: LAN oder Ethernet-Adapter statt WLAN, oder näher an den Router.</li>
            <li>Neu starten: Gerät und App komplett neu starten, andere Apps schliessen.</li>
            <li>App pflegen: Auf die aktuelle Version aktualisieren und den Cache leeren.</li>
            <li>Auflösung anpassen: Testweise von 4K auf HD wechseln – läuft es dann flüssig, fehlt Bandbreite.</li>
            <li>Zugang prüfen: Zugangsdaten neu laden und deren Gültigkeit kontrollieren.</li>
          </ol>
          <p>
            Welche App auf Ihrem Gerät gut läuft, lesen Sie unter{" "}
            <Link href="/iptv-apps" className="text-brand-accent hover:underline">Beste IPTV-Apps</Link>. Die
            gerätespezifische Einrichtung finden Sie in der{" "}
            <Link href="/geraete" className="text-brand-accent hover:underline">Geräte-Übersicht</Link>.
          </p>
        </div>
      </div>

      <Faq items={faq} heading="Häufige Fragen zu Rucklern &amp; Buffering" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white mb-4">Verwandte Artikel</h2>
        <ul className="space-y-2 text-brand-text">
          <li><Link href="/blog/was-ist-iptv" className="text-brand-accent hover:underline">Was ist IPTV? Einfach erklärt</Link></li>
          <li><Link href="/blog/m3u-xtream-epg" className="text-brand-accent hover:underline">M3U, Xtream Codes &amp; EPG einfach erklärt</Link></li>
        </ul>
      </div>

      <Cta
        heading="Stabile Qualität ist Anbietersache"
        text="Ein grosser Teil der Stabilität hängt vom Anbieter ab. Vergleichen Sie in Ruhe, worauf es ankommt."
        primaryLabel="IPTV Vergleich"
        primaryHref="/iptv-vergleich"
        secondaryLabel="Preise ansehen"
        secondaryHref="/preise"
      />
    </div>
  );
}
