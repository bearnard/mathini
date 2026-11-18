import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Life Orientation gap lessons: shape and bank quality of the new lessons.

stubCss();
const base = './curriculum/grade11/life-orientation';
const L = {
  'sport-nation-building': await import(`${base}/term1/sport-nation-building/Slides`),
  'media-relationship-values': await import(`${base}/term1/media-relationship-values/Slides`),
  'study-styles-annual-plan': await import(`${base}/term2/study-styles-annual-plan/Slides`),
  'healthy-lifestyle-accidents-nutrition': await import(`${base}/term3/healthy-lifestyle-accidents-nutrition/Slides`),
  'risky-behaviour-peer-pressure': await import(`${base}/term3/risky-behaviour-peer-pressure/Slides`),
  'gender-roles-power-abuse': await import(`${base}/term4/gender-roles-power-abuse/Slides`),
  'religions-belief-moral-dilemmas': await import(`${base}/term4/religions-belief-moral-dilemmas/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade11/life-orientation/') && q.file.includes(`/${name}/`));

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

test('the planned key words are in the lessons that the plan names', () => {
  const has = (n: keyof typeof L, words: string[]) => { const t = text(L[n].learnSteps).toLowerCase(); for (const w of words) assert.ok(t.includes(w.toLowerCase()), `${n}: ${w}`); };
  has('sport-nation-building', ["nation", "spectator", "fair play"]);
  has('media-relationship-values', ["stereotype", "healthy", "media"]);
  has('study-styles-annual-plan', ["strategy", "style", "plan"]);
  has('healthy-lifestyle-accidents-nutrition', ["accident", "nutrients", "balanced"]);
  has('risky-behaviour-peer-pressure', ["peer pressure", "consent", "Childline"]);
  has('gender-roles-power-abuse', ["gender", "abuse", "0800 428 428"]);
  has('religions-belief-moral-dilemmas', ["belief", "dilemma", "euthanasia"]);
});

test('sensitive content: the only help numbers shown are Childline 116, the GBV Command Centre 0800 428 428, the AIDS Helpline 0800 012 322 and SAPS 10111; no method or count appears', async () => {
  const fs = await import('node:fs');
  const allowed = new Set(['116', '0800 428 428', '0800 012 322', '10111']);
  const dirs: [string, string][] = [['term3', 'risky-behaviour-peer-pressure'], ['term4', 'gender-roles-power-abuse'], ['term4', 'religions-belief-moral-dilemmas'], ['term3', 'healthy-lifestyle-accidents-nutrition']];
  for (const [t, d] of dirs) {
    const dir = `src/curriculum/grade11/life-orientation/${t}/${d}`;
    const src = fs.readdirSync(dir).map((f) => fs.readFileSync(`${dir}/${f}`, 'utf8')).join('\n');
    for (const m of src.match(/\b0\d{3} \d{3} \d{3}\b|\b\d{5}\b|\b116\b/g) ?? []) assert.ok(allowed.has(m), `${d}: ${m}`);
    assert.ok(!/how many (teens|teenagers|people) (die|kill)|\bsuicide rate\b|\bmethod of (suicide|self-harm)\b/i.test(src), `${d}: no counts or methods`);
  }
  const risky = text(L['risky-behaviour-peer-pressure'].learnSteps);
  for (const n of ['116', '0800 012 322', '10111']) assert.ok(risky.includes(n), n);
  assert.ok(text(L['gender-roles-power-abuse'].learnSteps).includes('0800 428 428'));
});
