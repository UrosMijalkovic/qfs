import { notFound } from "next/navigation";
import { services, getServicesByCategory } from "@/lib/services";
import ServicePageLayout from "@/components/sections/ServicePageLayout";

// Generate static params for all sustainability & digital services
export function generateStaticParams() {
  return getServicesByCategory("sustainability-digital").map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(
    (s) => s.slug === params.slug && s.category === "sustainability-digital"
  );

  if (!service) {
    return { title: "Service Not Found | QFS" };
  }

  return {
    title: `${service.title} | Sustainability & Digital | QFS`,
    description: service.headline,
  };
}

export default function SustainabilityDigitalServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find(
    (s) => s.slug === params.slug && s.category === "sustainability-digital"
  );

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}
