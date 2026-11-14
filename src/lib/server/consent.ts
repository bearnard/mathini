// Parent/guardian consent rules (ADR 0002 addendum). Pure helpers so the rules
// are testable without the Next.js routes.

import { CONSENT_VERSION } from '../privacyNotice';

export interface Registration {
  realName: string;
  displayName: string;
  school: string;
  age: number | null;
  grade: number;
  avatar: string;
}

export type RegistrationResult =
  | { ok: true; value: Registration }
  | { ok: false; error: string };

export const CONSENT_REQUIRED_MESSAGE = 'A parent or guardian must agree before you can create an account.';

/**
 * Validates the sign-up body. Registration is REJECTED unless `parentConsent`
 * is exactly `true` (so the check cannot be skipped by bypassing the form).
 */
export function parseRegistration(body: unknown): RegistrationResult {
  const b = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>;

  if (b.parentConsent !== true) return { ok: false, error: CONSENT_REQUIRED_MESSAGE };

  const realName = (b.realName ?? '').toString().trim();
  const displayName = (b.displayName ?? '').toString().trim();
  const school = (b.school ?? '').toString().trim();
  const age = Number(b.age);
  const grade = Number(b.grade);
  const avatar = (b.avatar ?? '/avatars/avatar-1.webp').toString() || '/avatars/avatar-1.webp';

  if (!realName || !displayName || !school || !Number.isInteger(grade) || grade < 5 || grade > 12) {
    return { ok: false, error: 'Invalid input' };
  }
  return { ok: true, value: { realName, displayName, school, age: age || null, grade, avatar } };
}

interface Stmt {
  bind(...values: unknown[]): { run(): Promise<unknown>; first<T>(): Promise<T | null> };
}
export interface ConsentDb {
  prepare(sql: string): Stmt;
}

/** Stores consent for a learner (used by the one-time prompt). Server clock and version only. */
export async function recordConsent(db: ConsentDb, studentId: string, now: number = Date.now()): Promise<void> {
  await db
    .prepare('UPDATE students SET parent_consent_at = ?, consent_version = ? WHERE id = ?')
    .bind(now, CONSENT_VERSION, studentId)
    .run();
}

export interface StudentConsent {
  /** The learner exists in the database. */
  exists: boolean;
  consented: boolean;
}

/** One cheap lookup: does this learner exist, and have their parents agreed? */
export async function lookupStudentConsent(db: ConsentDb, studentId: string): Promise<StudentConsent> {
  const row = await db
    .prepare('SELECT parent_consent_at FROM students WHERE id = ?')
    .bind(studentId)
    .first<{ parent_consent_at: number | null }>();
  if (!row) return { exists: false, consented: false };
  return { exists: true, consented: row.parent_consent_at !== null && row.parent_consent_at !== undefined };
}
