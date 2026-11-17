import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { afrikaansFALGrade9 } from './index';
import * as diary from './term2/diary-entry/DiaryEntry';
import * as constitution from './term2/constitution-policy/ConstitutionPolicy';
import * as will from './term3/will-testament/WillTestament';
import * as cv from './term3/cv-covering-letter/CvCoveringLetter';
import * as application from './term4/application-letter/ApplicationLetter';
import * as email from './term4/email/Email';

// Wave A Grade 9 Afrikaans FAL transactional texts: the same lesson standard as lessons.test.ts, plus: registration, clean questions,
// and every Afrikaans phrase shown in a lesson is on the teacher-check list (docs/notes/g9-afrikaans-doubts.md).
const lessons = { 'afr-diary-entry': diary, 'afr-constitution-policy': constitution, 'afr-will-testament': will, 'afr-cv-covering-letter': cv, 'afr-application-letter': application, 'afr-email': email } as const;
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('the new lessons are registered in their term after the existing three, with a stable id each', () => {
  const where: Record<string, number> = { 'afr-diary-entry': 2, 'afr-constitution-policy': 2, 'afr-will-testament': 3, 'afr-cv-covering-letter': 3, 'afr-application-letter': 4, 'afr-email': 4 };
  const ids = (n: number) => afrikaansFALGrade9.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.deepEqual(ids(2).slice(0, 3), ['afr-journalism-media', 'afr-formal-correspondence', 'afr-grammar-reporting']);
  assert.equal(ids(3).length >= 5, true);
  for (const [id, term] of Object.entries(where)) assert.ok(ids(term).includes(id), id);
});

for (const [name, mod] of Object.entries(lessons)) {
  const steps = mod.learnSteps;
  test(`${name}: 4-6 slides, last is "Check yourself" with 3-4 questions; each teaching slide has a rule, worked example and mistake`, () => {
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    const checks = (renderToStaticMarkup(createElement('div', null, steps.at(-1)!.content)).match(/Show the answer/g) ?? []).length;
    assert.ok(checks >= 3 && checks <= 4);
    for (const s of steps.slice(0, -1)) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const part of ['The rule', 'Worked example', 'Common mistake']) assert.ok(html.includes(part), `${s.title}: ${part}`);
      for (const svg of (html.match(/<svg[\s\S]*?<\/svg>/g) ?? []).filter((v) => v.includes('max-w-md'))) {
        assert.ok(/role="img"/.test(svg) && /aria-label="[^"]{20,}"/.test(svg), `${s.title}: picture without aria`);
        assert.ok((svg.match(/<text[^>]*>([^<]*)<\/text>/g) ?? []).filter((t) => !/>(=|↔|→)<\/text>/.test(t)).length <= 6, `${s.title}: too many labels`);
      }
      assert.ok(slideText(s).split(' ').length <= 130, `${s.title}: too long`);
    }
  });
  test(`${name}: 12 clean questions, every answer is in the lesson, answer positions spread`, () => {
    assert.equal(mod.bank.length, 12);
    assert.equal(new Set(mod.bank.map((q) => q.prompt)).size, 12);
    const all = lower(steps.map(slideText).join(' '));
    for (const q of mod.bank) {
      assert.equal(new Set(q.options).size, 4);
      assert.ok(q.options.includes(q.answer));
      assert.ok(all.includes(lower(q.answer.replace(/\.$/, ''))), `answer not in lesson: ${q.answer}`);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: mod.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of mod.bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 6, JSON.stringify(pos));
  });
  test(`${name}: every Afrikaans phrase in the slides is on the teacher-check list`, () => {
    const list = lower(fs.readFileSync('docs/notes/g9-afrikaans-doubts.md', 'utf8'));
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
    }
  });
}

test('the Afrikaans task ids are unique across subjects (they must not collide with the English Grade 9 lessons)', async () => {
  const { TOPIC_NAMES } = await import('../../../components/admin/topicNames.generated');
  assert.equal(TOPIC_NAMES['9|gr9-afr-diary-entry-t2']?.[1], 'Afrikaans FAL');
  for (const t of ['gr9-afr-constitution-policy-t2', 'gr9-afr-will-testament-t3', 'gr9-afr-cv-covering-letter-t3', 'gr9-afr-application-letter-t4', 'gr9-afr-email-t4']) assert.equal(TOPIC_NAMES[`9|${t}`]?.[1], 'Afrikaans FAL', t);
  assert.equal(TOPIC_NAMES['9|gr9-diary-entry-t2']?.[1], 'English HL', 'the English diary task id is still the English lesson');
});
