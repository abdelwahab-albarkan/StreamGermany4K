import React from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Reusable section heading for consistent homepage rhythm:
 * optional eyebrow (uppercase, gradient), a title (pass a <span className="text-gradient">
 * for the highlighted word), and an optional subtitle. Defaults to centered.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  icon: Icon,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  icon?: LucideIcon;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-2xl ${isCenter ? "" : ""} ${className}`}>
      {eyebrow && (
        <p className={`flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-3 ${isCenter ? "justify-center" : ""}`}>
          {Icon && <Icon className="w-4 h-4" />}
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-brand-text text-lg leading-relaxed mt-3">{subtitle}</p>}
    </div>
  );
}
