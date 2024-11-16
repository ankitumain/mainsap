"use client";
import { BalloonImage } from "./BalloonImage";
import SlotCounter from "react-slot-counter";
import { useRotateAnimation } from "../animations/RotateAnimation";

export default function Balloon() {
  const addRef = useRotateAnimation();

  return (
    <section className="w-full min-h-svh bg-yellow overflow-hidden relative">
      <div className="heading-cont w-full h-full absolute left-0 top-0 ]">
        <div className="relative top-[50%]">
          <BalloonImage
            ref={addRef}
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[80%]"
          ></BalloonImage>
          <div
            ref={addRef}
            className="bg-black flex gap-2 rounded-3xl px-16 absolute left-[50%] -translate-x-1/2 top-[4.5rem] font-KHInterference-150"
          >
            <SlotCounter
              animateOnVisible
              value={"1200 - employees"}
              duration={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
