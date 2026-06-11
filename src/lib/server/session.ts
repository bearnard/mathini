// Session token helpers.
//
// A session token is `<studentId>.<hmacHex>` where the signature is
// HMAC-SHA256 over the student id. The token is stored in the `pp_session`
// cookie, set server-side by the onboarding and login routes.

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

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}
