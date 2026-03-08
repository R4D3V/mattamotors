export default function About() {
  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About MATTAMOTORS UGANDA</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner for premium automotive services and genuine
            spare parts
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-100 mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                MATTAMOTORS UGANDA was founded with a vision to provide
                world-class automotive repair services and genuine spare parts
                to car owners across Uganda.
              </p>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                With over a decade of experience in the automotive industry, our
                team of certified technicians is dedicated to delivering
                excellence in every service we provide.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in building long-term relationships with our
                customers through reliability, honesty, and exceptional service
                quality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center text-white text-center">
              <div>
                <p className="text-6xl font-bold mb-2">10+</p>
                <p className="text-xl">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neumorph-card p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Mission</h3>
              <p className="text-gray-300">
                To provide exceptional automotive repair services and quality
                spare parts that exceed customer expectations, ensuring vehicle
                reliability and safety.
              </p>
            </div>
            <div className="neumorph-card p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Vision</h3>
              <p className="text-gray-300">
                To be the leading automotive service provider in Uganda, known
                for excellence, integrity, and customer satisfaction.
              </p>
            </div>
            <div className="neumorph-card p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Values</h3>
              <p className="text-gray-300">
                Integrity, excellence, customer-centricity, and continuous
                improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">
            Our Expert Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "John Matta",
                role: "Founder & Head Technician",
                badge: "🔧",
              },
              { name: "Sarah Lubega", role: "Service Manager", badge: "👤" },
              { name: "Robert Okello", role: "Senior Technician", badge: "⚙️" },
              { name: "Grace Namukasa", role: "Parts Manager", badge: "📦" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg h-48 flex items-center justify-center mb-4">
                  <span className="text-6xl">{member.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-100">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">5000+</p>
              <p className="text-lg text-gray-300">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">10,000+</p>
              <p className="text-lg text-gray-300">Services Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">20+</p>
              <p className="text-lg text-gray-300">Team Members</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">99%</p>
              <p className="text-lg text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
