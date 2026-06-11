import { contactInfo } from "@/lib/constants";

/** Inbox for all website enquiry forms */
export const enquiryRecipientEmail = contactInfo.email;

export type EnquirySource = "contact" | "product" | "cold-storage";

export type EnquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  enquiryType: string;
  message: string;
  product?: string;
  source: EnquirySource;
  /** Honeypot — must stay empty */
  website?: string;
};

export function formatEnquiryEmailBody(payload: EnquiryPayload): string {
  const lines = [
    `Source: ${payload.source}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.company ? `Company: ${payload.company}` : null,
    `Enquiry type: ${payload.enquiryType}`,
    payload.product ? `Product: ${payload.product}` : null,
    "",
    "Message:",
    payload.message,
  ];
  return lines.filter((line): line is string => line !== null).join("\n");
}

export function enquiryEmailSubject(payload: EnquiryPayload): string {
  const prefix =
    payload.source === "product" && payload.product
      ? `Product enquiry: ${payload.product}`
      : payload.source === "cold-storage"
        ? "Cold storage rental enquiry"
        : `Website enquiry: ${payload.enquiryType}`;
  return `[BRK Agro] ${prefix}`;
}
