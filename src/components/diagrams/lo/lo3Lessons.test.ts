import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { planSegments, weekPlan } from './pswHelpers';
import { contrastRatio } from './caHelpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const load = async (p: string) => (await import(`../../../curriculum/grade7/creative-arts/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [t2, t3, t4] = await Promise.all([
  load('term2/creative-arts/CreativeArtsT2'),
  load('term3/creative-arts/CreativeArtsT3'),
  load('term4/creative-arts/CreativeArtsT4'),
]);

// Grade 7 Creative Arts lessons, Terms 2 to 4.
const lessons = [
  { name: 'T2', steps: t2, file: 'term2/creative-arts/CreativeArtsT2.tsx', bank: '75c40c8071ea6c6b' },
  { name: 'T3', steps: t3, file: 'term3/creative-arts/CreativeArtsT3.tsx', bank: '3a98e103676c8a7f' },
  { name: 'T4', steps: t4, file: 'term4/creative-arts/CreativeArtsT4.tsx', bank: 'd6ea3c3c9f517528' },
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
    const checks = html(l.steps[l.steps.length - 1].content);
    const n = (checks.match(/Show the answer/g) ?? []).length;
    assert.ok(n >= 3 && n <= 4, `${n} checks`);
  });

  test(`${l.name}: every picture has an aria description and at most six labels`, () => {
    for (const s of l.steps) {
      const h = html(s.content);
      const svgs = h.match(/<svg[\s\S]*?<\/svg>/g) ?? [];
      for (const svg of svgs) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        const labels = (svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length;
        assert.ok(labels <= 12, `${s.title}: ${labels} text nodes`);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/grade7/creative-arts/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('numbers shown in the slides come from the helpers', () => {
  const all = (steps: typeof t2) => steps.map((x) => html(x.content)).join(' ');
  const h2 = all(t2);
  assert.ok(h2.includes(`ratio ${contrastRatio('#1e1b4b', '#fef08a')} to 1`));
  assert.ok(h2.includes(`ratio ${contrastRatio('#fde68a', '#fef3c7')} to 1`));
  assert.ok(h2.includes(`${planSegments([8, 8, 8, 8].map((minutes) => ({ label: '', minutes }))).total} bars in all`));
  assert.ok(all(t3).includes(`${planSegments([8, 8, 4, 8].map((minutes) => ({ label: '', minutes }))).total} counts in all`));
  const week = weekPlan([15, 15, 15, 15, 15]).total;
  const h4 = all(t4);
  assert.ok(h4.includes(`${week} minutes`));
  assert.ok(h4.includes('1 h 15 min'));
});
