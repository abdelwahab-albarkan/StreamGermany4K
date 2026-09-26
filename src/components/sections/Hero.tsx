import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Play, MonitorSmartphone, Wallet, Headphones, Film, Star } from "lucide-react";
import { getHomepageMovies, type VodTitle } from "@/lib/omdb";

/**
 * Premium two-column hero. Left: badge + single H1 (primary intent
 * "IPTV Deutschland") + copy + CTAs + factual trust points. Right: a cinematic
 * trio of real movie posters from OMDb (reuses the cached homepage movie data —
 * no extra API calls). Falls back to a clean editorial tile when the catalog is
 * unavailable. No invented figures.
 */
export async function Hero() {
  const movies = await getHomepageMovies();
  const posters = movies.filter((m) => m.posterUrl).slice(0, 3);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Ambient gradient blobs (decorative, brand cyan/violet) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-[560px] h-[560px] rounded-full bg-brand-cyan/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full bg-brand-violet/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* Left: copy */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-sm font-medium text-brand-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            IPTV Deutschland
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            IPTV in Deutschland für modernes{" "}
            <span className="text-gradient">Streaming in 4K</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-text leading-relaxed mb-8 max-w-xl">
            StreamGermany4K bringt Live-TV, Sport sowie eine grosse Auswahl an Filmen und Serien
            in 4K- und HD-Qualität auf jedes Gerät. Vergleichen Sie in Ruhe, verstehen Sie Ihr
            Abo und starten Sie unkompliziert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/order">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Play className="w-5 h-5 fill-current" />
                Jetzt bestellen
              </Button>
            </Link>
            <Link href="/preise">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Preise ansehen
              </Button>
            </Link>
          </div>

          {/* Factual, qualitative trust points (no invented statistics) */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-text">
            <li className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-brand-accent" /> Flexible Laufzeiten
            </li>
            <li className="flex items-center gap-2">
              <MonitorSmartphone className="w-4 h-4 text-brand-accent" /> Viele Geräte unterstützt
            </li>
            <li className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-brand-accent" /> Deutscher Support
            </li>
          </ul>
        </div>

        {/* Right: cinematic movie-poster showcase */}
        <div className="relative animate-fade-in">
          {/* gradient glow frame */}
          <div className="absolute -inset-2 bg-brand-gradient opacity-20 blur-2xl rounded-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card/50 shadow-2xl shadow-black/50 p-6 sm:p-8">
            {/* decorative ambient inside the card */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-cyan/[0.06] to-brand-violet/[0.06]" aria-hidden="true" />

            {/* 4K badge */}
            <div className="absolute top-4 right-4 z-20 inline-flex items-center rounded-md bg-black/60 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-white border border-white/10">
              4K HDR
            </div>

            {posters.length > 0 ? (
              <>
                <div className="relative flex items-end justify-center gap-3 sm:gap-4">
                  {posters.map((p, i) => (
                    <HeroPoster key={p.id} item={p} featured={i === 1} priority />
                  ))}
                </div>
                <div className="relative mt-6 text-center">
                  <p className="text-white font-semibold">Filme &amp; Serien in 4K</p>
                  <p className="text-brand-text text-sm">Grosse Auswahl an Filmen und Serien auf Abruf</p>
                </div>
              </>
            ) : (
              // Fallback tile when the catalog preview is unavailable (no OMDb key).
              <div className="relative flex flex-col items-center justify-center text-center gap-3 py-16">
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-glow-cyan">
                  <Film className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-semibold text-lg">Filme &amp; Serien in 4K</p>
                <p className="text-brand-text text-sm max-w-xs">
                  Grosse Auswahl an Filmen und Serien – bequem auf Abruf, auf jedem Gerät.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** One poster in the hero trio. Middle poster is raised, glows, and shows its IMDb rating. */
function HeroPoster({ item, featured, priority }: { item: VodTitle; featured?: boolean; priority?: boolean }) {
  return (
    <div
      className={`relative w-1/3 ${featured ? "-translate-y-4 sm:-translate-y-6 z-10" : "translate-y-2 opacity-90"}`}
    >
      <div
        className={`relative aspect-[2/3] w-full rounded-xl overflow-hidden border shadow-lg shadow-black/50 ${
          featured ? "border-brand-accent/50 shadow-glow-cyan" : "border-white/10"
        }`}
      >
        {item.posterUrl && (
          <Image
            src={item.posterUrl}
            alt={`${item.title} – Film`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 30vw, 200px"
            className="object-cover"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
        {featured && item.imdbRating !== null && (
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-black/70 backdrop-blur-sm px-1.5 py-0.5 text-xs font-medium text-white">
            <Star className="w-3 h-3 text-brand-accent fill-brand-accent" />
            {item.imdbRating.toFixed(1)}
          </span>
        )}
        <p className="absolute inset-x-0 bottom-0 p-2 text-white text-xs font-semibold leading-tight line-clamp-2">
          {item.title}
        </p>
      </div>
    </div>
  );
}
