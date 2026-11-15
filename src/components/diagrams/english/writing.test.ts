import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { AIDA, EXAM_STAGES, EXAM_TOTAL, ESSAY_STRUCTURE, ESSAY_TYPES, HUB_SKILLS, PROCESS, SCAN_LINES, SUMMARY_BAD, SUMMARY_GOOD, SUMMARY_SOURCE, aidaInitials, findLine, splitMinutes, wordCount } from './writing';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');
const exam = lesson('grade8/english/term4/examination-writing/ExaminationWriting.tsx');
const cons = lesson('grade8/english/term4/language-literature-consolidation/LanguageLiteratureConsolidation.tsx');
const rev = lesson('grade8/english/term4/revision-oral-completion/RevisionOralCompletion.tsx');
const adv = lesson('grade9/english/term1/advertising-visual-design/AdvertisingVisualDesign.tsx');
const essay = lesson('grade9/english/term1/essay-transactional-writing/EssayTransactionalWriting.tsx');

const titles = (src: string) => [...src.matchAll(/^ {4}title: '(.+)',$/gm)].map((m) => m[1]);
const beforeBank = (src: string) => src.slice(0, src.indexOf('const bank'));

test('every lesson has 4-6 slides, one block set each, and ends with Check yourself', () => {
  for (const src of [exam, cons, rev, adv, essay]) {
    const t = titles(src);
    assert.ok(t.length >= 4 && t.length <= 6, t.join('|'));
    assert.equal(t[t.length - 1], 'Check yourself');
    const body = beforeBank(src);
    const checks = body.split('<Check ').length - 1;
    assert.ok(checks >= 3 && checks <= 4, `checks: ${checks}`);
    // every teaching slide has a rule and a common mistake
    assert.equal(body.split('<Rule>').length - 1, t.length - 1);
    assert.equal(body.split('<Mistake>').length - 1, t.length - 1);
    assert.ok(body.includes('<Worked'));
  }
});

test('time plan: 60 minutes split 10 / 40 / 10 and always sums to the total', () => {
  assert.equal(EXAM_TOTAL, 60);
  assert.deepEqual(splitMinutes(EXAM_TOTAL, EXAM_STAGES.map((s) => s.share)), [10, 40, 10]);
  assert.deepEqual(splitMinutes(45, [1, 4, 1]).reduce((a, b) => a + b, 0), 45);
  assert.equal(splitMinutes(7, [1, 1, 1]).reduce((a, b) => a + b, 0), 7);
  assert.ok(exam.includes('splitMinutes(EXAM_TOTAL'));
  assert.deepEqual(ESSAY_STRUCTURE.map((s) => s.label), ['Introduction', 'Body paragraphs', 'Conclusion']);
});

test('examination writing text holds what the bank asks', () => {
  for (const s of ['plan', 'conventions', 'conventions of its own format', 'polite and precise', 'introduction, body paragraphs and a conclusion', 'audience and purpose', 'exact task asked', 'grammar and punctuation', 'time']) {
    assert.ok(beforeBank(exam).toLowerCase().includes(s.toLowerCase()), s);
  }
  assert.ok(exam.includes('We were late for the bus, and the driver didn’t wait.'));
});

test('summary: the bank sentence is shorter than the source, the padded one is not a summary of content', () => {
  assert.equal(SUMMARY_GOOD, 'The report highlights water shortages and proposes community saving measures.');
  assert.ok(wordCount(SUMMARY_GOOD) < wordCount(SUMMARY_SOURCE));
  assert.equal(wordCount(SUMMARY_SOURCE), 41);
  assert.equal(wordCount(SUMMARY_GOOD), 10);
  assert.ok(!SUMMARY_BAD.includes('water'));
  assert.ok(cons.includes('SUMMARY_GOOD') && cons.includes('SUMMARY_SOURCE'));
  assert.equal(HUB_SKILLS.length, 4);
  for (const s of ['evidence', 'theme', 'tense consistency', 'key ideas briefly', 'integrated', 'Lerato walked to the shop and bought bread.']) {
    assert.ok(beforeBank(cons).includes(s), s);
  }
});

test('skim and scan: the chess club line is found and has its time', () => {
  assert.equal(findLine(SCAN_LINES, 'chess'), 2);
  assert.equal(findLine(SCAN_LINES, 'CHOIR'), 0);
  assert.equal(findLine(SCAN_LINES, 'rugby'), -1);
  assert.ok(SCAN_LINES[2].includes('Thursday 14:00'));
  assert.ok(rev.includes('The answer is Thursday at 14:00.'));
  for (const s of ['Skimming', 'Scanning', 'specific detail', 'adapt', 'portfolio', 'instructions', 'example from a text you studied']) {
    assert.ok(beforeBank(rev).toLowerCase().includes(s.toLowerCase()), s);
  }
});

test('AIDA spells AIDA in order, and the advert lesson covers the bank', () => {
  assert.equal(aidaInitials(), 'AIDA');
  assert.deepEqual(AIDA.map((s) => s.word), ['Attention', 'Interest', 'Desire', 'Action']);
  for (const s of ['Attention, Interest, Desire, Action', 'emotive language', 'Tone', 'Teenagers', 'Luxury', 'celebrity', 'target audience', 'Action']) {
    assert.ok(beforeBank(adv).includes(s) || beforeBank(adv).toLowerCase().includes(s.toLowerCase()), s);
  }
});

test('essay lesson: four types, four process stages, poster parts', () => {
  assert.deepEqual(ESSAY_TYPES.map((t) => t.type), ['Narrative', 'Descriptive', 'Reflective', 'Argumentative']);
  assert.deepEqual(PROCESS.map((s) => s.label), ['Plan', 'Draft', 'Review', 'Revise']);
  const body = beforeBank(essay);
  for (const s of ['heading', 'key details', 'call to action', 'read your draft aloud', 'audience', 'ESSAY_TYPES', 'PROCESS']) {
    assert.ok(body.toLowerCase().includes(s.toLowerCase()), s);
  }
});
