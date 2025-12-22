import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 lg:p-8 bg-white rounded-xl border border-mid-gray hover:border-accent hover:shadow-lg transition-all duration-300"
    >
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-off-white text-accent mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg lg:text-xl font-semibold text-near-black mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-[15px] text-text-gray leading-relaxed mb-4">
        {description}
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
  );
}

interface ProofPointProps {
  metric: string;
  description: string;
}

export function ProofPoint({ metric, description }: ProofPointProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
        {metric}
      </div>
      <p className="text-[15px] text-text-gray">
        {description}
      </p>
    </div>
  );
}

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  href: string;
  featured?: boolean;
}

export function ArticleCard({ title, category, date, href, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={`group block ${featured ? 'p-8 bg-off-white rounded-xl' : 'py-4 border-b border-mid-gray'}`}
    >
      <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">
        {category}
      </span>
      <h3 className={`${featured ? 'text-xl lg:text-2xl mt-3' : 'text-lg mt-2'} font-semibold text-near-black group-hover:text-accent transition-colors`}>
        {title}
      </h3>
      <p className="text-[14px] text-text-gray mt-2">
        {date}
      </p>
    </Link>
  );
}
