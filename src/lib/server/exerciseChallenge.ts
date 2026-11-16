// Server-issued, signed challenges for the generated Grade 5 exercises (security: the browser never marks its own answers).
//
// The learner asks for challenges; each is a random seed signed with the server secret together with the learner's id, the exercise and the time. The browser
// builds the problem from the seed with the SAME pure generator the server has (src/lib/shared/g5Exercises.ts) and sends the seed, the signature and its
// answer with the attempt. The server checks the signature and age, rebuilds the problem, and marks the answer itself. A challenge counts once (its
// signature is the attempt's question key, so a second answer to it finds the first), and expires after 30 minutes. A script can still SOLVE a problem
// (the generator is public), exactly like answering a real question it can read; what it cannot do is claim a result without a problem the server issued.
import type { AdminDb } from './admin/db';
import { EXERCISE_META, checkExercise, isExerciseKind, type ExerciseKind } from '../shared/g5Exercises';
import { seededRandom } from '../shared/seededRandom';

export const CHALLENGE_TTL_MS = 30 * 60 * 1000;
export const MAX_CHALLENGES_PER_REQUEST = 10;

export interface Challenge { seed: number; issuedAt: number; sig: string }

const hex = (b: ArrayBuffer): string => Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, '0')).join('');
async function sign(secret: string, studentId: string, kind: ExerciseKind, seed: number, issuedAt: number): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`ex1|${studentId}|${kind}|${seed}|${issuedAt}`))).slice(0, 32);
}

/** `count` fresh challenges for one learner and one exercise. */
export async function issueChallenges(secret: string, studentId: string, kind: ExerciseKind, count: number, now: number): Promise<Challenge[]> {
  const n = Math.max(1, Math.min(MAX_CHALLENGES_PER_REQUEST, Math.floor(count) || 1));
  const seeds = crypto.getRandomValues(new Uint32Array(n));
  return Promise.all(Array.from(seeds, async (seed) => ({ seed, issuedAt: now, sig: await sign(secret, studentId, kind, seed, now) })));
}

const SIG = /^[0-9a-f]{32}$/;
/** Constant-time comparison of two equal-length strings. */
const same = (a: string, b: string): boolean => a.length === b.length && Array.from(a).reduce((d, c, i) => d | (c.charCodeAt(0) ^ b.charCodeAt(i)), 0) === 0;

export interface ExerciseClaim { kind?: unknown; seed?: unknown; issuedAt?: unknown; sig?: unknown }
export type ExerciseResult =
  | { credited: true; isCorrect: boolean; qkey: string; task: string; subject: string; section: string }
  | { credited: false; why: 'bad_claim' | 'bad_signature' | 'expired' | 'already_answered' };

/** Does this claim carry a challenge this learner was really issued, still fresh and unanswered? If so, mark the answer. */
export async function creditExercise(db: AdminDb, secret: string, studentId: string, claim: unknown, answer: unknown, now: number): Promise<ExerciseResult> {
  const c = (claim && typeof claim === 'object' ? claim : {}) as ExerciseClaim;
  if (!isExerciseKind(c.kind) || typeof c.seed !== 'number' || !Number.isInteger(c.seed) || c.seed < 0 || c.seed > 0xffffffff
    || typeof c.issuedAt !== 'number' || !Number.isInteger(c.issuedAt) || typeof c.sig !== 'string' || !SIG.test(c.sig) || typeof answer !== 'string') return { credited: false, why: 'bad_claim' };
  if (!same(await sign(secret, studentId, c.kind, c.seed, c.issuedAt), c.sig)) return { credited: false, why: 'bad_signature' };
  if (c.issuedAt > now + 60_000 || now - c.issuedAt > CHALLENGE_TTL_MS) return { credited: false, why: 'expired' };
  const qkey = c.sig.slice(0, 12);
  try {
    const seen = await db.all('SELECT 1 AS x FROM attempts WHERE student_id = ? AND qkey = ? LIMIT 1', [studentId, qkey]);
    if (seen.length > 0) return { credited: false, why: 'already_answered' };
  } catch {
    return { credited: false, why: 'already_answered' }; // when in doubt nothing counts
  }
  const meta = EXERCISE_META[c.kind];
  return { credited: true, isCorrect: checkExercise(c.kind, seededRandom(c.seed), answer), qkey, ...meta };
}
