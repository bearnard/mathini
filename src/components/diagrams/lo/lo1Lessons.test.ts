import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
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
  load('term1/personal-social-wellbeing/PersonalSocialWellbeingT1'),
  load('term2/personal-social-wellbeing/PersonalSocialWellbeingT2'),
  load('term3/personal-social-wellbeing/PersonalSocialWellbeingT3'),
  load('term4/personal-social-wellbeing/PersonalSocialWellbeingT4'),
]);

// Grade 7 Personal and Social Well-being lessons, Terms 1 to 4.
const lessons = [
  { name: 'T1', steps: t1, file: 'term1/personal-social-wellbeing/PersonalSocialWellbeingT1.tsx', bank: '59c9200da89fb013' },
  { name: 'T2', steps: t2, file: 'term2/personal-social-wellbeing/PersonalSocialWellbeingT2.tsx', bank: '0a3a1af8aa83740a' },
  { name: 'T3', steps: t3, file: 'term3/personal-social-wellbeing/PersonalSocialWellbeingT3.tsx', bank: 'e0658879da8c12f0' },
  { name: 'T4', steps: t4, file: 'term4/personal-social-wellbeing/PersonalSocialWellbeingT4.tsx', bank: '37e07f4714b59ad5' },
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
    const src = readFileSync(new URL(`../../../curriculum/grade7/life-orientation/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('T4 numbers shown in the slides come from the helpers', () => {
  const week = weekPlan([30, 30, 30, 30, 30]).total;
  const session = planSegments([{ label: 'a', minutes: 30 }, { label: 'b', minutes: 5 }, { label: 'c', minutes: 30 }]).total;
  const h = t4.map((s) => html(s.content)).join(' ');
  assert.ok(h.includes(`${week} minutes`));
  assert.ok(h.includes(`${session} minutes`));
  assert.ok(h.includes('2 h 30 min'));
  assert.ok(h.includes('1 h 5 min'));
});
