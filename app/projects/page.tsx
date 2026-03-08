"use client";

import ScrollingImages from "../components/ScrollingImages";
import { projects } from "../data/projects";
import { serviceCategories } from "../data/services";

export default function Projects() {
  const projectImages = projects.map((p) => ({
    src: p.image,
    alt: p.title,
    href: `/projects/${p.slug}`,
  }));

  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Showcase of our completed repair work and satisfied customers
          </p>
        </div>
      </section>

      {/* Scrolling Projects */}
      <ScrollingImages
        images={projectImages}
        title="Completed Projects"
        description="View our latest automotive repair and maintenance projects"
      />

      {/* Project Categories */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12">
            Service Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="neumorph-card p-8 transition-shadow">
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <p className="text-sm text-blue-600 font-semibold">
                  {category.projects}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your automotive needs and get a free
            quote
          </p>
          <button className="neumorph-btn">Request Service</button>
        </div>
      </section>
    </main>
  );
}
