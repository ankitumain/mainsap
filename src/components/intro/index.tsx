'use client';
import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export function Intro() {
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(() =>{
        gsap.from('.heading', {scale: 60, xPercent: 1064, yPercent: 1100, duration: 0.75, delay: 2,  ease: 'Expo.Out'});
        gsap.from('.heading-cont', {rotate: 15, duration: 0.75, delay: 2.1,  ease: 'Power2.inOut'});
    }, {scope: ref});
   return ( 
    <div ref={ref} className="w-full min-h-svh bg-black overflow-hidden relative">
        <div className="heading-cont w-full h-full absolute left-0 top-0 ]">
            <h1 className="heading font-KHTeka text-[20vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] tracking-[-0.2rem">Eidra</h1>
        </div>
    </div>
    )
}