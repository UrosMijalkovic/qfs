import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About | QFS",
  description: "QFS is an advisory firm where consultant teams partner with clients to provide effective strategies and design high-quality business solutions.",
};

const values = [
  {
    title: "Client Partnership",
    description: "We are loyal to our clients, dedicated to their success, and committed to delivering measurable results. Your challenges become our challenges.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence in Execution",
    description: "We don't just advise—we work alongside your team to implement solutions. Strategy without execution is merely a plan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Integrity & Trust",
    description: "We build relationships on honesty and transparency. Our clients trust us with their most sensitive challenges because we've earned that trust.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description: "We invest in our people and stay at the forefront of industry developments. Our expertise grows because we never stop learning.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2012", event: "QFS founded in Belgrade" },
  { year: "2015", event: "Expanded to financial restructuring services" },
  { year: "2018", event: "Launched digital transformation practice" },
  { year: "2020", event: "Added ESG & sustainability advisory" },
  { year: "2023", event: "150+ successful client engagements" },
  { year: "2024", event: "Regional expansion across Southeast Europe" },
];

const leadership = [
  {
    name: "Leadership Team",
    role: "Partners & Directors",
    description: "Our leadership team brings decades of combined experience from Big Four firms, investment banks, and industry operating roles. They've led transformations, restructurings, and strategic initiatives across industries.",
  },
  {
    name: "Advisory Network",
    role: "Senior Advisors",
    description: "We maintain relationships with senior executives and industry specialists who provide additional perspective and expertise on complex engagements.",
  },
  {
    name: "Delivery Teams",
    role: "Consultants & Analysts",
    description: "Our consultant teams combine analytical rigor with practical implementation skills. Many have backgrounds in finance, strategy, and operations across diverse industries.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
              We Partner in Your Success
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed">
              QFS is an advisory firm where consultant teams partner with clients to provide effective strategies and design high-quality business solutions. We are loyal to our clients, dedicated to their success, and committed to delivering measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
                Building Lasting Capability
              </h2>
              <p className="mt-6 text-lg text-text-primary leading-relaxed">
                We believe advisory should create lasting value, not dependency. Our approach focuses on transferring knowledge and building capability within your organization.
              </p>
              <p className="mt-4 text-lg text-text-primary leading-relaxed">
                Every engagement is designed to leave your team stronger, more capable, and better equipped to handle future challenges independently.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent">12+</div>
                  <p className="mt-1 text-[15px] text-text-gray">Years of experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">150+</div>
                  <p className="mt-1 text-[15px] text-text-gray">Projects delivered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">50+</div>
                  <p className="mt-1 text-[15px] text-text-gray">Client organizations</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">95%</div>
                  <p className="mt-1 text-[15px] text-text-gray">Client satisfaction</p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary-dark">
                <div className="relative w-full h-full">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Geometric shapes */}
                  <div
                    className="absolute top-1/4 left-1/4 w-32 h-32"
                    style={{ backgroundColor: '#A5040C', opacity: 0.9 }}
                  />
                  <div
                    className="absolute top-1/3 left-1/3 w-40 h-40 border-2"
                    style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                  />
                  <div
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <line x1="0" y1="400" x2="400" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                  <div className="absolute bottom-8 right-8">
                    <span className="text-6xl font-bold" style={{ color: 'rgba(255,255,255,0.1)' }}>
                      QFS
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-border-gray hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-near-black mb-3">
                  {value.title}
                </h3>
                <p className="text-[15px] text-text-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              How We Work
            </h2>
            <p className="mt-6 text-lg text-text-gray">
              We combine strategic insight with hands-on implementation, ensuring our recommendations translate into real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">01</div>
              <h3 className="text-xl font-semibold text-near-black mb-3">Diagnose</h3>
              <p className="text-[15px] text-text-gray leading-relaxed">
                We invest time upfront to deeply understand your situation—the business context, stakeholder dynamics, and root causes of challenges. This diagnostic rigor ensures our recommendations address real issues, not symptoms.
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">02</div>
              <h3 className="text-xl font-semibold text-near-black mb-3">Design</h3>
              <p className="text-[15px] text-text-gray leading-relaxed">
                We develop solutions tailored to your specific circumstances. There are no off-the-shelf frameworks imposed on your organization. Our recommendations are practical, actionable, and designed for your context.
              </p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">03</div>
              <h3 className="text-xl font-semibold text-near-black mb-3">Deliver</h3>
              <p className="text-[15px] text-text-gray leading-relaxed">
                We work alongside your team through implementation—not just handing over a report and walking away. We stay engaged until results are achieved and capabilities are built within your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Our People
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              The Team
            </h2>
            <p className="mt-4 text-lg text-text-gray max-w-2xl mx-auto">
              Our strength lies in our people—experienced professionals who bring diverse backgrounds and deep expertise to every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((group, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-border-gray"
              >
                <h3 className="text-xl font-semibold text-near-black mb-1">
                  {group.name}
                </h3>
                <p className="text-[14px] text-accent font-medium mb-4">
                  {group.role}
                </p>
                <p className="text-[15px] text-text-gray leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border-gray" />

              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-8 pb-12 last:pb-0">
                  {/* Year bubble */}
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                  {/* Content */}
                  <div className="pt-4">
                    <p className="text-lg text-near-black font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 600, color: '#FFFFFF' }}>
            Ready to work together?
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Let's discuss how we can help your organization achieve its goals.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="/contact"
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
              Get in Touch
            </a>
            <a
              href="/careers"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
