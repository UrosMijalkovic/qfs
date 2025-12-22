interface SectionProps {
  children: React.ReactNode;
  background?: "white" | "off-white" | "light-gray" | "dark";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  background = "white",
  className = "",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    "off-white": "bg-off-white",
    "light-gray": "bg-light-gray",
    dark: "bg-primary-dark text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 xl:py-32 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
