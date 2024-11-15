"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const paragraphs = [
    "Part One",
    "Part Two",
    "Part Three",
    "Part Four",
    "Part Five",
  ];
  const styles = {
    odd: "bg-black text-white",
    even: "bg-white text-black",
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalWidth = section.scrollWidth - window.innerWidth;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 2,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(section, {
      x: -totalWidth,
      ease: "none",
    });

    return () => {
      timeline.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden font-khteka text-[300px] bg-red-400">
      <div ref={sectionRef} className="flex flex-nowrap min-h-screen">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className={clsx(
              "flex justify-center items-center transition-colors duration-300 min-w-[100vw]",
              index % 2 === 0 ? styles.even : styles.odd,
              "flex-shrink-0 px-32"
            )}
          >
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
}
