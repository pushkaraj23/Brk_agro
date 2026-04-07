"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { whyBrkFeatures } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Sprout, Snowflake, ShieldCheck, Package, BarChart3, Award } from "lucide-react";

const icons: ReactNode[] = [
  <Sprout key="a" size={24} />,
  <Snowflake key="b" size={24} />,
  <ShieldCheck key="c" size={24} />,
  <Package key="d" size={24} />,
  <BarChart3 key="e" size={24} />,
  <Award key="f" size={24} />,
];

export function WhyBrkSection() {
  return (
    <section id="why-brk" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream" />
      <LeafDecor className="absolute top-20 right-14 h-14 w-9 rotate-[22deg] text-brand-green/8 hidden lg:block" />
      <LeafDecor className="absolute bottom-16 left-10 h-10 w-6 -rotate-[18deg] text-brand-green/6 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Partner with BRK Agro"
          subtitle="Backed by modern infrastructure, strict quality standards, and a farm-to-export supply chain you can rely on."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyBrkFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`group rounded-3xl border bg-warm-white p-7 shadow-card transition-all duration-300 hover:shadow-elevated ${i % 2 === 0 ? "border-border-soft hover:border-brand-green/25" : "border-border-soft hover:border-brand-red/25"}`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${i % 2 === 0 ? "bg-soft-green text-brand-green group-hover:bg-brand-green group-hover:shadow-glow-green" : "bg-soft-red text-brand-red group-hover:bg-brand-red group-hover:shadow-glow-red"}`}>
                {icons[i]}
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-text-dark">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
