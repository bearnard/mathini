import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { gradualPlan } from './lo5Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const base = 'grade8/life-orientation/term2';
const load = async (p: string) => (await import(`../../../curriculum/${base}/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const files = [
  { name: 'Community responsibility', file: 'community-responsibility/CommunityResponsibility', bank: '5a1370651fb13db6' },
  { name: 'Health and risk behaviour', file: 'health-and-risk-behaviour/HealthAndRiskBehaviour', bank: 'dd44eda6c292bfc3' },
  { name: 'Physical Education Task', file: 'physical-education-task/PhysicalEducationTask', bank: '88bad9641159ff6c' },
  { name: 'Social and environmental responsibility', file: 'social-and-environmental-responsibility/SocialAndEnvironmentalResponsibility', bank: '10f7275bce6e4b09' },
];
const lessons = await Promise.all(files.map(async (f) => ({ ...f, file: `${f.file}.tsx`, steps: await load(f.file) })));
const pe = lessons[2].steps;

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
    const src = readFileSync(new URL(`../../../curriculum/${base}/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('the PE endurance numbers come from the helper', () => {
  const ramp = gradualPlan(10, 2, 4);
  const h = pe.map((st) => html(st.content)).join(' ');
  assert.ok(h.includes(ramp.minutes.join(', ')));
  assert.ok(h.includes(`${ramp.increase} minutes more`));
});
