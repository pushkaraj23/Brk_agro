"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { SectionWhiteGlow } from "@/components/decorative/SectionWhiteGlow";
import { staggerContainer } from "@/lib/animations";
import { Sprout, Snowflake, ShieldCheck, Package, BarChart3, Award, ArrowRight } from "lucide-react";

const features = [
  { icon: Sprout,      title: "Trusted Farm Sourcing",        desc: "Direct relationships with growers for sweet corn harvested at the right stage for IQF or retort.",     color: "white" },
  { icon: Snowflake,   title: "Advanced Freezing Technology",  desc: "JBT's latest IQF technology — peak freshness and reliable texture.",  color: "red"   },
  { icon: ShieldCheck, title: "Hygienic Processing",           desc: "State-of-the-art sanitized facility with strict hygiene protocols.",           color: "white" },
  { icon: Package,     title: "Export-Ready Packaging",        desc: "International-standard packaging for safe transit and extended shelf life.",   color: "red"   },
  { icon: BarChart3,   title: "Strict Sorting & Grading",      desc: "Sorting and grading so only suitable cobs and kernels move forward in the line.",      color: "white" },
  { icon: Award,       title: "Consistent Quality",            desc: "Rigorous checks at every stage guarantee batch-to-batch uniformity.",          color: "red"   },
];

const featureImages = [
  "/photos/Handshake in the golden cornfield.png",
  "https://jbtmarel.com/media/dbzm0uun/flofreeze-a.jpg",
  "/photos/Strawberry sorting in a modern factory.png",
  "/photos/Modern food packaging in action.png",
  "/photos/Industrial warehouse with forklift operation refined.png",
  "/photos/Fresh peas packing in sterile facility refined.png",
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function WhyBrkBrief() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-section-green-bg)" />

      <div
        className="relative py-20 lg:py-24 ring-1 ring-inset ring-white/50 shadow-[0_0_200px_rgba(255,255,255,0.58),0_0_100px_rgba(255,255,255,0.4),inset_0_0_180px_rgba(255,255,255,0.28)]"
        style={{ backgroundColor: "var(--color-section-green-bg)" }}
      >
        <SectionWhiteGlow />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/25 blur-[80px]" />
        <SectionLeafAccents />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-text-dark/20" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-dark/55">
                Why Choose Us
              </span>
              <span className="h-px w-8 bg-text-dark/20" />
            </div>

            <h2 className="font-display mb-4 text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Why Partner with{" "}
              <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.85),0_0_56px_rgba(255,255,255,0.45)]">BRK Agro</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-dark/80">
              BRK Agro is a leading processor and exporter of premium quality frozen food from India — a cleaner supply chain, modern processing, and dependable execution from sourcing to shipment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              const isRed = f.color === "red";

              return (
                <motion.div
                  key={f.title}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                  className="group overflow-hidden rounded-3xl border border-border-soft bg-warm-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={featureImages[i]}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div
                      className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 text-white backdrop-blur-sm ${
                        isRed ? "bg-brand-red/45" : "bg-brand-green/45"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display mb-2 text-base font-semibold text-text-dark">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <Button href="/why-brk-agro" iconRight={<ArrowRight size={16} />}>
              Explore Why BRK Agro
            </Button>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
