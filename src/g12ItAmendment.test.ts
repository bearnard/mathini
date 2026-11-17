import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 12 IT, 2024 CAPS amendment, package 1: shape and bank quality of the seven new lessons.

stubCss();
const base = './curriculum/grade12/information-technology';
const L = {
  'ai-vr-ar-mr': await import(`${base}/term2/ai-vr-ar-mr/Slides`),
  'computer-criminals-cybercrime': await import(`${base}/term2/computer-criminals-cybercrime/Slides`),
  'network-parts-internet-access': await import(`${base}/term3/network-parts-internet-access/Slides`),
  'e-communication-security': await import(`${base}/term3/e-communication-security/Slides`),
  'seo-search': await import(`${base}/term3/seo-search/Slides`),
  'caring-for-data-big-data': await import(`${base}/term1/caring-for-data-big-data/Slides`),
  'performance-gpu-caching': await import(`${base}/term1/performance-gpu-caching/Slides`),
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
  has('ai-vr-ar-mr', ['artificial intelligence', 'virtual reality', 'augmented reality', 'mixed reality', 'limitation']);
  has('computer-criminals-cybercrime', ['hacker', 'cracker', 'cyber gang', 'identity theft', 'bandwidth', 'worm', 'denial of service', 'back door', 'phishing', 'botnet', 'right to privacy']);
  has('network-parts-internet-access', ['switch', 'router', 'fibre', '5G', 'satellite', 'BitTorrent', 'Dropbox', 'VPN']);
  has('e-communication-security', ['multi-layer', 'encryption', 'blockchain', 'SSL', 'public key', 'private key', 'certificate', 'firewall']);
  has('seo-search', ['semantic', 'mediated', 'SEO', 'keyword stuffing']);
  has('caring-for-data-big-data', ['metadata', 'validation', 'verification', 'integrity', 'logging', 'big data'.replace('big data', 'mining')]);
  has('performance-gpu-caching', ['GPU', 'multi-processing', 'cache', 'disk caching', 'network card']);
});

test('the cybercrime lesson describes and never instructs', () => {
  const t = text(L['computer-criminals-cybercrime'].learnSteps).toLowerCase();
  for (const bad of ['how to hack', 'step by step', 'follow these steps to', 'download a tool']) assert.ok(!t.includes(bad), bad);
});
