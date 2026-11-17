import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 IT, 2024 CAPS amendment, branch B: shape and bank quality of the six new lessons.

stubCss();
const base = './curriculum/grade10/it';
const L = {
  'computer-management': await import(`${base}/term3/computer-management/Slides`),
  'internet-www': await import(`${base}/term3/internet-www/Slides`),
  'email-internet-threats-popia': await import(`${base}/term3/email-internet-threats-popia/Slides`),
  'loops-strings-algorithms': await import(`${base}/term3/loops-strings-algorithms/Slides`),
  'gui-design-timer-project': await import(`${base}/term3/gui-design-timer-project/Slides`),
  'internet-services-text-files': await import(`${base}/term4/internet-services-text-files/Slides`),
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/[ \t\n]+/g, ' ')).join(' ');
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(`grade10/it/`) && q.file.includes(`/${name}/`));

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
  has('computer-management', ['extension', 'disk clean-up', 'backup', 'firewall', 'licence key', 'uninstall']);
  has('internet-www', ['IP address', 'domain name', 'DNS', 'URL', 'browser', 'search engine']);
  has('email-internet-threats-popia', ['virus', 'hoax', 'fake news', 'spam', 'phishing', 'spoofing', 'pharming', 'POPIA']);
  has('loops-strings-algorithms', ['for', 'while', 'repeat', 'Pos', 'Copy', 'Delete', 'Insert', 'Trim', 'prime', 'GCD', 'LCM']);
  has('gui-design-timer-project', ['HCI', 'panel', 'tabbed', 'timer', 'persistence', 'test case']);
  has('internet-services-text-files', ['synchronisation', 'collaboration', 'SaveToFile', 'LoadFromFile', 'FileExists']);
  assert.ok(!/step by step to|how to steal|how to hack/i.test(text(L['email-internet-threats-popia'].learnSteps)), 'threats are described, never taught');
});

// Delphi semantics: strings are 1-based; Pos returns 0 when not found; div and mod are integer division and remainder.
test('the loop, string, prime, GCD and LCM examples are right (recomputed independently)', () => {
  let sum = 0; const trace: number[] = [];
  for (let i = 1; i <= 5; i++) { sum += i; trace.push(sum); }
  assert.deepEqual(trace, [1, 3, 6, 10, 15]);
  const pos = (sub: string, s: string) => s.indexOf(sub) + 1; // Delphi Pos: 1-based, 0 if not found
  assert.equal(pos('an', 'banana'), 2);
  assert.equal(pos('z', 'banana'), 0);
  assert.equal('banana'.length, 6);
  assert.equal('banana'.slice(0, 3), 'ban');
  assert.equal([...'banana'].filter((c) => c === 'a').length, 3);
  assert.equal([...'banana'].filter((c) => c !== 'a').join(''), 'bnn');
  const isPrime = (n: number) => { if (n < 2) return false; for (let d = 2; d <= Math.floor(n / 2); d++) if (n % d === 0) return false; return true; };
  assert.ok(isPrime(13) && !isPrime(15) && !isPrime(9) && !isPrime(21) && !isPrime(1));
  const gcd = (a: number, b: number) => { for (let d = Math.min(a, b); d >= 1; d--) if (a % d === 0 && b % d === 0) return d; return 1; };
  assert.equal(gcd(12, 18), 6);
  const lcm = (a: number, b: number) => Math.floor((a * b) / gcd(a, b));
  assert.equal(lcm(4, 6), 12);
  const q = (start: string) => bankOf('loops-strings-algorithms').find((x) => x.prompt.startsWith(start))!;
  assert.equal(q('for i := 1 to 5 do iSum').answer, '15');
  assert.equal(q('Which number is prime').answer, '13');
  assert.equal(q('Which number is prime').options.filter((o) => isPrime(Number(o))).length, 1, 'exactly one option is prime');
  assert.equal(q('What is the GCD of 12 and 18').answer, String(gcd(12, 18)));
  assert.equal(q("What does Pos('an'").answer, '2');
  assert.equal(q('How many times does the letter a').answer, '3');
  const t = bankOf('gui-design-timer-project').find((x) => x.prompt.startsWith('A timer interval'))!;
  assert.equal(t.answer, `${(1000 / 100) * 5} pixels`);
});
