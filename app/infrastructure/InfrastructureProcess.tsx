"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { SectionWhiteGlow } from "@/components/decorative/SectionWhiteGlow";
import { processSteps } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import { Sprout, BarChart3, Settings, Snowflake, Package, Truck } from "lucide-react";

const stepIcons: ReactNode[] = [
  <Sprout key="1" size={18} />,
  <BarChart3 key="2" size={18} />,
  <Settings key="3" size={18} />,
  <Snowflake key="4" size={18} />,
  <Package key="5" size={18} />,
  <Truck key="6" size={18} />,
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function InfrastructureProcess() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      <WaveDivider fill="var(--color-section-green-bg)" />

      <div
        className="relative py-20 lg:py-28 ring-1 ring-inset ring-white/50 shadow-[0_0_200px_rgba(255,255,255,0.58),0_0_100px_rgba(255,255,255,0.4),inset_0_0_180px_rgba(255,255,255,0.28)]"
        style={{ backgroundColor: "var(--color-section-green-bg)" }}
      >
        <SectionWhiteGlow />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-text-dark/20" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-dark/55">
                Our Process
              </span>
              <span className="h-px w-8 bg-text-dark/20" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              From Farm to{" "}
              <span className="text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.9),0_0_48px_rgba(255,255,255,0.5)]">Your Market</span>
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-text-dark/80">
              A streamlined six-step journey ensuring premium quality at every
              stage.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {processSteps.map((step, i) => {
              const isRed = i % 2 !== 0;
              return (
                <motion.div
                  key={step.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    },
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-border-soft bg-warm-white/95 p-5 text-center shadow-card backdrop-blur-sm transition-colors duration-300 hover:border-brand-green/25 hover:shadow-elevated"
                >
                  <div className="relative mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        isRed
                          ? "border border-white/25 bg-white/20 text-white group-hover:bg-white/35 group-hover:text-text-dark"
                          : "bg-brand-green/15 text-brand-green-dark group-hover:bg-brand-green group-hover:text-white"
                      }`}
                    >
                      {stepIcons[i]}
                    </div>
                    <span
                      className={`absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shadow-sm ${
                        isRed
                          ? "bg-white text-text-dark shadow-[0_0_28px_rgba(255,255,255,0.75)]"
                          : "bg-brand-green text-white"
                      }`}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display mb-1 text-xs font-semibold text-text-dark sm:text-sm">
                    {step.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-text-muted sm:text-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
