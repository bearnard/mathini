import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// No question may appear twice across the topic banks of one term: the term mock test draws from all of
// them, so a repeat could be asked twice in one test. (Read from source so no components are imported.)

const root = path.join(process.cwd(), 'src', 'curriculum', 'grade6', 'natural-sciences');
const promptsOf = (file: string): string[] =>
  [...fs.readFileSync(file, 'utf8').matchAll(/prompt: '((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\u2019/g, '’').replace(/\\'/g, "'"));

for (const term of ['term3', 'term4']) {
  test(`${term}: no prompt is repeated across the topic banks`, () => {
    const seen = new Map<string, string>();
    const dir = path.join(root, term);
    for (const topic of fs.readdirSync(dir)) {
      if (topic === 'mock-test') continue;
      const tsx = fs.readdirSync(path.join(dir, topic)).filter((f) => f.endsWith('.tsx'));
      for (const f of tsx) {
        for (const p of promptsOf(path.join(dir, topic, f))) {
          const where = `${topic}/${f}`;
          assert.ok(!seen.has(p), `"${p}" appears in both ${seen.get(p)} and ${where}`);
          seen.set(p, where);
        }
      }
    }
    assert.ok(seen.size >= 60, `read ${seen.size} prompts`);
  });
}
