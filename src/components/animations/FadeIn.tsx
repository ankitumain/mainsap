"use client";
import { useRef, useState } from "react";
import { SplitByWord } from "../splitText/splitByWord";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  useGSAP(
    () => {
      if (!ref.current || !splitted) return;

      gsap.to(".word", {
        duration: 0.1,
        ease: "power2.out",
        delay: 0.1,

        onComplete: () => {
          gsap.to(".word", {
            opacity: 1,
            duration: duration,
            ease: "power2.out",
            delay: delay,
            stagger: stagger,
          });
        },
      });
    },
    { scope: ref, dependencies: [splitted] }
  );

  return (
    <div ref={ref}>
      <SplitByWord callback={() => setSplitted(true)}>{children}</SplitByWord>
    </div>
  );
}
