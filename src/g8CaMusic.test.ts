import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 8 Creative Arts, music (CAPS terms 1 to 4): note values and keys, families of instruments, triplets and F major, ostinato and jingle, 6/8 and D major.
// Counts, scales and key signatures in the questions are recomputed here from music theory, not from ca8-music-gaps.ts.

stubCss();
const base = './curriculum/grade8/creative-arts';
const topics = [
  { dir: 'term1/music-literacy-notes-keys', mod: `${base}/term1/music-literacy-notes-keys/MusicLiteracyNotesKeys` },
  { dir: 'term1/instrument-families', mod: `${base}/term1/instrument-families/InstrumentFamilies` },
  { dir: 'term2/triplets-f-major-terms', mod: `${base}/term2/triplets-f-major-terms/TripletsFMajorTerms` },
  { dir: 'term3/ostinato-riff-jingle', mod: `${base}/term3/ostinato-riff-jingle/OstinatoRiffJingle` },
  { dir: 'term4/six-eight-d-major-articulation', mod: `${base}/term4/six-eight-d-major-articulation/SixEightDMajorArticulation` },
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

test('INDEPENDENT: note values, bars and key signatures (music theory)', () => {
  const a = 'term1/music-literacy-notes-keys';
  // minim 2 + dot 1 = 3 beats; a bar of 3/4 = 3 beats, minim 2 so one crotchet; 4 bars of 3/4 = 12
  assert.equal(find(a, 'How many crotchet beats does a dotted minim last').answer, `${2 + 1} beats`);
  assert.equal(find(a, 'A bar of 3/4 holds one minim').answer, 'A crotchet');
  assert.equal(find(a, 'How many crotchet beats are in 4 bars of 3/4').answer, String(4 * 3));
  assert.equal(find(a, 'How many quavers fit into one crotchet').answer, String(1 / 0.5));
  assert.equal(find(a, 'How many sharps are in the key signature of G major').answer, 'One sharp');
  assert.equal(find(a, 'Which note is sharpened in the G major scale').answer, 'F');
  // treble spaces F A C E, semitones in C major E-F and B-C
  assert.equal(find(a, 'Which letters name the four spaces').answer, 'F A C E');
  assert.equal(find(a, 'Between which pairs of notes in the C major scale').answer, 'E to F and B to C');
  const pattern = 'T T S T T T S';
  assert.equal(find(a, 'Which pattern of tones').answer, pattern);
  assert.equal(pattern.split(' ').reduce((s, x) => s + (x === 'T' ? 2 : 1), 0), 12);
});

test('INDEPENDENT: triplets, F major, 6/8 and D major', () => {
  const b = 'term2/triplets-f-major-terms';
  assert.equal(find(b, 'How many triplet quavers are played in the time of one crotchet').answer, String(3));
  // crotchet (1) + 3 triplet quavers (1) = 2 beats
  assert.equal(find(b, 'A bar of 2/4 has a crotchet followed by three triplet quavers').answer, `${1 + 1} beats`);
  assert.equal(find(b, 'How many flats are in the key signature of F major').answer, 'One flat');
  assert.equal(find(b, 'Which note of the F major scale is flattened').answer, 'B');
  assert.equal(find(b, 'Which notes make up the F major scale').answer, 'F G A B♭ C D E F');
  const e = 'term4/six-eight-d-major-articulation';
  assert.equal(find(e, 'How many quavers are in one bar of 6/8').answer, String(6));
  assert.equal(find(e, 'How many sharps are in the key signature of D major').answer, 'Two sharps');
  assert.equal(find(e, 'Which notes are sharp in the D major scale').answer, 'F and C');
  assert.equal(find(e, 'Which notes make up the D major scale').answer, 'D E F♯ G A B C♯ D');
  assert.equal(find(e, 'Which two notes fill one bar of 6/8').answer, 'Two dotted crotchets');
  // two dotted crotchets: 2 x 1.5 = 3 crotchet beats = 6 quavers
  assert.equal(2 * 1.5 * 2, 6);
});

test('INDEPENDENT: ostinato and jingle arithmetic', () => {
  const c = 'term3/ostinato-riff-jingle';
  assert.equal(find(c, 'A pattern of 4 notes is repeated 3 times').answer, String(4 * 3));
  assert.equal(find(c, 'A jingle lasts 1 minute at 120 beats a minute').answer, String(120 * 1));
  assert.equal(find(c, 'A 60-second jingle is in 4/4 at 120 beats a minute').answer, String((120 * 1) / 4));
  assert.equal(find(c, 'At 120 beats a minute, how long does one beat last').answer, 'Half a second');
  assert.equal(60 / 120, 0.5);
});

test('INDEPENDENT: families of instruments', () => {
  const d = 'term1/instrument-families';
  assert.equal(find(d, 'A marimba makes sound').answer, 'Idiophones');
  assert.equal(find(d, 'The sound of a guitar').answer, 'Chordophones');
  assert.equal(find(d, 'Which of these instruments is an aerophone').answer, 'Recorder');
  assert.equal(find(d, 'Which of these instruments is a membranophone').answer, 'Djembe');
  assert.equal(find(d, 'How many families of instruments are in this lesson').answer, 'Four');
});
