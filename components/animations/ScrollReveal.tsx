"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: Direction;
  distance?: number;
}

const directionOffset = (dir: Direction, dist: number) => {
  switch (dir) {
    case "up":
      return { y: dist };
    case "down":
      return { y: -dist };
    case "left":
      return { x: -dist };
    case "right":
      return { x: dist };
    default:
      return {};
  }
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  direction = "up",
  distance = 30,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset(direction, distance) }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset(direction, distance) }
      }
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
