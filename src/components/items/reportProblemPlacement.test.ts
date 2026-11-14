import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// GUARD (ADR 0003 section 4): every place a learner answers a question offers "Report a problem". A new shell must add it too.
const SHELLS = [
  'src/components/PracticeRunner.tsx',
  'src/components/CapsSubjectTopic.tsx',
  'src/components/review/ReviewScreen.tsx',
  'src/curriculum/grade6/natural-sciences/_shared/NstTopic.tsx',
  'src/curriculum/grade6/natural-sciences/_shared/NstMockTest.tsx',
  'src/curriculum/grade6/geography/_shared/GeoTopic.tsx',
  'src/curriculum/grade6/history/_shared/HisTopic.tsx',
  'src/curriculum/grade6/afrikaans/_shared/AfrikaansTopic.tsx',
];

test('every question shell renders the report control, keyed per question', () => {
  for (const f of SHELLS) {
    const src = fs.readFileSync(f, 'utf8');
    assert.match(src, /<ReportProblem\b[^>]*\bkey=/, `${f} must render <ReportProblem key=... />`);
  }
});

test('every mock-test topic group carries its task slug (so a report can identify the question)', () => {
  for (const f of ['term3/mock-test/Term3MockTest.tsx', 'term4/mock-test/Term4MockTest.tsx', 'exam/Terms34ExamPractice.tsx']) {
    const src = fs.readFileSync(`src/curriculum/grade6/natural-sciences/${f}`, 'utf8');
    const groups = src.match(/\{ topic: '[^']+',[^}]*items:/g) ?? [];
    assert.ok(groups.length >= 4, f);
    for (const g of groups) assert.match(g, /task: '[a-z0-9-]+'/, `${f}: ${g}`);
  }
});
