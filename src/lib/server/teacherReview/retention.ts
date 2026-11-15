// POPIA (ADR 0004): 90 days after a pack closes, its reviewers' personal data goes: the display name becomes "Reviewer N" (the reviewer's
// position in the pack, by id), the contact note is cleared, and the free-text reasons are scrubbed with the same filter that protects the
// AI merge (emails, links, phone numbers, titled names and "I am X" become [email], [link], [phone], [name]). The responses themselves stay.
// Run daily from the scheduled job. Bounded, and safe to repeat: the renamed reviewer is the marker, so a scrubbed reviewer is never visited
// again, and a reason is only rewritten when the scrub changes it. The reasons and the new name are written in ONE batch (atomic), so a
// reviewer is never marked scrubbed while a reason is still raw.
//
// Round trips (the daily job shares a 50-subrequest budget with the top-up): one read, plus one batch only when there is something to scrub.
import type { TrDb, TrStatement } from './db';
import { scrubReason } from './merge';
import { REVIEW_PERSONAL_DATA_DAYS } from './types';

const DAY_MS = 86_400_000;
export const SCRUB_BATCH = 40;

export interface ScrubResult {
  /** Reviewers whose name and contact note were replaced. */
  reviewers: number;
  /** Free-text reasons that the scrub changed. */
  reasons: number;
}

interface Row { id: number; pos: number; item_id: number | null; reason: string | null }

export async function scrubReviewerPersonalData(db: TrDb, now: number, limit = SCRUB_BATCH): Promise<ScrubResult> {
  const cutoff = now - REVIEW_PERSONAL_DATA_DAYS * DAY_MS;
  const rows = await db.all<Row>(
    `SELECT r.id AS id,
            (SELECT COUNT(*) FROM reviewers x WHERE x.pack_id = r.pack_id AND x.id <= r.id) AS pos,
            s.item_id AS item_id, s.reason AS reason
       FROM reviewers r
       LEFT JOIN review_responses s ON s.reviewer_id = r.id AND s.reason IS NOT NULL
      WHERE r.id IN (SELECT r2.id FROM reviewers r2 JOIN review_packs p ON p.id = r2.pack_id
                      WHERE p.status = 'closed' AND p.closed_at IS NOT NULL AND p.closed_at <= ?
                        AND (r2.contact_note IS NOT NULL OR r2.display_name NOT GLOB 'Reviewer [0-9]*')
                      ORDER BY r2.id LIMIT ?)
      ORDER BY r.id`,
    [cutoff, Math.max(1, Math.min(limit, 200))],
  );
  if (rows.length === 0) return { reviewers: 0, reasons: 0 };

  const statements: TrStatement[] = [];
  const pos = new Map<number, number>();
  let reasons = 0;
  for (const r of rows) {
    pos.set(r.id, r.pos);
    if (r.item_id === null || r.reason === null) continue;
    const clean = scrubReason(r.reason);
    if (clean === r.reason) continue;
    reasons += 1;
    statements.push({ sql: 'UPDATE review_responses SET reason = ? WHERE reviewer_id = ? AND item_id = ? AND reason = ?', params: [clean, r.id, r.item_id, r.reason] });
  }
  // The renames come last in the batch: they are what marks a reviewer as done.
  for (const [id, p] of pos) statements.push({ sql: 'UPDATE reviewers SET display_name = ?, contact_note = NULL WHERE id = ?', params: [`Reviewer ${p}`, id] });
  await db.batch(statements);
  return { reviewers: pos.size, reasons };
}
