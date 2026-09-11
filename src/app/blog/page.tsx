import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata = pageMetadata({
  title: "IPTV Ratgeber & Blog: Grundlagen, Technik und Tipps",
  description:
    "Der StreamGermany4K-Ratgeber rund um IPTV: verständliche Erklärungen, Technik-Grundlagen und praktische Lösungen – von „Was ist IPTV?“ bis zu Buffering-Problemen.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Startseite", path: "/" }, { name: "Ratgeber", path: "/blog" }]} />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV <span className="text-brand-accent">Ratgeber</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Verständliche Grundlagen, Technik-Hintergründe und praktische Lösungen rund um IPTV – damit Sie
            genau wissen, worauf es ankommt, bevor und nachdem Sie starten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-2xl border border-brand-gray/50 hover:border-brand-accent/50 overflow-hidden transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-brand-text text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-brand-accent mt-4">
                  Weiterlesen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
