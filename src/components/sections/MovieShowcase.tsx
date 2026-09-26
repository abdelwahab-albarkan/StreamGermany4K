import Image from "next/image";
import Link from "next/link";
import { Film, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getHomepageMovies, getHomepageSeries, type VodTitle } from "@/lib/omdb";
import type { Locale } from "@/i18n/config";

/**
 * Large cinematic "Filme & Serien" / "Movies & Series" homepage section.
 */
export async function MovieShowcase({ locale = "de" }: { locale?: Locale }) {
  const [movies, series] = await Promise.all([getHomepageMovies(), getHomepageSeries()]);
  const movieItems = movies.slice(0, 14);
  const seriesItems = series.slice(0, 14);
  const hasData = movieItems.length > 0 || seriesItems.length > 0;
  const isEn = locale === "en";

  const comparisonHref = isEn ? "/en/iptv-comparison" : "/iptv-vergleich";
  const pricingHref = isEn ? "/en/pricing" : "/preise";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* cinematic ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-brand-accent/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/5 w-[420px] h-[420px] rounded-full bg-brand-violet/[0.08] blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Entertainment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isEn ? "Movies & " : "Filme & "}
              <span className="text-gradient">{isEn ? "Series" : "Serien"}</span>
            </h2>
            <p className="text-brand-text text-lg leading-relaxed">
              {isEn
                ? "Discover popular movies and series for your streaming setup – fresh and neatly organized."
                : "Entdecke beliebte Filme und Serien für dein Streaming-Erlebnis – aktuell und übersichtlich."}
            </p>
          </div>
          <Link href={comparisonHref} className="shrink-0">
            <Button size="lg" className="gap-2">
              {isEn ? "Explore More" : "Mehr entdecken"} <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {hasData ? (
          <div className="space-y-12">
            <MarqueeRow
              title={isEn ? "Popular Movies" : "Beliebte Filme"}
              kind={isEn ? "Movie" : "Film"}
              items={movieItems}
              direction="left"
              durationSec={55}
            />
            <MarqueeRow
              title={isEn ? "Popular Series" : "Beliebte Serien"}
              kind={isEn ? "Series" : "Serie"}
              items={seriesItems}
              direction="right"
              durationSec={62}
            />
            <p className="text-brand-text/50 text-xs">
              {isEn
                ? "Movie and series catalog from OMDb (omdbapi.com). IMDb ratings where available."
                : "Film- und Seriendaten von OMDb (omdbapi.com). IMDb-Bewertungen, sofern verfügbar."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative aspect-[16/10] w-full min-h-[240px]">
              <Image
                src="/images/iptv-entertainment-dashboard.jpg"
                alt={isEn ? "Movies, series, and live TV overview" : "Filme, Serien und Live-TV in der Übersicht"}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-4 text-brand-accent">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {isEn ? "Wide Selection of Movies & Series" : "Grosse Film- & Serienauswahl"}
              </h3>
              <p className="text-brand-text leading-relaxed mb-6">
                {isEn
                  ? "Alongside Live TV and sports, StreamGermany4K offers an extensive on-demand library (VOD) with movies, series, and documentaries on your preferred device."
                  : "Neben Live-TV und Sport bietet StreamGermany4K eine umfangreiche Abruf-Mediathek (VOD) mit Filmen, Serien und Dokus – bequem auf dem Gerät Ihrer Wahl."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={comparisonHref}>
                  <Button size="lg" className="w-full sm:w-auto">
                    {isEn ? "To Comparison" : "Zum Vergleich"}
                  </Button>
                </Link>
                <Link href={pricingHref}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {isEn ? "View Pricing" : "Preise ansehen"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function MarqueeRow({
  title,
  kind,
  items,
  direction,
  durationSec,
}: {
  title: string;
  kind: string;
  items: VodTitle[];
  direction: "left" | "right";
  durationSec: number;
}) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-5">{title}</h3>
      <div className="marquee-viewport relative -mx-4 px-4 sm:mx-0 sm:px-0" aria-label={title} role="group">
        <div
          className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}
          style={{ animationDuration: `${durationSec}s` }}
        >
          {loop.map((t, i) => (
            <PosterCard key={`${t.id}-${i}`} item={t} kind={kind} ariaHidden={i >= items.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PosterCard({ item: t, kind, ariaHidden }: { item: VodTitle; kind: string; ariaHidden?: boolean }) {
  return (
    <div
      className="group shrink-0 w-[132px] sm:w-[156px] md:w-[172px] lg:w-[184px] pr-4 sm:pr-5"
      aria-hidden={ariaHidden || undefined}
    >
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/40 transition-all duration-300 group-hover:scale-[1.05] group-hover:border-brand-accent/60 group-hover:shadow-[0_14px_48px_rgba(0,217,255,0.30),0_0_24px_rgba(124,60,255,0.25)]">
        {t.posterUrl ? (
          <Image
            src={t.posterUrl}
            alt={ariaHidden ? "" : `${t.title} – ${kind}`}
            fill
            sizes="(max-width: 640px) 132px, (max-width: 1024px) 172px, 184px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-gradient-soft p-3 text-center">
            <Film className="w-7 h-7 text-brand-accent" aria-hidden="true" />
            <span className="text-white text-xs font-semibold leading-tight line-clamp-3">{t.title}</span>
          </div>
        )}
        {t.posterUrl && (
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
        )}
        {t.imdbRating !== null && (
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-black/70 backdrop-blur-sm px-1.5 py-0.5 text-xs font-medium text-white">
            <Star className="w-3 h-3 text-brand-accent fill-brand-accent" />
            {t.imdbRating.toFixed(1)}
          </span>
        )}
        {t.posterUrl && (
          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="text-white text-sm font-semibold leading-tight line-clamp-2">{t.title}</p>
            {t.year && <p className="text-white/70 text-xs mt-0.5">{t.year}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
