import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/galeri swk/1.webp",
    "/galeri swk/3.webp",
    "/galeri swk/5.webp",
    "/galeri swk/6.webp",
    "/galeri swk/7.webp",
    "/galeri swk/8.webp",
    "/galeri swk/10.webp",
    "/galeri swk/11.webp",
    "/galeri swk/12.webp",
    "/galeri swk/13.webp",
    "/galeri swk/14.webp",
    "/galeri swk/15.webp",
    "/galeri swk/16.webp",
    "/galeri swk/17.webp",
    "/galeri swk/18.webp",
    "/galeri swk/19.webp",
    "/galeri swk/21.webp",
    "/galeri swk/22.webp",
    "/galeri swk/23.webp",
    "/galeri swk/26.webp",
    "/galeri swk/27.webp",
  ];

  return (
    <div className="pt-20 min-h-screen bg-base-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-anta text-center mb-10 text-primary">Galeri Kegiatan</h1>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Kegiatan ${index + 1}`} className="w-full rounded-lg shadow-lg hover:opacity-90 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <dialog className="modal modal-open bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-screen w-auto max-h-screen p-2 flex justify-center items-center outline-none">
              <button 
                className="btn btn-circle btn-sm btn-ghost absolute right-4 top-4 text-white bg-black/50 hover:bg-black/70 z-50"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Zoom" 
                className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg shadow-2xl" 
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Gallery;
