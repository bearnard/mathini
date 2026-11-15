import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scrubReviewerPersonalData } from './retention';
import { newReviewer, NOW, openReviewDb, seedPack } from './testDb';
import { REVIEW_PERSONAL_DATA_DAYS } from './types';

const DAY = 86_400_000;

test('POPIA: names and contact notes are scrubbed 90 days after the pack closes, not before; responses stay', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  const a = await newReviewer(o.db, s.closedPackId, 'Mrs Naidoo');
  const b = await newReviewer(o.db, s.closedPackId, 'Mr Botha');
  const open = await newReviewer(o.db, s.packId, 'Ms Open');
  o.t.raw.prepare("UPDATE reviewers SET contact_note = '082 555 0100' WHERE id IN (?, ?, ?)").run(a.reviewerId, b.reviewerId, open.reviewerId);
  o.t.raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, reason, updated_at) VALUES (?, ?, 'correct', 'fine', 1)").run(a.reviewerId, s.otherPackItemId);
  const closedAt = NOW;
  o.t.raw.prepare('UPDATE review_packs SET closed_at = ? WHERE id = ?').run(closedAt, s.closedPackId);

  assert.equal(await scrubReviewerPersonalData(o.db, closedAt + (REVIEW_PERSONAL_DATA_DAYS - 1) * DAY), 0, 'day 89: nothing yet');
  assert.equal(await scrubReviewerPersonalData(o.db, closedAt + REVIEW_PERSONAL_DATA_DAYS * DAY), 2, 'day 90: both reviewers of the closed pack');
  const rows = o.t.raw.prepare('SELECT id, display_name, contact_note FROM reviewers ORDER BY id').all() as { id: number; display_name: string; contact_note: string | null }[];
  assert.deepEqual(rows.map((r) => [r.display_name, r.contact_note]), [['Reviewer 1', null], ['Reviewer 2', null], ['Ms Open', '082 555 0100']]);
  assert.equal((o.t.raw.prepare('SELECT COUNT(*) AS n FROM review_responses').get() as { n: number }).n, 1, 'responses are kept');
  assert.equal(await scrubReviewerPersonalData(o.db, closedAt + 500 * DAY), 0, 'repeating does nothing');
});

test('a pack that is open, a draft, or closed without a date is never scrubbed', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  await newReviewer(o.db, s.packId, 'Open one');
  await newReviewer(o.db, 3, 'Draft one');
  await newReviewer(o.db, s.closedPackId, 'No close date'); // pack 2 is 'closed' with closed_at NULL
  assert.equal(await scrubReviewerPersonalData(o.db, NOW + 1000 * DAY), 0);
});

test('the batch is bounded', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  for (let i = 0; i < 5; i++) await newReviewer(o.db, s.closedPackId, `Teacher ${i}`);
  o.t.raw.prepare('UPDATE review_packs SET closed_at = 1 WHERE id = ?').run(s.closedPackId);
  assert.equal(await scrubReviewerPersonalData(o.db, NOW, 2), 2);
  assert.equal(await scrubReviewerPersonalData(o.db, NOW, 10), 3);
});
