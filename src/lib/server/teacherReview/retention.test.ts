import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scrubReviewerPersonalData } from './retention';
import { newReviewer, NOW, openReviewDb, seedPack } from './testDb';
import { REVIEW_PERSONAL_DATA_DAYS } from './types';

const DAY = 86_400_000;
const reviewers = async (p: ReturnType<typeof scrubReviewerPersonalData>) => (await p).reviewers;

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

  assert.equal(await reviewers(scrubReviewerPersonalData(o.db, closedAt + (REVIEW_PERSONAL_DATA_DAYS - 1) * DAY)), 0, 'day 89: nothing yet');
  assert.equal(await reviewers(scrubReviewerPersonalData(o.db, closedAt + REVIEW_PERSONAL_DATA_DAYS * DAY)), 2, 'day 90: both reviewers of the closed pack');
  const rows = o.t.raw.prepare('SELECT id, display_name, contact_note FROM reviewers ORDER BY id').all() as { id: number; display_name: string; contact_note: string | null }[];
  assert.deepEqual(rows.map((r) => [r.display_name, r.contact_note]), [['Reviewer 1', null], ['Reviewer 2', null], ['Ms Open', '082 555 0100']]);
  assert.equal((o.t.raw.prepare('SELECT COUNT(*) AS n FROM review_responses').get() as { n: number }).n, 1, 'responses are kept');
  assert.deepEqual(await scrubReviewerPersonalData(o.db, closedAt + 500 * DAY), { reviewers: 0, reasons: 0 }, 'repeating does nothing');
});

test('POPIA: free-text reasons are scrubbed with the AI-merge filter, only for reviewers whose pack closed 90 days ago', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  // two more items in the closed pack, so one reviewer has three reasons
  const addItem = o.t.raw.prepare("INSERT INTO review_pack_items (pack_id, kind, file, anchor_text, sort) VALUES (?, 'lesson_line', 'f.tsx', ?, ?)");
  addItem.run(s.closedPackId, 'Second closed line', 2);
  addItem.run(s.closedPackId, 'Third closed line', 3);
  const ids = (o.t.raw.prepare('SELECT id FROM review_pack_items WHERE pack_id = ? ORDER BY id').all(s.closedPackId) as { id: number }[]).map((r) => r.id);
  const a = await newReviewer(o.db, s.closedPackId, 'Mrs Naidoo');
  const open = await newReviewer(o.db, s.packId, 'Ms Open');
  const put = o.t.raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, reason, updated_at) VALUES (?, ?, 'unsure', ?, 7)");
  put.run(a.reviewerId, ids[0], "Hi, I'm Thandi Mokoena. Call me on 082 555 0100 or mail thandi@school.co.za, see https://example.org/x");
  put.run(a.reviewerId, ids[1], 'Mrs Naidoo from the Bay school thinks the second option is wrong.');
  put.run(a.reviewerId, ids[2], 'The key should be B, because the verb is in the past tense.'); // nothing personal: left as typed
  put.run(open.reviewerId, s.qItemId, 'Call me on 082 555 0100'); // pack still open: untouched
  o.t.raw.prepare('UPDATE review_packs SET closed_at = ? WHERE id = ?').run(NOW, s.closedPackId);

  assert.deepEqual(await scrubReviewerPersonalData(o.db, NOW + 89 * DAY), { reviewers: 0, reasons: 0 }, 'not yet');
  assert.equal((o.t.raw.prepare('SELECT reason FROM review_responses WHERE reviewer_id = ? AND item_id = ?').get(a.reviewerId, ids[0]) as { reason: string }).reason.includes('082 555 0100'), true, 'still raw before day 90');
  assert.deepEqual(await scrubReviewerPersonalData(o.db, NOW + 90 * DAY), { reviewers: 1, reasons: 2 });
  const reason = (rev: number, item: number) => (o.t.raw.prepare('SELECT reason FROM review_responses WHERE reviewer_id = ? AND item_id = ?').get(rev, item) as { reason: string }).reason;
  const first = reason(a.reviewerId, ids[0]);
  assert.ok(first.includes('[phone]') && first.includes('[email]') && first.includes('[link]') && first.includes('[name]'), first);
  assert.ok(!/082|thandi|Mokoena|example\.org/i.test(first), first);
  assert.equal(reason(a.reviewerId, ids[1]), '[name] from the Bay school thinks the second option is wrong.');
  assert.equal(reason(a.reviewerId, ids[2]), 'The key should be B, because the verb is in the past tense.', 'a reason with nothing personal is untouched');
  assert.equal(reason(open.reviewerId, s.qItemId), 'Call me on 082 555 0100', 'an open pack is untouched');
  assert.equal((o.t.raw.prepare('SELECT display_name FROM reviewers WHERE id = ?').get(a.reviewerId) as { display_name: string }).display_name, 'Reviewer 1');
  assert.deepEqual(await scrubReviewerPersonalData(o.db, NOW + 400 * DAY), { reviewers: 0, reasons: 0 }, 'a scrubbed reviewer is not visited again');
});

test('the reasons and the new name are written together: if the write fails, the reviewer is not marked scrubbed', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  const a = await newReviewer(o.db, s.closedPackId, 'Mrs Naidoo');
  o.t.raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, reason, updated_at) VALUES (?, ?, 'unsure', 'Call 082 555 0100', 1)").run(a.reviewerId, s.otherPackItemId);
  o.t.raw.prepare('UPDATE review_packs SET closed_at = 1 WHERE id = ?').run(s.closedPackId);
  const failing = { all: o.db.all.bind(o.db), batch: async () => { throw new Error('D1 unavailable'); } };
  await assert.rejects(scrubReviewerPersonalData(failing, NOW), /D1 unavailable/);
  assert.equal((o.t.raw.prepare('SELECT display_name FROM reviewers WHERE id = ?').get(a.reviewerId) as { display_name: string }).display_name, 'Mrs Naidoo');
  assert.deepEqual(await scrubReviewerPersonalData(o.db, NOW), { reviewers: 1, reasons: 1 }, 'the next run picks it up');
});

test('a pack that is open, a draft, or closed without a date is never scrubbed', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  await newReviewer(o.db, s.packId, 'Open one');
  await newReviewer(o.db, 3, 'Draft one');
  await newReviewer(o.db, s.closedPackId, 'No close date'); // pack 2 is 'closed' with closed_at NULL
  assert.deepEqual(await scrubReviewerPersonalData(o.db, NOW + 1000 * DAY), { reviewers: 0, reasons: 0 });
});

test('the batch is bounded', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const s = seedPack(o.t.raw);
  for (let i = 0; i < 5; i++) await newReviewer(o.db, s.closedPackId, `Teacher ${i}`);
  o.t.raw.prepare('UPDATE review_packs SET closed_at = 1 WHERE id = ?').run(s.closedPackId);
  assert.equal(await reviewers(scrubReviewerPersonalData(o.db, NOW, 2)), 2);
  assert.equal(await reviewers(scrubReviewerPersonalData(o.db, NOW, 10)), 3);
});
