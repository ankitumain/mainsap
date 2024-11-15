'use client'
import { useState } from "react"
import SplitType from "split-type"
import { useRef, useEffect } from "react"
export function SplitByWord({children, callback} : {children: React.ReactNode, callback?: () => void}) {
    const ref = useRef<HTMLDivElement>(null);
    const [splitted, setSplitted] = useState(false);
    useEffect(() => {
        if (!ref.current) return
        const split = new SplitType(ref.current, {types: 'words', tagName: 'span', wordClass: 'word opacity-0'})
        setSplitted(true)
        if (callback) callback()
        return () => {
            split.revert()
        }
        
    }, [callback])
    return (
        <div ref={ref} className={`${splitted ? 'opacity-100' : 'opacity-0'} `}>
            {children}
        </div>
    )
}   