"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { whyBrkFeatures } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  Sprout,
  Snowflake,
  ShieldCheck,
  Package,
  BarChart3,
  Award,
} from "lucide-react";

const icons: ReactNode[] = [
  <Sprout key="a" size={24} />,
  <Snowflake key="b" size={24} />,
  <ShieldCheck key="c" size={24} />,
  <Package key="d" size={24} />,
  <BarChart3 key="e" size={24} />,
  <Award key="f" size={24} />,
];

const featureImages = [
  "/photos/Fresh frozen vegetables processing area.png",
  "/photos/Industrial food processing in action.png",
  "/photos/Food processing in a clean factory setting.png",
  "/photos/Modern food packaging in action.png",
  "/photos/Modern food processing facility inspection.png",
  "/photos/Warehouse worker managing boxed cargo.png",
] as const;

export function WhyBrkSection() {
  return (
    <section id="why-brk" className="relative overflow-hidden bg-cream">
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
        <SectionLeafAccents />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-brand-red/40" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Why Choose Us
              </span>
              <span className="h-px w-8 bg-brand-red/40" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Why Partner with{" "}
              <span className="text-brand-green">BRK Agro</span>
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-text-muted">
              Backed by modern infrastructure, strict quality standards, and a
              farm-to-export supply chain you can rely on.
            </p>
          </motion.div>

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
                <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
                  <Image
                    src={featureImages[i]}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                  <div
                    className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 text-white backdrop-blur-sm ${i % 2 === 0 ? "bg-brand-green/35" : "bg-brand-red/35"}`}
                  >
                    {icons[i]}
                  </div>
                </div>
                <h3 className="font-display mb-2 text-lg font-bold text-text-dark">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
