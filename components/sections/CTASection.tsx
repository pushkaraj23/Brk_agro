"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer } from "@/lib/animations";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contactInfo } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-cream-dark">
      <WaveDivider fill="#2A4E1E" />

      <div className="relative py-20 lg:py-28" style={{ backgroundColor: "#2A4E1E" }}>
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
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-black/20 blur-[80px]" />
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
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                  Get In Touch
                </span>
                <span className="h-px w-8 bg-white/25" />
              </div>

              <h2 className="font-display mb-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Partner with{" "}
                <span className="text-brand-red">BRK Agro?</span>
              </h2>

              <p className="max-w-md text-base leading-relaxed text-white/60 lg:text-lg">
                Connect with our export team to discuss product specifications, packaging options, and delivery schedules tailored to your market.
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
              className="rounded-3xl border border-white/10 bg-white/[.07] p-7 backdrop-blur-sm lg:p-8"
            >
              {/* Contact info */}
              <div className="mb-6 flex flex-col gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 transition-colors duration-200 hover:bg-white/[.10]"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
                    <Mail size={15} />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">
                    {contactInfo.email}
                  </span>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 transition-colors duration-200 hover:bg-white/[.10]"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red/20 text-brand-red">
                    <Phone size={15} />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">
                    {contactInfo.phone} · {contactInfo.contactName}
                  </span>
                </a>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-white/10" />

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
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[.06] px-6 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:bg-white/[.12] hover:text-white"
                >
                  View Product Range
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </div>
    </section>
  );
}
