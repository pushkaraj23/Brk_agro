"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { ArrowRight, FileDown } from "lucide-react";
import { brochureAsset, heroContent } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const carouselImages = [
  { src: "/photos/company-gate-refined.png", alt: "BRK Agro company gate" },
  { src: "/photos/group-food-photo.png", alt: "Group food display" },
  { src: "/photos/company-building-refined.png", alt: "BRK Agro company building" },
  { src: "/photos/cold-storage.png", alt: "Cold storage facility" },
] as const;

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
        Premium Export Quality
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
        {heroContent.description}
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-3 md:flex-nowrap">
        <Button href="/products" size="sm" className="whitespace-nowrap" iconRight={<ArrowRight size={16} />}>
          Explore Products
        </Button>
        <Button href="/contact" variant="accent" size="sm" className="whitespace-nowrap">
          Get in Touch
        </Button>
        <Button
          href={brochureAsset.href}
          download={brochureAsset.fileName}
          variant="secondary"
          size="sm"
          className="whitespace-nowrap"
          iconRight={<FileDown size={15} />}
        >
          Product brochure
        </Button>
      </motion.div>
    </motion.div>
  );
}

function HeroCarousel({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-border-soft/70 bg-white/70 p-2 shadow-elevated backdrop-blur-sm">
      <div className="relative h-[18rem] overflow-hidden rounded-2xl sm:h-[20rem] lg:h-[24rem] xl:h-[28rem]">
        <motion.div
          className="flex h-full"
          animate={{ x: `${-activeIndex * 100}%` }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease }}
        >
          {carouselImages.map((img, idx) => (
            <div key={img.src} className="relative h-full w-full flex-shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {carouselImages[activeIndex]?.alt}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {carouselImages.map((img, idx) => (
          <button
            key={`dot-${img.src}`}
            type="button"
            aria-label={`Show slide ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "w-8 bg-brand-green" : "w-2.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const v = buildHeroVariants(reduceMotion);

  return (
    <section className="relative overflow-hidden pt-16 pb-12 md:pt-[5.25rem] md:pb-14">
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

      <Container className="relative z-10 py-3 md:py-6">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-10 lg:gap-14">
          <HeroCopy variants={v.root} item={v.item} className="flex max-w-xl flex-col justify-center" />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease, delay: reduceMotion ? 0 : 0.18 }}
            className="w-full"
          >
            <HeroCarousel reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
