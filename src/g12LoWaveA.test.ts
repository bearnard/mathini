import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { PLAN, STALL, activeDays, minutesShort, stallProfit, unemploymentRate, weekMinutes, randNb } from './components/diagrams/lo/lo12Helpers';

// Grade 12 Life Orientation Wave A: shape, bank quality, and every figure recomputed.

stubCss();
const base = './curriculum/grade12/life-orientation';
const L = {
  'human-factors-ill-health': await import(`${base}/term3/human-factors-ill-health/Slides`),
  'lifestyle-diseases': await import(`${base}/term3/lifestyle-diseases/Slides`),
  'physical-activity-plan': await import(`${base}/term3/physical-activity-plan/Slides`),
  'unemployment-solutions': await import(`${base}/term1/unemployment-solutions/Slides`),
  'tax-corruption-fraud': await import(`${base}/term1/tax-corruption-fraud/Slides`),
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

test('INDEPENDENT: the activity plan, unemployment rate and stall, by hand', () => {
  assert.equal(weekMinutes(PLAN.days), 30 + 45 + 30 + 60);
  assert.equal(activeDays(PLAN.days), 4);
  assert.equal(minutesShort(105, 150), 45);
  assert.equal(unemploymentRate(400, 2000), 20);
  assert.equal(unemploymentRate(300, 1200), 25);
  assert.equal(stallProfit(STALL), 9000 - 5000 - 1500);
  const bank = (n: string, start: string) => bankOf(n).find((q) => q.prompt.startsWith(start))!;
  assert.equal(bank('physical-activity-plan', 'A weekly plan has 30, 0, 45').answer, '165 minutes');
  assert.equal(bank('physical-activity-plan', 'On how many days').answer, '4 days');
  assert.equal(bank('physical-activity-plan', 'A learner aims for 150').answer, '45 minutes');
  assert.equal(bank('unemployment-solutions', 'A labour force is 2').answer, '20%');
  assert.equal(bank('unemployment-solutions', 'A labour force is 1').answer, '25%');
  assert.equal(bank('unemployment-solutions', 'A food stall has sales').answer, randNb(2500));
  assert.equal(bank('unemployment-solutions', 'A stall makes a profit').answer, randNb(30000));
});

test('lessons print the figures; amounts use a non-breaking space', () => {
  const t = text(L['unemployment-solutions'].learnSteps);
  for (const f of ['R9 000', 'R5 000', 'R1 500', 'R2 500', 'R30 000', '20%']) assert.ok(t.includes(f), f);
  assert.ok(!/R\d+ \d{3}/.test(t), 'no rand amount broken by an ordinary space');
  const p = text(L['physical-activity-plan'].learnSteps);
  for (const f of ['165', '150', '45']) assert.ok(p.includes(f), f);
  for (const name of Object.keys(L)) for (const q of bankOf(name)) assert.ok(!/R\d+ \d{3}/.test([q.prompt, ...q.options].join(' ')), q.prompt);
});
