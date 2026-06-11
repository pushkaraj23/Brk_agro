import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  enquiryEmailSubject,
  enquiryRecipientEmail,
  formatEnquiryEmailBody,
  type EnquiryPayload,
} from "@/lib/enquiry";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): EnquiryPayload | null {
  if (!body || typeof body !== "object") return null;
  const raw = body as Record<string, unknown>;
  const source = raw.source;
  if (source !== "contact" && source !== "product" && source !== "cold-storage") {
    return null;
  }

  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const enquiryType = String(raw.enquiryType ?? "").trim();
  const message = String(raw.message ?? "").trim();

  if (!name || !email || !enquiryType || !message) return null;
  if (!isValidEmail(email)) return null;

  return {
    name,
    email,
    phone: String(raw.phone ?? "").trim() || undefined,
    company: String(raw.company ?? "").trim() || undefined,
    enquiryType,
    message,
    product: String(raw.product ?? "").trim() || undefined,
    source,
    website: String(raw.website ?? "").trim() || undefined,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  if (!resend) {
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Add RESEND_API_KEY to your environment.",
      },
      { status: 503 },
    );
  }

  const to = process.env.ENQUIRY_TO_EMAIL?.trim() || enquiryRecipientEmail;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "BRK Agro Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: enquiryEmailSubject(payload),
    text: formatEnquiryEmailBody(payload),
  });

  if (error) {
    console.error("Resend error:", error);
    const resendMessage =
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string"
        ? error.message
        : null;
    return NextResponse.json(
      {
        error:
          resendMessage ??
          "Failed to send email. Please try again later.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
