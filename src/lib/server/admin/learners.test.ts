import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, insertAttempt, insertEvent, type TestDb } from './testdb';
import { parseFilters } from './filters';
import { listLearners, learnersToCsv, csvCell, likePattern, learnerDetail, learnerPrivate, deleteLearner, type LearnerRow } from './learners';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0);
const DAY = 86_400_000;
const at = (daysAgo: number, mins = 0) => NOW - daysAgo * DAY + mins * 60_000;
const F = (q = 'range=30d') => parseFilters(new URLSearchParams(q), NOW);
const SKIP = 'node:sqlite is not available on this Node version';
async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}
const one = async (t: TestDb, sql: string, p: (string | number)[] = []) => (await t.db.all<{ n: number }>(sql, p))[0].n;
function seed(t: TestDb) {
  insertStudent(t, { id: 'a', created: at(40), name: 'lion_alice', grade: 6, consent: at(40) });
  insertStudent(t, { id: 'b', created: at(20), name: 'zebra_bob', grade: 7, consent: null });
  insertStudent(t, { id: 'c', created: at(5), name: 'owl_cara', grade: 6, consent: at(5) });
  t.exec(`UPDATE students SET school = 'Secret Primary', age = 11, last_seen_at = ? WHERE id = 'a'`, [at(3)]);
  for (let i = 0; i < 8; i++) insertAttempt(t, { student: 'a', ts: at(2), correct: i < 6, topic: 'fractions-t2', subject: 'grade6' });
  for (let i = 0; i < 4; i++) insertAttempt(t, { student: 'b', ts: at(2), correct: i < 1, topic: 'cells', subject: 'nst', grade: 7 });
  t.exec(`INSERT INTO student_xp (student_id, scope, xp, correct_count, total_count, updated_at) VALUES ('a','overall',250,6,8,1), ('b','overall',40,1,4,1)`);
  t.exec(`INSERT INTO student_badges (student_id, badge_id, earned_at) VALUES ('a','first-correct',1), ('a','streak-3',2), ('b','first-correct',3)`);
  for (const [stu, k] of [['a', 'k1'], ['a', 'k2'], ['a', 'k3'], ['b', 'k1']]) t.exec(`INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, created_at, updated_at) VALUES (?, ?, 't', 'nst', 1, 1, 1, 1)`, [stu, k]);
  insertEvent(t, { ts: at(1), device: 'da', session: 'sa', student: 'a', city: 'Pretoria', region: 'Gauteng', country: 'ZA', lat: -25.7, lon: 28.2 });
  insertEvent(t, { ts: at(0, -10), device: 'da', session: 'sa2', student: 'a', city: 'Cape Town', region: 'Western Cape', country: 'ZA', lat: -33.9, lon: 18.4 });
  insertEvent(t, { ts: at(1), device: 'db', session: 'sb', student: null, region: 'Gauteng', country: 'ZA' });
}

test('the list has one row per learner with computed figures; last city only comes from consented events', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const { total, learners } = await listLearners(t.db, F(), { sort: 'nickname', dir: 'asc' });
    assert.equal(total, 3);
    assert.deepEqual(learners.map((l) => l.nickname), ['lion_alice', 'owl_cara', 'zebra_bob']);
    const a = learners[0];
    assert.deepEqual([a.grade, a.consented, a.questions, a.accuracy, a.xp, a.badges, a.lastCity], [6, true, 8, 0.75, 250, 2, 'Cape Town']);
    const b = learners[2];
    assert.deepEqual([b.consented, b.questions, b.accuracy, b.xp, b.badges, b.lastCity], [false, 4, 0.25, 40, 1, null]);
    const c = learners[1];
    assert.deepEqual([c.questions, c.accuracy, c.xp, c.badges, c.lastCity], [0, null, 0, 0, null]);
  });
});
test('last seen is the later of the stored value and the latest linked event', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const a = (await listLearners(t.db, F(), { search: 'alice' })).learners[0];
    assert.equal(a.lastSeen, at(0, -10));
    const b = (await listLearners(t.db, F(), { search: 'bob' })).learners[0];
    assert.equal(b.lastSeen, at(20)); // no events linked: the stored last_seen_at (= created)
  });
});
test('sorting: every key, both directions, with a stable tie-break', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const names = async (sort: string, dir: 'asc' | 'desc') => (await listLearners(t.db, F(), { sort: sort as never, dir })).learners.map((l) => l.nickname);
    assert.deepEqual(await names('nickname', 'desc'), ['zebra_bob', 'owl_cara', 'lion_alice']);
    assert.deepEqual(await names('xp', 'desc'), ['lion_alice', 'zebra_bob', 'owl_cara']);
    assert.deepEqual(await names('xp', 'asc'), ['owl_cara', 'zebra_bob', 'lion_alice']);
    assert.deepEqual(await names('questions', 'desc'), ['lion_alice', 'zebra_bob', 'owl_cara']);
    assert.deepEqual(await names('accuracy', 'desc'), ['lion_alice', 'zebra_bob', 'owl_cara']); // no answers sorts last
    assert.deepEqual(await names('accuracy', 'asc'), ['owl_cara', 'zebra_bob', 'lion_alice']);
    assert.deepEqual(await names('badges', 'desc'), ['lion_alice', 'zebra_bob', 'owl_cara']);
    assert.deepEqual(await names('first_seen', 'asc'), ['lion_alice', 'zebra_bob', 'owl_cara']);
    assert.deepEqual(await names('last_seen', 'desc'), ['lion_alice', 'owl_cara', 'zebra_bob']);
    assert.deepEqual((await names('grade', 'asc')).slice(2), ['zebra_bob']);
  });
});
test('an unknown sort key or direction falls back safely (no SQL from user input)', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const r = await listLearners(t.db, F(), { sort: 'name; DROP TABLE students' as never, dir: 'sideways' as never });
    assert.equal(r.learners.length, 3);
    assert.equal(await one(t, 'SELECT COUNT(*) AS n FROM students'), 3);
  });
});
test('search is by nickname, case-insensitive, and wildcards match literally', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    insertStudent(t, { id: 'd', created: at(2), name: '100%_fun' });
    insertStudent(t, { id: 'e', created: at(2), name: 'plain' });
    assert.deepEqual((await listLearners(t.db, F(), { search: 'ALICE' })).learners.map((l) => l.nickname), ['lion_alice']);
    assert.deepEqual((await listLearners(t.db, F(), { search: '%' })).learners.map((l) => l.nickname), ['100%_fun']);
    assert.deepEqual((await listLearners(t.db, F(), { search: '_fun' })).learners.map((l) => l.nickname), ['100%_fun']);
    assert.equal((await listLearners(t.db, F(), { search: 'a%e' })).learners.length, 0);
    assert.equal(likePattern(' 50%_x\\ '), '%50\\%\\_x\\\\%');
  });
});
test('searching by real name, school or login code finds nothing (they are not searchable)', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    for (const q of ['Real a', 'Secret Primary', 'TEST-a', 'Secret']) assert.equal((await listLearners(t.db, F(), { search: q })).learners.length, 0, q);
  });
});
test('grade filter limits learners; the date range and subject limit the question counts', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    assert.deepEqual((await listLearners(t.db, F('range=30d&grade=7'))).learners.map((l) => l.nickname), ['zebra_bob']);
    const inRange = (await listLearners(t.db, F('range=7d'), { search: 'alice' })).learners[0];
    assert.equal(inRange.questions, 8);
    const outOfRange = (await listLearners(t.db, F('range=custom&from=2026-10-01&to=2026-10-05'), { search: 'alice' })).learners[0];
    assert.equal(outOfRange.questions, 0);
    assert.equal(outOfRange.accuracy, null);
    const subj = (await listLearners(t.db, F('range=30d&subject=nst'), { search: 'alice' })).learners[0];
    assert.equal(subj.questions, 0);
  });
});
test('limit and total: the total counts all matches, the rows are capped', async (ctx) => {
  await withDb(ctx, async (t) => {
    for (let i = 0; i < 12; i++) insertStudent(t, { id: `x${i}`, created: at(1), name: `kid${i}` });
    const r = await listLearners(t.db, F(), { limit: 5 });
    assert.deepEqual([r.total, r.learners.length], [12, 5]);
  });
});
test('PRIVACY: the list never contains real name, school, age, login code or PIN data', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const json = JSON.stringify(await listLearners(t.db, F()));
    for (const secret of ['Real a', 'Real b', 'Secret Primary', 'TEST-a', 'pin_hash', 'real_name', 'login_code']) assert.ok(!json.includes(secret), secret);
  });
});
test('includePrivate (the explicit "include real names" CSV) adds real name and school, and nothing else sensitive', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const rows = (await listLearners(t.db, F(), { includePrivate: true, sort: 'nickname', dir: 'asc' })).learners;
    assert.deepEqual([rows[0].realName, rows[0].school], ['Real a', 'Secret Primary']);
    const json = JSON.stringify(rows);
    assert.ok(!json.includes('TEST-a') && !json.includes('pin_'));
  });
});

// ---- CSV ----
const row = (over: Partial<LearnerRow> = {}): LearnerRow => ({ id: 'x', nickname: 'kid', avatar: null, grade: 6, consented: true, firstSeen: Date.UTC(2026, 10, 1, 10, 0), lastSeen: Date.UTC(2026, 10, 14, 8, 30), lastCity: 'Pretoria', questions: 10, accuracy: 0.7123, xp: 99, badges: 2, ...over });
test('csv: header, BOM, SAST timestamps, yes/no, accuracy to one decimal; no real names by default', () => {
  const csv = learnersToCsv([row()]);
  assert.ok(csv.startsWith('﻿'));
  const [head, line] = csv.slice(1).split('\r\n');
  assert.equal(head, 'nickname,grade,parent_agreement,first_seen_sast,last_seen_sast,last_city,questions,accuracy_percent,xp,badges');
  assert.equal(line, 'kid,6,yes,2026-11-01 12:00,2026-11-14 10:30,Pretoria,10,71.2,99,2');
  assert.ok(!head.includes('real_name') && !head.includes('school'));
});
test('csv: with names it adds real_name and school columns', () => {
  const csv = learnersToCsv([row({ realName: 'Alice A.', school: 'Sunrise, Primary' })], true);
  const [head, line] = csv.slice(1).split('\r\n');
  assert.ok(head.startsWith('nickname,real_name,school,grade'));
  assert.ok(line.startsWith('kid,Alice A.,"Sunrise, Primary",6'));
});
test('csv: commas, quotes and newlines are quoted and escaped', () => {
  assert.equal(csvCell('a,b'), '"a,b"');
  assert.equal(csvCell('say "hi"'), '"say ""hi"""');
  assert.equal(csvCell('two\nlines'), '"two\nlines"');
  assert.equal(csvCell(null), '');
  assert.equal(csvCell(42), '42');
});
test('csv: spreadsheet formula injection is neutralised (= + - @ tab CR)', () => {
  for (const evil of ['=HYPERLINK("http://evil","x")', '+1+1', '-2+3', '@SUM(A1)', '\tcmd', '\rcmd']) {
    const cell = csvCell(evil);
    assert.ok(cell.replace(/^"/, '').startsWith("'"), `${JSON.stringify(evil)} -> ${cell}`);
  }
  assert.equal(csvCell('safe-name'), 'safe-name');
  assert.equal(csvCell('a=b'), 'a=b');
  const csv = learnersToCsv([row({ nickname: '=1+1', lastCity: '@home' })]);
  assert.ok(csv.includes("'=1+1") && csv.includes("'@home"));
});
test('csv: no accuracy when there are no answers; empty list is just the header', () => {
  assert.ok(learnersToCsv([row({ accuracy: null, questions: 0 })]).includes(',0,,99,2'));
  assert.equal(learnersToCsv([]).split('\r\n').length, 2);
});

// ---- detail ----
function walkKeys(v: unknown, out: Set<string> = new Set()): Set<string> {
  if (Array.isArray(v)) v.forEach((x) => walkKeys(x, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { out.add(k); walkKeys(x, out); }
  return out;
}
test('detail: unknown learner is null', async (ctx) => {
  await withDb(ctx, async (t) => assert.equal(await learnerDetail(t.db, 'nope', F()), null));
});
test('PRIVACY: detail contains no real name, school, age, login code or PIN anywhere', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const d = await learnerDetail(t.db, 'a', F());
    const keys = walkKeys(d);
    for (const bad of ['realName', 'real_name', 'school', 'age', 'login_code', 'loginCode', 'pin_hash', 'pin_salt', 'pin']) assert.ok(!keys.has(bad), bad);
    const json = JSON.stringify(d);
    for (const secret of ['Real a', 'Secret Primary', 'TEST-a']) assert.ok(!json.includes(secret), secret);
  });
});
test('detail: profile, totals, consent, xp, badges', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const d = (await learnerDetail(t.db, 'a', F()))!;
    assert.deepEqual([d.nickname, d.grade, d.xp, d.totals], ['lion_alice', 6, 250, { questions: 8, correct: 6 }]);
    assert.equal(d.consent.agreedAt, at(40));
    assert.deepEqual(d.badges.map((b) => b.id), ['streak-3', 'first-correct']);
    assert.equal((await learnerDetail(t.db, 'b', F()))!.consent.agreedAt, null);
  });
});
test('detail: daily accuracy is zero-filled across the range and respects it', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    const d = (await learnerDetail(t.db, 'a', F('range=7d')))!;
    assert.equal(d.accuracy.length, 7);
    assert.equal(d.accuracy.reduce((n, x) => n + x.questions, 0), 8);
    assert.deepEqual(d.accuracy.filter((x) => x.questions > 0).map((x) => [x.questions, x.correct]), [[8, 6]]);
    const narrow = (await learnerDetail(t.db, 'a', F('range=custom&from=2026-10-01&to=2026-10-03')))!;
    assert.equal(narrow.accuracy.reduce((n, x) => n + x.questions, 0), 0);
    assert.equal(narrow.totals.questions, 8); // all-time totals are not range-limited
  });
});
test('detail: topics, and weak sections need 4+ answers under 60%', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'w', created: at(40), consent: 1 });
    for (let i = 0; i < 4; i++) insertAttempt(t, { student: 'w', ts: at(1), correct: i === 0, topic: 'geometry-t3', section: 'angles' }); // 25%, 4 answers: weak
    for (let i = 0; i < 3; i++) insertAttempt(t, { student: 'w', ts: at(1), correct: false, topic: 'geometry-t3', section: 'shapes' }); // 3 answers: too few
    for (let i = 0; i < 5; i++) insertAttempt(t, { student: 'w', ts: at(1), correct: i < 4, topic: 'fractions-t2', section: 'adding' }); // 80%: fine
    for (let i = 0; i < 5; i++) insertAttempt(t, { student: 'w', ts: at(1), correct: i < 3, topic: 'fractions-t2', section: 'dividing' }); // exactly 60%: not below
    const d = (await learnerDetail(t.db, 'w', F()))!;
    assert.deepEqual(d.weakSections.map((s) => [s.task, s.section, s.questions, s.correct]), [['geometry-t3', 'angles', 4, 1]]);
    assert.deepEqual(d.topics.map((x) => [x.task, x.questions]), [['fractions-t2', 10], ['geometry-t3', 7]]);
  });
});
test('detail: locations, devices and the timeline come only from events linked to this learner', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    insertEvent(t, { ts: at(2), device: 'da', session: 'x', student: 'a', city: 'Pretoria', region: 'Gauteng', country: 'ZA', deviceClass: 'desktop', browser: 'Firefox', os: 'Linux', type: 'topic_open', topic: 'cells', subject: 'nst', grade: 7 });
    const d = (await learnerDetail(t.db, 'a', F()))!;
    assert.deepEqual(d.locations.map((l) => [l.city, l.events]), [['Cape Town', 1], ['Pretoria', 2]]);
    assert.deepEqual(d.devices.map((x) => [x.device, x.browser, x.events]).sort(), [['desktop', 'Firefox', 1], ['mobile', 'Chrome', 2]]);
    assert.equal(d.timeline.length, 3);
    assert.deepEqual(d.timeline.map((x) => x.ts), [...d.timeline.map((x) => x.ts)].sort((p, q) => q - p));
    const b = (await learnerDetail(t.db, 'b', F()))!;
    assert.deepEqual([b.locations.length, b.timeline.length], [0, 0]);
  });
});
test('detail: the timeline is capped at 80 events and ignores admin rows', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'busy', created: at(40), consent: 1 });
    for (let i = 0; i < 100; i++) insertEvent(t, { ts: at(1, i), device: 'dx', session: 's', student: 'busy' });
    insertEvent(t, { ts: at(1), type: 'admin_delete', device: 'admin', session: 'admin', student: 'busy' });
    const d = (await learnerDetail(t.db, 'busy', F()))!;
    assert.equal(d.timeline.length, 80);
    assert.ok(d.timeline.every((x) => x.type !== 'admin_delete'));
  });
});

// ---- private details ----
test('private details: real name, school and age for one learner only; null for unknown', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    assert.deepEqual(await learnerPrivate(t.db, 'a'), { realName: 'Real a', school: 'Secret Primary', age: 11 });
    assert.equal(await learnerPrivate(t.db, 'nope'), null);
  });
});

// ---- delete ----
test('delete: a wrong or missing confirmation changes nothing (400); unknown learner is 404', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    for (const bad of [undefined, null, '', 'lion_alic', 'LION_ALICE', ' lion_alice', 123]) {
      const r = await deleteLearner(t.db, 'a', bad, 'owner@example.com', NOW);
      assert.deepEqual([r.ok, !r.ok && r.status], [false, 400], String(bad));
    }
    assert.deepEqual(await deleteLearner(t.db, 'ghost', 'x', 'owner@example.com', NOW), { ok: false, status: 404, error: 'Learner not found' });
    assert.equal(await one(t, 'SELECT COUNT(*) AS n FROM students'), 3);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM events WHERE type = 'admin_delete'`), 0);
  });
});
test('delete: removes the learner and everything linked to them, leaves everyone else, keeps anonymous device events', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    insertEvent(t, { ts: at(3), device: 'da', session: 'before-signup', student: null }); // same device while anonymous
    const r = await deleteLearner(t.db, 'a', 'lion_alice', 'owner@example.com', NOW);
    assert.deepEqual(r, { ok: true, deleted: { attempts: 8, events: 2, xp: 1, badges: 2, reviews: 3, reports: 0, runs: 0, topics: 0, parentLinks: 0, invites: 0, consents: 0, pinResets: 0, classMemberships: 0 } });
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM students WHERE id = 'a'`), 0);
    for (const tbl of ['attempts', 'student_xp', 'student_badges', 'events', 'review_items']) assert.equal(await one(t, `SELECT COUNT(*) AS n FROM ${tbl} WHERE student_id = 'a'`), 0, tbl);
    // others untouched
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM students`), 2);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM attempts WHERE student_id = 'b'`), 4);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM student_xp WHERE student_id = 'b'`), 1);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM student_badges WHERE student_id = 'b'`), 1);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM review_items WHERE student_id = 'b'`), 1);
    // anonymous events of that device stay (they are not linked to the person)
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM events WHERE session_id = 'before-signup'`), 1);
  });
});
test('delete: progress and family data go too (runs, topic measures, parent links, invites, consent record, PIN resets), and only for that learner', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    for (const id of ['a', 'b']) {
      t.exec("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, n_items) VALUES (?, ?, 'quiz', 6, 'nst', 'k', 'Quiz', 'open', 1, 5)", [`run-${id}`, id]);
      t.exec("INSERT INTO topic_progress (student_id, task, grade, subject, topic, attempts, correct, last20_n, days_practised, mastery, first_attempt_at, last_attempt_at, updated_at) VALUES (?, 'electric-circuits', 6, 'nst', 'electric-circuits', 5, 2, 5, 1, 'learning', 1, 2, 3)", [id]);
      t.exec("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES ('parent-1', ?, 'pin', 1)", [id]);
      t.exec("INSERT INTO child_invites (student_id, token_hash, created_at, expires_at) VALUES (?, ?, 1, 2)", [id, `hash-${id}`]);
      t.exec("INSERT INTO consent_events (student_id, user_id, action, notice_version, created_at) VALUES (?, 'parent-1', 'given', 'v', 1)", [id]);
      t.exec("INSERT INTO pin_resets (student_id, user_id, created_at) VALUES (?, 'parent-1', 1)", [id]);
      t.exec("INSERT INTO class_members (class_id, student_id, joined_at, notice_version) VALUES ('class-1', ?, 1, 'v')", [id]);
    }
    const r = await deleteLearner(t.db, 'a', 'lion_alice', 'owner@example.com', NOW);
    assert.ok(r.ok);
    if (r.ok) assert.deepEqual([r.deleted.runs, r.deleted.topics, r.deleted.parentLinks, r.deleted.invites, r.deleted.consents, r.deleted.pinResets, r.deleted.classMemberships], [1, 1, 1, 1, 1, 1, 1]);
    for (const tbl of ['runs', 'topic_progress', 'parent_links', 'child_invites', 'consent_events', 'pin_resets', 'class_members']) {
      assert.equal(await one(t, `SELECT COUNT(*) AS n FROM ${tbl} WHERE student_id = 'a'`), 0, `${tbl} of the deleted learner`);
      assert.equal(await one(t, `SELECT COUNT(*) AS n FROM ${tbl} WHERE student_id = 'b'`), 1, `${tbl} of the other learner stays`);
    }
    const audit = JSON.parse((await t.db.all<{ meta: string }>("SELECT meta FROM events WHERE type = 'admin_delete'"))[0].meta) as { rows: Record<string, number> };
    assert.deepEqual([audit.rows.runs, audit.rows.topics, audit.rows.parentLinks, audit.rows.invites, audit.rows.consents, audit.rows.pinResets, audit.rows.classMemberships], [1, 1, 1, 1, 1, 1, 1]);
  });
});
test('delete: one audit row (counts, admin email, time) with NO name, nickname or id, as a server-only event', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    await deleteLearner(t.db, 'a', 'lion_alice', 'owner@example.com', NOW);
    const rows = await t.db.all<Record<string, unknown>>(`SELECT * FROM events WHERE type = 'admin_delete'`);
    assert.equal(rows.length, 1);
    const a = rows[0];
    assert.deepEqual([a.device_id, a.session_id, a.student_id, a.ts], ['admin', 'admin', null, NOW]);
    assert.deepEqual(JSON.parse(a.meta as string), { rows: { students: 1, attempts: 8, events: 2, xp: 1, badges: 2, reviews: 3, reports: 0, runs: 0, topics: 0, parentLinks: 0, invites: 0, consents: 0, pinResets: 0, classMemberships: 0 }, by: 'owner@example.com', at: NOW });
    const text = JSON.stringify(a);
    for (const secret of ['lion_alice', 'Real a', 'Secret Primary', '"a"', 'TEST-a']) assert.ok(!text.includes(secret), secret);
    for (const col of ['city', 'country', 'lat', 'lon']) assert.equal(a[col], null);
  });
});
test('delete is all-or-nothing: if any step fails, nothing is deleted and no audit row is written', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    // Make the LAST delete (the students row) fail so the earlier deletes must roll back.
    t.raw.exec(`CREATE TRIGGER block_student_delete BEFORE DELETE ON students BEGIN SELECT RAISE(ABORT, 'blocked'); END;`);
    await assert.rejects(deleteLearner(t.db, 'a', 'lion_alice', 'owner@example.com', NOW));
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM attempts WHERE student_id = 'a'`), 8);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM events WHERE student_id = 'a'`), 2);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM student_badges WHERE student_id = 'a'`), 2);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM review_items WHERE student_id = 'a'`), 3);
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM events WHERE type = 'admin_delete'`), 0);
  });
});
test('delete twice: the second is a 404 and writes no second audit row', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    assert.equal((await deleteLearner(t.db, 'a', 'lion_alice', 'o@x.co', NOW)).ok, true);
    assert.deepEqual(await deleteLearner(t.db, 'a', 'lion_alice', 'o@x.co', NOW), { ok: false, status: 404, error: 'Learner not found' });
    assert.equal(await one(t, `SELECT COUNT(*) AS n FROM events WHERE type = 'admin_delete'`), 1);
  });
});
test('after a delete the learner is gone from the list and the dashboards ignore the audit row', async (ctx) => {
  await withDb(ctx, async (t) => {
    seed(t);
    await deleteLearner(t.db, 'a', 'lion_alice', 'o@x.co', NOW);
    assert.deepEqual((await listLearners(t.db, F())).learners.map((l) => l.nickname).sort(), ['owl_cara', 'zebra_bob']);
    assert.equal(await learnerDetail(t.db, 'a', F()), null);
    const { overview } = await import('./queries');
    const o = await overview(t.db, F(), NOW);
    assert.equal(o.tiles.visitors.value, 1); // only the anonymous device; the audit row (device "admin") is not a visitor
  });
});
