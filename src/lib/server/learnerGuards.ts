// Guards for the learner-facing routes (security review, 2026-11): the learner login, sign-up and the write-heavy practice endpoints.
//
// - LOGIN: a learner's PIN is 4 digits, so wrong guesses are counted per login code in a DURABLE counter (10 an hour; the old limit lived in one Worker
//   isolate's memory and reset whenever another isolate answered). Every way a login can fail gives ONE message and costs one PIN hash, so neither the
//   words nor the time say which login codes exist (it used to say "Invalid login code" or "Invalid PIN", and answered an unknown code instantly).
// - SIGN-UP: open to everyone, so per IP, durable, generous enough for a whole class behind one school connection.
// - PRACTICE WRITES: a per-learner burst limit in memory. It only stops a runaway client; a determined script needs a Cloudflare rate-limiting rule.
// The durable counters fail OPEN: if the counter table is missing or D1 errors, learners are not locked out, and the in-memory limits still apply.
import type { AdminDb } from './admin/db';
import { sha256Hex } from './adultAuth/crypto';
import { allowDurable, blockedForMs, bumpDurable, createLimiter, isBlockedDurable, type Limiter } from './adultAuth/rateLimit';
import { verifyPin } from './identity';

export const HOUR_MS = 3_600_000;
export const LOGIN_FAILURES_PER_HOUR = 10;
export const SIGNUPS_PER_HOUR_PER_IP = 60;

/** The one answer for a wrong code, a wrong PIN and a blocked code. */
export const LOGIN_FAILED = 'That login code or PIN is not right. Check them and try again, or ask a parent to reset your PIN.';
/** The answer for a code that is locked after too many wrong tries. It says to wait and who can help: it reveals nothing about the PIN (any code, real or not, ends up locked the same way). */
export const loginLockedMessage = (minutes: number): string => `Too many tries. Wait ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} and try again, or ask a parent to reset your PIN.`;
export const SIGNUP_LIMITED = 'Too many sign-ups from this connection. Please try again in a while.';

const loginKey = async (code: string): Promise<string> => `login:code:${await sha256Hex(code)}`;

/** True while this login code has had too many wrong tries this hour. */
export async function loginBlocked(db: AdminDb, code: string, now: number): Promise<boolean> {
  try {
    return await isBlockedDurable(db, await loginKey(code), LOGIN_FAILURES_PER_HOUR, HOUR_MS, now);
  } catch {
    return false;
  }
}

/** Minutes (rounded up, at least 1) until this login code can be tried again, or 0 when it is not locked. */
export async function loginLockedMinutes(db: AdminDb, code: string, now: number): Promise<number> {
  try {
    const ms = await blockedForMs(db, await loginKey(code), LOGIN_FAILURES_PER_HOUR, HOUR_MS, now);
    return ms <= 0 ? 0 : Math.max(1, Math.ceil(ms / 60_000));
  } catch {
    return 0;
  }
}

export async function noteLoginFailure(db: AdminDb, code: string, now: number): Promise<void> {
  try {
    await bumpDurable(db, await loginKey(code), HOUR_MS, now);
  } catch {
    /* the in-memory limit still applies */
  }
}

/** A hash no PIN matches: checking against it costs the same time as checking a real learner's PIN. */
const DUMMY_SALT = '00000000000000000000000000000000';
const DUMMY_HASH = '0000000000000000000000000000000000000000000000000000000000000000';
export async function burnPinCheck(pin: string): Promise<void> {
  await verifyPin(pin, DUMMY_SALT, DUMMY_HASH);
}

/** Counts this sign-up against the connection's hour. False means the limit is reached. */
export async function signupAllowed(db: AdminDb, ip: string, now: number): Promise<boolean> {
  try {
    return await allowDurable(db, `signup:ip:${await sha256Hex(ip || 'unknown')}`, SIGNUPS_PER_HOUR_PER_IP, HOUR_MS, now);
  } catch {
    return true;
  }
}

export const clientIp = (req: Request): string => req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

// A practice screen can send a whole session's answers at once (up to 50), so the burst limits are generous: they stop a loop, not a learner.
export const ATTEMPTS_PER_MINUTE = 400;
export const RUN_STARTS_PER_10_MIN = 40;
export const RUN_FINISHES_PER_10_MIN = 80;
export const attemptsLimiter: Limiter = createLimiter(ATTEMPTS_PER_MINUTE, 60_000);
export const runStartLimiter: Limiter = createLimiter(RUN_STARTS_PER_10_MIN, 600_000);
export const runFinishLimiter: Limiter = createLimiter(RUN_FINISHES_PER_10_MIN, 600_000);
