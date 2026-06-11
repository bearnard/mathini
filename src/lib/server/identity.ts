// Login identity helpers.
//
// - Generates human-friendly login codes (ADJECTIVE-NNNN).
// - Hashes PINs via Web Crypto PBKDF2-SHA256.
// - Verifies PINs with constant-time comparison.

// Curated wordlist for friendly login codes (adjectives only, no ambiguous chars).
const ADJECTIVES = [
  'TIGER', 'EAGLE', 'SHARK', 'PANDA', 'KOALA', 'FALCON', 'PANTHER', 'WHALE',
  'HAWK', 'LION', 'CAMEL', 'ZEBRA', 'OTTER', 'RACCOON', 'DOLPHIN', 'FALCON',
  'JAGUAR', 'CONDOR', 'MUSTANG', 'RAVEN', 'BISON', 'COBRA', 'VIPER', 'STORM',
  'BLAZE', 'CRANE', 'MOOSE', 'BADGER', 'BEACON', 'CORAL', 'DRIFT', 'FLAME',
  'GLOBE', 'HARPIA', 'ION', 'KESTREL', 'LEAP', 'MARLIN', 'NOVA', 'ORB',
  'PEAK', 'QUILL', 'RIDGE', 'SOLAR', 'THUNDER', 'URBAN', 'VERTEX', 'WIND',
  'APEX', 'BOLT', 'CLIFF', 'DELTA', 'EDGE', 'FOCUS', 'GRAIN', 'HEART',
];

const CODE_LENGTH = 4;
const SALT_BYTES = 16;
const PBKDF2_ITERATIONS = 100_000;

/**
 * Generate a random login code like "TIGER-4821".
 * Adjective from the curated list, dash, then 4 random digits (0-9).
 */
export function generateLoginCode(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  let digits = '';
  for (let i = 0; i < CODE_LENGTH; i++) {
    digits += Math.floor(Math.random() * 10).toString();
  }
  return `${adj}-${digits}`;
}

/**
 * Generate a 4-digit random PIN.
 */
export function generatePin(): string {
  let pin = '';
  for (let i = 0; i < 4; i++) {
    pin += Math.floor(Math.random() * 10).toString();
  }
  return pin;
}

/**
 * Hash a PIN using PBKDF2-SHA256.
 * @param pin - The plaintext 4-digit PIN.
 * @returns { hash: string (hex), salt: string (hex) }
 */
export async function hashPin(pin: string): Promise<{ hash: string; salt: string }> {
  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES));
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(pin),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const derivedBits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256, // 256 bits = 32 bytes
  );
  const hashBytes = new Uint8Array(derivedBits);
  return {
    hash: Array.from(hashBytes).map((b) => b.toString(16).padStart(2, '0')).join(''),
    salt: Array.from(salt).map((b) => b.toString(16).padStart(2, '0')).join(''),
  };
}

/**
 * Verify a PIN against a stored hash.
 * @param pin - The plaintext PIN to check.
 * @param salt - The hex-encoded salt.
 * @param hash - The hex-encoded stored hash.
 * @returns true if the PIN matches.
 */
export async function verifyPin(
  pin: string,
  salt: string,
  hash: string,
): Promise<boolean> {
  const encoder = new TextEncoder();
  const saltBytes = new Uint8Array(salt.match(/.{2}/g)!.map((b) => parseInt(b, 16)));
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(pin),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const derivedBits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: saltBytes, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256,
  );
  const hashBytes = new Uint8Array(derivedBits);
  const computedHash = Array.from(hashBytes).map((b) => b.toString(16).padStart(2, '0')).join('');

  // Constant-time comparison to prevent timing attacks
  if (computedHash.length !== hash.length) return false;
  let result = 0;
  for (let i = 0; i < computedHash.length; i++) {
    result |= computedHash.charCodeAt(i) ^ hash.charCodeAt(i);
  }
  return result === 0;
}
