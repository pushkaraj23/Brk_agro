"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Handshake, BarChart3, Headphones, FileCheck } from "lucide-react";
import type { ReactNode } from "react";

const approaches: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <Handshake size={24} />,
    title: "Long-Term Partnerships",
    description:
      "We prioritize lasting business relationships over one-time transactions, working closely with partners to understand and serve their unique market needs.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Flexible Volume & Packaging",
    description:
      "Whether you need bulk shipments or retail-ready packs, we offer flexible order quantities and packaging configurations to suit your distribution channels.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Export Support",
    description:
      "Our experienced export team handles documentation, compliance, logistics coordination, and communication so you can focus on growing your business.",
  },
  {
    icon: <FileCheck size={24} />,
    title: "Transparent Quality Reports",
    description:
      "Complete traceability with detailed batch reports, certificates of analysis, and compliance documentation provided with every shipment.",
  },
];

export function PartnershipApproach() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-soft-green/40" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[.04] blur-[100px]" />
      <SectionLeafAccents />

      <Container className="relative">
        <SectionHeading
          badge="Our Approach"
          title="How We Partner with You"
          subtitle="A collaborative approach built around your market requirements, quality expectations, and growth goals."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            {approaches.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="group flex gap-5 rounded-2xl border border-border-soft bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-soft-green text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  {a.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-text-dark">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green/15 via-soft-green to-brand-green/10 p-10">
                <div className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed border-brand-green/20">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-green/10">
                    <Handshake size={40} className="text-brand-green" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-brand-green-dark">
                      Partnership-First
                    </p>
                    <p className="mt-1 text-sm text-text-muted">
                      Building trust through consistency
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-border-soft bg-white p-4 shadow-card sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-green text-brand-green">
                    <span className="text-sm font-bold">50+</span>
                  </div>
                  <p className="text-sm font-bold text-text-dark">
                    Global Partners
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
