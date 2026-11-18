import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { afrikaansFALGrade7 } from './index';
import * as letter from './term1/informal-letter/InformalLetter';
import * as poem from './term1/poem-dialogue/PoemDialogue';
import * as instructions from './term2/instructions-directions/InstructionsDirections';
import * as advert from './term2/advert-poster/AdvertPoster';
import * as forms from './term3/forms-questionnaire/FormsQuestionnaire';
import * as notice from './term3/notice-agenda-minutes/NoticeAgendaMinutes';
import * as article from './term3/newspaper-article-interview/NewspaperArticleInterview';
import * as diary from './term4/diary-email-flyer/DiaryEmailFlyer';

// Wave A Grade 7 Afrikaans FAL text types: the same lesson standard as the Grade 8 and Grade 9 Afrikaans lessons, plus: registration, clean questions,
// and every Afrikaans phrase shown in a lesson is on the teacher-check list (docs/notes/g7-afrikaans-doubts.md).
const lessons = { 'afr-informal-letter': letter, 'afr-poem-dialogue': poem, 'afr-instructions-directions': instructions, 'afr-advert-poster': advert, 'afr-forms-questionnaire': forms, 'afr-notice-agenda-minutes': notice, 'afr-newspaper-article-interview': article, 'afr-diary-email-flyer': diary } as const;
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('the new lessons are registered in their term after the existing three, with a stable id each', () => {
  const where: Record<string, number> = { 'afr-informal-letter': 1, 'afr-poem-dialogue': 1, 'afr-instructions-directions': 2, 'afr-advert-poster': 2, 'afr-forms-questionnaire': 3, 'afr-notice-agenda-minutes': 3, 'afr-newspaper-article-interview': 3, 'afr-diary-email-flyer': 4 };
  const ids = (n: number) => afrikaansFALGrade7.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.deepEqual(ids(1).slice(0, 3), ['afr-short-stories-reviews', 'afr-extended-responses', 'afr-word-sentence-grammar']);
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
      assert.ok(!q.prompt.includes('\\') && !q.options.some((o) => o.includes('\\')), q.prompt);
      assert.ok(all.includes(lower(q.answer.replace(/\.$/, ''))), `answer not in lesson: ${q.answer}`);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: mod.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of mod.bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 6, JSON.stringify(pos));
  });
  test(`${name}: every Afrikaans phrase in the slides is on the teacher-check list`, () => {
    const list = lower(fs.readFileSync('docs/notes/g7-afrikaans-doubts.md', 'utf8'));
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
    }
  });
}

test('the Afrikaans task ids are unique and listed under Afrikaans FAL', async () => {
  const { TOPIC_NAMES } = await import('../../../components/admin/topicNames.generated');
  for (const t of ['gr7-afr-informal-letter-t1', 'gr7-afr-poem-dialogue-t1', 'gr7-afr-instructions-directions-t2', 'gr7-afr-advert-poster-t2', 'gr7-afr-forms-questionnaire-t3', 'gr7-afr-notice-agenda-minutes-t3', 'gr7-afr-newspaper-article-interview-t3', 'gr7-afr-diary-email-flyer-t4']) assert.equal(TOPIC_NAMES[`7|${t}`]?.[1], 'Afrikaans FAL', t);
  assert.equal(TOPIC_NAMES['7|gr7-newspaper-article-t3']?.[1], 'English HL', 'the English G7 newspaper task id is still the English lesson');
});
