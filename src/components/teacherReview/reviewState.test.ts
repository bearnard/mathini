import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contentFromDraft, counts, draftFromContent, formatExpiry, initialDraft, progressPercent, resumeIndex, saveDecision, type ItemDraft, type QuestionDraft } from './reviewState';
import type { ReviewerItemView } from '../../lib/server/teacherReview/types';

const q: ReviewerItemView = {
  id: 1, kind: 'question', doubt: 'd', context: null, response: null,
  content: { prompt: 'Wat is more?', options: ['gister', 'more', 'vandag'], answer: 'more', explanation: 'e' },
};
const line: ReviewerItemView = { id: 2, kind: 'lesson_line', doubt: null, context: null, response: null, content: { text: 'Ek gaan more.' } };

test('a question draft keeps the key as an index and round-trips', () => {
  const d = draftFromContent('question', q.content) as QuestionDraft;
  assert.equal(d.keyIndex, 1);
  assert.deepEqual(contentFromDraft('question', d), q.content);
  d.options[1] = 'môre';
  assert.equal((contentFromDraft('question', d) as { answer: string }).answer, 'môre', 'renaming the key option keeps it the key');
  assert.deepEqual(contentFromDraft('lesson_line', draftFromContent('lesson_line', line.content)), line.content);
});

test('initialDraft starts from the saved answer, else the original', () => {
  assert.equal(initialDraft(q).verdict, null);
  const saved = { ...q, response: { verdict: 'change' as const, proposal: { ...q.content, prompt: 'Wat is "more"?' } as never, confidence: 'sure' as const, reason: 'quotes' } };
  const d = initialDraft(saved);
  assert.equal(d.verdict, 'change');
  assert.equal((d.content as QuestionDraft).prompt, 'Wat is "more"?');
  assert.equal(d.reason, 'quotes');
});

test('saveDecision: nothing without a verdict; correct and unsure send as they are; a change must be valid and different', () => {
  const d = initialDraft(q);
  assert.deepEqual(saveDecision(q, d), { send: false, hint: null });
  assert.deepEqual(saveDecision(q, { ...d, verdict: 'correct', confidence: 'sure', reason: '  ' }), { send: true, body: { itemId: 1, verdict: 'correct', confidence: 'sure', reason: null } });
  const unsure = saveDecision(q, { ...d, verdict: 'unsure', reason: ' hmm ' });
  assert.ok(unsure.send && unsure.body.reason === 'hmm' && unsure.body.proposal === undefined);

  const same = saveDecision(q, { ...d, verdict: 'change' });
  assert.ok(!same.send && /Change something/.test(same.hint ?? ''));
  const edited: ItemDraft = { ...d, verdict: 'change', content: { ...(d.content as QuestionDraft), prompt: 'Wat beteken more?' } };
  const ok = saveDecision(q, edited);
  assert.ok(ok.send && (ok.body.proposal as { prompt: string }).prompt === 'Wat beteken more?');
  const broken = saveDecision(q, { ...d, verdict: 'change', content: { ...(d.content as QuestionDraft), options: ['a', 'a', 'b'] } });
  assert.ok(!broken.send && /same/.test(broken.hint ?? ''));
  const lineSame = saveDecision(line, { ...initialDraft(line), verdict: 'change' });
  assert.ok(!lineSame.send);
  const lineOk = saveDecision(line, { ...initialDraft(line), verdict: 'change', content: { text: 'Ek gaan môre.' } });
  assert.ok(lineOk.send && (lineOk.body.proposal as { text: string }).text === 'Ek gaan môre.');
});

test('counts, resume point, progress and expiry wording', () => {
  const items = [q, line];
  const drafts = { 1: { ...initialDraft(q), verdict: 'correct' as const }, 2: { ...initialDraft(line), verdict: 'unsure' as const } };
  assert.deepEqual(counts(items, drafts, new Set()), { total: 2, answered: 0, correct: 0, change: 0, unsure: 0, remaining: 2 });
  assert.deepEqual(counts(items, drafts, new Set([1])), { total: 2, answered: 1, correct: 1, change: 0, unsure: 0, remaining: 1 });
  assert.deepEqual(counts(items, drafts, new Set([1, 2])), { total: 2, answered: 2, correct: 1, change: 0, unsure: 1, remaining: 0 });
  assert.equal(resumeIndex(items, new Set()), 0);
  assert.equal(resumeIndex(items, new Set([1])), 1);
  assert.equal(resumeIndex(items, new Set([1, 2])), 1);
  assert.equal(resumeIndex([], new Set()), 0);
  assert.equal(progressPercent(1, 3), 33);
  assert.equal(progressPercent(0, 0), 0);
  assert.equal(progressPercent(5, 3), 100);
  assert.equal(formatExpiry(1000 + 3 * 86_400_000, 1000), 'in 3 days');
  assert.equal(formatExpiry(1000 + 86_400_000, 1000), 'tomorrow');
  assert.equal(formatExpiry(999, 1000), 'today');
});
