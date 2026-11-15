import test from 'node:test';
import assert from 'node:assert/strict';
import {
  barCheck, formMap, intervalNumber, keySignature, ledgerSteps, majorScale, ostinatoRepeats, phraseBeats, pieceBars,
  pitchName, scaleNames, semitonesBetween, staffStep, totalBeats, triad, TEMPO_LADDER, DYNAMICS,
} from './ca9-music-helpers';

test('note values add up: crotchet + two quavers + minim = 4 beats', () => {
  assert.equal(totalBeats(['crotchet', 'quaver', 'quaver', 'minim']), 4);
  assert.equal(totalBeats(['semibreve']), 4);
  assert.equal(totalBeats(['semiquaver', 'semiquaver', 'semiquaver', 'semiquaver']), 1);
});

test('a bar is full, short or long for its time signature', () => {
  assert.deepEqual(barCheck(['crotchet', 'quaver', 'quaver', 'minim'], { beats: 4, unit: 4 }), { total: 4, need: 4, status: 'full' });
  assert.equal(barCheck(['minim', 'crotchet'], { beats: 4, unit: 4 }).status, 'short');
  assert.equal(barCheck(['minim', 'minim'], { beats: 3, unit: 4 }).status, 'long');
  assert.equal(barCheck(['minim', 'crotchet'], { beats: 3, unit: 4 }).status, 'full');
  assert.equal(barCheck(['minim'], { beats: 2, unit: 4 }).status, 'full');
});

test('a four-bar phrase in 4/4 is 16 beats, in 3/4 it is 12', () => {
  assert.equal(phraseBeats(4, { beats: 4, unit: 4 }), 16);
  assert.equal(phraseBeats(4, { beats: 3, unit: 4 }), 12);
});

test('major scales are spelled with one letter each and follow tone, tone, semitone, tone, tone, tone, semitone', () => {
  assert.deepEqual(scaleNames(majorScale('C', 5)), ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
  assert.deepEqual(scaleNames(majorScale('G', 4)), ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']);
  assert.deepEqual(scaleNames(majorScale('D', 4)), ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D']);
  assert.deepEqual(scaleNames(majorScale('F', 4)), ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F']);
  for (const root of ['C', 'G', 'D', 'F'] as const) {
    const s = majorScale(root, 4);
    assert.deepEqual(s.slice(1).map((p, i) => semitonesBetween(s[i], p)), [2, 2, 1, 2, 2, 2, 1]);
  }
});

test('treble staff steps: E4 is the bottom line, F5 the top line, C4 needs a ledger line', () => {
  const p = (letter: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B', octave: number) => ({ letter, acc: 0 as const, octave });
  assert.equal(staffStep(p('E', 4)), 0);
  assert.equal(staffStep(p('G', 4)), 2);
  assert.equal(staffStep(p('F', 5)), 8);
  assert.equal(staffStep(p('C', 4)), -2);
  assert.equal(staffStep(p('A', 5)), 10);
  assert.deepEqual(ledgerSteps([-2]), [-2]);
  assert.deepEqual(ledgerSteps([2, 4, 6]), []);
  assert.deepEqual(ledgerSteps([6, 8, 10]), [10]);
  assert.deepEqual(ledgerSteps([12]), [10, 12]);
});

test('G major scale on the staff runs from step 2 to step 9', () => {
  assert.deepEqual(majorScale('G', 4).map(staffStep), [2, 3, 4, 5, 6, 7, 8, 9]);
});

test('triads: G major I, IV and V', () => {
  const g = majorScale('G', 4);
  assert.deepEqual(triad(g, 1).map(pitchName), ['G', 'B', 'D']);
  assert.deepEqual(triad(g, 4).map(pitchName), ['C', 'E', 'G']);
  assert.deepEqual(triad(g, 5).map(pitchName), ['D', 'F#', 'A']);
  assert.deepEqual(triad(g, 1).map(staffStep), [2, 4, 6]);
  assert.deepEqual(triad(g, 5).map(staffStep), [6, 8, 10]);
  assert.deepEqual(triad(majorScale('C', 4), 1).map(pitchName), ['C', 'E', 'G']);
});

test('interval numbers: 2nd, 3rd and 5th in G major', () => {
  const g = majorScale('G', 4);
  assert.equal(intervalNumber(g[0], g[1]), 2);
  assert.equal(intervalNumber(g[0], g[2]), 3);
  assert.equal(intervalNumber(g[0], g[4]), 5);
  assert.equal(intervalNumber(g[0], g[7]), 8);
});

test('key signatures: C none, G one sharp, D two sharps, F one flat', () => {
  assert.deepEqual(keySignature('C'), { sharps: [], flats: [], count: 0 });
  assert.deepEqual(keySignature('G'), { sharps: ['F#'], flats: [], count: 1 });
  assert.deepEqual(keySignature('D'), { sharps: ['F#', 'C#'], flats: [], count: 2 });
  assert.deepEqual(keySignature('F'), { sharps: [], flats: ['Bb'], count: -1 });
});

test('form maps: binary AB, ternary ABA, and the lengths of pieces', () => {
  assert.deepEqual(formMap('AB'), { sections: ['A', 'B'], distinct: 2, returns: false, name: 'binary' });
  assert.deepEqual(formMap('ABA'), { sections: ['A', 'B', 'A'], distinct: 2, returns: true, name: 'ternary' });
  assert.equal(pieceBars('ABA', 4), 12);
  assert.equal(pieceBars('AB', 8), 16);
  assert.equal(ostinatoRepeats(8, 2), 4);
  assert.equal(ostinatoRepeats(12, 4), 3);
});

test('tempo and dynamics lists run slow to fast and soft to loud', () => {
  assert.deepEqual(TEMPO_LADDER.map((t) => t.term), ['Adagio', 'Andante', 'Moderato', 'Allegro', 'Presto']);
  assert.deepEqual([...DYNAMICS], ['pp', 'p', 'mp', 'mf', 'f', 'ff']);
});
