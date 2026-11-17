import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences term 2: magnetism. The rules in the bank are written out independently of magnet10Helpers.ts.

stubCss();
const lesson = renderSlides((await import('./curriculum/grade10/ps/term2/magnetism/Magnetism')).learnSteps);
const bank = extractCuratedBanks().filter((q) => q.file.includes('/term2/magnetism/'));
const find = (start: string) => {
  const hits = bank.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

test('the lesson has the standard shape, and the bank has 14 valid questions with the key spread over all four positions', () => {
  assertLessonShape(lesson);
  assert.equal(bank.length, 14);
  for (const q of bank) {
    assert.equal(new Set(q.options).size, 4, q.prompt);
    assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
    const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
  }
  assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
});

test('INDEPENDENT: the rules of magnetism', () => {
  // like poles repel, unlike poles attract: written out as a table here
  const table: Record<string, string> = { 'N,N': 'repel', 'S,S': 'repel', 'N,S': 'attract', 'S,N': 'attract' };
  assert.equal(find('What happens when two north poles').answer.toLowerCase(), `they ${table['N,N']}`);
  assert.equal(find('What happens when a north pole and a south pole').answer.toLowerCase(), `they ${table['N,S']}`);
  assert.equal(find('In which direction do magnetic field lines go outside').answer, 'From the north pole to the south pole');
  assert.equal(find('What does the north end of a compass needle point to').answer, 'Geographic north');
  // a compass needle's N end is attracted to a magnetic S pole, so the Earth's magnetic pole near the geographic North Pole must be a south pole
  assert.equal(table['N,S'], 'attract');
  assert.equal(find('Which magnetic pole of the Earth is near the geographic North Pole').answer, 'A magnetic south pole');
  assert.equal(find('Which of these metals is attracted by a magnet').answer, 'Iron');
  assert.match(find('How can you show that an object is a magnet').answer, /repels/);
  assert.match(find('A bar magnet is cut in half').answer, /Two magnets/);
});

test('the lesson teaches what the bank asks (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  const text = lesson.map((s) => s.text).join(' ').toLowerCase();
  for (const q of bank) {
    const missing = words(q.answer).filter((w) => !text.includes(w));
    assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
  }
});
