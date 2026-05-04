/** Dial string for `tel:` and structured data (spaces removed, keeps +). */
export function phoneDialString(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function phoneTelHref(phone: string): string {
  return `tel:${phoneDialString(phone)}`;
}

export function emailMailtoHref(email: string): string {
  return `mailto:${email}`;
}
