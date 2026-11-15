import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { renderToStaticMarkup } from 'react-dom/server';
import TryItDemo from './TryItDemo';
import { DEMO_GRADE_CHOICES, RIGHT_LINE, SIGNUP_HREF, WRONG_PREFIX, barLabel, fetchDemo, isDemoPayload, resultLine } from './demoClient';
import { STATIC_DEMO } from '../../lib/server/demo/demoStatic';

const DIR = path.dirname(new URL(import.meta.url).pathname);
const sources = () => fs.readdirSync(DIR).filter((f) => /\.(ts|tsx)$/.test(f) && !/\.test\./.test(f)).map((f) => [f, fs.readFileSync(path.join(DIR, f), 'utf8')] as const);

test('GUARD: the demo records nothing. No file of the component mentions the attempts, runs, review, session, events or progress APIs, local storage or the learner context', () => {
  const files = sources();
  assert.ok(files.length >= 2);
  for (const [f, src] of files) {
    const code = src.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    for (const forbidden of ['/api/attempts', '/api/runs', '/api/events', '/api/review', '/api/session', '/api/progress', '/api/students', 'localStorage', 'sessionStorage', 'indexedDB', 'document.cookie', 'StudentContext', 'useStudent', 'sendBeacon', 'usePracticeTracking', 'runClient', 'useAttemptRecorder']) {
      assert.ok(!code.includes(forbidden), `${f} must not use ${forbidden}`);
    }
  }
});

test('GUARD: the only request the demo makes is the read-only GET /api/demo', () => {
  const calls = sources().flatMap(([f, src]) => [...src.matchAll(/\bfetch\(([^)]*)\)/g)].map((m) => [f, m[1]] as const));
  assert.equal(calls.length, 1, 'exactly one fetch in the component code');
  assert.match(calls[0][1], /^`\/api\/demo\?grade=\$\{grade\}`/);
  assert.ok(!/method|body|headers/.test(calls[0][1]), 'fetch gets a URL and an abort signal, nothing else');
});

test('the demo\'s fetch really is a single GET to /api/demo and nothing else (run against a recording fetch)', async () => {
  const seen: { url: string; init?: RequestInit }[] = [];
  const original = globalThis.fetch;
  globalThis.fetch = (async (url: string, init?: RequestInit) => {
    seen.push({ url: String(url), init });
    return new Response(JSON.stringify({ grade: 7, source: 'static', questions: STATIC_DEMO[7] }), { status: 200 });
  }) as typeof fetch;
  try {
    const qs = await fetchDemo(7);
    assert.equal(qs?.length, 3);
  } finally {
    globalThis.fetch = original;
  }
  assert.deepEqual(seen.map((s) => s.url), ['/api/demo?grade=7']);
  assert.equal(seen[0].init?.method ?? 'GET', 'GET');
  assert.ok(!seen[0].init?.body);
});

test('fetchDemo gives null (never throws) on a network error, a bad status or a bad shape', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = (async () => { throw new Error('offline'); }) as typeof fetch;
    assert.equal(await fetchDemo(6), null);
    globalThis.fetch = (async () => new Response('{}', { status: 429 })) as typeof fetch;
    assert.equal(await fetchDemo(6), null);
    globalThis.fetch = (async () => new Response(JSON.stringify({ questions: [{ prompt: 'x' }] }), { status: 200 })) as typeof fetch;
    assert.equal(await fetchDemo(6), null);
    globalThis.fetch = (async () => new Response('not json', { status: 200 })) as typeof fetch;
    assert.equal(await fetchDemo(6), null);
  } finally {
    globalThis.fetch = original;
  }
});

test('isDemoPayload: three well-formed questions whose key is one of the options, nothing less', () => {
  const good = { grade: 6, source: 'd1', questions: STATIC_DEMO[6] };
  assert.equal(isDemoPayload(good), true);
  assert.equal(isDemoPayload({ ...good, questions: STATIC_DEMO[6].slice(0, 2) }), false);
  assert.equal(isDemoPayload({ ...good, questions: [{ ...STATIC_DEMO[6][0], answer: 'not an option' }, STATIC_DEMO[6][1], STATIC_DEMO[6][2]] }), false);
  assert.equal(isDemoPayload(null), false);
  assert.equal(isDemoPayload({}), false);
});

test('the first screen: a heading, no-sign-up and nothing-saved promise, a button for every grade 5 to 12, nothing loaded yet', () => {
  const html = renderToStaticMarkup(<TryItDemo />);
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.ok(text.includes('Try it now') && text.includes('No sign-up') && text.includes('Nothing is saved'));
  for (const g of DEMO_GRADE_CHOICES) assert.ok(html.includes(`aria-label="Grade ${g}"`), `grade ${g}`);
  assert.deepEqual([...DEMO_GRADE_CHOICES], [5, 6, 7, 8, 9, 10, 11, 12]);
  assert.ok(html.includes('aria-labelledby="try-heading"') && html.includes('id="try-heading"'));
  assert.equal((html.match(/<button/g) ?? []).length, 8, 'only the eight grade buttons');
  assert.ok(!html.includes('role="alert"'));
});

test('the words: encouraging, the result is x/3, a wrong answer is a step forward, the call to action goes to sign-up', () => {
  assert.equal(RIGHT_LINE, 'Correct. Well done!');
  assert.match(WRONG_PREFIX, /^Not quite\. The answer is $/);
  assert.equal(barLabel(2, 3), '2 out of 3 correct');
  for (const s of [0, 1, 2, 3]) {
    const line = resultLine(s, 3);
    assert.ok(line.length > 10);
    assert.ok(!/fail|wrong|bad|poor|stupid|worst|lazy/i.test(line), line);
  }
  assert.match(resultLine(3, 3), /Brilliant/);
  assert.equal(SIGNUP_HREF, '/app?start=register');
  const src = fs.readFileSync(path.join(DIR, 'TryItDemo.tsx'), 'utf8');
  assert.match(src, /\[\.!\?\]\$/, 'no second full stop when the answer already ends with one');
  assert.match(src, /Start practising free/);
  assert.match(src, /href=\{SIGNUP_HREF\}/);
});

test('accessibility: a live region for feedback, labelled groups, 44 px targets, focus moves to Next after an answer, no colour-only feedback', () => {
  const src = fs.readFileSync(path.join(DIR, 'TryItDemo.tsx'), 'utf8');
  assert.match(src, /role="status" aria-live="polite"/);
  assert.match(src, /<fieldset/);
  assert.match(src, /<legend/);
  assert.match(src, /aria-labelledby=\{`demo-q-\$\{view\.index\}`\}/);
  assert.match(src, /nextRef\.current\?\.focus\(\)/);
  assert.match(src, /✓ Answer/);
  assert.match(src, /Your answer/);
  assert.ok(!/onKeyDown|tabIndex=\{[1-9]/.test(src), 'native buttons: no custom key handling and no positive tabindex');
  const targets = (src.match(/<button\b/g) ?? []).length + (src.match(/<a\b/g) ?? []).length;
  assert.equal((src.match(/min-h-1[12]\b/g) ?? []).length, targets, 'every button and link is at least 44 px high (min-h-11 or min-h-12)');
});

test('it is light: no animation, chart or state library; KaTeX only through the lazily loaded MathText', () => {
  for (const [f, src] of sources()) {
    for (const heavy of ['framer-motion', 'recharts', 'three', 'canvas-confetti', 'zustand', 'redux', 'lucide-react']) assert.ok(!src.includes(`'${heavy}`) && !src.includes(`"${heavy}`), `${f} imports ${heavy}`);
    assert.ok(!/import MathText from|import Formula from|from 'katex'/.test(src), `${f} must not import KaTeX directly`);
  }
  const tsx = fs.readFileSync(path.join(DIR, 'TryItDemo.tsx'), 'utf8');
  assert.match(tsx, /dynamic\(\(\) => import\('\.\.\/subjects\/MathText'\)/);
  assert.match(tsx, /includes\('\$'\)/);
});
