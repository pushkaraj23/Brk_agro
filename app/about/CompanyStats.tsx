"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const stats = [
  { numericTo: 10, suffix: "+", label: "Years of Experience", color: "green" },
  { numericTo: 7, suffix: "", label: "Product Lines", color: "red" },
  { numericTo: 50, suffix: "+", label: "Global Partners", color: "green" },
  {
    numericTo: null,
    staticValue: "ISO",
    label: "Certified Facility",
    color: "red",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every batch undergoes rigorous quality checks to ensure consistency and excellence across our entire product range.",
    color: "green",
  },
  {
    title: "Innovation Driven",
    description:
      "We invest in the latest processing technology and continually refine our methods to stay at the industry forefront.",
    color: "red",
  },
  {
    title: "Sustainable Practices",
    description:
      "Committed to responsible sourcing and efficient resource utilization that benefits our farming partners and the environment.",
    color: "green",
  },
  {
    title: "Partnership Focused",
    description:
      "We build long-term relationships with buyers and distributors, offering flexible solutions tailored to each market.",
    color: "red",
  },
];

function CountUp({
  to,
  suffix = "",
  color,
}: {
  to: number;
  suffix?: string;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return ctrl.stop;
  }, [inView, count, to]);

  return (
    <span
      ref={ref}
      className={`font-display block text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-7xl ${
        color === "green" ? "text-brand-green" : "text-brand-red"
      }`}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function CompanyStats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2A4E1E" }}
    >
      <WaveDivider fill="var(--color-cream-dark)" />

      <div className="relative bg-cream-dark py-20 lg:py-28">
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-red/[.03] blur-[60px]" />
        <SectionLeafAccents />

        <Container className="relative">
          {/* ── Stats heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border/50" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Company at a Glance
              </span>
              <span className="h-px w-8 bg-border/50" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Numbers That <span className="text-brand-green">Speak</span>
            </h2>
          </motion.div>

          {/* ── Stats strip ── */}
          <div className="mb-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((stat, i) => {
              const isGreen = stat.color === "green";
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`flex flex-col items-center gap-3 text-center lg:px-8 ${
                    i < 3 ? "lg:border-r lg:border-border/50" : ""
                  }`}
                >
                  {stat.numericTo !== null ? (
                    <CountUp
                      to={stat.numericTo}
                      suffix={stat.suffix}
                      color={stat.color}
                    />
                  ) : (
                    <span
                      className={`font-display block text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-7xl ${
                        isGreen ? "text-brand-green" : "text-brand-red"
                      }`}
                    >
                      {stat.staticValue}
                    </span>
                  )}

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + 0.3,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{ originX: 0 }}
                    className={`h-px w-12 ${
                      isGreen ? "bg-brand-green/40" : "bg-brand-red/40"
                    }`}
                  />
                  <p className="text-sm font-medium text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Values heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border/50" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Our Values
              </span>
              <span className="h-px w-8 bg-border/50" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl">
              What <span className="text-brand-red">Drives</span> Us
            </h2>
          </motion.div>

          {/* ── Values cards ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-3 sm:grid-cols-2 sm:gap-4"
          >
            {values.map((v) => {
              const isGreen = v.color === "green";
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    },
                  }}
                  className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:shadow-card ${
                    isGreen
                      ? "border-brand-green/15 bg-brand-green/[.04] hover:bg-brand-green/[.08]"
                      : "border-brand-red/12 bg-brand-red/[.04] hover:bg-brand-red/[.08]"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isGreen
                        ? "bg-brand-green/15 text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:shadow-glow-green"
                        : "bg-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:shadow-glow-red"
                    }`}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-display mb-1 text-sm font-bold text-text-dark lg:text-base">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
