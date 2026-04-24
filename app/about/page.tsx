import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CompanyStats } from "./CompanyStats";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { CTASection } from "@/components/sections/CTASection";
import { ColdRoomRentalSection } from "@/components/sections/ColdRoomRentalSection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "About BRK Agro - Frozen Corn Processing Company";
const description =
  "Learn about BRK Agro — Frozen Corn and Retort Corn processor in Shikrapur, Pune district, Maharashtra, India — mission, vision, IQF and retort focus, solar-installed infrastructure, cold room rental services, hygiene, and export partnerships.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about brk agro",
    "frozen corn company india",
    "retort corn supplier",
    "frozen food exporter india",
    "pune shirur frozen food manufacturer",
    "cold room on rent",
    "solar powered cold storage",
  ],
  alternates: {
    canonical: "/about",
  },
  ...pageSocialMetadata({ title, description, path: "/about" }),
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SectionEdgeOrnament />
      <AboutSection />
      <SectionEdgeOrnament />
      <MissionVisionSection />
      <SectionEdgeOrnament />
      <CompanyStats />
      <SectionEdgeOrnament />
      <ColdRoomRentalSection />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
