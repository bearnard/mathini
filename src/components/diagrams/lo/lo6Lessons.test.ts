import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { buildUp, countUnique, shareDays } from './lo6Helpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const base = 'grade8/life-orientation/term3';
const load = async (p: string) => (await import(`../../../curriculum/${base}/${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];
const [conflict, democracy, diversity, pet] = await Promise.all([
  load('conflict-management-and-communication/ConflictManagementAndCommunication'),
  load('democracy-and-human-rights/DemocracyAndHumanRights'),
  load('diversity-and-nation-building/DiversityAndNationBuilding'),
  load('physical-education-task/PhysicalEducationTask'),
]);

// Grade 8 Life Orientation, Term 3.
const lessons = [
  { name: 'Conflict', steps: conflict, file: 'conflict-management-and-communication/ConflictManagementAndCommunication.tsx', bank: '78df394fd3d5e192' },
  { name: 'Democracy', steps: democracy, file: 'democracy-and-human-rights/DemocracyAndHumanRights.tsx', bank: '13502d48d8edadba' },
  { name: 'Diversity', steps: diversity, file: 'diversity-and-nation-building/DiversityAndNationBuilding.tsx', bank: '32a374f5a6716dc1' },
  { name: 'PET', steps: pet, file: 'physical-education-task/PhysicalEducationTask.tsx', bank: '96b63c1d673fcefb' },
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
    const src = readFileSync(new URL(`../../../curriculum/${base}/${l.file}`, import.meta.url), 'utf8');
    const bank = src.slice(src.indexOf('const bank: CapsItem'));
    assert.equal(createHash('sha256').update(bank).digest('hex').slice(0, 16), l.bank);
  });
}

test('numbers shown in the slides come from the helpers', () => {
  const share = shareDays(['Monday', 'Tuesday', 'Wednesday', 'Thursday'], ['Group A', 'Group B']);
  const c = conflict.map((x) => html(x.content)).join(' ');
  assert.ok(c.includes('Monday and Wednesday'));
  assert.ok(c.includes('Tuesday and Thursday'));
  assert.ok(c.includes(`Each group gets ${share[0].days.length} of the 4 days`));
  const d = diversity.map((x) => html(x.content)).join(' ');
  assert.ok(d.includes(`${countUnique(['Food', 'Music', 'Dance', 'Stories'])} different ideas`));
  const b = buildUp(10, 2, 3);
  const p = pet.map((x) => html(x.content)).join(' ');
  assert.ok(p.includes('10, 12, 14'));
  assert.ok(p.includes(`${b.total} minutes`));
});
