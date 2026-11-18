import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 8 Creative Arts, drama (CAPS terms 2 to 4): South African poetry and praise poetry, polished improvisation in a style, dialogues, dramatised prose
// and indigenous storytelling, and drama in the media. No poem, play or praise poem is quoted; the lessons are checked for shape, bank quality and key words.

stubCss();
const base = './curriculum/grade8/creative-arts';
const topics = [
  { dir: 'term2/sa-poetry-praise-poetry', mod: `${base}/term2/sa-poetry-praise-poetry/SaPoetryPraisePoetry` },
  { dir: 'term3/polished-improvisation-style', mod: `${base}/term3/polished-improvisation-style/PolishedImprovisationStyle` },
  { dir: 'term4/dialogues-prose-storytelling', mod: `${base}/term4/dialogues-prose-storytelling/DialoguesProseStorytelling` },
  { dir: 'term4/drama-in-the-media', mod: `${base}/term4/drama-in-the-media/DramaInTheMedia` },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/creative-arts/${t.dir}/`));
}
const find = (dir: string, start: string) => {
  const hits = banks[dir].filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

for (const t of topics) {
  test(`${t.dir}: standard lesson shape, 14 valid questions, key spread over all four positions`, () => {
    assertLessonShape(lessons[t.dir]);
    const bank = banks[t.dir];
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      assert.ok(!/learners?\b|CAPS/i.test(q.prompt), `prompt does not name learners or CAPS: ${q.prompt}`);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });

  test(`${t.dir}: key words of every answer appear in the lesson`, () => {
    const words = (s: string) => s.toLowerCase().match(/[a-z]{6,}/g) ?? [];
    const text = lessons[t.dir].map((s) => s.text).join(' ').toLowerCase();
    for (const q of banks[t.dir]) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 2, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('the four styles, the technical resources and the media forms are named in the lessons', () => {
  const style = lessons['term3/polished-improvisation-style'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['comedy', 'tragedy', 'musical', 'puppet show', 'properties', 'set pieces', 'costume pieces', 'lighting', 'sound', 'justify']) assert.ok(style.includes(w), w);
  const media = lessons['term4/drama-in-the-media'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['film', 'television', 'radio', 'documentary', 'internet']) assert.ok(media.includes(w), w);
  const story = lessons['term4/dialogues-prose-storytelling'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['dialogue', 'dramatised prose', 'indigenous storytelling', 'ntsomi', 'idiophones', 'narrator', 'status']) assert.ok(story.includes(w), w);
  const poetry = lessons['term2/sa-poetry-praise-poetry'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['praise poet', 'call and response', 'repetition', 'rhythm', 'descriptive naming phrases', 'pitch', 'pace', 'tone']) assert.ok(poetry.includes(w), w);
});

test('each style, resource and medium question has the answer a drama teacher expects', () => {
  const s = 'term3/polished-improvisation-style';
  assert.equal(find(s, 'Which style of drama uses humour').answer, 'Comedy');
  assert.equal(find(s, 'Which style of drama usually ends in loss').answer, 'Tragedy');
  assert.equal(find(s, 'In which style do songs and dance').answer, 'Musical');
  assert.equal(find(s, 'Which style of drama uses puppets').answer, 'Puppet show');
  assert.equal(find(s, 'A painted cardboard tree').answer, 'A set piece');
  const m = 'term4/drama-in-the-media';
  assert.equal(find(m, 'Which medium uses sound only').answer, 'Radio');
  assert.equal(find(m, 'Which form of media shows real people').answer, 'A documentary');
});
