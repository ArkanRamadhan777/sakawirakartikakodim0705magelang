import React, { useState, useEffect } from 'react';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const parallaxOffset = useParallax(0.5);

  return (
    <div className="relative w-full mt-[0px] lg:mt-0 aspect-video lg:h-screen lg:aspect-auto overflow-hidden bg-black">
      <BackgroundSlider parallaxOffset={parallaxOffset} />
      {/* Modern gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>

      {/* Subtle vignette for focus */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)] pointer-events-none"></div>
    </div>
  );
};

export default Hero;

/* BackgroundSlider - Modern parallax zoom effect */
function BackgroundSlider({ parallaxOffset }) {
  const images = [
    '/galeri swk/2.webp',
    '/galeri swk/9.webp',
    '/galeri swk/20.webp',
    '/galeri swk/24.webp',
  ];

  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial reveal
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);

    // Smooth slide transition
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 7000); // 7 seconds for smooth, relaxed feel

    return () => {
      clearTimeout(loadTimer);
      clearInterval(id);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((src, i) => {
        const isActive = i === index;

        return (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className={`w-full h-full object-cover ${isActive ? 'animate-ken-burns-left' : ''
                } ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                willChange: 'transform, opacity',
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}
    </div>
  );
}
