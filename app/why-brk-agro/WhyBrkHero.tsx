"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight } from "lucide-react";
import { heroItem, heroStagger } from "@/lib/animations";

const heroStats = [
  { value: "9", label: "Product variants" },
  { value: "IQF", label: "Advanced processing" },
  { value: "Export", label: "Documentation ready" },
];

export function WhyBrkHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-soft-amber/40 to-cream" />
      <div className="absolute top-8 right-1/4 h-80 w-80 rounded-full bg-brand-green/[.06] blur-[85px]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-red/[.04] blur-[70px]" />
      <SectionLeafAccents />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <motion.div variants={heroStagger} initial="hidden" animate="visible">
            <motion.nav variants={heroItem} className="mb-4 flex items-center gap-1.5 text-sm">
              <Link href="/" className="text-text-muted transition-colors hover:text-brand-green">
                Home
              </Link>
              <ChevronRight size={14} className="text-text-light" />
              <span className="font-medium text-text-dark">Why BRK Agro</span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge>Why BRK Agro</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-black leading-[1.08] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              A reliable processing partner for{" "}
              <span className="text-brand-green">global frozen food</span>{" "}
              businesses
            </motion.h1>

            <motion.p variants={heroItem} className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
              We combine disciplined sourcing, modern processing, and export-first execution so distributors and food
              brands can scale with confidence.
            </motion.p>

            <motion.div variants={heroItem} className="mt-7 grid max-w-xl grid-cols-3 gap-3">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border px-3 py-4 text-center shadow-soft ${
                    i === 1
                      ? "border-brand-red/20 bg-brand-red/[.05]"
                      : "border-brand-green/20 bg-brand-green/[.06]"
                  }`}
                >
                  <p className={`font-display text-xl font-black ${i === 1 ? "text-brand-red" : "text-brand-green-dark"}`}>
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/photos/Modern food processing facility inspection.png"
                alt="BRK Agro team inspecting food processing quality"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
