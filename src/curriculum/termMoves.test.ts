import test from 'node:test';
import assert from 'node:assert/strict';
import { grade6 } from './grade6';
import { grade8 } from './grade8';
import { grade9 } from './grade9';
import { grade10 } from './grade10';
import { grade11 } from './grade11';
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
  // Senior Phase Life Orientation Wave B: Grade 8 lessons move to the CAPS term
  [grade8, 'lo', 'careers-and-career-choices', 3], [grade8, 'lo', 'democracy-and-human-rights', 4], [grade8, 'lo', 'social-and-environmental-responsibility', 3], [grade8, 'lo', 'learning-styles-and-exam-readiness', 2],
  [grade9, 'lo', 'gr9-sexuality-health-t2', 1], [grade9, 'lo', 'gr9-democracy-human-rights-t3', 2], [grade9, 'lo', 'gr9-careers-career-choices-t4', 3],
  [grade9, 'lo', 'gr9-social-environmental-responsibility-t2', 3], [grade9, 'lo', 'gr9-substance-abuse-emotional-safety-t2', 4],
  [grade12, 'accounting', 'gr12-vat-concepts-control-t3', 2], [grade12, 'accounting', 'gr12-manufacturing-cost-statements-t2', 3],
  [grade12, 'business-studies', 'gr12-investment-insurance-conflict-management-t2', 3],
  [grade12, 'business-studies', 'gr12-human-rights-inclusivity-t3', 2], [grade12, 'business-studies', 'gr12-environmental-social-responsibility-t3', 2],
  [grade12, 'his', 'gr12-black-consciousness-movement-t1', 2], [grade12, 'his', 'gr12-soweto-uprising-t1', 2], [grade12, 'his', 'gr12-trade-unions-and-the-udf-t1', 2],
  [grade12, 'ls', 'gr12-endocrine-homeostasis-plant-responses-t2', 3],
  [grade12, 'it', 'gr12-relational-data-joins-normalisation-t2', 1], [grade12, 'it', 'gr12-networks-security-systems-integration-t2', 3],
  [grade12, 'it', 'gr12-forms-reports-database-program-integration-t2', 1], [grade12, 'it', 'gr12-cyber-security-emerging-technologies-t3', 2],
  // 2024 CAPS amendment (Circular S9 of 2025): the amended Grade 12 plan places these lessons in these terms
  [grade12, 'it', 'gr12-gui-design-event-driven-programming-t1', 2], [grade12, 'it', 'gr12-algorithmic-refinement-validation-testing-t1', 3],
  [grade12, 'it', 'gr12-classes-in-delphi-t1', 2], [grade12, 'it', 'gr12-advanced-databases-sql-t2', 1], [grade12, 'it', 'gr12-data-collection-warehousing-mining-t3', 1],
  [grade12, 'it', 'gr12-ai-vr-ar-mr-t2', 2], [grade12, 'it', 'gr12-computer-criminals-cybercrime-t2', 2], [grade12, 'it', 'gr12-network-parts-internet-access-t3', 3],
  [grade12, 'it', 'gr12-e-communication-security-t3', 3], [grade12, 'it', 'gr12-seo-search-t3', 3], [grade12, 'it', 'gr12-caring-for-data-big-data-t1', 1], [grade12, 'it', 'gr12-performance-gpu-caching-t1', 1],
  // 2024 CAPS amendment, Grade 11 IT (branch A): Computer Architecture to T1, File Handling to T2, Network Topologies to T1, Protocols to T2, and the new lessons
  [grade11, 'it', 'gr11-computer-architecture-t2', 1], [grade11, 'it', 'gr11-file-handling-t1', 2], [grade11, 'it', 'gr11-network-topologies-t3', 1], [grade11, 'it', 'gr11-protocols-media-t3', 2],
  [grade11, 'it', 'gr11-motherboard-memory-caching-t1', 1], [grade11, 'it', 'gr11-system-software-processing-t1', 1], [grade11, 'it', 'gr11-network-innovation-t1', 1], [grade11, 'it', 'gr11-computer-management-threats-t1', 1], [grade11, 'it', 'gr11-sorting-parallel-arrays-dates-t1', 1],
  [grade11, 'it', 'gr11-mobile-wireless-e-communication-t2', 2], [grade11, 'it', 'gr11-digitalisation-gig-economy-t2', 2], [grade11, 'it', 'gr11-dbms-database-types-t2', 2], [grade11, 'it', 'gr11-user-defined-methods-t2', 2],
  // 2024 CAPS amendment, Grade 10 IT (branch A): Networks and Data Handling to T2 and the ten new lessons
  [grade10, 'it', 'gr10-networks-data-handling-t3', 2],
  [grade10, 'it', 'gr10-computers-software-ict-systems-t1', 1], [grade10, 'it', 'gr10-file-management-t1', 1], [grade10, 'it', 'gr10-algorithms-ipo-trace-tables-t1', 1], [grade10, 'it', 'gr10-licences-digital-divide-t1', 1],
  [grade10, 'it', 'gr10-hardware-devices-t2', 2], [grade10, 'it', 'gr10-operating-systems-utilities-drivers-t2', 2], [grade10, 'it', 'gr10-networks-overview-t2', 2], [grade10, 'it', 'gr10-e-communication-email-netiquette-t2', 2], [grade10, 'it', 'gr10-problem-solving-polya-user-stories-t2', 2], [grade10, 'it', 'gr10-ergonomics-green-health-t2', 2],
  // Grade 10 IT branch B
  [grade10, 'it', 'gr10-social-implications-cyber-safety-t4', 3],
  [grade10, 'it', 'gr10-computer-management-t3', 3], [grade10, 'it', 'gr10-internet-www-t3', 3], [grade10, 'it', 'gr10-email-internet-threats-popia-t3', 3], [grade10, 'it', 'gr10-loops-strings-algorithms-t3', 3], [grade10, 'it', 'gr10-gui-design-timer-project-t3', 3], [grade10, 'it', 'gr10-internet-services-text-files-t4', 4],
  // Grade 10 Physical Sciences Wave B: States of matter and Atoms/Periodic table/Bonding move to Term 1 (CAPS)
  [grade10, 'ps', 'gr10-matter-states-phase-change-t2', 1], [grade10, 'ps', 'gr10-atoms-periodic-table-bonding-t2', 1],
  // Grade 11 Physical Sciences Wave B (CAPS terms)
  // Grade 11 History Wave B (CAPS terms)
  [grade11, 'his', 'gr11-scientific-racism-t3', 2], [grade11, 'his', 'gr11-nazism-and-race-t3', 2], [grade11, 'his', 'gr11-african-nationalism-t4', 3],
  [grade11, 'his', 'gr11-zionism-arab-nationalism-t4', 3], [grade11, 'his', 'gr11-segregation-and-apartheid-t3', 4],
  // Grade 10 Wave B (G10 gaps task): pure moves to the CAPS term; ids, task ids and URLs unchanged
  [grade10, 'ls', 'gr10-transport-systems-mammals-t2', 3], [grade10, 'ls', 'gr10-biodiversity-classification-t3', 4], [grade10, 'ls', 'gr10-history-of-life-earth-t3', 4],
  [grade10, 'accounting', 'gr10-combined-transactions-reconciliations', 1], [grade10, 'accounting', 'gr10-adjustments-financial-statements', 2],
  [grade10, 'business-studies', 'gr10-business-sectors-socio-economic-issues', 1],
  [grade11, 'ps', 'gr11-intermolecular-forces-t3', 1], [grade11, 'ps', 'gr11-electrostatics-t2', 3], [grade11, 'ps', 'gr11-electric-circuits-t2', 3], [grade11, 'ps', 'gr11-redox-reactions-t3', 4],
];

test('moved lessons are listed in their CAPS term', () => {
  for (const [g, s, topic, term] of MOVES) assert.equal(termOf(g, s, topic), term, `${s}/${topic}`);
});

test('no term of the changed subjects is empty and no topic is listed twice', () => {
  for (const [g, id] of [[grade6, 'math'], [grade6, 'his'], [grade12, 'lo'], [grade9, 'lo'], [grade12, 'accounting'], [grade12, 'business-studies'], [grade10, 'it'], [grade11, 'it'], [grade12, 'it'], [grade11, 'his'], [grade12, 'his'], [grade12, 'ls'], [grade9, 'ns'], [grade10, 'ps'], [grade11, 'ps'], [grade10, 'ls'], [grade10, 'accounting'], [grade10, 'business-studies']] as [Grade, string][]) {
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

// Wave B5, Grade 6 History: nine lessons that are not in the Grade 6 CAPS are hidden now that the nine CAPS lessons exist. Code, task instructions and D1 questions stay;
// each page redirects (308); no term is left empty and every CAPS lesson is listed.
test('the hidden Grade 6 History lessons are out of the curriculum but their code, task instructions and redirects remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const his = grade6.subjects.find((x) => x.id === 'his')!;
  const ids = his.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string][] = [
    ['his-what-is-history', 'term1/what-is-history/WhatIsHistory.tsx', 'what-is-history'],
    ['his-historical-sources', 'term1/historical-sources/HistoricalSources.tsx', 'historical-sources'],
    ['his-investigating-community', 'term1/investigating-community/InvestigatingCommunity.tsx', 'investigating-local-history'],
    ['his-timelines-change', 'term1/timelines-change/TimelinesChange.tsx', 'timelines-and-change'],
    ['his-british-take-cape', 'term2/british-take-cape/BritishTakeCape.tsx', 'the-british-take-the-cape'],
    ['his-frontier-peoples', 'term2/frontier-peoples/FrontierPeoples.tsx', 'peoples-on-the-frontier'],
    ['his-frontier-conflicts', 'term2/frontier-conflicts/FrontierConflicts.tsx', 'frontier-conflicts'],
    ['his-trekboers-migration', 'term2/trekboers-migration/TrekboersMigration.tsx', 'trekboers-and-migration'],
    ['his-ancient-medicine', 'term4/ancient-medicine/AncientMedicine.tsx', 'medicine-in-ancient-times'],
  ];
  for (const [id, file, slug] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade6/history/${file}`), `${file} is kept`);
    assert.ok(LEGACY_REDIRECTS.some((r) => r.source === `/grade-6/history/${slug}` && r.destination.startsWith('/grade-6/history')), `${slug} redirects`);
  }
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/his-gr6-term1.json', 'utf8')).tasks as Record<string, string>;
  assert.ok(Object.keys(tasks).length >= 9, 'the CAPS task instructions are kept');
  const caps = ['his-limpopo-valley-k2-schroda', 'his-mapungubwe-kingdom', 'his-mapungubwe-trade-today', 'his-east-coast-great-zimbabwe', 'his-marco-polo',
    'his-renaissance', 'his-inventions-reasons-exploring', 'his-dias-da-gama', 'his-voc-sailors'];
  for (const id of caps) assert.ok(ids.includes(id), `${id} is listed`);
  for (const t of his.terms) assert.ok(t.topics.length > 0, `Term ${t.id} is not empty`);
  assert.equal(his.terms.find((t) => t.id === 1)!.topics.length, 5);
  assert.equal(his.terms.find((t) => t.id === 2)!.topics.length, 4);
});

// Wave B, Grade 12 Life Orientation: four lessons that are not in the Grade 12 CAPS are hidden now that the CAPS lessons on health, careers and tax exist.
// Code, task instructions and D1 questions stay; each page redirects (308) to the closest CAPS lesson; no term is left empty.
test('the hidden Grade 12 Life Orientation lessons are out of the curriculum but their code, task instructions and redirects remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const lo = grade12.subjects.find((x) => x.id === 'lo')!;
  const ids = lo.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string, string, string][] = [
    ['gr12-community-and-social-action-t2', 'term2/community-and-social-action/CommunityAndSocialAction.tsx', 'community-and-social-action', 'social-and-environmental-responsibility', 'lo-gr12-term2.json'],
    ['gr12-risk-management-and-support-t2', 'term2/risk-management-and-support/RiskManagementAndSupport.tsx', 'risk-management-and-support', 'human-factors-in-ill-health-accidents-and-disasters', 'lo-gr12-term2.json'],
    ['gr12-active-citizenship-and-leadership-t3', 'term3/active-citizenship-and-leadership/ActiveCitizenshipAndLeadership.tsx', 'active-citizenship-and-leadership', 'democracy-and-human-rights', 'lo-gr12-term3.json'],
    ['gr12-transition-and-personal-planning-t4', 'term4/transition-and-personal-planning/TransitionAndPersonalPlanning.tsx', 'transition-and-personal-planning', 'careers-and-career-choices', 'lo-gr12-term4.json'],
  ];
  for (const [id, file, slug, to, taskFile] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade12/life-orientation/${file}`), `${file} is kept`);
    assert.ok(LEGACY_REDIRECTS.some((r) => r.source === `/grade-12/life-orientation/${slug}` && r.destination === `/grade-12/life-orientation/${to}`), `${slug} redirects to ${to}`);
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/${taskFile}`, 'utf8')).tasks as Record<string, string>;
    assert.ok(tasks[id], `${id}: the task instructions are kept`);
  }
  const caps = ['gr12-human-factors-ill-health-t3', 'gr12-lifestyle-diseases-t3', 'gr12-physical-activity-plan-t3', 'gr12-unemployment-solutions-t1', 'gr12-tax-corruption-fraud-t1',
    'gr12-social-and-environmental-responsibility-t2', 'gr12-democracy-and-human-rights-t3', 'gr12-ideologies-media-and-citizenship-t3', 'gr12-careers-and-career-choices-t4', 'gr12-world-of-work-readiness-t4'];
  for (const id of caps) assert.ok(ids.includes(id), `${id} is listed`);
  for (const t of lo.terms) assert.ok(t.topics.length > 0, `Term ${t.id} is not empty`);
  assert.equal(lo.terms.find((t) => t.id === 2)!.topics.length, 2);
});

// 2024 CAPS amendment (DBE Circular S9 of 2025), Grade 11 IT: OOP is Grade 12 Term 2 and SQL is Grade 12 Term 1, so the four Grade 11 lessons on them are hidden
// now that the Grade 11 replacements are live. Code, task instructions and D1 questions stay; each page redirects (308) to the Grade 11 IT subject page.
test('the hidden Grade 11 IT lessons are out of the curriculum but their code, task instructions and redirects remain, and the replacements are listed', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const it = grade11.subjects.find((x) => x.id === 'it')!;
  const ids = it.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string, string][] = [
    ['gr11-oop-classes-objects-t1', 'term1/oop-classes-objects/OopClassesObjects.tsx', 'oop-classes-and-objects', 'it-gr11-term1.json'],
    ['gr11-oop-methods-constructors-t1', 'term1/oop-methods-constructors/OopMethodsConstructors.tsx', 'oop-methods-and-constructors', 'it-gr11-term1.json'],
    ['gr11-databases-sql-t2', 'term2/databases-sql/DatabasesSql.tsx', 'databases-and-sql', 'it-gr11-term2.json'],
    ['gr11-sql-integration-t2', 'term2/sql-integration/SqlIntegration.tsx', 'sql-integration', 'it-gr11-term2.json'],
  ];
  for (const [id, file, slug, taskFile] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade11/information-technology/${file}`), `${file} is kept`);
    assert.equal(LEGACY_REDIRECTS.find((r) => r.source === `/grade-11/information-technology/${slug}`)?.destination, '/grade-11/information-technology');
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/${taskFile}`, 'utf8')).tasks as Record<string, string>;
    assert.ok(id in tasks, `${id}: the task instruction is kept`);
  }
  for (const id of ['gr11-database-design-keys-erd-t3', 'gr11-database-access-code-multi-form-t3', 'gr11-iot-4ir-big-data-t4', 'gr11-streaming-compression-t4', 'gr11-internet-services-websites-security-t4', 'gr11-user-defined-methods-t2', 'gr11-dbms-database-types-t2']) assert.ok(ids.includes(id), `${id} is listed`);
  for (const t of it.terms) assert.ok(t.topics.length > 0, `Term ${t.id} is not empty`);
});

// 2024 CAPS amendment, Grade 10 IT: databases are Grade 11 Term 3 and objects Grade 12 Term 2, so "Database and Introductory Object Concepts" is hidden now that the Grade 10
// replacements are live. Code, task instruction and D1 questions stay; the page redirects (308) to the Grade 10 IT subject page.
test('the hidden Grade 10 IT lesson is out of the curriculum but its code, task instruction and redirect remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const it = grade10.subjects.find((x) => x.id === 'it')!;
  const ids = it.terms.flatMap((t) => t.topics.map((p) => p.id));
  const id = 'gr10-database-introductory-object-concepts-t2';
  assert.ok(!ids.includes(id), 'hidden');
  assert.ok(fs.existsSync('src/curriculum/grade10/it/term2/database-introductory-object-concepts/DatabaseIntroductoryObjectConcepts.tsx'), 'the code is kept');
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/it-gr10-term2.json', 'utf8')).tasks as Record<string, string>;
  assert.ok(id in tasks, 'the task instruction is kept');
  assert.equal(LEGACY_REDIRECTS.find((r) => r.source === '/grade-10/information-technology/database-and-introductory-object-concepts')?.destination, '/grade-10/information-technology');
  for (const t of it.terms) assert.ok(t.topics.length > 0, `Term ${t.id} is not empty`);
});

// Wave B, Grade 10 Physical Sciences: "Electrostatics and Electric Circuits" (Coulomb's law, Ohm's law, power: Grade 11/12) is hidden now that the CAPS lessons
// Electrostatics Basics and Electric Circuits: Series and Parallel exist. Code, task instruction and D1 rows stay; the page redirects (308) to the subject page.
test('the hidden Grade 10 Physical Sciences electrostatics and circuits lesson is out of the curriculum but its code, task instruction and redirect remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const ps = grade10.subjects.find((x) => x.id === 'ps')!;
  const ids = ps.terms.flatMap((t) => t.topics.map((p) => p.id));
  assert.ok(!ids.includes('gr10-electrostatics-electric-circuits-t1'), 'the lesson is hidden');
  assert.ok(fs.existsSync('src/curriculum/grade10/ps/term1/electrostatics-electric-circuits/ElectrostaticsElectricCircuits.tsx'), 'the code is kept');
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/ps-gr10-term1.json', 'utf8')).tasks as Record<string, string>;
  assert.ok('gr10-electrostatics-electric-circuits-t1' in tasks, 'the task instruction is kept');
  assert.equal(LEGACY_REDIRECTS.find((x) => x.source === '/grade-10/physical-sciences/electrostatics-and-electric-circuits')?.destination, '/grade-10/physical-sciences');
  for (const id of ['gr10-electrostatics-basics-t2', 'gr10-circuits-series-parallel-t2']) assert.ok(ids.includes(id), `${id} is listed`);
});

// Wave B, Grade 10 Physical Sciences: the off-grade sections are trimmed out of three lessons (Doppler and geometric optics; Lewis structures and VSEPR; work-energy theorem and power).
test('the trimmed Grade 10 Physical Sciences lessons no longer teach Grade 11/12 sections, and their banks are still four questions', async () => {
  const fs = await import('node:fs');
  const dir = 'src/curriculum/grade10/ps/';
  const check = (file: string, gone: string[], questions: number) => {
    const src = fs.readFileSync(dir + file, 'utf8');
    for (const t of gone) assert.ok(!src.includes(`title: '${t}'`), `${file} still has ${t}`);
    assert.equal((src.match(/^\s+prompt:/gm) ?? []).length, questions, file);
  };
  check('term1/waves-sound-light/WavesSoundLight.tsx', ['Sound Waves and the Doppler Effect', 'Light, Reflection and Refraction'], 4);
  check('term2/atoms-periodic-table-bonding/AtomsPeriodicTableBonding.tsx', ['Lewis Structures and Molecular Shapes'], 4);
  check('term4/conservation-mechanical-energy/ConservationMechanicalEnergy.tsx', ['Work and the Work-Energy Theorem', 'Power: Rate of Energy Transfer'], 4);
});

// Wave B, Grade 11 Physical Sciences: five lessons that are Grade 10 or Grade 12 content are hidden (Grade 12 has live equivalents). Code, task instructions and D1 rows stay; each page redirects (308).
test('the hidden Grade 11 Physical Sciences lessons are out of the curriculum but their code, task instructions and redirects remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const ps = grade11.subjects.find((x) => x.id === 'ps')!;
  const ids = ps.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string, string][] = [
    ['gr11-work-energy-t1', 'term1/work-energy/WorkEnergyPower.tsx', 'ps-gr11-term1.json', 'work-energy-and-power'],
    ['gr11-momentum-t2', 'term2/momentum/Momentum.tsx', 'ps-gr11-term2.json', 'momentum-and-impulse'],
    ['gr11-projectile-motion-t2', 'term2/projectile-motion/ProjectileMotion.tsx', 'ps-gr11-term2.json', 'vertical-projectile-motion'],
    ['gr11-organic-chemistry-t3', 'term3/organic-chemistry/OrganicChemistry.tsx', 'ps-gr11-term3.json', 'organic-chemistry'],
    ['gr11-electrochemical-cells-t3', 'term3/electrochemical-cells/ElectrochemicalCells.tsx', 'ps-gr11-term3.json', 'electrochemical-cells'],
  ];
  for (const [id, file, taskFile, slug] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade11/physical-sciences/${file}`), `${file} is kept`);
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/${taskFile}`, 'utf8')).tasks as Record<string, string>;
    assert.ok(`${id}` in tasks, `${id} task instruction is kept`);
    assert.equal(LEGACY_REDIRECTS.find((r) => r.source === `/grade-11/physical-sciences/${slug}`)?.destination, '/grade-11/physical-sciences');
  }
  const terms = ps.terms.map((t) => t.topics.map((p) => p.id));
  assert.ok(terms[0].includes('gr11-intermolecular-forces-t3') && terms[2].includes('gr11-electrostatics-t2') && terms[2].includes('gr11-electric-circuits-t2') && terms[3].includes('gr11-redox-reactions-t3'));
  for (const t of terms) assert.ok(t.length > 0);
});

// Wave B, Grade 11 History: Decolonisation in Africa, Resistance to Racism and Liberation Movements are Grade 12 territory and are hidden (the last two once the Topic 5 replacement lessons were live); code, task instructions and D1 rows stay; the pages redirect (308).
test('the hidden Grade 11 History lessons are out of the curriculum but their code, task instructions and redirects remain; no term is empty', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const his = grade11.subjects.find((x) => x.id === 'his')!;
  const ids = his.terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [string, string, string, string][] = [
    ['gr11-decolonisation-africa-t4', 'term4/decolonisation-africa/DecolonisationAfrica.tsx', 'his-gr11-term4.json', 'decolonisation-in-africa'],
    ['gr11-liberation-movements-t4', 'term4/liberation-movements/LiberationMovements.tsx', 'his-gr11-term4.json', 'liberation-movements'],
    ['gr11-resistance-to-racism-t3', 'term3/resistance-to-racism/ResistanceToRacism.tsx', 'his-gr11-term3.json', 'resistance-to-racism'],
  ];
  for (const [id, file, taskFile, slug] of hidden) {
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade11/history/${file}`), `${file} is kept`);
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/${taskFile}`, 'utf8')).tasks as Record<string, string>;
    assert.ok(id in tasks, `${id} task instruction is kept`);
    assert.equal(LEGACY_REDIRECTS.find((r) => r.source === `/grade-11/history/${slug}`)?.destination, '/grade-11/history');
  }
  const t4 = his.terms.find((t) => t.id === 4)!.topics.map((p) => p.id);
  assert.deepEqual(t4, ['gr11-segregation-and-apartheid-t3', 'gr11-resistance-to-apartheid-1948-1960-t4', 'gr11-sharpeville-armed-struggle-rivonia-t4']);
  for (const t of his.terms) assert.ok(t.topics.length > 0);
});

// Wave B, Grade 8 Natural Sciences, Technology and EMS (CAPS terms): wrong-term lessons move (task ids and slugs unchanged), lessons that are not Grade 8 CAPS and four older EMS bundle lessons whose CAPS
// parts now each have their own lesson are hidden. Code, task instructions and D1 rows stay; each page redirects (308) to a page that exists; no term is empty.
test('Grade 8 NS, Technology and EMS: moved lessons sit in their CAPS term and the hidden ones are out but kept with a redirect', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const slugify = (t: string) => t.toLowerCase().replace(/&/g, 'and').replace(/[()]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const sub = (id: string) => grade8.subjects.find((x) => x.id === id)!;
  assert.equal(termOf(grade8, 'ns', 'classification-of-matter-and-periodic-table'), 2);
  assert.equal(termOf(grade8, 'ns', 'solar-system-and-gravity'), 4);
  assert.equal(termOf(grade8, 'tech', 'electrical-systems-and-circuit-safety'), 4);
  assert.equal(termOf(grade8, 'tech', 'logic-and-pat-design-work'), 4);
  // [subject id, subject slug, topic id, component dir, task file, slug of the hidden page]
  const hidden: [string, string, string, string, string, string][] = [
    ['ns', 'natural-sciences', 'biogeochemical-cycles', 'natural-sciences/term2/biogeochemical-cycles', 'ns-gr8-term2.json', 'biogeochemical-cycles'],
    ['ns', 'natural-sciences', 'forces-motion-and-measurement', 'natural-sciences/term4/forces-motion-and-measurement', 'ns-gr8-term4.json', 'forces-motion-and-measurement'],
    ['ns', 'natural-sciences', 'forms-and-transfer-of-energy', 'natural-sciences/term4/forms-and-transfer-of-energy', 'ns-gr8-term4.json', 'forms-and-transfer-of-energy'],
    ['ns', 'natural-sciences', 'chemical-reactions-acids-and-bases', 'natural-sciences/term3/chemical-reactions-acids-and-bases', 'ns-gr8-term3.json', 'chemical-reactions-acids-and-bases'],
    ['tech', 'technology', 'indigenous-technology-and-processing', 'technology/term4/indigenous-technology-and-processing', 'tech-gr8-term4.json', 'indigenous-technology-and-processing'],
    ['ems', 'economic-management-sciences', 'economy-government-accounting', 'economic-management-sciences/term1/economy-government-accounting', 'ems-gr8-term1.json', 'the-economy-government-and-accounting-foundations'],
    ['ems', 'economic-management-sciences', 'financial-literacy-entrepreneurship', 'economic-management-sciences/term2/financial-literacy-entrepreneurship', 'ems-gr8-term2.json', 'financial-literacy-and-entrepreneurship-basics'],
    ['ems', 'economic-management-sciences', 'cash-payments-business-ownership', 'economic-management-sciences/term3/cash-payments-business-ownership', 'ems-gr8-term3.json', 'cash-payments-business-ownership-and-management'],
    ['ems', 'economic-management-sciences', 'banking-saving', 'economic-management-sciences/term4/banking-saving', 'ems-gr8-term4.json', 'banking-saving-and-ems-consolidation'],
  ];
  for (const [sid, sslug, id, dir, taskFile, slug] of hidden) {
    const ids = sub(sid).terms.flatMap((t) => t.topics.map((p) => p.id));
    assert.ok(!ids.includes(id), `${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade8/${dir}`), `${dir} is kept`);
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/${taskFile}`, 'utf8')).tasks as Record<string, string>;
    assert.ok(Object.keys(tasks).some((k) => k.includes(id)), `${id} task instruction is kept`);
    const r = LEGACY_REDIRECTS.find((x) => x.source === `/grade-8/${sslug}/${slug}`);
    assert.ok(r, `${slug} redirects`);
    const dest = r.destination.replace(`/grade-8/${sslug}`, '').replace(/^\//, '');
    if (dest) assert.ok(sub(sid).terms.some((t) => t.topics.some((p) => slugify(p.title) === dest)), `${r.destination} is a live page`);
  }
  const counts = (sid: string) => sub(sid).terms.map((t) => t.topics.length);
  assert.deepEqual(counts('ns'), [2, 5, 4, 3]);
  assert.deepEqual(counts('tech'), [4, 2, 5, 6]);
  assert.deepEqual(counts('ems'), [3, 3, 2, 2]);
  for (const sid of ['ns', 'tech', 'ems']) for (const t of sub(sid).terms) assert.ok(t.topics.length > 0, `${sid} term ${t.id} is not empty`);
});

// Wave B, Grade 8 Creative Arts: the Visual Arts Term 2 and Term 4 bundles and the Music Term 3 and Term 4 bundles are not in the Grade 8 CAPS and are hidden now that the CAPS lessons exist for those terms.
// Code, task instructions and D1 rows stay; each page redirects (308) to the new lesson of that term; no term is empty and the other bundle lessons stay.
test('Grade 8 Creative Arts: the four hidden bundle lessons are out but kept with a redirect, and their terms still have the CAPS lessons', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const slugify = (t: string) => t.toLowerCase().replace(/&/g, 'and').replace(/[()]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const ca = grade8.subjects.find((x) => x.id === 'ca')!;
  const term = (n: number) => ca.terms.find((t) => t.id === n)!.topics.map((p) => p.id);
  // [term, topic id, component dir, task id, slug of the hidden page, slug of the lesson it goes to]
  const hidden: [number, string, string, string, string, string][] = [
    [2, 'visual-arts', 'term2/visual-arts', 'gr8-visual-arts-t2', 'visual-arts-term-2', 'fashion-design-from-recyclables'],
    [4, 'visual-arts', 'term4/visual-arts', 'gr8-visual-arts-t4', 'visual-arts-term-4', 'scraperboard-etching'],
    [3, 'music', 'term3/music', 'gr8-music-t3', 'music-term-3', 'melodic-ostinato-riffs-and-the-jingle'],
    [4, 'music', 'term4/music', 'gr8-music-t4', 'music-term-4', '6-8-d-major-tempo-and-articulation'],
  ];
  const liveSlugs = new Set(ca.terms.flatMap((t) => t.topics.map((p) => slugify(p.title))));
  for (const [n, id, dir, task, slug, to] of hidden) {
    assert.ok(!term(n).includes(id), `Term ${n} ${id} is hidden`);
    assert.ok(fs.existsSync(`src/curriculum/grade8/creative-arts/${dir}`), `${dir} is kept`);
    const tasks = JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/ca-gr8-term${n}.json`, 'utf8')).tasks as Record<string, string>;
    assert.ok(task in tasks, `${task} task instruction is kept`);
    assert.equal(LEGACY_REDIRECTS.find((r) => r.source === `/grade-8/creative-arts/${slug}`)?.destination, `/grade-8/creative-arts/${to}`);
    assert.ok(liveSlugs.has(to), `${to} is a live page`);
  }
  // the CAPS-right bundle lessons stay
  assert.ok(term(1).includes('visual-arts') && term(1).includes('music') && term(1).includes('drama') && term(1).includes('dance'));
  assert.ok(term(2).includes('music') && term(2).includes('drama') && term(2).includes('dance'));
  assert.ok(term(3).includes('visual-arts') && term(3).includes('drama') && term(3).includes('dance'));
  assert.ok(term(4).includes('drama') && term(4).includes('dance'));
  assert.deepEqual(ca.terms.map((t) => t.topics.length), [8, 7, 7, 8]);
});

// Hide of invented lessons that are not in the CAPS: Grade 6 Geography (3), Grade 6 Natural Sciences and Technology (seasons), Grade 9 EMS (2), Grade 9 English (1), Grade 9 Afrikaans (1).
// Component code and task ids stay; each page redirects (308) to a live page; no term is empty; the lessons that are the only cover of a CAPS item stay.
test('invented Grade 6 and Grade 9 lessons are out of the curriculum but their code and task id remain, with a redirect to a live page', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const { SEO_GRADES, subjectPath, topicPath } = await import('../lib/seo/curriculumIndex');
  const live = new Set(SEO_GRADES.flatMap((g) => g.subjects.flatMap((s) => [subjectPath(g, s), ...s.terms.flatMap((t) => t.topics.map((p) => topicPath(g, s, p)))])));
  const sub = (g: Grade, id: string) => g.subjects.find((x) => x.id === id)!;
  const ids = (g: Grade, id: string) => sub(g, id).terms.flatMap((t) => t.topics.map((p) => p.id));
  // [grade, subject id, topic id, component file, task id in the component, hidden page path]
  const hidden: [Grade, string, string, string, string, string][] = [
    [grade6, 'geo', 'geo-temperate-polar', 'grade6/geography/term3/temperate-polar/TemperatePolar.tsx', 'temperate-polar', '/grade-6/geography/mediterranean-temperate-and-polar'],
    [grade6, 'geo', 'geo-vegetation-adaptations', 'grade6/geography/term3/vegetation-adaptations/VegetationAdaptations.tsx', 'vegetation-adaptations', '/grade-6/geography/vegetation-and-adaptations'],
    [grade6, 'geo', 'geo-migration-impact', 'grade6/geography/term4/migration-impact/MigrationImpact.tsx', 'migration-impact', '/grade-6/geography/impact-of-migration'],
    [grade6, 'nst', 'nst-day-night-seasons', 'grade6/natural-sciences/term4/day-night-seasons/DayNightSeasons.tsx', 'day-night-seasons', '/grade-6/natural-sciences-and-technology/day-night-and-seasons'],
    [grade9, 'ems', 'gr9-entrepreneurship-planning', 'grade9/economic-management-sciences/term2/entrepreneurship-planning/EntrepreneurshipPlanning.tsx', 'gr9-entrepreneurship-planning-t2', '/grade-9/economic-management-sciences/entrepreneurship-and-financial-planning'],
    [grade9, 'ems', 'gr9-business-responsibility-integration', 'grade9/economic-management-sciences/term4/business-responsibility-integration/BusinessResponsibilityIntegration.tsx', 'gr9-business-responsibility-integration-t4', '/grade-9/economic-management-sciences/business-responsibility-and-integration'],
    [grade9, 'eng', 'reports-instructional-texts', 'grade9/english/term3/reports-instructional-texts/ReportsInstructionalTexts.tsx', 'gr9-reports-instructional-texts-t3', '/grade-9/english-hl/reports-and-instructional-texts'],
    [grade9, 'afr', 'afr-formal-correspondence', 'grade9/afrikaans/term2/formal-correspondence/FormalCorrespondence.tsx', 'gr9-formal-correspondence-t2', '/grade-9/afrikaans-fal/formele-korrespondensie'],
  ];
  for (const [g, sid, id, file, task, path] of hidden) {
    assert.ok(!ids(g, sid).includes(id), `${id} is hidden`);
    const src = `src/curriculum/${file}`;
    assert.ok(fs.existsSync(src), `${file} is kept`);
    assert.ok(fs.readFileSync(src, 'utf8').includes(`"${task}"`), `${id}: task id ${task} is kept in the component`);
    const r = LEGACY_REDIRECTS.find((x) => x.source === path);
    assert.ok(r, `${path} redirects`);
    assert.ok(live.has(r.destination), `${r.destination} is a live page`);
    assert.ok(!live.has(path), `${path} is no longer a live page`);
  }
  // lessons that are the only cover of a CAPS item stay
  for (const id of ['geo-climate-regions', 'geo-trade-case-studies']) assert.ok(ids(grade6, 'geo').includes(id), id);
  for (const id of ['gr9-budgeting-business-decisions', 'gr9-production-marketing', 'gr9-business-plans-functions']) assert.ok(ids(grade9, 'ems').includes(id), id);
  for (const id of ['letters-reviews', 'essay-transactional-writing', 'oral-literature-narrative']) assert.ok(ids(grade9, 'eng').includes(id), id);
  for (const id of ['afr-creative-personal-writing', 'afr-journalism-media', 'afr-transactional-writing']) assert.ok(ids(grade9, 'afr').includes(id), id);
  const counts = (g: Grade, sid: string) => sub(g, sid).terms.filter((t) => t.id > 0).map((t) => t.topics.length);
  assert.deepEqual(counts(grade6, 'geo'), [5, 4, 3, 3]);
  assert.deepEqual(counts(grade6, 'nst'), [5, 7, 8, 4]);
  assert.deepEqual(counts(grade9, 'ems'), [2, 4, 6, 4]);
  assert.deepEqual(counts(grade9, 'eng'), [5, 8, 6, 6]);
  assert.deepEqual(counts(grade9, 'afr'), [5, 5, 6, 5]);
  for (const [g, sid] of [[grade6, 'geo'], [grade6, 'nst'], [grade9, 'ems'], [grade9, 'eng'], [grade9, 'afr']] as [Grade, string][]) for (const t of sub(g, sid).terms) assert.ok(t.topics.length > 0, `${sid} term ${t.id} is not empty`);
});

// Senior Phase Life Orientation Wave B: six lessons that are not in the Grade 8 or Grade 9 CAPS are hidden now that the CAPS lessons exist. Code, task instructions and D1 questions stay;
// their pages redirect to the Life Orientation subject page. Lessons that are the only cover of a CAPS item stay (listed below).
test('the hidden Grade 8 and 9 Life Orientation lessons are out of the curriculum but their code, task instructions and redirects remain', async () => {
  const fs = await import('node:fs');
  const { LEGACY_REDIRECTS } = await import('../lib/seo/legacyRedirects');
  const { SEO_GRADES, subjectPath, topicPath } = await import('../lib/seo/curriculumIndex');
  const live = new Set(SEO_GRADES.flatMap((g) => g.subjects.flatMap((s) => [subjectPath(g, s), ...s.terms.flatMap((t) => t.topics.map((p) => topicPath(g, s, p)))])));
  const lo = (g: Grade) => g.subjects.find((x) => x.id === 'lo')!;
  const ids = (g: Grade) => lo(g).terms.flatMap((t) => t.topics.map((p) => p.id));
  const hidden: [Grade, string, string, string, string][] = [
    [grade8, 'study-skills-and-personal-organisation', 'grade8/life-orientation/term1/study-skills-and-personal-organisation/StudySkillsAndPersonalOrganisation.tsx', 'gr8-study-skills-and-personal-organisation-t1', '/grade-8/life-orientation/study-skills-and-personal-organisation'],
    [grade8, 'community-responsibility', 'grade8/life-orientation/term2/community-responsibility/CommunityResponsibility.tsx', 'gr8-community-responsibility-t2', '/grade-8/life-orientation/community-responsibility'],
    [grade8, 'conflict-management-and-communication', 'grade8/life-orientation/term3/conflict-management-and-communication/ConflictManagementAndCommunication.tsx', 'gr8-conflict-management-and-communication-t3', '/grade-8/life-orientation/conflict-management-and-communication'],
    [grade8, 'responsible-decision-making', 'grade8/life-orientation/term4/responsible-decision-making/ResponsibleDecisionMaking.tsx', 'gr8-responsible-decision-making-t4', '/grade-8/life-orientation/responsible-decision-making'],
    [grade9, 'gr9-diversity-social-justice-t3', 'grade9/life-orientation/term3/diversity-social-justice/DiversitySocialJustice.tsx', 'gr9-diversity-social-justice-t3', '/grade-9/life-orientation/diversity-and-social-justice'],
    [grade9, 'gr9-study-methods-exam-readiness-t4', 'grade9/life-orientation/term4/study-methods-exam-readiness/StudyMethodsExamReadiness.tsx', 'gr9-study-methods-exam-readiness-t4', '/grade-9/life-orientation/study-methods-and-exam-readiness'],
  ];
  for (const [g, id, file, task, path] of hidden) {
    assert.ok(!ids(g).includes(id), `${id} is hidden`);
    const src = `src/curriculum/${file}`;
    assert.ok(fs.existsSync(src), `${file} is kept`);
    assert.ok(fs.readFileSync(src, 'utf8').includes(`"${task}"`), `${id}: task id ${task} is kept in the component`);
    const r = LEGACY_REDIRECTS.find((x) => x.source === path);
    assert.ok(r, `${path} redirects`);
    assert.ok(live.has(r.destination), `${r.destination} is a live page`);
    assert.ok(!live.has(path), `${path} is no longer a live page`);
  }
  // lessons that are the only cover of a CAPS item stay
  for (const id of ['learning-styles-and-exam-readiness', 'diversity-and-nation-building', 'relationships-and-emotional-wellbeing', 'health-and-risk-behaviour']) assert.ok(ids(grade8).includes(id), id);
  for (const id of ['gr9-relationships-life-changes-t1', 'gr9-conflict-resolution-advocacy-t3', 'gr9-study-skills-transition-t1']) assert.ok(ids(grade9).includes(id), id);
  assert.deepEqual(lo(grade8).terms.map((t) => t.topics.length), [5, 4, 6, 4]);
  assert.deepEqual(lo(grade9).terms.map((t) => t.topics.length), [5, 6, 5, 7]);
});
