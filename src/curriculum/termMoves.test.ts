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
  [grade12, 'it', 'gr12-relational-data-joins-normalisation-t2', 1], [grade12, 'it', 'gr12-networks-security-systems-integration-t2', 1],
  [grade12, 'it', 'gr12-forms-reports-database-program-integration-t2', 1], [grade12, 'it', 'gr12-cyber-security-emerging-technologies-t3', 2],
];

test('moved lessons are listed in their CAPS term', () => {
  for (const [g, s, topic, term] of MOVES) assert.equal(termOf(g, s, topic), term, `${s}/${topic}`);
});

test('no term of the changed subjects is empty and no topic is listed twice', () => {
  for (const [g, id] of [[grade6, 'math'], [grade9, 'lo'], [grade12, 'accounting'], [grade12, 'business-studies'], [grade12, 'it']] as [Grade, string][]) {
    const s = g.subjects.find((x) => x.id === id)!;
    for (const t of s.terms) assert.ok(t.topics.length > 0, `${id} term ${t.id}`);
    const ids = s.terms.flatMap((t) => t.topics.map((p) => p.id));
    assert.equal(new Set(ids).size, ids.length);
  }
});

// Wave B3, Grade 12 IT: "Advanced OOP: Inheritance and Polymorphism" is not in the Grade 12 CAPS. It is hidden: out of the menus, the registry and the sitemap,
// the lesson code stays in the repo, its page redirects (308) to the subject page, and its questions (the task instruction and the D1 rows) are untouched.
test('the hidden Grade 12 IT lesson is out of the curriculum but its code, task instruction and redirect remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const it = grade12.subjects.find((x) => x.id === 'it')!;
  const ids = it.terms.flatMap((t) => t.topics.map((p) => p.id));
  assert.ok(!ids.includes('gr12-advanced-oop-inheritance-polymorphism-t1'));
  assert.ok(fs.existsSync('src/curriculum/grade12/information-technology/term1/advanced-oop-inheritance-polymorphism/AdvancedOopInheritancePolymorphism.tsx'), 'the code is kept');
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/it-gr12-term1.json', 'utf8')).tasks as Record<string, string>;
  assert.ok('gr12-advanced-oop-inheritance-polymorphism-t1' in tasks, 'the task instruction is kept');
  const r = LEGACY_REDIRECTS.find((x) => x.source === '/grade-12/information-technology/advanced-oop-inheritance-and-polymorphism');
  assert.deepEqual(r?.destination, '/grade-12/information-technology');
});
