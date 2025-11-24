import React, { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden mt-20">
      {/* Background slides (4 images) rendered via BackgroundSlider component */}
      <BackgroundSlider />
      <div className="hero-overlay bg-black/10"></div>
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

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === index ? 'opacity-100 scale-105 transform' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </div>
  );
}
