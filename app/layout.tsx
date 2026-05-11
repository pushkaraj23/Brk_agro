import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { FloatingSocials } from "@/components/ui/FloatingSocials";
import { ImageProtection } from "@/components/ui/ImageProtection";
import { siteConfig } from "@/lib/constants";
import { defaultOgImage } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brkagro.com"),
  title: {
    default: "BRK Agro | Premium Frozen Food from India",
    template: "%s | BRK Agro",
  },
  description: siteConfig.description,
  keywords: [
    "frozen corn",
    "retort corn",
    "corn exporter india",
    "frozen corn manufacturer",
    "retort corn manufacturer",
    "IQF",
    "frozen food manufacturer india",
    "frozen food exporter",
    "BRK Agro",
    "sweet corn kernels frozen",
    "vacuum packed corn on cobs",
    "corn processing unit india",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.brkagro.com",
    siteName: "BRK Agro",
    title: "BRK Agro | Premium Frozen Food from India",
    description:
      "BRK Agro is a leading processor and exporter of premium quality frozen food from India — trusted processing infrastructure and export-ready operations.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRK Agro | Premium Frozen Food from India",
    description:
      "Premium quality frozen food for global buyers, distributors, and food service partners — from a leading processor and exporter in India.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ImageProtection />
        <CursorFollower />
        <FloatingSocials />
        <Header />
        <main className="flex-1 pt-7">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
