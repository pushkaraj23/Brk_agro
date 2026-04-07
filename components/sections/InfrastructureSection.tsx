"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { infrastructure } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Snowflake, FlaskConical, ShieldCheck, Thermometer, Package, BarChart3 } from "lucide-react";

const icons: ReactNode[] = [
  <Snowflake key="a" size={24} />,
  <FlaskConical key="b" size={24} />,
  <ShieldCheck key="c" size={24} />,
  <Thermometer key="d" size={24} />,
  <Package key="e" size={24} />,
  <BarChart3 key="f" size={24} />,
];

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-green/40 to-cream" />
      <LeafDecor className="absolute top-16 right-10 h-14 w-9 rotate-[20deg] text-brand-green/8 hidden lg:block" />
      <LeafDecor className="absolute bottom-20 left-12 h-10 w-6 -rotate-[25deg] text-brand-green/6 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Our Infrastructure"
          title="State-of-the-Art Processing"
          subtitle="A world-class facility built for precision, hygiene, and quality."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {infrastructure.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`group rounded-3xl border bg-warm-white p-7 shadow-card transition-all duration-300 hover:shadow-elevated ${i % 2 === 0 ? "border-border-soft hover:border-brand-green/25" : "border-border-soft hover:border-brand-red/25"}`}
            >
              <div className={`relative mb-5 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${i % 2 === 0 ? "from-soft-green to-cream-dark" : "from-soft-red to-cream-dark"}`}>
                <div className="flex h-full items-center justify-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${i % 2 === 0 ? "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:shadow-glow-green" : "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:shadow-glow-red"}`}>
                    {icons[i]}
                  </div>
                </div>
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-text-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
