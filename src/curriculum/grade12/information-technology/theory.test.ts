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

interface Lesson { id: string; term: number; dir: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr12-hardware-mobile-technologies-t1', term: 1, dir: 'term1/hardware-mobile-technologies', ...hardware },
  { id: 'gr12-software-methodologies-design-tools-t1', term: 1, dir: 'term1/software-methodologies-design-tools', ...methodologies },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const lessonText = (l: { learnSteps: LearnStep[] }) => text(html(h('div', null, l.learnSteps.map((s) => s.content))));

test('the new Grade 12 IT theory lessons are registered in their CAPS term after the existing lessons (ids unchanged), with a task instruction each', () => {
  const existing: Record<number, string[]> = {
    1: ['gr12-advanced-oop-inheritance-polymorphism-t1', 'gr12-encapsulation-class-design-exception-handling-t1', 'gr12-gui-design-event-driven-programming-t1', 'gr12-algorithmic-refinement-validation-testing-t1'],
    2: ['gr12-advanced-databases-sql-t2', 'gr12-relational-data-joins-normalisation-t2', 'gr12-forms-reports-database-program-integration-t2', 'gr12-networks-security-systems-integration-t2'],
    3: ['gr12-social-implications-privacy-ethics-t3', 'gr12-cyber-security-emerging-technologies-t3', 'gr12-integrated-solution-development-pat-completion-t3'],
  };
  for (const term of [1, 2, 3]) {
    const ids = informationTechnologyGrade12.terms.find((t) => t.id === term)!.topics.map((t) => t.id);
    assert.deepEqual(ids.slice(0, existing[term].length), existing[term], `term ${term}: existing lessons keep their place and ids`);
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
