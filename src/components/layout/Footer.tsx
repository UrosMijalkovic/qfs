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
    <footer style={{ backgroundColor: '#0D0D0D', color: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <img
                src="/logo.png"
                alt="QFS - Dedicated To Your Success"
                style={{ height: '2.5rem', width: 'auto' }}
              />
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '280px' }}>
              We partner with leadership teams to solve complex financial and strategic challenges.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
              Get in Touch
            </h4>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
              Ready to discuss your challenges?
            </p>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.9375rem', fontWeight: 500, color: '#FFFFFF', textDecoration: 'none' }}
            >
              Contact Us
              <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} QFS. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
