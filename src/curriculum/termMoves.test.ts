import test from 'node:test';
import assert from 'node:assert/strict';
import { grade6 } from './grade6';
import { grade9 } from './grade9';
import { grade12 } from './grade12';
import type { Grade } from '../types/curriculum';

// Wave B4: lessons moved to the term CAPS teaches them in (audit, audit/caps-alignment.md). Task ids/slugs did not change, so the
// public URLs (which come from titles) are unchanged too; this test pins the new term of each moved lesson and that no term is empty.
const termOf = (g: Grade, subject: string, topic: string): number => {
  const s = g.subjects.find((x) => x.id === subject)!;
  const t = s.terms.find((tt) => tt.topics.some((p) => p.id === topic));
  assert.ok(t, `${subject}/${topic} not found`);
  return t.id;
};

const MOVES: [Grade, string, string, number][] = [
  [grade6, 'math', 'time', 1], [grade6, 'math', 'data-handling', 1], [grade6, 'math', 'number-sentences', 1], [grade6, 'math', 'common-fractions', 1],
  [grade6, 'math', 'g6-3d-objects', 2], [grade6, 'math', 'symmetry', 2], [grade6, 'math', 'capacity', 2], [grade6, 'math', 'g6-decimal-place-value', 2],
  [grade6, 'math', 'mass', 3], [grade6, 'math', 'area-perimeter', 4], [grade6, 'math', 'volume', 4],
  [grade9, 'lo', 'gr9-sexuality-health-t2', 1], [grade9, 'lo', 'gr9-democracy-human-rights-t3', 2], [grade9, 'lo', 'gr9-careers-career-choices-t4', 3],
  [grade9, 'lo', 'gr9-social-environmental-responsibility-t2', 3], [grade9, 'lo', 'gr9-substance-abuse-emotional-safety-t2', 4],
  [grade12, 'accounting', 'gr12-vat-concepts-control-t3', 2], [grade12, 'accounting', 'gr12-manufacturing-cost-statements-t2', 3],
  [grade12, 'business-studies', 'gr12-investment-insurance-conflict-management-t2', 3],
  [grade12, 'business-studies', 'gr12-human-rights-inclusivity-t3', 2], [grade12, 'business-studies', 'gr12-environmental-social-responsibility-t3', 2],
];

test('moved lessons are listed in their CAPS term', () => {
  for (const [g, s, topic, term] of MOVES) assert.equal(termOf(g, s, topic), term, `${s}/${topic}`);
});

test('no term of the changed subjects is empty and no topic is listed twice', () => {
  for (const [g, id] of [[grade6, 'math'], [grade9, 'lo'], [grade12, 'accounting'], [grade12, 'business-studies']] as [Grade, string][]) {
    const s = g.subjects.find((x) => x.id === id)!;
    for (const t of s.terms) assert.ok(t.topics.length > 0, `${id} term ${t.id}`);
    const ids = s.terms.flatMap((t) => t.topics.map((p) => p.id));
    assert.equal(new Set(ids).size, ids.length);
  }
});
