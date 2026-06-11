import type { EnquiryPayload } from "@/lib/enquiry";

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as {
    error?: string;
  };

  if (!response.ok) {
    return {
      ok: false,
      error: data.error ?? "Could not send your enquiry. Please try again or email us directly.",
    };
  }

  return { ok: true };
}

export function readEnquiryFormData(form: HTMLFormElement): Omit<EnquiryPayload, "source"> {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim() || undefined,
    company: String(data.get("company") ?? "").trim() || undefined,
    enquiryType: String(data.get("enquiryType") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
    product: String(data.get("product") ?? "").trim() || undefined,
    website: String(data.get("website") ?? "").trim() || undefined,
  };
}
