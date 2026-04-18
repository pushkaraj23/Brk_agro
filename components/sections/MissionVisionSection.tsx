"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { missionContent } from "@/lib/constants";
import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      <WaveDivider fill="#2A4E1E" />

      <div
        className="relative py-20 lg:py-28"
        style={{ backgroundColor: "#2A4E1E" }}
      >
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
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-black/20 blur-[80px]" />
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
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                {missionContent.badge}
              </span>
              <span className="h-px w-8 bg-white/30" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              Our Mission <span className="text-brand-red">&amp;</span> Vision
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60">
              The purpose and aspiration that drives everything we do at BRK
              Agro.
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
              className="group rounded-3xl border border-white/10 bg-white/[.06] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[.10] lg:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-glow-green">
                <Target size={26} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-white">
                {missionContent.mission.title}
              </h3>
              <p className="text-base leading-relaxed text-white/60">
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
              className="group rounded-3xl border border-white/10 bg-white/[.06] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[.10] lg:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/25 text-brand-red transition-all duration-300 group-hover:bg-brand-red group-hover:text-white group-hover:shadow-glow-red">
                <Eye size={26} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-white">
                {missionContent.vision.title}
              </h3>
              <p className="text-base leading-relaxed text-white/60">
                {missionContent.vision.description}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
