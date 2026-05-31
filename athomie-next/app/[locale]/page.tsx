import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { BenefitItem } from "@/components/BenefitItem";
import { Button } from "@/components/Button";
import { FaqItem } from "@/components/FaqItem";
import { LeadQuiz } from "@/components/LeadQuiz";
import { LocationGallery } from "@/components/LocationGallery";
import { ProcessList } from "@/components/ProcessList";
import { SectionHeading } from "@/components/SectionHeading";
import { SeoSchema } from "@/components/SeoSchema";
import { SpecCard } from "@/components/SpecCard";
import type { Locale } from "@/content/site";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const heroProof = t.raw("hero.proof") as string[];
  const specs = t.raw("specs") as [string, string, string][];
  const teaserModules = t.raw("configurator.modules") as { title: string }[];
  const benefits = t.raw("benefits") as [string, string][];
  const comparisonRows = t.raw("comparison.rows") as [string, string, string, string][];
  const comparisonProof = t.raw("comparison.proof") as [string, string][];
  const buyerPaths = t.raw("buyerPaths.items") as [string, string, string][];
  const locationStories = t.raw("locationStories") as { title: string; place: string; note: string }[];
  const techLayers = t.raw("techLayers") as string[];
  const techProof = t.raw("techProof") as [string, string][];
  const process = t.raw("process") as [string, string, string][];
  const included = t.raw("included") as string[];
  const excluded = t.raw("excluded") as string[];
  const warranty = t.raw("warranty") as string[];
  const priceBullets = t.raw("priceBullets") as string[];
  const scopeFactors = t.raw("scopeFactors") as [string, string][];
  const riskChecks = t.raw("riskChecks") as [string, string][];
  const climatePoints = t.raw("climatePoints") as [string, string][];
  const faqs = t.raw("faq") as [string, string][];

  return (
    <main id="top" className="commerce-page">
      <SeoSchema
        locale={locale}
        heroTitle={t("hero.title")}
        heroLede={t("hero.lede")}
        process={process}
        faqs={faqs}
      />
      <section className="commerce-hero">
        <div className="hero-panel">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.lede")}</p>
          <div className="commerce-actions">
            <Button href="/configure">{t("hero.primaryCta")}</Button>
          </div>
          <ul className="hero-proof" aria-label="HOMIE proof points">
            {heroProof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <figure className="hero-product">
          <Image
            src="/images/renders/homie-exterior-day.png"
            alt="HOMIE timber tiny home in a Portuguese landscape"
            width={1586}
            height={992}
            sizes="(max-width: 760px) 100vw, 55vw"
            priority
          />
        </figure>
      </section>

      <section className="spec-rail" id="model" aria-label="HOMIE key specifications">
        {specs.map(([number, title, text]) => (
          <SpecCard key={number} number={number} title={title} text={text} />
        ))}
      </section>

      <section className="config-section" id="configure">
        <div>
          <SectionHeading
            label={t("sections.configure.label")}
            title={t("sections.configure.title")}
            lede={t("sections.configure.lede")}
          />
          <Button href="/configure">{t("sections.configure.cta")}</Button>
        </div>
        <div className="config-teaser" aria-label="HOMIE configurator preview">
          <div className="teaser-shell">
            <Image
              className="teaser-render"
              src="/images/renders/homie-exterior-day.png"
              alt="Photorealistic HOMIE configurator concept preview"
              fill
              sizes="(max-width: 760px) 100vw, 46vw"
            />
            <div className="teaser-visual-layer" aria-hidden="true">
              <span className="scope-badge">Casco shell</span>
              <span className="scope-card scope-card-a">Interior modules</span>
              <span className="scope-card scope-card-b">Deck / solar prep</span>
              <span className="scope-line scope-line-a" />
              <span className="scope-line scope-line-b" />
            </div>
          </div>
          <ul>
            {[teaserModules[0], teaserModules[1], teaserModules[5], teaserModules[7]].map((module) => (
              <li key={module.title}>{module.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lifestyle-section">
        <figure>
          <Image
            src="/images/renders/homie-interior.png"
            alt="Warm compact HOMIE interior facing a Portuguese landscape"
            width={1586}
            height={992}
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </figure>
        <div>
          <SectionHeading
            label={t("sections.lifestyle.label")}
            title={t("sections.lifestyle.title")}
            lede={t("sections.lifestyle.lede")}
          />
          <div className="benefit-grid">
            {benefits.map(([title, text]) => (
              <BenefitItem key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section" id="comparison">
        <div className="comparison-intro">
          <SectionHeading
            label={t("sections.comparison.label")}
            title={t("sections.comparison.title")}
            lede={t("sections.comparison.lede")}
          />
          <div className="comparison-proof">
            {comparisonProof.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="comparison-table" role="table" aria-label={t("sections.comparison.title")}>
          <div className="comparison-head" role="row">
            <span role="columnheader">{t("comparison.headers.factor")}</span>
            <span role="columnheader">{t("comparison.headers.chalet")}</span>
            <span role="columnheader">{t("comparison.headers.mobile")}</span>
            <span role="columnheader">{t("comparison.headers.homie")}</span>
          </div>
          {comparisonRows.map(([factor, chalet, mobile, homie]) => (
            <div className="comparison-row" role="row" key={factor}>
              <strong role="cell" data-label={t("comparison.headers.factor")}>
                {factor}
              </strong>
              <span role="cell" data-label={t("comparison.headers.chalet")}>
                {chalet}
              </span>
              <span role="cell" data-label={t("comparison.headers.mobile")}>
                {mobile}
              </span>
              <span role="cell" className="homie-cell" data-label={t("comparison.headers.homie")}>
                {homie}
              </span>
            </div>
          ))}
        </div>
        <div className="section-action">
          <Button href="#lead-form">{t("sections.comparison.cta")}</Button>
        </div>
      </section>

      <section className="buyer-path-section">
        <SectionHeading
          label={t("sections.buyerPaths.label")}
          title={t("sections.buyerPaths.title")}
          lede={t("sections.buyerPaths.lede")}
        />
        <div className="buyer-path-grid">
          {buyerPaths.map(([title, text, next]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
              <span>{next}</span>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Button href="#lead-form" variant="secondary">
            {t("sections.buyerPaths.cta")}
          </Button>
        </div>
      </section>

      <section className="risk-section">
        <div>
          <SectionHeading
            label={t("sections.risks.label")}
            title={t("sections.risks.title")}
            lede={t("sections.risks.lede")}
          />
          <Button href="#lead-form" variant="secondary">
            {t("sections.risks.cta")}
          </Button>
        </div>
        <div className="risk-grid">
          {riskChecks.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-commerce" id="process">
        <SectionHeading
          label={t("sections.process.label")}
          title={t("sections.process.title")}
          lede={t("sections.process.lede")}
        />
        <ProcessList steps={process} />
      </section>

      <section className="included-section" id="scope-clarity">
        <div className="included-intro">
          <SectionHeading
            label={t("sections.included.label")}
            title={t("sections.included.title")}
            lede={t("sections.included.lede")}
          />
        </div>
        <div className="included-card">
          <span aria-hidden="true">✓</span>
          <h3>{t("sections.included.includedTitle")}</h3>
          <ul>
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="included-card muted">
          <span aria-hidden="true">!</span>
          <h3>{t("sections.included.excludedTitle")}</h3>
          <ul>
            {excluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="included-card warranty-card">
          <span aria-hidden="true">§</span>
          <h3>{t("sections.included.warrantyTitle")}</h3>
          <p>{t("sections.included.warrantyNote")}</p>
          <ul>
            {warranty.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="price-section">
        <div>
          <SectionHeading
            label={t("sections.price.label")}
            title={t("sections.price.title")}
            lede={t("sections.price.lede")}
          />
          <Link href="#lead-form">{t("sections.price.link")}</Link>
        </div>
        <figure className="price-media">
          <Image
            src="/images/renders/homie-evening-deck.png"
            alt="HOMIE deck atmosphere in the evening"
            fill
            sizes="(max-width: 760px) 100vw, 34vw"
          />
        </figure>
        <aside>
          <strong>{t("sections.price.asideTitle")}</strong>
          <ul>
            {priceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="scope-section">
        <SectionHeading
          label={t("sections.scope.label")}
          title={t("sections.scope.title")}
          lede={t("sections.scope.lede")}
        />
        <div className="scope-factor-grid">
          {scopeFactors.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lead-quiz" id="lead-form">
        <div className="quiz-copy">
          <SectionHeading
            label={t("sections.quiz.label")}
            title={t("sections.quiz.title")}
            lede={t("sections.quiz.lede")}
          />
        </div>
        <LeadQuiz />
      </section>

      <LocationGallery
        label={t("sections.locations.label")}
        title={t("sections.locations.title")}
        lede={t("sections.locations.lede")}
        noteLabel={t("sections.locations.noteLabel")}
        stories={locationStories}
      />

      <section className="technology-section" id="technology">
        <div>
          <SectionHeading
            label={t("sections.technology.label")}
            title={t("sections.technology.title")}
            lede={t("sections.technology.lede")}
          />
          <Link href="#faq">{t("sections.technology.link")}</Link>
        </div>
        <div className="wall-system" aria-label="Construction layer illustration">
          {techLayers.map((_, index) => (
            <span key={index + 1}>{index + 1}</span>
          ))}
        </div>
        <ul className="tech-list">
          {techLayers.map((layer) => (
            <li key={layer}>{layer}</li>
          ))}
        </ul>
        <div className="tech-proof">
          {techProof.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="climate-section">
        <figure>
          <Image
            src="/images/locations/coastal-cliff.png"
            alt="HOMIE tiny home positioned for Portuguese light and landscape"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
        </figure>
        <div>
          <SectionHeading
            label={t("sections.climate.label")}
            title={t("sections.climate.title")}
            lede={t("sections.climate.lede")}
          />
          <div className="climate-grid">
            {climatePoints.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-commerce">
        <div>
          <SectionHeading
            label={t("sections.trust.label")}
            title={t("sections.trust.title")}
            lede={t("sections.trust.lede")}
          />
        </div>
        <figure className="trust-media">
          <Image
            src="/images/renders/homie-workshop-detail.png"
            alt="Timber construction detail for HOMIE"
            fill
            sizes="(max-width: 760px) 100vw, 30vw"
          />
        </figure>
        <blockquote>
          “{t("sections.trust.quote")}”
          <cite>{t("sections.trust.cite")}</cite>
        </blockquote>
      </section>

      <section className="section faq-section" id="faq">
        <SectionHeading label={t("sections.faq.label")} title={t("sections.faq.title")} />
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </section>
      <a className="back-to-top" href="#top" aria-label={t("backToTop")}>
        ↑
        <span>{t("backToTop")}</span>
      </a>
    </main>
  );
}
