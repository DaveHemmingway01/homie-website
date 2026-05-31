"use client";

import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";

type LocationStory = {
  title: string;
  place: string;
  note: string;
};

type LocationGalleryProps = {
  label: string;
  title: string;
  lede: string;
  noteLabel: string;
  stories: LocationStory[];
};

const locationImages = [
  {
    src: "/images/locations/coastal-cliff.png",
    alt: "CGI HOMIE tiny home on a coastal cliff buyer plot"
  },
  {
    src: "/images/locations/orchard-guest-house.png",
    alt: "CGI HOMIE tiny home in a rural orchard buyer location"
  },
  {
    src: "/images/locations/villa-pool-suite.png",
    alt: "CGI HOMIE tiny home beside a modern Portuguese villa and pool"
  },
  {
    src: "/images/locations/pine-forest-retreat.png",
    alt: "CGI HOMIE tiny home in a shaded pine and cork oak retreat"
  }
];

export function LocationGallery({ label, title, lede, noteLabel, stories }: LocationGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction === "next" ? track.clientWidth * 0.92 : -track.clientWidth * 0.92,
      behavior: "smooth"
    });
  };

  return (
    <section className="location-gallery" id="locations">
      <div className="location-intro">
        <SectionHeading label={label} title={title} lede={lede} />
        <div className="location-slider-controls">
          <button type="button" onClick={() => scroll("previous")} aria-label="Previous location">
            ←
          </button>
          <button type="button" onClick={() => scroll("next")} aria-label="Next location">
            →
          </button>
        </div>
      </div>
      <div className="location-stack" ref={trackRef} aria-label="HOMIE location use cases">
        {stories.map((story, index) => {
          const image = locationImages[index % locationImages.length];

          return (
            <article className="location-card" key={story.title}>
              <figure className="location-media">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 54vw" />
              </figure>
              <div className="location-copy">
                <small>{story.place}</small>
                <h3>{story.title}</h3>
                <blockquote>
                  “{story.note}”
                  <cite>{noteLabel}</cite>
                </blockquote>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
