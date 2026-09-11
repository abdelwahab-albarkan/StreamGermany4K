import Image from "next/image";

/**
 * Official StreamGermany4K logo (real asset: /public/images/logo.png, 2172×724,
 * transparent PNG). Rendered with next/image at intrinsic aspect ratio; size is
 * controlled purely by a height class + `w-auto`, so it never stretches and
 * causes no layout shift. `priority` for the above-the-fold navbar instance.
 */
export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="StreamGermany4K"
      width={2172}
      height={724}
      priority={priority}
      sizes="220px"
      className={className}
    />
  );
}
