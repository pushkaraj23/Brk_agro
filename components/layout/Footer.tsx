import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { siteConfig, navLinks, contactInfo } from "@/lib/constants";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative" style={{ backgroundColor: "#2A4E1E" }}>
      <WaveDivider fill="#2D2A1E" />

      <div className="relative bg-[#2D2A1E] text-white">
        {/* Decorative */}
        <LeafDecor className="absolute top-12 right-16 h-12 w-8 rotate-[20deg] text-brand-green/10 hidden lg:block" />
        <LeafDecor className="absolute bottom-24 left-12 h-10 w-6 -rotate-[15deg] text-brand-green/8 hidden lg:block" />

        <Container>
          <div className="grid grid-cols-1 gap-12 pt-8 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="mb-5 inline-flex">
                <Image
                  src="/brk_logo.png"
                  alt="BRK Agro"
                  width={130}
                  height={44}
                  className="h-11 w-auto object-contain brightness-0 invert opacity-90"
                />
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-white/45">
                {siteConfig.description}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold tracking-wider text-white/70 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 transition-colors hover:text-brand-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold tracking-wider text-white/70 uppercase">
                Our Products
              </h3>
              <ul className="space-y-2.5 text-sm text-white/45">
                <li>Frozen Sweet Corn Kernels</li>
                <li>Frozen Green Peas</li>
                <li>Frozen Cut Beans</li>
                <li>Frozen Cauliflower</li>
                <li>Frozen Diced Carrot</li>
                <li>Corn on Cobs</li>
                <li>Frozen French Fries</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-display text-sm font-semibold tracking-wider text-white/70 uppercase">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-white/45">
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-red" />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="flex-shrink-0 text-brand-green" />
                  <span>{contactInfo.phone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="flex-shrink-0 text-brand-red" />
                  <span>{contactInfo.email}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe size={15} className="flex-shrink-0 text-brand-green" />
                  <span>{contactInfo.website}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
            <p className="text-sm text-white/30">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-sm text-white/30 transition-colors hover:text-brand-green">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
