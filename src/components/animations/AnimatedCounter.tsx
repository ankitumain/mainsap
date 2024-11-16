"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import clsx from "clsx";

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

export const AnimatedCounter = ({ text }: { text: string }) => {
  const words = text.split(" ");
  let counter = 0;

  return (
    <span className="flex flex-row items-center gap-4 flex-wrap">
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className="flex flex-row">
            {word.split("").map((character, characterIndex) => {
              counter++;
              return (
                <CounterSection
                  key={characterIndex}
                  character={character}
                  index={counter}
                />
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export const CounterSection = ({
  character,
  index = 0,
}: {
  character: string;
  index?: number;
}) => {
  const [previousCharacter, setPreviousCharacter] = useState(character);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  });

  const characterType = isNaN(Number(character)) ? "letter" : "number";

  useEffect(() => {
    if (characterType === "number") {
      const characterMinusOne = Number(character) - 1;

      setPreviousCharacter(
        characterMinusOne <= 0 ? "9" : String(characterMinusOne)
      );
    } else if (characterType === "letter") {
      const characterMinusOne = character.charCodeAt(0) - 1;

      setPreviousCharacter(
        characterMinusOne <= 64 ? "Z" : String.fromCharCode(characterMinusOne)
      );
    }

    if (isIntersecting && !hasAnimated) {
      setTimeout(() => {
        setHasAnimated(true);
      }, 400);
    }
  }, [isIntersecting, hasAnimated, character]);

  return (
    <span
      ref={ref}
      className={clsx("relative overflow-hidden h-[1.5em] inline-block")}
    >
      <span
        className={clsx(
          "flex flex-col items-center",
          "transition-transform duration-1000 ease-in-out font-bold font-KHInterference text-[40px] uppercase",
          hasAnimated ? "-translate-y-[1.5em]" : "translate-y-0"
        )}
        style={{ transitionDuration: `${(index + 1) * 0.04}s` }}
      >
        <span>{previousCharacter}</span>
        <span>{character}</span>
      </span>
    </span>
  );
};
