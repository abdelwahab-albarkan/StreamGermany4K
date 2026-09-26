import React from "react";
import { HtmlLangHandler } from "@/components/ui/HtmlLangHandler";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en-GB" className="contents">
      <HtmlLangHandler lang="en-GB" />
      {children}
    </div>
  );
}
