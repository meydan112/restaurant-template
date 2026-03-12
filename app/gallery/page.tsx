"use client";

import { useState } from "react";
import { business } from "../../data/business";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex - 1 + business.gallery.length) % business.gallery.length);
  };

  const showNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % business.gallery.length);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-green-900">
          Gallery
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {business.gallery.map((image, index) => (
            <div
              key={image}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => openImage(index)}
            >
              <img
                src={image}
                alt="Restaurant gallery"
                className="h-72 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={closeImage}
        >
          <button
            onClick={showPrevious}
            className="absolute left-6 rounded-full bg-white/90 px-4 py-2 text-2xl font-bold text-green-900 shadow hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={business.gallery[selectedIndex]}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            onClick={showNext}
            className="absolute right-6 rounded-full bg-white/90 px-4 py-2 text-2xl font-bold text-green-900 shadow hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-2 text-xl font-bold text-green-900 shadow hover:bg-white"
            aria-label="Close image"
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}