export default function Testimonials() {
  const testimonials = [
    {
      name: "Peter Ssemwanga",
      vehicle: "Toyota Camry 2018",
      text: "Excellent service! My car engine had serious issues, but the MATTAMOTORS team fixed it perfectly. Professional and trustworthy.",
      rating: 5,
    },
    {
      name: "Olivia Nakato",
      vehicle: "Honda CR-V 2020",
      text: "Very happy with the brake system work. Fast turnaround and fair pricing. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Mukwaya",
      vehicle: "Volkswagen Polo 2019",
      text: "The team really knows their stuff. Got my transmission repaired and it runs like new. Will definitely come back!",
      rating: 5,
    },
    {
      name: "Christine Kyambadde",
      vehicle: "Mazda 3 2021",
      text: "Outstanding customer service and quality work. They diagnosed the problem quickly and provided a fair quote.",
      rating: 5,
    },
    {
      name: "James Kipchoge",
      vehicle: "Toyota Hiace",
      text: "For my commercial vehicle, reliability is crucial. MATTAMOTORS delivers exactly that. Best mechanics in Kampala!",
      rating: 5,
    },
    {
      name: "Ruth Nabwire",
      vehicle: "Subaru Outback 2017",
      text: "They used genuine parts for my electrical system repair. The warranty coverage gives me peace of mind.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Hear what our satisfied customers have to say about our services
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">5000+</p>
              <p className="text-gray-300">Customer Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">4.9/5</p>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">99%</p>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="neumorph-card p-8 hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-100">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="neumorph-card rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="font-semibold text-gray-100">
                    Customer Video Testimonial {item}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    Watch how we transformed our customer's vehicle
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl mb-8">
            Experience the MATTAMOTORS difference today
          </p>
          <button className="neumorph-btn">Book Your Service</button>
        </div>
      </section>
    </main>
  );
}
