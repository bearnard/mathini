// POPIA (ADR 0004): reviewers' display names and contact notes are deleted 90 days after their pack closes. The responses stay, attributed to
// "Reviewer 1/2/3" (the reviewer's position in the pack, by id). Run daily from the scheduled job. Bounded, so a run stays inside the
// plan's D1 write budget, and safe to repeat: a scrubbed reviewer is skipped.
import type { TrDb } from './db';
import { REVIEW_PERSONAL_DATA_DAYS } from './types';

const DAY_MS = 86_400_000;
export const SCRUB_BATCH = 200;

/** Scrubs personal fields of reviewers whose pack closed at least REVIEW_PERSONAL_DATA_DAYS ago. Returns how many reviewers were scrubbed. */
export async function scrubReviewerPersonalData(db: TrDb, now: number, limit = SCRUB_BATCH): Promise<number> {
  const cutoff = now - REVIEW_PERSONAL_DATA_DAYS * DAY_MS;
  // One statement, so the daily job spends one D1 round trip on this (it shares a 50-subrequest budget with the top-up).
  const done = await db.all<{ id: number }>(
    `UPDATE reviewers
        SET display_name = 'Reviewer ' || (SELECT COUNT(*) FROM reviewers x WHERE x.pack_id = reviewers.pack_id AND x.id <= reviewers.id),
            contact_note = NULL
      WHERE id IN (SELECT r.id FROM reviewers r JOIN review_packs p ON p.id = r.pack_id
                    WHERE p.status = 'closed' AND p.closed_at IS NOT NULL AND p.closed_at <= ?
                      AND (r.contact_note IS NOT NULL OR r.display_name NOT GLOB 'Reviewer [0-9]*')
                    ORDER BY r.id LIMIT ?)
      RETURNING id`,
    [cutoff, Math.max(1, Math.min(limit, 1000))],
  );
  return done.length;
}
