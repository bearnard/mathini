import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  ARC_TENSION, PROJECT_PLAN, activeSentence, arcPoints, futureTense, isOpinion, passiveSentence,
  planSegments, presentPerfect, reportStatement, totalDays, viewpointOf,
} from './grade8';
import { PlanBar, StepFlow, StoryArc, TwoColumns } from './Grade8Pictures';

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum/grade8/english', p), 'utf8');

test('tenses and speech helpers build the bank sentences', () => {
  assert.equal(`${presentPerfect('She', 'complete')} the dialogue task.`, 'She has completed the dialogue task.');
  assert.equal(presentPerfect('We', 'finish'), 'We have finished');
  assert.equal(presentPerfect('The learners', 'write', true), 'The learners have written');
  assert.equal(`${futureTense('They', 'present')} their report tomorrow.`, 'They will present their report tomorrow.');
  assert.equal(reportStatement('Lindiwe', 'I am tired', { i: 'she' }), 'Lindiwe said that she was tired.');
  assert.equal(reportStatement('Sipho', '"We will win,"', { we: 'they' }), 'Sipho said that they would win.');
});

test('passive voice moves the receiver first with was/were + participle', () => {
  const p = { doer: 'the class monitor', verb: 'write', receiver: 'the notice' };
  assert.equal(activeSentence(p), 'The class monitor wrote the notice.');
  assert.equal(passiveSentence(p), 'The notice was written by the class monitor.');
  assert.equal(passiveSentence({ doer: 'the principal', verb: 'open', receiver: 'the library' }), 'The library was opened by the principal.');
  assert.equal(passiveSentence({ doer: 'storms', verb: 'break', receiver: 'the windows', receiverPlural: true }), 'The windows were broken by storms.');
});

test('fact or opinion matches the bank statements', () => {
  assert.equal(isOpinion('This article is the most inspiring one ever.'), true);
  assert.equal(isOpinion('The article was published on Monday.'), false);
  assert.equal(isOpinion('The report names two speakers.'), false);
  assert.equal(isOpinion('The headline appears in bold.'), false);
  assert.equal(isOpinion('Everyone should plant a tree.'), true);
});

test('narrator person and the project plan add up', () => {
  assert.equal(viewpointOf('I stepped into the cold water and my heart pounded.'), 'first person');
  assert.equal(viewpointOf('Thandi stepped into the cold water and her heart pounded.'), 'third person');
  assert.equal(totalDays(PROJECT_PLAN), 10);
  const segs = planSegments(PROJECT_PLAN);
  assert.ok(Math.abs(segs.reduce((s, x) => s + x.width, 0) - 1) < 1e-9);
  assert.equal(segs[0].start, 0);
  assert.ok(Math.abs(segs[5].start + segs[5].width - 1) < 1e-9);
});

test('the story arc peaks at the climax and stays inside the picture', () => {
  const pts = arcPoints(340, 190);
  const top = pts.reduce((a, b) => (b.y < a.y ? b : a));
  assert.equal(top.name, 'Climax');
  assert.equal(ARC_TENSION.length, 5);
  for (const p of pts) assert.ok(p.x >= 0 && p.x <= 340 && p.y >= 0 && p.y <= 190);
});

test('pictures have an aria description and at most six labels', () => {
  const flow = renderToStaticMarkup(h(StepFlow, { items: [{ label: 'A' }, { label: 'B' }], aria: 'two boxes' }));
  assert.ok(flow.includes('aria-label="two boxes"'));
  assert.ok(renderToStaticMarkup(h(TwoColumns, { left: { title: 'L', lines: ['a'] }, right: { title: 'R', lines: ['b'] }, aria: 'cols' })).includes('aria-label="cols"'));
  const arc = renderToStaticMarkup(h(StoryArc, { aria: 'arc' }));
  assert.ok(arc.includes('aria-label="arc"'));
  assert.equal((arc.match(/<text/g) ?? []).length, 5);
  const bar = renderToStaticMarkup(h(PlanBar, { tasks: PROJECT_PLAN, aria: 'bar' }));
  assert.ok(bar.includes('aria-label="bar"'));
  assert.ok(PROJECT_PLAN.length <= 6 && ARC_TENSION.length <= 6);
});

const lessons = [
  { name: 'report', slides: 5, file: 'term2/language-report-dialogue/LanguageReportDialogue.tsx' },
  { name: 'media', slides: 5, file: 'term2/media-literary-texts/MediaLiteraryTexts.tsx' },
  { name: 'project', slides: 5, file: 'term3/creative-writing-project/CreativeWritingProject.tsx' },
  { name: 'essay', slides: 6, file: 'term3/essay-writing-style/EssayWritingStyle.tsx' },
  { name: 'stories', slides: 5, file: 'term3/short-stories-narrative-technique/ShortStoriesNarrativeTechnique.tsx' },
];
const lessonPart = (file: string) => read(file).split('const bank: CapsItem[]')[0];
const text = (file: string) => lessonPart(file).replace(/<[^>]+>/g, ' ').replace(/&ldquo;|&rdquo;|&apos;/g, "'").replace(/\s+/g, ' ').toLowerCase();

for (const l of lessons) {
  test(`${l.name}: has all slides, each with a rule and a mistake, and ends with Check yourself`, () => {
    const src = lessonPart(l.file);
    const titles = [...src.matchAll(/^ {4}title: '([^']+)'/gm)].map((m) => m[1]);
    assert.equal(titles.length, l.slides);
    assert.equal(titles.at(-1), 'Check yourself');
    assert.equal((src.match(/<Rule>/g) ?? []).length, l.slides - 1);
    assert.equal((src.match(/<Mistake>/g) ?? []).length, l.slides - 1);
    assert.equal((src.match(/<Worked/g) ?? []).length, l.slides - 1);
    assert.equal((src.match(/<Check\b/g) ?? []).length, 1);
    assert.ok(src.includes('export const learnSteps'));
    const checkQs = src.split('<Check')[1].split('answers={')[0];
    assert.equal((checkQs.match(/^\s*<>/gm) ?? []).length, 4, 'four questions, each with its own answer');
  });
  test(`${l.name}: lesson part has no throw and keeps the bank`, () => {
    assert.ok(!/\bthrow\b/.test(lessonPart(l.file)));
    assert.ok(read(l.file).includes('const bank: CapsItem[]'));
  });
}

const has = (file: string, keys: string[]) => {
  const t = text(file);
  for (const k of keys) assert.ok(t.includes(k.toLowerCase()), k);
};

test('report lesson text carries what the bank asks', () => {
  has(lessons[0].file, ['has or have', 'will + the base', 'quotation marks', 'because', 'was/were + the past participle', 'focus on the action or result', 'conjunctions turn short sentences into connected']);
});
test('media lesson text carries what the bank asks', () => {
  has(lessons[1].file, ['news report', 'folktale', 'most', 'inspiring', 'Community Fights Back', 'grab attention', 'central struggle', 'underlying idea', 'supporting evidence', 'form and purpose shape meaning']);
});
test('project lesson text carries what the bank asks', () => {
  has(lessons[2].file, ['Planning and research come first', 'audience', 'Peer review gets helpful feedback', 'Redrafting is rewriting after feedback', 'engages the reader', 'feedback changed the final draft', 'edit for language, structure and accuracy', 'timeline']);
});
test('essay lesson text carries what the bank asks', () => {
  has(lessons[3].file, ['engages the reader', 'connect logically', 'After the rain stopped, we finally entered the field.', 'personal experience and insight', 'The wind sliced through the narrow alley as papers spun.', 'closure', 'language technique that creates an effect', 'supports the essay']);
});
test('stories lesson text carries what the bank asks', () => {
  has(lessons[4].file, ['highest tension', 'I and we', 'Support every claim with evidence', 'cause and effect', 'limited viewpoint', 'drives the plot forward', 'Word choice reveals attitude', 'flashback']);
});

test('the picture notes quote the bank wording', () => {
  assert.ok(lessonPart(lessons[4].file).includes('He shares his food though he is hungry.'));
  assert.ok(lessonPart(lessons[0].file).includes('was written by'));
});
