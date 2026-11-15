import test from 'node:test';
import assert from 'node:assert/strict';
import {
  barLayout, barSeconds, barsPracticed, barsSeconds, beatsInBars, beatsMissing, beatsPerBar, callAndResponse, countIn, DYNAMICS, fillsBar, formName, layers,
  loudness, motion, noteStep, onLine, ostinato, rebalance, returnsToStart, secondsPerBeat, sound, staffStep, tooLoud, totalBeats,
} from './ca8-music-helpers';

test('note values: semibreve 4, minim 2, crotchet 1, quaver 1/2 beats; a rest lasts as long as its note', () => {
  assert.equal(totalBeats([sound('semibreve')]), 4);
  assert.equal(totalBeats([sound('minim'), sound('crotchet'), sound('quaver'), sound('quaver')]), 4);
  assert.equal(totalBeats([sound('crotchet', true)]), totalBeats([sound('crotchet')]));
});

test('bars: 2/4 has 2 beats, 3/4 has 3, 4/4 has 4, and a bar must add up', () => {
  assert.deepEqual((['2/4', '3/4', '4/4'] as const).map(beatsPerBar), [2, 3, 4]);
  assert.ok(fillsBar('4/4', [sound('crotchet'), sound('crotchet'), sound('minim')]));
  assert.ok(fillsBar('4/4', [sound('crotchet'), sound('crotchet', true), sound('minim')]));
  assert.ok(fillsBar('3/4', [sound('minim'), sound('crotchet')]));
  assert.ok(!fillsBar('3/4', [sound('minim'), sound('minim')]));
  assert.equal(beatsMissing('4/4', [sound('minim'), sound('crotchet')]), 1);
  assert.equal(beatsMissing('3/4', [sound('minim'), sound('minim')]), -1);
});

test('bar layout gives each sound its start beat', () => {
  const l = barLayout([sound('crotchet'), sound('crotchet', true), sound('minim')]);
  assert.deepEqual(l.map((x) => [x.start, x.beats, !!x.rest]), [[0, 1, false], [1, 1, true], [2, 2, false]]);
  assert.equal(beatsInBars('4/4', 2), 8);
  assert.equal(countIn('4/4'), '1 2 3 4');
  assert.equal(countIn('3/4'), '1 2 3');
});

test('staff steps: E4 is the bottom line, G4 the second line, F5 the top line, middle C a ledger line below', () => {
  assert.equal(noteStep('E4'), 0);
  assert.equal(noteStep('G4'), 2);
  assert.equal(noteStep('B4'), 4);
  assert.equal(noteStep('D5'), 6);
  assert.equal(noteStep('F5'), 8);
  assert.equal(noteStep('C4'), -2);
  assert.equal(staffStep('A', 4), 3);
  assert.ok(Number.isNaN(noteStep('H9')));
  assert.ok(onLine(noteStep('G4')));
  assert.ok(!onLine(noteStep('F4')));
});

test('melodic motion: step, skip, repeat', () => {
  assert.equal(motion('C4', 'D4'), 'step up');
  assert.equal(motion('E4', 'C4'), 'skip down');
  assert.equal(motion('G4', 'G4'), 'repeat');
  assert.equal(motion('E4', 'G4'), 'skip up');
  assert.equal(motion('B4', 'A4'), 'step down');
});

test('dynamics run from very soft to very loud', () => {
  assert.deepEqual(DYNAMICS.map((d) => d.mark), ['pp', 'p', 'mp', 'mf', 'f', 'ff']);
  assert.ok(loudness('pp') < loudness('mf') && loudness('mf') < loudness('ff'));
  assert.equal(loudness('xx'), 0);
});

test('form: AB is binary, ABA is ternary, a return to the start is ternary', () => {
  assert.equal(formName('AB'), 'binary');
  assert.equal(formName('ABA'), 'ternary');
  assert.equal(formName('ABC'), 'other');
  assert.ok(returnsToStart('ABA'));
  assert.ok(!returnsToStart('AB'));
});

test('ostinato repeats a pattern; call-and-response alternates', () => {
  assert.deepEqual(ostinato(['C4', 'E4'], 3), ['C4', 'E4', 'C4', 'E4', 'C4', 'E4']);
  assert.deepEqual(callAndResponse(2), ['call', 'response', 'call', 'response']);
});

test('balance: lower the part that is too loud and leave the others', () => {
  const parts = [{ name: 'Voices', level: 3 }, { name: 'Drums', level: 6 }, { name: 'Marimba', level: 3 }];
  assert.deepEqual(tooLoud(parts, 3), ['Drums']);
  assert.deepEqual(rebalance(parts, 3).map((p) => p.level), [3, 3, 3]);
  assert.deepEqual(rebalance(parts, 4).map((p) => p.level), [3, 4, 3]);
  assert.deepEqual(tooLoud(rebalance(parts, 3), 3), []);
});

test('layers of sound are the parts that are playing', () => {
  assert.equal(layers([{ name: 'melody', playing: true }, { name: 'drum', playing: false }]), 1);
  assert.equal(layers([{ name: 'melody', playing: true }, { name: 'drum', playing: true }, { name: 'bass', playing: true }]), 3);
});

test('tempo: 60 bpm is one second a beat, 120 bpm is half a second, a 4/4 bar at 120 bpm lasts 2 seconds', () => {
  assert.equal(secondsPerBeat(60), 1);
  assert.equal(secondsPerBeat(120), 0.5);
  assert.equal(barSeconds(120, '4/4'), 2);
  assert.equal(barSeconds(60, '3/4'), 3);
});

test('rehearsal: bars 5 to 6 practised 4 times is 8 bars; 4 bars at 120 bpm in 4/4 last 8 seconds', () => {
  assert.equal(barsPracticed(5, 6, 4), 8);
  assert.equal(barsPracticed(3, 3, 5), 5);
  assert.equal(barsSeconds(120, '4/4', 4), 8);
  assert.equal(barsSeconds(60, '3/4', 2), 6);
});
