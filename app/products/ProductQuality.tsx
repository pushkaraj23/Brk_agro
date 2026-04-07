"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ShieldCheck, Thermometer, Package, Microscope, Leaf, Globe } from "lucide-react";
import type { ReactNode } from "react";

const qualityFeatures: { icon: ReactNode; title: string; description: string }[] = [
  { icon: <ShieldCheck size={22} />, title: "HACCP Compliant", description: "Our processing facility follows HACCP food safety management principles at every stage." },
  { icon: <Thermometer size={22} />, title: "Cold Chain Integrity", description: "Unbroken cold chain from processing to dispatch, with 24/7 temperature monitoring." },
  { icon: <Microscope size={22} />, title: "Lab Tested", description: "Every batch undergoes comprehensive microbiological and physical quality testing." },
  { icon: <Package size={22} />, title: "Custom Packaging", description: "Flexible packaging solutions — bulk bags, retail packs, and private label options available." },
  { icon: <Leaf size={22} />, title: "No Additives", description: "100% natural — no preservatives, no artificial colors, no added chemicals." },
  { icon: <Globe size={22} />, title: "Export Documentation", description: "Complete export documentation, phytosanitary certificates, and compliance support." },
];

export function ProductQuality() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-soft-amber/30 to-cream" />
      <LeafDecor className="absolute top-16 left-10 h-12 w-8 -rotate-[20deg] text-brand-green/7 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Quality Standards"
          title="Quality You Can Trust"
          subtitle="Every product meets rigorous international standards from farm to final packaging."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {qualityFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className={`group flex items-start gap-4 rounded-3xl border bg-warm-white p-6 shadow-card transition-all duration-300 hover:shadow-elevated ${qualityFeatures.indexOf(f) % 2 === 0 ? "border-border-soft hover:border-brand-green/25" : "border-border-soft hover:border-brand-red/25"}`}
            >
              <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white ${qualityFeatures.indexOf(f) % 2 === 0 ? "bg-soft-green text-brand-green group-hover:bg-brand-green" : "bg-soft-red text-brand-red group-hover:bg-brand-red"}`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-display mb-1 text-sm font-bold text-text-dark">{f.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
