import type { ReactNode } from "react";

type BadgeVariant = "green" | "red" | "neutral";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green: "bg-soft-green text-brand-green-dark border-brand-green/20",
  red: "bg-soft-red text-brand-red-dark border-brand-red/20",
  neutral: "bg-warm-white text-text-dark border-border-soft",
};

export function Badge({
  children,
  variant = "green",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
