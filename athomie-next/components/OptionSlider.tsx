"use client";

import { useRef } from "react";
import { OptionCard } from "@/components/OptionCard";

type OptionSliderProps = {
  options: [string, string][];
  images: string[];
};

export function OptionSlider({ options, images }: OptionSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const distance = track.clientWidth * 0.82;
    track.scrollBy({ left: direction === "next" ? distance : -distance, behavior: "smooth" });
  };

  return (
    <div className="option-slider" aria-label="HOMIE configuration options">
      <div className="option-slider-controls" aria-hidden="false">
        <button type="button" onClick={() => scroll("previous")} aria-label="Previous option">
          ←
        </button>
        <button type="button" onClick={() => scroll("next")} aria-label="Next option">
          →
        </button>
      </div>
      <div className="option-slider-track" ref={trackRef}>
        {options.map(([title, text], index) => (
          <OptionCard key={title} image={images[index]} title={title} text={text} active={index === 0} />
        ))}
      </div>
    </div>
  );
}
