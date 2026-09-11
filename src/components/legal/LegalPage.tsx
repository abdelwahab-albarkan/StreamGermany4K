import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

/**
 * Shared presentational scaffold for legal/policy pages. Reuses the site's
 * existing dark theme + brand tokens (no separate design system). The content
 * is French, so the wrapper is marked lang="fr" inside the English document.
 */

const prose =
  "max-w-3xl mx-auto break-words " +
  "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-24 " +
  "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2 " +
  "[&_p]:text-brand-text [&_p]:leading-relaxed [&_p]:my-4 " +
  "[&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-1 " +
  "[&_li]:text-brand-text [&_li]:leading-relaxed [&_li]:relative [&_li]:pl-6 " +
  "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] " +
  "[&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:rounded-full [&_li]:before:bg-brand-accent " +
  "[&_a]:text-brand-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-accentHover " +
  "[&_strong]:text-white [&_strong]:font-semibold " +
  "[&_code]:font-mono [&_code]:text-sm [&_code]:bg-brand-gray/40 [&_code]:text-white [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded";

export function LegalPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div lang="de" className="bg-brand-dark min-h-screen">
      <header className="border-b border-brand-gray/60 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-brand-accent font-semibold uppercase tracking-widest text-xs mb-3">
            Rechtliche Informationen
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {title}
          </h1>
          {intro && <p className="text-brand-text mt-4 max-w-2xl leading-relaxed">{intro}</p>}
          {updated && (
            <p className="text-brand-text/60 text-sm mt-4">Letzte Aktualisierung: {updated}</p>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className={prose}>{children}</article>

        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-brand-gray/50">
          <Link href="/" className="text-brand-accent hover:text-brand-accentHover text-sm font-medium">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Highlighted placeholder token the operator must complete. Impossible to mistake for real data. */
export function PH({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-sm font-semibold text-brand-accent bg-brand-accent/10 border border-dashed border-brand-accent/50 rounded px-1.5 py-0.5 break-words">
      {children}
    </span>
  );
}

/** Flag box for information requiring completion or professional legal review. */
export function LegalNote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-brand-accent/30 border-l-4 border-l-brand-accent bg-brand-accent/[0.06] p-5 sm:p-6">
      <p className="flex items-center gap-2 font-bold text-white m-0">
        <AlertTriangle className="w-5 h-5 text-brand-accent shrink-0" />
        {title}
      </p>
      <div className="mt-2 [&_p]:text-brand-text [&_p]:my-2 [&_p:last-child]:mb-0 [&_li]:text-brand-text">
        {children}
      </div>
    </div>
  );
}
