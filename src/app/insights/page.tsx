import Link from "next/link";
import { insights, categoryLabels, getFeaturedInsight } from "@/lib/insights";

export const metadata = {
  title: "Insights | QFS",
  description: "Perspectives and analysis on finance, strategy, and sustainability from QFS advisory experts.",
};

export default function InsightsPage() {
  const featured = getFeaturedInsight();
  const otherInsights = insights.filter((i) => i.slug !== featured.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
            Insights
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            Perspectives and analysis on the challenges facing business leaders today—from financial transformation to strategic decision-making.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
            Featured
          </span>

          <Link
            href={`/insights/${featured.slug}`}
            className="group mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Image placeholder */}
            <div className="relative aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden bg-primary-dark">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0D0D0D 50%, #A5040C 150%)',
                }}
              />
              {/* Geometric overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 250">
                <path d="M0,125 Q100,75 200,125 T400,125" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,145 Q100,95 200,145 T400,145" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,165 Q100,115 200,165 T400,165" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="350" cy="60" r="40" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="350" cy="60" r="25" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
              </svg>
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent text-white">
                  {categoryLabels[featured.category]}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-semibold text-near-black group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-text-gray leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-[14px] text-text-secondary">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                <span>{featured.readTime}</span>
              </div>
              <div className="mt-6 flex items-center text-[15px] font-medium text-accent">
                Read article
                <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-12">
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherInsights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-border-gray hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-primary-dark">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0D0D0D 70%, #A5040C 150%)',
                    }}
                  />
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 200">
                    <rect x="200" y="20" width="60" height="60" stroke="white" strokeWidth="0.5" fill="none" />
                    <circle cx="60" cy="140" r="30" stroke="white" strokeWidth="0.5" fill="none" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent text-white">
                      {categoryLabels[insight.category]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-near-black group-hover:text-accent transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-text-gray line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-[13px] text-text-secondary">
                    <span>{insight.date}</span>
                    <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Stay Informed
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Receive our latest insights directly in your inbox.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
