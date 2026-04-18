"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight, Snowflake } from "lucide-react";
import { SITE_VIDEOS } from "@/lib/siteMedia";

export function InfrastructureHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-14">
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
              <span className="font-medium text-text-dark">
                Infrastructure
              </span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge>Our Infrastructure</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              World-Class{" "}
              <span className="text-brand-green">Processing</span> Facility
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              A modern, hygienic, and technology-driven facility built around IQF
              Frozen Corn and Retort Corn — engineered to meet demanding
              international food safety and quality expectations.
            </motion.p>
          </motion.div>

          <div className="relative lg:py-4">
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
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={SITE_VIDEOS.facilityProcessingMp4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-soft" />
                  <span className="text-xs font-semibold tracking-wide text-white">
                    IQF & Cold Chain Ready
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.55,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border-soft bg-warm-white p-4 shadow-elevated sm:-left-5"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                <Snowflake className="h-5 w-5 text-brand-green" />
              </div>
              <div className="pr-1">
                <p className="text-sm font-bold text-text-dark">JBT IQF Line</p>
                <p className="text-xs text-text-muted">Advanced Freezing</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-brand-red/20 ring-4 ring-brand-red/8"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
