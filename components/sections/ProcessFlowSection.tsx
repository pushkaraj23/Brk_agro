"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { processSteps } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Sprout, BarChart3, Settings, Snowflake, Package, Truck } from "lucide-react";

const stepIcons: ReactNode[] = [
  <Sprout key="1" size={24} />,
  <BarChart3 key="2" size={24} />,
  <Settings key="3" size={24} />,
  <Snowflake key="4" size={24} />,
  <Package key="5" size={24} />,
  <Truck key="6" size={24} />,
];

export function ProcessFlowSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-amber/30 to-cream" />
      <SectionLeafAccents />

      <Container className="relative">
        <SectionHeading
          badge="Our Process"
          title="From Farm to Your Market"
          subtitle="A streamlined six-step journey ensuring premium quality at every stage."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Desktop connector */}
          <div className="absolute top-12 right-0 left-0 hidden h-[2px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-warm-white shadow-card transition-all duration-300 group-hover:text-white ${i % 2 === 0 ? "border-brand-green/20 text-brand-green group-hover:border-brand-green group-hover:bg-brand-green group-hover:shadow-glow-green" : "border-brand-red/20 text-brand-red group-hover:border-brand-red group-hover:bg-brand-red group-hover:shadow-glow-red"}`}>
                    {stepIcons[i]}
                  </div>
                  <span className={`absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm ${i % 2 === 0 ? "bg-brand-green" : "bg-brand-red"}`}>
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display mb-1 text-sm font-bold text-text-dark">{step.title}</h3>
                <p className="text-xs leading-relaxed text-text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
