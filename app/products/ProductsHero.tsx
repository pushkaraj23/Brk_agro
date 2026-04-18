"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight } from "lucide-react";

export function ProductsHero() {
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
          {/* Text */}
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
              <span className="font-medium text-text-dark">Products</span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge>Our Products</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              Frozen Corn{" "}
              <span className="text-brand-red">&amp; Retort Corn</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              Our Frozen Corn and Retort Corn are processed with advanced IQF
              and retort technologies, preserving natural taste, quality, and
              shelf stability for global markets.
            </motion.p>
          </motion.div>

          {/* Product image collage */}
          <div className="relative lg:py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* Background glow */}
              <div className="absolute h-64 w-64 rounded-full bg-brand-green/[.08] blur-3xl lg:h-80 lg:w-80" />

              {/* Main product — center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10"
              >
                <div
                  className="animate-float-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  style={{ animationDuration: "8s" }}
                >
                  <Image
                    src="/home/sweet_corn.png"
                    alt="Frozen Corn"
                    width={320}
                    height={320}
                    className="h-44 w-44 object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                    priority
                  />
                </div>
              </motion.div>

              {/* Retort corn — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -top-2 right-4 z-20 sm:right-8 lg:right-4"
              >
                <div
                  className="animate-float rotate-6 drop-shadow-[0_12px_28px_rgba(0,0,0,0.13)]"
                  style={{ animationDuration: "7s", animationDelay: "1s" }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 sm:h-24 sm:w-24">
                    <span className="text-center font-display text-[10px] leading-tight font-black text-brand-red sm:text-xs">
                      RETORT
                      <br />
                      CORN
                    </span>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* IQF badge */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute bottom-0 left-0 flex items-center gap-2.5 rounded-2xl border border-border-soft bg-warm-white p-3 shadow-elevated sm:left-4 sm:p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                <span className="font-display text-xs font-black text-brand-green sm:text-sm">
                  2+
                </span>
              </div>
              <div className="pr-1">
                <p className="text-xs font-bold text-text-dark sm:text-sm">
                  Product Lines
                </p>
                <p className="text-[10px] text-text-muted sm:text-xs">
                  Export Grade
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
