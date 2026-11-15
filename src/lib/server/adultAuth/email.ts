// Email addresses: one normal form (trimmed, lower-cased) and a deliberately plain validity check. We do not try to be clever: a
// confirmation email is the real test of an address.

export const MAX_EMAIL_LENGTH = 254;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;

/** The normal form of an address, or null when it does not look like one. */
export function normaliseEmail(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  const e = input.trim().toLowerCase();
  if (e.length === 0 || e.length > MAX_EMAIL_LENGTH || /[\r\n\0]/.test(e)) return null;
  return EMAIL_RE.test(e) ? e : null;
}
