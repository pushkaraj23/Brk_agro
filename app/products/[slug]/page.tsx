import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/constants";
import { ProductDetail } from "./ProductDetail";
import { defaultOgImage, pageSocialMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const ogImage = product.image
    ? {
        url: product.image,
        width: 1200,
        height: 630,
        alt: `${product.name} — BRK Agro`,
      }
    : defaultOgImage;

  const socialTitle = `${product.name} | BRK Agro`;

  return {
    title: `${product.name} — Specifications`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      `${product.shortName.toLowerCase()} exporter`,
      "frozen corn manufacturer",
      "retort corn supplier",
      ...product.features.map((feature) => feature.toLowerCase()),
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    ...pageSocialMetadata({
      title: socialTitle,
      description: product.description,
      path: `/products/${product.slug}`,
      ogImage,
    }),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "BRK Agro" },
    manufacturer: { "@type": "Organization", name: "BRK Agro", url: siteUrl },
    image: product.image
      ? [`${siteUrl}${product.image}`]
      : [`${siteUrl}/brk_logo.png`],
    category: "Frozen vegetables — corn",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
