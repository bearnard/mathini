import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { afrikaansFALGrade8 } from './index';
import * as l0 from './term2/imagery-sound/ImagerySound';
import * as l1 from './term3/structure-rhyme/StructureRhyme';
import * as l2 from './term4/mood-tone-questions/MoodToneQuestions';

// Grade 8 Afrikaans FAL poetry (Wave A): the house lesson standard, plus: registration, clean questions, every poem is original and labelled,
// and every Afrikaans phrase shown in a lesson and every poem line is on the teacher-check list (docs/notes/g8-afrikaans-poetry-doubts.md).
const lessons = { 'afr-imagery-sound': l0, 'afr-structure-rhyme': l1, 'afr-mood-tone-questions': l2 } as const;
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");

test('the new lessons are registered in their terms with a task id each', async () => {
  const where: Record<string, number> = { 'afr-imagery-sound': 2, 'afr-structure-rhyme': 3, 'afr-mood-tone-questions': 4 };
  const ids = (n: number) => afrikaansFALGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  for (const [id, term] of Object.entries(where)) assert.ok(ids(term).includes(id), id);
  const { TOPIC_NAMES } = await import('../../../components/admin/topicNames.generated');
  for (const t of ['gr8-afr-imagery-sound-t2', 'gr8-afr-structure-rhyme-t3', 'gr8-afr-mood-tone-questions-t4']) assert.equal(TOPIC_NAMES[`8|${t}`]?.[1], 'Afrikaans FAL', t);
});

for (const [name, mod] of Object.entries(lessons)) {
  const steps = mod.learnSteps;
  test(`${name}: 4 slides, last is "Check yourself" with 3-4 questions; every teaching slide has a rule, worked example, mistake and a labelled picture`, () => {
    assert.equal(steps.length, 4);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    const checks = (renderToStaticMarkup(createElement('div', null, steps.at(-1)!.content)).match(/Show the answer/g) ?? []).length;
    assert.ok(checks >= 3 && checks <= 4);
    for (const s of steps.slice(0, -1)) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const part of ['The rule', 'Worked example', 'Common mistake']) assert.ok(html.includes(part), `${s.title}: ${part}`);
      const pics = (html.match(/<svg[^>]*role="img"[^>]*>/g) ?? []);
      assert.ok(pics.length >= 1 && pics.every((p) => /aria-label="[^"]{20,}"/.test(p)), `${s.title}: picture aria`);
      for (const svg of (html.match(/<svg[\s\S]*?<\/svg>/g) ?? []).filter((v) => v.includes('max-w-md'))) assert.ok((svg.match(/<text[^>]*>([^<]*)<\/text>/g) ?? []).filter((t) => !/>(=|↔|→)<\/text>/.test(t)).length <= 6, `${s.title}: too many labels`);
      assert.ok(text(html.replace(/<figure[\s\S]*?<\/figure>/g, ' ')).split(' ').length <= 130, `${s.title}: too long (the poem box is not counted)`);
      for (const f of html.match(/<figure[\s\S]*?<\/figure>/g) ?? []) assert.match(f, /Oorspronklike gedig, vir hierdie les geskryf/, 'poem is original and labelled');
    }
  });
  test(`${name}: 12 clean questions, answer positions spread, no backslash`, () => {
    assert.equal(mod.bank.length, 12);
    assert.equal(new Set(mod.bank.map((q) => q.prompt)).size, 12);
    for (const q of mod.bank) {
      assert.equal(new Set(q.options).size, 4);
      assert.ok(q.options.includes(q.answer));
      assert.ok(!q.prompt.includes('\\') && !q.options.some((o) => o.includes('\\')));
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: mod.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of mod.bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 6, JSON.stringify(pos));
  });
  test(`${name}: every Afrikaans phrase and every poem line is on the teacher-check list`, () => {
    const list = lower(fs.readFileSync('docs/notes/g8-afrikaans-poetry-doubts.md', 'utf8'));
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
      for (const f of html.match(/<figure[\s\S]*?<\/figure>/g) ?? []) {
        for (const line of f.match(/<span>[^<]*<\/span>/g) ?? []) assert.ok(list.includes(lower(text(line)).replace(/&quot;/g, '"')), `poem line not on the list: ${text(line)}`);
      }
    }
  });
}
