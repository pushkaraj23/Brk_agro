"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { Building2, Mail, Phone, X } from "lucide-react";

const rentalHighlights = [
  "Cold room rental facility for frozen and cold products",
  "7500 MT storage capacity for scalable business needs",
  "Packhouse, blast freezer, and ripening chambers available",
  "100% Freon plant focused on efficient cooling operations",
  "Solar-installed green energy plant for sustainable operations",
  "Latest software-based inventory management and monitoring",
] as const;

const rentalPhotos = [
  {
    src: "/photos/cold-storage.png",
    alt: "Cold storage exterior",
    label: "Cold storage facility",
  },
  {
    src: "/photos/cold-storage-interior-1.png",
    alt: "Cold storage interior section one",
    label: "Cold storage interior",
  },
  {
    src: "/photos/cold-storage-interior-2.png",
    alt: "Cold storage interior section two",
    label: "Temperature controlled rooms",
  },
  {
    src: "/photos/cold-storage-interior3.png",
    alt: "Cold storage interior section three",
    label: "Operational storage lines",
  },
  {
    src: "/photos/Industrial compound with modern architecture.png",
    alt: "Modern industrial compound for cold storage operations",
    label: "Modern rental-ready facility",
  },
] as const;

export function ColdRoomRentalSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    requirement: "",
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rentalPhotos.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isEnquiryOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsEnquiryOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isEnquiryOpen]);

  const openEnquiryModal = () => setIsEnquiryOpen(true);
  const closeEnquiryModal = () => setIsEnquiryOpen(false);

  const handleFormChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Cold Storage Rental Enquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Company: ${formData.company || "Not specified"}`,
        "",
        "Requirement:",
        formData.requirement || "Not specified",
      ].join("\n")
    );

    window.location.href = `mailto:operationbrkagro@gmail.com,brkcoldkondhapuri@gmail.com?subject=${subject}&body=${body}`;
    closeEnquiryModal();
  };

  return (
    <section className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-brand-green/[.05] blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-red/[.04] blur-[70px]" />

        <Container className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green">
              Cold Storage Rental Service
            </span>
            <span className="h-px w-10 bg-brand-green/50" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>
              <h2 className="font-display mb-4 text-3xl font-semibold leading-tight tracking-tight text-text-dark sm:text-4xl">
                Rent Our Cold Storage{" "}
                <span className="text-brand-green">Rooms</span>
              </h2>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
                Cold storage rooms are available on rent for frozen and chilled
                products.
              </p>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {rentalHighlights.map((item, idx) => (
                  <li
                    key={item}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium text-text-dark ${
                      idx % 2 === 0
                        ? "border-brand-green/15 bg-brand-green/[.05]"
                        : "border-brand-red/12 bg-brand-red/[.04]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={openEnquiryModal}
                  className="inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-green-dark"
                >
                  Enquire About Cold Room Rental
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-white p-2 shadow-elevated">
              <div className="relative h-[18rem] overflow-hidden rounded-[1.15rem] sm:h-[20rem] lg:h-[24rem]">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {rentalPhotos.map((photo, idx) => (
                    <div key={photo.src} className="relative h-full w-full flex-shrink-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  {rentalPhotos[activeIndex]?.label}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                {rentalPhotos.map((photo, idx) => (
                  <button
                    key={`rental-dot-${photo.src}`}
                    type="button"
                    aria-label={`Show cold storage image ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-8 bg-brand-green" : "w-2.5 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {isEnquiryOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Cold storage rental enquiry"
          onClick={closeEnquiryModal}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border-soft bg-warm-white shadow-[0_24px_80px_rgba(8,20,13,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeEnquiryModal}
              className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-white text-text-muted transition-colors hover:text-text-dark"
              aria-label="Close enquiry popup"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[92vh] overflow-y-auto overscroll-y-contain [scrollbar-gutter:stable] pr-2 sm:pr-3">
            <div className="border-b border-border-soft/80 bg-gradient-to-r from-brand-green/[0.08] via-warm-white to-brand-red/[0.06] px-6 py-6 sm:px-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green">
                Cold Storage Rental
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-text-dark sm:text-[2rem]">
                Rental enquiry options
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-text-muted sm:text-base">
                Choose a direct call for immediate assistance or send a short enquiry form and our team will get back to you.
              </p>
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.02fr_1fr] lg:gap-8">
              <div className="rounded-2xl border border-brand-green/20 bg-gradient-to-b from-brand-green/[0.08] to-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Option 1</p>
                <h4 className="mt-2 font-display text-xl font-semibold text-text-dark">Enquire by direct call</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  For quick availability and pricing updates, call us directly.
                </p>

                <a
                  href="tel:+918956801562"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white shadow-[0_0_0_0_rgba(103,184,79,0.45)] transition-all duration-300 hover:bg-brand-green-dark hover:shadow-[0_0_26px_2px_rgba(103,184,79,0.45)]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: +91 895 680 1562
                </a>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-border-soft bg-white p-4">
                    <p className="text-base font-semibold text-text-dark">Plant I</p>
                    <p className="mt-1 text-sm text-text-muted">A/P Rautwadi, Shikrapur, Tal. Shirur, Dist. Pune-412208.</p>
                    <a href="mailto:operationbrkagro@gmail.com" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark">
                      <Mail className="h-4 w-4" />
                      operationbrkagro@gmail.com
                    </a>
                    <a href="tel:+918956801562" className="mt-1 block text-sm font-semibold text-text-dark hover:text-brand-green">
                      +91 895 680 1562
                    </a>
                  </div>
                  <div className="rounded-xl border border-border-soft bg-white p-4">
                    <p className="text-base font-semibold text-text-dark">Plant II</p>
                    <p className="mt-1 text-sm text-text-muted">A/P Kondhapuri, Tal. Shirur, Dist. Pune-412209.</p>
                    <a href="mailto:brkcoldkondhapuri@gmail.com" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark">
                      <Mail className="h-4 w-4" />
                      brkcoldkondhapuri@gmail.com
                    </a>
                    <a href="tel:+918956801565" className="mt-1 block text-sm font-semibold text-text-dark hover:text-brand-green">
                      +91 895 680 1565
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border-soft bg-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Option 2</p>
                <h4 className="mt-2 font-display text-xl font-semibold text-text-dark">Brief enquiry form</h4>
                <p className="mt-2 text-sm text-text-muted">
                  Share the basics and we will follow up with suitable cold room rental details.
                </p>

                <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">Name</span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleFormChange("name")}
                      className="w-full rounded-xl border border-border-soft bg-warm-white px-3.5 py-2.5 text-sm text-text-dark outline-none transition-colors focus:border-brand-green"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">Phone</span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleFormChange("phone")}
                      className="w-full rounded-xl border border-border-soft bg-warm-white px-3.5 py-2.5 text-sm text-text-dark outline-none transition-colors focus:border-brand-green"
                      placeholder="Your contact number"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">Company (optional)</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={handleFormChange("company")}
                      className="w-full rounded-xl border border-border-soft bg-warm-white px-3.5 py-2.5 text-sm text-text-dark outline-none transition-colors focus:border-brand-green"
                      placeholder="Company / business name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">Requirement</span>
                    <textarea
                      required
                      value={formData.requirement}
                      onChange={handleFormChange("requirement")}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-border-soft bg-warm-white px-3.5 py-2.5 text-sm text-text-dark outline-none transition-colors focus:border-brand-green"
                      placeholder="Storage type, expected quantity, preferred timeline..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-text-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
                  >
                    <Building2 className="h-4 w-4" />
                    Submit enquiry
                  </button>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
