import { t } from "@/lib/locale";

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="site-footer__copyright">{t("footer.copyright")}</span>
      <div className="site-footer__socials" aria-label={t("footer.socialLabel")}>
        <a
          className="site-footer__social-link"
          href="https://www.linkedin.com/in/yuan-jui-wen-7509a7352"
          aria-label={t("footer.linkedin")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin_logo-01.png" alt="" loading="lazy" decoding="async" />
        </a>
        <a
          className="site-footer__social-link"
          href="https://www.instagram.com/__t.tiii/"
          aria-label={t("footer.instagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/instagram_logo.png" alt="" loading="lazy" decoding="async" />
        </a>
      </div>
    </footer>
  );
}
