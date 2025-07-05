import { useEffect } from "react";
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

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        if (hash) {
            const delay = setTimeout(() => {
                scrollToId(hash, options)
            }, 500);
            return () =>clearTimeout(delay);
        }
    }, [pathname, hash]);
}

export default { scrollToId, scrollToRef, useSmartScroll };