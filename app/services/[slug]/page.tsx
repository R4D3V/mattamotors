import { serviceCategories, ServiceCategory } from "../../data/services";
import Link from "next/link";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetail({ params }: { params: Params }) {
  const service = serviceCategories.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <main className="p-16">
        <h1 className="text-3xl font-bold text-gray-100">Service not found</h1>
        <p className="text-gray-300">
          The service you are looking for does not exist.
        </p>
        <Link href="/services" className="text-blue-400 hover:underline">
          Back to services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-transparent">
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg mb-8">{service.description}</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neumorph-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Service Details
          </h2>
          <p className="text-gray-300 mb-4">{service.description}</p>
          <p className="text-sm text-blue-400 font-semibold">
            {service.projects}
          </p>
        </div>

        <div className="neumorph-card p-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">
            What We Offer
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Professional diagnosis and repair</li>
            <li>• Genuine parts and quality materials</li>
            <li>• Warranty on all work performed</li>
            <li>• Experienced technicians</li>
            <li>• Competitive pricing</li>
          </ul>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="neumorph-card p-6 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-gray-100 mb-4">
            Need This Service?
          </h3>
          <p className="text-gray-300 mb-4">
            Contact us today for a free quote and consultation.
          </p>
          <Link href="/contact" className="neumorph-btn inline-block">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link href="/services" className="text-blue-400 hover:underline">
          ← Back to all services
        </Link>
      </section>
    </main>
  );
}
