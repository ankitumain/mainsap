'use client';
import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Logo } from "../Logo";
export function Intro() {
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(() =>{
        gsap.to('.overlay', {opacity: 0, duration: 0.5, delay: 0, ease: 'Expo.Out'});
        gsap.from('svg', {scale: 50, xPercent: 1274, yPercent: 1920, duration: 0.75, delay: 0.5,  ease: 'Expo.Out'});
        gsap.from('.heading-cont', {rotate: 15, duration: 0.75, delay: 0.6,  ease: 'Expo.Out'});
    }, {scope: ref});
   return ( 
    <div ref={ref} className="w-full min-h-svh bg-black overflow-hidden relative">
        <div className="heading-cont w-full h-full absolute left-0 top-0 ]">
            <Logo className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}/>
        </div>
        <div className="overlay w-full min-h-svh bg-white absolute top-0 left-0">
        </div>
    </div>
    )
}