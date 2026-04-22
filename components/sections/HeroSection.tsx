"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const floatingImages = [
  {
    src: "/products/sweet_corn.png",
    alt: "Sweet corn product",
    desktopClass: "absolute top-[6%] left-[4%] z-[1] md:w-40 lg:w-52 xl:w-64",
    animation: "animate-float-slow",
    animStyle: { animationDuration: "8s", animationDelay: "0.5s" },
    imageDelay: 0.52,
    rotate: "rotate-6",
  },
  {
    src: "/products/mixed_veggies.png",
    alt: "Mixed vegetables product",
    desktopClass: "absolute bottom-[6%] right-[4%] z-[1] md:w-36 lg:w-48 xl:w-60",
    animation: "animate-float-delayed",
    animStyle: { animationDuration: "7s", animationDelay: "2s" },
    imageDelay: 0.64,
    rotate: "-rotate-3",
  },
];

function buildHeroVariants(reduceMotion: boolean | null): {
  root: Variants;
  item: Variants;
} {
  if (reduceMotion) {
    return {
      root: {
        hidden: {},
        visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
      },
      item: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      },
    };
  }

  return {
    root: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.065,
          delayChildren: 0.06,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.56, ease },
      },
    },
  };
}

function HeroCopy({
  variants,
  item,
  className = "",
}: {
  variants: Variants;
  item: Variants;
  className?: string;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <motion.p variants={item} className="font-display mb-2 text-base font-medium italic text-text-muted sm:text-lg">
        Premium
      </motion.p>

      <motion.div variants={item} className="mb-5">
        <h1 className="font-display font-black leading-[0.85] tracking-tighter text-text-dark">
          <span className="block text-[3.6rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem]">FROZEN</span>
          <span className="mt-1 flex items-baseline gap-2 sm:gap-3">
            <span className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.8rem] text-brand-green">&amp;</span>
            <span className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] font-bold text-brand-red">
              FRESH
            </span>
          </span>
        </h1>
      </motion.div>

      <motion.p variants={item} className="mb-7 max-w-md text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
        Export-ready corn products — Frozen Corn and Retort Corn, processed with advanced IQF and retort technology.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-3">
        <Button href="/products" iconRight={<ArrowRight size={16} />}>
          Explore Products
        </Button>
        <Button href="/contact" variant="accent">
          Get in Touch
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const v = buildHeroVariants(reduceMotion);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16 pb-10 md:min-h-[min(100dvh,1000px)] md:pt-[5.25rem] md:pb-14">
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

      <SectionLeafAccents />

      <motion.div
        className="absolute top-0 left-0 right-0 z-[5] h-[3px] origin-left bg-gradient-to-r from-brand-green via-brand-red to-brand-green"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.85, ease, delay: 0.04 }
        }
      />

      <Container className="relative z-10 w-full py-2 md:py-0">
        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] md:items-center md:gap-8 lg:gap-12 xl:gap-14">
          <HeroCopy variants={v.root} item={v.item} className="flex max-w-xl flex-col justify-center pr-2 lg:pr-4" />

          <div className="relative flex min-h-[280px] w-full items-center justify-center md:min-h-[360px] lg:min-h-[420px] xl:min-h-[460px]">
            {floatingImages.map((img) => (
              <motion.div
                key={img.src + "-desktop"}
                initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.72,
                  ease,
                  delay: reduceMotion ? 0 : img.imageDelay,
                }}
                className={`${img.desktopClass} ${img.rotate}`}
              >
                <div className={`${img.animation} drop-shadow-[0_24px_48px_rgba(0,0,0,0.14)]`} style={img.animStyle}>
                  <Image src={img.src} alt={img.alt} width={320} height={320} className="h-auto w-full object-contain" priority />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: DOM order = copy first (a11y); visual order = gallery on top */}
        <div className="flex flex-col md:hidden">
          <HeroCopy
            variants={v.root}
            item={v.item}
            className="order-2 flex shrink-0 flex-col justify-end pb-2 pt-6"
          />

          <div className="order-1 flex min-h-[38vh] flex-1 flex-col justify-center sm:min-h-[40vh]">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {floatingImages.map((img, i) => (
                <motion.div
                  key={img.src + "-mobile"}
                  initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.68,
                    ease,
                    delay: reduceMotion ? 0 : 0.1 + img.imageDelay * 0.4 + i * 0.05,
                  }}
                  className={`flex items-end justify-center ${img.rotate} ${i >= 2 ? "-mt-12 sm:-mt-14" : ""}`}
                >
                  <div className={`${img.animation} w-full drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)]`} style={img.animStyle}>
                    <Image src={img.src} alt={img.alt} width={200} height={200} className="h-auto w-full object-contain" priority />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
