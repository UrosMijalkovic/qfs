import { notFound } from "next/navigation";
import { services, getServicesByCategory } from "@/lib/services";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

// Generate static params for all business advisory services
export function generateStaticParams() {
  return getServicesByCategory("business-advisory").map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(
    (s) => s.slug === params.slug && s.category === "business-advisory"
  );

  if (!service) {
    return { title: "Service Not Found | QFS" };
  }

  return {
    title: `${service.title} | Business Advisory | QFS`,
    description: service.headline,
  };
}

export default function BusinessAdvisoryServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find(
    (s) => s.slug === params.slug && s.category === "business-advisory"
  );

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}
