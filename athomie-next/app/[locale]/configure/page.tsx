import { useTranslations } from "next-intl";
import { CascoConfigurator } from "@/components/CascoConfigurator";
import { LeadQuiz } from "@/components/LeadQuiz";
import { SectionHeading } from "@/components/SectionHeading";

export default function ConfigurePage() {
  const t = useTranslations();
  const configuratorLabels = t.raw("configurator.labels") as {
    baseTitle: string;
    baseText: string;
    presetsTitle: string;
    modulesTitle: string;
    summaryTitle: string;
    selectedLabel: string;
    noModules: string;
    scopeLabel: string;
    marginLabel: string;
    productionLabel: string;
    save: string;
    saved: string;
    cta: string;
    levels: string[];
  };
  const configuratorPresets = t.raw("configurator.presets") as {
    id: string;
    title: string;
    text: string;
    modules: string[];
  }[];
  const configuratorModules = t.raw("configurator.modules") as {
    id: string;
    title: string;
    text: string;
    category: string;
    tag: string;
  }[];

  return (
    <main id="top" className="commerce-page configure-page">
      <section className="configure-hero">
        <SectionHeading
          label={t("sections.configure.label")}
          title={t("sections.configure.title")}
          lede={t("sections.configure.lede")}
        />
      </section>

      <section className="configure-tool-section">
        <CascoConfigurator
          labels={configuratorLabels}
          presets={configuratorPresets}
          modules={configuratorModules}
        />
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

      <a className="back-to-top" href="#top" aria-label={t("backToTop")}>
        ↑
        <span>{t("backToTop")}</span>
      </a>
    </main>
  );
}
