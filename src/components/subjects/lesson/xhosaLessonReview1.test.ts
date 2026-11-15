import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import type { XhLesson } from './xhosaLessonData';

// Fixes from the cross-review of the isiXhosa lessons (block xhosa-1).
const load = async (p: string) => (await import(path.resolve('src/curriculum', p))).default as XhLesson;
const slide = (l: XhLesson, title: RegExp) => l.slides.find(s => title.test(s.title))!;

test('Check answers fit the blank: no stray "yafunda" after the gap', async () => {
  for (const p of ['grade6/isixhosa/term3/language-structures-t3/LanguageStructuresT3.data.ts', 'grade7/isixhosa/term2/language-structures/LanguageStructuresT2.data.ts']) {
    const l = await load(p);
    const c = l.checks.find(x => x.q.startsWith('Complete: Abafundi'))!;
    assert.ok(c.q.includes('___ (bayafunda or uyafunda)') && !c.q.includes('yafunda ('), p);
  }
});

test('Grade 6 reading T2: isibhengezo is an advert, isaziso a notice, in vocab and slides alike', async () => {
  const l = await load('grade6/isixhosa/term2/reading-viewing-t2/ReadingViewingT2.data.ts');
  const chip = l.slides.flatMap(s => s.vocab ?? []).find(v => v.word === 'Isibhengezo')!;
  assert.ok(/advert/i.test(chip.meaning) && !/notice/i.test(chip.meaning));
});

test('Grade 6 writing T3: invitation gloss claims only what the isiXhosa says', async () => {
  const l = await load('grade6/isixhosa/term3/writing-presenting-t3/WritingPresentingT3.data.ts');
  const e = l.slides[0].examples.find(x => x.xh.startsWith('Umenywa'))!;
  assert.ok(!/our|day/.test(e.en));
});

test('Grade 7 language structures T1: -ya- label, -ile rule and -ya- rule agree with the examples', async () => {
  const l = await load('grade7/isixhosa/term1/language-structures/LanguageStructuresT1.data.ts');
  const present = slide(l, /^Present/);
  assert.notEqual(present.wordParts!.parts.find(p => p.t === 'ya')!.label, 'now');
  assert.ok(/kakuhle/.test(present.rule), 'the -ya- rule must cover Yena uyacula kakuhle');
  assert.ok(!/just happened/.test(slide(l, /^Past/).rule), '-ile is used for yesterday too');
});

test('Grade 7 language structures T2: question-word position rule fits Kutheni ungafuni?', async () => {
  const l = await load('grade7/isixhosa/term2/language-structures/LanguageStructuresT2.data.ts');
  const q = slide(l, /^Questions/);
  assert.ok(!/near the end/.test(q.mistake!) && /Kutheni/.test(q.mistake!));
});
