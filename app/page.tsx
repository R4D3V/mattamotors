import HeroSection from "./components/HeroSection";
import ScrollingImages from "./components/ScrollingImages";
import { projects } from "./data/projects";

export default function Home() {
  // build showcase images from project data with hrefs to detail pages
  const showcaseImages = projects.map((p) => ({
    src: p.image,
    alt: p.title,
    href: `/projects/${p.slug}`,
  }));

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Scrolling Images */}
      <ScrollingImages
        images={showcaseImages}
        title="Our Services in Action"
        description="Experience professional car repairs and quality spare parts"
      />

      {/* Features Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
            Why Choose MATTAMOTORS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Technicians",
                description:
                  "Highly trained professionals with years of automotive expertise",
                icon: "🔧",
              },
              {
                title: "Genuine Parts",
                description:
                  "Only authentic spare parts from trusted manufacturers",
                icon: "✓",
              },
              {
                title: "Fast Service",
                description: "Quick turnaround without compromising on quality",
                icon: "⚡",
              },
              {
                title: "Affordable Pricing",
                description: "Competitive rates for all automotive services",
                icon: "💰",
              },
              {
                title: "Warranty Coverage",
                description:
                  "All repairs come with comprehensive warranty protection",
                icon: "🛡️",
              },
              {
                title: "Customer Support",
                description:
                  "24/7 customer service for all your automotive needs",
                icon: "📞",
              },
            ].map((feature, index) => (
              <div key={index} className="neumorph-card p-8 transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Premium Service?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact MATTAMOTORS UGANDA today for all your automotive needs
          </p>
          <button className="neumorph-btn">Get in Touch</button>
        </div>
      </section>
    </main>
  );
}
