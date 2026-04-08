import type { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — BRK Agro | Get in Touch",
  description:
    "Contact BRK Agro for export enquiries, product samples, pricing, or partnership opportunities. Our team responds within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
