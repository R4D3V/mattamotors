"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ScrollingImagesProps {
  images: {
    src: string;
    alt: string;
    href?: string; // optional link target for each image
  }[];
  title?: string;
  description?: string;
}

export default function ScrollingImages({
  images,
  title = "Our Work",
  description = "View our latest projects and services in action",
}: ScrollingImagesProps) {
  const [editMode, setEditMode] = useState(false);

  // Duplicate images for seamless scrolling
  const scrollImages = [...images, ...images];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">{title}</h2>
        <p className="text-lg text-gray-300">{description}</p>
        {editMode && (
          <p className="text-sm text-blue-600 mt-2">
            Edit these images by replacing the URLs in the component props
          </p>
        )}
      </div>

      {/* Scrolling Container */}
      <div className="overflow-hidden bg-gray-50">
        <div className="scroll-left flex gap-6 px-4">
          {scrollImages.map((image, index) => {
            const content = (
              <div
                key={index}
                className="neumorph-card flex-shrink-0 w-96 h-64 relative rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.alt}
                  </p>
                </div>
              </div>
            );

            return image.href ? (
              <Link
                key={`${index}-${image.href}`}
                href={image.href}
                className="block"
              >
                {content}
              </Link>
            ) : (
              content
            );
          })}
        </div>
      </div>

      {/* Edit Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setEditMode(!editMode)}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          {editMode ? "Exit Edit Mode" : "Edit Images"}
        </button>
      </div>
    </section>
  );
}
