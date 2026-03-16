"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Add your image filenames from the public folder here
const slides = [
  { src: "/cars/car1.webp", alt: "Vehicle 1", caption: "Premium Vehicles" },
  { src: "/cars/car2.webp", alt: "Vehicle 2", caption: "Expert Maintenance" },
  { src: "/cars/car3.webp", alt: "Vehicle 3", caption: "Quality Service" },
  { src: "/cars/car4.webp", alt: "Vehicle 4", caption: "Trusted Repairs" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="bg-gray-50 page-section">
      <span className="section-label">Our Fleet</span>
      <h2 className="section-title">Featured Services.</h2>
      <p className="text-gray-500 text-base max-w-lg mb-10">
        Browse through our collection of vehicles services offered.
      </p>

      {/* Slider container */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ height: "480px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            {/* Dark overlay + caption */}
            <div
              className="absolute inset-0 flex items-end"
              style={{
                background:
                  "linear-gradient(transparent 50%, rgba(0,0,0,0.6) 100%)",
              }}
            >
              <p className="font-[family-name:var(--font-bebas)] text-white text-3xl tracking-widest px-10 pb-10">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/20 hover:bg-white/40 border border-white/30 text-white flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/20 hover:bg-white/40 border border-white/30 text-white flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-10 bg-black/40 text-white text-xs font-bold tracking-widest px-3 py-1 backdrop-blur-sm">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 cursor-pointer border-none p-0"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "var(--color-brand)" : "#d1d5db",
              borderRadius: "4px",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
