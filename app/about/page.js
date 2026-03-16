import Link from "next/link";

export const metadata = { title: "About Us — Matta Mottors Uganda" };

const offices = [
  {
    id: 1,
    name: "Matta Mottors",
    details: [
      {
        icon: "📍",
        label: "Address",
        value: "Entebbe Road, Garuga, Uganda",
        href: null,
      },
      {
        icon: "📞",
        label: "Phone",
        value: "0700 297474",
        href: "tel:0700297474",
      },
      {
        icon: "✉️",
        label: "Email",
        value: "info@mattamotorsuganda.com",
        href: "mailto:info@mattamotorsuganda.com",
      },
      {
        icon: "🚗",
        label: "Services",
        value: "Auto Car Repair Services, Parts & Parking",
        href: null,
      },
    ],
    hours: [
      { day: "Mon–Sat", time: "8AM–7PM", open: true },
      { day: "Sunday", time: "Closed", open: false },
    ],
  },
];

const timeline = [
  {
    year: "2015",
    title: "in The Beginning",
    desc: "The start is always not easy in everything , but with a goal everything is possible.",
  },
  {
    year: "2020",
    title: "the intension of growth",
    desc: "The vision was still active to reach the potential of customer needs and satisfaction, so we kept pushing to the limits.",
  },
  {
    year: "2025",
    title: "Matta Mottors Uganda",
    desc: "The services offered at the company reach the customer satisfaction and needs.",
  },
];
const heritage = [
  {
    era: "1960s Era",
    title: "Early Adventures",
    img: "https://motorcareuganda.com/uploads/about/history1.jpg",
  },
  {
    era: "1970s Era",
    title: "Rally Heritage",
    img: "https://motorcareuganda.com/uploads/about/history2.jpg",
  },
  {
    era: "1980s Era",
    title: "First Showroom",
    img: "https://motorcareuganda.com/uploads/about/history3.jpg",
  },
  {
    era: "2020s Era",
    title: "Modern Excellence",
    img: "https://motorcareuganda.com/uploads/about/history3.jpg",
  },
];
const stats = [
  { num: "10+", label: "Years of Excellence" },
  { num: "10+", label: "Major Brands" },
  { num: "100+", label: "Happy Customers" },
];
const mission = [
  {
    title: "Our Mission",
    text: "To deliver top quality automotive services and green transportation solutions in the country, combining international expertise with local dedication.",
  },
  {
    title: "Our Vision",
    text: "It's our mission to be fully focussed o delivering the best auto mobile car repairs and spare parts sales, offering the best service across Uganda.",
  },
];
const team = [
  {
    name: "Patrick Kayizzi",
    role: "Sales Manager",
    img: "https://motorcareuganda.com/uploads/team/1749553071_68480faf208b7.jpg",
  },
  {
    name: "Patrick Kayizz",
    role: "Sales Manager",
    img: "https://motorcareuganda.com/uploads/team/1749553071_68480faf208b7.jpg",
  },
  {
    name: "Patrick Kay",
    role: "Sales Manager",
    img: "https://motorcareuganda.com/uploads/team/1749553071_68480faf208b7.jpg",
  },
  {
    name: "Patrick ",
    role: "Sales Manager",
    img: "https://motorcareuganda.com/uploads/team/1749553071_68480faf208b7.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "180px" }}
        >
          ABOUT
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="text-[var(--color-brand)] no-underline">
            Home
          </Link>{" "}
          / About Us
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,80px)] tracking-wide text-gray-900">
          About Matta Mottors Uganda
        </h1>
      </div>

      {/* LOCATIONS — redesigned */}
      <section className="bg-white page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Our Locations</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            The most convenient location in the heart of Entebbe.
          </p>
        </div>

        <div className="space-y-0">
          {offices.map((office, i) => (
            <div
              key={office.id}
              className={`grid grid-cols-1 lg:grid-cols-2 ${i === 0 ? "mb-4" : ""}`}
            >
              {/* Map — swaps sides per office */}
              <div
                className={`relative min-h-[380px] lg:min-h-[480px] overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.36329966785794!2d32.53322654771638!3d0.09535711394760146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1773605605518!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Map for ${office.name}`}
                />
              </div>

              {/* Info panel */}
              <div
                className={`bg-gray-50 border border-gray-200 flex flex-col justify-between p-10 lg:p-14 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                {/* Header */}
                <div>
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)] block mb-3">
                    Location
                  </span>
                  <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(22px,3vw,34px)] tracking-wide text-gray-900 leading-tight mb-2">
                    {office.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-[var(--color-brand)] mt-4 mb-10" />

                  {/* Details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {office.details.map((d) => (
                      <div
                        key={d.label}
                        className="bg-white border border-gray-200 p-5 group hover:border-[var(--color-brand)] transition-colors"
                      >
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 flex items-center gap-2">
                          <span className="text-base">{d.icon}</span>
                          {d.label}
                        </p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-sm font-semibold text-gray-700 group-hover:text-[var(--color-brand)] transition-colors no-underline break-all"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-700 break-words">
                            {d.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours bar */}
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-5">
                    Opening Hours
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {office.hours.map((h) => (
                      <div
                        key={h.day}
                        className={`flex-1 min-w-[80px] text-center py-4 px-3 border ${
                          h.open
                            ? "border-[var(--color-brand)] bg-[var(--color-brand)]"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <p
                          className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${h.open ? "text-white/70" : "text-gray-400"}`}
                        >
                          {h.day}
                        </p>
                        <p
                          className={`font-[family-name:var(--font-bebas)] text-lg tracking-wide leading-none ${h.open ? "text-white" : "text-gray-300"}`}
                        >
                          {h.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline — redesigned */}
      <section className="bg-white page-section overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Background History</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Over 10Yrs of automotive excellence across the country.
          </p>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-0">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-0 mb-0"
                >
                  {/* LEFT column */}
                  <div
                    className={`lg:pr-16 pb-16 ${isEven ? "lg:text-right" : "lg:order-2 lg:pl-16 lg:pr-0 lg:text-left"}`}
                  >
                    {isEven ? (
                      <div className="group border border-gray-200 p-10 hover:border-[var(--color-brand)] transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                        {/* bg sweep */}
                        <div className="absolute inset-0 bg-gray-50 translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                        <div className="relative z-10">
                          <div className="font-[family-name:var(--font-bebas)] text-[80px] leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none mb-2 lg:text-right">
                            {item.year}
                          </div>
                          <div className="w-10 h-0.5 bg-[var(--color-brand)] mb-5 lg:ml-auto" />
                          <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Empty spacer on left when odd */
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* CENTER dot — desktop only */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10"
                    style={{ top: "40px" }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-brand)] border-4 border-white shadow-md" />
                  </div>

                  {/* RIGHT column */}
                  <div
                    className={`lg:pl-16 pb-16 ${isEven ? "lg:order-2 hidden lg:block" : ""}`}
                  >
                    {!isEven ? (
                      <div className="group border border-gray-200 p-10 hover:border-[var(--color-brand)] transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0" />
                        <div className="relative z-10">
                          <div className="font-[family-name:var(--font-bebas)] text-[80px] leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none mb-2">
                            {item.year}
                          </div>
                          <div className="w-10 h-0.5 bg-[var(--color-brand)] mb-5" />
                          <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Empty spacer on right when even */
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* Mobile: show all cards full width with left accent */}
                  <div className="lg:hidden border-l-4 border-[var(--color-brand)] pl-6 pb-12 -mt-16">
                    <div className="font-[family-name:var(--font-bebas)] text-[64px] leading-none text-gray-100 select-none -mb-2">
                      {item.year}
                    </div>
                    <div className="w-8 h-0.5 bg-[var(--color-brand)] mb-4" />
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heritage Gallery — redesigned */}
      <section className="bg-gray-50 page-section overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">A Visual Journey</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            Decades of automotive legacy captured in moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {heritage.map((h, i) => (
            <div
              key={h.era}
              className="relative overflow-hidden group cursor-pointer bg-gray-900"
            >
              {/* Image */}
              <img
                src={h.img}
                alt={h.title}
                className="w-full h-72 lg:h-[420px] object-cover opacity-70 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />

              {/* Era number watermark */}
              <span
                className="absolute top-5 right-5 font-[family-name:var(--font-bebas)] text-white/10 group-hover:text-white/5 leading-none select-none transition-all duration-500"
                style={{ fontSize: "80px" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Bottom content — slides up on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                {/* Era badge */}
                <span className="inline-block self-start text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1 mb-4 border border-[var(--color-brand)] text-[var(--color-brand)] bg-black/30 backdrop-blur-sm">
                  {h.era}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white leading-none mb-0 group-hover:mb-4 transition-all duration-500">
                  {h.title}
                </h3>

                {/* Red underline that grows in on hover */}
                <div className="w-0 group-hover:w-10 h-0.5 bg-[var(--color-brand)] transition-all duration-500" />
              </div>

              {/* Full red overlay bar at bottom — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-brand)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS — redesigned ── */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        {/* Background watermark */}
        <span
          className="absolute -right-8 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]"
          style={{ fontSize: "260px" }}
        >
          MATTA
        </span>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col sm:items-center text-center py-10 sm:py-6 sm:px-12 group"
            >
              {/* Animated number */}
              <div
                className="font-[family-name:var(--font-bebas)] leading-none text-white mb-3 transition-colors duration-300 group-hover:text-[var(--color-brand)]"
                style={{ fontSize: "clamp(64px,8vw,96px)" }}
              >
                {s.num}
              </div>
              {/* Divider */}
              <div className="w-8 h-px bg-[var(--color-brand)] mb-3 mx-auto group-hover:w-16 transition-all duration-500" />
              <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION — redesigned ── */}
      <section className="bg-white page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Mission &amp; Vision</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mission.map((m, i) => (
            <div
              key={m.title}
              className={`relative overflow-hidden group border border-gray-200 p-12 hover:border-[var(--color-brand)] transition-all duration-500 hover:shadow-xl ${i === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              {/* Red sweep on hover */}
              <div className="absolute inset-0 bg-[var(--color-brand)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 -z-0" />

              <div className="relative z-10">
                {/* Icon badge */}
                <div className="w-12 h-12 border-2 border-[var(--color-brand)] group-hover:border-white flex items-center justify-center mb-8 transition-colors duration-300">
                  <span className="font-[family-name:var(--font-bebas)] text-xl text-[var(--color-brand)] group-hover:text-white transition-colors duration-300">
                    {i === 0 ? "M" : "V"}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                  {m.title}
                </h3>
                <div className="w-10 h-0.5 bg-[var(--color-brand)] group-hover:bg-white mb-6 transition-colors duration-300" />
                <p className="text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300 text-[15px]">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM — redesigned ── */}
      <section className="bg-gray-50 page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Meet the Team</span>
            <h2 className="section-title">Executive Management</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            The people driving Matta Mottors Uganda forward.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="relative overflow-hidden group bg-white cursor-default"
            >
              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-72 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Info bar */}
              <div className="relative bg-white border-t-2 border-transparent group-hover:border-[var(--color-brand)] transition-colors duration-300 p-5">
                {/* Number */}
                <span
                  className="absolute top-4 right-5 font-[family-name:var(--font-bebas)] text-gray-100 group-hover:text-gray-200 transition-colors leading-none select-none"
                  style={{ fontSize: "48px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 leading-tight mb-1">
                  {m.name}
                </h4>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand)]">
                  {m.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
