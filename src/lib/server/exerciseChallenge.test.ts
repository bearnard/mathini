import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { CHALLENGE_TTL_MS, creditExercise, issueChallenges } from './exerciseChallenge';
import { EXERCISE_KINDS, EXERCISE_META, checkExercise, comparingProblem, conversionProblem, massProblem, placeValueProblem, roundingProblem, scaleProblem, type ExerciseKind } from '../shared/g5Exercises';
import { seededRandom } from '../shared/seededRandom';
import { openTestDb, insertStudent } from './admin/testdb';

const NOW = 1_800_000_000_000;
const SECRET = 'exercise-secret';
const read = (f: string) => fs.readFileSync(f, 'utf8');
const right = (kind: ExerciseKind, seed: number): string => {
  const rng = () => seededRandom(seed);
  switch (kind) {
    case 'rounding': return String(roundingProblem(rng()).answer);
    case 'comparing': return comparingProblem(rng()).answer;
    case 'place-value': return String(placeValueProblem(rng()).answer);
    case 'mass-calc': return String(massProblem(rng()).answer);
    case 'reading-scales': return String(scaleProblem(rng()).weight);
    case 'conversions': { const p = conversionProblem(rng()); return String(p.direction === 'g-to-kg' ? p.grams / 1000 : p.grams); }
  }
};

test('the generators are deterministic and sane: the same seed is the same problem, and the right answer is always one the checker accepts', () => {
  for (const kind of EXERCISE_KINDS) {
    for (let seed = 1; seed <= 300; seed++) {
      assert.equal(checkExercise(kind, seededRandom(seed), right(kind, seed)), true, `${kind} seed ${seed}`);
      assert.equal(checkExercise(kind, seededRandom(seed), 'definitely wrong'), false, `${kind} seed ${seed}: junk`);
    }
  }
  assert.deepEqual(roundingProblem(seededRandom(7)), roundingProblem(seededRandom(7)));
  assert.notDeepEqual(roundingProblem(seededRandom(7)), roundingProblem(seededRandom(8)));
  for (let seed = 1; seed <= 500; seed++) {
    const r = roundingProblem(seededRandom(seed));
    assert.ok(r.number % r.roundTo !== 0 && r.answer % r.roundTo === 0);
    const p = placeValueProblem(seededRandom(seed));
    assert.equal(new Set(p.options).size, 4);
    assert.ok(p.options.includes(p.answer));
    const m = massProblem(seededRandom(seed));
    assert.ok(Number.isFinite(m.answer) && m.answer > 0);
    const s = scaleProblem(seededRandom(seed));
    assert.ok(s.weight > 0 && s.weight < s.maxScale);
    const c = comparingProblem(seededRandom(seed));
    assert.equal(c.answer, c.numA < c.numB ? '<' : c.numA > c.numB ? '>' : '=');
  }
  // the checks the components use, edge cases
  assert.equal(checkExercise('rounding', seededRandom(3), ` ${right('rounding', 3).split('').join(' ')}`), true, 'spaces between digits are allowed');
  assert.equal(checkExercise('reading-scales', seededRandom(3), right('reading-scales', 3).replace('.', ',')), true, 'a decimal comma counts');
  assert.equal(checkExercise('mass-calc', seededRandom(3), 'x'.repeat(100)), false);
});

async function world() {
  const t = await openTestDb(); if (!t) return null;
  insertStudent(t, { id: 's1', created: NOW - 1000 });
  insertStudent(t, { id: 's2', created: NOW - 1000 });
  return t;
}

test('a challenge is signed for ONE learner, ONE exercise and ONE moment: a forged, altered, borrowed or stale one is never credited', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const [c] = await issueChallenges(SECRET, 's1', 'rounding', 1, NOW);
  const claim = { kind: 'rounding', ...c };
  const ok = await creditExercise(t.db, SECRET, 's1', claim, right('rounding', c.seed), NOW + 1000);
  assert.deepEqual([ok.credited, ok.credited && ok.isCorrect, ok.credited && ok.task, ok.credited && ok.section], [true, true, EXERCISE_META.rounding.task, 'rounding']);
  const wrong = await creditExercise(t.db, SECRET, 's1', claim, '12345', NOW + 1000);
  assert.deepEqual([wrong.credited, wrong.credited && wrong.isCorrect], [true, false], 'a wrong answer is credited as WRONG (the server\'s verdict), never as right');
  const why = async (c2: unknown, a: unknown = '5', who = 's1', at = NOW + 1000) => { const r = await creditExercise(t.db, SECRET, who, c2, a, at); return r.credited ? 'credited' : r.why; };
  assert.equal(await why({ ...claim, seed: c.seed + 1 }), 'bad_signature', 'a different seed (an easier problem)');
  assert.equal(await why({ ...claim, kind: 'comparing' }), 'bad_signature', 'another exercise');
  assert.equal(await why({ ...claim, issuedAt: c.issuedAt + 1 }), 'bad_signature');
  assert.equal(await why(claim, '5', 's2'), 'bad_signature', 'another learner\'s challenge');
  assert.equal(await why({ ...claim, sig: 'a'.repeat(32) }), 'bad_signature', 'a made-up signature');
  assert.equal(await why(claim, '5', 's1', NOW + CHALLENGE_TTL_MS + 1), 'expired');
  assert.equal(await why({ ...claim, issuedAt: NOW + 3_600_000 }), 'bad_signature');
  for (const bad of [null, undefined, 'x', {}, { ...claim, seed: -1 }, { ...claim, seed: 1.5 }, { ...claim, sig: 'zz' }, { ...claim, kind: 'nope' }, { ...claim, seed: 'x' }]) assert.equal(await why(bad), 'bad_claim', JSON.stringify(bad));
  assert.equal(await why(claim, 42), 'bad_claim', 'the answer must be text');
  assert.ok(!JSON.stringify(c).includes(SECRET));
  const other = (await issueChallenges('another-secret', 's1', 'rounding', 1, NOW))[0];
  assert.equal(await why({ kind: 'rounding', ...other }), 'bad_signature', 'signed with another secret');
});

test('a challenge counts ONCE: once an answer is stored for it, it is not credited again; challenges are fresh random seeds, ten at most per request', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const [c] = await issueChallenges(SECRET, 's1', 'comparing', 1, NOW);
  const claim = { kind: 'comparing', ...c };
  const first = await creditExercise(t.db, SECRET, 's1', claim, right('comparing', c.seed), NOW + 1);
  assert.ok(first.credited);
  if (first.credited) t.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, qkey, marked_by) VALUES ('s1', ?, ?, 5, 'math', 't', 1, 12, 0, ?, ?, 'server')", [first.task, first.section, NOW + 1, first.qkey]);
  const again = await creditExercise(t.db, SECRET, 's1', claim, right('comparing', c.seed), NOW + 2);
  assert.deepEqual([again.credited, !again.credited && again.why], [false, 'already_answered'], 'replaying the same challenge');
  const batch = await issueChallenges(SECRET, 's1', 'rounding', 500, NOW);
  assert.equal(batch.length, 10);
  assert.equal(new Set(batch.map((x) => x.seed)).size, 10);
  assert.equal(new Set(batch.map((x) => x.sig)).size, 10);
  assert.equal((await issueChallenges(SECRET, 's1', 'rounding', 0, NOW)).length, 1);
});

test('the attempts route marks an exercise from its own challenge, ignores the browser\'s task/subject/section/claim, and inserts it at most once, atomically', () => {
  const route = read('src/app/api/attempts/route.ts');
  assert.ok(route.includes('creditExercise(') && route.indexOf('creditExercise(') < route.indexOf('creditDecision('));
  assert.ok(route.includes('task = r.task;') && route.includes('subject = r.subject;') && route.includes('section = r.section;'), 'the exercise\'s own task, subject and section');
  assert.ok(route.includes('if (exercise) qkey = exercise.qkey;'));
  assert.ok(route.includes('isCorrect: exercise.isCorrect, markedBy: \'server\''), 'the server\'s verdict');
  assert.ok(/WHERE NOT EXISTS \(SELECT 1 FROM attempts WHERE student_id = \? AND qkey = \?\)/.test(route) && route.includes('res.meta.changes === 0'), 'atomic once');
  const ex = read('src/app/api/exercise/route.ts');
  assert.ok(ex.includes('verifyLiveSession') && ex.includes('allowDurable') && ex.includes("'Cache-Control': 'no-store'") && !/^export const (?!dynamic)/m.test(ex), 'signed-in learners only, limited, never cached, no stray route exports');
});

test('the six Grade 5 exercises build their problem from the server\'s seed (no Math.random in the problem), ask for challenges, and send the challenge with the answer', () => {
  const files: [string, ExerciseKind][] = [
    ['src/curriculum/grade5/term4/whole-numbers/Rounding.tsx', 'rounding'], ['src/curriculum/grade5/term4/whole-numbers/Comparing.tsx', 'comparing'], ['src/curriculum/grade5/term4/whole-numbers/PlaceValue.tsx', 'place-value'],
    ['src/curriculum/grade5/term4/mass/MassCalculations.tsx', 'mass-calc'], ['src/curriculum/grade5/term4/mass/ReadingScales.tsx', 'reading-scales'], ['src/curriculum/grade5/term4/mass/Conversions.tsx', 'conversions'],
  ];
  for (const [f, kind] of files) {
    const src = read(f);
    assert.ok(src.includes(`useExerciseChallenge('${kind}', !!student)`), `${f} asks for ${kind} challenges`);
    assert.ok(src.includes('seededRandom(t.seed)') && src.includes('challengeRef.current = t.challenge;'), `${f} builds the problem from the seed`);
    const gen = src.slice(src.indexOf('const generateProblem'), src.indexOf('const generateProblem') + 700);
    assert.ok(!/Math\.random/.test(gen), `${f}: the problem does not use Math.random`);
    assert.ok(/challengeRef\.current \? \{ challenge: challengeRef\.current, answer: /.test(src), `${f} sends the challenge with the answer`);
  }
  // the long-division tutor lets the learner pick their own numbers: it is a guided tool, not a marked exercise, so it is not recorded
  assert.ok(!/recordAttempt\(/.test(read('src/curriculum/grade5/term4/long-division/LongDivisionTutor.tsx')));
});

test('the recorder sends the challenge and the answer (and only the challenge: the browser\'s claim is not what is trusted)', async () => {
  const { createAttemptRecorder } = await import('../client/attemptRecorderCore');
  const sent: Record<string, unknown>[] = [];
  const rec = createAttemptRecorder('gr5-whole-numbers-t4', 'math', { signedIn: () => true, post: async (b) => { sent.push(b as never); return {}; }, onBadges: () => undefined, onRecorded: () => undefined });
  rec.record(true, 'rounding', undefined, undefined, undefined, { challenge: { kind: 'rounding', seed: 5, issuedAt: NOW, sig: 'a'.repeat(32) }, answer: '1 200' });
  assert.deepEqual(sent[0].exercise, { kind: 'rounding', seed: 5, issuedAt: NOW, sig: 'a'.repeat(32) });
  assert.equal(sent[0].answer, '1 200');
  assert.equal(sent[0].task, 'gr5-whole-numbers-t4');
});
