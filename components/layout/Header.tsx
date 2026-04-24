"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Fixed rental announcement marquee */}
        <div className="relative h-7 overflow-hidden border-b border-brand-green/25 bg-text-dark text-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-text-dark to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-text-dark to-transparent" />
          <div className="flex h-full w-max min-w-full items-center whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-4 pr-4">
                <span className="text-[10px] leading-none font-semibold uppercase tracking-[0.13em] text-brand-green-light">
                  Cold Storage Rental Available
                </span>
                <span className="text-[10px] leading-none text-white/45">•</span>
                <span className="text-[10px] leading-none font-medium uppercase tracking-[0.1em] text-white/90">
                  Solar-Installed Facility
                </span>
                <span className="text-[10px] leading-none text-white/45">•</span>
                <span className="text-[10px] leading-none font-medium uppercase tracking-[0.1em] text-white/85">
                  7500 MT Capacity
                </span>
                <span className="text-[10px] leading-none text-white/45">•</span>
                <span className="text-[10px] leading-none font-medium uppercase tracking-[0.1em] text-white/85">
                  Packhouse | Blast Freezer | Ripening Chambers
                </span>
                <span className="text-[10px] leading-none text-white/45">•</span>
                <span className="text-[10px] leading-none font-medium uppercase tracking-[0.1em] text-white">
                  Contact BRK Agro for Cold Room Booking
                </span>
                <span className="inline-block w-8" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Brand gradient strip — collapses on scroll ── */}
        <motion.div
          animate={{ height: scrolled ? 0 : 3, opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden bg-gradient-to-r from-brand-green via-brand-red to-brand-green"
        />

        {/* ── Outer padding shell — grows on scroll to create the floating gap ── */}
        <motion.div
          animate={{
            paddingLeft: scrolled ? 16 : 0,
            paddingRight: scrolled ? 16 : 0,
            paddingTop: scrolled ? 10 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="sm:px-0"
        >
          {/* ── The nav pill ── */}
          <motion.div
            animate={{
              borderRadius: scrolled ? 18 : 0,
              backgroundColor: scrolled
                ? "rgba(251, 247, 236, 0.97)"
                : "rgba(251, 247, 236, 0)",
              boxShadow: scrolled
                ? "0 4px 28px rgba(80, 60, 20, 0.11), 0 1px 4px rgba(80,60,20,0.06)"
                : "none",
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ backdropFilter: scrolled ? "blur(18px)" : "none" }}
            className="mx-auto max-w-[1280px]"
          >
            <div
              className={`flex h-[68px] items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled
                  ? "px-5 sm:px-7"
                  : "px-6 sm:px-10 lg:px-16 xl:px-20"
              }`}
            >

              {/* ── Logo ── */}
              <Link href="/" className="group flex-shrink-0">
                <Image
                  src="/brk_logo.png"
                  alt="BRK Agro"
                  width={130}
                  height={44}
                  className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                  style={{ width: "auto" }}
                  priority
                />
              </Link>

              {/* ── Desktop nav ── */}
              <nav
                className="hidden items-center lg:flex"
                onMouseLeave={() => setHoveredHref(null)}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isHovered = hoveredHref === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredHref(link.href)}
                      className="relative px-3.5 py-2 text-sm font-medium"
                    >
                      {/* Hover background pill */}
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.span
                            layoutId="nav-hover"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.88 }}
                            transition={{ duration: 0.16, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-brand-green/14 ring-1 ring-brand-green/20"
                          />
                        )}
                      </AnimatePresence>

                      {/* Active background pill — shared layout animation */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-brand-green shadow-glow-green"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}

                      {/* Label */}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isActive
                            ? "font-semibold text-white"
                            : "text-text-body hover:text-brand-green-dark"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* ── Desktop CTA ── */}
              <Link
                href="/contact"
                className="group hidden flex-shrink-0 items-center gap-2 rounded-xl border border-brand-red bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-glow-red transition-all duration-300 hover:bg-brand-red-dark hover:shadow-elevated lg:inline-flex"
              >
                Enquire Now
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* ── Mobile toggle ── */}
              <button
                onClick={() => setMobileOpen(true)}
                className="group relative flex cursor-pointer flex-col items-center justify-center gap-[5px] overflow-hidden rounded-xl bg-brand-green px-3.5 py-3 shadow-glow-green transition-all duration-300 hover:bg-brand-green-dark hover:shadow-elevated lg:hidden"
                aria-label="Open menu"
              >
                <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-4" />
                <span className="h-[2px] w-3.5 rounded-full bg-white/70 transition-all duration-300 group-hover:w-5" />
                <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-3" />
                {/* Red dot accent */}
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-red" />
              </button>

            </div>
          </motion.div>
        </motion.div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
