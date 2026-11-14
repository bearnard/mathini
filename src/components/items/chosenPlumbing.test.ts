import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// GUARD (ADR 0003 section 5): item analysis needs the option a learner tapped. Every multiple-choice shell sends it.
test('every shell that records a multiple-choice answer passes the tapped option as `chosen`', () => {
  const g6 = 'src/curriculum/grade6';
  for (const f of [`${g6}/natural-sciences/_shared/NstTopic.tsx`, `${g6}/geography/_shared/GeoTopic.tsx`, `${g6}/history/_shared/HisTopic.tsx`]) {
    assert.match(fs.readFileSync(f, 'utf8'), /recordAttempt\([^)]*current\.prompt, chosen\)/, f);
  }
  assert.match(fs.readFileSync(`${g6}/afrikaans/_shared/AfrikaansTopic.tsx`, 'utf8'), /recordAttempt\([^)]*current\.prompt, option\)/);
  for (const f of ['src/components/PracticeRunner.tsx', 'src/components/CapsSubjectTopic.tsx']) {
    const src = fs.readFileSync(f, 'utf8');
    assert.match(src, /chosen: option/, f);
    assert.match(src, /chosen: r\.chosen/, f);
  }
  assert.match(fs.readFileSync('src/components/review/ReviewScreen.tsx', 'utf8'), /streak: streakRef\.current, chosen \}/);
});
