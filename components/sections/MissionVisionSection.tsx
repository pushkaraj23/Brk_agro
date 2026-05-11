"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { SectionWhiteGlow } from "@/components/decorative/SectionWhiteGlow";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { missionContent } from "@/lib/constants";
import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      <WaveDivider fill="var(--color-section-green-bg)" />

      <div
        className="relative py-20 lg:py-28 ring-1 ring-inset ring-white/50 shadow-[0_0_200px_rgba(255,255,255,0.58),0_0_100px_rgba(255,255,255,0.4),inset_0_0_180px_rgba(255,255,255,0.28)]"
        style={{ backgroundColor: "var(--color-section-green-bg)" }}
      >
        <SectionWhiteGlow />
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/25 blur-[80px]" />
        <SectionLeafAccents />

        <Container className="relative">
          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center lg:mb-16"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-text-dark/20" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-dark/55">
                {missionContent.badge}
              </span>
              <span className="h-px w-8 bg-text-dark/20" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Our Mission <span className="text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.9),0_0_48px_rgba(255,255,255,0.5)]">&amp;</span> Vision
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-text-dark/80">
              Guided by uncompromised quality and consistency — the purpose behind
              our work as a leading processor and exporter of premium quality frozen food
              from India.
            </p>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-5 items-stretch sm:gap-6 lg:grid-cols-2 lg:gap-8"
          >
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 320, damping: 24 },
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-warm-white to-cream-light/90 p-8 shadow-[0_12px_48px_rgba(45,42,30,0.08),0_2px_12px_rgba(45,42,30,0.04)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-brand-green/35 hover:shadow-[0_20px_56px_rgba(103,184,79,0.14),0_8px_24px_rgba(45,42,30,0.06)] lg:p-10"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green/30 opacity-90"
                aria-hidden
              />
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-dark ring-1 ring-brand-green/25 transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-[0_8px_28px_rgba(103,184,79,0.4)] group-hover:ring-brand-green/50">
                <Target size={26} strokeWidth={2.25} aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-xl font-semibold tracking-tight text-text-dark sm:text-2xl">
                {missionContent.mission.title}
              </h3>
              <p className="flex-1 text-[15px] leading-[1.65] text-text-body sm:text-base">
                {missionContent.mission.description}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 320, damping: 24 },
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-warm-white to-cream-light/90 p-8 shadow-[0_12px_48px_rgba(45,42,30,0.08),0_2px_12px_rgba(45,42,30,0.04)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-brand-red/30 hover:shadow-[0_20px_56px_rgba(237,28,36,0.12),0_8px_24px_rgba(45,42,30,0.06)] lg:p-10"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red/30 opacity-90"
                aria-hidden
              />
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red/12 text-brand-red-dark ring-1 ring-brand-red/20 transition-all duration-300 group-hover:bg-brand-red group-hover:text-white group-hover:shadow-[0_8px_28px_rgba(237,28,36,0.35)] group-hover:ring-brand-red/45">
                <Eye size={26} strokeWidth={2.25} aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-xl font-semibold tracking-tight text-text-dark sm:text-2xl">
                {missionContent.vision.title}
              </h3>
              <p className="flex-1 text-[15px] leading-[1.65] text-text-body sm:text-base">
                {missionContent.vision.description}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
