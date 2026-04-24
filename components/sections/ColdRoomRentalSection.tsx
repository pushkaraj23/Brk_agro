"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";

const rentalHighlights = [
  "Cold room rental facility for frozen and cold products",
  "7500 MT storage capacity for scalable business needs",
  "Packhouse, blast freezer, and ripening chambers available",
  "100% Freon plant focused on efficient cooling operations",
  "Solar-installed green energy plant for sustainable operations",
  "Latest software-based inventory management and monitoring",
] as const;

const rentalPhotos = [
  {
    src: "/photos/Solar-powered facility in rural landscape.png",
    alt: "Solar-powered cold storage facility in rural landscape",
    label: "Solar-powered operations",
  },
  {
    src: "/photos/Industrial landscape with solar energy fields.png",
    alt: "Industrial cold storage landscape with solar energy fields",
    label: "Energy-efficient infrastructure",
  },
  {
    src: "/photos/Industrial compound with modern architecture.png",
    alt: "Modern industrial compound for cold room rental services",
    label: "Modern rental-ready facility",
  },
] as const;

export function ColdRoomRentalSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-red/[.04] blur-[70px]" />

        <Container className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green">
              Cold Storage Rental Service
            </span>
            <span className="h-px w-10 bg-brand-green/50" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <h2 className="font-display mb-4 text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl">
                Rent Our Solar-Installed{" "}
                <span className="text-brand-green">Cold Rooms</span>
              </h2>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
                BRK Agro now offers cold room rental for businesses that need
                dependable frozen and chilled storage. Our facility combines
                large capacity, modern handling systems, and solar-installed
                infrastructure for reliable and energy-conscious operations.
              </p>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {rentalHighlights.map((item, idx) => (
                  <li
                    key={item}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium text-text-dark ${
                      idx % 2 === 0
                        ? "border-brand-green/15 bg-brand-green/[.05]"
                        : "border-brand-red/12 bg-brand-red/[.04]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-green-dark"
                >
                  Enquire About Cold Room Rental
                </Link>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-border-soft bg-white p-1.5 shadow-elevated">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem]">
                  <Image
                    src={rentalPhotos[0].src}
                    alt={rentalPhotos[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                    {rentalPhotos[0].label}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {rentalPhotos.slice(1).map((photo) => (
                  <div
                    key={photo.src}
                    className="group relative overflow-hidden rounded-2xl border border-border-soft bg-white p-1.5 shadow-card"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                        {photo.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
