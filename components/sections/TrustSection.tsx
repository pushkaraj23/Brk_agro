"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { trustStats, trustPoints } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-green/30 to-cream" />
      <LeafDecor className="absolute top-16 right-12 h-12 w-8 rotate-[25deg] text-brand-green/8 hidden lg:block" />
      <LeafDecor className="absolute bottom-20 left-10 h-10 w-6 -rotate-[20deg] text-brand-red/6 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Quality Assurance"
          title="Built on Trust & Consistency"
          subtitle="Every process, every batch — engineered for international quality standards."
        />

        {/* Stats — alternating green / red value colors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(120,100,50,0.13)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-border-soft bg-warm-white p-6 text-center shadow-card"
            >
              <div className={`font-display mb-1 text-3xl font-bold sm:text-4xl ${i % 2 === 0 ? "text-brand-green" : "text-brand-red"}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust points — alternating check icon colors */}
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
                  className={`mt-0.5 flex-shrink-0 ${i % 2 === 0 ? "text-brand-green" : "text-brand-red"}`}
                />
                <span className="text-sm font-medium text-text-dark">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
