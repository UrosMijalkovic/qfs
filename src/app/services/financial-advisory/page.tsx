import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { getServicesByCategory, categoryInfo } from "@/lib/services";

const category = categoryInfo["financial-advisory"];
const services = getServicesByCategory("financial-advisory");

export default function FinancialAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-[14px] text-white/50">
              <li>
                <Link href="/services" className="hover:text-white/70 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/70">{category.title}</li>
            </ol>
          </nav>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight max-w-3xl">
            {category.title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
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
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Transform your finance function
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Let's discuss how we can help optimize your financial operations.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
