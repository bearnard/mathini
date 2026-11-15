import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TRIG_DECISION, trigDecisionWords } from './trigTool';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematics/term2/trigonometry-two-three-dimensions/TrigonometryTwoThreeDimensions.tsx'), 'utf8');
const learnSteps = lesson.slice(0, lesson.indexOf('const items'));
const flat = learnSteps.replace(/\s+/g, ' ').toLowerCase();

test('every method the picture names is one the lesson names, in the lesson\'s own words', () => {
  for (const w of trigDecisionWords()) assert.ok(flat.includes(w), `the lesson does not say "${w}"`);
});

test('the picture\'s boxes say exactly those methods', () => {
  const text = (lines: readonly string[]) => lines.join(' ').toLowerCase();
  assert.equal(text(TRIG_DECISION.question), 'is the triangle right-angled?');
  assert.equal(text(TRIG_DECISION.yes), 'basic trig ratios');
  assert.deepEqual(TRIG_DECISION.no.map((s) => s.toLowerCase()), ['sine rule', 'cosine rule', 'area rule']);
});

test('the lesson shows the decision picture', () => {
  assert.ok(learnSteps.includes('TrigToolChoice'));
});
