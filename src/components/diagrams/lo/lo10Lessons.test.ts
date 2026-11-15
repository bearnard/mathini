import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { fasterBy, splitEvenly } from './lo10Helpers';
import { weekPlan } from './pswHelpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});

const DIR = 'grade9/life-orientation/term3';
const files = {
  democracy: ['democracy-human-rights/DemocracyHumanRights', 'd16d3fa44798ae66'],
  diversity: ['diversity-social-justice/DiversitySocialJustice', 'c0506238a9a3903d'],
  conflict: ['conflict-resolution-advocacy/ConflictResolutionAdvocacy', 'e474d6cb08da836e'],
  pe: ['physical-education-task-3/PhysicalEducationTask3', 'd4c1a0cf46deb785'],
} as const;
type Steps = import('../../CapsSubjectTopic').LearnStep[];
const load = async (p: string) => (await import(`../../../curriculum/${DIR}/${p}`)).learnSteps as Steps;
const lessons = await Promise.all(Object.entries(files).map(async ([name, [p, bank]]) => ({ name, p, bank, steps: await load(p) })));

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

  test(`${l.name}: every picture has an aria description and at most twelve text nodes`, () => {
    for (const s of l.steps) {
      for (const svg of html(s.content).match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 12, s.title);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/${DIR}/${l.p}.tsx`, import.meta.url), 'utf8');
    assert.equal(createHash('sha256').update(src.slice(src.indexOf('const bank: CapsItem'))).digest('hex').slice(0, 16), l.bank);
  });
}

test('numbers shown in the slides come from the helpers', () => {
  const by = (n: string) => lessons.find((l) => l.name === n)!.steps.map((s) => html(s.content)).join(' ');
  const each = splitEvenly(20, 2);
  assert.ok(by('conflict').includes(`20 ÷ 2 = ${each} minutes each`));
  const pe = by('pe');
  assert.ok(pe.includes(`= ${weekPlan([30, 0, 30, 45, 0]).total} minutes`));
  assert.ok(pe.includes(`16,4 − 15,9 = ${fasterBy('16,4', '15,9')} s faster`));
  assert.ok(pe.includes('105 minutes'));
});
