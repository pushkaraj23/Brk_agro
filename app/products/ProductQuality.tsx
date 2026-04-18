"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  ShieldCheck,
  Thermometer,
  Package,
  Microscope,
  Leaf,
  Globe,
} from "lucide-react";

const qualityFeatures = [
  {
    icon: ShieldCheck,
    title: "HACCP Compliant",
    description:
      "Our processing facility follows HACCP food safety management principles at every stage.",
    color: "white" as const,
  },
  {
    icon: Thermometer,
    title: "Cold Chain Integrity",
    description:
      "Unbroken cold chain from processing to dispatch, with 24/7 temperature monitoring.",
    color: "red" as const,
  },
  {
    icon: Microscope,
    title: "Lab Tested",
    description:
      "Every batch undergoes comprehensive microbiological and physical quality testing.",
    color: "white" as const,
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description:
      "Flexible packaging solutions — bulk bags, retail packs, and private label options available.",
    color: "red" as const,
  },
  {
    icon: Leaf,
    title: "No Additives",
    description:
      "100% natural — no preservatives, no artificial colors, no added chemicals.",
    color: "white" as const,
  },
  {
    icon: Globe,
    title: "Export Documentation",
    description:
      "Complete export documentation, phytosanitary certificates, and compliance support.",
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

export function ProductQuality() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      <WaveDivider fill="#2A4E1E" />

      <div
        className="relative py-20 lg:py-28"
        style={{ backgroundColor: "#2A4E1E" }}
      >
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-black/20 blur-[80px]" />
        <SectionLeafAccents />

        <Container className="relative">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                Quality Standards
              </span>
              <span className="h-px w-8 bg-white/30" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              Quality You Can{" "}
              <span className="text-brand-red">Trust</span>
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60">
              Every product meets rigorous international standards from farm to
              final packaging.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          >
            {qualityFeatures.map((f) => {
              const Icon = f.icon;
              const isRed = f.color === "red";

              return (
                <motion.div
                  key={f.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    },
                  }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[.10]"
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isRed
                        ? "bg-brand-red/25 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                        : "bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="font-display mb-1 text-sm font-bold text-white lg:text-base">
                      {f.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
                      {f.description}
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
