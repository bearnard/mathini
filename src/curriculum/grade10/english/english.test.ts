import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { CAPS_G10, wordCount } from './_shared/capsFacts';
import { missingPhrases } from './_shared/annotate';
import { englishHLGrade10 } from './index';
import * as genres from './term1/literary-genres-text-features/LiteraryGenresTextFeaturesContent';
import * as language from './term1/language-structures-conventions/LanguageStructuresConventionsContent';
import * as essay from './term1/essay-writing-process/EssayWritingProcessContent';
import * as letters from './term1/letters-cv-agenda-minutes/LettersCvAgendaMinutesContent';
import * as comprehension from './term1/comprehension-summary/ComprehensionSummaryContent';
import * as novel from './term2/novel-drama-study/NovelDramaStudyContent';
import * as argument from './term2/argument-formal-speech/ArgumentFormalSpeechContent';
import * as media from './term2/visual-media-texts/VisualMediaTextsContent';
import * as midyear from './term2/midyear-exam-preparation/MidyearExamPreparationContent';
import * as poetry from './term3/poetry-seen-unseen/PoetrySeenUnseenContent';
import * as oral from './term3/oral-communication/OralCommunicationContent';
import * as imaginative from './term3/imaginative-transactional/ImaginativeTransactionalContent';
import { annotate } from './_shared/annotate';

interface Lesson { id: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr10-literary-genres-text-features-t1', ...genres },
  { id: 'gr10-language-structures-conventions-t1', ...language },
  { id: 'gr10-essay-writing-process-t1', ...essay },
  { id: 'gr10-letters-cv-agenda-minutes-t1', ...letters },
  { id: 'gr10-comprehension-summary-t1', ...comprehension },
  { id: 'gr10-novel-drama-study-t2', ...novel },
  { id: 'gr10-argument-formal-speech-t2', ...argument },
  { id: 'gr10-visual-media-texts-t2', ...media },
  { id: 'gr10-midyear-exam-preparation-t2', ...midyear },
  { id: 'gr10-poetry-seen-unseen-t3', ...poetry },
  { id: 'gr10-oral-communication-t3', ...oral },
  { id: 'gr10-imaginative-transactional-t3', ...imaginative },
];

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the Grade 10 English subject lists every lesson written so far, with matching task ids and tasks instructions', () => {
  const topics = englishHLGrade10.terms.flatMap((t) => t.topics);
  assert.deepEqual(topics.map((t) => t.id), LESSONS.map((l) => l.id));
  const instructions: Record<string, string> = {};
  for (const f of fs.readdirSync('src/lib/server/caps/tasks').filter((x) => /^eng-gr10-term\d\.json$/.test(x))) Object.assign(instructions, (JSON.parse(fs.readFileSync(path.join('src/lib/server/caps/tasks', f), 'utf8')) as { tasks: Record<string, string> }).tasks);
  for (const l of LESSONS) assert.ok(instructions[l.id], `${l.id}: no instruction in tasks/eng-gr10-term*.json`);
  assert.deepEqual(Object.keys(instructions).filter((k) => !LESSONS.some((l) => l.id === k)), [], 'an instruction with no lesson');
});

for (const l of LESSONS) {
  test(`${l.id}: 4 to 6 slides, the last is "Check yourself", every slide renders, and every picture has a description`, () => {
    assert.ok(l.learnSteps.length >= 4 && l.learnSteps.length <= 6, `${l.learnSteps.length} slides`);
    assert.equal(l.learnSteps.at(-1)?.title, 'Check yourself');
    for (const s of l.learnSteps) {
      const out = html(h('div', null, s.content));
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      for (const svg of out.match(/<svg[^>]*>/g) ?? []) assert.match(svg, /aria-label="[^"]{20,}"/, `${s.title}: picture without a description`);
      assert.ok(!/undefined|NaN|\[object/.test(out), `${s.title}: broken text`);
    }
    const checks = html(h('div', null, l.learnSteps.at(-1)!.content));
    assert.ok((checks.match(/<details/g) ?? []).length >= 3, 'three or more check questions, one hidden answer each');
  });

  test(`${l.id}: 12 to 14 questions; four distinct options; the answer is one of them; no quality reject and no warning`, () => {
    assert.ok(l.bank.length >= 12 && l.bank.length <= 14, `${l.bank.length} questions`);
    assert.equal(new Set(l.bank.map((q) => q.prompt)).size, l.bank.length, 'duplicate prompts');
    for (const q of l.bank) {
      assert.equal(q.options.length, 4, q.prompt);
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer), q.prompt);
      assert.ok((q.explanation ?? '').length >= 40, `explanation too short: ${q.prompt}`);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: l.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}:${x.detail}`), [], q.prompt);
    }
  });
}

test('the key of each question is spread over the four positions (no pattern a learner could guess)', () => {
  const all = LESSONS.flatMap((l) => l.bank);
  const position = [0, 0, 0, 0];
  for (const q of all) position[q.options.indexOf(q.answer)]++;
  // Position counts are shown in the failure message; every position is used, and none holds more than half of the questions.
  assert.ok(position.every((n) => n > 0), JSON.stringify(position));
  assert.ok(Math.max(...position) <= all.length / 2, JSON.stringify(position));
});

// Short answers (the terms and definitions) must be findable in the lesson. A long answer that is itself an example sentence (a letter's closing line,
// a vivid sentence) is not repeated in the lesson on purpose: the lesson teaches the idea with different examples.
test('every short correct answer can be found in its lesson (the lesson teaches what the bank asks)', () => {
  const gaps = findGaps().gaps.filter((g) => g.file.startsWith('grade10/english/'));
  assert.deepEqual(gaps.filter((g) => g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7).map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('CAPS facts used by the lessons are the ones in the document (marks add up, lengths are as printed)', () => {
  const c = CAPS_G10;
  assert.equal(c.paper1Marks, c.comprehensionMarks + c.summaryMarks + c.languageMarks);
  assert.equal(c.paper3Marks, c.essayMarks + 2 * c.transactionalMarks);
  assert.equal(c.paper1Marks + c.paper2Marks + c.paper3Marks + c.paper4Marks, 300);
  assert.equal(c.midyearMarks, c.paper1Marks + c.paper2Marks + c.paper3Marks - 0);
  assert.equal(c.essayWords, '300-350');
  assert.equal(c.transactionalWords, '180-200');
  assert.equal(c.summaryPassageWords, 280);
  assert.equal(c.comprehensionWords, '500-600');
});

test('the lessons state those facts in their text', () => {
  const all = LESSONS.map((l) => text(html(h('div', null, l.learnSteps.map((s) => s.content))))).join(' ');
  for (const needle of ['300 to 350 words', '180 to 200 words', 'marked out of 50', '500 to 600 words', '30 marks', '10 marks', '280 words', 'out of 25', '35 marks', '250 marks', '25 marks', 'two hours']) assert.ok(all.includes(needle), needle);
});

test('lesson 3: the model opening is annotated at real places, and the essay plan adds up to a legal length', () => {
  assert.deepEqual(missingPhrases(essay.NARRATIVE_OPENING, essay.NARRATIVE_NOTES), []);
  const total = essay.ESSAY_PARTS.reduce((n, p) => n + p.words, 0);
  assert.ok(total >= 300 && total <= 350, `${total} words`);
  assert.ok(wordCount(essay.NARRATIVE_OPENING) > 20);
});

test('lesson 5: the summary is much shorter than its passage, drawn from real counts, and uses none of the passage\'s example', () => {
  const p = wordCount(comprehension.GARDEN_PASSAGE);
  const s = wordCount(comprehension.GARDEN_SUMMARY);
  assert.ok(s < p / 2, `${s} of ${p}`);
  assert.ok(!/spinach/i.test(comprehension.GARDEN_SUMMARY), 'the example is left out of the summary');
  assert.ok(wordCount(comprehension.SHOP_PASSAGE) > 60);
});

test('lesson 1: the poem has four lines and lines 2 and 4 end with rhyming words (go / below)', () => {
  assert.equal(genres.POEM_LINES.length, 4);
  const end = (l: string) => l.replace(/[^a-z ]/gi, '').trim().split(' ').at(-1)!.toLowerCase();
  assert.ok(end(genres.POEM_LINES[1]).endsWith('o') && end(genres.POEM_LINES[3]).endsWith('ow'));
  assert.equal(end(genres.POEM_LINES[1]), 'go');
  assert.equal(end(genres.POEM_LINES[3]), 'below');
});

test('term 2: the CAPS marks add up, and the exam time plans fill the two hours', () => {
  const c = CAPS_G10;
  assert.equal(c.poetryMarks, c.seenPoetryMarks + c.unseenPoetryMarks);
  assert.equal(c.paper2Marks, c.poetryMarks + c.novelDramaEssayMarks + c.novelDramaContextualMarks);
  assert.equal(c.literatureTaskMarks, c.literatureTaskContextualMarks + c.literatureTaskEssayMarks);
  assert.equal(c.midyearMarks, c.paper1Marks + c.paper2Marks + c.paper3Marks);
  assert.equal(c.paperHours, 2);
  for (const plan of [midyear.PAPER1_PLAN, midyear.PAPER2_PLAN, midyear.PAPER3_PLAN]) assert.equal(plan.reduce((n, r) => n + r.minutes, 0), c.paperHours * 60);
  // about 1,7 minutes per mark in Paper 1, as the lesson says
  assert.equal(Math.round((c.paperHours * 60 * 10) / c.paper1Marks) / 10, 1.7);
});

test('term 2: the annotated extracts are annotated at real places', () => {
  assert.deepEqual(missingPhrases(novel.PROSE_EXTRACT, novel.PROSE_NOTES), []);
  assert.deepEqual(missingPhrases(argument.SPEECH, argument.SPEECH_NOTES), []);
  assert.equal(annotate(novel.PROSE_EXTRACT, novel.PROSE_NOTES).length, 3);
  assert.equal(annotate(argument.SPEECH, argument.SPEECH_NOTES).length, 3);
});

test('term 3: the annotated poems are annotated at real places and the rhyme claims are true', () => {
  assert.deepEqual(missingPhrases(poetry.WORDSWORTH, poetry.WORDSWORTH_NOTES), []);
  assert.deepEqual(missingPhrases(poetry.BLAKE, poetry.BLAKE_NOTES), []);
  assert.deepEqual(missingPhrases(poetry.UNSEEN, poetry.UNSEEN_NOTES), []);
  assert.equal(poetry.UNSEEN_LINES.length, 6);
  // the bank item with four end words: day / stone / play / bone is ABAB
  const q = poetry.bank.find((b) => b.prompt.includes('"day", "stone", "play" and "bone"'))!;
  assert.equal(q.answer, 'ABAB');
});

test('term 3: the model transactional text is 180 to 200 words (body only, as CAPS counts it) and the story is exactly 50 words', () => {
  const body = wordCount(imaginative.LETTER_PARAGRAPHS.join(' '));
  assert.ok(body >= 180 && body <= 200, `${body} words`);
  assert.equal(wordCount(imaginative.FIFTY_WORD_STORY), 50);
  assert.equal(imaginative.SCENARIOS.length, 8);
});
