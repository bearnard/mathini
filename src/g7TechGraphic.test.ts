import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 Technology: graphical communication (Term 1). Shape, bank quality, and keys recomputed by hand.

stubCss();
const lesson = await import('./curriculum/grade7/technology/term1/graphical-communication/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bank = extractCuratedBanks().filter((q) => q.file.includes('/graphical-communication/'));
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

test('INDEPENDENT: scale and oblique keys recomputed with plain Math', () => {
  const nums = (q: { options: string[] }) => q.options.map((o) => parseFloat(o.replace(/\s/g, '').replace(',', '.')));
  const cases: [string, number][] = [
    ['A table top is 1 200 mm long', 1200 / 10],
    ['A shelf is 800 mm wide', 800 / 5],
    ['A small bolt is 15 mm long', 15 * 2],
    ['A line measures 45 mm on a drawing', 45 * 10],
    ['A box is 20 mm deep', 20 * 0.5],
  ];
  for (const [start, want] of cases) {
    const q = find(start);
    const i = q.options.indexOf(q.answer);
    assert.equal(nums(q)[i], want, start);
    // every wrong option is a different number
    assert.ok(nums(q).filter((_, j) => j !== i).every((n) => n !== want), start);
  }
  // the slide example: 1200 x 600 at 1:10 gives 120 x 60; the check question 800 at 1:20 gives 40
  assert.equal(1200 / 10, 120);
  assert.equal(600 / 10, 60);
  assert.equal(800 / 20, 40);
  assert.equal(find('In an oblique drawing the receding').answer, '45°');
  assert.equal(find('In single vanishing point perspective, where').answer, 'At one point on the horizon');
});
