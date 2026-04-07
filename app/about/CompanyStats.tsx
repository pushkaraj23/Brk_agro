"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "7", label: "Product Lines" },
  { value: "50+", label: "Global Partners" },
  { value: "ISO", label: "Certified Facility" },
];

const values = [
  {
    title: "Quality First",
    description: "Every batch undergoes rigorous quality checks to ensure consistency and excellence across our entire product range.",
  },
  {
    title: "Innovation Driven",
    description: "We invest in the latest processing technology and continually refine our methods to stay at the industry forefront.",
  },
  {
    title: "Sustainable Practices",
    description: "Committed to responsible sourcing and efficient resource utilization that benefits our farming partners and the environment.",
  },
  {
    title: "Partnership Focused",
    description: "We build long-term relationships with buyers and distributors, offering flexible solutions tailored to each market.",
  },
];

export function CompanyStats() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-green/30 to-cream" />
      <LeafDecor className="absolute top-16 right-14 h-12 w-8 rotate-[20deg] text-brand-green/7 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Company at a Glance"
          title="Numbers That Speak"
          subtitle="A snapshot of BRK Agro's capabilities and reach in the frozen food industry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(120,100,50,0.13)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-border-soft bg-warm-white p-6 text-center shadow-card"
            >
              <div className={`font-display mb-1 text-3xl font-bold sm:text-4xl ${i % 2 === 0 ? "text-brand-green" : "text-brand-red"}`}>
                {s.value}
              </div>
              <div className="text-sm font-medium text-text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <SectionHeading
          badge="Our Values"
          title="What Drives Us"
          subtitle="The principles that guide every decision we make."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className={`group flex gap-4 rounded-3xl border bg-warm-white p-6 shadow-card transition-all duration-300 hover:shadow-elevated ${values.indexOf(v) % 2 === 0 ? "border-border-soft" : "border-border-soft"}`}
            >
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white ${values.indexOf(v) % 2 === 0 ? "bg-soft-green text-brand-green group-hover:bg-brand-green" : "bg-soft-red text-brand-red group-hover:bg-brand-red"}`}>
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="font-display mb-1 text-base font-bold text-text-dark">{v.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
