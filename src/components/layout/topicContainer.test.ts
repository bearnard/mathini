import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// Phone layout guard (390 px / 320 px): the title block of a lesson header sits in a flex-col, items-center header. A flex item there is
// sized to its max-content, so a long title in a nowrap (truncate) h1 pushed the whole page sideways (284 of 964 lessons overflowed).
// The wrapper must be as wide as the header (w-full) and be allowed to shrink (min-w-0), and the title must wrap on phones.
// A browser sweep of every lesson (render each lesson at 390 and 320 px and compare scrollWidth with clientWidth) is the real check; this pins the two classes that fix it.
const src = fs.readFileSync('src/components/layout/TopicContainer.tsx', 'utf8');

test('the lesson header title wrapper is full width and shrinkable on phones', () => {
  assert.match(src, /className="flex w-full min-w-0 items-center gap-3 md:w-auto"/);
});

test('the lesson title wraps on phones and only truncates from md up', () => {
  assert.match(src, /<h1 className="[^"]*\bbreak-words md:truncate\b[^"]*">/);
  assert.doesNotMatch(src, /<h1 className="[^"]*(?<!md:)\btruncate\b/);
});
