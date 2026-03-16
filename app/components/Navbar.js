"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/brands", label: "Brands" },
];

const rightLinks = [
  { href: "/customer-approach", label: "Customer Approach" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div className="px-6 md:px-16 lg:px-24 h-[68px] flex items-center justify-between">
          {/* Left links — desktop only */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-end pr-10">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo — centered */}
          <Link
            href="/"
            className="no-underline flex items-center shrink-0"
            aria-label="Matta Mottors Uganda"
          >
            <Image
              src="/logo.png"
              alt="Matta Mottors Uganda"
              width={280}
              height={90}
              priority
              className="h-[46px] w-auto object-contain"
            />
          </Link>

          {/* Right links — desktop only */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-start pl-10">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={toggle}
            className="lg:hidden flex flex-col justify-between w-7 h-5 bg-transparent border-none cursor-pointer p-0 z-[300]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-white z-[200] flex flex-col px-7 pt-6 pb-12 border-t-2 border-[var(--color-brand)] overflow-y-auto transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {allLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-[family-name:var(--font-bebas)] text-3xl tracking-widest py-4 border-b border-gray-100 no-underline transition-colors ${
              isActive(link.href)
                ? "text-[var(--color-brand)]"
                : "text-gray-900 hover:text-[var(--color-brand)]"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link href="/contact" className="btn-red text-center mt-7">
          Request Quote
        </Link>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
            Get In Touch
          </p>
          <a
            href="tel:0700297474"
            className="block text-sm text-gray-600 mb-2 hover:text-[var(--color-brand)] no-underline"
          >
            📞 0700 297474
          </a>
          <a
            href="mailto:info@mattamotorsuganda.com"
            className="block text-sm text-gray-600 hover:text-[var(--color-brand)] no-underline"
          >
            ✉️ info@mattamotorsuganda.com
          </a>
        </div>
      </div>
    </>
  );
}
