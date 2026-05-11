"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight } from "lucide-react";
import { aboutContent } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-14">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-soft-amber/40 to-cream" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7A6230 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-brand-green/[.06] blur-[80px]" />
      <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-brand-red/[.03] blur-[60px]" />
      <SectionLeafAccents />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* ── LEFT — Text ── */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.nav
              variants={heroItem}
              className="mb-4 flex items-center gap-1.5 text-sm"
            >
              <Link
                href="/"
                className="text-text-muted transition-colors hover:text-brand-green"
              >
                Home
              </Link>
              <ChevronRight size={14} className="text-text-light" />
              <span className="font-medium text-text-dark">About</span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge>About Us</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              {aboutContent.headline}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              {aboutContent.heroIntro}
            </motion.p>
          </motion.div>

          {/* ── RIGHT — Image composition ── */}
          <div className="relative lg:py-4">
            {/* Main photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated"
            >
              <Image
                src="/photos/company-building-refined.png"
                alt="BRK Agro company building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-soft" />
                  <span className="text-xs font-semibold tracking-wide text-white">
                    Farm-to-Freeze Processing
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Accent dots */}
            <div className="absolute -bottom-2 left-12 h-5 w-5 rounded-full bg-brand-green/20 ring-4 ring-brand-green/8" />
            <div className="absolute top-4 -left-2 hidden h-4 w-4 rounded-full bg-brand-red/15 ring-4 ring-brand-red/6 sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
