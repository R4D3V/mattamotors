"use client";

import { useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: "📍",
    title: "Our Location",
    value: "Garuga Road, Uganda",
    sub: "Matta Motors Entebbe — Garuga Road",
    href: null,
  },
  {
    icon: "📞",
    title: "Call Us",
    value: "0700 297474",
    sub: "Mon–Sat, 8AM–6PM",
    href: "tel:0700297474",
  },
  {
    icon: "✉️",
    title: "Email Us",
    value: "info@mattamotorsuganda.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@mattamotorsuganda.com",
  },
];

const hours = [
  {
    day: "Monday – Saturday",
    time: "8:00 AM – 6:00 PM",
    note: "Open & ready to serve",
    open: true,
  },
  { day: "Sunday", time: "Closed", note: "Our team rests", open: false },
];

const inputCls = "input-field";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const WHATSAPP_NUMBER = "256700297474";

  const submit = (e) => {
    e.preventDefault();
    setSent(true);

    const message = [
      "🚗 *New Enquiry — Matta Mottors Uganda*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || "Not provided"}`,
      `*Inquiry Type:* ${form.inquiry || "Not specified"}`,
      `*Subject:* ${form.subject}`,
      "",
      `*Message:*`,
      form.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setSent(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        subject: "",
        message: "",
      });
    }, 800);
  };

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "140px" }}
        >
          CONTACT
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="text-[var(--color-brand)] no-underline">
            Home
          </Link>{" "}
          / Contact Us
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,80px)] tracking-wide text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-500 mt-3 max-w-lg">
          Get in touch with our team for all your automotive needs.
        </p>
      </div>

      {/* CONTACT INFO CARDS */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="px-6 md:px-16 lg:px-24 py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border-x border-gray-200 -mt-1">
            {contactInfo.map((info, i) => (
              <div
                key={info.title}
                className="bg-white p-9 group hover:bg-[var(--color-brand)] transition-colors duration-500 cursor-default"
              >
                <div className="w-11 h-11 border border-gray-200 group-hover:border-white flex items-center justify-center text-xl mb-6 transition-colors duration-300">
                  {info.icon}
                </div>
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)] group-hover:text-white/60 mb-2 transition-colors duration-300">
                  {info.title}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 group-hover:text-white no-underline block mb-1 transition-colors duration-300 break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
                    {info.value}
                  </p>
                )}
                <p className="text-xs text-gray-400 group-hover:text-white/50 transition-colors duration-300">
                  {info.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20">
          {/* Left info panel */}
          <div>
            <span className="section-label">Let&apos;s Talk</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="w-12 h-0.5 bg-[var(--color-brand)] mb-8" />
            <p className="text-gray-500 leading-relaxed mb-12 text-sm">
              Whether you need vehicle repair, maintenance, parts, or just want
              to learn more about our services — we&apos;re here to help.
            </p>

            {/* Quick action buttons */}
            <div className="space-y-3 mb-12">
              {[
                {
                  href: "tel:0700297474",
                  label: "Call: 0700 297474",
                  icon: "📞",
                },
                {
                  href: "https://wa.me/256700297474",
                  label: "WhatsApp Us",
                  icon: "💬",
                  target: "_blank",
                },
                {
                  href: "mailto:info@mattamotorsuganda.com",
                  label: "Email Us",
                  icon: "✉️",
                },
              ].map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.target}
                  className="flex items-center gap-4 border border-gray-200 px-6 py-4 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-300 no-underline text-gray-700 group"
                >
                  <span className="text-base w-6 text-center">{a.icon}</span>
                  <span className="text-xs font-bold tracking-[0.18em] uppercase">
                    {a.label}
                  </span>
                  <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Hours mini block */}
            <div className="border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 px-6 py-3">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/50">
                  Opening Hours
                </p>
              </div>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-center px-6 py-4 border-t border-gray-100 first:border-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      {h.day}
                    </p>
                    <p className="text-xs text-gray-400">{h.note}</p>
                  </div>
                  <span
                    className={`font-[family-name:var(--font-bebas)] text-lg tracking-wide ${h.open ? "text-[var(--color-brand)]" : "text-gray-300"}`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {/* Decorative corner accent */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[var(--color-brand)] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[var(--color-brand)] opacity-20 pointer-events-none" />

            <div className="border border-gray-200 p-8 md:p-12 relative">
              <h3 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-gray-400 mb-10">
                We&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="john@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handle}
                      placeholder="+256 700 000000"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handle}
                      className={inputCls}
                    >
                      <option value="">Select inquiry type</option>
                      <option>General Inquiry</option>
                      <option>Vehicle Sales</option>
                      <option>Service &amp; Maintenance</option>
                      <option>Parts &amp; Accessories</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    required
                    placeholder="How can we help?"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                    placeholder="Tell us more about what you need..."
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer border-none text-white flex items-center justify-center gap-3"
                  style={{
                    background: sent ? "#16a34a" : "var(--color-brand)",
                  }}
                >
                  {sent ? (
                    <>
                      <span>✓</span> Redirecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      Send Message via WhatsApp <span>→</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Clicking send will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="bg-gray-50 border-y border-gray-200 px-6 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="section-label">Find Us</span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900">
              Our Location
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=0.09535,32.53323"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold tracking-[0.18em] uppercase text-gray-500 hover:text-[var(--color-brand)] transition-colors no-underline flex items-center gap-2"
          >
            <span className="block w-5 h-px bg-current" /> Open in Google Maps
          </a>
        </div>
        <div className="border border-gray-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.36329966785794!2d32.53322654771638!3d0.09535711394760146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1773605605518!5m2!1sen!2sug"
            width="100%"
            height="420"
            className="block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Matta Motors Location"
          />
        </div>
      </div>

      {/* IMMEDIATE ASSISTANCE CTA */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        {/* Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-brand)] opacity-[0.07]" />
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]"
          style={{ fontSize: "200px" }}
        >
          CALL
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <span className="block text-[var(--color-brand)] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
              Need Immediate Assistance?
            </span>
            <h3
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none"
              style={{ fontSize: "clamp(36px,5vw,60px)" }}
            >
              We&apos;re Ready to Help You Now.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {[
              {
                href: "tel:0700297474",
                label: "📞 Call: 0700 297474",
                primary: true,
              },
              {
                href: "https://wa.me/256700297474",
                label: "💬 WhatsApp Us",
                target: "_blank",
              },
              {
                href: "mailto:info@mattamotorsuganda.com",
                label: "✉️ Email Us",
              },
            ].map((a) => (
              <a
                key={a.label}
                href={a.href}
                target={a.target}
                className={`px-6 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-all no-underline inline-block text-center ${
                  a.primary
                    ? "bg-[var(--color-brand)] text-white hover:opacity-90"
                    : "border border-white/20 text-white/70 hover:border-white hover:text-white hover:bg-white/5"
                }`}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
