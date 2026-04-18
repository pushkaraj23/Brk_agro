"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.9 11.9 0 0 0 12.03 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.16 1.59 5.97L0 24l6.21-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.6 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.21-3.5-8.4Zm-8.49 18.35h-.01a9.92 9.92 0 0 1-5.07-1.39l-.36-.21-3.68.96.98-3.59-.23-.37a9.93 9.93 0 0 1-1.53-5.25c0-5.5 4.47-9.97 9.96-9.97a9.9 9.9 0 0 1 7.05 2.92 9.88 9.88 0 0 1 2.9 7.05c0 5.5-4.47 9.97-9.96 9.97Zm5.46-7.45c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35Z"
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

const socialItems = [
  {
    href: socialLinks.whatsapp,
    label: "WhatsApp",
    icon: WhatsAppIcon,
    className:
      "border-[#25D366]/35 bg-gradient-to-br from-[#25D366]/12 to-[#128C7E]/8 text-[#128C7E] shadow-[0_4px_14px_rgba(37,211,102,0.2)] hover:border-[#25D366]/60 hover:from-[#25D366] hover:to-[#20BD5A] hover:text-white hover:shadow-[0_8px_28px_rgba(37,211,102,0.45)]",
  },
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: InstagramIcon,
    className:
      "border-fuchsia-300/40 bg-gradient-to-br from-fuchsia-500/12 via-rose-400/10 to-amber-400/12 text-rose-600 shadow-[0_4px_14px_rgba(236,72,153,0.18)] hover:border-transparent hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:shadow-[0_8px_28px_rgba(225,48,108,0.35)]",
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
    className:
      "border-[#0A66C2]/35 bg-gradient-to-br from-[#0A66C2]/12 to-[#004182]/10 text-[#0A66C2] shadow-[0_4px_14px_rgba(10,102,194,0.22)] hover:border-[#0A66C2]/70 hover:from-[#0A66C2] hover:to-[#004182] hover:text-white hover:shadow-[0_8px_28px_rgba(10,102,194,0.45)]",
  },
];

export function FloatingSocials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="fixed right-4 bottom-6 z-[60] sm:right-6 sm:bottom-8"
      initial={shouldReduceMotion ? false : { x: 28 }}
      animate={shouldReduceMotion ? undefined : { x: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-row items-center gap-2 rounded-[1.35rem] sm:gap-2.5 ">
        {socialItems.map(({ href, label, icon: Icon, className }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            initial={shouldReduceMotion ? false : { x: 10, scale: 0.92 }}
            animate={shouldReduceMotion ? undefined : { x: 0, scale: 1 }}
            transition={{
              delay: 0.06 * index,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.08,
                    y: -2,
                  }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
            className={`group relative inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl border backdrop-blur-lg backdrop-saturate-150 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:h-14 sm:w-14 ${className}`}
          >
            <Icon className="relative h-[22px] w-[22px] drop-shadow-sm sm:h-6 sm:w-6" />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );  
}
