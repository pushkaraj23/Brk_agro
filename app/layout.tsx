import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorFollower } from "@/components/ui/CursorFollower";
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
  title:
    "BRK Agro — Premium Frozen Fruits & Vegetables Manufacturer & Exporter",
  description:
    "BRK Agro is a leading manufacturer and exporter of premium frozen fruits and vegetables. Advanced IQF processing, export-ready packaging, and trusted farm sourcing.",
  keywords: [
    "frozen vegetables",
    "frozen fruits",
    "IQF",
    "frozen food exporter",
    "BRK Agro",
    "frozen sweet corn",
    "frozen green peas",
    "frozen food manufacturer",
  ],
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
    >
      <body className="flex min-h-screen flex-col">
        <CursorFollower />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
