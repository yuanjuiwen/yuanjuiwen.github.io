import en from "@/locales/en.json";
import zhHant from "@/locales/zh-Hant.json";

export type Lang = "en" | "zh-Hant";
export const LOCALES: Record<Lang, unknown> = { en, "zh-Hant": zhHant };

function getByPath(obj: unknown, key: string): string | undefined {
  let ref: unknown = obj;
  for (const part of key.split(".")) {
    if (ref == null || typeof ref !== "object") return undefined;
    ref = (ref as Record<string, unknown>)[part];
  }
  return typeof ref === "string" ? ref : undefined;
}

/** Same lookup as the original i18n.js: current language, then English, then the key itself. */
export function translate(lang: Lang, key: string, params?: Record<string, string | number>) {
  const val = getByPath(LOCALES[lang], key) ?? getByPath(LOCALES.en, key) ?? key;
  if (!params) return val;
  return val.replace(/\{(\w+)\}/g, (_, k: string) => (params[k] != null ? String(params[k]) : ""));
}

/** English text for server-rendered pages (every page except Colendar is English-only). */
export const t = (key: string, params?: Record<string, string | number>) => translate("en", key, params);
