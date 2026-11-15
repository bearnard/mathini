import test from 'node:test';
import assert from 'node:assert/strict';
import { blocking, markedPause, markedText, rehearsalPlan, scriptStats } from './ca8-drama-helpers';
import {
  ACTING_CRITERIA, BULLY_SCENE, CAREERS, CHARACTER_QUESTIONS, CLUMPED, DESIGN_CHOICES, DEVISED_LINE, DEVISED_ROUTE, DEVISING_STEPS, deadlinesMet,
  DIRECTOR, MOOD_MAKERS, MOOD_TOOLS, PRODUCTION_TEAM, READERS, REFLECTION_STEPS, rubric, SOCIAL_THEMES, TEAMWORK_CRITERIA, WAITING_THREE, WAITING_TWO,
} from './ca9-drama-helpers';

test('devising has five steps, in the order a group works; five social themes', () => {
  assert.deepEqual(DEVISING_STEPS.map((s) => s.lead), ['Choose', 'Brainstorm', 'Improvise', 'Select', 'Rehearse']);
  assert.deepEqual([...SOCIAL_THEMES], ['bullying', 'friendship', 'family', 'identity', 'community issues']);
});

test('the devised line: soft and slow, a two-beat pause, then loud and fast', () => {
  assert.equal(markedText(DEVISED_LINE), 'I saw it. Everyone saw it.');
  assert.equal(markedPause(DEVISED_LINE), 2);
  assert.deepEqual(DEVISED_LINE.filter((p) => p.text).map((p) => [p.volume, p.pace]), [['soft', 'slow'], ['loud', 'fast']]);
});

test('whole-stage route: upstage right, centre stage, downstage left, 2 moves; the clumped group never moves', () => {
  const b = blocking(DEVISED_ROUTE);
  assert.deepEqual(b.names, ['Upstage right', 'Centre stage', 'Downstage left']);
  assert.equal(b.totalSteps, 2);
  assert.equal(blocking(CLUMPED).totalSteps, 0);
  assert.deepEqual(blocking(READERS.map((r) => r.at)).names, ['Downstage right', 'Downstage centre', 'Downstage left']);
});

test('mood has four tools; the bullying scene has two roles who want different things', () => {
  assert.deepEqual(MOOD_TOOLS.map((m) => m.name), ['Tone', 'Pace', 'Tension', 'Choices']);
  assert.notEqual(BULLY_SCENE.a.wants, BULLY_SCENE.b.wants);
  assert.equal(CHARACTER_QUESTIONS.length, 4);
});

test('adapting the scene from three characters to two keeps both directions and drops one speaker', () => {
  assert.deepEqual(scriptStats(WAITING_THREE), { lines: 3, speakers: 3, withDirections: 3 });
  assert.deepEqual(scriptStats(WAITING_TWO), { lines: 2, speakers: 2, withDirections: 2 });
  assert.ok(WAITING_TWO[1].text.includes(WAITING_THREE[1].text) && WAITING_TWO[1].text.includes(WAITING_THREE[2].text));
  assert.deepEqual(MOOD_MAKERS.map((m) => m.name), ['Dialogue', 'Movement', 'Pace', 'Choices']);
});

test('a 40-minute rehearsal is shared 7 + 13 + 13 + 7 and adds back up', () => {
  const plan = rehearsalPlan(40);
  assert.deepEqual(plan.map((p) => p.minutes), [7, 13, 13, 7]);
  assert.equal(plan.reduce((t, p) => t + p.minutes, 0), 40);
});

test('production team: a director and five groups; four design choices; five careers; three reflection steps', () => {
  assert.equal(DIRECTOR.name, 'Director');
  assert.deepEqual(PRODUCTION_TEAM.map((r) => r.name), ['Actors', 'Stage manager', 'Lighting', 'Sound', 'Set and costume']);
  assert.deepEqual(DESIGN_CHOICES.map((d) => d.name), ['Costume', 'Lighting', 'Set', 'Props']);
  assert.deepEqual(CAREERS.map((c) => c.name), ['Actor', 'Director', 'Playwright', 'Dramaturge', 'Drama therapist']);
  assert.equal(REFLECTION_STEPS.length, 3);
});

test('rubric: four criteria out of 5', () => {
  assert.equal(ACTING_CRITERIA.length, 4);
  assert.deepEqual(rubric([4, 3, 5, 4]), { total: 16, outOf: 20, percent: 80 });
  assert.deepEqual(rubric([5, 5, 5, 5]), { total: 20, outOf: 20, percent: 100 });
  assert.deepEqual(rubric([3, 2, 4, 3]), { total: 12, outOf: 20, percent: 60 });
});

test('teamwork: four criteria; 3 of 4 deadlines met is 75%', () => {
  assert.deepEqual(TEAMWORK_CRITERIA.map((t) => t.name), ['Communication', 'Support', 'Deadlines', 'Shared tasks']);
  assert.deepEqual(deadlinesMet(3, 4), { met: 3, set: 4, missed: 1, percent: 75 });
  assert.deepEqual(deadlinesMet(5, 8), { met: 5, set: 8, missed: 3, percent: 63 });
});
