import Link from "next/link";
import { Button } from "@/components/ui/Button";

/**
 * Closing call-to-action. Heading/text are passed per page so the section is
 * structurally reused but never duplicate content.
 */
export function Cta({
  heading,
  text,
  primaryLabel = "Preise ansehen",
  primaryHref = "/preise",
  secondaryLabel,
  secondaryHref,
}: {
  heading: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl border border-brand-gray/60 p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-brand-text max-w-2xl mx-auto mb-8 leading-relaxed">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref}>
              <Button size="lg" className="w-full sm:w-auto">{primaryLabel}</Button>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-gray text-white hover:bg-brand-gray">
                  {secondaryLabel}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
