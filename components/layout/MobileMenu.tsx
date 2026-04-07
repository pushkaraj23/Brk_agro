"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, contactInfo } from "@/lib/constants";
import { X, ArrowRight, Phone, Mail } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-text-dark/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* ── Slide-in panel ── */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] flex w-full max-w-sm flex-col overflow-hidden bg-cream"
          >
            {/* ── Top brand strip ── */}
            <div className="h-[3px] w-full bg-gradient-to-r from-brand-green via-brand-red to-brand-green flex-shrink-0" />

            {/* ── Header row ── */}
            <div className="flex items-center justify-between px-6 py-5 flex-shrink-0">
              <Link href="/" onClick={onClose}>
                <Image
                  src="/brk_logo.png"
                  alt="BRK Agro"
                  width={110}
                  height={38}
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <button
                onClick={onClose}
                className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-warm-white transition-all duration-200 hover:border-brand-red/40 hover:bg-soft-red"
                aria-label="Close menu"
              >
                <X size={17} className="text-text-muted transition-colors group-hover:text-brand-red" />
              </button>
            </div>

            {/* ── Divider ── */}
            <div className="mx-6 h-px bg-border-soft flex-shrink-0" />

            {/* ── Nav links ── */}
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.055,
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                        isActive
                          ? "bg-brand-green shadow-glow-green"
                          : "hover:bg-soft-green"
                      }`}
                    >
                      <span
                        className={`text-base font-semibold ${
                          isActive ? "text-white" : "text-text-dark"
                        }`}
                      >
                        {link.label}
                      </span>
                      {/* Arrow */}
                      <ArrowRight
                        size={15}
                        className={`transition-all duration-200 ${
                          isActive
                            ? "text-white/70"
                            : "text-text-light group-hover:translate-x-1 group-hover:text-brand-green"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── Contact snippet ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mx-6 mb-4 flex-shrink-0 rounded-2xl border border-border-soft bg-warm-white px-4 py-4"
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-text-light">
                Get in Touch
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2.5 text-xs font-medium text-text-muted transition-colors hover:text-brand-green"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-soft-green">
                    <Phone size={11} className="text-brand-green" />
                  </span>
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-xs font-medium text-text-muted transition-colors hover:text-brand-red"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-soft-red">
                    <Mail size={11} className="text-brand-red" />
                  </span>
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>

            {/* ── CTA button ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 pb-8 flex-shrink-0"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-red py-4 text-sm font-bold text-white shadow-glow-red transition-all duration-300 hover:bg-brand-red-dark hover:shadow-elevated"
              >
                Enquire Now
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
