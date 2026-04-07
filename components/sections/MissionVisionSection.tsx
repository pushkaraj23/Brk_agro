"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { missionContent } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-amber/30 to-cream" />
      <LeafDecor className="absolute top-16 left-8 h-12 w-8 -rotate-[20deg] text-brand-green/7 hidden lg:block" />
      <LeafDecor className="absolute bottom-16 right-12 h-10 w-6 rotate-[25deg] text-brand-red/8 hidden lg:block" />

      <Container className="relative">
        <SectionHeading badge={missionContent.badge} title="Our Mission & Vision" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-green/15 bg-gradient-to-br from-soft-green via-warm-white to-soft-green p-8 shadow-card md:p-10"
          >
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-brand-green/5 blur-2xl" />
            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Target size={28} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-text-dark">
                {missionContent.mission.title}
              </h3>
              <p className="text-base leading-relaxed text-text-muted">
                {missionContent.mission.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-red/15 bg-gradient-to-br from-soft-red via-warm-white to-soft-red p-8 shadow-card md:p-10"
          >
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-brand-red/5 blur-2xl" />
            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                <Eye size={28} />
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold text-text-dark">
                {missionContent.vision.title}
              </h3>
              <p className="text-base leading-relaxed text-text-muted">
                {missionContent.vision.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
