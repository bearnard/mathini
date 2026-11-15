import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { buildUpTotal, sessionPlan } from './lo9Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const load = async (p: string) => (await import(`../../../curriculum/grade9/life-orientation/term2/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [s0, s1, s2, s3] = await Promise.all([
  load('physical-education-task-2/PhysicalEducationTask2'),
  load('sexuality-health/SexualityHealth'),
  load('social-environmental-responsibility/SocialEnvironmentalResponsibility'),
  load('substance-abuse-emotional-safety/SubstanceAbuseEmotionalSafety'),
]);

// Grade 9 Life Orientation, Term 2.
const lessons = [
  { name: 'PE', steps: s0, file: 'physical-education-task-2/PhysicalEducationTask2.tsx', bank: '6d3f4774acb2daaf' },
  { name: 'SH', steps: s1, file: 'sexuality-health/SexualityHealth.tsx', bank: '277fe7bd98f5c72c' },
  { name: 'SE', steps: s2, file: 'social-environmental-responsibility/SocialEnvironmentalResponsibility.tsx', bank: 'fd9b2a9553da5389' },
  { name: 'SA', steps: s3, file: 'substance-abuse-emotional-safety/SubstanceAbuseEmotionalSafety.tsx', bank: '29bbac4838d5010e' },
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
    const src = readFileSync(new URL(`../../../curriculum/grade9/life-orientation/term2/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('PE numbers shown in the slides come from the helpers', () => {
  const h = s0.map((s) => html(s.content)).join(' ');
  assert.ok(h.includes(`${sessionPlan().total} minutes`));
  assert.ok(h.includes(`${buildUpTotal()} minutes`));
  assert.ok(h.includes('15 + 20 + 25'));
});
