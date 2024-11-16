"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import SlotCounter from "react-slot-counter";
import ImageTrail from "../animations/ImageTrail";

export const YearBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trailImages = Array.from(
      trailRef.current?.children || []
    ) as HTMLElement[];

    if (!container || !trailImages.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(trailImages, {
        x: x,
        y: y,
        stagger: -0.2,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-screen bg-[#EF4123]"
    >
      <ImageTrail ref={trailRef} images={[1, 2, 3, 4, 5]} />
      <div className="flex items-start">
        <h2 className="text-[400px] tracking-tighter">
          <SlotCounter animateOnVisible value={2019} duration={2} />
        </h2>
      </div>
    </div>
  );
};
