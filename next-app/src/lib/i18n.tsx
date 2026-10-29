"use client";

import * as React from "react";
import { translate, type Lang } from "@/lib/locale";

// Same storage keys as the original i18n.js, so a visitor's choice carries over.
const STORAGE_KEY = "colendar_lang";
const LEGACY_STORAGE_KEY = "site_lang";
const CHANGE_EVENT = "colendar-lang-change";

// Fallback when storage is blocked (e.g. some private modes).
let memoryLang: Lang | null = null;

function readLang(): Lang {
  if (memoryLang) return memoryLang;
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      saved = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (saved === "en" || saved === "zh-Hant") {
        localStorage.setItem(STORAGE_KEY, saved);
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      }
    }
    return saved === "zh-Hant" ? "zh-Hant" : "en";
  } catch {
    return "en";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

type I18n = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const englishOnly: I18n = {
  lang: "en",
  setLang: () => {},
  t: (key, params) => translate("en", key, params),
};

const I18nContext = React.createContext<I18n>(englishOnly);

/** Enables the language switch. Only the Colendar page uses it, as on the original site. */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = React.useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-site-lang", lang);
    // The section navigation re-measures itself on this event.
    document.dispatchEvent(new CustomEvent("site-language-changed", { detail: { lang } }));
  }, [lang]);

  const setLang = React.useCallback((next: Lang) => {
    memoryLang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const value = React.useMemo<I18n>(
    () => ({ lang, setLang, t: (key, params) => translate(lang, key, params) }),
    [lang, setLang]
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return React.useContext(I18nContext);
}
