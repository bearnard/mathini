import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import type { XhLesson } from './xhosaLessonData';

// Regression tests for the Grade 7 isiXhosa SAL cross-review (xhosa-2): lessons must not contradict their own rules.
const load = async (rel: string) => (await import(path.resolve('src/curriculum/grade7/isixhosa', rel))).default as XhLesson;
const text = (l: XhLesson) => JSON.stringify(l);

test('T3 language structures: future examples use za + ku- as the rule says, and no blanket comma rule before kuba', async () => {
  const l = await load('term3/language-structures/LanguageStructuresT3.data.ts');
  assert.ok(!/ndiya ku/i.test(text(l)), 'future must be ndiza ku-, not ndiya ku-');
  assert.ok(!l.slides[0].rule.includes('comma before the connector'));
});

test('T3 reading: the question-first strategy is scoped to finding one detail', async () => {
  const l = await load('term3/reading-viewing/ReadingViewingT3.data.ts');
  assert.ok(!l.checks.some((c) => /first in a comprehension task/i.test(c.q)));
});

test('T4 listening: health habits rule matches the subjunctive examples (sitye, siphumle)', async () => {
  const l = await load('term4/listening-speaking/ListeningSpeakingT4.data.ts');
  const s = l.slides[1];
  assert.ok(!/infinitive/i.test(s.rule));
  for (const v of ['sitye', 'siphumle']) {
    assert.ok(s.rule.includes(v) && s.examples.some((e) => e.xh.includes(v)), v);
  }
});

test('T2 listening: the rude-request mistake uses the same Ndinike form as the bank', async () => {
  const l = await load('term2/listening-speaking/ListeningSpeakingT2.data.ts');
  assert.ok(l.slides[0].mistake!.includes('Ndinike amasi'));
});
