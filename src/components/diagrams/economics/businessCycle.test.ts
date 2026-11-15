import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PHASES, output, phaseAt, trend, turningPoints } from './businessCycle';

test('between two troughs the curve has exactly one peak, and the troughs are the lowest points around', () => {
  const tp = turningPoints(0.2, 1.3);
  assert.deepEqual(tp.map((p) => p.kind), ['peak', 'trough']);
  const [peak, trough] = tp;
  assert.ok(peak.t > 0.45 && peak.t < 0.55);
  assert.ok(trough.t > 0.95 && trough.t < 1.05);
  assert.ok(output(peak.t) > output(peak.t - 0.05) && output(peak.t) > output(peak.t + 0.05));
  assert.ok(output(trough.t) < output(trough.t - 0.05) && output(trough.t) < output(trough.t + 0.05));
});

test('output is rising before the peak (expansion) and falling after it (recession)', () => {
  assert.equal(phaseAt(0.3), 'expansion');
  assert.equal(phaseAt(0.75), 'recession');
  assert.equal(phaseAt(1.2), 'expansion');
});

test('the wave stays around the trend: above it at the peak, below it at the trough', () => {
  const [peak, trough] = turningPoints(0.2, 1.3);
  assert.ok(output(peak.t) > trend(peak.t));
  assert.ok(output(trough.t) < trend(trough.t));
});

test('the phases are the four the lesson names, in the order it names them, and the lesson uses the picture', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/economics/term1/business-cycles/BusinessCycles.tsx'), 'utf8');
  const text = lesson.slice(0, lesson.indexOf('const items')).replace(/\s+/g, ' ');
  const found = /through expansion, peak, recession and trough/.test(text);
  assert.ok(found, 'the lesson names the four phases in this order');
  assert.deepEqual([...PHASES], ['expansion', 'peak', 'recession', 'trough']);
  assert.ok(text.includes('BusinessCycleWave'));
});
