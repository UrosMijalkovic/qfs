import Link from "next/link";
import Section from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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
      <section className="bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
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
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Let's discuss your challenges and identify the right approach together.
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
