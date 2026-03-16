import Link from "next/link";
import ImageSlider from "./components/ImageSlider";

const stats = [
  { num: "10+", label: "Years of Experience" },
  { num: "10+", label: "Major Brands" },
  { num: "100+", label: "Happy Customers" },
];
const services = [
  {
    icon: "🚗",
    title: "Full Maintenance Leasing",
    desc: "Comprehensive leasing with full maintenance coverage for your peace of mind.",
  },
  {
    icon: "🔧",
    title: "Automotive Repair",
    desc: "Expert repair and servicing for all makes by our certified technicians.",
  },
  {
    icon: "🛡️",
    title: "Preventative Maintenance",
    desc: "Regular checks to prevent future problems and extend vehicle life.",
  },
  {
    icon: "❄️",
    title: "Air Conditioning",
    desc: "Keep your climate control system in top condition year-round.",
  },
];

export const metadata = { title: "Matta Mottors Uganda — Drive Your Future" };

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      {/* <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg')",
            filter: "brightness(0.28)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,rgba(15,15,15,0.85) 0%,rgba(192,0,30,0.1) 100%)",
          }}
        />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-10 h-px bg-gray-600" />
            <span className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase">
              Automotive Car Solutions
            </span>
          </div>
          <h1
            className="font-[family-name:var(--font-bebas)] leading-none tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(60px,9vw,110px)" }}
          >
            Breathing Life To Your Car with <br />
            <span className="text-blue-500 underline">Matta Mottors</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-10">
            Premium vehicle parts, maintenance, automobile repairs and follow-up
            care to keep you moving forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/brands" className="btn-red">
              Explore The Brands we can work on.
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
      {/* ── HERO — redesigned ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg')",
            filter: "brightness(0.22)",
          }}
        />

        {/* Layered gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(192,0,30,0.12) 100%)",
          }}
        />

        {/* Diagonal red accent stripe */}
        <div
          className="absolute top-0 right-0 w-[45%] h-full opacity-[0.06] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, #c0001e 100%)",
          }}
        />

        {/* Decorative vertical lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[55%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[70%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-28">
          <div className="max-w-3xl">
            {/* Top label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                <span className="block w-6 h-px bg-[var(--color-brand)]" />
                <span className="block w-2 h-px bg-[var(--color-brand)] opacity-50" />
              </div>
              <span className="text-[var(--color-brand)] text-[11px] font-bold tracking-[0.35em] uppercase">
                Automotive Car Solutions
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-[family-name:var(--font-bebas)] leading-[0.92] tracking-tight text-white mb-8"
              style={{ fontSize: "clamp(58px, 9vw, 115px)" }}
            >
              Breathing Life
              <br />
              <span className="relative inline-block">
                To Your
                <span className="text-[var(--color-brand)]"> Car.</span>
              </span>
            </h1>

            {/* Red divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-[var(--color-brand)]" />
              <span className="text-white/30 text-xs tracking-widest uppercase font-bold">
                Since 2015
              </span>
            </div>

            {/* Subtext */}
            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12 font-light">
              Premium vehicle parts, maintenance, automobile repairs and
              follow-up care to keep you moving forward.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/brands"
                className="group relative overflow-hidden bg-[var(--color-brand)] text-white px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5"
              >
                <span>Explore Our Brands</span>
                <span className="text-base leading-none">→</span>
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white/70 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 no-underline inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <ImageSlider />

      {/* ── ABOUT — redesigned ── */}
      <section className="bg-white page-section overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Accent block behind image */}
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-gray-50 border border-gray-200 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[var(--color-brand)] opacity-10 -z-10" />

            <img
              src="https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg"
              alt="Matta Mottors"
              className="w-full h-[500px] object-cover relative z-10"
            />

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-5 lg:bottom-8 lg:-right-8 z-20 bg-[var(--color-brand)] text-white p-6 shadow-xl">
              <div className="font-[family-name:var(--font-bebas)] text-5xl leading-none">
                10+
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1 text-white/70">
                Years of Trust
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">About Matta Mottors Uganda</h2>
            <div className="w-12 h-0.5 bg-[var(--color-brand)] mb-7" />
            <p className="text-gray-500 leading-relaxed mb-10">
              Matta Mottors Uganda is a car dealership company offering top
              automotive services, parts, and fleet management solutions. With
              excellence and a commitment to customer satisfaction, we bring you
              the best in vehicle repair, maintenance, sales and after sales
              support.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="bg-white py-7 px-4 text-center group hover:bg-[var(--color-brand)] transition-colors duration-300 cursor-default"
                >
                  <div className="font-[family-name:var(--font-bebas)] text-4xl text-[var(--color-brand)] group-hover:text-white transition-colors duration-300 leading-none">
                    {s.num}
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/70 transition-colors duration-300 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 mt-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-[var(--color-brand)] transition-colors group no-underline"
            >
              <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES — redesigned ── */}
      <section className="bg-gray-50 page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">
              Services We Offer at Matta Mottors
            </span>
            <h2 className="section-title">Our Services</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Comprehensive automotive services to keep you moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-white border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 cursor-default"
            >
              {/* Red sweep from bottom */}
              <div className="absolute inset-0 bg-[var(--color-brand)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0" />

              {/* Index watermark */}
              <span
                className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors"
                style={{ fontSize: "90px" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-white flex items-center justify-center mb-8 text-2xl transition-colors duration-300">
                  {s.icon}
                </div>

                <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                  {s.title}
                </h3>
                <div className="w-8 h-0.5 bg-[var(--color-brand)] group-hover:bg-white mb-5 transition-colors duration-300" />
                <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="bg-white page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">See Us In Action</span>
            <h2 className="section-title">Watch Our Story</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Get a closer look at what we do and how we do it.
          </p>
        </div>

        <div className="relative border border-gray-200 overflow-hidden group">
          {/* Decorative corner accents */}
          <div className="absolute -top-px -left-px w-16 h-16 border-t-2 border-l-2 border-[var(--color-brand)] z-10 pointer-events-none" />
          <div className="absolute -bottom-px -right-px w-16 h-16 border-b-2 border-r-2 border-[var(--color-brand)] z-10 pointer-events-none" />

          <video
            src="/video/matta-motors.mp4"
            loop
            muted
            playsInline
            controls
            className="w-full h-auto max-h-[600px] object-cover block"
            poster="/video/matta-motors-poster.jpg"
          />
        </div>

        <p className="text-xs text-gray-400 text-center mt-4 tracking-wide">
          Press play to watch · Loops automatically after finishing
        </p>
      </section>

      {/* ── CTA BAND — redesigned ── */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-24">
        {/* Background accent shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-brand)] opacity-10" />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 border border-white/5 rounded-full" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 border border-white/5 rounded-full" />

        {/* Watermark */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]"
          style={{ fontSize: "220px" }}
        >
          MATTA
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-xl">
            <span className="block text-[var(--color-brand)] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Get In Touch Today
            </span>
            <h2
              className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none mb-4"
              style={{ fontSize: "clamp(40px,5vw,64px)" }}
            >
              Ready to Get Our Services Offered to You?
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Get a personalised quote for your next vehicle today. Our team is
              ready to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-[var(--color-brand)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[var(--color-brand-dark)] transition-colors no-underline inline-block text-center"
            >
              Request a Quote
            </Link>
            <a
              href="tel:0700297474"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
