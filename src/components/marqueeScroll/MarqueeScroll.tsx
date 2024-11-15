"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type MarqueeScrollProps = {
  children: React.ReactNode;
};

export default function MarqueeScroll({ children }: MarqueeScrollProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth;
      const triggerSection = marqueeRef.current.parentElement;

      gsap.to(marqueeRef.current, {
        x: -marqueeWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerSection,
          start: "top top",
          end: `+=${marqueeWidth}`,
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <section className="relative py-4 overflow-hidden">
      <div
        ref={marqueeRef}
        className="inline-block whitespace-nowrap p-10"
        style={{ display: "inline-flex", gap: "2rem" }}
      >
        {children}
      </div>
    </section>
  );
}
