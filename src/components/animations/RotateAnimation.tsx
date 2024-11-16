import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useRotateAnimation() {
  const refs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    refs.current.forEach((ref) => {
      if (ref) {
        gsap.to(ref, {
          rotate: 5,
          yoyo: true,
          repeat: -1,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  const addRef = (ref: HTMLDivElement) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  return addRef;
}
