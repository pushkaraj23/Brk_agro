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

            <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
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
            className="grid gap-4 lg:grid-cols-2 lg:gap-6"
          >
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              className="group rounded-3xl border border-border-soft bg-warm-white/95 p-8 shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-brand-green/30 hover:shadow-elevated lg:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-glow-green">
                <Target size={26} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-text-dark">
                {missionContent.mission.title}
              </h3>
              <p className="text-base leading-relaxed text-text-muted">
                {missionContent.mission.description}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              className="group rounded-3xl border border-border-soft bg-warm-white/95 p-8 shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-brand-green/30 hover:shadow-elevated lg:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/45 bg-white/30 text-white shadow-[0_0_32px_rgba(255,255,255,0.55)] transition-all duration-300 group-hover:bg-white group-hover:text-brand-green-dark group-hover:shadow-[0_0_48px_rgba(255,255,255,0.75)]">
                <Eye size={26} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-text-dark">
                {missionContent.vision.title}
              </h3>
              <p className="text-base leading-relaxed text-text-muted">
                {missionContent.vision.description}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
