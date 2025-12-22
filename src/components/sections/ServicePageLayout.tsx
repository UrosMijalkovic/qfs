import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Service, getServicesByCategory, categoryInfo } from "@/lib/services";

interface ServicePageLayoutProps {
  service: Service;
}

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const category = categoryInfo[service.category];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-[14px] text-white/50">
              <li>
                <Link href="/services" className="hover:text-white/70 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/services/${service.category}`}
                  className="hover:text-white/70 transition-colors"
                >
                  {category.title}
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/70">{service.title}</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight max-w-3xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
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
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Let's discuss how we can help with your {service.title.toLowerCase()} needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
