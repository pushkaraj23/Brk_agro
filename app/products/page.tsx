import type { Metadata } from "next";
import { ProductsHero } from "./ProductsHero";
import { ProductShowcase } from "./ProductShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Products - Frozen Corn & Retort Corn";
const description =
  "BRK Agro product range: IQF Frozen Corn kernels and Retort Corn on the cob — specifications, packaging options, and export-focused quality.";

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
      <ProductShowcase />
      <CTASection />
    </>
  );
}
