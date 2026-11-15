// Token helpers for adult sign-in (ADR 0003 section 2). Web Crypto only, so it runs in Workers and Node. A token is 32 random bytes as
// base64url (43 characters); only its SHA-256 (hex) is ever stored, so a database leak cannot be turned into a sign-in.

export const TOKEN_BYTES = 32;
export const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;

const toBase64Url = (bytes: Uint8Array): string => {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const generateToken = (): string => toBase64Url(crypto.getRandomValues(new Uint8Array(TOKEN_BYTES)));
export const isWellFormedToken = (t: unknown): t is string => typeof t === 'string' && TOKEN_PATTERN.test(t);

export async function sha256Hex(text: string): Promise<string> {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Compares two strings without stopping at the first difference. Different lengths are never equal. */
export function constantTimeEqual(a: string, b: string): boolean {
  const x = new TextEncoder().encode(a);
  const y = new TextEncoder().encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export const newId = (): string => crypto.randomUUID();
