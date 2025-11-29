import { useEffect, useState } from 'react';

/**
 * Custom hook for parallax scrolling effect
 * @param {number} speed - Parallax speed multiplier (0.5 = half speed, 2 = double speed)
 * @returns {number} - Offset value for transform
 */
export const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    setOffset(scrolled * speed);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    return offset;
};
