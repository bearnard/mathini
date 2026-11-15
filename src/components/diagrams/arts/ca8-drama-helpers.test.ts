import test from 'node:test';
import assert from 'node:assert/strict';
import {
  allStageAreas, blocking, BACKSTAGE, CHARACTER, LOST_PHONE, markedPause, markedText, moveSteps, rehearsalPlan, scriptStats, splitMinutes,
  STOP_LINE, stageAreaName, tableau, TABLEAU_LEVELS, tensionArc, THE_LETTER, VOICE, WINDOW_LINE,
} from './ca8-drama-helpers';

test('nine stage areas with the standard names; stage right is the left of the picture', () => {
  assert.deepEqual(allStageAreas().map((a) => a.name), [
    'Upstage right', 'Upstage centre', 'Upstage left',
    'Centre right', 'Centre stage', 'Centre left',
    'Downstage right', 'Downstage centre', 'Downstage left',
  ]);
  assert.equal(stageAreaName([0, 0]), 'Upstage right');
  assert.equal(stageAreaName([2, 2]), 'Downstage left');
});

test('blocking: enter upstage right, cross to centre stage, exit downstage left', () => {
  const b = blocking([[0, 0], [1, 1], [2, 2]]);
  assert.deepEqual(b.names, ['Upstage right', 'Centre stage', 'Downstage left']);
  assert.deepEqual(b.legs.map((l) => l.steps), [1, 1]);
  assert.equal(b.totalSteps, 2);
  assert.equal(moveSteps([0, 0], [2, 2]), 2);
  assert.equal(moveSteps([0, 1], [2, 1]), 2);
});

test('six voice tools, four character parts, four backstage roles, all different', () => {
  assert.deepEqual(VOICE.map((v) => v.name), ['Volume', 'Pitch', 'Pace', 'Pause', 'Projection', 'Articulation']);
  assert.deepEqual(CHARACTER.map((v) => v.name), ['Voice', 'Movement', 'Motivation', 'Reaction']);
  assert.equal(BACKSTAGE.length, 4);
  for (const set of [VOICE, CHARACTER, BACKSTAGE]) assert.equal(new Set(set.map((t) => t.name)).size, set.length);
});

test('the marked-up line: two spoken pieces and one beat of silence', () => {
  assert.equal(markedText(STOP_LINE), "Stop! Don't open that door.");
  assert.equal(markedPause(STOP_LINE), 1);
});

test('a tableau leans everyone towards the focus point', () => {
  const f = tableau(TABLEAU_LEVELS);
  assert.deepEqual(f.map((x) => x.x), [14, 38, 62, 86]);
  assert.deepEqual(f.map((x) => x.facing), [1, 1, -1, -1]);
  assert.deepEqual(f.map((x) => x.level), ['low', 'high', 'medium', 'low']);
  assert.deepEqual(tableau(['high']), [{ x: 50, level: 'high', facing: 0 }]);
});

test('the tension arc rises to the climax then falls; beginning, middle, end', () => {
  const a = tensionArc(7, 4);
  assert.deepEqual(a.map((p) => p.value), [1, 3, 5, 7, 9, 5.5, 2]);
  assert.deepEqual(a.map((p) => p.part), ['beginning', 'beginning', 'middle', 'middle', 'middle', 'end', 'end']);
  for (let i = 1; i <= 4; i++) assert.ok(a[i].value > a[i - 1].value);
  for (let i = 5; i < 7; i++) assert.ok(a[i].value < a[i - 1].value);
});

test('rehearsal time always adds up to the session', () => {
  assert.deepEqual(rehearsalPlan(30), [
    { name: 'Warm-up', minutes: 5 }, { name: 'Blocking', minutes: 10 }, { name: 'Run the scene', minutes: 10 }, { name: 'Notes', minutes: 5 },
  ]);
  for (const t of [20, 25, 31, 45]) assert.equal(splitMinutes(t, [1, 2, 2, 1]).reduce((a, b) => a + b, 0), t);
  assert.deepEqual(splitMinutes(25, [1, 2, 2, 1]), [4, 9, 8, 4]);
});

test('the scripts: speakers, lines and stage directions', () => {
  assert.deepEqual(scriptStats(LOST_PHONE), { lines: 3, speakers: 2, withDirections: 3 });
  assert.deepEqual(scriptStats(THE_LETTER), { lines: 2, speakers: 2, withDirections: 2 });
  assert.equal(WINDOW_LINE.who, 'THABO');
});
