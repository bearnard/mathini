import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { afrikaansFALGrade8 } from './index';
import * as letter from './term1/friendly-letter/FriendlyLetter';
import * as report from './term1/investigative-report/InvestigativeReport';
import * as instructions from './term2/instructions-directions/InstructionsDirections';
import * as dialogue from './term2/dialogue-interview/DialogueInterview';
import * as press from './term3/letter-to-the-press/LetterToThePress';
import * as article from './term4/newspaper-article/NewspaperArticle';
import * as diary from './term4/diary-entry/DiaryEntry';
import * as newsReport from './term4/news-report/NewsReport';

// Wave A Grade 8 Afrikaans FAL transactional texts: the same lesson standard as lessons.test.ts, plus: registration, clean questions,
// and every Afrikaans phrase shown in a lesson is on the teacher-check list (docs/notes/g8-afrikaans-doubts.md).
const lessons = { 'afr-friendly-letter': letter, 'afr-investigative-report': report, 'afr-instructions-directions': instructions, 'afr-dialogue-interview': dialogue, 'afr-letter-to-the-press': press, 'afr-newspaper-article': article, 'afr-diary-entry': diary, 'afr-news-report': newsReport };
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('the new lessons are registered in their term after the existing three, with a stable id each', () => {
  const where: Record<string, number> = { 'afr-friendly-letter': 1, 'afr-investigative-report': 1, 'afr-instructions-directions': 2, 'afr-dialogue-interview': 2, 'afr-letter-to-the-press': 3, 'afr-newspaper-article': 4, 'afr-diary-entry': 4, 'afr-news-report': 4 };
  const ids = (n: number) => afrikaansFALGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  for (const [id, term] of Object.entries(where)) assert.ok(ids(term).includes(id), id);
  assert.equal(ids(1).length >= 5, true);
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
    const list = lower(fs.readFileSync('docs/notes/g8-afrikaans-doubts.md', 'utf8'));
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
    }
  });
}

test('the Afrikaans task ids are unique across subjects (they must not collide with the English Grade 8 lessons)', async () => {
  const { TOPIC_NAMES } = await import('../../../components/admin/topicNames.generated');
  for (const t of ['gr8-afr-friendly-letter-t1', 'gr8-afr-investigative-report-t1', 'gr8-afr-instructions-directions-t2', 'gr8-afr-dialogue-interview-t2', 'gr8-afr-letter-to-the-press-t3', 'gr8-afr-newspaper-article-t4', 'gr8-afr-diary-entry-t4', 'gr8-afr-news-report-t4']) assert.equal(TOPIC_NAMES[`8|${t}`]?.[1], 'Afrikaans FAL', t);
  assert.equal(TOPIC_NAMES['8|gr8-friendly-letter-t1']?.[1], 'English HL', 'the English friendly letter task id is still the English lesson');
});
