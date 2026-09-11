import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Brotkrümelnavigation" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-text">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1">
                {isLast ? (
                  <span className="text-white/90" aria-current="page">{item.name}</span>
                ) : (
                  <>
                    <Link href={item.path} className="hover:text-brand-accent transition-colors">
                      {item.name}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
