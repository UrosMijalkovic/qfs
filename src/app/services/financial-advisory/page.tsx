import Link from "next/link";
import Section from "@/components/ui/Section";
import { getServicesByCategory, categoryInfo } from "@/lib/services";

const category = categoryInfo["financial-advisory"];
const services = getServicesByCategory("financial-advisory");

// Hero background component
const HeroBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
    <img
      src="/hero.jpg"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.6) 100%)',
      }}
    />
  </div>
);

export default function FinancialAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <nav style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
              <li>
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>{category.title}</li>
            </ol>
          </nav>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, maxWidth: '48rem' }}>
            {category.title}
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '42rem', lineHeight: 1.7 }}>
            {category.description}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section background="white">
        <div className="max-w-3xl">
          <p className="text-lg text-dark-gray leading-relaxed">
            {category.longDescription}
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="off-white">
        <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-8">
          Our Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/financial-advisory/${service.slug}`}
              className="group block p-6 lg:p-8 bg-white rounded-xl border border-mid-gray hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg lg:text-xl font-semibold text-near-black mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-[15px] text-text-gray leading-relaxed mb-4">
                {service.headline}
              </p>
              <span className="inline-flex items-center text-[14px] font-medium text-accent">
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 600, color: '#FFFFFF' }}>
            Transform your finance function
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Let's discuss how we can help optimize your financial operations.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a
              href="/contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                backgroundColor: '#A5040C',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
