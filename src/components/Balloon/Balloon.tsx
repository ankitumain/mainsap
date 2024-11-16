"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BalloonImage } from "./BalloonImage";

export default function Balloon() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        rotate: 2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="w-full min-h-svh bg-yellow overflow-hidden relative">
      <div className="heading-cont w-full h-full absolute left-0 top-0 ]">
        <BalloonImage
          ref={ref}
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        ></BalloonImage>
      </div>
    </section>
  );
}
