"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

type ConfigModule = {
  id: string;
  title: string;
  text: string;
  category: string;
  tag: string;
};

type ConfigPreset = {
  id: string;
  title: string;
  text: string;
  modules: string[];
};

type ConfiguratorLabels = {
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

type CascoConfiguratorProps = {
  labels: ConfiguratorLabels;
  presets: ConfigPreset[];
  modules: ConfigModule[];
};

export function CascoConfigurator({ labels, presets, modules }: CascoConfiguratorProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [activePreset, setActivePreset] = useState("casco");
  const [saved, setSaved] = useState(false);

  const selectedModules = useMemo(
    () => modules.filter((module) => selectedIds.has(module.id)),
    [modules, selectedIds]
  );
  const selectedCategories = new Set(selectedModules.map((module) => module.category));
  const scopeLevel =
    selectedModules.length === 0 ? labels.levels[0] : selectedModules.length <= 3 ? labels.levels[1] : labels.levels[2];

  const toggleModule = (moduleId: string) => {
    setSaved(false);
    setActivePreset("custom");
    setSelectedIds((current) => {
      const next = new Set(current);

      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }

      return next;
    });
  };

  const applyPreset = (preset: ConfigPreset) => {
    setSaved(false);
    setActivePreset(preset.id);
    setSelectedIds(new Set(preset.modules));
  };

  const saveScope = () => {
    const scope = {
      base: labels.baseTitle,
      modules: selectedModules.map((module) => module.title),
      scopeLevel,
      savedAt: new Date().toISOString()
    };

    localStorage.setItem("athomie.configuratorScope", JSON.stringify(scope));
    setSaved(true);
  };

  return (
    <div className="casco-configurator" aria-label="HOMIE casco configurator">
      <div className="configurator-stage">
        <div className="casco-visual" data-count={selectedModules.length}>
          <figure className="config-render-frame">
            <Image
              src="/images/renders/homie-exterior-day.png"
              alt="Photorealistic HOMIE exterior scope preview"
              fill
              sizes="(max-width: 760px) 100vw, 38vw"
              priority
            />
            <figcaption>
              <span>{labels.scopeLabel}</span>
              <strong>{scopeLevel}</strong>
            </figcaption>
            <div className="config-render-overlay" aria-hidden="true">
              <span className="render-marker marker-shell">Casco</span>
              {selectedIds.has("deck") ? <span className="render-marker marker-deck">Deck</span> : null}
              {selectedIds.has("solar") ? <span className="render-marker marker-solar">Solar prep</span> : null}
              {selectedIds.has("pergola") ? <span className="render-marker marker-pergola">Pergola</span> : null}
            </div>
          </figure>
          <div className="config-render-modules" aria-live="polite">
            {selectedModules.length ? (
              selectedModules.map((module, index) => (
                <article key={module.id}>
                  <Image
                    src={index === 0 ? "/images/renders/homie-interior.png" : "/images/renders/homie-evening-deck.png"}
                    alt=""
                    fill
                    sizes="120px"
                  />
                  <strong>{module.title}</strong>
                </article>
              ))
            ) : (
              <article className="empty-module-preview">
                <Image src="/images/renders/homie-workshop-detail.png" alt="" fill sizes="120px" />
                <strong>{labels.baseTitle}</strong>
              </article>
            )}
          </div>
        </div>
        <article className="base-card">
          <small>{labels.scopeLabel}</small>
          <h3>{labels.baseTitle}</h3>
          <p>{labels.baseText}</p>
        </article>
      </div>

      <div className="configurator-controls">
        <section className="preset-panel" aria-labelledby="presetTitle">
          <h3 id="presetTitle">{labels.presetsTitle}</h3>
          <div className="preset-grid">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className={activePreset === preset.id ? "active" : ""}
                onClick={() => applyPreset(preset)}
              >
                <strong>{preset.title}</strong>
                <span>{preset.text}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="module-panel" aria-labelledby="moduleTitle">
          <h3 id="moduleTitle">{labels.modulesTitle}</h3>
          <div className="module-grid">
            {modules.map((module) => (
              <button
                key={module.id}
                type="button"
                className={selectedIds.has(module.id) ? "selected" : ""}
                onClick={() => toggleModule(module.id)}
                aria-pressed={selectedIds.has(module.id)}
              >
                <span>{module.tag}</span>
                <strong>{module.title}</strong>
                <small>{module.category}</small>
                <em>{module.text}</em>
              </button>
            ))}
          </div>
        </section>

        <aside className="config-summary">
          <h3>{labels.summaryTitle}</h3>
          <dl>
            <div>
              <dt>{labels.scopeLabel}</dt>
              <dd>{scopeLevel}</dd>
            </div>
            <div>
              <dt>{labels.marginLabel}</dt>
              <dd>{selectedCategories.size}</dd>
            </div>
            <div>
              <dt>{labels.productionLabel}</dt>
              <dd>{selectedModules.length}</dd>
            </div>
          </dl>
          <strong>{labels.selectedLabel}</strong>
          <ul>
            {selectedModules.length ? (
              selectedModules.map((module) => <li key={module.id}>{module.title}</li>)
            ) : (
              <li>{labels.noModules}</li>
            )}
          </ul>
          <div className="summary-actions">
            <button type="button" className="button button-secondary" onClick={saveScope}>
              {saved ? labels.saved : labels.save}
            </button>
            <Button href="#lead-form">{labels.cta}</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
