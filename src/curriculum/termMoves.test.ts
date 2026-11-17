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
  [grade12, 'his', 'gr12-black-consciousness-movement-t1', 2], [grade12, 'his', 'gr12-soweto-uprising-t1', 2], [grade12, 'his', 'gr12-trade-unions-and-the-udf-t1', 2],
  [grade12, 'ls', 'gr12-endocrine-homeostasis-plant-responses-t2', 3],
  [grade12, 'it', 'gr12-relational-data-joins-normalisation-t2', 1], [grade12, 'it', 'gr12-networks-security-systems-integration-t2', 1],
  [grade12, 'it', 'gr12-forms-reports-database-program-integration-t2', 1], [grade12, 'it', 'gr12-cyber-security-emerging-technologies-t3', 2],
];

test('moved lessons are listed in their CAPS term', () => {
  for (const [g, s, topic, term] of MOVES) assert.equal(termOf(g, s, topic), term, `${s}/${topic}`);
});

test('no term of the changed subjects is empty and no topic is listed twice', () => {
  for (const [g, id] of [[grade6, 'math'], [grade9, 'lo'], [grade12, 'accounting'], [grade12, 'business-studies'], [grade12, 'it'], [grade12, 'his'], [grade12, 'ls'], [grade9, 'ns']] as [Grade, string][]) {
    const s = g.subjects.find((x) => x.id === id)!;
    for (const t of s.terms) assert.ok(t.topics.length > 0, `${id} term ${t.id}`);
    const ids = s.terms.flatMap((t) => t.topics.map((p) => p.id));
    assert.equal(new Set(ids).size, ids.length);
  }
});

// Wave B3, Grade 12 IT: two lessons that are not in the Grade 12 CAPS are hidden: out of the menus, the registry and the sitemap; the lesson code stays in the repo,
// the page redirects (308), and the questions (the task instruction and the D1 rows) are untouched. "Encapsulation" waits for the CAPS lesson "Classes in Delphi".
test('the hidden Grade 12 IT lessons are out of the curriculum but their code, task instruction and redirect remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const it = grade12.subjects.find((x) => x.id === 'it')!;
  const ids = it.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string, string][] = [
    ['gr12-advanced-oop-inheritance-polymorphism-t1', 'term1/advanced-oop-inheritance-polymorphism/AdvancedOopInheritancePolymorphism.tsx', '/grade-12/information-technology/advanced-oop-inheritance-and-polymorphism', '/grade-12/information-technology'],
    ['gr12-encapsulation-class-design-exception-handling-t1', 'term1/encapsulation-class-design-exception-handling/EncapsulationClassDesignExceptionHandling.tsx', '/grade-12/information-technology/encapsulation-class-design-and-exception-handling', '/grade-12/information-technology/classes-in-delphi'],
  ];
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/it-gr12-term1.json', 'utf8')).tasks as Record<string, string>;
  for (const [id, file, source, destination] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade12/information-technology/${file}`), 'the code is kept');
    assert.ok(id in tasks, 'the task instruction is kept');
    assert.equal(LEGACY_REDIRECTS.find((x) => x.source === source)?.destination, destination);
  }
  assert.ok(ids.includes('gr12-classes-in-delphi-t1'), 'the CAPS class lesson that replaces Encapsulation is listed');
});

// Wave B3, Grade 9 Natural Sciences: "Heat and Energy Transfer" is not in the Grade 9 CAPS and is hidden now that the CAPS Energy and Change lessons exist.
// The lesson code, its task instruction and its D1 questions stay; the page redirects (308) to the subject page; Term 3 keeps the CAPS lessons.
test('the hidden Grade 9 Natural Sciences heat lesson is out of the curriculum but its code, task instruction and redirect remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const ns = grade9.subjects.find((x) => x.id === 'ns')!;
  const ids = ns.terms.flatMap((t) => t.topics.map((p) => p.id));
  assert.ok(!ids.includes('gr9-heat-energy-transfer'), 'the heat lesson is hidden');
  assert.ok(fs.existsSync('src/curriculum/grade9/natural-sciences/term3/heat-energy-transfer/HeatEnergyTransfer.tsx'), 'the code is kept');
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/ns-gr9-term3.json', 'utf8')).tasks as Record<string, string>;
  assert.ok('gr9-heat-energy-transfer-t3' in tasks, 'the task instruction is kept');
  assert.equal(LEGACY_REDIRECTS.find((x) => x.source === '/grade-9/natural-sciences/heat-and-energy-transfer')?.destination, '/grade-9/natural-sciences');
  const t3 = ns.terms.find((t) => t.id === 3)!.topics.map((p) => p.id);
  for (const id of ['gr9-electricity-electric-cells', 'gr9-forces', 'gr9-electricity-safety', 'gr9-electricity-generation-grid', 'gr9-cost-electrical-power']) assert.ok(t3.includes(id), `${id} is in Term 3`);
});

// Wave B4, Grade 12 Life Sciences: the combined Endocrine, Homeostasis and Plant Responses lesson is CAPS Term 3 (it was listed in Term 2); the id, task id and page did not change.
test('the Grade 12 Life Sciences endocrine lesson is in Term 3, first, and Term 2 keeps the genetics and nervous system lessons', () => {
  const ls = grade12.subjects.find((x) => x.id === 'ls')!;
  const t2 = ls.terms.find((t) => t.id === 2)!.topics.map((p) => p.id);
  const t3 = ls.terms.find((t) => t.id === 3)!.topics.map((p) => p.id);
  assert.equal(t3[0], 'gr12-endocrine-homeostasis-plant-responses-t2');
  assert.ok(!t2.includes('gr12-endocrine-homeostasis-plant-responses-t2'));
  for (const id of ['gr12-genetics-inheritance-t2', 'gr12-genetic-engineering-t2', 'gr12-dna-fingerprinting-t2', 'gr12-nervous-system-sense-organs-t2']) assert.ok(t2.includes(id), id);
  for (const id of ['gr12-evolution-natural-selection-t3', 'gr12-human-evolution-t3']) assert.ok(t3.includes(id), id);
});
