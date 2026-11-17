import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { comma, countGain, hoursMinutes, sum, targetTime, timeProgress } from './peHelpers';
import { planSegments, weekPlan } from './pswHelpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const load = async (p: string) => (await import(`../../../curriculum/grade7/life-orientation/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [t1, t2, t3, t4] = await Promise.all([
  load('term1/physical-education/PhysicalEducationT1'),
  load('term2/physical-education/PhysicalEducationT2'),
  load('term3/physical-education/PhysicalEducationT3'),
  load('term4/physical-education/PhysicalEducationT4'),
]);

// Grade 7 Physical Education lessons, Terms 1 to 4. Bank hashes are sha256 of the text from `const bank` on, taken from main.
const lessons = [
  { name: 'T1', steps: t1, file: 'term1/physical-education/PhysicalEducationT1.tsx', bank: '06586d2d93882aac' },
  { name: 'T2', steps: t2, file: 'term2/physical-education/PhysicalEducationT2.tsx', bank: '33755ef8cda33ce4' },
  { name: 'T3', steps: t3, file: 'term3/physical-education/PhysicalEducationT3.tsx', bank: 'a347e005788e38c2' },
  { name: 'T4', steps: t4, file: 'term4/physical-education/PhysicalEducationT4.tsx', bank: '75ab6e1704a5a331' },
];

const html = (n: React.ReactNode) => renderToStaticMarkup(createElement('div', null, n));
const words = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;

for (const l of lessons) {
  test(`${l.name}: 4 to 6 slides, one idea each, ending with Check yourself`, () => {
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

  test(`${l.name}: every picture has an aria description and at most six labels`, () => {
    for (const s of l.steps) {
      const svgs = html(s.content).match(/<svg[\s\S]*?<\/svg>/g) ?? [];
      for (const svg of svgs) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 12, `${s.title}: too many labels`);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/grade7/life-orientation/${l.file}`, import.meta.url), 'utf8');
    assert.equal(createHash('sha256').update(src.slice(src.indexOf('const bank: CapsItem'))).digest('hex').slice(0, 16), l.bank);
  });
}

const all = (steps: typeof t1) => steps.map((s) => html(s.content)).join(' ');

test('T1 numbers come from the helpers', () => {
  const h = all(t1);
  assert.ok(h.includes(`${comma(14.2)} s`) && h.includes(`${comma(targetTime(14.2, 0.5))} s`));
  assert.ok(h.includes('13,7 s'));
  assert.equal(planSegments([{ label: 'a', minutes: 10 }, { label: 'b', minutes: 25 }, { label: 'c', minutes: 5 }]).total, 40);
  assert.ok(h.includes('Total: 40 minutes'));
});

test('T2 interval set is 2 + 1 + 2 + 1 = 6 minutes', () => {
  assert.equal(planSegments([2, 1, 2, 1].map((m) => ({ label: 'x', minutes: m }))).total, 6);
  assert.ok(all(t2).includes('takes 6 minutes'));
});

test('T3 lap totals and progress come from the helpers', () => {
  const h = all(t3);
  assert.equal(sum([70, 70, 70, 70]), 280);
  assert.equal(sum([55, 70, 85, 100]), 310);
  assert.ok(h.includes('= 280 s') && h.includes('= 310 s') && h.includes('30 s sooner'));
  const p = timeProgress([15.2, 14.9, 14.6, 14.4]);
  assert.ok(h.includes(`${comma(p.faster)} s`) && h.includes('0,8 s'));
});

test('T4 plan and passes come from the helpers', () => {
  const h = all(t4);
  assert.equal(weekPlan([30, 0, 30, 0, 40]).total, 100);
  assert.ok(h.includes(`= 100 minutes, or ${hoursMinutes(100)}`));
  assert.equal(countGain([5, 6, 7, 8]), 3);
  assert.ok(h.includes('3 more passes'));
});
