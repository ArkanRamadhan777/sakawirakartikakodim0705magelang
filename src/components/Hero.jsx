import React, { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <div className="relative w-full mt-[0px] lg:mt-0 aspect-video lg:h-screen lg:aspect-auto overflow-hidden">
      <BackgroundSlider />
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;

/* BackgroundSlider - local component */
function BackgroundSlider() {
  const images = [
    '/galeri swk/2.webp',
    '/galeri swk/9.webp',
    '/galeri swk/20.webp',
    '/galeri swk/24.webp',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />
      ))}
    </div>
  );
}
