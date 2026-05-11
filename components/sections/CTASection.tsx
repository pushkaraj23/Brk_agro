"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { SectionWhiteGlow } from "@/components/decorative/SectionWhiteGlow";
import { staggerContainer } from "@/lib/animations";
import { ArrowRight, FileDown, Mail, Phone } from "lucide-react";
import { brochureAsset, contactInfo } from "@/lib/constants";
import { emailMailtoHref, phoneTelHref } from "@/lib/contactLinks";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-cream-dark">
      <WaveDivider fill="var(--color-section-green-bg)" />

      <div
        className="relative py-20 lg:py-28 ring-1 ring-inset ring-white/50 shadow-[0_0_200px_rgba(255,255,255,0.58),0_0_100px_rgba(255,255,255,0.4),inset_0_0_180px_rgba(255,255,255,0.28)]"
        style={{ backgroundColor: "var(--color-section-green-bg)" }}
      >
        <SectionWhiteGlow />
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Depth blobs */}
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-green/25 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/25 blur-[80px]" />
        <SectionLeafAccents />

        <Container className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
          >

            {/* ════════════════════════
                LEFT — Headline
            ════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-dark/55">
                  Get In Touch
                </span>
                <span className="h-px w-8 bg-text-dark/20" />
              </div>

              <h2 className="font-display mb-6 text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
                Ready to Partner with{" "}
                <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.85),0_0_56px_rgba(255,255,255,0.45)]">BRK Agro?</span>
              </h2>

              <p className="max-w-md text-base leading-relaxed text-text-dark/80 lg:text-lg">
                BRK Agro is a leading processor and exporter of premium quality frozen food from India — speak with our export team about specifications, packaging, and delivery schedules for your market.
              </p>
            </motion.div>

            {/* ════════════════════════
                RIGHT — Action card
            ════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-border-soft bg-warm-white/95 p-7 shadow-elevated backdrop-blur-sm lg:p-8"
            >
              {/* Contact info */}
              <div className="mb-6 flex flex-col gap-3">
                <a
                  href={emailMailtoHref(contactInfo.email)}
                  className="group flex items-center gap-3 rounded-xl border border-border-soft bg-cream-light/80 px-4 py-3 transition-colors duration-200 hover:border-brand-green/30 hover:bg-soft-green/60"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
                    <Mail size={15} />
                  </div>
                  <span className="text-sm font-medium text-text-dark group-hover:text-brand-green-dark">
                    {contactInfo.email}
                  </span>
                </a>
                <a
                  href={phoneTelHref(contactInfo.phone)}
                  className="group flex items-start gap-3 rounded-xl border border-border-soft bg-cream-light/80 px-4 py-3 transition-colors duration-200 hover:border-brand-red/25 hover:bg-soft-red/40"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red/20 text-brand-red">
                    <Phone size={15} />
                  </div>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5 text-left text-sm font-medium text-text-dark group-hover:text-brand-red-dark">
                    <span className="block">{contactInfo.phone}</span>
                    <span className="block">{contactInfo.contactName}</span>
                    <span className="block text-text-muted font-normal">
                      {contactInfo.contactTitle}
                    </span>
                  </span>
                </a>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-border-soft" />

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-glow-red transition-all duration-300 hover:bg-brand-red-dark"
                >
                  Send an Enquiry
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-soft bg-warm-white px-6 py-3.5 text-sm font-semibold text-text-dark transition-all duration-300 hover:border-brand-green/35 hover:bg-soft-green/50"
                >
                  View Product Range
                </Link>
                <a
                  href={brochureAsset.href}
                  download={brochureAsset.fileName}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-soft bg-cream-light/90 px-6 py-3.5 text-sm font-semibold text-text-dark transition-all duration-300 hover:border-brand-green/35 hover:bg-soft-green/40"
                >
                  <FileDown size={15} className="opacity-90" />
                  Download brochure (PDF)
                </a>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </div>
    </section>
  );
}
