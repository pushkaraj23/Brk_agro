"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { products } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-soft-green/50" />
      <SectionLeafAccents />

      <Container className="relative">
        <SectionHeading
          badge="Our Products"
          title="Frozen Corn & Retort Corn"
          subtitle="Export-grade IQF kernels and retort corn on the cob — processed for consistent quality, shelf life, and nutrition retention."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border-soft bg-warm-white shadow-card transition-all duration-500 hover:shadow-elevated"
            >
              <div className="relative overflow-hidden">
                <div
                  className={`flex h-44 items-center justify-center bg-gradient-to-br ${product.gradient} transition-transform duration-700 group-hover:scale-105`}
                >
                  <span className="font-display text-3xl font-bold text-white/25">
                    {product.shortName}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/15">
                  <a
                    href="/contact"
                    className="flex translate-y-3 items-center gap-1.5 rounded-full bg-warm-white px-5 py-2.5 text-sm font-semibold text-text-dark opacity-0 shadow-elevated transition-all duration-500 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Enquire
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display mb-1.5 text-base font-bold text-text-dark">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted line-clamp-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
