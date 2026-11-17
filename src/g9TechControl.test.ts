import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 9 Technology: mechanical control systems (Term 2). Shape, bank quality, and keys recomputed by hand.

stubCss();
const lesson = await import('./curriculum/grade9/technology/term2/mechanical-control-systems/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bank = extractCuratedBanks().filter((q) => q.file.includes('/mechanical-control-systems/'));
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

test('INDEPENDENT: every number key recomputed with plain Math, and each wrong option is a different number', () => {
  const num = (o: string) => parseFloat(o.replace(',', '.'));
  const cases: [string, number][] = [
    ['A ratchet wheel has 12 teeth', 360 / 12],
    ['A ratchet spanner has 24 teeth', 360 / 24],
    ['A force of 100 N pushes a piston of 2 cm', (100 / 2) * 6],
    ['A brake lever has the cable 2 cm', 8 / 2],
    ['The mechanical advantage of a brake lever is 4', 20 * 4],
  ];
  for (const [start, want] of cases) {
    const q = find(start);
    const i = q.options.indexOf(q.answer);
    assert.equal(num(q.answer), want, start);
    assert.ok(q.options.filter((_, j) => j !== i).every((o) => num(o) !== want), start);
  }
  // the slide figures: 100 N on 2 cm2 -> 6 cm2 is 300 N; 150 N on 3 cm2 -> 9 cm2 is 450 N; 20 N at 8 cm vs 2 cm is 80 N
  assert.equal((100 / 2) * 6, 300);
  assert.equal((150 / 3) * 9, 450);
  assert.equal(20 * (8 / 2), 80);
  assert.equal(360 / 18, 20);
  assert.equal(6 / 2, 3);
  assert.equal(find('What does a ratchet and pawl system allow').answer, 'Turn freely in one direction only');
});
