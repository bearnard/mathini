import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 IT, 2024 CAPS amendment, branch A: shape and bank quality of the nine new lessons.

stubCss();
const base = './curriculum/grade11/information-technology';
const L = {
  'motherboard-memory-caching': await import(`${base}/term1/motherboard-memory-caching/Slides`),
  'system-software-processing': await import(`${base}/term1/system-software-processing/Slides`),
  'network-innovation': await import(`${base}/term1/network-innovation/Slides`),
  'computer-management-threats': await import(`${base}/term1/computer-management-threats/Slides`),
  'sorting-parallel-arrays-dates': await import(`${base}/term1/sorting-parallel-arrays-dates/Slides`),
  'mobile-wireless-e-communication': await import(`${base}/term2/mobile-wireless-e-communication/Slides`),
  'digitalisation-gig-economy': await import(`${base}/term2/digitalisation-gig-economy/Slides`),
  'dbms-database-types': await import(`${base}/term2/dbms-database-types/Slides`),
  'user-defined-methods': await import(`${base}/term2/user-defined-methods/Slides`),
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
  has('motherboard-memory-caching', ['BIOS', 'VRAM', 'expansion card', 'modular', 'web caching', 'disk caching']);
  has('system-software-processing', ['compiler', 'interpreter', 'multi-tasking', 'multi-threading', 'multi-processing', 'virtual memory', 'virtual machine']);
  has('network-innovation', ['PAN', 'HAN', 'LAN', 'WAN', 'VoIP', 'intranet', 'extranet', 'VPN', 'location-based', 'acceptable use']);
  has('computer-management-threats', ['GIGO', 'ransomware', 'rootkit', 'keylogger', 'pharming', 'UPS', 'CAPTCHA']);
  has('sorting-parallel-arrays-dates', ['selection sort', 'bubble sort', 'parallel arrays', 'IsLeapYear', 'DateToStr', 'TimeToStr']);
  has('mobile-wireless-e-communication', ['throttling', 'shaping', 'Bluetooth', 'SMTP', 'POP3', 'IMAP', 'blockchain']);
  has('digitalisation-gig-economy', ['gig economy', 'digital forensic', 'privacy consultant', 'remote office', 'online identity']);
  has('dbms-database-types', ['DBMS', 'proprietary', 'open-source', 'desktop', 'distributed', 'DBA']);
  has('user-defined-methods', ['procedure', 'function', 'signature', 'argument', 'value parameter', 'trace table']);
});

test('the sort examples are right (recomputed by hand)', () => {
  const selection = (a: number[]) => { const x = [...a]; for (let i = 0; i < x.length - 1; i++) { let m = i; for (let j = i + 1; j < x.length; j++) if (x[j] < x[m]) m = j; [x[i], x[m]] = [x[m], x[i]]; } return x; };
  assert.deepEqual(selection([5, 3, 8, 1]), [1, 3, 5, 8]);
  const firstSwap = (a: number[]) => { const x = [...a]; let m = 0; for (let j = 1; j < x.length; j++) if (x[j] < x[m]) m = j; [x[0], x[m]] = [x[m], x[0]]; return x; };
  assert.deepEqual(firstSwap([5, 3, 8, 1]), [1, 3, 8, 5]);
  const bubblePass = (a: number[]) => { const x = [...a]; for (let j = 0; j < x.length - 1; j++) if (x[j] > x[j + 1]) [x[j], x[j + 1]] = [x[j + 1], x[j]]; return x; };
  assert.deepEqual(bubblePass([5, 3, 8, 1]), [3, 5, 1, 8]);
  const q = (start: string) => bankOf('sorting-parallel-arrays-dates').find((x) => x.prompt.startsWith(start))!;
  assert.equal(q('Selection sort is applied').answer, '1, 3, 8, 5');
  assert.equal(q('Bubble sort is applied').answer, '3, 5, 1, 8');
  assert.equal('banana'.indexOf('a') + 1, 2);
  assert.equal(q("What does Pos('a', 'banana')").answer, '2');
});
