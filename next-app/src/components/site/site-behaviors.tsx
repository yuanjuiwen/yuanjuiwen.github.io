"use client";

import { useEffect } from "react";

// Loaded up front: the intro has to start as soon as possible.
import { initPreloader } from "@/legacy/preloader";
import { initPageTransitions } from "@/legacy/page-transitions";

export type PageBehavior = "home" | "colendar" | "eyezen" | "oculus";

/** Starts the original site's scripts (ported to src/legacy) once the page has hydrated. */
export function SiteBehaviors({ page }: { page?: PageBehavior }) {
  useEffect(() => {
    let cancelled = false;
    if (page === "home") initPreloader();
    (async () => {
      // Page-specific scripts load on demand (OCULUS pulls in Chart.js).
      if (page === "colendar") (await import("@/legacy/colendar")).initColendarPage();
      if (page === "eyezen") (await import("@/legacy/eyezen")).initEyezenPage();
      if (page === "oculus") (await import("@/legacy/oculus")).initOculusPage();
      if (!cancelled) initPageTransitions();
    })();
    return () => {
      cancelled = true;
    };
  }, [page]);

  return null;
}
