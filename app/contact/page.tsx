"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Call Us",
                content: ["+256 700 000 000", "+256 750 000 000"],
                icon: "📞",
              },
              {
                title: "Email Us",
                content: ["info@mattamotors.com", "support@mattamotors.com"],
                icon: "✉️",
              },
              {
                title: "Visit Us",
                content: ["Kampala, Uganda", "Open: Mon-Sat 8AM-6PM"],
                icon: "📍",
              },
            ].map((item, index) => (
              <div key={index} className="neumorph-card p-8 text-center">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  {item.title}
                </h3>
                {item.content.map((line, i) => (
                  <p key={i} className="text-gray-300 mb-2">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="neumorph-card px-8 py-6 rounded-lg text-center">
                <p className="text-lg font-semibold text-green-400">
                  Thank you for your message!
                </p>
                <p className="text-gray-300">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a Subject</option>
                    <option value="repair">Car Repair</option>
                    <option value="maintenance">Regular Maintenance</option>
                    <option value="parts">Spare Parts</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
            Find Us
          </h2>
          <div className="neumorph-card rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-gray-300 font-semibold">
                Map Location: Kampala, Uganda
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
            Opening Hours
          </h2>
          <div className="neumorph-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-100 mb-4">Weekdays</h3>
                <p className="text-gray-300">
                  Monday - Friday: 7:30 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-100 mb-4">Weekends</h3>
                <p className="text-gray-300">Saturday: 8:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
