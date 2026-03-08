import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="neumorph text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-100 font-bold">M</span>
              </div>
              <div>
                <p className="font-bold text-sm">MATTAMOTORS</p>
                <p className="text-xs text-gray-400">UGANDA</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Premium car repairs, maintenance, and genuine spare parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Car Repairs</span>
              </li>
              <li>
                <span className="text-gray-400">Regular Maintenance</span>
              </li>
              <li>
                <span className="text-gray-400">Spare Parts Retail</span>
              </li>
              <li>
                <span className="text-gray-400">Diagnostic Services</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+256700000000"
                  className="hover:text-white transition-colors"
                >
                  +256 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mattamotors.com"
                  className="hover:text-white transition-colors"
                >
                  info@mattamotors.com
                </a>
              </li>
              <li>
                <p>Kampala, Uganda</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} MATTAMOTORS UGANDA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
