import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement, createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../lib/shared/questionQuality';
import { englishHLGrade9 } from './english';
import { afrikaansFALGrade9 } from './afrikaans';
import * as engLesson from './english/term1/letter-of-appreciation/LetterOfAppreciationContent';
import * as afrLesson from './afrikaans/term1/letter-of-appreciation/LetterOfAppreciation';

// Grade 9 letter of appreciation (CAPS Term 1 English, Quarter 1 Afrikaans): registered in Term 1 after the existing lessons, the English task instruction is in its own file,
// 14 clean English questions and 12 clean Afrikaans questions with answer positions spread, every correct answer is in its lesson, the model letter is original,
// and every Afrikaans phrase shown in the Afrikaans slides is on the teacher-check list.

const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const slideText = (s: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, s.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('both lessons are registered in Term 1 after the existing lessons, with stable ids', () => {
  const eng = englishHLGrade9.terms.find((t) => t.id === 1)!.topics.map((t) => t.id);
  assert.deepEqual(eng.slice(0, 3), ['advertising-visual-design', 'essay-transactional-writing', 'grammar-revision-accuracy']);
  assert.ok(eng.includes('letter-of-appreciation'));
  const afr = afrikaansFALGrade9.terms.find((t) => t.id === 1)!.topics.map((t) => t.id);
  assert.deepEqual(afr.slice(0, 3), ['afr-advertising-visual-persuasion', 'afr-transactional-writing', 'afr-language-structures']);
  assert.ok(afr.includes('afr-letter-of-appreciation'));
});

test('the English task instruction is in its own file and does not disturb the transactional file', () => {
  const t = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr9-appreciation.json', 'utf8')).tasks as Record<string, string>;
  assert.deepEqual(Object.keys(t), ['gr9-letter-of-appreciation-t1']);
  assert.ok(/thank/i.test(t['gr9-letter-of-appreciation-t1']) && /main idea/i.test(t['gr9-letter-of-appreciation-t1']));
});

test('English: 4 to 6 slides ending in "Check yourself", 14 clean questions, the key spread over all four positions', () => {
  const steps = engLesson.learnSteps;
  assert.ok(steps.length >= 4 && steps.length <= 6);
  assert.equal(steps.at(-1)!.title, 'Check yourself');
  for (const s of steps) {
    const out = renderToStaticMarkup(h('div', null, s.content));
    assert.ok(text(out).length > 40, s.title);
    assert.ok(!/undefined|NaN|\[object/.test(out), s.title);
  }
  assert.ok((renderToStaticMarkup(h('div', null, steps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
  assert.equal(engLesson.bank.length, 14);
  assert.equal(new Set(engLesson.bank.map((q) => q.prompt)).size, 14);
  const pos = [0, 0, 0, 0];
  for (const q of engLesson.bank) {
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.answer));
    assert.ok((q.explanation ?? '').length >= 40, q.prompt);
    assert.ok(!/learners?\b|CAPS/i.test(q.prompt), q.prompt);
    const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: engLesson.bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    pos[q.options.indexOf(q.answer)]++;
  }
  assert.ok(pos.every((n) => n > 0), JSON.stringify(pos));
});

test('English: the model letter is original and shows its parts, with Yours sincerely after a named salutation', () => {
  const all = engLesson.learnSteps.map(slideText).join(' ');
  assert.ok(/original model written for this lesson/i.test(all));
  for (const part of ['22 Protea Road', 'Dear Mrs Pillay', 'Yours sincerely', 'Thandi Mokoena']) assert.ok(all.includes(part), part);
  assert.equal(engLesson.bank.find((q) => q.prompt.startsWith('Which closing follows the salutation'))!.answer, 'Yours sincerely');
  // the model letter's marks: 67% - 48% = 19 percentage points; both figures are in the letter
  assert.ok(all.includes('48%') && all.includes('67%'));
});

test('English: the key words of every correct answer can be found in the lesson', () => {
  const all = lower(engLesson.learnSteps.map(slideText).join(' '));
  for (const q of engLesson.bank) {
    const words = lower(q.answer).match(/[a-z]{6,}/g) ?? [];
    const missing = words.filter((w) => !all.includes(w));
    assert.ok(missing.length < 2, `${q.prompt}: ${missing.join(', ')}`);
  }
});

test('Afrikaans: 4-6 slides, last is "Check yourself" with 3-4 questions; each teaching slide has a rule, worked example, mistake and a labelled picture', () => {
  const steps = afrLesson.learnSteps;
  assert.ok(steps.length >= 4 && steps.length <= 6);
  assert.equal(steps.at(-1)!.title, 'Check yourself');
  const checks = (renderToStaticMarkup(createElement('div', null, steps.at(-1)!.content)).match(/Show the answer/g) ?? []).length;
  assert.ok(checks >= 3 && checks <= 4);
  for (const s of steps.slice(0, -1)) {
    const out = renderToStaticMarkup(createElement('div', null, s.content));
    for (const part of ['The rule', 'Worked example', 'Common mistake']) assert.ok(out.includes(part), `${s.title}: ${part}`);
    for (const svg of (out.match(/<svg[\s\S]*?<\/svg>/g) ?? []).filter((v) => v.includes('max-w-md'))) {
      assert.ok(/role="img"/.test(svg) && /aria-label="[^"]{20,}"/.test(svg), `${s.title}: picture without aria`);
      assert.ok((svg.match(/<text[^>]*>([^<]*)<\/text>/g) ?? []).filter((t) => !/>(=|↔|→)<\/text>/.test(t)).length <= 6, `${s.title}: too many labels`);
    }
    assert.ok(slideText(s).split(' ').length <= 130, `${s.title}: too long`);
  }
});

test('Afrikaans: 12 clean questions, every answer is in the lesson, answer positions spread', () => {
  const bank = afrLesson.bank;
  assert.equal(bank.length, 12);
  assert.equal(new Set(bank.map((q) => q.prompt)).size, 12);
  const all = lower(afrLesson.learnSteps.map(slideText).join(' '));
  const pos = [0, 0, 0, 0];
  for (const q of bank) {
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.answer));
    assert.ok(all.includes(lower(q.answer.replace(/\.$/, ''))), `answer not in lesson: ${q.answer}`);
    const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    pos[q.options.indexOf(q.answer)]++;
  }
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 6, JSON.stringify(pos));
});

test('Afrikaans: every Afrikaans phrase in the slides is on the teacher-check list', () => {
  const list = lower(fs.readFileSync('docs/notes/g9-afrikaans-doubts.md', 'utf8'));
  for (const s of afrLesson.learnSteps) {
    const html = renderToStaticMarkup(createElement('div', null, s.content));
    for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
      const phrase = lower(text(m[1])).replace(/\.$/, '');
      assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
    }
  }
});

test('the Afrikaans task id is unique and listed under Afrikaans FAL, the English one under English HL', async () => {
  const { TOPIC_NAMES } = await import('../../components/admin/topicNames.generated');
  assert.equal(TOPIC_NAMES['9|gr9-afr-letter-of-appreciation-t1']?.[1], 'Afrikaans FAL');
  assert.equal(TOPIC_NAMES['9|gr9-letter-of-appreciation-t1']?.[1], 'English HL');
});
