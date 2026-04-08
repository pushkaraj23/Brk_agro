"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { infrastructure } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  Snowflake,
  FlaskConical,
  ShieldCheck,
  Thermometer,
  Package,
  BarChart3,
} from "lucide-react";

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
    <section id="infrastructure" className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[.04] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-brand-green/40" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Our Infrastructure
              </span>
              <span className="h-px w-8 bg-brand-green/40" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              State-of-the-Art{" "}
              <span className="text-brand-green">Processing</span>
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-text-muted">
              A world-class facility built for precision, hygiene, and quality.
            </p>
          </motion.div>

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
                <div
                  className={`relative mb-5 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${i % 2 === 0 ? "from-soft-green to-cream-dark" : "from-soft-red to-cream-dark"}`}
                >
                  <div className="flex h-full items-center justify-center">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${i % 2 === 0 ? "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:shadow-glow-green" : "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:shadow-glow-red"}`}
                    >
                      {icons[i]}
                    </div>
                  </div>
                </div>
                <h3 className="font-display mb-2 text-lg font-bold text-text-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
