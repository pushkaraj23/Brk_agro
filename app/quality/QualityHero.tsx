"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight, ShieldCheck, Award } from "lucide-react";

export function QualityHero() {
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
              <span className="font-medium text-text-dark">Quality</span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge variant="green">Quality &amp; Standards</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              Your Trusted Partner in{" "}
              <span className="text-brand-red">Frozen Produce</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              From trusted farm sourcing to reliable global delivery —
              certifications, traceability, and consistent standards in every
              batch.
            </motion.p>
          </motion.div>

          <div className="relative lg:py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-64 w-64 rounded-full bg-brand-green/[.08] blur-3xl lg:h-72 lg:w-72" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="relative z-10"
              >
                <div
                  className="animate-float-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  style={{ animationDuration: "8s" }}
                >
                  <Image
                    src="/home/mixed_veggies.png"
                    alt="Premium frozen vegetables"
                    width={320}
                    height={320}
                    className="h-44 w-44 object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.65,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="absolute top-2 right-4 z-20 sm:right-8"
              >
                <div
                  className="animate-float rotate-6 drop-shadow-[0_12px_28px_rgba(0,0,0,0.13)]"
                  style={{ animationDuration: "7s", animationDelay: "0.5s" }}
                >
                  <Image
                    src="/home/green_peas.png"
                    alt="Green peas"
                    width={120}
                    height={120}
                    className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.75,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="absolute bottom-2 left-2 z-20 sm:left-6"
              >
                <div
                  className="animate-float-delayed -rotate-6 drop-shadow-[0_12px_28px_rgba(0,0,0,0.13)]"
                  style={{ animationDuration: "8.5s", animationDelay: "0.3s" }}
                >
                  <Image
                    src="/home/sweet_corn.png"
                    alt="Sweet corn"
                    width={120}
                    height={120}
                    className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.85,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="absolute -bottom-4 right-0 flex items-center gap-3 rounded-2xl border border-border-soft bg-warm-white p-3 shadow-elevated sm:right-4 sm:p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                <ShieldCheck className="h-5 w-5 text-brand-green" />
              </div>
              <div className="pr-1">
                <p className="text-xs font-bold text-text-dark sm:text-sm">
                  Export Grade
                </p>
                <p className="text-[10px] text-text-muted sm:text-xs">
                  Certified Facility
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.95,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="absolute top-8 left-0 z-30 flex items-center gap-2 rounded-xl border border-brand-red/15 bg-warm-white/95 px-3 py-2 shadow-card backdrop-blur-sm sm:left-2"
            >
              <Award className="h-4 w-4 text-brand-red sm:h-5 sm:w-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-dark sm:text-xs">
                IQF Excellence
              </span>
            </motion.div>

            <div className="absolute -top-1 right-1/4 h-4 w-4 rounded-full bg-brand-green/20 ring-4 ring-brand-green/8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
