"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { trustStats, trustPoints } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

export function InfrastructureAssurance() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#2A4E1E" }}>
      <WaveDivider fill="var(--color-cream-dark)" />

      <div className="relative bg-cream-dark py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-red/[.03] blur-[60px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border/50" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Quality Assurance
              </span>
              <span className="h-px w-8 bg-border/50" />
            </div>

            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Built on{" "}
              <span className="text-brand-green">Trust</span> &amp;{" "}
              <span className="text-brand-red">Consistency</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
              Every process, every batch — engineered for international quality
              standards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px rgba(120,100,50,0.13)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-border-soft bg-warm-white p-6 text-center shadow-card"
              >
                <div
                  className={`font-display mb-1 text-3xl font-bold sm:text-4xl ${
                    i % 2 === 0 ? "text-brand-green" : "text-brand-red"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto max-w-3xl"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-border-soft bg-warm-white p-4 shadow-soft transition-all duration-300 hover:shadow-card"
                >
                  <CheckCircle
                    size={18}
                    className={`mt-0.5 flex-shrink-0 ${
                      i % 2 === 0 ? "text-brand-green" : "text-brand-red"
                    }`}
                  />
                  <span className="text-sm font-medium text-text-dark">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
