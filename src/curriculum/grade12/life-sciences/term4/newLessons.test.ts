import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';
import { SITES, BRAIN_CM3, brainRatio } from '../../../../components/diagrams/lifesci/cradle';

// Grade 12 Life Sciences, Term 4 gap topics (Cradle of Humankind; Alternatives to evolution): standard shape, labelled pictures, and the facts match the
// tested data in cradle.ts. The Alternatives lesson must stay neutral: no word that ranks a belief.
stubCss();
const lessons = {
  cradle: renderSlides((await import('./cradle-of-humankind/CradleOfHumankind')).learnSteps),
  alt: renderSlides((await import('./alternatives-to-evolution/AlternativesToEvolution')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text).join(' | ');
const src = (p: string) => fs.readFileSync(`src/curriculum/grade12/life-sciences/term4/${p}`, 'utf8');
const bankOf = (p: string) => src(p).slice(src(p).indexOf('const bank: CapsItem[] = ['));
const answerOf = (p: string, start: string): string => {
  const b = bankOf(p);
  const i = b.indexOf(`prompt: '${start}`);
  assert.ok(i >= 0, `no question starts with ${start}`);
  const m = b.slice(i).match(/answer: '((?:[^'\\]|\\.)*)'/);
  assert.ok(m);
  return m[1];
};

test('both lessons have the standard shape and labelled pictures', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
    }
  }
});

test('Cradle of Humankind: bank keys agree with the fossil data (cradle.ts)', () => {
  const f = 'cradle-of-humankind/CradleOfHumankind.tsx';
  const site = (name: string) => SITES.find((s) => s.site === name);
  assert.equal(answerOf(f, 'Which scientist described the Taung Child'), 'Raymond Dart');
  assert.ok(site('Taung')?.scientist.startsWith('Raymond Dart') && site('Taung')?.scientist.includes('1924'));
  assert.equal(answerOf(f, 'At which site was the adult skull'), SITES.find((s) => s.fossil.includes('Mrs Ples'))?.site);
  assert.equal(answerOf(f, 'Which scientist is linked to the nearly complete skeleton called Little Foot'), 'Ron Clarke');
  assert.ok(SITES.find((s) => s.fossil.includes('Little Foot'))?.scientist.includes('Ron Clarke'));
  assert.equal(answerOf(f, 'Australopithecus sediba was found at Malapa'), 'Lee Berger');
  assert.ok(site('Malapa')?.scientist.includes('Lee Berger'));
  assert.equal(answerOf(f, 'Paranthropus robustus was first found'), 'Kromdraai');
  assert.equal(site('Kromdraai')?.fossil, 'Paranthropus robustus');
  assert.equal(answerOf(f, 'In which two provinces'), 'Gauteng and North West');
  const t = text('cradle');
  for (const s of ['about 2,5 million years', 'about 2,1 million years', 'about 3,67 million years', 'about 2 million years', 'Raymond Dart', 'Lee Berger', 'Ron Clarke', 'Robert Broom', 'C.K. Brain', 'Phillip Tobias', 'Blombos', 'Florisbad', 'Border Cave', `${brainRatio(BRAIN_CM3[0].cm3, BRAIN_CM3[2].cm3)} times`]) assert.ok(t.includes(s), `missing ${s}`);
  assert.ok(!/\bproves?\b.*missing link/.test(t), 'no "missing link" claim');
});

test('Alternatives to evolution: neutral wording, and every term the bank asks about is defined in the lesson', () => {
  const t = text('alt');
  for (const s of ['Creationism', 'Intelligent Design', 'Literalism', 'Theistic evolution', 'created by a creator', 'intelligent designer', 'exact account', 'accepts', 'uthlanga', 'scientific theory']) assert.ok(t.includes(s), `missing ${s}`);
  // no belief is ranked: none of these evaluative words appears in the lesson text
  const ranking = t.match(/\b(nonsense|superstition|myth|pseudoscience|stupid|unscientific|fairy|primitive)\b/i);
  assert.equal(ranking, null, `a ranking word: ${ranking?.[0]}`);
  const bank = bankOf('alternatives-to-evolution/AlternativesToEvolution.tsx');
  assert.ok(!/which (one )?(explanation|view|belief)[^?]* is (right|correct|true|wrong|false)/i.test(bank), 'no question asks which belief is right');
});
