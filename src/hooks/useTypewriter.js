import { useEffect, useState } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string} text - Text to animate
 * @param {number} speed - Typing speed in milliseconds
 * @param {number} delay - Initial delay before starting
 * @returns {string} - Current displayed text
 */
export const useTypewriter = (text, speed = 100, delay = 500) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setDisplayedText(text);
            return;
        }

        // Initial delay
        const initialTimeout = setTimeout(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, speed);

                return () => clearTimeout(timeout);
            }
        }, delay);

        return () => clearTimeout(initialTimeout);
    }, [currentIndex, text, speed, delay]);

    return displayedText;
};
