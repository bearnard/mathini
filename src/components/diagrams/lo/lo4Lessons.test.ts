import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { PASS_SCENE, byDeadline, gain, openTeammate, percentDone } from './lo4Helpers';
import { planSegments, weekPlan } from './pswHelpers';

// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});
const BASE = 'term1/';
const load = async (p: string) => (await import(`../../../curriculum/grade8/life-orientation/${BASE}${p}`)).learnSteps as import('../../CapsSubjectTopic').LearnStep[];

// Grade 8 Life Orientation, Term 1.
const lessons = [
  { name: 'Development of the self', path: 'development-of-the-self-in-society/DevelopmentOfTheSelfInSociety', bank: '4688576d39f8cf2c' },
  { name: 'Relationships and emotional wellbeing', path: 'relationships-and-emotional-wellbeing/RelationshipsAndEmotionalWellbeing', bank: 'b10d6d2d30969a15' },
  { name: 'Study skills', path: 'study-skills-and-personal-organisation/StudySkillsAndPersonalOrganisation', bank: 'f12e30fa5c2c62d3' },
  { name: 'Physical Education Task', path: 'physical-education-task/PhysicalEducationTask', bank: 'ad2c5374f0492232' },
];
const steps = await Promise.all(lessons.map((l) => load(l.path)));

const html = (n: React.ReactNode) => renderToStaticMarkup(createElement('div', null, n));
const words = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;
const allText = (i: number) => steps[i].map((s) => html(s.content)).join(' ');

lessons.forEach((l, li) => {
  const st = steps[li];
  test(`${l.name}: 4 to 6 slides, one idea each, ending with Check yourself`, () => {
    assert.ok(st.length >= 4 && st.length <= 6, `${st.length} slides`);
    assert.equal(st[st.length - 1].title, 'Check yourself');
    for (const s of st.slice(0, -1)) {
      const h = html(s.content);
      assert.ok(h.includes('The rule'), `${s.title}: Rule`);
      assert.ok(h.includes('Worked example'), `${s.title}: Worked`);
      assert.ok(h.includes('Common mistake'), `${s.title}: Mistake`);
      const w = words(h);
      assert.ok(w >= 40 && w <= 170, `${s.title}: ${w} words`);
    }
    const n = (html(st[st.length - 1].content).match(/Show the answer/g) ?? []).length;
    assert.ok(n >= 3 && n <= 4, `${n} checks`);
  });

  test(`${l.name}: every picture has an aria description and at most twelve text nodes`, () => {
    for (const s of st) {
      for (const svg of html(s.content).match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 12);
      }
    }
  });

  test(`${l.name}: the question bank is byte-identical to main`, () => {
    const src = readFileSync(new URL(`../../../curriculum/grade8/life-orientation/${BASE}${l.path}.tsx`, import.meta.url), 'utf8');
    assert.equal(createHash('sha256').update(src.slice(src.indexOf('const bank: CapsItem'))).digest('hex').slice(0, 16), l.bank);
  });
});

test('Development of the self: the numbers shown come from the helpers', () => {
  const h = allText(0);
  assert.equal(gain(4, 7), 3);
  assert.ok(h.includes('7 − 4 = 3 marks'));
  assert.equal(gain(55, 65), 10);
  assert.ok(h.includes('from 55% to 65%'));
  assert.ok(h.includes('a rise of 10 percentage points'));
});

test('Study skills: the afternoon plan, deadline order and weekly review match the helpers', () => {
  const h = allText(2);
  assert.equal(planSegments([{ label: 'a', minutes: 40 }, { label: 'b', minutes: 10 }, { label: 'c', minutes: 30 }]).total, 80);
  assert.ok(h.includes('80 minutes, or 1 h 20 min'));
  const order = byDeadline([{ name: 'Read a chapter', daysLeft: 7 }, { name: 'Maths worksheet', daysLeft: 1 }, { name: 'History project', daysLeft: 4 }]).map((t) => t.name);
  assert.deepEqual(order, ['Maths worksheet', 'History project', 'Read a chapter']);
  assert.ok(h.indexOf('Maths worksheet: due in 1 day') < h.indexOf('History project: due in 4 days'));
  assert.ok(h.indexOf('History project: due in 4 days') < h.indexOf('Read a chapter: due in 7 days'));
  assert.equal(percentDone(3, 5), 60);
  assert.equal(percentDone(5, 5), 100);
  assert.ok(h.includes('3 of 5 goals = 60%'));
  assert.ok(h.includes('5 of 5 = 100%'));
});

test('Physical Education: lesson length, fitness week and the open teammate match the helpers', () => {
  const h = allText(3);
  assert.equal(planSegments([10, 20, 20, 10].map((minutes) => ({ label: 'x', minutes }))).total, 60);
  assert.ok(h.includes('A 60 minute PE lesson'));
  assert.equal(weekPlan([30, 0, 30, 0, 30]).total, 90);
  assert.ok(h.includes('3 × 30 = 90 minutes'));
  assert.equal(openTeammate([...PASS_SCENE.mates], [...PASS_SCENE.defenders]), 1);
});
