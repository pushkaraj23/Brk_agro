"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: () => void;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-glow-green hover:shadow-elevated",
  secondary:
    "bg-warm-white text-text-dark border border-border-soft hover:border-brand-green hover:text-brand-green-dark shadow-soft",
  accent:
    "bg-brand-red text-white hover:bg-brand-red-dark shadow-glow-red hover:shadow-elevated",
  ghost:
    "bg-transparent text-text-dark hover:bg-soft-green hover:text-brand-green-dark",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3 text-base gap-2",
  lg: "px-8 py-3.5 text-base gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  children,
  className = "",
  onClick,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const inner = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      type={(rest as ButtonAsButton).type ?? "button"}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}
