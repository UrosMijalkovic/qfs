import Link from "next/link";
import Section from "@/components/ui/Section";
import { Service, getServicesByCategory, categoryInfo } from "@/lib/services";

interface ServicePageLayoutProps {
  service: Service;
}

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

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const category = categoryInfo[service.category];

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', flexWrap: 'wrap' }}>
              <li>
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/services/${service.category}`}
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >
                  {category.title}
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>{service.title}</li>
            </ol>
          </nav>

          <h1 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, maxWidth: '48rem' }}>
            {service.title}
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '42rem', lineHeight: 1.7 }}>
            {service.headline}
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <Section background="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-6">
            The Challenge
          </h2>
          <div className="space-y-4">
            {service.challenge.map((paragraph, index) => (
              <p key={index} className="text-lg text-dark-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section background="off-white">
        <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-12">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {service.approach.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="text-5xl font-bold text-accent/20 mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-near-black mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] text-text-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Deliver */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-text-gray mb-8">
              {service.description}
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[15px] text-dark-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Client Outcomes */}
      <Section background="light-gray">
        <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-12 text-center">
          Client Outcomes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {service.outcomes.map((outcome) => (
            <div key={outcome.metric} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                {outcome.metric}
              </div>
              <p className="text-[15px] text-text-gray">{outcome.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Capabilities */}
      {service.capabilities && service.capabilities.length > 0 && (
        <Section background="white">
          <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-text-gray mb-12 max-w-3xl">
            We bring deep expertise across every aspect of {service.title.toLowerCase()},
            ensuring comprehensive support for your initiatives.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group p-6 bg-off-white rounded-xl border border-transparent hover:border-accent/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-near-black mb-2 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-[14px] text-text-gray leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section background="off-white">
          <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.category}/${related.slug}`}
                className="group block p-6 bg-white rounded-xl border border-mid-gray hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-near-black mb-2 group-hover:text-accent transition-colors">
                  {related.title}
                </h3>
                <p className="text-[14px] text-text-gray line-clamp-2">
                  {related.headline}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 600, color: '#FFFFFF' }}>
            Ready to get started?
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Let's discuss how we can help with your {service.title.toLowerCase()} needs.
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
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
