import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// PRIVACY GUARD. What a child types into an explain question is children's writing: it must stay in the
// browser, in React state, and never be sent, stored, logged or tracked. This test reads the component source
// and fails if it starts doing any of those things or importing anything that does.

const file = path.join(process.cwd(), 'src', 'components', 'items', 'ExplainQuestion.tsx');
const src = fs.readFileSync(file, 'utf8');
const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, ''); // ignore comments

test('ExplainQuestion never sends, stores, logs or tracks what is typed', () => {
  const forbidden: [RegExp, string][] = [
    [/\bfetch\s*\(/, 'fetch'], [/XMLHttpRequest/, 'XMLHttpRequest'], [/sendBeacon/, 'sendBeacon'], [/WebSocket/, 'WebSocket'],
    [/localStorage/, 'localStorage'], [/sessionStorage/, 'sessionStorage'], [/indexedDB/, 'indexedDB'], [/document\.cookie/, 'cookies'],
    [/\btrack\s*\(/, 'analytics track()'], [/recordAttempt/, 'the attempt recorder'], [/console\./, 'console'],
    [/navigator\./, 'navigator'], [/dangerouslySetInnerHTML/, 'raw HTML'],
  ];
  for (const [re, name] of forbidden) assert.doesNotMatch(code, re, `ExplainQuestion must not use ${name}`);
});

test('ExplainQuestion imports only react, the Button, the class helper and the pure item helpers', () => {
  const imports = [...new Set([...code.matchAll(/^import\s.*?from\s+'([^']+)'/gm)].map((m) => m[1]))];
  const allowed = ['react', '../ui/Button', '../../lib/utils', '../../curriculum/grade6/natural-sciences/_shared/itemKinds'];
  assert.deepEqual(imports.sort(), allowed.sort());
});

test('the typed text is only shown back on screen, and onSubmit never receives it', () => {
  assert.match(code, /onSubmit:\s*\(correct: boolean, detail: \{ marks: number; of: number \}\) => void/);
  assert.doesNotMatch(code, /onSubmit\([^)]*text/, 'text must not be passed to onSubmit');
});
