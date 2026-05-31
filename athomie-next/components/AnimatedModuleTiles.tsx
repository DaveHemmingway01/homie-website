"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedModuleTilesProps = {
  items: string[];
};

function pickSwap(length: number) {
  const first = Math.floor(Math.random() * length);
  let second = Math.floor(Math.random() * length);

  while (second === first) {
    second = Math.floor(Math.random() * length);
  }

  return [first, second] as const;
}

export function AnimatedModuleTiles({ items }: AnimatedModuleTilesProps) {
  const [tiles, setTiles] = useState(items);
  const [fading, setFading] = useState<number[]>([]);
  const tilesRef = useRef(items);

  useEffect(() => {
    tilesRef.current = tiles;
  }, [tiles]);

  useEffect(() => {
    if (items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      const [first, second] = pickSwap(items.length);
      setFading([first, second]);

      window.setTimeout(() => {
        const next = [...tilesRef.current];
        [next[first], next[second]] = [next[second], next[first]];
        tilesRef.current = next;
        setTiles(next);
        setFading([]);
      }, 760);
    }, 4400);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <ul className="module-drift-list" aria-label="HOMIE module examples">
      {tiles.map((item, index) => (
        <li className={fading.includes(index) ? "is-fading" : ""} key={`${item}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
