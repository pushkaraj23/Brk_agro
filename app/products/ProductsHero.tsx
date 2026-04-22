"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { ChevronRight, Sparkles } from "lucide-react";

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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
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
              Frozen &amp; Processed{" "}
              <span className="text-brand-red">Product Range</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              Explore our export-focused range including IQF vegetables and
              processed formats, packed for dependable performance across retail
              and foodservice channels.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-7 grid max-w-xl grid-cols-3 gap-3"
            >
              <div className="rounded-xl border border-brand-green/20 bg-brand-green/[.06] px-3 py-3 text-center">
                <p className="font-display text-xl font-black text-brand-green-dark">9</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Products</p>
              </div>
              <div className="rounded-xl border border-brand-red/20 bg-brand-red/[.05] px-3 py-3 text-center">
                <p className="font-display text-xl font-black text-brand-red">IQF</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Tech Process</p>
              </div>
              <div className="rounded-xl border border-border-soft bg-cream/50 px-3 py-3 text-center">
                <p className="font-display text-xl font-black text-text-dark">Global</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Export Ready</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Product image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden rounded-3xl border border-border-soft/80 bg-warm-white shadow-elevated"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/photos/Frozen mixed vegetables in packaging display.png"
                  alt="BRK Agro product range display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-4 top-4 rounded-xl border border-white/25 bg-black/30 px-3 py-2 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-1.5 text-white/90">
                    <Sparkles size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Curated Range</span>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
                <div className="flex items-center gap-2 rounded-xl border border-border-soft bg-cream/60 px-3 py-2.5">
                  <Image
                    src="/products/sweet_corn.png"
                    alt="Sweet corn"
                    width={38}
                    height={38}
                    className="h-9 w-9 object-contain"
                  />
                  <p className="text-xs font-semibold text-text-dark">Sweet Corn</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border-soft bg-cream/60 px-3 py-2.5">
                  <Image
                    src="/products/mixed_veggies.png"
                    alt="Mixed vegetables"
                    width={38}
                    height={38}
                    className="h-9 w-9 object-contain"
                  />
                  <p className="text-xs font-semibold text-text-dark">Mixed Veg</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border-soft bg-cream/60 px-3 py-2.5">
                  <Image
                    src="/products/green_peas.png"
                    alt="Green peas"
                    width={38}
                    height={38}
                    className="h-9 w-9 object-contain"
                  />
                  <p className="text-xs font-semibold text-text-dark">Green Peas</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
