import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { learnSteps as fileHandling } from './term1/file-handling/Slides';
import { learnSteps as sql } from './term2/sql-integration/Slides';
import { learnSteps as data } from './term3/data-processing/Slides';
import { learnSteps as debug } from './term4/debugging-testing/Slides';
import { learnSteps as exam } from './term4/exam-consolidation/Slides';

const here = path.dirname(fileURLToPath(import.meta.url));
const html = (n: unknown) => renderToStaticMarkup(n as never);
const text = (h: string) => h.replace(/<pre[\s\S]*?<\/pre>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const lessons = { fileHandling, sql, data, debug, exam };
const files = [
  'term1/file-handling/FileHandling.tsx',
  'term2/sql-integration/SqlIntegration.tsx',
  'term3/data-processing/DataProcessing.tsx',
  'term4/debugging-testing/DebuggingTesting.tsx',
  'term4/exam-consolidation/ExamConsolidation.tsx',
];
const python = /print\(|\bdef \b|range\(|python|\.strip\(|readlines|fetchall|ValueError|ZeroDivisionError|\bNameError|SyntaxError/i;

for (const [name, steps] of Object.entries(lessons)) {
  test(`${name}: Delphi lesson shape`, () => {
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps[steps.length - 1].title, 'Check yourself');
    steps.forEach((s) => {
      const h = html(s.content);
      const words = text(h).split(' ').length;
      assert.ok(words >= 40 && words <= 130, `${s.title}: ${words} words`);
      assert.ok(!python.test(h), `${s.title}: Python token`);
    });
    const last = html(steps[steps.length - 1].content);
    assert.equal((last.match(/<li>/g) ?? []).length, 8, 'four questions and four answers');
  });
}

test('banks contain no Python', () => {
  files.forEach((f) => assert.ok(!python.test(fs.readFileSync(path.join(here, f), 'utf8')), f));
});
