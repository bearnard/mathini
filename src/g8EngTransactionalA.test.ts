import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 8 English HL transactional texts, branch A: shape and bank quality of the new lessons.

stubCss();
const base = './curriculum/grade8/english';
const L = {
  'friendly-letter': await import(`${base}/term1/friendly-letter/Slides`),
  'investigative-report': await import(`${base}/term1/investigative-report/Slides`),
  'instructions-directions': await import(`${base}/term2/instructions-directions/Slides`),
  'dialogue-and-interview': await import(`${base}/term2/dialogue-and-interview/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade8/english/') && q.file.includes(`/${name}/`));

test('each lesson has 4 to 6 slides, the standard blocks, a picture with a description, and a final Check yourself', () => {
  for (const [name, m] of Object.entries(L)) {
    const steps = m.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6, name);
    assert.equal(steps[steps.length - 1].title, 'Check yourself', name);
    assert.match(html(steps[steps.length - 1]), /<details/, name);
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      for (const re of [/The rule/, /Worked example/, /Common mistake/, /aria-label="[^"]+"/]) assert.match(h, re, `${name}: ${s.title}`);
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

test('the amendment items are in the lessons that the plan names', () => {
  const has = (n: keyof typeof L, words: string[]) => { const t = text(L[n].learnSteps).toLowerCase(); for (const w of words) assert.ok(t.includes(w.toLowerCase()), `${n}: ${w}`); };
  has('friendly-letter', ["greeting", "closing", "paragraph", "visual stimulus", "informal"]);
  has('investigative-report', ["questionnaire", "findings", "conclusion", "recommendation", "impersonal"]);
  has('instructions-directions', ["numbered", "imperative", "sequence", "landmark", "directions"]);
  has('dialogue-and-interview', ["speaker", "colon", "brackets", "open question", "introduction"]);
});

test('the figures in the findings are recomputed', () => {
  const walk = 22, taxi = 10, bus = 8;
  assert.equal(walk + taxi + bus, 40);
  assert.equal(Math.round((walk / 40) * 100), 55);
  const q = (start: string) => bankOf('investigative-report').find((x) => x.prompt.startsWith(start))!;
  assert.equal(q('22 of 40 learners walk').answer, '55%');
  assert.equal(q('10 learners take a taxi').answer, String(taxi + bus));
});
