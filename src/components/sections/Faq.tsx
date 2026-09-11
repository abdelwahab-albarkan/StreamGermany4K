import { JsonLd, faqSchema } from "@/lib/jsonld";

export interface QA {
  q: string;
  a: string;
}

/**
 * Renders a FAQ section plus FAQPage JSON-LD. Pass genuinely useful, page-specific
 * questions only. `withSchema` defaults to true; set false to render the visible
 * list without structured data (e.g. when the same Q&A appears elsewhere).
 */
export function Faq({
  items,
  heading = "Häufige Fragen",
  withSchema = true,
}: {
  items: QA[];
  heading?: string;
  withSchema?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section id="faq" className="py-16 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {withSchema && <JsonLd data={faqSchema(items)} />}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">{heading}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group glass rounded-xl border border-brand-gray/50 p-5 open:border-brand-accent/40 transition-colors"
            >
              <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
                {item.q}
                <span className="text-brand-accent transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="text-brand-text mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
