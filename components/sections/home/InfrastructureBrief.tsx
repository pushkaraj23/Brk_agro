"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { SectionWhiteGlow } from "@/components/decorative/SectionWhiteGlow";
import { staggerContainer } from "@/lib/animations";
import { Snowflake, ShieldCheck, Thermometer, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Snowflake,
    title: "JBT's Advance Technology Latest IQF",
    desc: "IQF freezes each piece separately for free-flowing, premium-quality output.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Processing Facility",
    desc: "Controlled-access clean rooms with strict sanitization at every stage.",
    color: "red",
  },
  {
    icon: Thermometer,
    title: "Temperature Controlled Storage",
    desc: "Large-capacity cold storage ensuring quality from processing to dispatch.",
    color: "green",
  },
];

const capabilities = [
  { value: "6+", label: "Product Lines" },
  { value: "IQF", label: "JBT Technology" },
  { value: "ISO", label: "Certified Facility" },
];

export function InfrastructureBrief() {
  return (
    <section
      className="relative overflow-hidden ring-1 ring-inset ring-white/45 shadow-[0_0_160px_rgba(255,255,255,0.48),0_0_80px_rgba(255,255,255,0.3)]"
      style={{ backgroundColor: "var(--color-section-green-bg)" }}
    >
      <SectionWhiteGlow />
      <WaveDivider fill="var(--color-cream-dark)" />

      <div className="relative bg-cream-dark py-20 lg:py-24">
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-red/[.03] blur-[60px]" />
        <SectionLeafAccents />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">

            {/* ════════════════════════
                LEFT — numbered list
            ════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                  Infrastructure
                </span>
                <span className="h-px w-8 bg-brand-green/40" />
              </div>

              <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.4rem]">
                World-Class{" "}
                <span className="text-brand-green">Processing</span>{" "}
                Capabilities
              </h2>

              <p className="mb-8 max-w-xl text-sm leading-relaxed text-text-muted lg:text-base">
                BRK Agro is a leading processor and exporter of premium quality frozen food
                from India — backed by disciplined infrastructure and export-ready
                capacity.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex flex-col"
              >
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  const isGreen = h.color === "green";
                  return (
                    <motion.div
                      key={h.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`group flex items-start gap-4 py-5 ${i < highlights.length - 1 ? "border-b border-border/50" : ""}`}
                    >
                      <div className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isGreen
                          ? "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:shadow-glow-green"
                          : "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:shadow-glow-red"
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display mb-1 text-sm font-bold text-text-dark lg:text-base">{h.title}</h3>
                        <p className="text-sm leading-relaxed text-text-muted">{h.desc}</p>
                      </div>
                      <span className={`hidden font-display text-xs font-black opacity-15 group-hover:opacity-50 transition-opacity sm:block ${isGreen ? "text-brand-green" : "text-brand-red"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <Button href="/infrastructure" iconRight={<ArrowRight size={16} />}>
                  Explore Infrastructure
                </Button>
              </motion.div>
            </motion.div>

            {/* ════════════════════════
                RIGHT — capability card
            ════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-white/45 bg-[var(--color-section-green-bg)] p-8 shadow-[0_0_160px_rgba(255,255,255,0.52),0_0_80px_rgba(255,255,255,0.35),inset_0_0_140px_rgba(255,255,255,0.24)] ring-1 ring-inset ring-white/50 lg:p-10"
              >
                <SectionWhiteGlow />
                <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-brand-green-light/25 to-brand-green/40" />
                {/* Inner texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-brand-green/30 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/30 blur-2xl" />

                {/* Large display text */}
                <div className="relative mb-8">
                  <p className="font-display text-[5rem] font-black leading-none tracking-tighter text-text-dark/10 lg:text-[7rem]">
                    IQF
                  </p>
                  <div className="-mt-6 lg:-mt-8">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-text-dark/50">
                      JBT Advanced Technology
                    </p>
                  </div>
                </div>

                {/* Capability stats */}
                <div className="relative grid grid-cols-3 gap-3 mb-8">
                  {capabilities.map((cap, i) => (
                    <div
                      key={cap.label}
                      className={`rounded-2xl border p-4 text-center ${
                        i === 1
                          ? "border-white/35 bg-white/15"
                          : "border-border-soft bg-warm-white/90"
                      }`}
                    >
                      <p className={`font-display text-2xl font-black leading-none lg:text-3xl ${
                        i === 1 ? "text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.85),0_0_36px_rgba(255,255,255,0.4)]" : "text-text-dark"
                      }`}>
                        {cap.value}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-text-muted">
                        {cap.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Export ready badge */}
                <div className="relative inline-flex items-center gap-2 rounded-full border border-brand-green-dark/25 bg-warm-white/90 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-soft" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                    Export-Ready Facility
                  </span>
                </div>
              </div>

              {/* Accent dot */}
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-white/65 ring-4 ring-white/45 shadow-[0_0_28px_rgba(255,255,255,0.85)]" />
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
}
