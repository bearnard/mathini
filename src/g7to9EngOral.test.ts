import test from 'node:test';
import assert from 'node:assert/strict';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade7 } from './curriculum/grade7';
import { grade8 } from './curriculum/grade8';
import { grade9 } from './curriculum/grade9';
import * as o from './components/diagrams/english/oral789';

// Grade 7 to 9 English HL oral skills (9 lessons x 14 questions): shape, question quality, registration, and every printed number recomputed here
// with plain arithmetic, independent of oral789.ts. No marks, no recordings, general criteria only.
stubCss();
type Mod = { learnSteps: Parameters<typeof renderSlides>[0]; bank: { prompt: string; options: string[]; answer: string; explanation?: string }[] };
const L: [string, string, string, number, 7 | 8 | 9, string][] = [
  ['term1/reading-aloud', 'ReadingAloud', 'gr7-reading-aloud-t1', 1, 7, 'Reading Aloud'],
  ['term2/listening-strategies', 'ListeningStrategies', 'gr7-listening-strategies-t2', 2, 7, 'Listening Strategies'],
  ['term3/debate-skills', 'DebateSkills', 'gr7-debate-skills-t3', 3, 7, 'Debate Skills'],
  ['term1/prepared-speech', 'PreparedSpeech', 'gr8-prepared-speech-t1', 1, 8, 'Prepared Speech'],
  ['term2/listening-detail-viewpoint', 'ListeningDetailViewpoint', 'gr8-listening-detail-viewpoint-t2', 2, 8, 'Listening for Detail'],
  ['term3/interview-skills', 'InterviewSkills', 'gr8-interview-skills-t3', 3, 8, 'Interview Skills'],
  ['term1/prepared-speech-techniques', 'PreparedSpeechTechniques', 'gr9-prepared-speech-techniques-t1', 1, 9, 'Prepared Speech and'],
  ['term2/meeting-oral-tasks', 'MeetingOralTasks', 'gr9-meeting-oral-tasks-t2', 2, 9, 'Meeting Oral'],
  ['term3/debate-panel-discussion', 'DebatePanelDiscussion', 'gr9-debate-panel-discussion-t3', 3, 9, 'Debate and Panel'],
];
const mods: Record<string, Mod> = {};
for (const [d, n, , , g] of L) mods[d] = (await import(`./curriculum/grade${g}/english/${d}/${n}`)) as Mod;
const text = (d: string) => renderSlides(mods[d].learnSteps).map((s) => s.text).join(' | ');
const ans = (d: string, start: string): string => {
  const hit = mods[d].bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, start);
  return hit[0].answer;
};

for (const [d] of L) {
  test(`${d}: standard shape, 14 valid questions, no marks or recordings`, () => {
    const sl = renderSlides(mods[d].learnSteps);
    assertLessonShape(sl);
    for (const s of sl) assert.equal(s.labelled, s.pictures, `${d} / ${s.title}`);
    const bank = mods[d].bank;
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(q.options.length, 4); assert.equal(new Set(q.options).size, 4); assert.ok(q.options.includes(q.answer));
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((x) => x !== q).map((x) => x.prompt) });
      assert.deepEqual(res.reasons.filter((r) => r.severity === 'reject').map((r) => `${r.code}: ${r.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    const t = text(d);
    assert.ok(!/\bNaN\b|undefined|\[object|\{o\./.test(t), 'no unevaluated expressions');
    assert.ok(!/\b\d+ marks\b|\bout of \d+\b/i.test(t), 'no invented marks');
  });
}

test('registered in the right terms of Grades 7, 8 and 9, no term empty', () => {
  for (const [, , id, term, g] of L) {
    const gr = { 7: grade7, 8: grade8, 9: grade9 }[g];
    const eng = gr.subjects.find((s) => s.id === 'eng')!;
    assert.equal(eng.terms.find((t) => t.topics.some((p) => p.id === id))?.id, term, id);
    for (const t of eng.terms) assert.ok(t.topics.length > 0);
  }
});

test('INDEPENDENT: reading, listening, debate, speech, interview, meeting, vote and panel sums', () => {
  assert.equal(240 / 120, 2); assert.equal(o.readMinutes(), 2);
  assert.equal(360 / 120, 3); assert.equal(300 / 150, 2); assert.equal(450 / 150, 3); assert.equal(o.listenMinutes(), 2);
  assert.equal(3 * 2, 6); assert.equal(o.sideMinutes(), 6);
  assert.equal(6 + 6 + 1 + 1, 14); assert.equal(o.debateMinutes(), 14);
  assert.equal(3 * 120, 360); assert.equal(o.speech8Words(), 360);
  assert.equal(360 - 45 - 45, 270); assert.equal(o.speech8BodyWords(), 270);
  assert.equal(4 * 120, 480);
  assert.equal(10 * 1 + 2, 12); assert.equal(o.interviewMinutes(), 12); assert.equal(8 * 2, 16);
  assert.equal(480 / 120, 4); assert.equal(o.detailMinutes(), 3);
  assert.equal(4 * 130, 520); assert.equal(o.speech9Words(), 520); assert.equal(3 * 130, 390);
  assert.equal(520 / 5, 104); assert.equal(o.speech9WordsPerCard(), 104);
  assert.equal(6 * 5, 30); assert.equal(o.meetingMinutes(), 30); assert.equal(4 * 10, 40);
  assert.equal(12 + 7, 19); assert.equal(12 + 7 + 3, 22); assert.ok(12 > 7);
  assert.equal(o.votesCast(), 19); assert.equal(o.present(), 22); assert.ok(o.carried());
  assert.equal(4 * 3, 12); assert.equal(12 + 2 + 10, 24); assert.equal(o.panelMinutes(), 24); assert.equal(3 * 4, 12);
  assert.throws(() => o.minutesFor(250, 120));
  const r = 'term1/reading-aloud', l = 'term2/listening-strategies', db = 'term3/debate-skills';
  assert.equal(ans(r, 'You read 120 words a minute. How many minutes does a 240'), '2 minutes');
  assert.equal(ans(r, 'A passage of 360 words'), '3 minutes');
  assert.equal(ans(l, 'A passage of 300 words'), '2 minutes');
  assert.equal(ans(l, 'A passage of 450 words'), '3 minutes');
  assert.equal(ans(db, 'Each team has 3 speakers'), '6 minutes');
  assert.equal(ans(db, 'Two teams speak 6 minutes'), '14 minutes');
  const s8 = 'term1/prepared-speech', d8 = 'term2/listening-detail-viewpoint', i8 = 'term3/interview-skills';
  assert.equal(ans(s8, 'A speech lasts 3 minutes'), '360 words');
  assert.equal(ans(s8, 'The opening has 45 words'), '270 words');
  assert.equal(ans(s8, 'A 4-minute speech'), '480 words');
  assert.equal(ans(d8, 'A passage has 360 words'), '3 minutes');
  assert.equal(ans(d8, 'A passage has 480 words'), '4 minutes');
  assert.equal(ans(i8, 'An interview has 10 questions of 1 minute each. How long do'), '10 minutes');
  assert.equal(ans(i8, 'An interview has 10 questions of 1 minute each and a 2-minute'), '12 minutes');
  assert.equal(ans(i8, 'An interview has 8 questions'), '16 minutes');
  const s9 = 'term1/prepared-speech-techniques', m9 = 'term2/meeting-oral-tasks', p9 = 'term3/debate-panel-discussion';
  assert.equal(ans(s9, 'A 4-minute speech'), '520 words');
  assert.equal(ans(s9, 'A 3-minute speech'), '390 words');
  assert.equal(ans(s9, 'A 520-word speech'), '104 words');
  assert.equal(ans(m9, 'An agenda has 6 items'), '30 minutes');
  assert.equal(ans(m9, 'An agenda has 4 items'), '40 minutes');
  assert.equal(ans(m9, '12 vote for, 7 vote against and 3 abstain. How many votes'), '19');
  assert.equal(ans(m9, '12 vote for, 7 vote against and 3 abstain. How many members'), '22');
  assert.equal(ans(p9, 'Four panellists'), '12 minutes');
  assert.equal(ans(p9, 'The speakers talk for 12 minutes'), '24 minutes');
  assert.equal(ans(p9, 'Three panellists speak'), '15 minutes'); assert.equal(3 * 5, 15);
  for (const [d, s] of [[r, '240'], [l, '150'], [db, '14'], [s8, '360'], [i8, '12'], [s9, '520'], [m9, '30'], [p9, '24']]) assert.ok(text(d).includes(s), `${d} prints ${s}`);
});
