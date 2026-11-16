import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, type SchoolsTestDb } from '../schools/testDb';
import { signSession } from '../session';
import { listSchoolsForAdmin, setSchoolDistrict } from '../schools/schoolAdmins';
import { refreshForRun } from '../progress/topicProgress';
import { refreshWeeklyPoints } from './points';
import { MIN_ACTIVE_LEARNERS, WEIGHTS, weekStartOf } from '../../shared/weeklyPoints';
import { handleAreaBoard, handleClassBoard, handleOverview, handleSchoolBoard, type LeaderboardDeps } from './http';

const SECRET = 'test-secret-test-secret';
const HOST = 'https://example.invalid';
// Wednesday 2026-11-18 12:00 SAST
const NOW = Date.UTC(2026, 10, 18, 10, 0, 0);
const WEEK = weekStartOf(NOW);
const req = (path: string, cookie?: string) => new Request(`${HOST}${path}`, { headers: cookie ? { cookie } : {} });
let cn = 0;

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const deps: LeaderboardDeps = { db: t.db, now: NOW, sessionSecret: SECRET };
  const learner = async (nick: string, real = `Real ${nick}`) => {
    const id = addStudent(t, { nickname: nick, real });
    t.raw.prepare('UPDATE students SET avatar = ?, school = ? WHERE id = ?').run(`/avatars/${nick}.webp`, 'Typed At Signup School', id);
    return { id, cookie: `pp_session=${await signSession(id, SECRET)}` };
  };
  const school = (name: string, o: { district?: string | null; province?: string } = {}) => {
    const teacher = addTeacher(t, `${name.replace(/\W/g, '')}${++cn}@example.invalid`, name);
    t.raw.prepare('UPDATE schools SET district = ?, province = ? WHERE id = ?').run(o.district ?? null, o.province ?? 'Western Cape', teacher.schoolId);
    return teacher;
  };
  const cls = (sch: { userId: string; schoolId: string }, name: string, status = 'active') => {
    const id = `00000000-0000-4000-a000-${String(++cn).padStart(12, '0')}`;
    t.raw.prepare('INSERT INTO classes (id, school_id, teacher_user_id, name, grade, join_code, status, created_at) VALUES (?, ?, ?, ?, 6, ?, ?, 1)').run(id, sch.schoolId, sch.userId, name, `CODE${cn}`, status);
    return id;
  };
  const join = (classId: string, studentId: string, left = false) => t.raw.prepare('INSERT INTO class_members (class_id, student_id, joined_at, notice_version, left_at) VALUES (?, ?, 1, ?, ?)').run(classId, studentId, 'v1', left ? 2 : null);
  const points = (studentId: string, p: number, answered = 1, week = WEEK) => t.raw.prepare('INSERT OR REPLACE INTO weekly_points (student_id, week_start, points, answered, updated_at) VALUES (?, ?, ?, ?, 1)').run(studentId, week, p, answered);
  return { t, deps, learner, school, cls, join, points };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const body = async (r: Response) => (await r.json()) as Record<string, any>;

async function classOf(s: S, nicks: [string, number][]) {
  const sch = s.school('Bay Primary', { district: 'Metro East', province: 'Western Cape' });
  const c = s.cls(sch, '6B NST');
  const people: Record<string, { id: string; cookie: string }> = {};
  for (const [n, p] of nicks) { people[n] = await s.learner(n); s.join(c, people[n].id); if (p >= 0) s.points(people[n].id, p); }
  return { sch, c, people };
}

test('class board: nickname, avatar, points and rank only; equal points share a rank; own row flagged', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { c, people } = await classOf(s, [['Zola', 80], ['Amy', 80], ['Thabo', 30], ['Lee', -1]]);
  const r = await handleClassBoard(req(`/api/leaderboard/class/${c}`, people.Thabo.cookie), s.deps, c);
  assert.equal(r.status, 200);
  const { board } = await body(r);
  assert.deepEqual(board.entries.map((e: any) => [e.nickname, e.rank, e.points, e.isMe]), [['Amy', 1, 80, false], ['Zola', 1, 80, false], ['Thabo', 3, 30, true]]);
  assert.deepEqual(Object.keys(board.entries[0]).sort(), ['avatar', 'isMe', 'nickname', 'points', 'rank']);
  assert.equal(board.myRank, 3);
  assert.equal(board.size, 4);
  const text = JSON.stringify(board);
  for (const leak of ['Real ', 'Typed At Signup', 'Bay Primary', people.Amy.id, 'correct', 'accuracy']) assert.ok(!text.includes(leak), `leaked ${leak}`);
});

test('a learner with no points still sees their own row, unranked', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { c, people } = await classOf(s, [['Zola', 80], ['Lee', -1]]);
  const { board } = await body(await handleClassBoard(req('/x', people.Lee.cookie), s.deps, c));
  assert.equal(board.myRank, null);
  assert.deepEqual(board.entries.map((e: any) => [e.nickname, e.points, e.isMe]), [['Zola', 80, false], ['Lee', 0, true]]);
});

test('class board refusals: signed out 401; stranger, former member, archived class, bad id, unknown id all 404', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { sch, c, people } = await classOf(s, [['Zola', 80]]);
  assert.equal((await handleClassBoard(req('/x'), s.deps, c)).status, 401);
  assert.equal((await handleClassBoard(req('/x', 'pp_session=garbage'), s.deps, c)).status, 401);
  const stranger = await s.learner('Stranger');
  assert.equal((await handleClassBoard(req('/x', stranger.cookie), s.deps, c)).status, 404);
  const other = s.cls(s.school('Other School'), 'Other');
  s.join(other, stranger.id);
  assert.equal((await handleClassBoard(req('/x', stranger.cookie), s.deps, c)).status, 404, 'member of another class is still refused');
  const left = await s.learner('Leaver'); s.join(c, left.id, true);
  assert.equal((await handleClassBoard(req('/x', left.cookie), s.deps, c)).status, 404);
  assert.equal((await handleClassBoard(req('/x', people.Zola.cookie), s.deps, 'not-a-uuid')).status, 404);
  assert.equal((await handleClassBoard(req('/x', people.Zola.cookie), s.deps, '00000000-0000-4000-a000-999999999999')).status, 404);
  assert.equal((await handleClassBoard(req('/x', people.Zola.cookie), s.deps, c)).status, 200);
  s.t.raw.prepare("UPDATE classes SET status = 'archived' WHERE id = ?").run(c);
  assert.equal((await handleClassBoard(req('/x', people.Zola.cookie), s.deps, c)).status, 404, 'archived class');
  void sch;
});

test('school board: learners of all active classes of the school, via teacher classes only; other schools and typed school text never count', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { sch, c, people } = await classOf(s, [['Zola', 80]]);
  const c2 = s.cls(sch, '6A'); const amy = await s.learner('Amy'); s.join(c2, amy.id); s.points(amy.id, 120);
  const c3 = s.cls(sch, 'Old', 'archived'); const gone = await s.learner('Gone'); s.join(c3, gone.id); s.points(gone.id, 500);
  const outsider = await s.learner('Outsider'); s.join(s.cls(s.school('Other School'), 'X'), outsider.id); s.points(outsider.id, 999);
  const typed = await s.learner('Typed'); s.points(typed.id, 700); // typed the school text at sign-up but is in no class
  const { board } = await body(await handleSchoolBoard(req('/x', people.Zola.cookie), s.deps, sch.schoolId));
  assert.deepEqual(board.entries.map((e: any) => e.nickname), ['Amy', 'Zola']);
  assert.equal(board.size, 2);
  assert.equal((await handleSchoolBoard(req('/x', outsider.cookie), s.deps, sch.schoolId)).status, 404);
  assert.equal((await handleSchoolBoard(req('/x', typed.cookie), s.deps, sch.schoolId)).status, 404);
  assert.equal((await handleSchoolBoard(req('/x', gone.cookie), s.deps, sch.schoolId)).status, 404, 'a learner only in an archived class');
  assert.equal((await handleSchoolBoard(req('/x'), s.deps, sch.schoolId)).status, 401);
  assert.equal((await handleSchoolBoard(req('/x', people.Zola.cookie), s.deps, 'nope')).status, 404);
  void c;
});

async function area(s: S, mine: { id: string; cookie: string }, q: string) {
  return handleAreaBoard(req(`/api/leaderboard/area?${q}`, mine.cookie), s.deps);
}
async function fill(s: S, sch: { userId: string; schoolId: string }, n: number, pts: number, tag: string) {
  const c = s.cls(sch, `${tag} class`);
  const ids: { id: string; cookie: string }[] = [];
  for (let i = 0; i < n; i++) { const l = await s.learner(`${tag}Kid${i}`, `${tag}Real${i}`); s.join(c, l.id); s.points(l.id, pts); ids.push(l); }
  return ids;
}

test('area boards rank SCHOOLS by average points per active learner, hide schools under the minimum, and hold no child data', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = s.school('Alpha School', { district: 'Metro East' });
  const b = s.school('Bravo School', { district: 'metro east' }); // same district, other spelling
  const tiny = s.school('Tiny School', { district: 'Metro East' });
  const far = s.school('Far School', { district: 'Overberg', province: 'Western Cape' });
  const north = s.school('North School', { district: 'Tshwane', province: 'Gauteng' });
  const A = await fill(s, a, 6, 50, 'A'); await fill(s, b, 10, 80, 'B'); await fill(s, tiny, MIN_ACTIVE_LEARNERS - 1, 999, 'T'); await fill(s, far, 6, 10, 'F'); await fill(s, north, 7, 500, 'N');
  const d = await body(await area(s, A[0], 'level=district'));
  assert.equal(d.available, true);
  assert.deepEqual(d.board.schools.map((x: any) => [x.rank, x.name, x.activeLearners, x.score, x.isMine]), [[1, 'Bravo School', 10, 80, false], [2, 'Alpha School', 6, 50, true]]);
  assert.equal(d.board.mine.rank, 2);
  const p = await body(await area(s, A[0], 'level=province'));
  assert.deepEqual(p.board.schools.map((x: any) => x.name), ['Bravo School', 'Alpha School', 'Far School']);
  for (const text of [JSON.stringify(d), JSON.stringify(p)]) {
    assert.ok(!/Kid\d|Real\d|Typed At Signup|stu-/.test(text), 'no child data');
    for (const row of JSON.parse(text).board.schools) assert.deepEqual(Object.keys(row).sort(), ['activeLearners', 'isMine', 'name', 'rank', 'score']);
  }
});

test('a school under the minimum gets its own "not ranked yet" row and is hidden from others; no district means unavailable', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const tiny = s.school('Tiny School', { district: 'Metro East' });
  const T = await fill(s, tiny, 3, 100, 'T');
  const big = s.school('Big School', { district: 'Metro East' }); await fill(s, big, 5, 20, 'G');
  const d = await body(await area(s, T[0], 'level=district'));
  assert.deepEqual(d.board.schools.map((x: any) => x.name), ['Big School']);
  assert.deepEqual(d.board.mine, { name: 'Tiny School', activeLearners: 3, score: null, rank: null, minActive: MIN_ACTIVE_LEARNERS });
  const none = s.school('No District School', { district: null }); const N = await fill(s, none, 6, 20, 'D');
  assert.deepEqual(await body(await area(s, N[0], 'level=district')), { available: false, reason: 'no-district' });
  assert.equal((await body(await area(s, N[0], 'level=province'))).available, true);
});

test('area refusals: signed out 401, bad level 404, a learner in no class 404, a school that is not theirs 404', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = s.school('Alpha School', { district: 'D' }); const A = await fill(s, a, 5, 10, 'A');
  const b = s.school('Bravo School', { district: 'D' });
  assert.equal((await handleAreaBoard(req('/api/leaderboard/area?level=district'), s.deps)).status, 401);
  assert.equal((await area(s, A[0], 'level=world')).status, 404);
  assert.equal((await area(s, A[0], '')).status, 404);
  const loner = await s.learner('Loner');
  assert.equal((await area(s, loner, 'level=province')).status, 404);
  assert.equal((await area(s, A[0], `level=district&school=${b.schoolId}`)).status, 404);
  assert.equal((await area(s, A[0], `level=district&school=${a.schoolId}`)).status, 200);
});

test('overview: lists only the learner\'s own classes and schools; a learner in no class gets personal bests only', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { c, people } = await classOf(s, [['Zola', 80]]);
  s.points(people.Zola.id, 200, 3, WEEK - 7 * 86_400_000);
  const day = (n: number) => NOW - n * 86_400_000;
  for (const n of [0, 1, 2]) s.t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at, marked_by) VALUES (?, 't', 'general', 6, 'math', 't', 1, ?, 'server')").run(people.Zola.id, day(n));
  const o = await body(await handleOverview(req('/x', people.Zola.cookie), s.deps));
  assert.deepEqual(o.classes, [{ id: c, name: '6B NST' }]);
  assert.equal(o.schools.length, 1);
  assert.deepEqual(o.personal, { weekPoints: 80, bestWeekPoints: 200, streakDays: 3 });
  assert.ok(!JSON.stringify(o).includes('Real '));
  const loner = await s.learner('Loner');
  const lo = await body(await handleOverview(req('/x', loner.cookie), s.deps));
  assert.deepEqual([lo.classes, lo.schools, lo.personal], [[], [], { weekPoints: 0, bestWeekPoints: 0, streakDays: 0 }]);
  assert.equal((await handleOverview(req('/x'), s.deps)).status, 401);
});

function attempt(t: SchoolsTestDb, sid: string, q: string, correct: boolean, at: number, o: { markedBy?: string | null; runId?: string | null } = {}) {
  t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at, qkey, marked_by, run_id) VALUES (?, 'tk', 'general', 6, 'math', 'tk', ?, ?, ?, ?, ?)")
    .run(sid, correct ? 1 : 0, at, q, o.markedBy === undefined ? 'server' : o.markedBy, o.runId ?? null);
}

test('refreshWeeklyPoints: server-marked only, repeats worth 0, review bonus, mock bonus, cached per week', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { id } = await s.learner('Zola');
  const t = s.t;
  attempt(t, id, 'q1', true, NOW - 3000); attempt(t, id, 'q1', true, NOW - 2000); // repeat: 0
  attempt(t, id, 'q2', false, NOW - 1000);
  attempt(t, id, 'q3', true, NOW - 900, { markedBy: 'client' }); // untrusted: 0
  attempt(t, id, 'q4', true, WEEK - 86_400_000); // last week
  t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, status, started_at, n_items) VALUES ('rev', ?, 'review', 6, 'math', 'spaced-review', 'open', ?, 5)").run(id, NOW - 5000);
  attempt(t, id, 'q5', true, NOW - 800, { runId: 'rev' });
  const mock = (rid: string, pct: number, at: number) => t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, status, started_at, finished_at, n_items, score_pct) VALUES (?, ?, 'mock_test', 6, 'math', 'term3', 'finished', ?, ?, 20, ?)").run(rid, id, at - 1000, at, pct);
  mock('m0', 50, WEEK - 86_400_000); mock('m1', 70, NOW - 100);
  const r = await refreshWeeklyPoints(s.deps.db, id, NOW);
  assert.equal(r?.points, WEIGHTS.newCorrect + WEIGHTS.reviewRemembered + WEIGHTS.mockBeatBest);
  const row = s.t.raw.prepare('SELECT points, answered FROM weekly_points WHERE student_id = ? AND week_start = ?').get(id, WEEK) as { points: number; answered: number };
  assert.deepEqual({ ...row }, { points: r!.points, answered: 4 });
  await refreshWeeklyPoints(s.deps.db, id, NOW); // idempotent
  assert.equal(s.t.raw.prepare('SELECT COUNT(*) AS n FROM weekly_points').get()!.n, 1);
});

test('topic_mastered: written only when a topic newly reaches Mastered, never for topics already Mastered', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const { id } = await s.learner('Zola'); const t = s.t;
  for (let i = 0; i < 12; i++) attempt(t, id, `q${i}`, true, NOW - (12 - i) * 7_200_000 - 86_400_000);
  await refreshForRun(s.deps.db, id, ['tk'], NOW);
  assert.equal((t.raw.prepare("SELECT mastery FROM topic_progress WHERE student_id = ? AND task = 'tk'").get(id) as { mastery: string }).mastery, 'mastered');
  const first = t.raw.prepare('SELECT first_mastered_at AS at FROM topic_mastered WHERE student_id = ?').all(id) as { at: number }[];
  assert.deepEqual(first.map((x) => x.at), [NOW]);
  await refreshForRun(s.deps.db, id, ['tk'], NOW + 5000); // already mastered: the moment stays
  assert.deepEqual((t.raw.prepare('SELECT first_mastered_at AS at FROM topic_mastered WHERE student_id = ?').all(id) as { at: number }[]).map((x) => x.at), [NOW]);
  // a learner whose topic was Mastered BEFORE the table existed: the row exists as mastered, so no moment is invented
  const old = await s.learner('Old');
  for (let i = 0; i < 12; i++) attempt(t, old.id, `q${i}`, true, NOW - (12 - i) * 7_200_000 - 86_400_000);
  t.raw.exec('DROP TABLE topic_mastered');
  await refreshForRun(s.deps.db, old.id, ['tk'], NOW); // table missing: progress still written
  assert.equal((t.raw.prepare("SELECT mastery FROM topic_progress WHERE student_id = ? AND task = 'tk'").get(old.id) as { mastery: string }).mastery, 'mastered');
});

test('admin sets and clears a school district; unknown school and bad input refused', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = s.school('Alpha School');
  assert.deepEqual(await setSchoolDistrict(s.deps.db, a.schoolId, '  Metro   East '), { ok: true, district: 'Metro East' });
  assert.equal((await listSchoolsForAdmin(s.deps.db))[0].district, 'Metro East');
  assert.deepEqual(await setSchoolDistrict(s.deps.db, a.schoolId, ''), { ok: true, district: null });
  assert.equal((await setSchoolDistrict(s.deps.db, '00000000-0000-4000-a000-000000000000', 'X')).ok, false);
  assert.equal((await setSchoolDistrict(s.deps.db, a.schoolId, 5)).ok, false);
});
