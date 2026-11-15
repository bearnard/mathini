import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// The class roster must list EVERY member. An inner scroll box cut the ninth learner in half (a stray row at the bottom), so there is none.
test('the roster list has no inner scroll box or height cap, so every member shows', () => {
  const src = fs.readFileSync('src/components/teacher/TeacherArea.tsx', 'utf8');
  const start = src.indexOf('id="roster"');
  assert.ok(start > 0, 'the roster card exists');
  const roster = src.slice(start, src.indexOf('</SectionCard>', start));
  assert.match(roster, /c\.roster\.map\(\(m\) =>/);
  assert.ok(!/max-h-|overflow-y-(auto|scroll)|h-\[\d/.test(roster), 'no height cap or inner scroll around the roster list');
});
