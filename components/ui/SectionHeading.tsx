"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "green" | "red" | "neutral";
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "green",
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`${centered ? "text-center" : ""} mb-12 md:mb-16 ${className}`}
    >
      {badge && (
        <motion.div variants={fadeUp} className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-text-dark"
        }`}
      >
        {title}
      </motion.h2>

      {/* Ornamental divider */}
      {centered && (
        <motion.div
          variants={fadeUp}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <span className="h-[2px] w-8 rounded-full bg-brand-green/30" />
          <span className="h-2 w-2 rounded-full bg-brand-red/50" />
          <span className="h-[2px] w-8 rounded-full bg-brand-green/30" />
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-lg leading-relaxed sm:text-xl ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          } ${light ? "text-white/70" : "text-text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
