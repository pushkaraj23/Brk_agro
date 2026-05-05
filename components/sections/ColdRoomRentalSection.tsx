"use client";

import { useEffect, useState } from "react";
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
    src: "/photos/cold-storage.png",
    alt: "Cold storage exterior",
    label: "Cold storage facility",
  },
  {
    src: "/photos/cold-storage-interior-1.png",
    alt: "Cold storage interior section one",
    label: "Cold storage interior",
  },
  {
    src: "/photos/cold-storage-interior-2.png",
    alt: "Cold storage interior section two",
    label: "Temperature controlled rooms",
  },
  {
    src: "/photos/cold-storage-interior3.png",
    alt: "Cold storage interior section three",
    label: "Operational storage lines",
  },
  {
    src: "/photos/Industrial compound with modern architecture.png",
    alt: "Modern industrial compound for cold storage operations",
    label: "Modern rental-ready facility",
  },
] as const;

export function ColdRoomRentalSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rentalPhotos.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

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
                Rent Our Cold Storage{" "}
                <span className="text-brand-green">Rooms</span>
              </h2>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
                Cold storage rooms are available on rent for frozen and chilled
                products.
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

            <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-white p-2 shadow-elevated">
              <div className="relative h-[18rem] overflow-hidden rounded-[1.15rem] sm:h-[20rem] lg:h-[24rem]">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {rentalPhotos.map((photo, idx) => (
                    <div key={photo.src} className="relative h-full w-full flex-shrink-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  {rentalPhotos[activeIndex]?.label}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                {rentalPhotos.map((photo, idx) => (
                  <button
                    key={`rental-dot-${photo.src}`}
                    type="button"
                    aria-label={`Show cold storage image ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-8 bg-brand-green" : "w-2.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
