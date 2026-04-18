"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { enquiryTypes } from "@/lib/constants";

type ProductEnquiryFormProps = {
  productName: string;
  productShortName: string;
  variant?: "green" | "red";
};

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
        htmlFor={`pe-${name}`}
        className="mb-1.5 block text-sm font-medium text-text-dark"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <input
        id={`pe-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border-soft bg-cream/60 px-3.5 py-2.5 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
      />
    </div>
  );
}

export function ProductEnquiryForm({
  productName,
  productShortName,
  variant = "green",
}: ProductEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isGreen = variant === "green";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={`rounded-2xl border bg-warm-white p-5 shadow-elevated sm:p-6 ${
        isGreen
          ? "border-brand-green/15 ring-1 ring-brand-green/[.08]"
          : "border-brand-red/12 ring-1 ring-brand-red/[.06]"
      }`}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
            isGreen ? "bg-soft-green" : "bg-soft-red"
          }`}
        >
          <MessageSquare
            className={`h-5 w-5 ${isGreen ? "text-brand-green" : "text-brand-red"}`}
          />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
            Enquiry
          </p>
          <p className="font-display text-base font-bold leading-snug text-text-dark">
            {productShortName}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            Samples, specs, pricing — our team replies within 24 hours.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-soft-green ring-4 ring-brand-green/15">
            <CheckCircle size={28} className="text-brand-green" />
          </div>
          <h3 className="font-display mb-1.5 text-lg font-bold text-text-dark">
            Thank you!
          </h3>
          <p className="max-w-[240px] text-sm text-text-muted">
            Your enquiry has been received. Our export team will get back to you
            soon.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 cursor-pointer text-sm font-semibold text-brand-green underline-offset-4 hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <input type="hidden" name="product" value={productName} />
          <InputField
            label="Full Name"
            name="name"
            placeholder="Your name"
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+91 …"
          />
          <InputField
            label="Company"
            name="company"
            placeholder="Company name"
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-dark">
              Enquiry type
            </label>
            <select
              name="enquiryType"
              className="w-full rounded-xl border border-border-soft bg-cream/60 px-3.5 py-2.5 text-sm text-text-dark outline-none transition-all duration-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              defaultValue="Product Enquiry"
              required
            >
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
              rows={3}
              placeholder={`I'm interested in ${productShortName}…`}
              className="w-full resize-none rounded-xl border border-border-soft bg-cream/60 px-3.5 py-2.5 text-sm text-text-dark outline-none transition-all duration-300 placeholder:text-text-light focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              required
            />
          </div>
          <Button
            type="submit"
            size="md"
            variant={isGreen ? "primary" : "accent"}
            iconRight={<Send size={15} />}
            className="w-full"
          >
            Send enquiry
          </Button>
        </form>
      )}
    </div>
  );
}
