import { SITE } from "@/lib/site";
import React from "react";

/** Renders a JSON-LD <script> block. Safe in Server Components. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const abs = (path: string) => new URL(path, SITE.domain).toString();

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    ...(SITE.contactEmail ? { email: SITE.contactEmail } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.domain,
    inLanguage: "de-DE",
  };
}

/** items: ordered [{ name, path }] from home to current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Article schema for informational/blog pages. Author + publisher = the brand (no invented author names). */
export function articleSchema(a: { title: string; description: string; path: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: "de-DE",
    mainEntityOfPage: abs(a.path),
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    author: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.domain },
  };
}

/** Only use for genuinely useful, on-page Q&A. */
export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
