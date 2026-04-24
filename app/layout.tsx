import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { FloatingSocials } from "@/components/ui/FloatingSocials";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brkagro.com"),
  title: {
    default: "BRK Agro | Frozen Corn & Retort Corn Manufacturer from India",
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
    title: "BRK Agro | Frozen Corn & Retort Corn Manufacturer from India",
    description:
      "Trusted processor and exporter of Frozen Corn and Retort Corn with advanced IQF and retort technology.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRK Agro | Frozen Corn & Retort Corn Manufacturer",
    description:
      "Premium Frozen Corn and Retort Corn for global buyers, distributors, and HoReCa partners.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <CursorFollower />
        <FloatingSocials />
        <Header />
        <main className="flex-1 pt-7">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
