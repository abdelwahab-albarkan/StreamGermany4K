import React from "react";

/**
 * Tags the English content subtree with `lang="en-GB"` in the server-rendered
 * HTML (`display: contents`, so it has no layout effect). The `<html>` element's
 * runtime lang is kept in sync by the root-level HtmlLangHandler.
 */
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en-GB" className="contents">
      {children}
    </div>
  );
}
