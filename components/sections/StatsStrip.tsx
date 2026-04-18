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

const stats = [
  { numericTo: 100, suffix: "%",  label: "Export Grade Quality",  color: "green" },
  { numericTo: null, staticValue: "24/7", label: "Cold Chain Monitoring", color: "red"   },
  { numericTo: null, staticValue: "ISO",  label: "Certified Processing",  color: "green" },
  { numericTo: 50,  suffix: "+",  label: "Global Partners",        color: "red"   },
];

/* ── Counting number ── */
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
    const ctrl = animate(count, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
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

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-cream">

      {/* Wave in — cream → cream-dark */}
      <WaveDivider fill="var(--color-cream-dark)" />

      <div className="relative bg-cream-dark">

        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <SectionLeafAccents />

      <Container className="relative py-12 lg:py-16">

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-0">
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
                {/* Number */}
                {stat.numericTo !== null ? (
                  <CountUp to={stat.numericTo} suffix={stat.suffix} color={stat.color} />
                ) : (
                  <span
                    className={`font-display block text-5xl font-black leading-none tracking-tighter sm:text-6xl lg:text-7xl ${
                      isGreen ? "text-brand-green" : "text-brand-red"
                    }`}
                  >
                    {stat.staticValue}
                  </span>
                )}

                {/* Thin divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className={`h-px w-12 ${isGreen ? "bg-brand-green/40" : "bg-brand-red/40"}`}
                />

                {/* Label */}
                <p className="text-sm font-medium text-text-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
      </div>
    </section>
  );
}
