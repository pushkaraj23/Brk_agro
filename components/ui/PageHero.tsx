"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export function PageHero({ badge, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-soft-amber/40 to-cream" />
      <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-brand-green/[.06] blur-[80px]" />
      <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-brand-red/[.03] blur-[60px]" />

      <SectionLeafAccents />
      <div className="absolute top-32 right-1/3 h-4 w-4 rounded-full bg-brand-red/10" />
      <div className="absolute bottom-20 right-20 h-3 w-3 rounded-full bg-brand-green/15" />

      <Container className="relative">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.nav variants={heroItem} className="mb-5 flex items-center gap-1.5 text-sm">
              <Link href="/" className="text-text-muted transition-colors hover:text-brand-green">
                Home
              </Link>
              {breadcrumb.map((crumb) => (
                <span key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-text-light" />
                  <Link href={crumb.href} className="font-medium text-text-dark">
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </motion.nav>
          )}

          {badge && (
            <motion.div variants={heroItem}>
              <Badge>{badge}</Badge>
            </motion.div>
          )}

          <motion.h1
            variants={heroItem}
            className="mt-4 font-display text-4xl leading-[1.1] font-bold tracking-tight text-text-dark sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={heroItem}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
