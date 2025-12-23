import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ServiceCard, ProofPoint, ArticleCard } from "@/components/ui/Card";
import { getFeaturedInsight, getRecentInsights, categoryLabels, Insight } from "@/lib/insights";

// Map article slugs to images (fallback to category-based)
const articleImages: Record<string, string> = {
  "cfo-guide-uncertainty": "/insight-cfo-guide-uncertainty.jpg",
  "zero-based-budgeting": "/insight-zero-based-budgeting.jpg",
  "ma-integration": "/insight-ma-integration.jpg",
  "supply-chain-resilience": "/insight-supply-chain-resilience.jpg",
  "building-high-performance-fpa": "/insight-building-high-performance-fpa.jpg",
};

const categoryImages: Record<Insight["category"], string> = {
  "financial-performance": "/insight-financial.jpg",
  "strategy": "/insight-strategy.jpg",
  "sustainability": "/insight-sustainability.jpg",
  "transactions": "/insight-strategy.jpg",
  "digital": "/insight-financial.jpg",
  "leadership": "/insight-strategy.jpg",
};

// Get image for an insight (article-specific or category fallback)
const getInsightImage = (insight: Insight) => {
  return articleImages[insight.slug] || categoryImages[insight.category];
};

// Icons for services
const FinanceIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const StrategyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SustainabilityIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

// Hero background with image
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Background image */}
    <img
      src="/hero.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark overlay for text readability */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.6) 100%)',
      }}
    />
  </div>
);

// Featured Insights Section Component
const FeaturedInsightsSection = () => {
  const featured = getFeaturedInsight();
  const recentInsights = getRecentInsights(3, featured.slug);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span
              className="text-[12px] font-semibold tracking-widest uppercase"
              style={{ color: '#A5040C' }}
            >
              Insights
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold" style={{ color: '#171717' }}>
              Latest Thinking
            </h2>
            <p className="mt-4 text-lg max-w-xl" style={{ color: '#737373' }}>
              Insights and perspectives on the challenges facing business leaders today.
            </p>
          </div>
          <Link
            href="/insights"
            className="mt-6 lg:mt-0 inline-flex items-center text-[15px] font-medium transition-colors"
            style={{ color: '#A5040C' }}
          >
            Explore all insights
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Link
            href={`/insights/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#0D0D0D' }}
          >
            {/* Article image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={getInsightImage(featured)}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: '#A5040C', color: '#FFFFFF' }}
                >
                  {categoryLabels[featured.category]}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3
                className="text-xl lg:text-2xl font-semibold mb-3 transition-colors"
                style={{ color: '#FFFFFF' }}
              >
                {featured.title}
              </h3>
              <p className="text-[15px] mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {featured.date}
              </p>
              <div className="flex items-center text-[14px] font-medium" style={{ color: '#A5040C' }}>
                Read article
                <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Recent Articles */}
          <div className="space-y-6">
            {recentInsights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex gap-6 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E5E5' }}
              >
                {/* Mini visual */}
                <div className="hidden sm:block w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={getInsightImage(article)}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: '#A5040C' }}
                  >
                    {categoryLabels[article.category]}
                  </span>
                  <h3
                    className="mt-2 text-lg font-semibold transition-colors group-hover:text-[#A5040C]"
                    style={{ color: '#171717' }}
                  >
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[14px]" style={{ color: '#737373' }}>
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Abstract pattern for sections
const AbstractDivider = () => (
  <div className="relative h-24 overflow-hidden bg-[#F5F5F5]">
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96">
      <path
        d="M0,64 C480,96 960,32 1440,64 L1440,96 L0,96 Z"
        fill="#FFFFFF"
      />
    </svg>
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-20"
      style={{
        background: '#A5040C',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      }}
    />
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
        <HeroBackground />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center pt-20">
          {/* Overline */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/50" />
            <span className="text-[13px] font-semibold tracking-widest uppercase" style={{ color: '#FFFFFF' }}>
              Advisory Services
            </span>
            <div className="h-px w-12 bg-white/50" />
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight max-w-4xl mx-auto"
            style={{ color: '#FFFFFF' }}
          >
            We Partner in Your Success
          </h1>
          <p
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Advisory services for leaders navigating complex financial and strategic challenges—delivering clarity, capability, and results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/services" variant="primary" size="lg">
              Explore Our Services
            </Button>
            <Button href="/insights" variant="ghost" size="lg">
              Read Our Insights
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>150+</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Projects</div>
            </div>
            <div className="w-px h-8 bg-white/40" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>12+</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Years</div>
            </div>
            <div className="w-px h-8 bg-white/40" />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>50+</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Clients</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[11px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
            <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.4)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span
              className="text-[12px] font-semibold tracking-widest uppercase"
              style={{ color: '#A5040C' }}
            >
              Why QFS
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold" style={{ color: '#171717' }}>
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Financial Clarity",
                description: "CFO-level expertise on demand. We bring rigorous financial analysis to your most pressing decisions."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Strategic Rigor",
                description: "Analysis that drives decisions. We cut through complexity to identify what matters most."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Lasting Results",
                description: "Implementation that sticks. We build capability, not dependency—ensuring sustainable outcomes."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Card with hover effect */}
                <div
                  className="p-8 rounded-2xl transition-all duration-300 group-hover:shadow-xl"
                  style={{
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E5E5E5',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
                    style={{ backgroundColor: '#A5040C', color: '#FFFFFF' }}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#737373' }}>
                    {item.description}
                  </p>
                </div>

                {/* Accent line on hover */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: '#A5040C' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#000" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicePattern)" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase"
                style={{ color: '#A5040C' }}
              >
                Our Expertise
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold" style={{ color: '#171717' }}>
                How We Help
              </h2>
              <p className="mt-4 text-lg max-w-xl" style={{ color: '#737373' }}>
                Comprehensive advisory services across finance, strategy, and sustainability.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-6 lg:mt-0 inline-flex items-center text-[15px] font-medium transition-colors"
              style={{ color: '#A5040C' }}
            >
              View all services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <FinanceIcon />,
                title: "Financial Advisory",
                description: "From finance function optimization to restructuring, we deliver the financial expertise your business needs.",
                href: "/services/financial-advisory",
                features: ["FP&A", "Restructuring", "Automation"]
              },
              {
                icon: <StrategyIcon />,
                title: "Business Advisory",
                description: "Strategic clarity and operational excellence for complex business challenges and transactions.",
                href: "/services/business-advisory",
                features: ["M&A", "Valuations", "Strategy"]
              },
              {
                icon: <SustainabilityIcon />,
                title: "Sustainability & Digital",
                description: "Future-proof your organization with digital transformation and ESG integration.",
                href: "/services/sustainability-digital",
                features: ["ESG", "Digital", "Innovation"]
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Card header with accent */}
                <div
                  className="h-2 transition-all duration-300 group-hover:h-3"
                  style={{ backgroundColor: '#A5040C' }}
                />

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg mb-6"
                    style={{ backgroundColor: '#F5F5F5', color: '#A5040C' }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-xl font-semibold mb-3 transition-colors group-hover:text-[#A5040C]"
                    style={{ color: '#171717' }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#737373' }}>
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-[12px] font-medium"
                        style={{ backgroundColor: '#F5F5F5', color: '#737373' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center text-[14px] font-medium" style={{ color: '#A5040C' }}>
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <FeaturedInsightsSection />

      {/* Proof / Credibility */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle at 100% 50%, #A5040C 0%, transparent 50%)',
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span
              className="text-[12px] font-semibold tracking-widest uppercase"
              style={{ color: '#A5040C' }}
            >
              Track Record
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold" style={{ color: '#171717' }}>
              The Impact We Deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "40%", description: "Average reduction in financial close cycle time" },
              { metric: "€15M+", description: "Identified savings through ZBB implementations" },
              { metric: "200+", description: "Jobs preserved through successful restructurings" },
              { metric: "6 weeks", description: "Average time to investor-ready financials" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
              >
                <div
                  className="text-4xl lg:text-5xl font-bold mb-3"
                  style={{ color: '#A5040C' }}
                >
                  {item.metric}
                </div>
                <p className="text-[15px]" style={{ color: '#737373' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase"
                style={{ color: '#A5040C' }}
              >
                About QFS
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold" style={{ color: '#171717' }}>
                The Firm
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: '#404040' }}>
                QFS is an advisory firm where consultant teams partner with clients to provide effective strategies and design high-quality business solutions. We are loyal to our clients, dedicated to their success, and committed to delivering measurable results.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#404040' }}>
                Our approach combines deep expertise with practical implementation—we don't just advise, we work alongside your team to ensure lasting impact.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-[15px] font-medium"
                  style={{ color: '#A5040C' }}
                >
                  Learn more about QFS
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/team-leadership.jpg"
                  alt="QFS Leadership Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24"
                style={{ backgroundColor: '#A5040C' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 opacity-10"
            style={{
              background: 'radial-gradient(circle, #A5040C 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold" style={{ color: '#FFFFFF' }}>
            Ready to discuss your challenges?
          </h2>
          <p
            className="mt-6 text-lg lg:text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Our partners are available for a confidential conversation about your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button href="mailto:contact@qfs.rs" variant="ghost" size="lg">
              contact@qfs.rs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
