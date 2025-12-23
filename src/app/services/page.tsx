import Link from "next/link";
import Section from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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

const serviceCategories = [
  {
    title: "Financial Advisory",
    description: "Transform your finance function from cost center to strategic advantage. We deliver CFO-level expertise across the full spectrum of financial operations.",
    href: "/services/financial-advisory",
    services: [
      "Finance Function Outsourcing",
      "Controlling & Reporting",
      "Budgeting & Forecasting",
      "Strategic Planning & FP&A",
      "KPIs & Dashboards",
      "Business Plans",
      "Zero-Based Budgeting",
      "Financial Restructuring",
      "Prepackaged Bankruptcy",
      "Finance Automation",
    ],
  },
  {
    title: "Business Advisory",
    description: "Strategic clarity and operational excellence for complex business challenges. We help leadership teams navigate transactions, transformations, and growth.",
    href: "/services/business-advisory",
    services: [
      "Supply Chain Management",
      "Valuations & Assessments",
      "Corporate Finance & Strategy",
      "Transformations & Leadership",
      "Mergers & Acquisitions",
      "Startup Advisory",
    ],
  },
  {
    title: "Sustainability & Digital",
    description: "Future-proof your organization for the demands of tomorrow. We integrate digital transformation and ESG into sustainable business models.",
    href: "/services/sustainability-digital",
    services: [
      "Organizational Health",
      "Digital Advisory",
      "ESG & Sustainability",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, maxWidth: '48rem' }}>
            Our Services
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '42rem', lineHeight: 1.7 }}>
            Comprehensive advisory services for leaders navigating complex financial, strategic, and operational challenges.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <Section
          key={category.title}
          background={index % 2 === 0 ? "white" : "off-white"}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-near-black">
                {category.title}
              </h2>
              <p className="mt-4 text-lg text-text-gray leading-relaxed">
                {category.description}
              </p>
              <div className="mt-8">
                <Button href={category.href} variant="primary">
                  Explore {category.title}
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-text-gray mb-4">
                Capabilities
              </h4>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center text-[15px] text-dark-gray"
                  >
                    <svg
                      className="w-5 h-5 text-accent mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 600, color: '#FFFFFF' }}>
            Not sure where to start?
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Let's discuss your challenges and identify the right approach together.
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
