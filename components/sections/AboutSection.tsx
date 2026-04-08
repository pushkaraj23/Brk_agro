"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { aboutContent } from "@/lib/constants";
import { Leaf, Palette, Heart, Clock } from "lucide-react";

const featureIcons = [Leaf, Palette, Heart, Clock] as const;
const featureColors = ["green", "red", "green", "red"] as const;

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-28">
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Depth blobs */}
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* ── LEFT — Content ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  {aboutContent.badge}
                </span>
                <span className="h-px w-8 bg-brand-green" />
              </div>

              <h2 className="font-display mb-5 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
                Leading Processor{" "}
                <span className="text-brand-green">&amp; Exporter</span> of
                Premium Frozen Produce
              </h2>

              <p className="mb-8 text-base leading-relaxed text-text-muted lg:text-lg">
                {aboutContent.description}
              </p>

              {/* Feature cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {aboutContent.features.map((feature, i) => {
                  const Icon = featureIcons[i];
                  const isGreen = featureColors[i] === "green";
                  return (
                    <motion.div
                      key={feature.title}
                      variants={fadeUp}
                      className={`group flex items-start gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                        isGreen
                          ? "border-brand-green/15 bg-brand-green/[.05] hover:bg-brand-green/[.10]"
                          : "border-brand-red/12 bg-brand-red/[.04] hover:bg-brand-red/[.08]"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isGreen
                            ? "bg-brand-green/15 text-brand-green group-hover:bg-brand-green group-hover:text-white"
                            : "bg-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="font-display mb-0.5 text-sm font-bold text-text-dark">
                          {feature.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* ── RIGHT — Image ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated sm:aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1661319615776-946158744a29?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="BRK Agro processing facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-soft" />
                    <span className="text-xs font-semibold tracking-wide text-white">
                      State-of-the-Art Processing
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating IQF badge */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border-soft bg-warm-white p-4 shadow-elevated sm:-left-6"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                  <span className="font-display text-sm font-black text-brand-green">
                    IQF
                  </span>
                </div>
                <div className="pr-1">
                  <p className="text-sm font-bold text-text-dark">
                    Advanced Freezing
                  </p>
                  <p className="text-xs text-text-muted">JBT Technology</p>
                </div>
              </motion.div>

              {/* Accent dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-brand-red/20 ring-4 ring-brand-red/8"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
