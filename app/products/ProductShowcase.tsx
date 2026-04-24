"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white">
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <SectionLeafAccents />

        {products.map((product, index) => {
          const isReversed = index % 2 !== 0;
          const isGreen = product.color === "green";
          const packagingDetails = product.specifications.Packaging?.split("\n") ?? [];

          return (
            <div
              key={product.slug}
              className={`relative py-16 lg:py-20 ${
                index % 2 === 0 ? "bg-warm-white" : "bg-cream/60"
              }`}
            >
              {/* Per-row blobs */}
              <div
                className={`pointer-events-none absolute top-0 h-64 w-64 rounded-full blur-[80px] ${
                  isGreen
                    ? "bg-brand-green/[.04]"
                    : "bg-brand-red/[.03]"
                } ${isReversed ? "left-0" : "right-0"}`}
              />

              <Container>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24`}
                >
                  {/* ── Image ── */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? 30 : -30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={isReversed ? "lg:order-2" : ""}
                  >
                    <div
                      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl transition-colors duration-300 ${
                        isGreen
                          ? "bg-brand-green/[.07]"
                          : "bg-brand-red/[.06]"
                      }`}
                    >
                      {/* Glow behind image */}
                      <div
                        className={`absolute bottom-0 left-1/2 h-28 w-44 -translate-x-1/2 rounded-full blur-3xl ${
                          isGreen
                            ? "bg-brand-green/20"
                            : "bg-brand-red/15"
                        }`}
                      />

                      {product.image ? (
                        <div
                          className="animate-float-slow relative z-10 drop-shadow-[0_16px_32px_rgba(0,0,0,0.13)]"
                          style={{
                            animationDuration: `${7 + index * 0.5}s`,
                          }}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={320}
                            height={320}
                            className="h-48 w-48 object-contain sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                          />
                        </div>
                      ) : (
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div
                            className={`flex h-20 w-20 items-center justify-center rounded-2xl ${
                              isGreen
                                ? "bg-brand-green/15"
                                : "bg-brand-red/12"
                            }`}
                          >
                            <span
                              className={`font-display text-2xl font-black ${
                                isGreen
                                  ? "text-brand-green"
                                  : "text-brand-red"
                              }`}
                            >
                              IQF
                            </span>
                          </div>
                          <span
                            className={`font-display text-4xl font-black opacity-[.08] lg:text-5xl ${
                              isGreen
                                ? "text-brand-green"
                                : "text-brand-red"
                            }`}
                          >
                            {product.shortName}
                          </span>
                        </div>
                      )}

                      {/* Corner accent */}
                      <div
                        className={`absolute top-4 ${
                          isReversed ? "left-4" : "right-4"
                        } rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          isGreen
                            ? "bg-brand-green/15 text-brand-green-dark"
                            : "bg-brand-red/12 text-brand-red-dark"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </motion.div>

                  {/* ── Content ── */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? -30 : 30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`flex flex-col ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Editorial label */}
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.2em] ${
                          isGreen
                            ? "text-brand-green"
                            : "text-brand-red"
                        }`}
                      >
                        {product.tagline}
                      </span>
                      <span
                        className={`h-px w-8 ${
                          isGreen
                            ? "bg-brand-green"
                            : "bg-brand-red"
                        }`}
                      />
                    </div>

                    {/* Name */}
                    <h2 className="font-display mb-4 text-2xl font-black leading-tight tracking-tight text-text-dark sm:text-3xl lg:text-4xl">
                      {product.name}
                    </h2>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-text-muted lg:text-lg">
                      {product.description}
                    </p>

                    {/* Feature chips */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                            isGreen
                              ? "border-brand-green/15 bg-brand-green/[.06] text-brand-green-dark"
                              : "border-brand-red/12 bg-brand-red/[.05] text-brand-red-dark"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Packaging details */}
                    {packagingDetails.length > 0 && (
                      <div
                        className={`mb-8 rounded-2xl border p-4 sm:p-5 ${
                          isGreen
                            ? "border-brand-green/15 bg-brand-green/[.04]"
                            : "border-brand-red/12 bg-brand-red/[.04]"
                        }`}
                      >
                        <p
                          className={`mb-2 text-xs font-bold uppercase tracking-[0.18em] ${
                            isGreen
                              ? "text-brand-green-dark"
                              : "text-brand-red-dark"
                          }`}
                        >
                          Packaging
                        </p>
                        <ul className="space-y-1.5 text-sm text-text-dark">
                          {packagingDetails.map((packDetail) => (
                            <li key={packDetail} className="leading-relaxed">
                              {packDetail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/products/${product.slug}`}
                      className={`group inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                        isGreen
                          ? "bg-brand-green shadow-glow-green hover:bg-brand-green-dark"
                          : "bg-brand-red shadow-glow-red hover:bg-brand-red-dark"
                      }`}
                    >
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </motion.div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}
