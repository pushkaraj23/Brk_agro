"use client";

import { motion } from "framer-motion";
import { trustStats, trustPoints } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Check } from "lucide-react";

export function TrustConsistencyContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative mx-auto mb-14 max-w-3xl text-center"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-green/[0.09] via-transparent to-brand-red/[0.08] blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft/90 bg-warm-white/90 px-4 py-2 shadow-soft ring-1 ring-black/[0.03] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_12px_rgba(103,184,79,0.7)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-text-muted">
              Quality Assurance
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_12px_rgba(237,28,36,0.45)]" />
          </div>

          <h2 className="font-display text-[1.65rem] font-black leading-[1.12] tracking-tight text-text-dark sm:text-4xl lg:text-[2.65rem]">
            Built on{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-brand-green to-brand-green-dark bg-clip-text text-transparent">
                Trust
              </span>
            </span>{" "}
            <span className="text-text-dark/90">&amp;</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-brand-red to-brand-red-dark bg-clip-text text-transparent">
                Consistency
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-text-muted sm:text-base">
            Every process, every batch — engineered for international quality
            standards.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
      >
        {trustStats.map((stat, i) => {
          const isGreen = i % 2 === 0;
          return (
            <motion.div key={stat.label} variants={fadeUp} className="group relative">
              <div
                className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b from-warm-white via-warm-white to-cream-light/35 p-5 text-center shadow-[0_10px_40px_rgba(45,42,30,0.06)] ring-1 ring-black/[0.03] transition-all duration-500 sm:rounded-3xl sm:p-6 ${
                  isGreen
                    ? "border-border-soft/80 hover:border-brand-green/40 hover:shadow-[0_22px_50px_rgba(103,184,79,0.14)]"
                    : "border-border-soft/80 hover:border-brand-red/35 hover:shadow-[0_22px_50px_rgba(237,28,36,0.11)]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${
                    isGreen
                      ? "from-brand-green via-brand-green/70 to-brand-green/15"
                      : "from-brand-red via-brand-red/70 to-brand-red/15"
                  }`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isGreen ? "bg-brand-green/25" : "bg-brand-red/20"
                  }`}
                  aria-hidden
                />

                <div
                  className={`font-display mb-2 bg-clip-text tabular-nums text-[2rem] font-black tracking-tight text-transparent sm:text-4xl lg:text-[2.75rem] ${
                    isGreen
                      ? "bg-gradient-to-br from-brand-green-dark to-brand-green"
                      : "bg-gradient-to-br from-brand-red-dark to-brand-red"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted sm:text-xs">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto max-w-4xl"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-green/25 via-border-soft to-brand-red/25 md:block"
          aria-hidden
        />

        <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
          {trustPoints.map((point, i) => {
            const isGreen = i % 2 === 0;
            return (
              <motion.div
                key={point}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className={`group relative flex gap-4 overflow-hidden rounded-2xl border border-border-soft/70 bg-gradient-to-br from-warm-white via-warm-white to-cream-light/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_6px_24px_rgba(45,42,30,0.05)] transition-shadow duration-300 sm:p-5 ${
                  isGreen
                    ? "hover:border-brand-green/35 hover:shadow-[0_16px_40px_rgba(103,184,79,0.1)]"
                    : "hover:border-brand-red/30 hover:shadow-[0_16px_40px_rgba(237,28,36,0.08)]"
                }`}
              >
                <div
                  className={`absolute inset-y-3 left-0 w-1 rounded-full ${
                    isGreen
                      ? "bg-gradient-to-b from-brand-green to-brand-green-dark"
                      : "bg-gradient-to-b from-brand-red to-brand-red-dark"
                  }`}
                  aria-hidden
                />
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-inner ${
                    isGreen
                      ? "bg-gradient-to-br from-soft-green to-brand-green/20 ring-1 ring-brand-green/25"
                      : "bg-gradient-to-br from-soft-red to-brand-red/15 ring-1 ring-brand-red/20"
                  }`}
                >
                  <Check
                    strokeWidth={2.75}
                    className={`h-5 w-5 ${isGreen ? "text-brand-green-dark" : "text-brand-red"}`}
                  />
                </div>
                <p className="min-w-0 pt-0.5 text-sm font-medium leading-snug text-text-dark sm:text-[15px]">
                  {point}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
