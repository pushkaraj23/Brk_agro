"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LeafDecor } from "@/components/decorative/LeafDecor";
import { contactInfo, enquiryTypes } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream" />
      <LeafDecor className="absolute top-16 right-12 h-12 w-8 rotate-[20deg] text-brand-green/6 hidden lg:block" />
      <LeafDecor className="absolute bottom-20 left-8 h-10 w-6 -rotate-[15deg] text-brand-green/5 hidden lg:block" />

      <Container className="relative">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build a Partnership"
          subtitle="Reach out for product specifications, pricing, samples, or any export enquiry. Our team responds within 24 hours."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12 lg:grid-cols-5"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border-soft bg-warm-white p-8 shadow-card lg:col-span-3 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-soft-green">
                  <CheckCircle size={32} className="text-brand-green" />
                </div>
                <h3 className="font-display mb-2 text-2xl font-bold text-text-dark">Thank You!</h3>
                <p className="max-w-sm text-text-muted">
                  Your enquiry has been received. Our export team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 cursor-pointer text-sm font-medium text-brand-green underline-offset-4 hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField label="Full Name" name="name" placeholder="John Smith" required />
                  <InputField label="Email Address" name="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField label="Phone" name="phone" type="tel" placeholder="+1 234 567 890" />
                  <InputField label="Company Name" name="company" placeholder="Your company" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">Enquiry Type</label>
                  <select
                    name="enquiryType"
                    className="w-full rounded-xl border border-border-soft bg-cream/50 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select enquiry type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-dark">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-border-soft bg-cream/50 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    required
                  />
                </div>
                <Button type="submit" size="lg" iconRight={<Send size={16} />}>
                  Send Enquiry
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl border border-border-soft bg-warm-white p-8 shadow-card">
              <h3 className="font-display mb-6 text-lg font-bold text-text-dark">Contact Information</h3>
              <div className="space-y-5">
                <InfoRow icon={<MapPin size={18} />} label="Address" color="red">{contactInfo.address}</InfoRow>
                <InfoRow icon={<Phone size={18} />} label="Phone" color="green">{contactInfo.phone}</InfoRow>
                <InfoRow icon={<Mail size={18} />} label="Email" color="red">{contactInfo.email}</InfoRow>
                <InfoRow icon={<Globe size={18} />} label="Website" color="green">{contactInfo.website}</InfoRow>
              </div>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-br from-soft-green to-cream shadow-soft">
              <div className="flex flex-col items-center gap-2 text-center">
                <MapPin size={32} className="text-brand-green/35" />
                <p className="font-display text-sm font-medium text-text-muted">Map Location</p>
                <p className="max-w-[180px] text-xs text-text-light">Nashik, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function InputField({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-dark">
        {label}{required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-border-soft bg-cream/50 px-4 py-3 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
      />
    </div>
  );
}

function InfoRow({ icon, label, children, color = "green" }: { icon: React.ReactNode; label: string; children: React.ReactNode; color?: "green" | "red" }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${color === "red" ? "bg-soft-red text-brand-red" : "bg-soft-green text-brand-green"}`}>{icon}</div>
      <div>
        <p className="text-xs font-medium text-text-muted">{label}</p>
        <p className="text-sm font-medium text-text-dark">{children}</p>
      </div>
    </div>
  );
}
