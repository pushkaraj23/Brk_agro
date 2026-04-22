"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function SectionEdgeOrnament() {
  const { scrollYProgress } = useScroll();
  const glowX = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const leftParallax = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const rightParallax = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return (
    <div aria-hidden className="pointer-events-none relative -my-1 h-10 overflow-x-clip">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#7A6230]/[0.045] via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7A6230]/15 to-transparent" />

      <motion.div
        initial={{ scaleX: 0.08, opacity: 0.6 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 h-[6px] w-[min(86%,980px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#7A6230]/12"
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-brand-green/55 via-[#7A6230]/30 to-brand-red/45" />
        <motion.div
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[1px]"
          style={{ x: glowX }}
        />
      </motion.div>

      <motion.div
        className="absolute left-0 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-brand-green/28 to-transparent"
        style={{ x: leftParallax }}
      />
      <motion.div
        className="absolute right-0 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-l from-brand-red/25 to-transparent"
        style={{ x: rightParallax }}
      />
    </div>
  );
}
