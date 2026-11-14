import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// The registry must list every Grade 6 topic module that exports a `bank`, and must be exactly what the
// generator produces, so a new topic can never silently be missing from "Today's review".
test('reviewBanks.ts is up to date with scripts/gen-review-registry.mjs', () => {
  const file = path.join(process.cwd(), 'src/curriculum/grade6/reviewBanks.ts');
  const before = fs.readFileSync(file, 'utf8');
  try {
    execFileSync(process.execPath, ['scripts/gen-review-registry.mjs'], { cwd: process.cwd(), stdio: 'pipe' });
    assert.equal(fs.readFileSync(file, 'utf8'), before, 'run: node scripts/gen-review-registry.mjs');
  } finally {
    fs.writeFileSync(file, before);
  }
});

test('every registry entry points at a real module that exports bank, and covers all topic modules with a bank', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'src/curriculum/grade6/reviewBanks.ts'), 'utf8');
  const entries = [...src.matchAll(/'([^']+)': \(\) => import\('\.\/([^']+)'\)/g)];
  assert.ok(entries.length >= 100, `only ${entries.length} entries`);
  for (const [, , rel] of entries) {
    const f = path.join(process.cwd(), 'src/curriculum/grade6', rel + '.tsx');
    assert.match(fs.readFileSync(f, 'utf8'), /^export const bank\b/m, rel);
  }
  assert.equal(new Set(entries.map((e) => e[1])).size, entries.length, 'task slugs are unique');
});
