import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 CAT, 2024 CAPS amendment: shape and bank quality of the new lessons.

stubCss();
const base = './curriculum/grade10/computer-applications-technology';
const L = {
  'ergonomics-green-computing': await import(`${base}/term1/ergonomics-green-computing/Slides`),
  'wearables-rfid-qr-nfc-gps': await import(`${base}/term2/wearables-rfid-qr-nfc-gps/Slides`),
  'licences-creative-commons': await import(`${base}/term2/licences-creative-commons/Slides`),
  'digital-citizenship-netiquette-blogs': await import(`${base}/term3/digital-citizenship-netiquette-blogs/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade10/computer-applications-technology/') && q.file.includes(`/${name}/`));

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
  has('ergonomics-green-computing', ["ergonomics", "RSI", "20-20-20", "green computing", "recycle"]);
  has('wearables-rfid-qr-nfc-gps', ["wearable", "RFID", "magnetic strip", "bar code", "QR code", "NFC", "GPS", "Bluetooth"]);
  has('licences-creative-commons', ["end-user", "site licence", "creative commons", "attribution", "piracy", "plagiarism"]);
  has('digital-citizenship-netiquette-blogs', ["digital citizen", "digital footprint", "netiquette", "blog", "wiki", "web application"]);
});
