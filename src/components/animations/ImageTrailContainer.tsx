"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import ImageTrail from "./ImageTrail";

export default function ImageTrailContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trailImages = Array.from(
      trailRef.current?.children || []
    ) as HTMLElement[];

    if (!container || !trailImages.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(".trail-image", {
        x: e.clientX,
        y: e.clientY,
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
      className="relative overflow-hidden w-full h-screen bg-gray-200"
    >
      <ImageTrail ref={trailRef} images={[1, 2, 3, 4, 5]} />
    </div>
  );
}
