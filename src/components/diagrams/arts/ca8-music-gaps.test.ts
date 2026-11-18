import test from 'node:test';
import assert from 'node:assert/strict';
import { ARTICULATION, BAR_UNITS, barsIn, barTotal, countedBeats, crotchetBeats, familyOf, FAMILIES, fills, keySignature, majorScale, MAJOR_PATTERN, missingUnits, quaversPerBar, scaleOnStaff, speedRank, tripletsPerCrotchet } from './ca8-music-gaps';

// Written from music theory, not from the helper: the major scales and key signatures of the four keys in the Grade 8 CAPS.
test('the four major scales are spelt correctly and each uses every letter once', () => {
  assert.deepEqual(majorScale('C'), ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
  assert.deepEqual(majorScale('G'), ['G', 'A', 'B', 'C', 'D', 'E', 'F♯', 'G']);
  assert.deepEqual(majorScale('F'), ['F', 'G', 'A', 'B♭', 'C', 'D', 'E', 'F']);
  assert.deepEqual(majorScale('D'), ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯', 'D']);
});

test('key signatures: C none, G one sharp, F one flat, D two sharps', () => {
  assert.deepEqual(keySignature('C'), { kind: 'none', notes: [] });
  assert.deepEqual(keySignature('G'), { kind: 'sharp', notes: ['F♯'] });
  assert.deepEqual(keySignature('F'), { kind: 'flat', notes: ['B♭'] });
  assert.deepEqual(keySignature('D'), { kind: 'sharp', notes: ['F♯', 'C♯'] });
});

test('the major pattern is tone tone semitone tone tone tone semitone and spans 12 semitones', () => {
  assert.deepEqual([...MAJOR_PATTERN], [2, 2, 1, 2, 2, 2, 1]);
  assert.equal(MAJOR_PATTERN.reduce((a, b) => a + b, 0), 12);
});

test('scale on the staff starts on the key note and climbs one letter at a time', () => {
  assert.deepEqual(scaleOnStaff('C'), ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']);
  assert.deepEqual(scaleOnStaff('G'), ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5']);
  assert.deepEqual(scaleOnStaff('D'), ['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5']);
});

test('bars: 2/4 = 2 crotchets, 3/4 = 3, 4/4 = 4, 6/8 = 6 quavers = 3 crotchets of length', () => {
  assert.equal(BAR_UNITS['2/4'] / 6, 2);
  assert.equal(BAR_UNITS['3/4'] / 6, 3);
  assert.equal(BAR_UNITS['4/4'] / 6, 4);
  assert.equal(BAR_UNITS['6/8'] / 6, 3);
  assert.equal(quaversPerBar('6/8'), 6);
  assert.equal(countedBeats('6/8'), 2);
  assert.equal(countedBeats('3/4'), 3);
});

test('note lengths in crotchets: dotted minim 3, dotted crotchet 1.5, triplet quaver 1/3', () => {
  assert.equal(crotchetBeats('dotted minim'), 3);
  assert.equal(crotchetBeats('dotted crotchet'), 1.5);
  assert.equal(crotchetBeats('quaver'), 0.5);
  assert.equal(tripletsPerCrotchet(), 3);
  assert.equal(barTotal(['triplet quaver', 'triplet quaver', 'triplet quaver']), 6);
});

test('a bar fills when its notes add up, and the missing amount is computed', () => {
  assert.ok(fills('3/4', ['dotted minim']));
  assert.ok(fills('4/4', ['minim', 'crotchet', 'quaver', 'quaver']));
  assert.ok(fills('6/8', ['dotted crotchet', 'dotted crotchet']));
  assert.ok(fills('2/4', ['crotchet', 'triplet quaver', 'triplet quaver', 'triplet quaver']));
  assert.ok(!fills('4/4', ['minim', 'crotchet']));
  assert.equal(missingUnits('4/4', ['minim', 'crotchet']), 6);
});

test('tempo words rank from slow to fast and the jingle arithmetic holds', () => {
  assert.ok(speedRank('andante') < speedRank('moderato') && speedRank('moderato') < speedRank('allegro') && speedRank('allegro') < speedRank('presto'));
  assert.equal(barsIn(60, 120, '4/4'), 30);
  assert.equal(barsIn(60, 96, '4/4'), 24);
  assert.equal(barsIn(30, 120, '2/4'), 30);
  assert.ok('legato' in ARTICULATION && 'staccato' in ARTICULATION);
});

test('four families with their example instruments', () => {
  assert.equal(FAMILIES.length, 4);
  assert.equal(familyOf('djembe'), 'membranophones');
  assert.equal(familyOf('marimba'), 'idiophones');
  assert.equal(familyOf('guitar'), 'chordophones');
  assert.equal(familyOf('vuvuzela'), 'aerophones');
  assert.equal(new Set(FAMILIES.flatMap((f) => f.examples)).size, FAMILIES.flatMap((f) => f.examples).length);
});
