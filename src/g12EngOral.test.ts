import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { DURATIONS, EXAMPLE, PAPER4, exampleTotal, paper4Percent, paper4Total, preparedMarks, rangeText } from './components/diagrams/english/oralHelpers';

// Grade 12 English HL listening and speaking (Paper 4): shape, bank quality, and every figure recomputed.

stubCss();
const base = './curriculum/grade12/english';
const L = {
  'oral-paper4-tasks': await import(`${base}/term1/oral-paper4-tasks/Slides`),
  'listening-comprehension': await import(`${base}/term1/listening-comprehension/Slides`),
  'prepared-unprepared-speeches': await import(`${base}/term1/prepared-unprepared-speeches/Slides`),
  'interview-dialogue': await import(`${base}/term2/interview-dialogue/Slides`),
  'discussion-debate-panel': await import(`${base}/term2/discussion-debate-panel/Slides`),
  'introducing-speaker-vote-of-thanks': await import(`${base}/term3/introducing-speaker-vote-of-thanks/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(`/${name}/`));

test('each lesson has 4 to 6 slides, the standard blocks, a picture with a description, and a final Check yourself', () => {
  for (const [name, m] of Object.entries(L)) {
    const steps = m.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6, name);
    assert.equal(steps[steps.length - 1].title, 'Check yourself', name);
    assert.match(html(steps[steps.length - 1]), /<details/, name);
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      assert.match(h, /The rule/, `${name}: ${s.title}`);
      assert.match(h, /Worked example/, `${name}: ${s.title}`);
      assert.match(h, /Common mistake/, `${name}: ${s.title}`);
      assert.match(h, /aria-label="[^"]+"/, `${name}: ${s.title}: a picture with a description`);
    }
  }
});

test('each bank has 14 valid questions, no quality reason at all, the key in all four positions', () => {
  for (const name of Object.keys(L)) {
    const bank = bankOf(name);
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('INDEPENDENT: the Paper 4 marks and the example, by hand', () => {
  assert.equal(2 * 10 + 15 + 15, 50);
  assert.equal(preparedMarks(), 20);
  assert.equal(paper4Total(), 50);
  assert.equal(paper4Percent(), 16.7);
  assert.equal(PAPER4.endOfYearTotal, 300);
  assert.equal(12 + (8 + 9) + 11, 40);
  assert.equal(exampleTotal(EXAMPLE), 40);
  const q = (start: string) => bankOf('oral-paper4-tasks').find((x) => x.prompt.startsWith(start))!;
  assert.equal(q('How many marks is Paper 4').answer, '50 marks');
  assert.equal(q('Two prepared speeches').answer, '20 marks');
  assert.equal(q('A learner scores 12').answer, '40 out of 50');
  assert.equal(q('How many marks does the unprepared').answer, '15');
  assert.equal(q('How many marks does listening').answer, '15');
});

test('the suggested durations in the bank match the CAPS table', () => {
  const dur = (t: string) => rangeText(DURATIONS.find((d) => d.text.startsWith(t))!);
  assert.equal(dur('Unprepared'), '2 to 3 minutes');
  assert.equal(dur('Interview'), '10 to 15 minutes');
  assert.equal(dur('Dialogue'), '6 to 8 minutes');
  assert.equal(dur('Debate'), '20 to 30 minutes');
  const ans = (n: string, s: string) => bankOf(n).find((x) => x.prompt.startsWith(s))!.answer;
  assert.equal(ans('prepared-unprepared-speeches', 'What is the suggested time for an unprepared'), dur('Unprepared'));
  assert.equal(ans('interview-dialogue', 'What is the suggested time for an interview'), dur('Interview'));
  assert.equal(ans('interview-dialogue', 'What is the suggested time for a dialogue'), dur('Dialogue'));
  assert.equal(ans('discussion-debate-panel', 'What is the suggested time for a debate'), dur('Debate'));
  assert.equal(ans('introducing-speaker-vote-of-thanks', 'How long is a vote of thanks'), dur('Introducing'));
});

test('the lessons print the figures the bank uses', () => {
  const t = text(L['oral-paper4-tasks'].learnSteps);
  for (const f of ['50', '300', '20', '15', '16,7', '40', '17']) assert.ok(t.includes(f), f);
  assert.ok(text(L['listening-comprehension'].learnSteps).includes('three minutes'));
  assert.ok(text(L['prepared-unprepared-speeches'].learnSteps).includes('2 to 3 minutes'));
  assert.ok(text(L['prepared-unprepared-speeches'].learnSteps).includes('4 to 5 minutes'));
});
