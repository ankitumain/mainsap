"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { RefObject, useEffect, useRef, useState } from "react";

type IntersectionObserverOptions = IntersectionObserverInit;
type UseIntersectionObserverReturn = [RefObject<HTMLDivElement>, boolean];

const useIntersectionObserver = (
  options: IntersectionObserverOptions
): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

const CounterSection = ({
  character,
  previousCharacter,
}: {
  character: string;
  previousCharacter: string;
  index?: number;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const node0Ref = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      gsap.to([node0Ref.current, node1Ref.current], {
        y: "+=1em",
        duration: 0.9,
        delay: 0.25,
        ease: "power3.inOut",
        onComplete: swapNodes,
      });
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const swapNodes = () => {
    if (node0Ref.current && node1Ref.current) {
      node0Ref.current.textContent = character;
      gsap.set([node0Ref.current, node1Ref.current], { y: "-=1em" });
    }
  };

  return (
    <div
      ref={ref}
      className={clsx("relative overflow-hidden inline-block")}
      style={{ height: "1em" }}
    >
      <div
        ref={containerRef}
        className={clsx("relative", "text-[20em] font-bold font-mono")}
        style={{
          height: "2em", // height of two characters
        }}
      >
        <div
          ref={node0Ref}
          className="absolute top-0 left-0 w-full"
          style={{ height: "1em" }}
        >
          {previousCharacter}
        </div>
        <div
          ref={node1Ref}
          className="absolute top-full left-0 w-full"
          style={{ height: "1em" }}
        >
          {character}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
