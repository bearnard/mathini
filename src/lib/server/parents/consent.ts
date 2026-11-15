// Parent consent (ADR 0003 section 7): when a parent gives consent it REPLACES the learner's tick, recorded with the parent's account, the time and
// the notice version. A parent can withdraw it; the learner's data then falls back to the ADR 0002 reduced level (parent_consent_at is NULL, which
// the rest of the app already treats as "no consent"). Once a parent has withdrawn, the learner's own tick cannot switch it back on.
import type { AdminDb, Statement } from '../admin/db';
import { CONSENT_VERSION } from '../../privacyNotice';

/** The writes that record a parent's consent: the learner row the app reads, and the audit event. */
export const giveConsentStatements = (userId: string, studentId: string, now: number): Statement[] => [
  { sql: 'UPDATE students SET parent_consent_at = ?, consent_version = ? WHERE id = ?', params: [now, CONSENT_VERSION, studentId] },
  { sql: "INSERT INTO consent_events (student_id, user_id, action, notice_version, created_at) VALUES (?, ?, 'given', ?, ?)", params: [studentId, userId, CONSENT_VERSION, now] },
];

export const withdrawConsentStatements = (userId: string, studentId: string, now: number): Statement[] => [
  { sql: 'UPDATE students SET parent_consent_at = NULL WHERE id = ?', params: [studentId] },
  { sql: "INSERT INTO consent_events (student_id, user_id, action, notice_version, created_at) VALUES (?, ?, 'withdrawn', ?, ?)", params: [studentId, userId, CONSENT_VERSION, now] },
];

export async function setParentConsent(db: AdminDb, userId: string, studentId: string, give: boolean, now: number): Promise<void> {
  await db.batch(give ? giveConsentStatements(userId, studentId, now) : withdrawConsentStatements(userId, studentId, now));
}

/** True when a parent's newest decision for this learner is "withdrawn": the learner's own tick must not switch consent back on. */
export async function parentWithdrew(db: AdminDb, studentId: string): Promise<boolean> {
  try {
    const row = (await db.all<{ action: string }>('SELECT action FROM consent_events WHERE student_id = ? ORDER BY id DESC LIMIT 1', [studentId]))[0];
    return row?.action === 'withdrawn';
  } catch {
    return false; // migration 0015 not applied yet: there are no parents
  }
}
