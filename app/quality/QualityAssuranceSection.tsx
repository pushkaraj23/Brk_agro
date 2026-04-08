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
import {
  WaveDivider,
  WaveDividerBottom,
} from "@/components/decorative/WaveDivider";
import { trustPoints } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import {
  Microscope,
  ShieldCheck,
  Thermometer,
  FileCheck,
  Globe,
  ClipboardCheck,
  Check,
} from "lucide-react";

const stats = [
  {
    numericTo: 100,
    suffix: "%",
    label: "Export Grade Quality",
    color: "green" as const,
  },
  {
    numericTo: null,
    staticValue: "24/7",
    label: "Cold Chain Monitoring",
    color: "red" as const,
  },
  {
    numericTo: null,
    staticValue: "ISO",
    label: "Certified Processing",
    color: "green" as const,
  },
  {
    numericTo: 50,
    suffix: "+",
    label: "Global Partners",
    color: "red" as const,
  },
];

const pillars = [
  {
    icon: Microscope,
    title: "Rigorous Lab Testing",
    desc: "Microbiological and physical checks on every batch before release.",
    color: "white" as const,
  },
  {
    icon: ShieldCheck,
    title: "HACCP & Food Safety",
    desc: "Structured hazard analysis and critical control points across the line.",
    color: "red" as const,
  },
  {
    icon: Thermometer,
    title: "Cold Chain Integrity",
    desc: "Unbroken temperature control from IQF through storage and dispatch.",
    color: "white" as const,
  },
  {
    icon: FileCheck,
    title: "Full Traceability",
    desc: "Batch-level tracking from raw material intake to final shipment.",
    color: "red" as const,
  },
  {
    icon: Globe,
    title: "Export Compliance",
    desc: "Documentation and certificates aligned with international buyer needs.",
    color: "white" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Specification Control",
    desc: "Consistent grading, sizing, and quality specs batch after batch.",
    color: "red" as const,
  },
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

function CountUp({
  to,
  suffix = "",
  color,
}: {
  to: number;
  suffix?: string;
  color: "green" | "red";
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
      className={`font-display block text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-7xl ${color === "green" ? "text-brand-green" : "text-brand-red"
        }`}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function QualityAssuranceSection() {
  return (
    <div className="relative overflow-hidden bg-warm-white">
      <WaveDivider fill="var(--color-cream-dark)" />
      <section className="relative overflow-hidden bg-cream-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-brand-green/[.06] blur-[70px]" />

        <Container className="relative bg-cream-dark pb-20 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="mb-7 text-center lg:mb-8"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-green/35" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-text-muted">
                Quality Assurance
              </span>
              <span className="h-px w-10 bg-brand-red/35" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.75rem]">
              Measured. Monitored.{" "}
              <span className="text-brand-green">Certified.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
              Key metrics that reflect our commitment to export-grade frozen
              produce — from farm standards to your market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((stat, i) => {
              const isGreen = stat.color === "green";
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className={`flex flex-col items-center gap-3 text-center lg:px-6 ${i < 3 ? "lg:border-r lg:border-border/50" : ""
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
                      className={`font-display block text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-7xl ${isGreen ? "text-brand-green" : "text-brand-red"
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
                      delay: i * 0.08 + 0.25,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    style={{ originX: 0.5 }}
                    className={`h-px w-12 ${isGreen ? "bg-brand-green/40" : "bg-brand-red/40"
                      }`}
                  />
                  <p className="text-sm font-medium text-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>

        {/* ── Block 2: Forest panel — glass pillars (home WhyBrkBrief rhythm) ── */}
        <WaveDivider fill="#2A4E1E" />

        <div
          className="relative pt-12 pb-5 lg:pt-14 lg:pb-6"
          style={{ backgroundColor: "#2A4E1E" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-green/25 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-black/25 blur-[90px]" />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="mb-8 text-center lg:mb-9"
            >
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-white/30" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                  Our Framework
                </span>
                <span className="h-px w-8 bg-white/30" />
              </div>
              <h2 className="font-display mb-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Assurance at{" "}
                <span className="text-brand-red">Every Stage</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60">
                Six pillars that underpin how we protect product integrity from
                intake to export documentation.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
            >
              {pillars.map((p) => {
                const Icon = p.icon;
                const isRed = p.color === "red";
                return (
                  <motion.div
                    key={p.title}
                    variants={cardVariants}
                    whileHover={{
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      },
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[.10] lg:p-6"
                  >
                    <div
                      className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isRed
                        ? "bg-brand-red/25 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                        : "bg-white/10 text-white/75 group-hover:bg-white/20 group-hover:text-white"
                        }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display mb-1 text-sm font-bold text-white lg:text-base">
                        {p.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Commitment checklist — uses global trustPoints copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-6 lg:p-7"
            >
              <p className="font-display mb-4 text-center text-lg font-bold text-white sm:text-xl">
                What buyers can rely on
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[.04] px-3.5 py-2.5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/22 text-brand-green ring-1 ring-brand-green/25">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-snug text-white/80">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </div>

        {/* ── Wave to cream-dark — sits tight above CTASection ── */}
        <WaveDividerBottom fill="#2A4E1E" />
      </section>
    </div>
  );
}
