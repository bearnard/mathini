import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { DESIGN_TOOLS, IPO_EXAMPLE, METHODOLOGIES, NOUN_VERB } from './_shared/designFacts';
import { informationTechnologyGrade12 } from './index';
import * as hardware from './term1/hardware-mobile-technologies/HardwareMobileTechnologiesContent';
import * as methodologies from './term1/software-methodologies-design-tools/SoftwareMethodologiesDesignToolsContent';
import * as cloud from './term2/cloud-computing-virtualisation/CloudComputingVirtualisationContent';
import * as management from './term2/computer-management/ComputerManagementContent';
import * as data from './term3/data-collection-warehousing-mining/DataCollectionWarehousingMiningContent';
import * as web3 from './term3/web3-semantic-search/Web3SemanticSearchContent';
import * as services from './term3/internet-services-technologies/InternetServicesTechnologiesContent';

interface Lesson { id: string; term: number; dir: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr12-hardware-mobile-technologies-t1', term: 1, dir: 'term1/hardware-mobile-technologies', ...hardware },
  { id: 'gr12-software-methodologies-design-tools-t1', term: 1, dir: 'term1/software-methodologies-design-tools', ...methodologies },
  { id: 'gr12-cloud-computing-virtualisation-t2', term: 2, dir: 'term2/cloud-computing-virtualisation', ...cloud },
  { id: 'gr12-computer-management-t2', term: 2, dir: 'term2/computer-management', ...management },
  { id: 'gr12-data-collection-warehousing-mining-t3', term: 1, dir: 'term3/data-collection-warehousing-mining', ...data },
  { id: 'gr12-web3-semantic-search-t3', term: 3, dir: 'term3/web3-semantic-search', ...web3 },
  { id: 'gr12-internet-services-technologies-t3', term: 3, dir: 'term3/internet-services-technologies', ...services },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const lessonText = (l: { learnSteps: LearnStep[] }) => text(html(h('div', null, l.learnSteps.map((s) => s.content))));

test('the new Grade 12 IT theory lessons are registered in their CAPS term, and the original lessons (except the two hidden in Wave B) are all still listed under the same ids, with a task instruction each', () => {
  const original = [
    'gr12-gui-design-event-driven-programming-t1', 'gr12-algorithmic-refinement-validation-testing-t1',
    'gr12-advanced-databases-sql-t2', 'gr12-relational-data-joins-normalisation-t2', 'gr12-forms-reports-database-program-integration-t2', 'gr12-networks-security-systems-integration-t2',
    'gr12-social-implications-privacy-ethics-t3', 'gr12-cyber-security-emerging-technologies-t3', 'gr12-integrated-solution-development-pat-completion-t3',
    'gr12-nsc-practical-programming-revision-t4', 'gr12-nsc-database-sql-revision-t4', 'gr12-nsc-theory-exam-technique-t4',
  ];
  const all = informationTechnologyGrade12.terms.flatMap((t) => t.topics.map((p) => p.id));
  for (const id of original) assert.ok(all.includes(id), `${id} is still listed`);
  for (const term of [1, 2, 3]) {
    const ids = informationTechnologyGrade12.terms.find((t) => t.id === term)!.topics.map((t) => t.id);
    for (const l of LESSONS.filter((x) => x.term === term)) assert.ok(ids.includes(l.id), l.id);
  }
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/it-gr12-missing.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const l of LESSONS) assert.ok(l.id in tasks, l.id);
});

for (const l of LESSONS) {
  test(`${l.id}: 4 to 6 slides ending in "Check yourself", every slide renders, 12 to 14 clean questions`, () => {
    assert.ok(l.learnSteps.length >= 4 && l.learnSteps.length <= 6, `${l.learnSteps.length} slides`);
    assert.equal(l.learnSteps.at(-1)?.title, 'Check yourself');
    for (const s of l.learnSteps) {
      const out = html(h('div', null, s.content));
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      assert.ok(!/undefined|NaN|\[object/.test(out), `${s.title}: broken text`);
    }
    assert.ok((html(h('div', null, l.learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    assert.ok(l.bank.length >= 12 && l.bank.length <= 14, `${l.bank.length} questions`);
    assert.equal(new Set(l.bank.map((q) => q.prompt)).size, l.bank.length);
    for (const q of l.bank) {
      assert.equal(q.options.length, 4, q.prompt);
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer), q.prompt);
      assert.ok((q.explanation ?? '').length >= 20, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: l.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
  });
}

test('the answer positions are spread over the four options', () => {
  const pos = [0, 0, 0, 0];
  const all = LESSONS.flatMap((l) => l.bank);
  for (const q of all) pos[q.options.indexOf(q.answer)]++;
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= all.length / 2, JSON.stringify(pos));
});

test('every short correct answer can be found in its lesson', () => {
  const gaps = findGaps().gaps.filter((g) => LESSONS.some((l) => g.file.startsWith(`grade12/information-technology/${l.dir}/`)) && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7);
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('methodologies and design tools: the facts agree with the lesson and with the question answers', () => {
  assert.deepEqual(METHODOLOGIES.map((m) => m.name), ['Waterfall', 'Rapid application development (RAD)', 'Incremental', 'Agile']);
  assert.deepEqual(DESIGN_TOOLS.map((t) => `${t.acronym}=${t.expansion}`), ['TOE=Task, Objects, Events', 'IPO=Input, Process, Output', 'CRC=Class, Responsibilities, Collaborators', 'UML=Unified Modeling Language']);
  assert.ok(NOUN_VERB.nouns.every((n) => NOUN_VERB.sentence.toLowerCase().includes(n)));
  assert.ok(NOUN_VERB.verbs.every((v) => NOUN_VERB.sentence.toLowerCase().includes(v)));
  assert.equal(IPO_EXAMPLE.process.includes('divide the total by 3'), true);
  const t = lessonText(methodologies);
  for (const m of METHODOLOGIES.slice(0, 2).concat(METHODOLOGIES.slice(2))) assert.ok(t.includes(m.idea), `${m.name}: idea shown`);
  for (const tool of DESIGN_TOOLS) assert.ok(t.includes(`${tool.acronym} (${tool.expansion})`), tool.acronym);
  const byPrompt = (part: string) => methodologies.bank.find((q) => q.prompt.includes(part))!;
  assert.equal(byPrompt('finishes each phase').answer, 'Waterfall');
  assert.ok(METHODOLOGIES[0].idea.includes('finished before the next one starts'));
  assert.equal(byPrompt('builds quick prototypes').answer, 'RAD');
  assert.equal(byPrompt('in parts that are tested').answer, 'Incremental');
  assert.equal(byPrompt('short cycles').answer, 'Agile');
  assert.equal(byPrompt('What do the letters TOE').answer, 'Task, Objects, Events');
  assert.equal(byPrompt('letters CRC').answer, 'Class, Responsibilities, Collaborators');
  assert.equal(byPrompt('which word suggests a method').answer, 'borrows');
  assert.ok(NOUN_VERB.verbs.includes('borrows'));
});

test('a methodology answer is never presented as the best for every project (the lesson says it depends)', () => {
  assert.ok(/No methodology is best for every project/.test(lessonText(methodologies)));
});

test('hardware: performance facts are relative, with no fixed speeds or sizes in the lesson', () => {
  const t = lessonText(hardware);
  assert.ok(!/\b\d+\s?(GB|TB|MB|GHz|Mbps|MHz)\b/i.test(t), 'no fixed figures');
  for (const needle of ['battery life', 'cache', 'RAM', 'SSD', 'multi-processing', 'SOHO (Small-Office-Home-Office)']) assert.ok(t.includes(needle), needle);
});

test('cloud computing: both sides are given, and the answer on who owns the software follows the lesson', () => {
  const t = lessonText(cloud);
  assert.ok(/Arguments for and against|arguments for and against/.test(t) && /\bFor\b/.test(t) && /\bAgainst\b/.test(t));
  assert.ok(/The provider owns the servers and the software/.test(t));
  const own = cloud.bank.find((q) => q.prompt.includes('who owns the software'))!;
  assert.equal(own.answer, 'The provider');
  const virt = cloud.bank.find((q) => q.prompt.includes('What does a hypervisor do'))!;
  assert.ok(/divides|shares/.test(virt.answer) && /hypervisor/.test(t));
  assert.ok(/The cloud is not a place without hardware/.test(t));
});

test('computer management: defragmenting is for an HDD and not an SSD, a UPS is for power failure, and a backup is tested and kept in a second place', () => {
  const t = lessonText(management);
  assert.ok(/Defragment a hard disk drive \(HDD\)/.test(t) && /SSD\)? does not need it/.test(t));
  assert.equal(management.bank.find((q) => q.prompt.includes('benefits from defragmenting'))!.answer, 'A hard disk drive');
  assert.equal(management.bank.find((q) => q.prompt.includes('UPS protect'))!.answer, 'A sudden power failure');
  assert.ok(/load-shedding/.test(t) && /can be restored/.test(t));
});

test('data collection and mining: RFID, the mining steps in order, and the examples agree with the lesson', () => {
  const t = lessonText(data);
  assert.ok(/RFID \(radio-frequency identification\)/.test(t));
  const steps = ['Extract the data', 'Look for patterns', 'Discover knowledge', 'Strategy'];
  let at = -1;
  for (const s of steps) { const i = t.indexOf(s); assert.ok(i > at, `${s} is in order`); at = i; }
  assert.equal(data.bank.find((q) => q.prompt.includes('What does RFID stand for'))!.answer, 'Radio-frequency identification');
  assert.equal(data.bank.find((q) => q.prompt.includes('comes after data is extracted'))!.answer.startsWith('Looking for patterns'), true);
  assert.ok(/Invisible does not mean secret or illegal/.test(t), 'invisible collection is not called illegal');
});

test('Web 3.0 is the Semantic Web; semantic search and mediated search are described, with the privacy concern', () => {
  const t = lessonText(web3);
  assert.ok(/Web 3\.0 \(the Semantic Web\)/.test(t) && /Semantic search/.test(t) && /Mediated search/.test(t));
  assert.equal(web3.bank.find((q) => q.prompt.includes('What is Web 3.0 also called'))!.answer.includes('Semantic'), true);
  assert.ok(/privacy is at risk/.test(t));
});

// A small well-formedness check for the XML that the lesson shows and that a question offers: every tag is closed and the tags are nested properly.
const wellFormed = (xml: string): boolean => {
  const stack: string[] = [];
  const re = /<(\/?)([a-zA-Z][\w-]*)[^>]*?(\/?)>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    if (m[3] === '/') continue;
    if (m[1] === '/') { if (stack.pop() !== m[2]) return false; } else stack.push(m[2]);
  }
  return stack.length === 0 && /^\s*<([\w-]+)[\s\S]*<\/\1>\s*$/.test(xml);
};

test('internet services: the XML example is well formed, only the correct XML option is well formed, and the CSS rule means what the question says', () => {
  assert.equal(wellFormed(services.XML_EXAMPLE), true);
  const q = services.bank.find((x) => x.prompt.includes('Which XML text is correct'))!;
  for (const o of q.options) assert.equal(wellFormed(o), o === q.answer, o);
  assert.ok(/h1 \{\s*color: blue;/.test(services.CSS_EXAMPLE));
  const css = services.bank.find((x) => x.prompt.includes('h1 { color: blue; }'))!;
  assert.equal(css.answer, 'Makes every h1 heading blue');
  assert.equal(services.bank.find((x) => x.prompt.includes('Where does PHP code run'))!.answer, 'On the server');
  assert.equal(services.bank.find((x) => x.prompt.includes('JavaScript script usually run'))!.answer, 'In the browser');
  assert.equal(services.bank.find((x) => x.prompt.includes('What does CSS stand for'))!.answer, 'Cascading Style Sheets');
  assert.ok(/A cookie is not a program/.test(lessonText(services)));
});
