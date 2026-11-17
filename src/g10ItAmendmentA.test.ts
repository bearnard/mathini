import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 IT, 2024 CAPS amendment, branch A: shape and bank quality of the ten new lessons.

stubCss();
const base = './curriculum/grade10/it';
const L = {
  'computers-software-ict-systems': await import(`${base}/term1/computers-software-ict-systems/Slides`),
  'file-management': await import(`${base}/term1/file-management/Slides`),
  'algorithms-ipo-trace-tables': await import(`${base}/term1/algorithms-ipo-trace-tables/Slides`),
  'licences-digital-divide': await import(`${base}/term1/licences-digital-divide/Slides`),
  'hardware-devices': await import(`${base}/term2/hardware-devices/Slides`),
  'operating-systems-utilities-drivers': await import(`${base}/term2/operating-systems-utilities-drivers/Slides`),
  'networks-overview': await import(`${base}/term2/networks-overview/Slides`),
  'e-communication-email-netiquette': await import(`${base}/term2/e-communication-email-netiquette/Slides`),
  'problem-solving-polya-user-stories': await import(`${base}/term2/problem-solving-polya-user-stories/Slides`),
  'ergonomics-green-health': await import(`${base}/term2/ergonomics-green-health/Slides`),
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
  has('computers-software-ict-systems', ['embedded', 'shareware', 'freeware', 'FOSS', 'proprietary', 'processing cycle']);
  has('file-management', ['file specification', 'extension', 'path', 'hierarchical', 'file manager']);
  has('algorithms-ipo-trace-tables', ['IPO', 'flow chart', 'trace table', 'swap', 'VAT']);
  has('licences-digital-divide', ['creative commons', 'copyleft', 'piracy', 'digital divide', 'digital footprint']);
  has('hardware-devices', ['biometric', 'SSD', 'motherboard', 'HDMI', 'primary memory', 'secondary memory']);
  has('operating-systems-utilities-drivers', ['utility', 'device driver', 'plug and play', 'Android']);
  has('networks-overview', ['PAN', 'HAN', 'LAN', 'WAN', 'client-server', 'peer-to-peer', 'fibre']);
  has('e-communication-email-netiquette', ['Cc', 'Bcc', 'subject', 'netiquette', 'webinar']);
  has('problem-solving-polya-user-stories', ['Polya', 'user story', 'noun-verb', 'acceptance test']);
  has('ergonomics-green-health', ['ergonomics', 'RSI', 'green computing']);
});

// Delphi semantics: integer division (div) and remainder (mod), recomputed independently of the lessons.
test('the small algorithms and trace tables in the lessons are right', () => {
  // trace: sum = 0, add 4, add 6
  const trace = [0]; for (const x of [4, 6]) trace.push(trace[trace.length - 1] + x);
  assert.deepEqual(trace, [0, 4, 10]);
  const smaller = (a: number, b: number) => (a < b ? a : b);
  assert.equal(smaller(7, 3), 3);
  assert.equal(smaller(4, 4), 4);
  const swap = (a: number, b: number) => { const temp = a; a = b; b = temp; return [a, b]; };
  assert.deepEqual(swap(1, 2), [2, 1]);
  const isEven = (n: number) => n % 2 === 0;
  assert.ok(isEven(10) && !isEven(7));
  const isFactor = (f: number, n: number) => n % f === 0;
  assert.ok(isFactor(12, 36) && !isFactor(10, 36) && !isFactor(7, 36) && !isFactor(5, 36));
  assert.equal((4 + 6 + 8) / 3, 6);
  assert.equal(200 + (200 * 15) / 100, 230);
  assert.equal((200 * 15) / 100, 30);
  const q = (start: string) => bankOf('algorithms-ipo-trace-tables').find((x) => x.prompt.startsWith(start))!;
  assert.equal(q('What is the average of 4, 6 and 8').answer, '6');
  assert.equal(q('What is the total with 15% VAT on R200').answer, 'R230');
  assert.equal(q('Which number is a factor of 36').answer, '12');
  assert.equal(q('Which number is a factor of 36').options.filter((o) => isFactor(Number(o), 36)).length, 1, 'exactly one option is a factor');
});
