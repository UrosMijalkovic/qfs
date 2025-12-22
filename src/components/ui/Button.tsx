import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    borderRadius: "0.5rem",
    transition: "all 0.2s ease",
    textDecoration: "none",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#A5040C",
      color: "#FFFFFF",
      border: "none",
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      color: "#171717",
      border: "1px solid #E5E5E5",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "0.5rem 1rem", fontSize: "14px" },
    md: { padding: "0.75rem 1.5rem", fontSize: "15px" },
    lg: { padding: "1rem 2rem", fontSize: "16px" },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  if (href) {
    return (
      <Link href={href} style={combinedStyles} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={combinedStyles} className={className}>
      {children}
    </button>
  );
}
