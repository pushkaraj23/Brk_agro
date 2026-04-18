"use client";

import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { Container } from "@/components/ui/Container";
import { TrustConsistencyContent } from "@/components/sections/TrustConsistencyContent";

export function InfrastructureAssurance() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#2A4E1E" }}>
      <WaveDivider fill="var(--color-cream-dark)" />

      <div className="relative bg-cream-dark py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[.07] blur-[90px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-red/[0.06] blur-[80px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-light/50 via-transparent to-cream-dark/30" />
        <SectionLeafAccents />

        <Container className="relative">
          <TrustConsistencyContent />
        </Container>
      </div>
    </section>
  );
}
