"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Button } from "@/components/ui/Button";
import { heroStagger, heroItem, staggerContainer, fadeUp } from "@/lib/animations";
import { ChevronRight, Check, Snowflake, Mail } from "lucide-react";
import { products } from "@/lib/constants";
import { ProductEnquiryForm } from "@/components/products/ProductEnquiryForm";

type Product = (typeof products)[number];

export function ProductDetail({ product }: { product: Product }) {
  const isGreen = product.color === "green";

  return (
    <>
      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-14">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-soft-amber/40 to-cream" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-brand-green/[.06] blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-brand-red/[.03] blur-[60px]" />
        <SectionLeafAccents />

        <Container className="relative sm:mb-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Text */}
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
            >
              <motion.nav
                variants={heroItem}
                className="mb-4 flex items-center gap-1.5 text-sm"
              >
                <Link
                  href="/"
                  className="text-text-muted transition-colors hover:text-brand-green"
                >
                  Home
                </Link>
                <ChevronRight size={14} className="text-text-light" />
                <Link
                  href="/products"
                  className="text-text-muted transition-colors hover:text-brand-green"
                >
                  Products
                </Link>
                <ChevronRight size={14} className="text-text-light" />
                <span className="font-medium text-text-dark">
                  {product.shortName}
                </span>
              </motion.nav>

              <motion.div variants={heroItem}>
                <Badge variant={isGreen ? "green" : "red"}>
                  {product.tagline}
                </Badge>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
              >
                {product.name}
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
              >
                {product.description}
              </motion.p>

              <motion.div variants={heroItem} className="mt-6">
                <Button
                  href="/contact"
                  variant={isGreen ? "primary" : "accent"}
                  iconRight={<Mail size={16} />}
                >
                  Enquire About This Product
                </Button>
              </motion.div>
            </motion.div>

            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center"
            >
              <div
                className={`relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl ${
                  isGreen
                    ? "bg-brand-green/[.08]"
                    : "bg-brand-red/[.06]"
                }`}
              >
                {/* Glow */}
                <div
                  className={`absolute bottom-0 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full blur-3xl ${
                    isGreen ? "bg-brand-green/25" : "bg-brand-red/20"
                  }`}
                />

                {product.image ? (
                  <div
                    className="animate-float-slow relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
                    style={{ animationDuration: "8s" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-56 w-56 object-contain sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-3xl ${
                        isGreen
                          ? "bg-brand-green/15"
                          : "bg-brand-red/12"
                      }`}
                    >
                      <Snowflake
                        size={40}
                        className={
                          isGreen
                            ? "text-brand-green"
                            : "text-brand-red"
                        }
                      />
                    </div>
                    <span
                      className={`font-display text-5xl font-black opacity-[.08] ${
                        isGreen
                          ? "text-brand-green"
                          : "text-brand-red"
                      }`}
                    >
                      {product.shortName}
                    </span>
                  </div>
                )}
              </div>

              {/* Floating IQF badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-2xl border border-border-soft bg-warm-white p-3 shadow-elevated sm:-left-4 sm:p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-soft-green">
                  <span className="font-display text-xs font-black text-brand-green sm:text-sm">
                    IQF
                  </span>
                </div>
                <div className="pr-1">
                  <p className="text-xs font-bold text-text-dark sm:text-sm">
                    Premium Quality
                  </p>
                  <p className="text-[10px] text-text-muted sm:text-xs">
                    Export Grade
                  </p>
                </div>
              </motion.div>

              {/* Accent dot */}
              <div className="absolute -top-2 right-4 h-5 w-5 rounded-full bg-brand-red/20 ring-4 ring-brand-red/8" />
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:flex-row-reverse lg:items-start lg:gap-8 lg:px-16 xl:gap-10 xl:px-20">
        <aside className="w-full shrink-0 self-start lg:sticky lg:top-20 lg:z-10 lg:w-[min(100%,20rem)] lg:pb-10 xl:w-[22rem]">
          <ProductEnquiryForm
            productName={product.name}
            productShortName={product.shortName}
            variant={isGreen ? "green" : "red"}
          />
        </aside>

        <div className="min-w-0 flex-1 space-y-6 lg:space-y-8">
          {/* ═══════════════════════════════
          OVERVIEW + SPECIFICATIONS
      ═══════════════════════════════ */}
          <section className="relative bg-cream">
            <div className="overflow-hidden rounded-2xl border border-border-soft/90 bg-warm-white shadow-elevated ring-1 ring-black/[0.04] sm:rounded-3xl">
              <div className="relative px-5 py-14 sm:px-7 sm:py-16 lg:px-9 lg:py-20 xl:px-10 xl:py-24">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.015]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #7A6230 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[.05] blur-[80px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

                <div className="relative grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              {/* Long description + features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.2em] ${
                      isGreen
                        ? "text-brand-green"
                        : "text-brand-red"
                    }`}
                  >
                    Product Overview
                  </span>
                  <span
                    className={`h-px w-8 ${
                      isGreen ? "bg-brand-green" : "bg-brand-red"
                    }`}
                  />
                </div>

                <h2 className="font-display mb-5 text-2xl font-black leading-tight tracking-tight text-text-dark sm:text-3xl">
                  About This{" "}
                  <span
                    className={
                      isGreen ? "text-brand-green" : "text-brand-red"
                    }
                  >
                    Product
                  </span>
                </h2>

                <p className="mb-8 text-base leading-relaxed text-text-muted lg:text-lg">
                  {product.longDescription}
                </p>

                {/* Feature chips */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="grid grid-cols-2 gap-2.5"
                >
                  {product.features.map((feature) => (
                    <motion.div
                      key={feature}
                      variants={fadeUp}
                      className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 ${
                        isGreen
                          ? "border-brand-green/15 bg-brand-green/[.06]"
                          : "border-brand-red/12 bg-brand-red/[.05]"
                      }`}
                    >
                      <Check
                        size={14}
                        className={
                          isGreen
                            ? "text-brand-green"
                            : "text-brand-red"
                        }
                      />
                      <span className="text-sm font-semibold text-text-dark">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                    Specifications
                  </span>
                  <span className="h-px w-8 bg-border" />
                </div>

                <div className="overflow-hidden rounded-2xl border border-border-soft">
                  {Object.entries(product.specifications).map(
                    ([key, value], i) => (
                      <div
                        key={key}
                        className={`flex min-w-0 flex-col gap-1 px-4 py-4 sm:flex-row sm:items-start sm:gap-4 sm:px-5 ${
                          i <
                          Object.entries(product.specifications)
                            .length -
                            1
                            ? "border-b border-border-soft"
                            : ""
                        } ${
                          i % 2 === 0
                            ? "bg-warm-white"
                            : "bg-cream/40"
                        }`}
                      >
                        <span className="min-w-0 shrink-0 text-sm font-semibold text-text-dark sm:min-w-[120px]">
                          {key}
                        </span>
                        <span className="min-w-0 break-words text-sm text-text-muted">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════
          APPLICATIONS — Dark panel
      ═══════════════════════════════ */}
          <section className="relative mb-10">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#2A4E1E] shadow-[0_28px_90px_rgba(20,40,15,0.35)] ring-1 ring-white/10 sm:rounded-3xl">
              <div
                className="relative px-5 py-14 sm:px-7 sm:py-16 lg:px-9 xl:px-10"
                style={{ backgroundColor: "#2A4E1E" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/30 blur-[100px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-black/20 blur-[80px]" />

                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                      Applications
                    </span>
                    <span className="h-px w-8 bg-white/25" />
                  </div>

                  <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                    Where It&apos;s{" "}
                    <span className="text-brand-red">Used</span>
                  </h2>

                  <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60">
                    Our {product.shortName} is trusted across diverse markets worldwide.
                    Each use case below is paired with a visual snapshot so you can scan
                    where your product fits.
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    {product.applications.map((app, i) => {
                      const n = product.applications.length;
                      const lastOdd = n % 2 === 1 && i === n - 1;

                      return (
                        <motion.article
                          key={app.title}
                          variants={fadeUp}
                          className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[.05] shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)] ${
                            lastOdd ? "sm:col-span-2 sm:mx-auto sm:max-w-lg" : ""
                          }`}
                        >
                          <div className="relative aspect-[16/11] w-full overflow-hidden">
                            <Image
                              src={app.image}
                              alt={app.title}
                              fill
                              className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0c]/95 via-[#0f1f0c]/35 to-transparent" />
                            <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/35 text-[11px] font-bold text-white ring-1 ring-white/15 backdrop-blur-sm">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                                Application
                              </p>
                              <h3 className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                                {app.title}
                              </h3>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
