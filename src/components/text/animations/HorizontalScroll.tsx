"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const paragraphs = [
    {
      text: "Kurppa Hosk",
      secondaryText:
        "Transforming brands and organisations to drive real change",
    },
    // { text: "Blob", secondaryText: "hello" },
  ];
  const styles = {
    odd: "bg-black text-white justify-start",
    even: "bg-white text-black justify-end",
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
    <div className="overflow-x-hidden font-khteka bg-red-400">
      <div ref={sectionRef} className="flex flex-nowrap min-h-screen">
        {paragraphs.map((paragraph, index) => (
          <>
            <div
              key={index}
              className={clsx(
                "flex items-center transition-colors duration-300 min-w-[100vw]",
                index % 2 === 0 ? styles.even : styles.odd,
                "flex-shrink-0 text-[300px]"
              )}
            >
              <div>{paragraph.text}</div>
              <div className="px-32 mt-[-190px] text-3xl">
                {paragraph.secondaryText}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
