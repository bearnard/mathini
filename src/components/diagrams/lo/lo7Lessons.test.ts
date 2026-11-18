import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { assignBlocks, comma, minutesPerMark, minutesText, percent, weeklyMinutes } from './lo7Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const load = async (p: string) => (await import(`../../../curriculum/grade8/life-orientation/term4/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];

// Grade 8 Life Orientation, Term 4.
const lessons = [
  { name: 'Careers', file: 'careers-and-career-choices/CareersAndCareerChoices', bank: '1d8f8183cd928cbb' },
  { name: 'Learning styles', file: 'learning-styles-and-exam-readiness/LearningStylesAndExamReadiness', bank: '84150fcf0b6278f7' },
  { name: 'PE task', file: 'physical-education-task/PhysicalEducationTask', bank: 'ce8b7ab6fb7c89a2' },
  { name: 'Decision-making', file: 'responsible-decision-making/ResponsibleDecisionMaking', bank: '11fabb922a914837' },
];
const steps: Record<string, import('../../CapsSubjectTopic').LearnStep[]> = {};
for (const l of lessons) steps[l.name] = await load(l.file);

const html = (n: React.ReactNode) => renderToStaticMarkup(createElement('div', null, n));
const words = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;
const all = (name: string) => steps[name].map((s) => html(s.content)).join(' ');

for (const l of lessons) {
  test(`${l.name}: 4 to 6 slides, one idea each, ending with Check yourself`, () => {
    const s = steps[l.name];
    assert.ok(s.length >= 4 && s.length <= 6, `${s.length} slides`);
    assert.equal(s[s.length - 1].title, 'Check yourself');
    for (const slide of s.slice(0, -1)) {
      const h = html(slide.content);
      assert.ok(h.includes('The rule'), `${slide.title}: Rule`);
      assert.ok(h.includes('Worked example'), `${slide.title}: Worked`);
      assert.ok(h.includes('Common mistake'), `${slide.title}: Mistake`);
      const w = words(h);
      assert.ok(w >= 40 && w <= 150, `${slide.title}: ${w} words`);
    }
    const n = (html(s[s.length - 1].content).match(/Show the answer/g) ?? []).length;
    assert.ok(n >= 3 && n <= 4, `${n} checks`);
  });

  test(`${l.name}: every picture has an aria description`, () => {
    for (const slide of steps[l.name]) {
      for (const svg of html(slide.content).match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 14, `${slide.title}: too many labels`);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/grade8/life-orientation/term4/${l.file}.tsx`, import.meta.url), 'utf8');
    assert.equal(createHash('sha256').update(src.slice(src.indexOf('const bank: CapsItem'))).digest('hex').slice(0, 16), l.bank);
  });
}

test('Learning styles: the numbers shown come from the helpers', () => {
  const plan = assignBlocks(['Maths', 'English', 'Natural Sciences'], 5, 2);
  const h = all('Learning styles');
  assert.ok(h.includes(`Maths ${plan.counts[0].blocks}, English ${plan.counts[1].blocks}, Natural Sciences ${plan.counts[2].blocks}`));
  assert.ok(h.includes(`${minutesText(plan.counts[0].blocks * 30)}`));
  assert.ok(h.includes(`${comma(minutesPerMark(45, 30))} minutes for each mark`));
  assert.ok(h.includes('1,5'));
  const catchUp = assignBlocks(['A', 'B', 'C', 'D'], 3, 2);
  assert.equal(catchUp.total, 6);
  assert.ok(h.includes(`${minutesText(catchUp.total * 30)}`));
  assert.ok(h.includes('3 h'));
});

test('PE task: the numbers shown come from the helpers', () => {
  const h = all('PE task');
  assert.ok(h.includes('6 + 7 + 8 + 9 = 30'));
  assert.ok(h.includes(`${percent(30, 40)}%`));
  assert.ok(h.includes(`${weeklyMinutes(20, 3)} minutes, or ${minutesText(60)}`));
});
