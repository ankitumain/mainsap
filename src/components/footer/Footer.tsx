"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { useState } from "react";

export default function Footer() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const hasScrolledToBottom = () => {
    if (!window) return false;
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;
  };

  window.onscroll = () => {
    if (hasScrolledToBottom()) {
      setIsScrolledToBottom(true);
    }
  };

  return (
    <footer className="h-screen w-screen z-0 fixed bg-black text-white p-4 font-khteka">
      <div className="container h-full w-full flex flex-col items-center justify-center mx-auto">
        {isScrolledToBottom && (
          <>
            <FadeIn stagger={0.09}>
              <h1 className="text-[200px] text-center">Fin.</h1>
            </FadeIn>
            <FadeIn stagger={0.09}>
              <div className="text-2xl">
                <p>Made by Umain. ISO certified.</p>
              </div>
            </FadeIn>
          </>
        )}
      </div>
    </footer>
  );
}
