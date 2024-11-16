"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Header() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          scale: 1,
          color: "white",
        },
        {
          scale: 1.2,
          color: "yellow",
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          duration: 1,
        }
      );

      gsap.to(textRef.current, {
        x: 20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.8,
      });
    }
  }, []);

  return (
    <header className="bg-blue-600 text-white h-16 flex justify-center items-center">
      <h1 ref={textRef} className="text-4xl font-bold tracking-wide">
        MAINSAP
      </h1>
    </header>
  );
}
