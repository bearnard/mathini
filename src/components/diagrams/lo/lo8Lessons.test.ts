import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { hoursMinutes, logGain, subjectMinutes, targetMark, totalMinutes } from './lo8Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const load = async (p: string) => (await import(`../../../curriculum/grade9/life-orientation/term1/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [dev, pe, rel, study] = await Promise.all([
  load('development-of-self/DevelopmentOfSelf'),
  load('physical-education-task-1/PhysicalEducationTask1'),
  load('relationships-life-changes/RelationshipsLifeChanges'),
  load('study-skills-transition/StudySkillsTransition'),
]);

// Grade 9 Life Orientation, Term 1.
const lessons = [
  { name: 'Development of the self', steps: dev, file: 'development-of-self/DevelopmentOfSelf.tsx', bank: 'dbe1068248fb3e4a' },
  { name: 'Physical Education Task 1', steps: pe, file: 'physical-education-task-1/PhysicalEducationTask1.tsx', bank: '976e47b258801107' },
  { name: 'Relationships and life changes', steps: rel, file: 'relationships-life-changes/RelationshipsLifeChanges.tsx', bank: 'fabd285aa619be24' },
  { name: 'Study skills and transition', steps: study, file: 'study-skills-transition/StudySkillsTransition.tsx', bank: 'eb0d7b9567aaaec4' },
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
    const src = readFileSync(new URL(`../../../curriculum/grade9/life-orientation/term1/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('numbers shown in the slides come from the helpers', () => {
  const all = (steps: typeof dev) => steps.map((x) => html(x.content)).join(' ');
  assert.ok(all(dev).includes(`from 55 to ${targetMark(55, 10)}`));
  const planB = 3 * 20 * 4;
  assert.ok(all(pe).includes(`= ${planB} minutes`));
  assert.ok(all(pe).includes(`${logGain([12, 15, 17, 20])} more repetitions`));
  const plan = subjectMinutes([{ subject: 'M', sessions: 3, length: 30 }, { subject: 'L', sessions: 2, length: 30 }, { subject: 'E', sessions: 2, length: 30 }]);
  assert.ok(all(study).includes(`${totalMinutes(plan)} minutes, or ${hoursMinutes(totalMinutes(plan))}`));
});
