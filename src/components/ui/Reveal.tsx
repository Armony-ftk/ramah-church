"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "article";
  children: ReactNode;
  className?: string;
};

export default function Reveal({
  as: Tag = "div",
  children,
  className,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      !element ||
      motionPreference.matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    // Keep server-rendered and already-visible content immediately available.
    if (
      element.getBoundingClientRect().top < window.innerHeight ||
      element.contains(document.activeElement)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    function finish() {
      // Remove animation styles after completion, focus, or a preference change.
      element?.removeAttribute("data-reveal");
      observer.disconnect();
      motionPreference.removeEventListener("change", finish);
      element?.removeEventListener("focusin", finish);
      element?.removeEventListener("animationend", onAnimationEnd);
    }

    function onAnimationEnd(event: AnimationEvent) {
      if (event.target === element) finish();
    }

    observer.observe(element);
    element.dataset.reveal = "pending";
    motionPreference.addEventListener("change", finish);
    element.addEventListener("focusin", finish);
    element.addEventListener("animationend", onAnimationEnd);

    return finish;
  }, []);

  return (
    <Tag
      ref={(element) => {
        elementRef.current = element;
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
