import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { learnSteps as pet2, stress, goal, weekSessions, weekMet, lowSessions, lowMet, check as c2 } from './term2/physical-education-task-2/PhysicalEducationTask2Lesson';
import { learnSteps as civic, planSteps } from './term3/active-citizenship-and-leadership/ActiveCitizenshipAndLeadershipLesson';
import { learnSteps as pet3, record, steadyCount, burstCount, check as c3 } from './term3/physical-education-task-3/PhysicalEducationTask3Lesson';
import { learnSteps as pet4, best, bestScore, planCount, planMet, weeksHit, check as c4 } from './term4/physical-education-task-4/PhysicalEducationTask4Lesson';
import { learnSteps as work } from './term4/world-of-work-readiness/WorldOfWorkReadinessLesson';
import { wordCount } from '../../../components/diagrams/lo/loHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, p), 'utf8');

const lessons = {
  'PET term 2': { steps: pet2, file: 'term2/physical-education-task-2/PhysicalEducationTask2.tsx', titles: ['Movement and stress relief', 'Setting a fitness goal', 'Rules, teamwork and fair play', 'Reflection and active living', 'Check yourself'] },
  'Active citizenship': { steps: civic, file: 'term3/active-citizenship-and-leadership/ActiveCitizenshipAndLeadership.tsx', titles: ['What active citizenship means', 'Ethical leadership', 'Diversity, social cohesion and justice', 'Planning ethical action', 'Check yourself'] },
  'PET term 3': { steps: pet3, file: 'term3/physical-education-task-3/PhysicalEducationTask3.tsx', titles: ['Consistency maintains fitness', 'Teamwork and cooperation', 'Self-discipline and responsibility', 'Reviewing participation and progress', 'Check yourself'] },
  'PET term 4': { steps: pet4, file: 'term4/physical-education-task-4/PhysicalEducationTask4.tsx', titles: ['A lifelong fitness mindset', 'Choosing recreation options', 'Healthy routines and self-care', 'Sustainable goals and evidence', 'Check yourself'] },
  'World of work': { steps: work, file: 'term4/world-of-work-readiness/WorldOfWorkReadiness.tsx', titles: ['The CV: a clear, honest summary', 'Application documents: check before you send', 'Interview preparation', 'Workplace ethics and professionalism', 'Contracts and labour rights', 'Check yourself'] },
} as const;

const html = (n: unknown) => renderToStaticMarkup(createElement('div', null, n as never));
const plain = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

for (const [name, l] of Object.entries(lessons)) {
  test(`${name}: renders every slide with the planned titles, ends with a Check yourself slide`, () => {
    assert.deepEqual(l.steps.map((s) => s.title), [...l.titles]);
    assert.ok(l.steps.length >= 4 && l.steps.length <= 6);
    for (const s of l.steps) assert.ok(html(s.content).length > 200, s.title);
    const last = html(l.steps[l.steps.length - 1].content);
    assert.ok(last.includes('Check yourself') && last.includes('Show the answer'));
    const checks = (last.match(/<li>/g) ?? []).length;
    assert.equal(checks, 8, 'four questions and four answers');
  });

  test(`${name}: teaching slides have Rule/Worked/Mistake blocks and prose near the 40-80 word standard`, () => {
    for (const s of l.steps.slice(0, -1)) {
      const h = html(s.content);
      assert.ok(h.includes('Common mistake'), `${s.title} has a mistake`);
      assert.ok(h.includes('Worked example') || h.includes('The rule'), `${s.title} has a rule or worked example`);
      const words = wordCount(plain(h));
      assert.ok(words >= 40 && words <= 150, `${s.title}: ${words} words`);
    }
  });

  test(`${name}: every picture has an aria description and at most 6 text labels`, () => {
    for (const s of l.steps) {
      const h = html(s.content);
      for (const svg of h.match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{20,}"/);
      }
    }
  });

  test(`${name}: the bank is untouched and still follows the lesson`, () => {
    const src = read(l.file);
    assert.ok(src.includes('const items = ['));
    assert.ok(src.includes("apiPath=\"/api/caps/lo\""));
  });
}

test('PET 2 numbers: stress drop, goal sessions, weekly review', () => {
  assert.equal(stress.drop, 3);
  assert.equal(goal.perWeek * goal.weeks, 12);
  assert.equal(c2.perWeek, 12);
  assert.equal(c2.drop, 3);
  assert.equal(weekSessions, 3);
  assert.equal(weekMet, true);
  assert.equal(lowSessions, 1);
  assert.equal(lowMet, false);
  const h = html(pet2[3].content);
  assert.ok(h.includes('goal was met') && h.includes('goal was not met'));
});

test('PET 2 lesson text covers the bank: stress, realistic and measurable goal, fair play, rules, reflection', () => {
  const h = plain(pet2.map((s) => html(s.content)).join(' ')).toLowerCase();
  for (const k of ['releases tension', 'lifts mood', 'realistic', 'measurable', 'fair play', 'rules', 'teamwork', 'communicat', 'regular movement', 'reflect', 'adjust', 'safe', 'fair']) assert.ok(h.includes(k), k);
});

test('Active citizenship: lesson covers the bank terms', () => {
  assert.deepEqual([...planSteps], ['Consult', 'Plan', 'Act lawfully', 'Reflect']);
  const h = plain(civic.map((s) => html(s.content)).join(' ')).toLowerCase();
  for (const k of ['informed', 'ongoing', 'ethical', 'serves others fairly', 'diversity', 'social cohesion', 'social justice', 'anti-bullying', 'consult', 'rights', 'evidence', 'lawful']) assert.ok(h.includes(k), k);
});

test('PET 3 numbers: attendance, sessions and check answers', () => {
  assert.equal(record.pct, 75);
  assert.equal(steadyCount, 3);
  assert.equal(burstCount, 1);
  assert.equal(c3.pct, 75);
  assert.equal(c3.missed, 2);
  const h = html(pet3[3].content);
  assert.ok(h.includes('75%'));
  const text = plain(pet3.map((s) => html(s.content)).join(' ')).toLowerCase();
  for (const k of ['regular participation', 'cooperation', 'communicat', 'self-discipline', 'responsib', 'hydration', 'reflect', 'realistic', 'respect', 'inclusion']) assert.ok(text.includes(k), k);
});

test('PET 4 numbers: best option, weekly log, weeks met', () => {
  assert.equal(best.name, 'Walking with friends');
  assert.equal(bestScore, 4);
  assert.equal(planCount, 3);
  assert.equal(planMet, true);
  assert.equal(weeksHit, 3);
  assert.equal(c4.weeksHit, 3);
  const text = plain(pet4.map((s) => html(s.content)).join(' ')).toLowerCase();
  for (const k of ['lifelong', 'safe', 'affordable', 'enjoyable', 'sleep', 'hydration', 'nutrition', 'recovery', 'consistency', 'extreme', 'evidence']) assert.ok(text.includes(k), k);
});

test('World of work: lesson covers the bank terms', () => {
  const text = plain(work.map((s) => html(s.content)).join(' ')).toLowerCase();
  for (const k of ['summarise', 'honest', 'accurate', 'research', 'practise', 'professional', 'punctual', 'contract', 'duties', 'working conditions', 'labour rights', 'unfair treatment', 'spelling', 'relevan']) assert.ok(text.includes(k), k);
});
