import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { SectionLeafAccents } from "@/components/decorative/SectionLeafAccents";
import { siteConfig, navLinks, contactInfo, products } from "@/lib/constants";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const socialIconClass =
  "h-[18px] w-[18px] text-white/45 transition-colors hover:text-brand-green sm:h-5 sm:w-5";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.001-4.123 2.062 2.062 0 0 1 .001 4.123zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const footerProducts = products;

  return (
    <footer className="relative bg-[#2D2A1E]">
      <WaveDivider fill="#2D2A1E" />

      <div className="relative text-white">
        <SectionLeafAccents />

        <Container>
          <div className="grid grid-cols-1 gap-12 pt-14 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="mb-5 inline-flex">
                <Image
                  src="/brk_logo.png"
                  alt="BRK Agro"
                  width={130}
                  height={44}
                  className="h-11 w-auto object-contain brightness-0 invert opacity-90"
                  style={{ width: "auto" }}
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
                {footerProducts.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="transition-colors hover:text-brand-green"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
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
                  <span>
                    {contactInfo.email} · {contactInfo.directEmail}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe size={15} className="flex-shrink-0 text-brand-green" />
                  <span>{contactInfo.website}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex min-h-[3rem] flex-nowrap items-center justify-between gap-2 border-t border-white/10 py-6 sm:gap-4">
            <p className="min-w-0 max-w-[32%] truncate text-[10px] leading-tight text-white/30 sm:max-w-[38%] sm:text-xs md:max-w-[42%] lg:max-w-none">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="min-w-0 flex-1 px-1 text-center text-[9px] leading-tight text-white/25 sm:text-[11px] sm:leading-snug md:px-2 md:text-xs lg:text-sm">
              Designed and Developed by{" "}
              <a
                href="https://fibonce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 underline decoration-white/20 underline-offset-2 transition-colors hover:text-brand-green hover:decoration-brand-green/50"
              >
                Fibonce Tech Solutions
              </a>
              .
            </p>
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
              >
                <LinkedInIcon className={socialIconClass} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="inline-flex rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
              >
                <XIcon className={socialIconClass} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
              >
                <InstagramIcon className={socialIconClass} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
