import { notFound } from "next/navigation";
import { services, getServicesByCategory } from "@/lib/services";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

// Generate static params for all financial advisory services
export function generateStaticParams() {
  return getServicesByCategory("financial-advisory").map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(
    (s) => s.slug === slug && s.category === "financial-advisory"
  );

  if (!service) {
    return { title: "Service Not Found | QFS" };
  }

  return {
    title: `${service.title} | Financial Advisory | QFS`,
    description: service.headline,
  };
}

export default async function FinancialAdvisoryServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find(
    (s) => s.slug === slug && s.category === "financial-advisory"
  );

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}
