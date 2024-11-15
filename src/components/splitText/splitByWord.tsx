'use client'
import SplitType from "split-type"
import { useRef, useEffect } from "react"
export function SplitByWord({children} : {children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!ref.current) return
        new SplitType(ref.current, {types: 'words', tagName: 'span'})
    }, [])
    return (
        <div ref={ref} className="">
            {children}
        </div>
    )
}   