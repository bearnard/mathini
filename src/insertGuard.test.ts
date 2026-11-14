import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// GUARD (ADR 0003 section 1a): every code path that stores AI-GENERATED questions into item_cache must run them through the quality
// validator and store their score. A new insert path has to be added here on purpose.

const roots = ['src', 'scripts'];
const files: string[] = [];
const walk = (d: string) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p); }
    else if (/\.(ts|tsx|mjs)$/.test(e.name)) files.push(p);
  }
};
for (const r of roots) walk(r);

const INSERT = /INSERT\s+(OR\s+\w+\s+)?INTO\s+item_cache/i;
const ALLOWED_WITHOUT_VALIDATOR: Record<string, string> = {
  'scripts/import-bank.ts': 'imports CURATED bank questions (hand-written, checked by the curated-bank ratchet), not generated ones',
  'scripts/seed-admin-demo.ts': 'local demo data only',
};
const MUST_VALIDATE = ['src/lib/server/topUp.ts', 'src/lib/server/gemini.ts', 'scripts/seed-questions.ts'];

test('every file that inserts into item_cache is accounted for', () => {
  const inserting = files.filter((f) => !f.endsWith('.test.ts') && !f.includes('test-support') && !f.endsWith('testD1.ts') && INSERT.test(fs.readFileSync(f, 'utf8')));
  for (const f of inserting) {
    const known = MUST_VALIDATE.includes(f) || f in ALLOWED_WITHOUT_VALIDATOR;
    assert.ok(known, `${f} inserts into item_cache but is not in the guard list: validate with acceptItems and add it to MUST_VALIDATE`);
  }
  for (const f of MUST_VALIDATE) assert.ok(inserting.includes(f), `${f} no longer inserts: remove it from the guard`);
});

test('generated-question insert paths call the validator and store the score and flags', () => {
  for (const f of MUST_VALIDATE) {
    const src = fs.readFileSync(f, 'utf8');
    assert.match(src, /acceptItems/, `${f} must run generated questions through acceptItems`);
    assert.match(src, /quality_score/, `${f} must store quality_score`);
    assert.match(src, /quality_flags/, `${f} must store quality_flags`);
  }
});

test('the cron route and the scheduled job reach the same insert code (no private copy of the generator)', () => {
  assert.match(fs.readFileSync('src/app/api/cron/top-up/route.ts', 'utf8'), /runTopUp/);
  assert.match(fs.readFileSync('src/lib/server/scheduled.ts', 'utf8'), /runTopUp/);
  assert.doesNotMatch(fs.readFileSync('src/app/api/cron/top-up/route.ts', 'utf8'), /INSERT/);
});

test('all readers of the AI pool apply the servable filter (rejected rows are never served)', () => {
  const caps = ['src/app/api/caps/grade6/route.ts', 'src/app/api/caps/[subject]/route.ts', 'src/app/api/revision/route.ts'];
  for (const f of caps) assert.match(fs.readFileSync(f, 'utf8'), /fetchPoolItems/, `${f} must read through poolStore.fetchPoolItems`);
  assert.match(fs.readFileSync('src/lib/server/poolStore.ts', 'utf8'), /quality_score IS NULL OR quality_score > 0/);
});
