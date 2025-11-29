import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Animated section wrapper component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'scale-up'
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.threshold - Intersection observer threshold
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedSection = ({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1,
    className = ''
}) => {
    const { ref, isVisible } = useScrollAnimation({ threshold });

    const animationClasses = {
        'fade-up': 'translate-y-8 opacity-0',
        'fade-in': 'opacity-0',
        'slide-left': '-translate-x-8 opacity-0',
        'slide-right': 'translate-x-8 opacity-0',
        'scale-up': 'scale-95 opacity-0',
    };

    const visibleClasses = {
        'fade-up': 'translate-y-0 opacity-100',
        'fade-in': 'opacity-100',
        'slide-left': 'translate-x-0 opacity-100',
        'slide-right': 'translate-x-0 opacity-100',
        'scale-up': 'scale-100 opacity-100',
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? visibleClasses[animation] : animationClasses[animation]
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
