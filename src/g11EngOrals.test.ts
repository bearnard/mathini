import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 English HL oral lessons (listening and speaking): shape and bank quality of the new lessons.

stubCss();
const base = './curriculum/grade11/english';
const L = {
  'speech-prepared-unprepared': await import(`${base}/term1/speech-prepared-unprepared/Slides`),
  'debate-skills': await import(`${base}/term1/debate-skills/Slides`),
  'dialogue-interview': await import(`${base}/term2/dialogue-interview/Slides`),
  'panel-informal-discussion': await import(`${base}/term2/panel-informal-discussion/Slides`),
  'meetings-procedures': await import(`${base}/term3/meetings-procedures/Slides`),
  'storytelling-praise-poems': await import(`${base}/term3/storytelling-praise-poems/Slides`),
  'speaker-introduction-vote-of-thanks': await import(`${base}/term4/speaker-introduction-vote-of-thanks/Slides`),
  'report-review-oral': await import(`${base}/term4/report-review-oral/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade11/english/') && q.file.includes(`/${name}/`));

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
  has('speech-prepared-unprepared', ["evidence", "unprepared", "conclusion"]);
  has('debate-skills', ["resolution", "affirmative", "rebuttal"]);
  has('dialogue-interview', ["rapport", "closure", "follow-up"]);
  has('panel-informal-discussion', ["chairperson", "panel", "negotiate"]);
  has('meetings-procedures', ["quorum", "agenda", "minutes"]);
  has('storytelling-praise-poems', ["praise", "imbongi", "repetition"]);
  has('speaker-introduction-vote-of-thanks', ["vote of thanks", "name", "formal"]);
  has('report-review-oral', ["report", "review", "recommendation"]);
});
