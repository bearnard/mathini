// STUB for bearn's token library (feat/review-schema). Same contract: a 32-byte base64url token, only its SHA-256 hash is stored.
// When his library lands, delete this file and import his generateReviewerLink from there (the signature is the one the admin store uses).

export interface ReviewerLink { token: string; hash: string }

const b64url = (bytes: Uint8Array): string => {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export async function hashToken(token: string): Promise<string> {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
  return Array.from(new Uint8Array(d), (x) => x.toString(16).padStart(2, '0')).join('');
}

export async function generateReviewerLink(): Promise<ReviewerLink> {
  const token = b64url(crypto.getRandomValues(new Uint8Array(32)));
  return { token, hash: await hashToken(token) };
}
