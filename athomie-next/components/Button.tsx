"use client";

import type { MouseEvent, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  full?: boolean;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", full = false, type = "button" }: ButtonProps) {
  const className = ["button", `button-${variant}`, full ? "button-full" : ""].filter(Boolean).join(" ");

  if (href) {
    if (href.startsWith("#")) {
      const handleHashClick = (event: MouseEvent<HTMLAnchorElement>) => {
        const target = document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();
        window.history.pushState(null, "", href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      return (
        <a className={className} href={href} onClick={handleHashClick}>
          {children}
        </a>
      );
    }

    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
