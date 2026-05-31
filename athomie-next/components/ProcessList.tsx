"use client";

import { useEffect, useRef, useState } from "react";
import { ProcessStep } from "./ProcessStep";

type ProcessListProps = {
  steps: [string, string, string][];
};

export function ProcessList({ steps }: ProcessListProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={listRef} className={`process-steps ${isVisible ? "in-view" : ""}`}>
      {steps.map(([number, title, text]) => (
        <ProcessStep key={number} number={number} title={title} text={text} />
      ))}
    </ol>
  );
}
