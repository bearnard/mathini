import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// React treats an SVG <title> with more than one child (text mixed with {expressions}) as an array of nodes. Server and client then disagree
// and the page logs "Hydration failed" (this broke the Grade 12 Counting and Probability lesson). A <title> must have ONE child: plain text,
// or a single expression such as {`Counting tree: ${m} ways`}.

const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

/** True when the inside of a <title> is plain text or exactly one {...} expression. */
export const hasSingleChild = (inner: string): boolean => {
  const t = inner.trim();
  if (!t.includes('{')) return true;
  if (!t.startsWith('{') || !t.endsWith('}')) return false;
  let depth = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '{') depth++;
    else if (t[i] === '}') {
      depth--;
      if (depth === 0 && i < t.length - 1) return false; // the first expression closed before the end: there is more after it
    }
  }
  return true;
};

test('hasSingleChild: text and one expression are fine, mixed children are not', () => {
  assert.equal(hasSingleChild('Counting tree'), true);
  assert.equal(hasSingleChild('{`Counting tree: ${m} ways`}'), true);
  assert.equal(hasSingleChild('{title}'), true);
  assert.equal(hasSingleChild('Counting tree: {m} ways'), false);
  assert.equal(hasSingleChild('{a} and {b}'), false);
  assert.equal(hasSingleChild('{a}{b}'), false);
});

test('no SVG <title> in the app has mixed children', () => {
  const bad: string[] = [];
  for (const f of walk(path.join(process.cwd(), 'src')).filter((x) => /\.tsx$/.test(x))) {
    const s = fs.readFileSync(f, 'utf8');
    for (const m of s.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/g)) {
      if (!hasSingleChild(m[1])) bad.push(`${path.relative(process.cwd(), f)}:${s.slice(0, m.index).split('\n').length}`);
    }
  }
  assert.deepEqual(bad, []);
});
