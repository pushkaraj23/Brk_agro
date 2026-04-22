"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  QUALITY_LAB_VIDEO_POSTER,
  QUALITY_PILLAR_IMAGES,
  SITE_VIDEOS,
} from "@/lib/siteMedia";
import {
  FlaskConical,
  BarChart3,
  ScanSearch,
  GaugeCircle,
  FileSpreadsheet,
  Recycle,
  Microscope,
  MonitorCheck,
  ShieldCheck,
  Snowflake,
  Beaker,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";

const heroStats = [
  { value: "24/7", label: "Cold chain monitoring" },
  { value: "100%", label: "Batch verification" },
  { value: "Export", label: "Documentation ready" },
];

const pillars = [
  {
    icon: FlaskConical,
    title: "Consistent quality",
    desc: "Aligned quality across batches, shifts, and production windows.",
    tone: "green" as const,
  },
  {
    icon: BarChart3,
    title: "Data-led decisions",
    desc: "Objective measurements and process metrics you can act on.",
    tone: "red" as const,
  },
  {
    icon: ScanSearch,
    title: "Full visibility",
    desc: "Deeper insight than inspection-only workflows alone.",
    tone: "green" as const,
  },
  {
    icon: GaugeCircle,
    title: "Responsive control",
    desc: "Faster adjustments when the data flags a drift.",
    tone: "red" as const,
  },
  {
    icon: FileSpreadsheet,
    title: "Traceable records",
    desc: "Organized reporting with audit-friendly documentation.",
    tone: "green" as const,
  },
  {
    icon: Recycle,
    title: "Less waste",
    desc: "Tighter controls and shelf-life focus reduce avoidable loss.",
    tone: "red" as const,
  },
];

const microbiologyTests = [
  "Aerobic Plate Count",
  "Anaerobic Plate Count",
  "Coliforms",
  "Lactic Acid Bacteria",
  "E. coli",
  "Enterobacteriaceae",
];

const assuranceRows = [
  {
    icon: Snowflake,
    title: "Cold chain controlled",
    pct: 88,
    tone: "green" as const,
  },
  {
    icon: ShieldCheck,
    title: "HACCP-aligned process",
    pct: 92,
    tone: "red" as const,
  },
  {
    icon: Beaker,
    title: "Batch-level lab checks",
    pct: 90,
    tone: "neutral" as const,
  },
];

/** Wave fills = destination section bg. Use hex in SVG fill (matches globals.css) — avoids var() quirks. Parent section paints behind the SVG’s transparent band. */
const WAVE = {
  toForestGreen: "#2A4E1E",
} as const;

export function QualityAssuranceSection() {
  return (
    <div className="relative overflow-hidden bg-warm-white">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-cream-dark pt-24 pb-10 lg:pt-28 lg:pb-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-light/45 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[0.08] blur-[90px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/[0.07] blur-[85px]" />
        <SectionLeafAccents />

        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
            <nav className="mb-6 flex items-center gap-1.5 text-sm">
              <Link href="/" className="text-text-muted transition-colors hover:text-brand-green">
                Home
              </Link>
              <ChevronRight size={14} className="text-text-light" />
              <span className="font-medium text-text-dark">Quality</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft/90 bg-warm-white/90 px-4 py-2 shadow-soft ring-1 ring-black/[0.03]">
              <Sparkles className="h-3.5 w-3.5 text-brand-green" strokeWidth={2.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-text-muted">
                Labs &amp; process control
              </span>
            </div>

            <h1 className="font-display text-[1.75rem] font-black leading-[1.1] tracking-tight text-text-dark sm:text-4xl lg:text-[2.8rem]">
              Quality, testing &amp;{" "}
              <span className="bg-gradient-to-br from-brand-red to-brand-red-dark bg-clip-text text-transparent">
                assurance
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-text-muted sm:text-lg">
              On-line checks, microbiology, and digital QC — engineered for food safety,
              batch consistency, and export-ready documentation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:gap-4"
            >
            {heroStats.map((s, i) => {
              const green = i !== 1;
              return (
                <div
                  key={s.label}
                  className={`relative overflow-hidden rounded-2xl border px-3 py-4 text-center shadow-[0_10px_36px_rgba(45,42,30,0.06)] ring-1 ring-black/[0.03] sm:rounded-3xl sm:py-5 ${
                    green
                      ? "border-brand-green/20 bg-gradient-to-b from-warm-white to-soft-green/40"
                      : "border-brand-red/18 bg-gradient-to-b from-warm-white to-soft-red/35"
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r opacity-90 ${
                      green
                        ? "from-brand-green via-brand-green/70 to-transparent"
                        : "from-brand-red via-brand-red/65 to-transparent"
                    }`}
                  />
                  <p
                    className={`font-display text-xl font-black tabular-nums sm:text-2xl ${
                      green ? "text-brand-green-dark" : "text-brand-red"
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted sm:text-[11px]">
                    {s.label}
                  </p>
                </div>
              );
            })}
            </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border-soft/80 bg-warm-white shadow-elevated">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/photos/Modern food processing facility inspection.png"
                    alt="Quality inspection in food processing facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/20 bg-black/30 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                      Quality intelligence
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Real-time checks and traceable batch records
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-border-soft/80 p-4 sm:p-5">
                  <div className="rounded-xl border border-brand-green/20 bg-brand-green/[.06] px-3 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Safety Focus</p>
                    <p className="mt-1 text-sm font-semibold text-text-dark">Microbiology validated</p>
                  </div>
                  <div className="rounded-xl border border-brand-red/20 bg-brand-red/[.05] px-3 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">Process Control</p>
                    <p className="mt-1 text-sm font-semibold text-text-dark">Data-backed decisions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

      </section>
      <SectionEdgeOrnament />

      {/* ─── Pillars ─── */}
      <section className="relative border-y border-border-soft/60 bg-warm-white pt-16 pb-2 lg:pt-24 lg:pb-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(103,184,79,0.06),transparent)]" />
        <Container className="relative mb-14">
          <div className="mb-10 text-center lg:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
              What we optimize
            </span>
            <h2 className="font-display mt-3 text-2xl font-black text-text-dark sm:text-3xl lg:text-[2.15rem]">
              Built for{" "}
              <span className="text-brand-green">precision</span>
              {" "}at every step
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Every quality pillar combines practical plant operations with measurable controls, so outcomes stay
              consistent from intake to dispatch.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {pillars.map((item, index) => {
              const Icon = item.icon;
              const isGreen = item.tone === "green";
              const bgUrl = QUALITY_PILLAR_IMAGES[index];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-warm-white shadow-[0_8px_32px_rgba(45,42,30,0.05)] ring-1 ring-black/[0.02] sm:rounded-3xl ${
                    isGreen
                      ? "border-border-soft/80 hover:border-brand-green/30"
                      : "border-border-soft/80 hover:border-brand-red/28"
                  }`}
                >
                  <div className="relative h-36 overflow-hidden sm:h-40">
                    <Image
                      src={bgUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div
                      className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 text-white backdrop-blur-sm ${
                        isGreen ? "bg-brand-green/45" : "bg-brand-red/45"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div
                    className={`absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r ${
                      isGreen
                        ? "from-brand-green/80 via-brand-green/40 to-transparent"
                        : "from-brand-red/80 via-brand-red/35 to-transparent"
                    }`}
                  />
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg font-bold text-text-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>

      </section>
      <SectionEdgeOrnament />

      {/* ─── Lab & systems (dark) ─── */}
      <section
        className="relative pb-0 pt-16 lg:pt-24"
        style={{ backgroundColor: WAVE.toForestGreen }}
        aria-label="Testing and digital oversight"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-green/22 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-black/28 blur-[95px]" />
        <SectionLeafAccents />

        <Container className="relative">
          <div className="mb-10 text-center lg:mb-14">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(103,184,79,0.8)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
                In-house capability
              </span>
            </div>
            <h2 className="font-display text-2xl font-black text-white sm:text-3xl lg:text-[2.25rem]">
              Testing &amp;{" "}
              <span className="text-brand-red">digital oversight</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55 sm:text-base">
              Microbiology coverage and QC software working together from intake to dispatch.
            </p>
          </div>

          <div className="grid gap-8 pb-16 md:pb-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-white/12 bg-[#142610] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.35)] sm:min-h-[360px] lg:min-h-full"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={QUALITY_LAB_VIDEO_POSTER}
              >
                <source src={SITE_VIDEOS.facilityProcessingMp4} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1d3416]/55 via-[#2A4E1E]/65 to-[#0f1f0c]/92" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl" />

              <div className="relative z-[1] mb-6 flex justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.07] shadow-inner backdrop-blur-sm">
                  <Microscope className="h-9 w-9 text-brand-green" strokeWidth={1.75} />
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.07] shadow-inner backdrop-blur-sm">
                  <FlaskConical className="h-9 w-9 text-brand-red" strokeWidth={1.75} />
                </div>
              </div>
              <div className="relative z-[1] space-y-2 text-center">
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  Lab-grade rigour
                </p>
                <p className="text-sm leading-relaxed text-white/55">
                  Structured sampling, controlled environments, and results tied to batch IDs for full traceability.
                </p>
              </div>
              <div className="relative z-[1] mt-6 flex flex-wrap justify-center gap-2">
                {["IQF-ready", "Export docs", "HACCP mindset"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col gap-5 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md lg:p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Microscope className="h-5 w-5 text-brand-green" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    Microbiology
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                </div>
                <h3 className="font-display mb-5 text-xl font-black text-white sm:text-2xl">
                  Batch-wise food safety checks
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {microbiologyTests.map((test, i) => {
                    const g = i % 2 === 0;
                    return (
                      <div
                        key={test}
                        className="flex items-center gap-2.5 rounded-2xl border border-white/12 bg-black/30 px-3 py-2.5 transition-colors hover:border-white/22"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                            g ? "bg-brand-green/30 text-brand-green" : "bg-brand-red/28 text-brand-red"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-medium leading-snug text-white/88">{test}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-6 backdrop-blur-md lg:p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <MonitorCheck className="h-5 w-5 text-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    QC software
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                </div>
                <h3 className="font-display mb-3 text-xl font-black text-white sm:text-2xl">
                  Digital monitoring for consistency
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                  From raw material to dispatch — analytics, traceable records, and faster corrective action when
                  something drifts.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <MonitorCheck className="mb-2 h-5 w-5 text-brand-green" />
                    <p className="text-sm font-semibold text-white/90">Automated capture</p>
                    <p className="mt-1 text-xs text-white/45">Fewer manual gaps in the record.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <Microscope className="mb-2 h-5 w-5 text-brand-red" />
                    <p className="text-sm font-semibold text-white/90">Lab traceability</p>
                    <p className="mt-1 text-xs text-white/45">Results linked to batch &amp; time.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

      </section>
      <SectionEdgeOrnament />

      {/* ─── Trust & certifications ─── */}
      <section className="relative bg-cream-dark py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-20 right-0 h-64 w-64 rounded-full bg-brand-green/[0.06] blur-[80px]" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border-soft/90 bg-gradient-to-b from-warm-white to-cream-light/30 p-6 shadow-elevated ring-1 ring-black/[0.04] sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-green/[0.1] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-1/4 h-32 w-32 rounded-full bg-brand-red/[0.06] blur-3xl" />

            <div className="relative mb-2 inline-flex items-center gap-2 rounded-full border border-border-soft bg-cream-light/50 px-3 py-1">
              <Check className="h-3.5 w-3.5 text-brand-green" strokeWidth={3} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
                Your trust, our promise
              </span>
            </div>
            <h3 className="font-display relative mt-4 max-w-2xl text-2xl font-black leading-tight text-text-dark sm:text-3xl">
              Certifications &amp; discipline that{" "}
              <span className="text-brand-green">travel</span> with every shipment
            </h3>
            <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              Hygiene systems, documentation readiness, and buyer confidence — maintained for domestic and export
              partners alike.
            </p>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
              {assuranceRows.map((row) => {
                const Icon = row.icon;
                const isG = row.tone === "green";
                const isR = row.tone === "red";
                return (
                  <motion.div
                    key={row.title}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className={`relative overflow-hidden rounded-2xl border p-5 shadow-[0_8px_28px_rgba(45,42,30,0.06)] sm:rounded-3xl ${
                      isG
                        ? "border-brand-green/20 bg-gradient-to-b from-soft-green/80 to-warm-white"
                        : isR
                          ? "border-brand-red/18 bg-gradient-to-b from-soft-red/70 to-warm-white"
                          : "border-border-soft bg-gradient-to-b from-cream to-warm-white"
                    }`}
                  >
                    <div
                      className={`mb-3 flex h-11 w-11 items-center justify-center rounded-2xl ${
                        isG
                          ? "bg-brand-green/15 text-brand-green-dark"
                          : isR
                            ? "bg-brand-red/12 text-brand-red"
                            : "bg-text-dark/8 text-text-dark"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <p className="font-display text-sm font-bold text-text-dark sm:text-base">{row.title}</p>
                    <div
                      className={`mt-4 h-1.5 overflow-hidden rounded-full ${
                        isG ? "bg-brand-green/20" : isR ? "bg-brand-red/20" : "bg-border-soft"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full ${
                          isG ? "bg-brand-green" : isR ? "bg-brand-red" : "bg-text-dark/75"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
