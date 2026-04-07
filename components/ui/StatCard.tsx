"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-3xl border border-border-soft bg-warm-white p-6 text-center shadow-card ${className}`}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 32px rgba(120,100,50,0.13)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-display mb-1 text-3xl font-bold text-brand-green sm:text-4xl">
        {value}
      </div>
      <div className="text-sm font-medium text-text-muted">{label}</div>
    </motion.div>
  );
}
