import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/brands", label: "Our Brands" },
  { href: "/customer-approach", label: "Customer Approach" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  { href: "https://wa.me/256700297474", label: "WhatsApp" },
  { href: "mailto:info@mattamotorsuganda.com", label: "Email" },
  { href: "tel:0700297474", label: "Call" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer body */}
      <div className="px-6 md:px-16 lg:px-24 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="no-underline inline-block mb-6"
            aria-label="Matta Mottors Uganda"
          >
            <Image
              src="/logo.png"
              alt="Matta Mottors Uganda"
              width={160}
              height={54}
              className="h-[54px] w-auto object-contain "
            />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Giving the best service to our customers is what we do. Premium
            automotive services delivered at their best.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 border border-gray-200 flex items-center justify-center text-[10px] font-bold tracking-widest text-gray-400 hover:border-[var(--color-brand)] hover:text-white hover:bg-[var(--color-brand)] transition-all duration-300 no-underline uppercase"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Quick Links
            </h4>
          </div>
          <ul className="list-none p-0 m-0 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 no-underline flex items-center gap-2 group"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-[var(--color-brand)] transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Working hours */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Working Hours
            </h4>
          </div>
          <div className="space-y-4">
            {[
              {
                day: "Monday – Saturday",
                time: "08:00AM – 07:00PM",
                open: true,
              },
              { day: "Sunday", time: "Closed", open: false },
            ].map((h) => (
              <div
                key={h.day}
                className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0"
              >
                <span className="text-sm text-gray-500">{h.day}</span>
                <span
                  className={`font-[family-name:var(--font-bebas)] tracking-wide text-base ${h.open ? "text-[var(--color-brand)]" : "text-gray-300"}`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Contact Us
            </h4>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Location",
                value: "Entebbe Road, Garuga, Uganda",
                href: null,
              },
              { label: "Phone", value: "0700 297474", href: "tel:0700297474" },
              {
                label: "Email",
                value: "info@mattamotorsuganda.com",
                href: "mailto:info@mattamotorsuganda.com",
              },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors no-underline break-all"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-16 lg:mx-24 h-px bg-gray-600" />

      {/* Bottom bar */}
      <div className="px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-400">
          © 2026 Matta Mottors Uganda. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400 hover:text-[var(--color-brand)] transition-colors no-underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
