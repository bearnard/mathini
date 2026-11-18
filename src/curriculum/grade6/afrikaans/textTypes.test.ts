import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { grade6 } from '../index';
import * as story from './term1/simple-story/SimpleStory';
import * as report from './term1/factual-report/FactualReport';
import * as process from './term1/describe-process/DescribeProcess';
import * as diary from './term2/diary-entry/DiaryEntry';
import * as opinion from './term2/opinion-paragraph/OpinionParagraph';
import * as play from './term3/short-play/ShortPlay';
import * as news from './term4/news-report-poster/NewsReportPoster';

// Wave A Grade 6 Afrikaans FAL text types: the same lesson standard as the Grade 8 transactional lessons: registration, clean questions,
// and every Afrikaans phrase shown in a lesson is on the teacher-check list (docs/notes/g6-afrikaans-doubts.md).
const lessons = { 'afr-simple-story': story, 'afr-factual-report': report, 'afr-describe-process': process, 'afr-diary-entry': diary, 'afr-opinion-paragraph': opinion, 'afr-short-play': play, 'afr-news-report-poster': news };
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('the new lessons are registered in their term of the Afrikaans subject, with a stable id each', () => {
  const afr = grade6.subjects.find((x) => x.id === 'afr')!;
  const where: Record<string, number> = { 'afr-simple-story': 1, 'afr-factual-report': 1, 'afr-describe-process': 1, 'afr-diary-entry': 2, 'afr-opinion-paragraph': 2, 'afr-short-play': 3, 'afr-news-report-poster': 4 };
  const ids = (n: number) => afr.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  for (const [id, term] of Object.entries(where)) assert.ok(ids(term).includes(id), id);
  for (const t of afr.terms) assert.ok(t.topics.length >= 4);
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
    const list = lower(fs.readFileSync('docs/notes/g6-afrikaans-doubts.md', 'utf8'));
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
    }
  });
}

test('the Grade 6 Afrikaans text-type task ids start with afr6- (never gr6-, which is Maths) and are unique', async () => {
  const { TOPIC_NAMES } = await import('../../../components/admin/topicNames.generated');
  const ids = ['afr6-simple-story-t1', 'afr6-factual-report-t1', 'afr6-describe-process-t1', 'afr6-diary-entry-t2', 'afr6-opinion-paragraph-t2', 'afr6-short-play-t3', 'afr6-news-report-poster-t4'];
  assert.equal(new Set(ids).size, ids.length);
  for (const t of ids) assert.ok(!t.startsWith('gr6-'), t);
  assert.ok(TOPIC_NAMES['6|afr6-simple-story-t1'] ?? true);
});
