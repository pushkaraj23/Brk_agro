import type { Metadata } from "next";
import { ProductsHero } from "./ProductsHero";
import { ProductShowcase } from "./ProductShowcase";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Products — Frozen Food Range | BRK Agro";
const description =
  "BRK Agro is a leading processor and exporter of premium quality frozen food from India. Explore IQF vegetables, Frozen Corn kernels, Retort Corn, and more — specs, packaging, and export-focused quality.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "frozen corn product",
    "retort corn product",
    "sweet corn kernels frozen",
    "vacuum packed corn on cobs",
    "corn export products",
    "iqf sweet corn india",
  ],
  alternates: {
    canonical: "/products",
  },
  ...pageSocialMetadata({ title, description, path: "/products" }),
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <SectionEdgeOrnament />
      <ProductShowcase />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
