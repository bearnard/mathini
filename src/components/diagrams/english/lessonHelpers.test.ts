import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement, isValidElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  ACTIVE_EXAMPLES, AIDA, activeParts, beAgrees, beForm, examTime, hasIntroComma, introSentence, partsText, passiveParts, shareWidths, totalMinutes,
} from './lessonHelpers';
import { learnSteps as dramaSteps, script } from '../../../curriculum/grade7/english/term3/drama-continued-novel-study/lesson';
import { learnSteps as projectSteps, voice, comma } from '../../../curriculum/grade7/english/term3/project-language-refinement/lesson';
import { learnSteps as visualSteps, advert, hook, slogan } from '../../../curriculum/grade7/english/term3/visual-literacy-persuasive-texts/lesson';
import { learnSteps as examSteps, minutes, fixedBe } from '../../../curriculum/grade7/english/term4/exam-writing-practice/lesson';
import { learnSteps as grammarSteps, were, opener } from '../../../curriculum/grade7/english/term4/grammar-consolidation/lesson';
import type { LearnStep } from '../../CapsSubjectTopic';

const here = path.dirname(fileURLToPath(import.meta.url));
const lessonFile = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum/grade7/english', p), 'utf8');
const files = {
  drama: lessonFile('term3/drama-continued-novel-study/DramaContinuedNovelStudy.tsx'),
  project: lessonFile('term3/project-language-refinement/ProjectLanguageRefinement.tsx'),
  visual: lessonFile('term3/visual-literacy-persuasive-texts/VisualLiteracyPersuasiveTexts.tsx'),
  exam: lessonFile('term4/exam-writing-practice/ExamWritingPractice.tsx'),
  grammar: lessonFile('term4/grammar-consolidation/GrammarConsolidation.tsx'),
};
const bankOf = (src: string) => src.slice(src.indexOf('const bank'));

const html = (s: LearnStep) => renderToStaticMarkup(createElement('div', null, isValidElement(s.content) ? s.content : null));
const allHtml = (steps: LearnStep[]) => steps.map(html).join('\n');
const text = (h: string) => h.replace(/<[^>]+>/g, ' ').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');

test('active and passive sentences are built from the same clause, tense kept', () => {
  const [project, speech, future, posters] = ACTIVE_EXAMPLES;
  assert.equal(partsText(activeParts(project.clause, project.tense)), 'The learners completed the poster project.');
  assert.equal(partsText(passiveParts(project.clause, project.tense)), 'The poster project was completed by the learners.');
  assert.equal(partsText(passiveParts(speech.clause, speech.tense)), 'The speech was prepared by the class.');
  assert.equal(partsText(activeParts(future.clause, future.tense)), 'The class will prepare the speech.');
  assert.equal(partsText(passiveParts(future.clause, future.tense)), 'The speech will be prepared by the class.');
  assert.equal(partsText(activeParts(posters.clause, posters.tense)), 'The teachers check the posters.');
  assert.equal(partsText(passiveParts(posters.clause, posters.tense)), 'The posters are checked by the teachers.');
});

test('the "be" form agrees with the new subject and the tense', () => {
  assert.equal(beForm(false, 'past'), 'was');
  assert.equal(beForm(true, 'past'), 'were');
  assert.equal(beForm(false, 'present'), 'is');
  assert.equal(beForm(true, 'present'), 'are');
  assert.equal(beForm(true, 'future'), 'will be');
  assert.equal(beAgrees(true, 'past'), 'were');
  assert.equal(beAgrees(false, 'present'), 'is');
});

test('intro commas: the bank answers are the ones the helper builds', () => {
  assert.equal(introSentence('after editing', 'we checked every paragraph carefully'), 'After editing, we checked every paragraph carefully.');
  assert.equal(comma.planned, 'Because we planned early, the project ran smoothly.');
  assert.equal(opener.bell, 'When the bell rang, the class started writing.');
  assert.equal(opener.however, 'However, the group completed the task on time.');
  assert.ok(hasIntroComma(opener.bell, 'when the bell rang'));
  assert.ok(!hasIntroComma('After editing; we checked every paragraph carefully.', 'after editing'));
  assert.ok(!hasIntroComma('After editing we checked every paragraph carefully', 'after editing'));
  assert.ok(!hasIntroComma('After editing we checked, every paragraph carefully.', 'after editing'));
});

test('exam time shares add up and the bar widths fill the bar', () => {
  assert.equal(totalMinutes(examTime), 40);
  assert.equal(minutes.plan + minutes.write + minutes.edit, minutes.total);
  const w = shareWidths(examTime, 280);
  assert.ok(Math.abs(w.reduce((a, b) => a + b, 0) - 280) < 1e-9);
  assert.equal(AIDA.map((a) => a.letter).join(''), 'AIDA');
  assert.equal(AIDA[0].word, 'Attention');
  assert.equal(fixedBe, 'were');
  assert.equal(were, 'were');
});

const suites: [string, LearnStep[], number][] = [
  ['drama', dramaSteps, 5], ['project', projectSteps, 6], ['visual', visualSteps, 5], ['exam', examSteps, 6], ['grammar', grammarSteps, 6],
];

for (const [name, steps, count] of suites) {
  test(`${name}: renders all ${count} slides, the last is Check yourself`, () => {
    assert.equal(steps.length, count);
    assert.equal(steps[steps.length - 1].title, 'Check yourself');
    steps.forEach((s) => assert.ok(html(s).length > 200, s.title));
    assert.ok(steps.every((s) => typeof s.title === 'string' && s.title.length > 0));
    const last = html(steps[steps.length - 1]);
    assert.ok((last.match(/<ol/g) ?? []).length >= 2);
    assert.ok(((last.match(/<li/g) ?? []).length) >= 6, 'question list and answer list, 3-4 items each');
  });
}

test('every teaching slide has a Rule, a Worked example and a Mistake', () => {
  for (const [, steps] of suites) {
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      assert.ok(h.includes('The rule') && h.includes('Worked example') && h.includes('Common mistake'), s.title);
    }
  }
});

test('drama: the speaker answer and the stage direction come from the script', () => {
  const h = text(allHtml(dramaSteps));
  assert.equal(script[1].speaker, 'Naledi');
  assert.ok(h.includes('Then why is there ink on your hands?'));
  assert.ok(h.includes('stage directions'));
  for (const w of ['motivation', 'character development', 'Conflict', 'theme', 'claim', 'evidence', 'explanation', 'dialogue']) assert.ok(h.toLowerCase().includes(w.toLowerCase()), w);
  assert.ok(h.includes('the argument about honesty reveals the theme of trust'));
  assert.ok(bankOf(files.drama).includes('The argument about honesty reveals the theme of trust.'));
});

test('project: every voice sentence shown is the helper output and matches the bank', () => {
  const h = text(allHtml(projectSteps));
  assert.equal(voice.project.passive, 'The poster project was completed by the learners.');
  assert.equal(voice.future.passive, 'The speech will be prepared by the class.');
  assert.ok(h.includes(voice.speech.passive));
  assert.ok(h.includes(comma.edited));
  assert.ok(bankOf(files.project).includes(voice.speech.passive));
  assert.ok(bankOf(files.project).includes(voice.project.active));
  assert.ok(bankOf(files.project).includes(comma.edited));
  assert.ok(bankOf(files.project).includes(comma.planned));
  for (const w of ['deadlines', 'subject and a verb', 'checklist', 'subordinate clause']) assert.ok(h.includes(w), w);
});

test('visual: the adverts, hook and AIDA match the bank wording', () => {
  const h = text(allHtml(visualSteps));
  assert.ok(h.includes(advert) && h.includes(hook) && h.includes(slogan));
  assert.ok(bankOf(files.visual).includes(hook));
  assert.ok(h.includes('Attention') && h.includes('Interest') && h.includes('Desire') && h.includes('Action'));
  for (const w of ['target audience', 'layout', 'slogan', 'sports shoes', 'Who is this text for, and what does it want them to do?']) assert.ok(h.includes(w), w);
});

test('exam: time, tone, text type and editing answers are in the slides', () => {
  const h = text(allHtml(examSteps));
  assert.ok(h.includes(`${minutes.plan} + ${minutes.write} + ${minutes.edit} = ${minutes.total}`));
  for (const w of ['formal letter', 'transactional', 'I would appreciate your response on this matter.', 'outline', 'introduction', 'punctuation', 'agreement', 'proofread']) assert.ok(h.toLowerCase().includes(w.toLowerCase()), w);
  assert.ok(bankOf(files.exam).includes('I would appreciate your response on this matter.'));
});

test('grammar: the bank answers are the ones the slides teach', () => {
  const h = text(allHtml(grammarSteps));
  for (const a of ['They will revise before the test.', 'She read the article and wrote a summary.', `The learners ${were} ready.`, opener.bell, opener.however, 'clear']) {
    assert.ok(h.includes(a), a);
  }
  for (const a of ['They will revise before the test.', 'She read the article and wrote a summary.', 'The learners were ready.', opener.bell, opener.however]) assert.ok(bankOf(files.grammar).includes(a), a);
  assert.ok(h.includes('subject and a verb') && h.includes('Language in context'));
});

test('no lesson file throws at module load or uses AI images', () => {
  const dirs = ['term3/drama-continued-novel-study', 'term3/project-language-refinement', 'term3/visual-literacy-persuasive-texts', 'term4/exam-writing-practice', 'term4/grammar-consolidation'];
  for (const d of dirs) {
    const src = lessonFile(`${d}/lesson.tsx`);
    assert.ok(!/throw new Error/.test(src));
    assert.ok(!/<img|\.png|\.webp|\.jpg/.test(src));
  }
});
