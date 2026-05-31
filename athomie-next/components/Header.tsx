"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "./Button";

export function Header() {
  const t = useTranslations("nav");
  const brand = useTranslations("brand");
  const locale = useLocale();
  const languageLinks = [
    ["en", "EN"],
    ["pt", "PT"],
    ["de", "DE"],
    ["nl", "NL"]
  ];
  const navItems = [
    ["/#model", t("models")],
    ["/configure", t("configurator")],
    ["/#technology", t("technology")],
    ["/#process", t("process")],
    ["/#faq", t("faq")]
  ];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="HOMIE home">
        <Image className="brand-logo" src="/images/brand/homie-logo.png" alt="HOMIE" width={719} height={249} priority />
        <span className="brand-tagline">{brand("tagline")}</span>
      </Link>
      <input className="mobile-menu-toggle" id="mobileMenuToggle" type="checkbox" aria-label="Open navigation menu" />
      <label className="hamburger-button" htmlFor="mobileMenuToggle" aria-label="Open navigation menu">
        <span />
        <span />
        <span />
      </label>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([href, label]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <details className="language-menu">
          <summary aria-label="Choose language">
            <span>{String(locale).toUpperCase()}</span>
          </summary>
          <div>
            {languageLinks.map(([code, label]) => (
              <Link key={code} className={locale === code ? "active" : ""} href="/" locale={code}>
                {label}
              </Link>
            ))}
          </div>
        </details>
        <Button href="/#lead-form">{t("requestBrochure")}</Button>
      </div>
    </header>
  );
}
