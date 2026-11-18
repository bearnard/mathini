import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import * as o from './components/diagrams/english/oral789';

// Grade 7 to 9 Afrikaans FAL oral skills (9 lessons x 14 questions): the Afrikaans lesson standard (4 to 6 slides, rule, worked example, common mistake, labelled
// pictures, a "Check yourself" slide), clean questions whose answers are shown in the lesson, registration, every Afrikaans phrase on the teacher-check list,
// and the numbers recomputed here with plain arithmetic, independent of oral789.ts.
stubCss();
type Mod = { learnSteps: { title: string; content: React.ReactNode }[]; bank: { prompt: string; options: string[]; answer: string; explanation?: string }[] };
const L: [string, string, string, number, 7 | 8 | 9][] = [
  ['term1/reading-aloud', 'ReadingAloud', 'afr-reading-aloud', 1, 7], ['term2/listening-strategies', 'ListeningStrategies', 'afr-listening-strategies', 2, 7], ['term3/debate', 'Debate', 'afr-debate', 3, 7],
  ['term1/prepared-speech', 'PreparedSpeech', 'afr-prepared-speech', 1, 8], ['term2/listening-detail', 'ListeningDetail', 'afr-listening-detail', 2, 8], ['term3/interview', 'Interview', 'afr-interview', 3, 8],
  ['term1/speech-techniques', 'SpeechTechniques', 'afr-speech-techniques', 1, 9], ['term2/meeting-orals', 'MeetingOrals', 'afr-meeting-orals', 2, 9], ['term3/debate-panel', 'DebatePanel', 'afr-debate-panel', 3, 9],
];
const mods: Record<string, Mod> = {};
for (const [d, n, , , g] of L) mods[d] = (await import(`./curriculum/grade${g}/afrikaans/${d}/${n}`)) as Mod;
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const slideText = (step: { content: React.ReactNode }) => text(renderToStaticMarkup(createElement('div', null, step.content)));
const lower = (s: string) => s.toLowerCase().replace(/[’‘]/g, "'");
const list = lower(fs.readFileSync('docs/notes/oral-afrikaans-g7-9-doubts.md', 'utf8'));

test('registered in the right terms of Grades 7, 8 and 9, no term empty', () => {
  for (const [, , id, term, g] of L) {
    const afr = { 7: grade7, 8: grade8, 9: grade9 }[g].subjects.find((s) => s.id === 'afr')!;
    assert.equal(afr.terms.find((t) => t.topics.some((p) => p.id === id))?.id, term, id);
    for (const t of afr.terms) assert.ok(t.topics.length > 0);
  }
});

for (const [d] of L) {
  const steps = mods[d].learnSteps;
  test(`${d}: Afrikaans lesson standard, labelled pictures, short slides`, () => {
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    const checks = (renderToStaticMarkup(createElement('div', null, steps.at(-1)!.content)).match(/Show the answer/g) ?? []).length;
    assert.ok(checks >= 3 && checks <= 4);
    for (const s of steps.slice(0, -1)) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const part of ['The rule', 'Worked example', 'Common mistake']) assert.ok(html.includes(part), `${s.title}: ${part}`);
      const svgs = (html.match(/<svg[\s\S]*?<\/svg>/g) ?? []).filter((v) => v.includes('max-w-md'));
      assert.ok(svgs.length >= 1, `${s.title}: needs a picture`);
      for (const svg of svgs) {
        assert.ok(/role="img"/.test(svg) && /aria-label="[^"]{20,}"/.test(svg), `${s.title}: picture without aria`);
        assert.ok((svg.match(/<text[^>]*>([^<]*)<\/text>/g) ?? []).filter((t) => !/>(=|↔|→)<\/text>/.test(t)).length <= 6, `${s.title}: too many labels`);
      }
      assert.ok(slideText(s).split(' ').length <= 130, `${s.title}: too long (${slideText(s).split(' ').length})`);
    }
  });
  test(`${d}: 14 clean questions, every answer is shown in the lesson, answer positions spread`, () => {
    const bank = mods[d].bank;
    assert.equal(bank.length, 14);
    assert.equal(new Set(bank.map((q) => q.prompt)).size, 14);
    const all = lower(steps.map(slideText).join(' '));
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4);
      assert.ok(q.options.includes(q.answer));
      assert.ok(all.includes(lower(q.answer.replace(/\.$/, ''))), `answer not in lesson: ${q.answer}`);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((x) => x !== q).map((x) => x.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 6, JSON.stringify(pos));
  });
  test(`${d}: every Afrikaans phrase in the slides is on the teacher-check list`, () => {
    for (const s of steps) {
      const html = renderToStaticMarkup(createElement('div', null, s.content));
      for (const m of html.matchAll(/<strong class="font-bold text-indigo-700">([\s\S]*?)<\/strong>/g)) {
        const phrase = lower(text(m[1])).replace(/\.$/, '');
        assert.ok(list.includes(phrase), `not on the teacher-check list: ${phrase}`);
      }
    }
  });
}

test('INDEPENDENT: reading, listening, debate, speech, interview, meeting, vote and panel sums', () => {
  const a = (d: string, start: string): string => {
    const hit = mods[d].bank.filter((q) => q.prompt.startsWith(start));
    assert.equal(hit.length, 1, start);
    return hit[0].answer;
  };
  assert.equal(240 / 120, 2); assert.equal(360 / 120, 3); assert.equal(300 / 150, 2);
  assert.equal(o.readMinutes(), 2); assert.equal(o.listenMinutes(), 2); assert.equal(o.detailMinutes(), 3);
  assert.equal(3 * 2, 6); assert.equal(6 + 6 + 1 + 1, 14); assert.equal(o.sideMinutes(), 6); assert.equal(o.debateMinutes(), 14);
  assert.equal(3 * 120, 360); assert.equal(4 * 120, 480); assert.equal(o.speech8Words(), 360);
  assert.equal(10 * 1 + 2, 12); assert.equal(o.interviewMinutes(), 12);
  assert.equal(4 * 130, 520); assert.equal(520 / 5, 104); assert.equal(o.speech9Words(), 520); assert.equal(o.speech9WordsPerCard(), 104);
  assert.equal(6 * 5, 30); assert.equal(o.meetingMinutes(), 30);
  assert.equal(12 + 7, 19); assert.equal(12 + 7 + 3, 22); assert.ok(12 > 7); assert.equal(o.votesCast(), 19); assert.equal(o.present(), 22);
  assert.equal(4 * 3, 12); assert.equal(12 + 2 + 10, 24); assert.equal(o.panelMinutes(), 24);
  assert.equal(a('term1/reading-aloud', 'Hoeveel minute neem 240'), '2 minute');
  assert.equal(a('term1/reading-aloud', 'Hoeveel minute neem 360'), '3 minute');
  assert.equal(a('term2/listening-strategies', 'Hoeveel minute neem 300'), '2 minute');
  assert.equal(a('term3/debate', 'Hoe lank praat een span'), '6 minute');
  assert.equal(a('term3/debate', 'Hoe lank is \'n debat'), '14 minute');
  assert.equal(a('term1/prepared-speech', 'Hoeveel woorde is 3 minute'), '360 woorde');
  assert.equal(a('term1/prepared-speech', 'Hoeveel woorde is 4 minute'), '480 woorde');
  assert.equal(a('term2/listening-detail', 'Hoeveel minute neem 360'), '3 minute');
  assert.equal(a('term3/interview', 'Hoe lank is \'n onderhoud'), '12 minute');
  assert.equal(a('term1/speech-techniques', 'Hoeveel woorde is 4 minute'), '520 woorde');
  assert.equal(a('term1/speech-techniques', 'Hoeveel woorde kom van elk'), '104 woorde');
  assert.equal(a('term2/meeting-orals', 'Hoe lank neem 6 punte'), '30 minute');
  assert.equal(a('term2/meeting-orals', '12 stem vir, 7 teen en 3 weerhou. Hoeveel het'), '19');
  assert.equal(a('term2/meeting-orals', '12 stem vir, 7 teen en 3 weerhou. Hoeveel lede'), '22');
  assert.equal(a('term3/debate-panel', 'Hoe lank praat 4 sprekers'), '12 minute');
  assert.equal(a('term3/debate-panel', 'Hoe lank is \'n paneel'), '24 minute');
});
