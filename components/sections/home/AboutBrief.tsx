"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Leaf, Palette, Heart, Clock, ArrowRight } from "lucide-react";

const features = [
  { icon: Leaf,    label: "Natural Taste",      color: "green" },
  { icon: Palette, label: "Fresh Color",         color: "red"   },
  { icon: Heart,   label: "Full Nutrition",       color: "green" },
  { icon: Clock,   label: "Long Shelf Life",      color: "red"   },
];

export function AboutBrief() {
  return (
    <section className="relative overflow-hidden bg-cream-dark">
      <WaveDivider fill="var(--color-cream)" />

      <div className="relative bg-cream py-20 lg:py-28">
      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft background blobs */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-brand-green/[.04] blur-[80px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* ════════════════════════
              LEFT — Image
          ════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated sm:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1661319615776-946158744a29?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="BRK Agro processing facility"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Bottom label inside image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-soft" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Farm-to-Freeze Processing
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-4 -bottom-6 flex items-center gap-3 rounded-2xl border border-border-soft bg-warm-white p-4 shadow-elevated sm:-right-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                <span className="font-display text-sm font-black text-brand-green">IQF</span>
              </div>
              <div className="pr-1">
                <p className="text-sm font-bold text-text-dark">Advanced Freezing</p>
                <p className="text-xs text-text-muted">JBT Technology</p>
              </div>
            </motion.div>

            {/* Small accent dot — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-brand-red/20 ring-4 ring-brand-red/8"
            />
          </motion.div>

          {/* ════════════════════════
              RIGHT — Content
          ════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >

            {/* Editorial label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                About BRK Agro
              </span>
              <span className="h-px w-8 bg-brand-green" />
            </div>

            {/* Headline */}
            <h2 className="font-display mb-5 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Leading Processor{" "}
              <span className="text-brand-green">&amp; Exporter</span>{" "}
              of Premium Frozen Produce
            </h2>

            {/* Short description — one paragraph, trimmed */}
            <p className="mb-8 text-base leading-relaxed text-text-muted lg:text-lg">
              From trusted Indian farms to global markets — we process fresh produce with advanced IQF technology, locking in taste, color, and nutrition at peak freshness.
            </p>

            {/* Feature chips */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="mb-10 grid grid-cols-2 gap-2.5"
            >
              {features.map((f) => {
                const Icon = f.icon;
                const isGreen = f.color === "green";
                return (
                  <motion.div
                    key={f.label}
                    variants={fadeUp}
                    className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 transition-colors duration-200 ${
                      isGreen
                        ? "border-brand-green/15 bg-brand-green/[.06] hover:bg-brand-green/[.11]"
                        : "border-brand-red/12 bg-brand-red/[.05] hover:bg-brand-red/[.09]"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={isGreen ? "text-brand-green" : "text-brand-red"}
                    />
                    <span className="text-sm font-semibold text-text-dark">{f.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <Button href="/about" iconRight={<ArrowRight size={16} />} className="w-fit">
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </Container>
      </div>
    </section>
  );
}
