import { useEffect, useRef, useState } from "react";
import { observe } from "react-intersection-observer";

export default function useDynamicBgScroll({ colorIn, colorOut, threshold} = {} ) {
    const observeRef = useRef(null);
    const [bg, setBg] = useState(colorOut);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setBg(entry.isIntersecting ? colorIn : colorOut);
            },
            {threshold}
        );
        const target = observeRef.current;
        if (target) observer.observe(target);

        return () => {
            target && observer.unobserve(target);
        };
    }, [colorIn, colorOut, threshold]);

    return { ref: observeRef, bg };
}