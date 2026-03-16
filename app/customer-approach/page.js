import Link from "next/link";

export const metadata = { title: "Customer Approach — Matta Mottors Uganda" };

const pillars = [
  {
    num: "01",
    title: "Customer First",
    desc: "Every decision starts with the customer. We're dedicated to exceptional service and lasting relationships.",
  },
  {
    num: "02",
    title: "Employee Wellbeing",
    desc: "Our team is our greatest asset. We invest in training, development and wellbeing programmes.",
  },
  {
    num: "03",
    title: "Community Impact",
    desc: "We believe in giving back through targeted social responsibility programmes across Uganda.",
  },
  {
    num: "04",
    title: "Safety Standards",
    desc: "We maintain the highest safety standards in every service — from vehicle checks to aftersales support.",
  },
  {
    num: "05",
    title: "Integrity Always",
    desc: "We operate with complete transparency. Our Whistleblowing Scheme ensures accountability at every level.",
  },
  {
    num: "06",
    title: "Sustainability",
    desc: "We are committed to reducing our environmental footprint through responsible practices and innovative solutions.",
  },
  {
    num: "07",
    title: "Innovation",
    desc: "We embrace innovation to drive growth, improve efficiency, and deliver exceptional value to our customers.",
  },
  {
    num: "08",
    title: "Continuous Improvement",
    desc: "We are committed to learning and growing. Our culture of continuous improvement drives us to exceed expectations.",
  },
  {
    num: "09",
    title: "Quality Assurance",
    desc: "We maintain the highest quality standards in every aspect of our operations, ensuring customer satisfaction.",
  },
  {
    num: "10",
    title: "Transparency",
    desc: "We operate with complete transparency, fostering trust and accountability in all our interactions.",
  },
  {
    num: "11",
    title: "Diversity & Inclusion",
    desc: "We celebrate diversity and promote an inclusive environment where everyone feels valued and respected.",
  },
  {
    num: "12",
    title: "Customer Feedback",
    desc: "We actively seek and value customer feedback to continuously improve our products and services.",
  },
];

export default function PeopleCarePage() {
  return (
    <>
      <div className="page-hero">
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "160px" }}
        >
          PEOPLE
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="text-[var(--color-brand)] no-underline">
            Home
          </Link>{" "}
          / Customer Approach
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,80px)] tracking-wide text-gray-900">
          Customer Approach
        </h1>
        <p className="text-gray-500 mt-3 max-w-lg">
          Our commitment to our customers, employees, and community.
        </p>
      </div>

      {/* <section className="bg-white page-section">
        <span className="section-label">Our Commitment</span>
        <h2 className="section-title">How We Care</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-12">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-white p-10 hover:bg-gray-50 transition-colors"
            >
              <div
                className="font-[family-name:var(--font-bebas)] text-6xl leading-none mb-3"
                style={{ color: "rgba(192,0,30,0.2)" }}
              >
                {p.num}
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
      {/* OUR COMMITMENT — redesigned */}
      <section className="bg-white page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Our Commitment</span>
            <h2 className="section-title">How We Care</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed md:text-right">
            The principles that shape everything we do at Matta Mottors Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="group relative overflow-hidden border border-gray-200 p-10 cursor-default transition-all duration-500 hover:border-[var(--color-brand)] hover:shadow-xl"
              style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}
            >
              {/* Big watermark number */}
              <span
                className="absolute -top-4 -right-3 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-10"
                style={{ fontSize: "120px", color: "rgba(0,0,0,0.04)" }}
              >
                {p.num}
              </span>

              {/* Red fill on hover */}
              <div className="absolute inset-0 bg-[var(--color-brand)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0" />

              {/* Content */}
              <div className="relative z-10">
                {/* Number pill */}
                <span className="inline-block font-[family-name:var(--font-bebas)] text-xs tracking-[0.25em] px-3 py-1 mb-6 border border-[var(--color-brand)] text-[var(--color-brand)] group-hover:border-white group-hover:text-white transition-colors duration-300">
                  {p.num}
                </span>

                <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300 mb-4 leading-none">
                  {p.title}
                </h3>

                {/* Animated divider */}
                <div className="w-8 h-0.5 bg-[var(--color-brand)] group-hover:bg-white group-hover:w-16 transition-all duration-500 mb-5" />

                <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
