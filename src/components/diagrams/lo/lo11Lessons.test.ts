import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { barHeights, change, examPlan, fetSubjects, gapToGoal, perEvening, weeklyMinutes } from './lo11Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const base = 'term4';
const load = async (p: string) => (await import(`../../../curriculum/grade9/life-orientation/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [careers, pe, future, study] = await Promise.all([
  load(`${base}/careers-career-choices/CareersCareerChoices`),
  load(`${base}/physical-education-task-4/PhysicalEducationTask4`),
  load(`${base}/responsible-future-planning/ResponsibleFuturePlanning`),
  load(`${base}/study-methods-exam-readiness/StudyMethodsExamReadiness`),
]);

// Grade 9 Life Orientation, Term 4.
const lessons = [
  { name: 'Careers', steps: careers, file: `${base}/careers-career-choices/CareersCareerChoices.tsx`, bank: 'fd117979065b6b2d' },
  { name: 'PE task', steps: pe, file: `${base}/physical-education-task-4/PhysicalEducationTask4.tsx`, bank: 'eafb1a0f55bf730d' },
  { name: 'Future planning', steps: future, file: `${base}/responsible-future-planning/ResponsibleFuturePlanning.tsx`, bank: 'cf0b3e5fb0127eff' },
  { name: 'Study methods', steps: study, file: `${base}/study-methods-exam-readiness/StudyMethodsExamReadiness.tsx`, bank: 'd4b6c87485641815' },
];

const html = (n: React.ReactNode) => renderToStaticMarkup(createElement('div', null, n));
const words = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;

for (const l of lessons) {
  test(`${l.name}: 4 to 6 slides, each with Rule, Worked and Mistake, ending with Check yourself`, () => {
    assert.ok(l.steps.length >= 4 && l.steps.length <= 6, `${l.steps.length} slides`);
    assert.equal(l.steps[l.steps.length - 1].title, 'Check yourself');
    for (const s of l.steps.slice(0, -1)) {
      const h = html(s.content);
      assert.ok(h.includes('The rule'), `${s.title}: Rule`);
      assert.ok(h.includes('Worked example'), `${s.title}: Worked`);
      assert.ok(h.includes('Common mistake'), `${s.title}: Mistake`);
      const w = words(h);
      assert.ok(w >= 40 && w <= 150, `${s.title}: ${w} words`);
    }
    const n = (html(l.steps[l.steps.length - 1].content).match(/Show the answer/g) ?? []).length;
    assert.ok(n >= 3 && n <= 4, `${n} checks`);
  });

  test(`${l.name}: every picture has an aria description and a sensible number of labels`, () => {
    for (const s of l.steps) {
      for (const svg of html(s.content).match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 14, `${s.title}: too many labels`);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/grade9/life-orientation/${l.file}`, import.meta.url), 'utf8');
    assert.equal(createHash('sha256').update(src.slice(src.indexOf('const bank: CapsItem'))).digest('hex').slice(0, 16), l.bank);
  });
}

const all = (steps: { content: React.ReactNode }[]) => steps.map((s) => html(s.content)).join(' ');

test('Careers: the seven FET subjects shown come from fetSubjects', () => {
  const f = fetSubjects();
  assert.ok(all(careers).includes(`${f.total} subjects`));
  assert.ok(all(careers).includes(`${f.compulsory.length} compulsory`));
});

test('PE task: the sit-up and session numbers match the helpers', () => {
  const c = change(18, 26);
  const h = all(pe);
  assert.ok(h.includes(`${c.to} − ${c.from} = ${c.diff} more`));
  assert.ok(h.includes(`${barHeights([8, 9, 7, 10]).total} sessions`));
  assert.equal(barHeights([8, 9, 7, 10]).total, 34);
});

test('Future planning: gap 6 points and 80 minutes a week match the helpers', () => {
  const h = all(future);
  assert.equal(gapToGoal(54, 60), 6);
  assert.equal(weeklyMinutes(20, 4), 80);
  assert.ok(h.includes('= 6'));
  assert.ok(h.includes('80 minutes'));
});

test('Study methods: the exam plan and revision share match the helpers', () => {
  const p = examPlan(90, 60, 15, 15, [20, 40]);
  const h = all(study);
  assert.equal(p.perMark, 1);
  assert.ok(h.includes(`${p.answering} minutes`));
  assert.ok(h.includes(`${p.sections[0]} minutes`));
  assert.equal(perEvening(8, 4).each, 2);
  assert.ok(h.includes('= 2 topics'));
});

test('PE task: the two sit-up bars are not added together', () => {
  const h = all(pe);
  assert.ok(h.includes('Sit-ups in one minute'));
  assert.ok(!h.includes('44 sit-ups'));
});
