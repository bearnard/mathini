import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 9 Technology: single vanishing point perspective (Term 2). Shape, bank quality, and keys recomputed by hand.

stubCss();
const lesson = await import('./curriculum/grade9/technology/term2/single-vanishing-point/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bank = extractCuratedBanks().filter((q) => q.file.includes('/single-vanishing-point/'));
const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;

test('4 to 6 slides with the standard blocks, a described picture and a final Check yourself', () => {
  const steps = lesson.learnSteps;
  assert.ok(steps.length >= 4 && steps.length <= 6);
  assert.equal(steps[steps.length - 1].title, 'Check yourself');
  for (const s of steps.slice(0, -1)) {
    const h = html(s);
    assert.match(h, /The rule/);
    assert.match(h, /Worked example/);
    assert.match(h, /Common mistake/);
    assert.match(h, /aria-label="[^"]+"/, `${s.title}: a picture with a description`);
  }
  assert.equal((html(steps[steps.length - 1]).match(/<details/g) ?? []).length, 4, 'one hidden answer per question');
});

test('the bank has 14 valid questions with the key in all four positions and no quality reject', () => {
  assert.equal(bank.length, 14);
  for (const q of bank) {
    assert.equal(new Set(q.options).size, 4, q.prompt);
    assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
    const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
  }
  assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
});

test('INDEPENDENT: width keys recomputed with plain Math, and each wrong option is a different number', () => {
  const num = (o: string) => parseFloat(o.replace(',', '.'));
  const cases: [string, number][] = [
    ['A box has a front face 80 mm wide', 80 * (1 - 0.4)],
    ['A plank end is 120 mm wide', 120 * (1 - 0.25)],
  ];
  for (const [start, want] of cases) {
    const q = find(start);
    const i = q.options.indexOf(q.answer);
    assert.equal(num(q.answer), want, start);
    assert.ok(q.options.filter((_, j) => j !== i).every((o) => num(o) !== want), start);
  }
  // the slide numbers: 60 x 40 at t = 0.4 gives 36 x 24; 200 at t = 0.55 gives 90; the check question 100 at 0.25 gives 75
  assert.equal(60 * 0.6, 36);
  assert.equal(40 * 0.6, 24);
  assert.equal(200 * 0.45, 90);
  assert.equal(100 * 0.75, 75);
  // a box below the horizon shows its top, above shows its underside (the lesson's rule)
  assert.equal(find('A box stands below the horizon').answer, 'The top');
  assert.equal(find('A shelf hangs above the horizon').answer, 'The underside');
  assert.equal(find('Light comes from above').answer, 'The top');
  assert.equal(find('Light comes from the left').answer, 'On the right');
});
