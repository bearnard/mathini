import test from 'node:test';
import assert from 'node:assert/strict';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import * as o from './components/diagrams/english/g9eng';

// Grade 9 English HL gaps: cartoons, summary writing, prose skills (5 lessons x 14 questions): shape, question quality, registration, and every printed number recomputed here
// with plain arithmetic, independent of oral789.ts. No marks, no recordings, general criteria only.
stubCss();
type Mod = { learnSteps: Parameters<typeof renderSlides>[0]; bank: { prompt: string; options: string[]; answer: string; explanation?: string }[] };
const L: [string, string, string, number, 7 | 8 | 9, string][] = [
  ['term1/reading-cartoons-visual-texts', 'ReadingCartoonsVisualTexts', 'gr9-reading-cartoons-visual-texts-t1', 1, 9, 'cartoon'],
  ['term2/summary-writing', 'SummaryWriting', 'gr9-summary-writing-t2', 2, 9, 'summary'],
  ['term3/prose-plot-setting-conflict', 'ProsePlotSettingConflict', 'gr9-prose-plot-setting-conflict-t3', 3, 9, 'plot'],
  ['term3/prose-character-narrator-theme', 'ProseCharacterNarratorTheme', 'gr9-prose-character-narrator-theme-t3', 3, 9, 'character'],
  ['term4/prose-contextual-questions', 'ProseContextualQuestions', 'gr9-prose-contextual-questions-t4', 4, 9, 'contextual'],
];
const mods: Record<string, Mod> = {};
for (const [d, n, , , g] of L) mods[d] = (await import(`./curriculum/grade${g}/english/${d}/${n}`)) as Mod;
const text = (d: string) => renderSlides(mods[d].learnSteps).map((s) => s.text).join(' | ');
const ans = (d: string, start: string): string => {
  const hit = mods[d].bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, start);
  return hit[0].answer;
};

for (const [d] of L) {
  test(`${d}: standard shape, 14 valid questions, no marks`, () => {
    const sl = renderSlides(mods[d].learnSteps);
    assertLessonShape(sl);
    for (const s of sl) assert.equal(s.labelled, s.pictures, `${d} / ${s.title}`);
    const bank = mods[d].bank;
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(q.options.length, 4); assert.equal(new Set(q.options).size, 4); assert.ok(q.options.includes(q.answer));
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((x) => x !== q).map((x) => x.prompt) });
      assert.deepEqual(res.reasons.filter((r) => r.severity === 'reject').map((r) => `${r.code}: ${r.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    const t = text(d);
    assert.ok(!/\bNaN\b|undefined|\[object|\{o\./.test(t), 'no unevaluated expressions');
    assert.ok(!/\b\d+ marks\b|\bout of \d+\b/i.test(t), 'no invented marks');
  });
}

test('registered in the right terms of Grades 7, 8 and 9, no term empty', () => {
  for (const [, , id, term, g] of L) {
    const gr = { 7: grade7, 8: grade8, 9: grade9 }[g];
    const eng = gr.subjects.find((s) => s.id === 'eng')!;
    assert.equal(eng.terms.find((t) => t.topics.some((p) => p.id === id))?.id, term, id);
    for (const t of eng.terms) assert.ok(t.topics.length > 0);
  }
});

test('INDEPENDENT: word counts, summary limit and the original passages', () => {
  const words = (x: string): number => (x.match(/\S+/g) ?? []).length;
  assert.equal(240 / 3, 80); assert.equal(80 / 5, 16); assert.equal(300 / 3, 100);
  assert.equal(o.summaryLimit(), 80); assert.equal(o.wordsPerPoint(), 16);
  assert.equal(words('The school started a recycling project in March to reduce waste.'), 11);
  assert.equal(words('School starts recycling to reduce waste.'), 6);
  assert.equal(o.countWords(o.LONG_SENTENCE), 11); assert.equal(o.countWords(o.SHORT_SENTENCE), 6); assert.equal(o.wordsSaved(), 11 - 6);
  assert.equal(o.storyWords(), words(o.STORY.join(' '))); assert.equal(o.storyWords(), 93);
  assert.equal(o.characterWords(), words(o.CHARACTER.join(' '))); assert.equal(o.characterWords(), 50);
  assert.equal(o.extractWords(), words(o.EXTRACT.join(' '))); assert.equal(o.extractWords(), 31);
  assert.equal(o.PLOT_STAGES.length, 5);
  assert.throws(() => o.summaryLimit({ passageWords: 250, fractionDen: 3 }));
  const a = (d: string, start: string): string => {
    const hit = mods[d].bank.filter((b) => b.prompt.startsWith(start));
    assert.equal(hit.length, 1, start);
    return hit[0].answer;
  };
  const sm = 'term2/summary-writing';
  assert.equal(a(sm, 'A passage has 240 words'), '80 words');
  assert.equal(a(sm, 'A passage has 300 words'), '100 words');
  assert.equal(a(sm, 'A summary has an 80-word limit'), '16 words');
  assert.equal(a(sm, 'A sentence has 11 words'), '5 words');
  for (const [d, s] of [['term2/summary-writing', '80 words'], ['term3/prose-plot-setting-conflict', '93 words'], ['term3/prose-character-narrator-theme', '50 words'], ['term4/prose-contextual-questions', '31 words']]) assert.ok(text(d).includes(s), `${d} prints ${s}`);
  for (const sent of o.STORY) assert.ok(text('term3/prose-plot-setting-conflict').includes(sent.replace(/'/g, "'")), sent);
  for (const sent of o.CHARACTER) assert.ok(text('term3/prose-character-narrator-theme').includes(sent), sent);
  for (const sent of o.EXTRACT) assert.ok(text('term4/prose-contextual-questions').includes(sent), sent);
});
