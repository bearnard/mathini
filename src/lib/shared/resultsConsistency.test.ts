import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { summaryText, celebrates } from './practiceSummary';
import { nextBestStep, parentNextStep, teacherNextStep } from './progressMeasures';
import { splitScore, type MockItem } from '../../curriculum/grade6/natural-sciences/_shared/mockTest';
import { REVIEW_SESSION_SIZE } from '../server/review/due';
import PracticeSummary from '../../components/practice/PracticeSummary';

const read = (f: string) => fs.readFileSync(f, 'utf8');

test('the end of a practice session follows the score: no blanket "Well done" after a poor round', () => {
  assert.equal(summaryText(16, 16).title, 'Perfect round!');
  assert.equal(summaryText(13, 16).title, 'Great work!'); // 81%
  assert.equal(summaryText(11, 16).title, 'Good effort'); // 69%
  assert.equal(summaryText(7, 16).title, 'Keep practising'); // 44%
  assert.equal(summaryText(5, 16).title, 'This one is tricky'); // 31%
  assert.equal(summaryText(0, 0).percent, 0);
  for (const [c, t] of [[0, 16], [5, 16], [8, 16], [12, 16], [16, 16]]) assert.ok(!/well done/i.test(summaryText(c, t).title + summaryText(c, t).message), `${c}/${t}`);
  assert.equal(summaryText(5, 16).percent, 31);
});

test('the practice summary shows the score, the missed questions with their answers, the sections to revise, and what to do next', () => {
  const html = renderToStaticMarkup(createElement(PracticeSummary, {
    total: 16, correct: 5, onBackToLearn: () => undefined, onAgain: () => undefined, weakSections: ['Series circuits'],
    missed: Array.from({ length: 7 }, (_, i) => ({ prompt: `Question ${i + 1}?`, answer: `Answer ${i + 1}` })),
  }));
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.ok(text.includes('You got 5 of 16 right (31%)'));
  assert.ok(text.includes('This one is tricky') && !/Well done/.test(text));
  assert.ok(text.includes('Look at these again') && text.includes('Question 1?') && text.includes('Answer: Answer 5') && !text.includes('Question 6?'), 'five missed questions are listed');
  assert.ok(text.includes('…and 2 more'));
  assert.ok(text.includes('Sections to revise') && text.includes('Series circuits'));
  assert.ok(text.includes('Back to the lesson') && text.includes('Practise again'));
  const perfect = renderToStaticMarkup(createElement(PracticeSummary, { total: 4, correct: 4, missed: [], onAgain: () => undefined })).replace(/<[^>]+>/g, ' ');
  assert.ok(perfect.includes('Perfect round!') && !perfect.includes('Look at these again') && !perfect.includes('Back to the lesson'));
});

test('every topic practice screen ends with the summary (the same one), keeps a tally of right and missed answers, and none says "You completed all"', () => {
  const files = [
    'src/curriculum/grade6/natural-sciences/_shared/NstTopic.tsx', 'src/curriculum/grade6/history/_shared/HisTopic.tsx', 'src/curriculum/grade6/geography/_shared/GeoTopic.tsx',
    'src/curriculum/grade6/afrikaans/_shared/AfrikaansTopic.tsx', 'src/curriculum/grade7/afrikaans/_shared/AfrikaansTopic.tsx', 'src/curriculum/grade8/afrikaans/_shared/AfrikaansTopic.tsx',
    'src/curriculum/grade9/afrikaans/_shared/AfrikaansTopic.tsx', 'src/curriculum/grade9/history/_shared/HisTopic.tsx', 'src/components/CapsSubjectTopic.tsx', 'src/components/PracticeRunner.tsx',
  ];
  for (const f of files) {
    const src = read(f);
    assert.ok(src.includes('<PracticeSummary') && src.includes('usePracticeTally()') && src.includes('tally.note(') && src.includes('tally.reset();'), f);
    assert.ok(!/You completed all/.test(src), f);
  }
});

const item = (topic: string, kind: 'mcq' | 'explain', marks?: number): MockItem => ({ topic, task: 't', prompt: `${topic}${Math.random()}`, options: kind === 'explain' ? ['a', 'b'] : ['x', 'y'], answer: kind === 'explain' ? 'a|b' : 'x', explanation: '', section: 's', kind, ...(marks ? { marks } : {}) } as unknown as MockItem);

test('ONE score: the result screen and the stored run use the auto-marked questions (one mark each); written answers are reported on the side and never in that score', () => {
  const items = [item('Circuits', 'mcq'), item('Circuits', 'mcq'), item('Mains', 'mcq'), item('Mains', 'explain', 4), item('Circuits', 'explain', 2)];
  const marks: (boolean | number)[] = [true, false, true, 3, 1];
  const s = splitScore(items, marks);
  assert.deepEqual(s.auto, { score: 2, outOf: 3 }, 'auto-marked: 2 of 3 questions, exactly what the server stores for the run');
  assert.deepEqual(s.written, { score: 4, outOf: 6 }, 'written: 4 of 6 marks, self-marked, on the side');
  assert.deepEqual(s.byTopic, [{ topic: 'Circuits', total: 2, correct: 1 }, { topic: 'Mains', total: 1, correct: 1 }], 'per topic: auto-marked only');
  // a test with no written answers is exactly what it was
  const plain = splitScore([item('A', 'mcq'), item('A', 'mcq')], [true, false]);
  assert.deepEqual([plain.auto, plain.written], [{ score: 1, outOf: 2 }, { score: 0, outOf: 0 }]);
  // the run the client starts is sized the same way (so the stored percentage equals the screen's)
  const mock = read('src/curriculum/grade6/natural-sciences/_shared/NstMockTest.tsx');
  assert.ok(mock.includes("nItems: questions.filter((it) => kindOf(it) !== 'explain').length") && mock.includes('splitScore(questions, firstMarks)'));
  assert.ok(mock.includes('data-testid="written-score"') && mock.includes('not counted in your progress'));
  assert.ok(!/scoreByTopic|totalMarks\(questions\)/.test(mock), 'no second definition left on the result screen');
});

test('review: the page names the real daily number, and "Start review" starts the review', () => {
  const base = { weakestInScope: null, untried: null, reviewHref: '/app?start=review', appHref: '/app' };
  const sixteen = nextBestStep({ ...base, dueCount: 16, sessionSize: REVIEW_SESSION_SIZE });
  assert.equal(sixteen.title, 'Do your 10 review cards today');
  assert.match(sixteen.reason, /6 more will be waiting tomorrow/);
  assert.equal(sixteen.href, '/app?start=review');
  assert.equal(nextBestStep({ ...base, dueCount: 7, sessionSize: REVIEW_SESSION_SIZE }).title, 'Do your 7 review cards', 'a small backlog is unchanged');
  assert.equal(nextBestStep({ ...base, dueCount: 1, sessionSize: REVIEW_SESSION_SIZE }).title, 'Do your review card');
  assert.equal(nextBestStep({ ...base, dueCount: 16 }).title, 'Do your 16 review cards', 'without a session size the old wording (other callers)');
  assert.equal(parentNextStep({ dueCount: 16, weakestInScope: null, untried: null, name: 'Anfervio', sessionSize: 10 }).title, 'Ask Anfervio to do their 10 review cards today');
  assert.equal(teacherNextStep({ dueCount: 16, weakestInScope: null, untried: null, name: 'Anfervio', sessionSize: 10 }).title, 'Encourage Anfervio to do their 10 review cards today');
  const api = read('src/lib/server/progress/progressApi.ts');
  assert.ok(api.includes("REVIEW_HREF = '/app?start=review'") && api.includes('reviewHref: REVIEW_HREF') && (api.match(/sessionSize: REVIEW_SESSION_SIZE/g) ?? []).length === 3);
  const app = read('src/App.tsx');
  assert.ok(app.includes("get('start') === 'review'") && app.includes("setView('review')") && app.includes('startReviewDone') && app.includes('startReviewOutcome') && app.includes('NO_REVIEW_MESSAGE'), 'the app starts the review from the link, once, and says so when there is nothing to start');
});

test('Natural Sciences topic practice counts the auto-marked questions only, in the run AND on the summary (written answers are not recorded and not in the score)', () => {
  const nst = read('src/curriculum/grade6/natural-sciences/_shared/NstTopic.tsx');
  assert.ok(nst.includes('total: autoTotal') && nst.includes('<PracticeSummary total={autoTotal}'), 'the stored run and the screen share one denominator');
  assert.ok(/if \(kindOf\(current\) !== 'explain'\) \{\s+recordAttempt\(/.test(nst) && nst.includes('tally.note(correct, current)'), 'an explain item is neither sent nor tallied');
  assert.ok(read('src/curriculum/grade6/natural-sciences/_shared/useNstItems.ts').includes("queue.filter((it) => kindOf(it) !== 'explain').length"));
});

test('confetti only for a good result: 6 of 16 ("This one is tricky") is not celebrated, 70% and up is; the summary clears stray confetti otherwise', () => {
  assert.equal(celebrates(6, 16), false);
  assert.equal(celebrates(11, 16), false);
  assert.equal(celebrates(12, 16), true);
  assert.equal(celebrates(16, 16), true);
  assert.equal(celebrates(0, 0), false);
  assert.ok(fs.readFileSync('src/components/practice/PracticeSummary.tsx', 'utf8').includes('if (!celebrate) stopConfetti()'));
});
