import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 8 Creative Arts, visual arts (CAPS terms 1 to 4): lettering and graffiti, clay and mythological containers, fashion design, societal issues in art,
// careers and surface decoration, tone and texture, scraperboard etching. No artist or artwork is named. Colour pairs, pencil grades and craft steps in the
// questions are checked here from art teaching practice, not from ca8-visual-gaps.ts.

stubCss();
const base = './curriculum/grade8/creative-arts';
const topics = [
  { dir: 'term1/lettering-graffiti', mod: `${base}/term1/lettering-graffiti/LetteringGraffiti` },
  { dir: 'term1/clay-mythological-containers', mod: `${base}/term1/clay-mythological-containers/ClayMythologicalContainers` },
  { dir: 'term2/fashion-design-recyclables', mod: `${base}/term2/fashion-design-recyclables/FashionDesignRecyclables` },
  { dir: 'term2/societal-issues-art', mod: `${base}/term2/societal-issues-art/SocietalIssuesArt` },
  { dir: 'term3/careers-surface-decoration', mod: `${base}/term3/careers-surface-decoration/CareersSurfaceDecoration` },
  { dir: 'term4/tone-texture-pastel-tempera', mod: `${base}/term4/tone-texture-pastel-tempera/ToneTexturePastelTempera` },
  { dir: 'term4/scraperboard-etching', mod: `${base}/term4/scraperboard-etching/ScraperboardEtching` },
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

test('INDEPENDENT: complementary colours, pencil grades and craft methods', () => {
  const a = 'term1/lettering-graffiti';
  assert.equal(find(a, 'An orange shape sits next to a blue shape').answer, 'Complementary colours');
  assert.equal(find(a, 'Which colour pair makes the strongest contrast').answer, 'Yellow and purple');
  const d = 'term2/societal-issues-art';
  assert.equal(find(d, 'What does the B in a 4B pencil stand for').answer, 'Black');
  assert.equal(find(d, 'Which of these pencils makes the darkest mark').answer, '4B');
  const g = 'term4/scraperboard-etching';
  assert.equal(find(g, 'What do you put on the paper first').answer, 'White wax crayon');
  assert.equal(find(g, 'Which size is the board').answer, 'About 20 by 20 cm');
  assert.equal(find(g, 'In a scraperboard drawing, which tone does a lot of scratching make').answer, 'A lighter tone');
  const b = 'term1/clay-mythological-containers';
  assert.equal(find(b, 'What must you do to both clay surfaces before you join them').answer, 'Scratch them');
  assert.equal(find(b, 'In which order do you make a pinch pot').answer, 'Roll a ball, press in a thumb, pinch the walls');
});

test('INDEPENDENT: no lesson names a real artist or artwork, and safety points are present', () => {
  const all = Object.values(lessons).flatMap((l) => l.map((s) => s.text)).join(' ');
  for (const name of ['Picasso', 'Van Gogh', 'Mona Lisa', 'Banksy', 'Ndebele', 'Mahlangu', 'Kentridge']) assert.ok(!all.includes(name), name);
  const g = lessons['term4/scraperboard-etching'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['away from your body', 'never point a tool', 'protect', 'put the tools away']) assert.ok(g.includes(w), w);
  const f = lessons['term2/fashion-design-recyclables'].map((s) => s.text).join(' ').toLowerCase();
  assert.ok(f.includes('away from your body') && f.includes('craft knives'));
  const l = lessons['term1/lettering-graffiti'].map((s) => s.text).join(' ').toLowerCase();
  assert.ok(l.includes('permission') && l.includes('vandalism'));
});
