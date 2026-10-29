"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const RESUME_URL = "https://drive.google.com/file/d/1zUd77evxGmOmOf-U2A0rWiG_1yQkBVCH/view?usp=sharing";

/**
 * Top navigation, same markup and classes as the original.
 * `current="home"` uses in-page anchors; `current="about"` marks About as active.
 */
export function Navbar({ current, langSwitch }: { current?: "home" | "about"; langSwitch?: boolean }) {
  const { t } = useI18n();
  const home = current === "home" ? "" : "/";

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1 className="brand">
          <a href="/">Kevin Wen</a>
        </h1>
        <div className="navbar-tools">
          <ul className="nav-links">
            <li>
              <a href={`${home}#work`}>{t("nav.work")}</a>
            </li>
            <li>
              <a href={`${home}#play`}>{t("nav.play")}</a>
            </li>
            <li>
              <a className={current === "about" ? "active" : undefined} href="/about/" aria-current={current === "about" ? "page" : undefined}>
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label={t("nav.resumeAria")}>
                {t("nav.resume")}
              </a>
            </li>
          </ul>
          {langSwitch && <LanguageToggle />}
        </div>
      </div>
    </nav>
  );
}

function LanguageToggle() {
  const { lang, setLang, t } = useI18n();
  const target = lang === "en" ? t("lang.zhHant") : t("lang.en");
  return (
    <div className="lang-switcher navbar-lang" role="group" aria-label={t("nav.switcherAria")}>
      <Button
        type="button"
        variant="ghost"
        className="lang-toggle is-active inline-block h-auto leading-[normal]"
        aria-pressed="true"
        aria-label={`Switch language to ${target}`}
        onClick={() => setLang(lang === "en" ? "zh-Hant" : "en")}
      >
        {target}
      </Button>
    </div>
  );
}
