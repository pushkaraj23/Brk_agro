"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { aboutContent } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Leaf, Palette, Heart, Clock } from "lucide-react";
import type { ReactNode } from "react";

const featureIcons: ReactNode[] = [
  <Leaf key="leaf" size={22} />,
  <Palette key="palette" size={22} />,
  <Heart key="heart" size={22} />,
  <Clock key="clock" size={22} />,
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream" />
      <LeafDecor className="absolute top-16 right-12 h-14 w-9 rotate-[25deg] text-brand-green/8 hidden lg:block" />
      <LeafDecor className="absolute bottom-20 left-8 h-10 w-6 -rotate-[20deg] text-brand-green/6 hidden lg:block" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-br from-soft-green via-brand-green/10 to-soft-amber/30 p-8 shadow-card">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-brand-green/15">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10">
                    <Leaf size={32} className="text-brand-green" />
                  </div>
                  <p className="font-display text-sm font-medium text-brand-green-dark/50">Facility Image</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-4 -bottom-6 rounded-2xl border border-border-soft bg-warm-white p-5 shadow-card sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-green">
                    <span className="font-display text-lg font-bold text-brand-green">IQF</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-dark">Advanced Technology</p>
                    <p className="text-xs text-text-muted">Premium Freezing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div>
            <SectionHeading badge={aboutContent.badge} title={aboutContent.headline} centered={false} />
            <ScrollReveal delay={0.1}>
              <p className="mb-10 text-lg leading-relaxed text-text-muted">{aboutContent.description}</p>
            </ScrollReveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {aboutContent.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className={`group rounded-2xl border bg-warm-white p-5 shadow-soft transition-all duration-300 hover:shadow-card ${i % 2 === 0 ? "border-border-soft hover:border-brand-green/25" : "border-border-soft hover:border-brand-red/25"}`}
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white ${i % 2 === 0 ? "bg-soft-green text-brand-green group-hover:bg-brand-green" : "bg-soft-red text-brand-red group-hover:bg-brand-red"}`}>
                    {featureIcons[i]}
                  </div>
                  <h3 className="font-display mb-1 text-sm font-bold text-text-dark">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
