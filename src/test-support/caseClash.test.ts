import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Parallel branches once added lessonPictures.tsx and LessonPictures.tsx to the same folder.
// tsc rejects paths that differ only in case, and they collide on case-insensitive filesystems
// (macOS, Windows), so no two paths under src/ may differ only in case.
const walk = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? [p, ...walk(p)] : [p];
  });

test('no two paths under src/ differ only in letter case', () => {
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const p of walk('src')) {
    const key = p.toLowerCase();
    const other = seen.get(key);
    if (other) clashes.push(`${other} <-> ${p}`);
    else seen.set(key, p);
  }
  assert.deepEqual(clashes, []);
});
