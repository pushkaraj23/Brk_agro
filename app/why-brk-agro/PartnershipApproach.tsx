"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section className="relative overflow-hidden py-24 lg:overflow-visible lg:py-32">
      <div className="absolute inset-0 bg-cream/80" />
      <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[.04] blur-[100px]" />
      <SectionLeafAccents />

      <Container className="relative">
        <SectionHeading
          badge="Our Approach"
          title="How We Partner with You"
          subtitle="A structured partnership model focused on continuity, clarity, and business growth."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:items-start">
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
                className="group relative overflow-hidden rounded-2xl border border-border-soft bg-warm-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-green to-brand-red opacity-80" />
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-soft-green text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  {a.icon}
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
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

          <div className="relative self-start lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-warm-white shadow-elevated">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/Industrial warehouse with forklift operation.png"
                  alt="Export warehouse and distribution support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-xl border border-white/25 bg-black/30 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">Always informed</p>
                  <p className="text-sm font-semibold text-white">Transparent delivery communication</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
                <div className="rounded-xl border border-brand-green/20 bg-brand-green/[.06] px-3 py-3 text-center">
                  <p className="font-display text-xl font-black text-brand-green-dark">50+</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Global Partners</p>
                </div>
                <div className="rounded-xl border border-brand-red/20 bg-brand-red/[.05] px-3 py-3 text-center">
                  <p className="font-display text-xl font-black text-brand-red">24/7</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Support Window</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
