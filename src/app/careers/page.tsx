import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Careers | QFS",
  description: "Join QFS and build your career in advisory. We're looking for talented professionals who want to make an impact.",
};

const benefits = [
  {
    title: "Challenging Work",
    description: "Work on complex, high-impact engagements that stretch your capabilities and accelerate your growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Learning & Development",
    description: "Continuous learning through mentorship, training programs, and exposure to diverse industries and challenges.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Collaborative Culture",
    description: "A supportive environment where teamwork is valued and colleagues help each other succeed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Work-Life Balance",
    description: "We value sustainable performance. Flexibility and personal time are respected, not sacrificed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Compensation",
    description: "Attractive packages that recognize your contribution and align your success with the firm's success.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Career Progression",
    description: "Clear paths for advancement based on merit, with opportunities to grow into leadership roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const openPositions = [
  {
    title: "Senior Consultant - Financial Advisory",
    location: "Belgrade",
    type: "Full-time",
    description: "Join our Financial Advisory practice to deliver transformative solutions for finance functions. Ideal candidates have 4-6 years of experience in FP&A, controlling, or finance transformation.",
    requirements: [
      "4-6 years of relevant experience",
      "Strong financial modeling skills",
      "Experience with ERP systems",
      "Excellent communication skills",
      "Fluent in English and Serbian",
    ],
  },
  {
    title: "Consultant - Business Advisory",
    location: "Belgrade",
    type: "Full-time",
    description: "Support M&A transactions and strategic initiatives for our clients. We're looking for analytical minds with 2-4 years of experience in consulting, investment banking, or corporate strategy.",
    requirements: [
      "2-4 years of relevant experience",
      "Strong analytical and problem-solving skills",
      "Advanced Excel and PowerPoint",
      "M&A or due diligence exposure preferred",
      "Fluent in English and Serbian",
    ],
  },
  {
    title: "Analyst - Financial Advisory",
    location: "Belgrade",
    type: "Full-time",
    description: "Start your consulting career with hands-on exposure to diverse financial challenges. Perfect for recent graduates with strong academics and a passion for finance.",
    requirements: [
      "Bachelor's or Master's in Finance, Economics, or related field",
      "Strong academic record",
      "Advanced Excel skills",
      "Attention to detail",
      "Fluent in English and Serbian",
    ],
  },
  {
    title: "Senior Manager - ESG & Sustainability",
    location: "Belgrade",
    type: "Full-time",
    description: "Lead our growing sustainability practice, helping clients navigate ESG reporting requirements and develop sustainability strategies. Looking for candidates with 7+ years of experience.",
    requirements: [
      "7+ years of relevant experience",
      "Deep knowledge of ESG frameworks (GRI, SASB, TCFD)",
      "Experience with sustainability strategy development",
      "Strong client relationship skills",
      "Fluent in English and Serbian",
    ],
  },
];

// Hero background component
const HeroBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
    {/* Grid pattern */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
    {/* Accent shapes */}
    <div
      style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '24rem',
        height: '24rem',
        opacity: 0.1,
        background: 'linear-gradient(135deg, #A5040C 0%, transparent 60%)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        filter: 'blur(60px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '20rem',
        height: '20rem',
        opacity: 0.07,
        background: 'linear-gradient(225deg, #A5040C 0%, transparent 60%)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        filter: 'blur(50px)',
      }}
    />
    {/* Diagonal lines */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="careersDiagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#careersDiagonalLines)" />
    </svg>
  </div>
);

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '48rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1 }}>
              Build Your Career with QFS
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Join a team of professionals dedicated to solving complex business challenges. We're looking for talented individuals who want to make a real impact.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="#positions"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#A5040C',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                View Open Positions
                <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why QFS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Why Join Us
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-text-gray max-w-2xl mx-auto">
              We invest in our people because they're the foundation of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border-gray hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-near-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-text-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-dark">
                <div className="relative w-full h-full">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0D0D0D 50%, #A5040C 150%)',
                    }}
                  />
                  {/* Abstract elements */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                    <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" fill="none" />
                    <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" fill="none" />
                    <rect x="250" y="150" width="100" height="100" stroke="white" strokeWidth="0.5" fill="none" />
                    <line x1="0" y1="200" x2="400" y2="100" stroke="white" strokeWidth="0.5" />
                  </svg>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white/80 text-lg font-medium">Our Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
                Our Culture
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
                Excellence Through Collaboration
              </h2>
              <p className="mt-6 text-lg text-text-primary leading-relaxed">
                At QFS, we believe the best work happens when talented people collaborate openly. We foster an environment where ideas are valued regardless of seniority, and where everyone has the opportunity to contribute meaningfully.
              </p>
              <p className="mt-4 text-lg text-text-primary leading-relaxed">
                Our team members come from diverse backgrounds—Big Four firms, investment banks, industry roles, and academia. This diversity of experience enriches our perspectives and strengthens our solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-text-primary">Flat hierarchy with open communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-text-primary">Regular knowledge sharing and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-text-primary">Mentorship from experienced partners</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-text-primary">Team events and social activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Join Us
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-text-gray max-w-2xl mx-auto">
              Explore our current opportunities and find your next challenge.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border-gray hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-near-black">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-light-gray text-text-gray">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-accent/10 text-accent">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-[15px] text-text-gray leading-relaxed mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.slice(0, 3).map((req, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-[12px] bg-off-white text-text-secondary"
                        >
                          {req}
                        </span>
                      ))}
                      {position.requirements.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-[12px] bg-off-white text-text-secondary">
                          +{position.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <a
                      href={`mailto:careers@qfs.rs?subject=Application: ${position.title}`}
                      className="btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        backgroundColor: '#A5040C',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        textDecoration: 'none',
                      }}
                    >
                      Apply Now
                      <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              How to Apply
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              Our Application Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Apply", description: "Submit your CV and cover letter via email or application form." },
                { step: "02", title: "Screen", description: "Our team reviews your application and schedules an initial call." },
                { step: "03", title: "Interview", description: "Meet with our team for case studies and behavioral interviews." },
                { step: "04", title: "Offer", description: "Successful candidates receive an offer to join our team." },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-accent text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-near-black mb-2">{item.title}</h3>
                  <p className="text-[14px] text-text-gray">{item.description}</p>
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
            Don't see the right role?
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            We're always interested in hearing from talented professionals. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a
              href="mailto:careers@qfs.rs?subject=General Application"
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
              Send Your CV
              <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
