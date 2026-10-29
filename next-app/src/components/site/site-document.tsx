import type { ReactNode } from "react";

import { leagueSpartan } from "@/app/fonts";
import { SiteBehaviors, type PageBehavior } from "@/components/site/site-behaviors";
import "@/app/globals.css";

/**
 * The <html>/<body> shell shared by every page.
 * Each page group has its own root layout so the body can carry the page class
 * the original stylesheet targets (body.page-about, body.page-colendar, …).
 */
export function SiteDocument({
  bodyClassName,
  behavior,
  head,
  bodyStart,
  children,
}: {
  bodyClassName?: string;
  behavior?: PageBehavior;
  head?: ReactNode;
  /** Inline content that must run before the first paint (e.g. the intro check). */
  bodyStart?: ReactNode;
  children: ReactNode;
}) {
  return (
    <html lang="en" data-site-lang="en" className={leagueSpartan.variable} style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#fff9f0" />
        {head}
      </head>
      <body className={bodyClassName} suppressHydrationWarning>
        {bodyStart}
        <div className="page-transition-overlay" aria-hidden="true" />
        {children}
        <SiteBehaviors page={behavior} />
      </body>
    </html>
  );
}
