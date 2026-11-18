import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 6 English HL text types (Wave A): shape and bank quality of the new lessons.

stubCss();
const base = './curriculum/grade6/english';
const L = {
  'newspaper-article': await import(`${base}/term1/newspaper-article/Slides`),
  'folklore-myth-legend': await import(`${base}/term1/folklore-myth-legend/Slides`),
  'instructional-text': await import(`${base}/term2/instructional-text/Slides`),
  'information-text-weather': await import(`${base}/term2/information-text-weather/Slides`),
  'story-writing-plot': await import(`${base}/term2/story-writing-plot/Slides`),
  'character-sketch': await import(`${base}/term3/character-sketch/Slides`),
  'diary-entry': await import(`${base}/term3/diary-entry/Slides`),
  'comic-strip-script': await import(`${base}/term3/comic-strip-script/Slides`),
  'descriptive-paragraph': await import(`${base}/term4/descriptive-paragraph/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade6/english/') && q.file.includes(`/${name}/`));

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
  has('newspaper-article', ["headline", "by-line", "lead"]);
  has('folklore-myth-legend', ["myth", "legend", "repetition"]);
  has('instructional-text', ["command", "sequence", "landmark"]);
  has('information-text-weather', ["weather", "temperature", "chart"]);
  has('story-writing-plot', ["plot", "flow chart", "problem"]);
  has('character-sketch', ["sketch", "personality", "adjective"]);
  has('diary-entry', ["diary", "date", "first person"]);
  has('comic-strip-script', ["panel", "speech bubble", "caption"]);
  has('descriptive-paragraph', ["senses", "simile", "topic sentence"]);
});
