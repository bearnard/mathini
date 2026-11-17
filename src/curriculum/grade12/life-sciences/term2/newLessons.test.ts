import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 12 Life Sciences, Term 2 gap topics (genetic engineering; DNA fingerprinting, paternity and mtDNA): standard shape, labelled pictures, and the
// worked results are the true ones.
stubCss();
const lessons = {
  ge: renderSlides((await import('./genetic-engineering/GeneticEngineering')).learnSteps),
  dna: renderSlides((await import('./dna-fingerprinting/DnaFingerprinting')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text).join(' | ');

test('both lessons have the standard shape and labelled pictures', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
    }
  }
});

test('DNA fingerprinting: the worked paternity and forensic results are true', () => {
  const t = text('dna');
  const mother = [2, 5, 7, 10];
  const child = [2, 4, 7, 9];
  assert.deepEqual(child.filter((b) => !mother.includes(b)), [4, 9]);
  for (const s of ['4 and 9', 'can be', 'excluded', 'Suspect Q', 'gel electrophoresis', 'mother', 'only']) assert.ok(t.includes(s), `missing ${s}`);
  assert.ok(![3, 4, 8, 10].includes(9), 'Man 2 lacks band 9');
  assert.ok(t.includes('band 9'));
  assert.ok(!/proves? the person is guilty(?!.*Saying)/.test(t.replace(/Saying that a DNA match proves the person is guilty\./, '')), 'a match is not proof of guilt');
});

test('Genetic engineering: the lesson names the CAPS terms the bank asks about', () => {
  const t = text('ge');
  for (const s of ['restriction enzyme', 'DNA ligase', 'plasmid', 'Bacillus thuringiensis', 'beta-carotene', 'stem cell', 'bone marrow', 'Dolly', 'nucleus', 'mitosis', 'insulin']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
});
