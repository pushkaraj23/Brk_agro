"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer } from "@/lib/animations";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const featured = [
  {
    name: "Frozen Sweet Corn Kernels",
    tag: "IQF Frozen",
    image: "/home/sweet_corn.png",
    color: "green",
    animDuration: "7s",
    animDelay: "0s",
    rotate: "-rotate-3",
  },
  {
    name: "Frozen Green Peas",
    tag: "Export Grade",
    image: "/home/green_peas.png",
    color: "red",
    animDuration: "8.5s",
    animDelay: "0.8s",
    rotate: "rotate-2",
  },
  {
    name: "Frozen Mixed Vegetables",
    tag: "Farm Fresh",
    image: "/home/mixed_veggies.png",
    color: "green",
    animDuration: "9s",
    animDelay: "0.4s",
    rotate: "rotate-3",
  },
  {
    name: "Frozen French Fries",
    tag: "Retort Processed",
    image: "/home/french-fries.png",
    color: "red",
    animDuration: "7.5s",
    animDelay: "1.2s",
    rotate: "-rotate-2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProductsBrief() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-28">
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle blobs */}
      <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-brand-green/[.04] blur-[80px]" />
      <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

      <Container className="relative">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
              Our Products
            </span>
            <span className="h-px w-8 bg-brand-red/50" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Premium Frozen{" "}
              <span className="text-brand-red">Range</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted sm:text-right">
              Export-ready quality, locked in at peak freshness with advanced IQF technology.
            </p>
          </div>
        </motion.div>

        {/* ── Product grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {featured.map((product) => {
            const isGreen = product.color === "green";

            return (
              <motion.div
                key={product.name}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="group flex cursor-default flex-col overflow-hidden rounded-3xl bg-warm-white shadow-card transition-shadow duration-300 hover:shadow-elevated"
              >
                {/* ── Image area ── */}
                <div
                  className={`relative flex items-center justify-center overflow-hidden px-6 pb-2 pt-8 transition-colors duration-300 ${
                    isGreen
                      ? "bg-brand-green/[.07] group-hover:bg-brand-green/[.12]"
                      : "bg-brand-red/[.06] group-hover:bg-brand-red/[.10]"
                  }`}
                >
                  {/* Glow behind image */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-16 w-28 -translate-x-1/2 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-80 opacity-30 ${
                      isGreen ? "bg-brand-green/40" : "bg-brand-red/30"
                    }`}
                  />

                  {/* Product image */}
                  <div
                    className={`animate-float-slow relative z-10 ${product.rotate} drop-shadow-[0_12px_28px_rgba(0,0,0,0.13)]`}
                    style={{
                      animationDuration: product.animDuration,
                      animationDelay: product.animDelay,
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="h-32 w-32 object-contain sm:h-36 sm:w-36"
                    />
                  </div>
                </div>

                {/* ── Text area ── */}
                <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:p-5">
                  <div>
                    {/* Tag */}
                    <span
                      className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isGreen
                          ? "bg-brand-green/10 text-brand-green-dark"
                          : "bg-brand-red/10 text-brand-red-dark"
                      }`}
                    >
                      {product.tag}
                    </span>

                    {/* Name */}
                    <h3 className="font-display text-sm font-bold leading-snug text-text-dark sm:text-base">
                      {product.name}
                    </h3>
                  </div>

                  {/* Enquire link */}
                  <Link
                    href="/contact"
                    className={`group/btn flex w-fit items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                      isGreen
                        ? "text-brand-green hover:text-brand-green-dark"
                        : "text-brand-red hover:text-brand-red-dark"
                    }`}
                  >
                    Enquire
                    <ArrowUpRight
                      size={12}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <Button href="/products" iconRight={<ArrowRight size={16} />}>
            View All Products
          </Button>
        </motion.div>

      </Container>
      </div>
    </section>
  );
}
