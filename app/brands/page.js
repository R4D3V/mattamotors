import Link from "next/link";

export const metadata = { title: "Car Brands — Matta Mottors Uganda" };

const brands = [
  {
    name: "Toyota",
    img: "https://images.seeklogo.com/logo-png/25/1/toyota-logo-png_seeklogo-258445.png",
    desc: "",
    url: "https://www.toyota.com/",
  },
  {
    name: "Subaru",
    img: "https://image.shutterstock.com/image-photo/image-260nw-2628025957.jpg",
    desc: "",
    url: "https://www.subaru.com/index.html",
  },
  {
    name: "Ford",
    img: "https://motorcareuganda.com/uploads/brands/1748537500_6838909c2a716.jpg",
    desc: "",
    url: "https://ford.ug",
  },
  {
    name: "Hyundai",
    img: "https://motorcareuganda.com/uploads/brands/1748504352_68380f20f0f68.png",
    desc: "",
    url: "https://hyundai.ug",
  },
  {
    name: "Nissan",
    img: "https://motorcareuganda.com/uploads/brands/1748537539_683890c38237a.jpg",
    desc: "",
    url: "http://nissan.co.ug",
  },
];

export default function BrandsPage() {
  return (
    <>
      <div className="page-hero">
        <span
          className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]"
          style={{ fontSize: "180px" }}
        >
          CAR BRANDS
        </span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="text-[var(--color-brand)] no-underline">
            Home
          </Link>{" "}
          / Car Brands
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,80px)] tracking-wide text-gray-900">
          Car Brands we deal in
        </h1>
        <p className="text-gray-500 mt-3 max-w-lg">
          Representing world-class automotive brands in Uganda.
        </p>
      </div>

      {/* BRANDS — redesigned */}
      <section className="bg-white page-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Brands We Are Good At</span>
            <h2 className="section-title">Best in the Market Brands</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
            World-class automotive brands, officially represented in Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="group relative border border-gray-200 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              {/* Top accent bar */}
              <div className="h-1 w-0 group-hover:w-full bg-[var(--color-brand)] transition-all duration-500" />

              {/* Card body */}
              <div className="p-10 flex flex-col h-full">
                {/* Index number */}
                <span
                  className="absolute top-5 right-6 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-gray-200 transition-colors"
                  style={{ fontSize: "72px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Logo area */}
                <div className="relative h-28 flex items-center justify-start mb-8">
                  {b.img ? (
                    <img
                      src={b.img}
                      alt={b.name}
                      className="max-h-16 max-w-[160px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-px bg-gray-300" />
                      <span className="font-[family-name:var(--font-bebas)] text-lg text-gray-300 tracking-[0.2em]">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-gray-200 group-hover:bg-[var(--color-brand)] group-hover:w-14 transition-all duration-500 mb-6" />

                {/* Name */}
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-3 leading-none">
                  {b.name}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                  {b.desc}
                </p>

                {/* Footer */}
                {b.url ? (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-[var(--color-brand)] transition-colors duration-300 no-underline mt-auto"
                  >
                    <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                    Visit Website
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-200 mt-auto">
                    <span className="block w-6 h-px bg-current" />
                    Official Partner
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 border-t border-gray-200 px-6 md:px-16 lg:px-24 py-20 text-center">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-gray-900 mb-4">
          Interested in Any of those Brands and more?
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Get in touch for pricing, availability, and test drives.
        </p>
        <Link
          href="/contact"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block uppercase"
        >
          Request a Quote
        </Link>
      </div>
    </>
  );
}
