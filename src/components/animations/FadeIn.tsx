"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { SplitByWord } from "../splitText/splitByWord";

gsap.registerPlugin(ScrollTrigger);

export function FadeIn({
  children,
  duration = 1,
  delay = 0,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [splitted, setSplitted] = useState(false);

  useEffect(() => {
    if (!ref.current || !splitted) return;

    const context = gsap.context(() => {
      gsap.to(".word", {
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          onEnter: () => {
            gsap.to(".word", {
              opacity: 1,
              duration: duration,
              ease: "power2.out",
              delay: delay,
              stagger: stagger,
            });
          },
        },
      });
    }, ref);

    return () => context.revert();
  }, [splitted, duration, delay, stagger]);

  return (
    <div ref={ref}>
      <SplitByWord callback={() => setSplitted(true)}>{children}</SplitByWord>
    </div>
  );
}
