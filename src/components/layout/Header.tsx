"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Financial Advisory", href: "/services/financial-advisory" },
      { name: "Business Advisory", href: "/services/business-advisory" },
      { name: "Sustainability & Digital", href: "/services/sustainability-digital" },
    ],
  },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mid-gray">
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="QFS - Dedicated To Your Success"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-dark-gray hover:text-near-black transition-colors py-2"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="inline-block ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-mid-gray py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-[15px] text-dark-gray hover:bg-off-white hover:text-near-black transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.625rem 1.25rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#A5040C',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-dark-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-mid-gray">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-[15px] font-medium text-dark-gray"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-[14px] text-text-gray"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                display: 'block',
                marginTop: '1rem',
                padding: '0.75rem',
                textAlign: 'center',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#A5040C',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
