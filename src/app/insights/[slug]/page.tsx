import { notFound } from "next/navigation";
import Link from "next/link";
import { insights, categoryLabels, getInsightBySlug, getRecentInsights } from "@/lib/insights";

// Generate static params for all insights
export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

// Generate metadata for each insight page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return { title: "Article Not Found | QFS" };
  }

  return {
    title: `${insight.title} | Insights | QFS`,
    description: insight.excerpt,
  };
}

// Hero background component
const HeroBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
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
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="insightArticleDiagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#insightArticleDiagonalLines)" />
    </svg>
  </div>
);

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = getRecentInsights(3, insight.slug);

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
              <li>
                <Link href="/insights" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>{categoryLabels[insight.category]}</li>
            </ol>
          </nav>

          {/* Category */}
          <span style={{
            display: 'inline-block',
            padding: '0.375rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.6875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: '#A5040C',
            color: '#FFFFFF',
          }}>
            {categoryLabels[insight.category]}
          </span>

          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(1.875rem, 4vw, 2.625rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>
            {insight.title}
          </h1>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)' }}>
            <span>{insight.date}</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
            <span>{insight.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Lead paragraph */}
          <p className="text-xl lg:text-[22px] text-text-primary leading-relaxed font-medium">
            {insight.excerpt}
          </p>

          {/* Content */}
          <div className="mt-12 prose prose-lg max-w-none">
            {insight.content.map((block, index) => {
              // Check if it's a heading
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold text-near-black mt-12 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-near-black mt-8 mb-3"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }

              // Regular paragraph - handle bold text
              const formattedText = block.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i} className="font-semibold text-near-black">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              });

              return (
                <p
                  key={index}
                  className="text-[17px] text-text-primary leading-relaxed mb-6"
                >
                  {formattedText}
                </p>
              );
            })}
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-border-gray">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-text-secondary">
                Share this article
              </span>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.4v4.33h-3v-9h2.89v1.23h.04a3.18 3.18 0 012.85-1.57c3.05 0 3.61 2 3.61 4.61v4.73z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedInsights.length > 0 && (
        <section className="py-16 lg:py-20 bg-light-gray">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-near-black mb-12">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedInsights.map((related) => (
                <Link
                  key={related.slug}
                  href={`/insights/${related.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-border-gray hover:shadow-xl hover:border-accent/20 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className="relative h-40 bg-primary-dark">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #0D0D0D 70%, #A5040C 150%)',
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent text-white">
                        {categoryLabels[related.category]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold text-near-black group-hover:text-accent transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-3 text-[12px] text-text-secondary">
                      <span>{related.date}</span>
                      <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 600, color: '#FFFFFF' }}>
            Let's discuss your challenges
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Our partners are available for a confidential conversation about your needs.
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
