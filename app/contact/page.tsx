import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — BRK Agro | Get in Touch",
  description:
    "Contact BRK Agro for export enquiries, product samples, pricing, or partnership opportunities. Our team responds within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Reach out for product details, pricing, samples, or partnership opportunities. Our export team is ready to help."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactSection />
    </>
  );
}
