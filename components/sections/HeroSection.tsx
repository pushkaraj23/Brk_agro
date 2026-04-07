"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { heroStagger, heroItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const floatingImages = [
  {
    src: "/home/mixed_veggies.png",
    alt: "Mixed Vegetables",
    desktopClass: "absolute top-[8%] left-[8%] md:w-36 lg:w-52 xl:w-64",
    animation: "animate-float",
    animStyle: { animationDuration: "8s", animationDelay: "0s" },
    enterDelay: 0.6,
    rotate: "-rotate-6",
  },
  {
    src: "/home/sweet_corn.png",
    alt: "Sweet Corn",
    desktopClass: "absolute top-[2%] right-[4%] md:w-32 lg:w-44 xl:w-56",
    animation: "animate-float-slow",
    animStyle: { animationDuration: "9s", animationDelay: "1s" },
    enterDelay: 0.8,
    rotate: "rotate-6",
  },
  {
    src: "/home/green_peas.png",
    alt: "Green Peas",
    desktopClass: "absolute bottom-[8%] left-[4%] md:w-32 lg:w-48 xl:w-60",
    animation: "animate-float-delayed",
    animStyle: { animationDuration: "7s", animationDelay: "2s" },
    enterDelay: 1.0,
    rotate: "rotate-3",
  },
  {
    src: "/home/french-fries.png",
    alt: "French Fries",
    desktopClass: "absolute bottom-[5%] right-[2%] md:w-28 lg:w-44 xl:w-52",
    animation: "animate-float",
    animStyle: { animationDuration: "6.5s", animationDelay: "1.5s" },
    enterDelay: 1.2,
    rotate: "-rotate-3",
  },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] max-h-[1000px] flex-col overflow-hidden pt-16 pb-10 md:flex-row md:items-center md:pt-0 md:pb-0">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-cream">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full bg-brand-green/[.06] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-amber-300/[.08] blur-[80px]" />
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[80px]" />
        <div className="absolute top-0 right-0 h-full w-[55%] bg-gradient-to-bl from-soft-green/40 via-transparent to-transparent" />
      </div>

      {/* ── Decorative leaves ── */}
      <LeafDecor className="absolute top-28 left-4 h-10 w-6 -rotate-[22deg] text-brand-green/8 hidden xl:block" />
      <LeafDecor className="absolute bottom-28 left-16 h-8 w-5 rotate-[15deg] text-brand-red/7 hidden xl:block" />

      {/* ── Top accent stripe ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-brand-red to-brand-green" />

      {/* ─────────────────────────────────────────────────
          Container: flex-col on mobile so children can
          use flex-1 to fill remaining vertical space
      ───────────────────────────────────────────────── */}
      <Container className="relative z-10 flex w-full flex-1 flex-col md:block">

        {/* ── Desktop / Tablet: side-by-side grid ── */}
        <div className="hidden md:grid md:h-full md:items-center md:gap-4 md:grid-cols-[1fr_1.05fr] lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT — text */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.p variants={heroItem} className="font-display mb-2 text-base font-medium italic text-text-muted sm:text-lg">
              Premium
            </motion.p>

            <motion.div variants={heroItem} className="mb-5">
              <h1 className="font-display font-black leading-[0.85] tracking-tighter text-text-dark">
                <span className="block text-[3.6rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem]">
                  FROZEN
                </span>
                <span className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.8rem] text-brand-green">
                    &amp;
                  </span>
                  <span className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold text-brand-red">
                    FRESH
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p variants={heroItem} className="mb-7 max-w-sm text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
              Export-ready frozen fruits &amp; vegetables — processed with advanced IQF technology from trusted farms.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <Button href="/products" iconRight={<ArrowRight size={16} />}>
                Explore Products
              </Button>
              <Button href="/contact" variant="accent">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — scattered floating stage */}
          <div className="relative md:h-[340px] lg:h-[520px] xl:h-[580px]">
            {floatingImages.map((img) => (
              <motion.div
                key={img.src + "-desktop"}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: img.enterDelay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${img.desktopClass} ${img.rotate}`}
              >
                <div className={`${img.animation} drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]`} style={img.animStyle}>
                  <Image src={img.src} alt={img.alt} width={320} height={320} className="h-auto w-full object-contain" priority />
                </div>
              </motion.div>
            ))}
            <div className="absolute top-[20%] left-[20%] h-40 w-40 rounded-full bg-brand-green/8 blur-3xl" />
            <div className="absolute bottom-[20%] right-[15%] h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
          </div>

        </div>

        {/* ── Mobile: stacked layout ── */}
        <div className="flex flex-1 flex-col md:hidden">

          {/* 2×2 image grid — fills top space, bottom row overlaps up */}
          <div className="flex-1 flex flex-col justify-center min-h-0">
            <div className="grid grid-cols-2 gap-x-2 gap-y-0 h-full">
              {floatingImages.map((img, i) => (
                <motion.div
                  key={img.src + "-mobile"}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex items-end justify-center ${img.rotate} ${i >= 2 ? "-mt-14 sm:-mt-16" : ""}`}
                >
                  <div
                    className={`${img.animation} drop-shadow-[0_10px_22px_rgba(0,0,0,0.11)] w-full`}
                    style={img.animStyle}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={200}
                      height={200}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text — anchored to bottom */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-end flex-shrink-0 pt-3"
          >
            <motion.p variants={heroItem} className="font-display mb-1 text-base font-medium italic text-text-muted">
              Premium
            </motion.p>

            <motion.div variants={heroItem} className="mb-3">
              <h1 className="font-display font-black leading-[0.85] tracking-tighter text-text-dark">
                <span className="block text-[3.6rem]">FROZEN</span>
                <span className="flex items-baseline gap-2">
                  <span className="text-[2.8rem] text-brand-green">&amp;</span>
                  <span className="text-[2rem] font-bold text-brand-red">FRESH</span>
                </span>
              </h1>
            </motion.div>

            <motion.p variants={heroItem} className="mb-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Export-ready frozen fruits &amp; vegetables — processed with advanced IQF technology from trusted farms.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <Button href="/products" iconRight={<ArrowRight size={16} />}>
                Explore Products
              </Button>
              <Button href="/contact" variant="accent">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
