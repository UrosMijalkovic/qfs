import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Financial Advisory", href: "/services/financial-advisory" },
    { name: "Business Advisory", href: "/services/business-advisory" },
    { name: "Sustainability & Digital", href: "/services/sustainability-digital" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              QFS
            </Link>
            <p className="mt-4 text-[15px] text-white/70 leading-relaxed max-w-xs">
              We partner with leadership teams to solve complex financial and strategic challenges.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get in Touch
            </h4>
            <p className="text-[15px] text-white/70 mb-4">
              Ready to discuss your challenges?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[15px] font-medium text-accent hover:text-white transition-colors"
            >
              Contact Us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} QFS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[13px] text-white/50 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] text-white/50 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
