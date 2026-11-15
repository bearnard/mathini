import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { words, xhosaStrings, type XhLesson } from './xhosaLessonData';

// Every rewritten isiXhosa lesson keeps its content in a `<Topic>.data.ts` file next to the component. This test holds them all to the
// lesson standard (docs/notes/lesson-standard.md): 4-6 slides including "Check yourself", short prose, a gloss for every example.
const files: string[] = [];
const walk = (d: string) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/isixhosa/.test(p) && e.name.endsWith('.data.ts')) files.push(p);
  }
};
walk(path.join(process.cwd(), 'src', 'curriculum'));

test('there are rewritten isiXhosa lessons to check', () => assert.ok(files.length >= 1));

for (const f of files) {
  test(`isiXhosa lesson data meets the standard: ${path.relative('src/curriculum', f)}`, async () => {
    const lesson = (await import(path.resolve(f))).default as XhLesson;
    assert.ok(lesson.slides.length >= 3 && lesson.slides.length <= 5, `${lesson.slides.length} teaching slides (plus Check yourself = 4-6)`);
    assert.ok(lesson.checks.length >= 3 && lesson.checks.length <= 4, `${lesson.checks.length} checks`);
    for (const s of lesson.slides) {
      assert.ok(s.title && s.rule, 'title and rule');
      assert.ok(s.examples.length >= 2, `${s.title}: at least two examples`);
      for (const e of s.examples) assert.ok(e.xh.trim() && e.en.trim(), `${s.title}: example needs isiXhosa and an English gloss`);
      const prose = words(s.rule) + words(s.mistake ?? '');
      assert.ok(prose <= 80, `${s.title}: ${prose} words of prose (limit 80)`);
      if (s.wordParts) assert.ok(s.wordParts.parts.length <= 6, `${s.title}: at most 6 parts`);
    }
    assert.ok(xhosaStrings(lesson).length >= 6, 'enough isiXhosa content');
  });
}

test('Grade 8 T1 adjective slide teaches that the stem changes after class 9/10 prefixes (-hle becomes -ntle)', async () => {
  const lesson = (await import(path.resolve('src/curriculum/grade8/isixhosa/term1/language-structures/LanguageStructuresT1.data.ts'))).default as XhLesson;
  const slide = lesson.slides.find((s) => s.title === 'Adjectives agree with the noun');
  assert.ok(slide, 'adjective slide exists');
  assert.ok(/-ntle/.test(slide.rule) && !/stem stays the same/i.test(slide.rule));
  assert.ok(slide.examples.some((e) => e.xh === 'iincwadi ezintle'));
});

// Cross-review fixes (lesson-review-xhosa-4): glosses and rules that contradicted their own isiXhosa.
const load = async (rel: string) => (await import(path.resolve('src/curriculum', rel))).default as XhLesson;
const allText = (l: XhLesson) => JSON.stringify(l.slides);

test('G9 T1 writing: the present-tense opening is not glossed as past', async () => {
  const t = allText(await load('grade9/isixhosa/term1/writing-presenting/WritingPresentingT1.data.ts'));
  assert.ok(!t.includes('I went to school'));
});
test('G9 T2 listening: Hamba kakuhle is said by the shopkeeper, not the leaving customer', async () => {
  const t = allText(await load('grade9/isixhosa/term2/listening-speaking/ListeningSpeakingT2.data.ts'));
  assert.ok(!t.includes('(customer leaves)') && t.includes('shopkeeper, to the customer'));
});
test('G9 T2 language: passive rule mentions tya -> tyiwa', async () => {
  assert.ok(allText(await load('grade9/isixhosa/term2/language-structures/LanguageStructuresT2.data.ts')).includes('tyiwa'));
});
test('G9 T1 language: indirect speech rule matches its examples and ya- is labelled present', async () => {
  const t = allText(await load('grade9/isixhosa/term1/language-structures/LanguageStructuresT1.data.ts'));
  assert.ok(t.includes('the tense stays the same') && !t.includes('uThando uthi ndiyafunda') && !t.includes('"now"'));
});
test('G9 T1 reading: tone example is about the author’s word choice', async () => {
  assert.ok(allText(await load('grade9/isixhosa/term1/reading-viewing/ReadingViewingT1.data.ts')).includes('create it'));
});

// Review fixes (xhosa-6): glosses must match the isiXhosa and the lesson's own labels.
test('G11 T3 speaking: ndiyavuma is glossed as agree, not maintain', async () => {
  const l = (await import(path.resolve('src/curriculum/grade11/isixhosa/term3/listening-speaking/ListeningSpeakingT3.data.ts'))).default as XhLesson;
  const e = l.slides.flatMap((s) => s.examples).find((x) => x.xh.includes('ndiyavuma'));
  assert.ok(e && /agree/.test(e.en) && !/maintain/.test(e.en));
});
test('G12 T2 speaking: the anger example is glossed as anger', async () => {
  const l = (await import(path.resolve('src/curriculum/grade12/isixhosa/term2/listening-speaking/ListeningSpeakingT2.data.ts'))).default as XhLesson;
  const e = l.slides.flatMap((s) => s.examples).find((x) => x.xh === 'Uthetha ngomsindo.');
  assert.ok(e && /anger/.test(e.en) && !/annoyance/.test(e.en));
});
