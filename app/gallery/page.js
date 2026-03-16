"use client";

import { useState } from "react";
import Link from "next/link";

const filters = ["All", "Vehicles", "Heritage", "Showroom"];

const images = [
  {
    src: "https://motorcareuganda.com/uploads/home/ford.jpg",
    alt: "Ford Ranger",
    cat: "Vehicles",
  },
  {
    src: "https://motorcareuganda.com/uploads/home/hyundai.jpg",
    alt: "Hyundai",
    cat: "Vehicles",
  },
  {
    src: "https://motorcareuganda.com/uploads/about/history1.jpg",
    alt: "Early Adventures",
    cat: "Heritage",
  },
  {
    src: "https://motorcareuganda.com/uploads/about/history2.jpg",
    alt: "Rally Heritage",
    cat: "Heritage",
  },
  {
    src: "https://motorcareuganda.com/uploads/images/222.jpg",
    alt: "Electric Vehicle",
    cat: "Vehicles",
  },
  {
    src: "https://motorcareuganda.com/uploads/about/history3.jpg",
    alt: "First Showroom",
    cat: "Showroom",
  },
  {
    src: "https://motorcareuganda.com/uploads/about/history4.jpg",
    alt: "Modern Excellence",
    cat: "Showroom",
  },
  {
    src: "https://motorcareuganda.com/uploads/team/1749553288_68481088994cf.jpg",
    alt: "Managing Director",
    cat: "Showroom",
  },
  {
    src: "https://motorcareuganda.com/uploads/team/1749553141_68480ff55d255.jpg",
    alt: "Team",
    cat: "Showroom",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [lbIndex, setLbIndex] = useState(0);

  const filtered =
    active === "All" ? images : images.filter((i) => i.cat === active);

  const openLightbox = (img, index) => {
    setLightbox(img);
    setLbIndex(index);
  };

  const lightboxNext = (e) => {
    e.stopPropagation();
    const next = (lbIndex + 1) % filtered.length;
    setLbIndex(next);
    setLightbox(filtered[next]);
  };

  const lightboxPrev = (e) => {
    e.stopPropagation();
    const prev = (lbIndex - 1 + filtered.length) % filtered.length;
    setLbIndex(prev);
    setLightbox(filtered[prev]);
  };
  return (
    <>
      <div className="page-hero">
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "160px" }}
        >
          GALLERY
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="text-[var(--color-brand)] no-underline">
            Home
          </Link>{" "}
          / Gallery
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,80px)] tracking-wide text-gray-900">
          Gallery
        </h1>
        <p className="text-gray-500 mt-3 max-w-lg">
          A visual journey through our workflow.
        </p>
      </div>

      {/* GALLERY SECTION */}
      <section className="bg-white page-section">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Our Collection</span>
            <h2 className="section-title">Browse the Gallery</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""} in this
            collection.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer border ${
                active === f
                  ? "bg-[var(--color-brand)] text-white border-[var(--color-brand)]"
                  : "bg-white text-gray-400 border-gray-200 hover:border-gray-800 hover:text-gray-800"
              }`}
            >
              {f}
              {active === f && (
                <span className="absolute -bottom-[33px] left-1/2 -translate-x-1/2 block w-0.5 h-8 bg-[var(--color-brand)]" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3">
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className="break-inside-avoid mb-3 overflow-hidden relative group cursor-pointer border border-gray-200 hover:border-[var(--color-brand)] transition-colors duration-300"
              onClick={() => openLightbox(img, i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full block transition-all duration-700 brightness-90 group-hover:brightness-75 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-brand)] opacity-0 group-hover:opacity-20 transition-opacity duration-400" />

              {/* Caption bar slides up */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-gray-900/90 px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[var(--color-brand)] text-[10px] font-bold tracking-[0.2em] uppercase block mb-0.5">
                      {img.cat}
                    </span>
                    <p className="text-white font-[family-name:var(--font-bebas)] text-lg tracking-wide leading-none">
                      {img.alt}
                    </p>
                  </div>
                  <div className="w-9 h-9 border border-white/30 flex items-center justify-center text-white text-sm shrink-0">
                    ⤢
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 border border-gray-200">
            <p className="font-[family-name:var(--font-bebas)] text-4xl text-gray-200 tracking-widest mb-3">
              NO PHOTOS
            </p>
            <p className="text-sm text-gray-400">
              No photos found in this category.
            </p>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.97)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-7 py-5 border-b border-white/10">
            <div>
              <span className="text-[var(--color-brand)] text-[10px] font-bold tracking-[0.25em] uppercase">
                {lightbox.cat}
              </span>
              <p className="font-[family-name:var(--font-bebas)] text-white text-xl tracking-widest mt-0.5">
                {lightbox.alt}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-[family-name:var(--font-bebas)] text-white/30 text-sm tracking-widest">
                {String(lbIndex + 1).padStart(2, "0")} /{" "}
                {String(filtered.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] transition-all duration-300 bg-transparent cursor-pointer text-lg font-light"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[88vw] max-h-[78vh] object-contain z-10"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Prev button */}
          <button
            onClick={lightboxPrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/20 text-white text-2xl flex items-center justify-center hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] transition-all duration-300 bg-transparent cursor-pointer"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={lightboxNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[var(--color-brand)] border-none text-white text-2xl flex items-center justify-center hover:opacity-85 transition-all duration-300 cursor-pointer"
          >
            ›
          </button>

          {/* Bottom progress dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLbIndex(i);
                  setLightbox(filtered[i]);
                }}
                className="cursor-pointer border-none p-0 transition-all duration-300"
                style={{
                  width: i === lbIndex ? "28px" : "8px",
                  height: "3px",
                  background:
                    i === lbIndex
                      ? "var(--color-brand)"
                      : "rgba(255,255,255,0.25)",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
