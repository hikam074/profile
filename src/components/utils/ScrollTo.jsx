import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function scrollToId(id, options = { behavior: 'smooth', block: 'start'}) {
    if (!id) return;
    const targetElement = document.getElementById(id.replace(/^#/, ''));
    if (!targetElement) return;
    if (!targetElement.classList.contains('scroll-mt-24')) {
        targetElement.classList.add('scroll-mt-24');
    }
    targetElement.scrollIntoView(options);
}

export function scrollToRef(ref, options = {behavior: 'smooth', block: 'start'}) {
    ref?.current?.scrollIntoView(options);
}

export function useSmartScroll(options = { behavior: 'smooth', block: 'start' }) {
    const { pathname, hash } = useLocation();
    const prevPathname = useRef(null);
    const prevHash = useRef(hash);
    const isHasScrolled = useRef(false);
    const optionRef = useRef(options);

    useEffect(() => {
        const isPathChanged = prevPathname.current !== pathname;
        const isHashChanged = prevHash.current !== hash;
        
        if (isPathChanged || isHashChanged) {
            isHasScrolled.current = false;
            prevPathname.current = pathname;
            prevHash.current = hash;
        }

        if (isPathChanged) window.scrollTo({ top: 0, behavior: "auto" });

        if (hash  && !isHasScrolled.current) {
            const delay = setTimeout(() => {
                scrollToId(hash, optionRef.current)
                isHasScrolled.current = true;
            }, 300);
            return () =>clearTimeout(delay);
        }
    }, [pathname, hash]);
}

export default { scrollToId, scrollToRef, useSmartScroll };