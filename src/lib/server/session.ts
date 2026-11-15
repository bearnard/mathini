// Session token helpers.
//
// A session token is `<studentId>.<version>.<hmacHex>`: the signature is HMAC-SHA256 over the student id AND the learner's session version, and the
// token is stored in the `pp_session` cookie, set server-side by the onboarding and login routes. The version lives in students.session_version
// (migration 0019) and is bumped when the learner's PIN is reset, which signs out every other device: verifyLiveSession compares the version in the
// cookie with the database on each request, so an old cookie stops working at once. (It also stops working if the learner is deleted.)
// Cookies made before 0019 are `<studentId>.<hmacHex>` (signature over the id alone) and count as version 0, so nobody is signed out by the rollout.

import type { AdminDb } from './admin/db';

export const SESSION_COOKIE_NAME = 'pp_session';
export const SESSION_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

async function importHmacKey(secret: string, usage: 'sign' | 'verify'): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    [usage],
  );
}

/**
 * Sign a student id into a session token.
 */
export async function signSession(studentId: string, secret: string): Promise<string> {
  const key = await importHmacKey(secret, 'sign');
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(studentId));
  const sigHex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `${studentId}.${sigHex}`;
}

/**
 * Verify a session token and return the student id, or null if invalid.
 */
export async function verifySession(
  token: string | undefined,
  secret: string,
): Promise<string | null> {
  if (!token) return null;
  const dotIndex = token.indexOf('.');
  if (dotIndex === -1) return null;
  const studentId = token.slice(0, dotIndex);
  const sig = token.slice(dotIndex + 1);
  if (!studentId || sig.length % 2 !== 0) return null;

  try {
    const key = await importHmacKey(secret, 'verify');
    const sigBytes = hexToBytes(sig);
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes.buffer as ArrayBuffer,
      new TextEncoder().encode(studentId).buffer as ArrayBuffer,
    );
    return valid ? studentId : null;
  } catch {
    return null;
  }
}

const hex = (buf: ArrayBuffer): string => Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');

/** A token for the learner's CURRENT session version. The signed message has its own prefix, so a legacy signature (over the id alone) can never pass as one. */
export async function signSessionV(studentId: string, version: number, secret: string): Promise<string> {
  const key = await importHmacKey(secret, 'sign');
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`v2:${studentId}:${version}`));
  return `${studentId}.${version}.${hex(sig)}`;
}

/** Checks the signature only (no database): the student id and the version the token was made for, or null. A legacy token is version 0. */
export async function parseSession(token: string | undefined, secret: string): Promise<{ studentId: string; version: number } | null> {
  if (!token || token.length > 200) return null;
  const parts = token.split('.');
  if (parts.length === 2) {
    const id = await verifySession(token, secret);
    return id ? { studentId: id, version: 0 } : null;
  }
  if (parts.length !== 3) return null;
  const [studentId, v, sig] = parts;
  if (!studentId || !/^\d{1,9}$/.test(v) || !/^[0-9a-f]{64}$/.test(sig)) return null;
  try {
    const key = await importHmacKey(secret, 'verify');
    const bytes = hexToBytes(sig);
    const ok = await crypto.subtle.verify('HMAC', key, bytes.buffer as ArrayBuffer, new TextEncoder().encode(`v2:${studentId}:${Number(v)}`).buffer as ArrayBuffer);
    return ok ? { studentId, version: Number(v) } : null;
  } catch {
    return null;
  }
}

/** The learner's current session version; null when the learner no longer exists. If the column is not there yet (0019 not applied) every learner is version 0. */
export async function currentSessionVersion(db: AdminDb, studentId: string): Promise<number | null> {
  try {
    const r = (await db.all<{ session_version: number }>('SELECT session_version FROM students WHERE id = ?', [studentId]))[0];
    return r ? Number(r.session_version) : null;
  } catch {
    try {
      return (await db.all('SELECT 1 FROM students WHERE id = ?', [studentId])).length > 0 ? 0 : null;
    } catch {
      return null;
    }
  }
}

/**
 * The learner for a pp_session cookie, or null: the signature must be good AND the version in it must be the learner's current one AND the learner must
 * still exist. This is what every learner route uses (the plain verifySession below only checks the signature).
 */
export async function verifyLiveSession(db: AdminDb, token: string | undefined, secret: string): Promise<string | null> {
  const s = await parseSession(token, secret);
  if (!s) return null;
  const now = await currentSessionVersion(db, s.studentId);
  return now !== null && now === s.version ? s.studentId : null;
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}
