"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "./Button";

export function LeadQuiz() {
  const t = useTranslations("quiz");
  const [status, setStatus] = useState("");
  const [configScope, setConfigScope] = useState("");
  const useCases = t.raw("useCases") as string[];
  const styles = t.raw("styles") as string[];
  const budgets = t.raw("budgets") as string[];

  useEffect(() => {
    const storedScope = localStorage.getItem("athomie.configuratorScope");

    if (storedScope) {
      setConfigScope(storedScope);
    }
  }, []);

  return (
    <form
      className="quiz-form lead-form"
      id="leadForm"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        if (formData.get("website")) {
          return;
        }

        const payload = {
          ...Object.fromEntries(formData.entries()),
          createdAt: new Date().toISOString()
        };

        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          setStatus(t("error"));
          return;
        }

        localStorage.setItem("athomie.leadDraft", JSON.stringify(payload));
        setStatus(t("success"));
        form.reset();
      }}
    >
      <input className="hidden-field" name="website" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="configuratorScope" value={configScope} />
      <div className="quiz-steps">
        <fieldset>
          <legend>
            <span>1</span> {t("q1")}
          </legend>
          {useCases.map((item, index) => (
            <label key={item}>
              <input type="radio" name="useCase" value={item} required={index === 0} /> {item}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>
            <span>2</span> {t("q2")}
          </legend>
          {styles.map((item, index) => (
            <label key={item}>
              <input type="radio" name="style" value={item} required={index === 0} /> {item}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>
            <span>3</span> {t("q3")}
          </legend>
          {budgets.map((item, index) => (
            <label key={item}>
              <input type="radio" name="budget" value={item} required={index === 0} /> {item}
            </label>
          ))}
        </fieldset>
      </div>
      <div className="contact-row">
        <label>
          <span>{t("name")}</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>{t("email")}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>{t("country")}</span>
          <input name="country" autoComplete="country-name" />
        </label>
      </div>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>{t("consent")}</span>
      </label>
      <Button type="submit" full>
        {t("submit")}
      </Button>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
