"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Badge } from "@/components/ui/Badge";
import { heroStagger, heroItem } from "@/lib/animations";
import { brochureAsset, contactInfo } from "@/lib/constants";
import { emailMailtoHref, phoneTelHref } from "@/lib/contactLinks";
import { ChevronRight, Clock, FileDown, Phone } from "lucide-react";

export function ContactHero() {
  return (
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

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
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
              <span className="font-medium text-text-dark">Contact</span>
            </motion.nav>

            <motion.div variants={heroItem}>
              <Badge variant="red">Contact Us</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
            >
              Let&apos;s build your next{" "}
              <span className="text-brand-green">export order</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-muted lg:text-lg"
            >
              BRK Agro is a leading processor and exporter of premium quality frozen food from
              India — connect with our team for specs, packaging, commercial terms, and
              shipment planning. We respond quickly with clear next steps.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <span className="inline-flex items-center gap-2 rounded-xl border border-brand-green/20 bg-brand-green/[.08] px-4 py-3 text-xs font-semibold text-brand-green-dark">
                <Clock size={14} />
                Response within 24 hours
              </span>
              <a
                href={phoneTelHref(contactInfo.phone)}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-red/18 bg-brand-red/[.06] px-4 py-3 text-xs font-semibold text-brand-red-dark underline-offset-2 transition-colors hover:bg-brand-red/[.1] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <Phone size={14} />
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div variants={heroItem} className="mt-3">
              <a
                href={brochureAsset.href}
                download={brochureAsset.fileName}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark underline-offset-2 transition-colors hover:text-brand-green hover:underline"
              >
                <FileDown size={16} />
                Download product brochure (PDF)
              </a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="relative overflow-hidden rounded-3xl border border-border-soft/80 bg-warm-white shadow-elevated"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/photos/Modern food packaging in action.png"
                  alt="BRK Agro export packaging support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>

              <div className="p-4 sm:p-5">
                <div className="rounded-xl border border-brand-green/20 bg-brand-green/[.06] px-3 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Email</p>
                  <a
                    href={emailMailtoHref(contactInfo.email)}
                    className="mt-1 block text-sm font-semibold text-text-dark underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
