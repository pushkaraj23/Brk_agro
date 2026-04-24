"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { Button } from "@/components/ui/Button";
import { contactInfo, enquiryTypes } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream">
      <WaveDivider fill="var(--color-warm-white)" />

      <div className="relative bg-warm-white py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7A6230 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-green/[.04] blur-[80px]" />
        <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-brand-red/[.03] blur-[70px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-brand-green/40" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
                Get in Touch
              </span>
              <span className="h-px w-8 bg-brand-green/40" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-text-dark sm:text-4xl lg:text-[2.6rem]">
              Let&apos;s Build a{" "}
              <span className="text-brand-red">Partnership</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
              Product specifications, pricing, samples, or export enquiries —
              our team typically responds within 24 hours.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-8 lg:grid-cols-5 lg:gap-10"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border-soft bg-warm-white p-7 shadow-elevated sm:p-9 lg:col-span-3"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft-green">
                  <MessageSquare className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Enquiry Form
                  </p>
                  <p className="font-display text-lg font-bold text-text-dark">
                    Send us a message
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-soft-green ring-4 ring-brand-green/15">
                    <CheckCircle size={32} className="text-brand-green" />
                  </div>
                  <h3 className="font-display mb-2 text-2xl font-bold text-text-dark">
                    Thank You!
                  </h3>
                  <p className="max-w-sm text-text-muted">
                    Your enquiry has been received. Our export team will get
                    back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 cursor-pointer text-sm font-semibold text-brand-green underline-offset-4 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Full Name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                    />
                    <InputField
                      label="Company Name"
                      name="company"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      className="w-full rounded-xl border border-border-soft bg-cream/60 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-dark">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-none rounded-xl border border-border-soft bg-cream/60 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    iconRight={<Send size={16} />}
                    className="w-full sm:w-auto"
                  >
                    Send Enquiry
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-border-soft bg-gradient-to-br from-warm-white to-cream/80 p-7 shadow-card sm:p-8">
                <h3 className="font-display mb-6 text-lg font-bold text-text-dark">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <InfoRow
                    icon={<MapPin size={18} />}
                    label="Address"
                    color="red"
                  >
                    {contactInfo.address}
                  </InfoRow>
                  <InfoRow
                    icon={<Phone size={18} />}
                    label="Phone"
                    color="green"
                  >
                    {contactInfo.phone} ({contactInfo.contactName})
                  </InfoRow>
                  <InfoRow
                    icon={<Mail size={18} />}
                    label="Email"
                    color="red"
                  >
                    {contactInfo.email}
                  </InfoRow>
                  <InfoRow
                    icon={<Mail size={18} />}
                    label="Direct email"
                    color="green"
                  >
                    {contactInfo.directEmail}
                  </InfoRow>
                  <InfoRow
                    icon={<Globe size={18} />}
                    label="Website"
                    color="green"
                  >
                    {contactInfo.website}
                  </InfoRow>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-br from-brand-green/[.09] via-soft-green to-cream-dark/40 p-8 shadow-card">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-green/15 blur-2xl" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-white shadow-soft">
                    <MapPin size={26} className="text-brand-green" />
                  </div>
                  <p className="font-display text-base font-bold text-text-dark">
                    Shikrapur, Tal. Shirur, Pune
                  </p>
                  <p className="mt-1 text-sm text-text-muted">India</p>
                  <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-text-light">
                    Processing unit visits by appointment for qualified buyers
                    and partners.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-text-dark"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border-soft bg-cream/60 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
  color = "green",
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  color?: "green" | "red";
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
          color === "red"
            ? "bg-soft-red text-brand-red"
            : "bg-soft-green text-brand-green"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-text-muted">{label}</p>
        <p className="text-sm font-medium text-text-dark">{children}</p>
      </div>
    </div>
  );
}
