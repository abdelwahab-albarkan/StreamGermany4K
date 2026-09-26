import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

export const metadata = pageMetadata({
  title: "IPTV Guides & Blog: Essentials, Setup & Tips",
  description:
    "The StreamGermany4K knowledge base: Clear guides, streaming technology essentials, and practical troubleshooting from setup to fixing buffering.",
  path: "/blog",
  locale: "en",
});

export default function BlogEnglishIndexPage() {
  const posts = getBlogPosts("en");

  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/en" }, { name: "Guides", path: "/en/blog" }]} />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV <span className="text-brand-accent">Guides &amp; Blog</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            Clear essentials, technical background, and practical walkthroughs for IPTV streaming – so you know exactly
            how to get optimal performance before and after starting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
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
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
