import { serviceCategories } from "../data/services";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-transparent">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We offer a comprehensive range of automotive solutions tailored to
            your needs.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                href={`/services/${category.slug}`}
                className="block"
              >
                <div className="neumorph-card p-8 transition-shadow hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <p className="text-sm text-blue-600 font-semibold">
                    {category.projects}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
