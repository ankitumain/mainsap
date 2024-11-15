"use client";

import { gsap } from "gsap";
import { useRef } from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
}

export default function AnimatedButton({ children }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1.1, duration: 0.2 });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.2 });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-blue-600 text-white px-6 py-3 rounded shadow-lg transform"
    >
      {children}
    </button>
  );
}
