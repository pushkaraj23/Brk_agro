import type { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Contact BRK Agro - Frozen Corn Export Enquiries";
const description =
  "Contact BRK Agro for Frozen Corn and Retort Corn export enquiries, samples, pricing, specifications, and distribution partnerships in India and overseas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact frozen corn supplier",
    "retort corn enquiry",
    "frozen food export contact india",
    "brk agro contact",
    "pune shirur corn exporter contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  ...pageSocialMetadata({ title, description, path: "/contact" }),
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <SectionEdgeOrnament />
      <ContactSection />
    </>
  );
}
