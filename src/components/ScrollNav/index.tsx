'use client';
import gsap from "gsap"
import {use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export function ScrollNav() {
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(progressRef.current, {scrollTrigger: {
            trigger: 'body',
            start: 'top 0%',
            end: 'bottom 0%',
            scrub: 1
        }, "--scroll": '0%', duration: 1, ease: 'power2.out'})
    }, {scope: progressRef});

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.href)
        gsap.to(window, {duration: 1, scrollTo: '#section-5', ease: 'power2.out'})
    }
    return (
        <nav ref={progressRef} className="mask relative m-2 mt-4 mix-blend-difference">
            <ul className="ml-4">
                <li><a href={'#section-5'} onClick={handleClick}>2019</a></li>
                <li><a href={'#section-5'} onClick={handleClick}>2020</a></li>
                <li><a href={'#section-5'} onClick={handleClick}>2021</a></li>
                <li><a href={'#section-5'} onClick={handleClick}>2022</a></li>
                <li><a href={'#section-5'} onClick={handleClick}>2023</a></li>
                <li><a href={'#section-5'} onClick={handleClick}>2024</a></li>
            </ul>
            {/* <div  className="progress-bar w-2 h-0 absolute bg-white top-0"></div> */}
        </nav>
    )
}  