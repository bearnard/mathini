// Review link tokens (ADR 0004). A token is 32 random bytes as base64url (43 characters) in the link. Only its SHA-256 (hex)
// is stored, so a database leak cannot be turned into working links. Uses Web Crypto only, so it runs in Workers and Node.

import type { ReviewerRow } from './types';
import { REVIEW_LINK_TTL_DAYS } from './types';
import type { TrDb } from './db';

export const TOKEN_BYTES = 32;
export const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;
const DAY_MS = 24 * 60 * 60 * 1000;

const toBase64Url = (bytes: Uint8Array): string => {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

/** A fresh token: 32 bytes from the platform's secure random generator. */
export function generateToken(): string {
  return toBase64Url(crypto.getRandomValues(new Uint8Array(TOKEN_BYTES)));
}

export const isWellFormedToken = (t: unknown): t is string => typeof t === 'string' && TOKEN_PATTERN.test(t);

/** Lower-case hex SHA-256 of the token, which is what review_reviewers.token_hash holds. */
export async function hashToken(token: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Compares two strings without stopping at the first difference. Different lengths are never equal. */
export function constantTimeEqual(a: string, b: string): boolean {
  const x = new TextEncoder().encode(a);
  const y = new TextEncoder().encode(b);
  let diff = x.length ^ y.length;
  const n = Math.max(x.length, y.length);
  for (let i = 0; i < n; i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export const expiryFrom = (now: number, ttlDays = REVIEW_LINK_TTL_DAYS): number => now + ttlDays * DAY_MS;

export type LinkState = 'ok' | 'expired' | 'revoked';

/** Revoked wins over expired. A link is usable strictly before its expiry time. */
export function linkState(r: Pick<ReviewerRow, 'expires_at' | 'revoked_at'>, now: number): LinkState {
  if (r.revoked_at !== null && r.revoked_at !== undefined) return 'revoked';
  return now < r.expires_at ? 'ok' : 'expired';
}

export type Lookup =
  | { found: false }
  | { found: true; state: LinkState; reviewer: ReviewerRow };

/** Finds the reviewer for a link. The row is fetched by the hash (an indexed, unique column) and the hash is compared again in constant time. */
export async function findReviewerByToken(db: TrDb, token: string, now: number): Promise<Lookup> {
  if (!isWellFormedToken(token)) return { found: false };
  const hash = await hashToken(token);
  const rows = await db.all<ReviewerRow>('SELECT * FROM reviewers WHERE token_hash = ?', [hash]);
  const reviewer = rows[0];
  if (!reviewer || !constantTimeEqual(reviewer.token_hash, hash)) return { found: false };
  return { found: true, state: linkState(reviewer, now), reviewer };
}

export interface NewReviewer {
  reviewerId: number;
  /** Shown to the owner once, to copy into WhatsApp or email. It is not stored anywhere. */
  token: string;
  expiresAt: number;
}

/** Creates a reviewer for a pack with a new link. Only the hash is stored. */
export async function createReviewer(
  db: TrDb,
  packId: number,
  displayName: string,
  contactNote: string | null,
  now: number,
  ttlDays = REVIEW_LINK_TTL_DAYS,
): Promise<NewReviewer> {
  const token = generateToken();
  const expiresAt = expiryFrom(now, ttlDays);
  await db.batch([
    {
      sql: 'INSERT INTO reviewers (pack_id, display_name, contact_note, token_hash, expires_at, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      params: [packId, displayName, contactNote, await hashToken(token), expiresAt, now],
    },
  ]);
  const row = await db.all<{ id: number }>('SELECT id FROM reviewers WHERE token_hash = ?', [await hashToken(token)]);
  return { reviewerId: row[0].id, token, expiresAt };
}

/** Revokes a link at once. Revoking twice keeps the first time. */
export async function revokeReviewer(db: TrDb, reviewerId: number, now: number): Promise<void> {
  await db.batch([{ sql: 'UPDATE reviewers SET revoked_at = ? WHERE id = ? AND revoked_at IS NULL', params: [now, reviewerId] }]);
}

/** Moves the expiry (for example to give a teacher more time). Never reopens a revoked link. */
export async function extendReviewer(db: TrDb, reviewerId: number, newExpiresAt: number): Promise<void> {
  await db.batch([{ sql: 'UPDATE reviewers SET expires_at = ? WHERE id = ?', params: [newExpiresAt, reviewerId] }]);
}
