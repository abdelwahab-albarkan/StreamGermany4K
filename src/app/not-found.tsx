"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getLocaleFromPath } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <div className="pt-40 pb-28 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mx-auto mb-6 text-brand-accent">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{dict.notFound.title}</h1>
        <p className="text-brand-text mb-8 leading-relaxed">{dict.notFound.text}</p>
        <Link href={homeHref}>
          <Button size="lg" className="gap-2 inline-flex items-center">
            <ArrowLeft className="w-4 h-4" />
            {dict.notFound.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}
