import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteSettings } from "@/content/site";

function Icon({ label }: { label: string }) {
  return (
    <span aria-hidden="true" className="social-glyph">
      {label}
    </span>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const companyLinks = t.raw("links") as string[];

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-brand">
        <strong>{siteSettings.brand}</strong>
        <p>{t("description")}</p>
        <p>
          <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
        </p>
        <p>{t("address")}</p>
      </div>
      <nav className="footer-column" aria-label="Explore">
        <strong>{t("explore")}</strong>
        <Link href="/#model">{nav("models")}</Link>
        <Link href="/configure">{nav("configurator")}</Link>
        <Link href="/#technology">{nav("technology")}</Link>
        <Link href="/#process">{nav("process")}</Link>
        <Link href="/#faq">{nav("faq")}</Link>
      </nav>
      <nav className="footer-column" aria-label="Company">
        <strong>{t("company")}</strong>
        <Link href="/">{companyLinks[0]}</Link>
        <Link href="/#technology">{companyLinks[1]}</Link>
        <Link href="/#lead-form">{companyLinks[2]}</Link>
        <a href={siteSettings.socials.maps}>{companyLinks[3]}</a>
      </nav>
      <div className="footer-newsletter">
        <strong>{t("stay")}</strong>
        <p>{t("stayText")}</p>
        <form className="newsletter-form">
          <label className="sr-only" htmlFor="footerEmail">
            {t("emailPlaceholder")}
          </label>
          <input id="footerEmail" type="email" placeholder={t("emailPlaceholder")} />
          <button type="button" aria-label="Submit newsletter email">
            →
          </button>
        </form>
        <nav className="social-links" aria-label="Social and location links">
          <a href={siteSettings.socials.youtube} aria-label="HOMIE on YouTube">
            <Icon label="▶" />
          </a>
          <a href={siteSettings.socials.x} aria-label="HOMIE on X">
            <Icon label="X" />
          </a>
          <a href={siteSettings.socials.facebook} aria-label="HOMIE on Facebook">
            <Icon label="f" />
          </a>
          <a href={siteSettings.socials.instagram} aria-label="HOMIE on Instagram">
            <Icon label="◎" />
          </a>
          <a href={siteSettings.socials.linkedin} aria-label="HOMIE on LinkedIn">
            <Icon label="in" />
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>{t("copyright")}</p>
        <nav aria-label="Legal links">
          <Link href="/privacy">{t("privacy")}</Link>
          <Link href="/terms">{t("terms")}</Link>
        </nav>
      </div>
    </footer>
  );
}
