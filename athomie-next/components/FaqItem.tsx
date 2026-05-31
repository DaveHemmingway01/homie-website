"use client";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details
      onToggle={(event) => {
        const item = event.currentTarget;
        if (!item.open) return;
        document.querySelectorAll(".faq-list details").forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.removeAttribute("open");
          }
        });
      }}
    >
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}
