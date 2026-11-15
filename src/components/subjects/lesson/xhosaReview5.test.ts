import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import type { XhLesson } from './xhosaLessonData';

// Regression tests for the cross-review fixes (audit/lesson-review-xhosa-5.md).
const load = async (p: string) => (await import(path.resolve('src/curriculum', p))).default as XhLesson;
const all = (l: XhLesson) => l.slides.flatMap((s) => [s.rule, s.mistake ?? '', ...s.examples.map((e) => e.xh + ' | ' + e.en)]).join('\n');

test('G9 T3 R&V: the metaphor box does not call the sun a star', async () => {
  const t = all(await load('grade9/isixhosa/term3/reading-viewing/ReadingViewingT3.data.ts'));
  assert.ok(!/is a star/.test(t));
  assert.ok(/really the sun/.test(t));
});

test('G9 T4 R&V: Umfanekiso is glossed as picture and the evidence answers the why-question', async () => {
  const l = await load('grade9/isixhosa/term4/reading-viewing/ReadingViewingT4.data.ts');
  const t = all(l);
  assert.ok(!/Umfanekiso \| Composition/.test(t));
  const exam = l.slides.find((s) => s.title === 'Exam reading strategy')!;
  assert.ok(/Thando helps him/.test(exam.examples[1].en));
});

test('G9 T3 language structures: the kodwa warning explains itself; ngo-7 is glossed', async () => {
  const t = all(await load('grade9/isixhosa/term3/language-structures/LanguageStructuresT3.data.ts'));
  assert.ok(!/is wrong for a reason/.test(t));
  assert.ok(/ngo-7 \(at 7/.test(t));
});

test('G9 T4 language structures: plural marker depends on the noun class', async () => {
  const t = all(await load('grade9/isixhosa/term4/language-structures/LanguageStructuresT4.data.ts'));
  assert.ok(/zi- for iincwadi/.test(t));
});
