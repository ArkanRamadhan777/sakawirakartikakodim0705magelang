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
          <dialog className="modal modal-open" onClick={() => setSelectedImage(null)}>
            <div className="modal-box max-w-4xl p-0 bg-transparent shadow-none overflow-hidden relative">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black bg-opacity-50">✕</button>
              <img src={selectedImage} alt="Zoom" className="w-full h-auto rounded-lg" onClick={(e) => e.stopPropagation()} />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Gallery;
