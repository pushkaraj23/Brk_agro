import type { Metadata } from "next";

/** Canonical site origin — keep in sync with `metadataBase` in `app/layout.tsx`. */
export const siteUrl = "https://www.brkagro.com";

export type OgImageSpec = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export const defaultOgImage: OgImageSpec = {
  url: "/brk_logo.png",
  width: 1200,
  height: 630,
  alt: "BRK Agro — frozen corn and retort corn manufacturer from India",
};

/**
 * Consistent social cards for static routes. Product detail pages should pass a product image when available.
 */
export function pageSocialMetadata(input: {
  title: string;
  description: string;
  path: string;
  ogImage?: OgImageSpec;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const image = input.ogImage ?? defaultOgImage;
  return {
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      type: "website",
      locale: "en_IN",
      siteName: "BRK Agro",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image.url],
    },
  };
}
