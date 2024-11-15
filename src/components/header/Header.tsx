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
          x: -60,
        },
        {
          x: 60,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 2,
          color: "green",
        }
      );
    }
  }, []);

  return (
    <header className="bg-blue-600 text-white h-16 flex justify-center items-center">
      <h1 ref={textRef} className="text-4xl font-bold">
        MAINSAP
      </h1>
    </header>
  );
}
