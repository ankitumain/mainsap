"use client";
import clsx from "clsx";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CurvedText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const fontSizes = ["text-[10px]", "text-[40px]"];
  const [currentFontSize, setCurrentFontSize] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const context = gsap.context(() => {
      gsap.to(".word", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          onEnter: () => {
            setTimeout(() => {
              setCurrentFontSize(1);
            }, 1000);
          },
        },
      });
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={ref}
      className={`h-screen w-screen flex justify-center items-center font-khteka-40 bg-white text-black`}
    >
      <div
        className={clsx(
          "h-full w-full flex justify-end items-end bg-white text-black font-khteka-40",
          fontSizes[currentFontSize]
        )}
      >
        <div className="flex flex-col items-center justify-between w-screen">
          <div className="w-[700px]">
            <p className="mb-10 text-center text-[40px]">
              A Umain hackathon project
            </p>
            <div className="text-[100px] text-center">
              <p className="w-full ">Mainsap</p>
              <p className="mt-[-60px]">was born</p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="transition-all duration-1000"
          >
            <path
              id={`circlePath`}
              fill="#000000"
              fill-opacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,250.7C384,256,480,224,576,218.7C672,213,768,235,864,213.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="transition-all duration-500"
            />

            <text>
              <textPath href="#circlePath">
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ankit &nbsp;&nbsp;
                Anton &nbsp;&nbsp; Faraz &nbsp;&nbsp; Jon &nbsp;&nbsp; Tomo
                &nbsp;&nbsp; Vika
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CurvedText;
