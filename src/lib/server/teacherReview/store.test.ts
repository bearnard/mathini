import { test } from 'node:test';
import assert from 'node:assert/strict';
import { markDone, loadReviewerPack, saveResponse, loadPack } from './store';
import { checkLineProposal, checkQuestionProposal, sameContent } from './proposal';
import { newReviewer, NOW, openReviewDb, seedPack } from './testDb';
import type { ReviewerRow } from './types';

const setup = async () => {
  const o = await openReviewDb(); if (!o) return null;
  const s = seedPack(o.t.raw);
  const r = await newReviewer(o.db, s.packId);
  const reviewer = o.t.raw.prepare('SELECT * FROM reviewers WHERE id = ?').get(r.reviewerId) as unknown as ReviewerRow;
  return { ...o, s, reviewer };
};

test('the pack view shows the question as the learner sees it, the lesson line, the context and the doubt, and nothing from other packs', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const pack = (await loadPack(x.db, x.s.packId))!;
  const v = await loadReviewerPack(x.db, x.reviewer, pack);
  assert.equal(v.packTitle, 'Afrikaans G7');
  assert.equal(v.reviewerName, 'Ms N.');
  assert.equal(v.total, 2);
  assert.equal(v.answered, 0);
  assert.deepEqual(v.items.map((i) => i.id), [x.s.qItemId, x.s.lineItemId]);
  assert.deepEqual(v.items[0].content, { prompt: 'Wat beteken "kusasa"?', options: ['gister', 'vandag', 'more', 'volgende jaar'], answer: 'more', explanation: 'Kusasa is more.' });
  assert.equal(v.items[0].doubt, 'Is "kusasa" more of tomorrow?');
  assert.deepEqual(v.items[0].context, { subject: 'Afrikaans', grade: 7, topic: 'Woordeskat' });
  assert.deepEqual(v.items[1].content, { text: 'Ek gaan more skool toe.' });
  assert.equal((v.items[1].context as { slideTitle: string }).slideTitle, 'Tyd');
  const json = JSON.stringify(v);
  assert.ok(!json.includes('Other pack line') && !json.includes('WhatsApp') && !json.includes('token_hash') && !json.includes('owner@example.com'));
});

test('saving: correct, unsure, then a change; autosave overwrites; the view returns my answer', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const q = x.s.qItemId;
  assert.deepEqual(await saveResponse(x.db, x.reviewer, { itemId: q, verdict: 'correct', confidence: 'sure' }, NOW), { ok: true, answered: 1 });
  assert.deepEqual(await saveResponse(x.db, x.reviewer, { itemId: q, verdict: 'unsure', reason: '  not sure about the tense ' }, NOW + 1), { ok: true, answered: 1 });
  const change = { prompt: 'Wat beteken "kusasa" in isiXhosa?', options: ['gister', 'vandag', 'more', 'volgende jaar'], answer: 'more', explanation: 'Kusasa is more.' };
  assert.deepEqual(await saveResponse(x.db, x.reviewer, { itemId: q, verdict: 'change', proposal: change, confidence: 'fairly_sure', reason: 'wrong language' }, NOW + 2), { ok: true, answered: 1 });
  assert.deepEqual(await saveResponse(x.db, x.reviewer, { itemId: x.s.lineItemId, verdict: 'change', proposal: { text: 'Ek gaan more skool toe.  ' } }, NOW + 3), { ok: false, status: 400, error: 'the suggestion is the same as the original' });
  assert.deepEqual(await saveResponse(x.db, x.reviewer, { itemId: x.s.lineItemId, verdict: 'change', proposal: { text: 'Ek gaan môre skool toe.' } }, NOW + 4), { ok: true, answered: 2 });

  const v = await loadReviewerPack(x.db, x.reviewer, (await loadPack(x.db, x.s.packId))!);
  assert.equal(v.answered, 2);
  assert.deepEqual(v.items[0].response, { verdict: 'change', proposal: change, confidence: 'fairly_sure', reason: 'wrong language' });
  assert.deepEqual(v.items[1].response?.proposal, { text: 'Ek gaan môre skool toe.' });
  assert.equal((x.t.raw.prepare('SELECT COUNT(*) AS n FROM review_responses').get() as { n: number }).n, 2);
  assert.equal((x.t.raw.prepare('SELECT last_seen_at FROM reviewers').get() as { last_seen_at: number }).last_seen_at, NOW + 4);
});

test('a non-change verdict drops any proposal that came with it', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await saveResponse(x.db, x.reviewer, { itemId: x.s.lineItemId, verdict: 'correct', proposal: { text: 'sneaky' } }, NOW);
  assert.equal((x.t.raw.prepare('SELECT proposal FROM review_responses').get() as { proposal: string | null }).proposal, null);
});

test('refusals: items of another pack, unknown items, bad verdicts, bad proposals, long reasons', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const bad = async (body: unknown) => (await saveResponse(x.db, x.reviewer, body, NOW)) as { ok: false; status: number; error: string };
  assert.equal((await bad({ itemId: x.s.otherPackItemId, verdict: 'correct' })).status, 404);
  assert.equal((await bad({ itemId: 9999, verdict: 'correct' })).status, 404);
  assert.equal((await bad({ itemId: x.s.qItemId, verdict: 'maybe' })).status, 400);
  assert.equal((await bad({ itemId: '1', verdict: 'correct' })).status, 400);
  assert.equal((await bad({ itemId: x.s.qItemId, verdict: 'correct', confidence: 'certain' })).status, 400);
  assert.equal((await bad({ itemId: x.s.qItemId, verdict: 'correct', reason: 'x'.repeat(1501) })).status, 400);
  assert.equal((await bad({ itemId: x.s.qItemId, verdict: 'change' })).status, 400);
  assert.equal((await bad({ itemId: x.s.qItemId, verdict: 'change', proposal: { prompt: 'p', options: ['a', 'b'], answer: 'c', explanation: '' } })).error, 'the correct answer must be one of the options');
  assert.equal((await bad(null)).status, 400);
  assert.equal((x.t.raw.prepare('SELECT COUNT(*) AS n FROM review_responses').get() as { n: number }).n, 0);
});

test('markDone keeps the first time', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await markDone(x.db, x.reviewer, NOW + 10);
  await markDone(x.db, x.reviewer, NOW + 99);
  assert.equal((x.t.raw.prepare('SELECT done_at FROM reviewers').get() as { done_at: number }).done_at, NOW + 10);
});

test('proposal checks', () => {
  const ok = { prompt: ' Q? ', options: ['a ', 'b'], answer: 'a', explanation: undefined };
  const r = checkQuestionProposal(ok);
  assert.ok(r.ok && (r.value as { prompt: string }).prompt === 'Q?' && (r.value as { explanation: string }).explanation === '');
  for (const bad of [
    { ...ok, prompt: '' }, { ...ok, options: ['a'] }, { ...ok, options: ['a', 'a'] }, { ...ok, options: ['a', ''] },
    { ...ok, options: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] }, { ...ok, answer: 'z' }, { ...ok, options: ['a', 1] }, { ...ok, prompt: 'x'.repeat(601) },
    null, 'text',
  ]) assert.equal(checkQuestionProposal(bad).ok, false, JSON.stringify(bad));
  assert.equal(checkLineProposal({ text: '  ' }).ok, false);
  assert.equal(checkLineProposal({ text: 'x'.repeat(1501) }).ok, false);
  assert.ok(checkLineProposal({ text: 'ok' }).ok);
  assert.equal(sameContent('lesson_line', { text: 'a ' }, { text: 'a' }), true);
  assert.equal(sameContent('question', { prompt: 'p', options: ['a', 'b'], answer: 'a', explanation: '' }, { prompt: 'p', options: ['a', 'b'], answer: 'b', explanation: '' }), false);
});
