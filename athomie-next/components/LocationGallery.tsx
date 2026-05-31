"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const pausedRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const setActive = (index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;

    if (!track || !card) {
      return;
    }

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth"
    });
    setActive(index);
  };

  const scroll = (direction: "previous" | "next") => {
    const nextIndex =
      direction === "next"
        ? (activeIndexRef.current + 1) % stories.length
        : (activeIndexRef.current - 1 + stories.length) % stories.length;

    if (!stories.length) {
      return;
    }

    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track || stories.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const updateActiveFromScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const nearest = cards.reduce(
        (best, card, index) => {
          const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      );

      setActive(nearest.index);
    };

    const timer = window.setInterval(() => {
      if (!pausedRef.current) {
        scroll("next");
      }
    }, 4600);

    track.addEventListener("scroll", updateActiveFromScroll, { passive: true });

    return () => {
      window.clearInterval(timer);
      track.removeEventListener("scroll", updateActiveFromScroll);
    };
  }, [stories.length]);

  return (
    <section
      className="location-gallery"
      id="locations"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocus={() => {
        pausedRef.current = true;
      }}
      onBlur={() => {
        pausedRef.current = false;
      }}
    >
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
        <div className="location-progress" aria-label="Location slide progress">
          {stories.map((story, index) => (
            <button
              type="button"
              key={story.title}
              className={index === activeIndex ? "active" : ""}
              onClick={() => scrollToIndex(index)}
              aria-label={`Show location ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
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
