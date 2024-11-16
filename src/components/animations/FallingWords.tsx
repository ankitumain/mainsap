"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function FallingWords() {
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordsRef.current) {
      const children = Array.from(
        wordsRef.current.children
      ) as HTMLDivElement[];
      children.forEach((child) => {
        const randomX = Math.random() * window.innerWidth;
        const randomRotation = Math.random() * 360;

        gsap.set(child, {
          x: randomX,
          rotation: randomRotation,
        });

        gsap.fromTo(
          child,
          {
            y: -100,
            opacity: 1,
          },
          {
            y: window.innerHeight,
            duration: 2,
            ease: "power1.inOut",
          }
        );
      });
    }
  }, []);

  return (
    <div ref={wordsRef} className="falling-words font-khteka-80 relative">
      <div>Employees</div>
      <div>across</div>
      <div>all</div>
      <div>departments</div>
      {/* Add more words as needed */}
    </div>
  );
}
