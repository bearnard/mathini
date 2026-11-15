import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ANONYMOUS_USER, deleteAdultAccount } from './deleteAccount';
import { handleDeleteAccount, handleMe, type AuthDeps } from './http';
import { lookupSession } from './sessions';
import { sha256Hex } from './crypto';
import { addAdult, addStudent, openParentsDb, type ParentsTestDb } from '../parents/testDb';

const NOW = 1_800_000_000_000;
const ORIGIN = 'https://scholar.hibbins.org';
const SACE = '98765432';

/** Two adults with a full set of rows each, so we can see that only one of them goes. */
async function world() {
  const x = await openParentsDb(); if (!x) return null;
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821', { name: 'Tiger Kid', consent: NOW - 5000, version: 'v1' });
  await addStudent(x, 'student-0002', 'EAGLE-1111', '1111', { name: 'Eagle Kid', consent: NOW - 5000, version: 'v1' });
  await addStudent(x, 'student-0003', 'LION-2222', '2222', { name: 'Lion Kid' });
  const mum = await addAdult(x, 'mum.private@example.com', ['parent', 'teacher']);
  const dad = await addAdult(x, 'dad.private@example.com', ['parent']);
  const mumPhone = await addAdult(x, 'mum.private@example.com'); // a second session for the same account (a second device)
  void mumPhone;
  for (const [u, s] of [[mum.userId, 'student-0001'], [mum.userId, 'student-0002'], [dad.userId, 'student-0002']] as const) {
    x.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, ?, 'pin', 1)").run(u, s);
  }
  const ev = x.raw.prepare("INSERT INTO consent_events (student_id, user_id, action, notice_version, created_at) VALUES (?, ?, ?, 'v1', ?)");
  ev.run('student-0001', mum.userId, 'given', NOW - 5000); ev.run('student-0002', mum.userId, 'given', NOW - 5000); ev.run('student-0002', dad.userId, 'given', NOW - 4000);
  x.raw.prepare('INSERT INTO pin_resets (student_id, user_id, created_at) VALUES (?, ?, ?)').run('student-0001', mum.userId, NOW - 3000);
  x.raw.prepare("INSERT INTO school_admins (user_id, school_id, appointed_by, appointed_at) VALUES (?, 'school-1', 'owner', 1)").run(mum.userId);
  x.raw.prepare("INSERT INTO school_admins (user_id, school_id, appointed_by, appointed_at) VALUES (?, 'school-1', 'owner', 1)").run(dad.userId);
  x.raw.prepare("INSERT INTO class_join_seen (user_id, class_id, seen_at) VALUES (?, 'class-x', 1)").run(mum.userId);
  x.raw.prepare('INSERT INTO pin_resets (student_id, user_id, created_at) VALUES (?, ?, ?)').run('student-0002', dad.userId, NOW - 3000);
  x.raw.prepare('INSERT INTO child_invites (student_id, token_hash, created_at, expires_at, used_at, used_by) VALUES (?, ?, 1, 2, 1, ?)').run('student-0001', 'h1', mum.userId);
  x.raw.prepare('INSERT INTO child_invites (student_id, token_hash, created_at, expires_at, used_at, used_by) VALUES (?, ?, 1, 2, 1, ?)').run('student-0002', 'h2', dad.userId);
  for (const u of [mum.userId, dad.userId]) {
    x.raw.prepare('INSERT INTO summary_prefs (user_id, unsubscribed_at, updated_at) VALUES (?, NULL, 1)').run(u);
    x.raw.prepare("INSERT INTO summary_sent (user_id, week, status, claimed_at) VALUES (?, '2026-11-15', 'sent', 1)").run(u);
  }
  x.raw.prepare("INSERT INTO teacher_applications (user_id, sace_number, school_name, status, submitted_at) VALUES (?, ?, 'Bay Primary', 'approved', 1)").run(mum.userId, SACE);
  x.raw.prepare("INSERT INTO teacher_applications (user_id, sace_number, school_name, status, submitted_at) VALUES (?, '11112222', 'Other School', 'pending', 1)").run(dad.userId);
  x.raw.prepare("INSERT INTO schools (id, name, created_at, created_by) VALUES ('sch1', 'Bay Primary', 1, 'admin')").run();
  const cls = x.raw.prepare("INSERT INTO classes (id, school_id, teacher_user_id, name, grade, join_code, status, created_at) VALUES (?, 'sch1', ?, ?, 6, ?, ?, 1)");
  cls.run('class-mum-1', mum.userId, '6B NST', 'ABCD2345', 'active'); cls.run('class-mum-2', mum.userId, 'Old class', 'WXYZ6789', 'archived'); cls.run('class-dad', dad.userId, '7A', 'HJKM3456', 'active');
  const mem = x.raw.prepare("INSERT INTO class_members (class_id, student_id, joined_at, notice_version) VALUES (?, ?, 1, 'v')");
  mem.run('class-mum-1', 'student-0001'); mem.run('class-mum-1', 'student-0002'); mem.run('class-mum-2', 'student-0003'); mem.run('class-dad', 'student-0003');
  const sc = x.raw.prepare("INSERT INTO exam_scopes (id, class_id, subject, grade, title, tasks, exam_date, created_by, created_at) VALUES (?, ?, 'nst', 6, 'T', '[]', '2026-12-01', ?, 1)");
  sc.run('scope-mum', 'class-mum-1', mum.userId); sc.run('scope-dad', 'class-dad', dad.userId);
  for (const e of ['mum.private@example.com', 'dad.private@example.com']) {
    x.raw.prepare('INSERT INTO magic_links (email, token_hash, created_at, expires_at) VALUES (?, ?, 1, 2)').run(e, `link-${e}`);
    x.raw.prepare('INSERT INTO auth_rate (key, window_start, count) VALUES (?, 1, 2)').run(`email:${await sha256Hex(e)}`);
  }
  const deps = (over: Partial<AuthDeps> = {}): AuthDeps => ({ db: x.db, mailer: { async send() {} }, now: NOW, siteUrl: ORIGIN, log: () => undefined, ...over });
  return { ...x, mum, dad, deps };
}
const n = (x: ParentsTestDb, sql: string, ...p: (string | number)[]) => (x.raw.prepare(sql).get(...p) as { n: number }).n;
const call = (cookie: string | undefined, confirm: unknown, action: string | null = 'account-delete', origin = ORIGIN) =>
  new Request(`${ORIGIN}/api/auth/delete`, { method: 'POST', headers: { origin, ...(action ? { 'x-auth-action': action } : {}), ...(cookie ? { cookie } : {}) }, body: JSON.stringify({ confirm }) });

test('deleting an account removes the adult and everything that identifies them, and leaves the other adult and the children alone', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = await deleteAdultAccount(w.db, w.mum.userId, NOW);
  assert.ok(r.ok);
  if (r.ok) assert.deepEqual(r.deleted, { sessions: 4, links: 2, classes: 2, members: 3, scopes: 1, applications: 1, schoolAdminships: 1, consentsAnonymised: 2, pinResetsAnonymised: 1, proposalsAnonymised: 0, commentsAnonymised: 0 });
  const gone = (sql: string) => assert.equal(n(w, sql, w.mum.userId), 0, sql);
  for (const sql of ['SELECT COUNT(*) AS n FROM users WHERE id = ?', 'SELECT COUNT(*) AS n FROM user_roles WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM sessions WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM parent_links WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM summary_prefs WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM summary_sent WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM teacher_applications WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM school_admins WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM class_join_seen WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM classes WHERE teacher_user_id = ?', 'SELECT COUNT(*) AS n FROM consent_events WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM pin_resets WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM exam_scopes WHERE created_by = ?', 'SELECT COUNT(*) AS n FROM child_invites WHERE used_by = ?']) gone(sql);
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM class_members WHERE class_id IN ('class-mum-1', 'class-mum-2')"), 0, 'the teacher\'s classes lose their members');
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM magic_links WHERE email = 'mum.private@example.com'"), 0);
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM auth_rate WHERE key = ?', `email:${await sha256Hex('mum.private@example.com')}`), 0);
  // the other adult is untouched
  for (const sql of ['SELECT COUNT(*) AS n FROM users WHERE id = ?', 'SELECT COUNT(*) AS n FROM user_roles WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM sessions WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM parent_links WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM summary_prefs WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM teacher_applications WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM school_admins WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM classes WHERE teacher_user_id = ?', 'SELECT COUNT(*) AS n FROM consent_events WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM pin_resets WHERE user_id = ?', 'SELECT COUNT(*) AS n FROM exam_scopes WHERE created_by = ?']) assert.ok(n(w, sql, w.dad.userId) >= 1, `dad: ${sql}`);
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM class_members WHERE class_id = 'class-dad'"), 1);
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM magic_links WHERE email = 'dad.private@example.com'"), 1);
  // the children and the consent already given stay
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM students'), 3);
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM students WHERE parent_consent_at IS NOT NULL'), 2, 'the children keep the consent that was given for them');
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM consent_events'), 3, 'the consent EVENTS stay');
  assert.deepEqual(w.raw.prepare("SELECT student_id, user_id, action FROM consent_events WHERE user_id = ? ORDER BY student_id").all(ANONYMOUS_USER).map((e) => Object.values(e)), [['student-0001', ANONYMOUS_USER, 'given'], ['student-0002', ANONYMOUS_USER, 'given']], 'but they no longer say who');
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM pin_resets WHERE user_id = 'deleted'"), 1);
  assert.equal(n(w, "SELECT COUNT(*) AS n FROM child_invites WHERE used_by IS NULL"), 1);
});

test('after deletion neither the address, the SACE number nor the user id is anywhere in the database, and the audit row holds only counts', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  await deleteAdultAccount(w.db, w.mum.userId, NOW);
  const tables = (w.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'").all() as { name: string }[]).map((t) => t.name);
  const dump = tables.map((t) => JSON.stringify(w.raw.prepare(`SELECT * FROM ${t}`).all())).join('\n');
  for (const secret of ['mum.private@example.com', SACE, w.mum.userId, await sha256Hex('mum.private@example.com')]) assert.ok(!dump.includes(secret), `still in the database: ${secret.slice(0, 12)}`);
  assert.ok(dump.includes('dad.private@example.com') && dump.includes('11112222'), 'the other adult\'s data is still there');
  const audit = w.raw.prepare("SELECT * FROM events WHERE type = 'account_delete'").all() as Record<string, unknown>[];
  assert.equal(audit.length, 1);
  assert.deepEqual([audit[0].device_id, audit[0].student_id, audit[0].ts], ['self', null, NOW]);
  const meta = JSON.parse(String(audit[0].meta)) as { rows: Record<string, number> };
  assert.deepEqual(meta.rows, { users: 1, sessions: 4, links: 2, classes: 2, members: 3, scopes: 1, applications: 1, schoolAdminships: 1, consentsAnonymised: 2, pinResetsAnonymised: 1, proposalsAnonymised: 0, commentsAnonymised: 0 });
});

test('an unknown account is 404 and changes nothing; deleting twice is harmless', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const before = n(w, 'SELECT COUNT(*) AS n FROM users');
  assert.deepEqual(await deleteAdultAccount(w.db, 'nobody', NOW), { ok: false, status: 404, error: 'Account not found' });
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM users'), before);
  assert.ok((await deleteAdultAccount(w.db, w.dad.userId, NOW)).ok);
  assert.equal((await deleteAdultAccount(w.db, w.dad.userId, NOW)).ok, false);
});

test('the request needs the action header, Origin, a signed-in adult, and their own address typed exactly; anything else deletes nothing', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const users = () => n(w, 'SELECT COUNT(*) AS n FROM users');
  assert.equal((await handleDeleteAccount(call(w.mum.cookie, 'mum.private@example.com', null), w.deps())).status, 403, 'no action header');
  assert.equal((await handleDeleteAccount(call(w.mum.cookie, 'mum.private@example.com', 'logout'), w.deps())).status, 403, 'the header names THIS action');
  assert.equal((await handleDeleteAccount(call(w.mum.cookie, 'mum.private@example.com', 'account-delete', 'https://evil.example'), w.deps())).status, 403, 'a foreign Origin');
  assert.equal((await handleDeleteAccount(call(undefined, 'mum.private@example.com'), w.deps())).status, 401, 'signed out');
  for (const bad of [undefined, null, '', 'wrong@example.com', 'dad.private@example.com', 'mum.private', 42, { a: 1 }]) {
    const res = await handleDeleteAccount(call(w.mum.cookie, bad), w.deps());
    assert.equal(res.status, 400, JSON.stringify(bad));
    assert.deepEqual(await res.json(), { error: 'The confirmation does not match your email address.' });
  }
  assert.equal(users(), 2, 'nothing was deleted');
  assert.ok(await lookupSession(w.db, w.mum.cookie.split('=')[1], NOW), 'and the session still works');
});

test('typing the address (any capitals, spaces around it) deletes the account, clears the cookie, and every device is signed out', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const res = await handleDeleteAccount(call(w.mum.cookie, '  Mum.Private@Example.com '), w.deps());
  assert.equal(res.status, 200);
  assert.match(res.headers.get('set-cookie') ?? '', /^pp_adult=; Path=\/; Max-Age=0; HttpOnly; Secure; SameSite=Lax$/);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  const body = await res.json() as { ok: boolean; deleted: Record<string, number> };
  assert.equal(body.ok, true);
  assert.equal(body.deleted.sessions, 4);
  assert.deepEqual(await (await handleMe(new Request(`${ORIGIN}/api/auth/me`, { headers: { cookie: w.mum.cookie } }), w.deps())).json(), { user: null, roles: [] }, 'the session is gone');
  assert.equal((await handleDeleteAccount(call(w.mum.cookie, 'mum.private@example.com'), w.deps())).status, 401, 'a second request has no session left');
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM users'), 1);
});

test('a failure rolls everything back: the batch is atomic, so the account is either all there or all gone', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const failing = { all: w.db.all.bind(w.db), batch: async () => { throw new Error('D1 unavailable'); } };
  const lines: string[] = [];
  const res = await handleDeleteAccount(call(w.mum.cookie, 'mum.private@example.com'), w.deps({ db: { ...failing, all: (async (sql: string, p?: never[]) => (/DELETE|UPDATE/.test(sql) ? [] : w.db.all(sql, p))) as typeof w.db.all, batch: failing.batch }, log: (l) => lines.push(l) }));
  assert.equal(res.status, 500);
  assert.match((await res.json() as { error: string }).error, /Nothing was deleted/);
  assert.ok(!lines.join('').match(/mum\.private|example\.com/), 'the log carries no address');
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM users'), 2);
});

test('the same address can sign up again later and starts with nothing from the old account', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  await deleteAdultAccount(w.db, w.mum.userId, NOW);
  const { signIn } = await import('./magicLink');
  const again = await signIn(w.db, 'mum.private@example.com', NOW + 1000);
  assert.ok(again.created && again.userId !== w.mum.userId);
  assert.deepEqual(w.raw.prepare('SELECT role FROM user_roles WHERE user_id = ?').all(again.userId).map((r) => Object.values(r)[0]), ['parent'], 'a fresh parent, no teacher role');
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM parent_links WHERE user_id = ?', again.userId), 0);
  assert.equal(n(w, 'SELECT COUNT(*) AS n FROM teacher_applications WHERE user_id = ?', again.userId), 0);
});

test('the account page asks twice: it lists what goes and what stays, needs the address typed, and the route is private', () => {
  const ui = fs.readFileSync('src/components/adultAuth/AccountPanel.tsx', 'utf8');
  for (const part of ['This cannot be undone', 'What stays:', 'Type your email address', 'Keep it', 'SACE number', "'X-Auth-Action': 'account-delete'", 'disabled={!matches']) assert.ok(ui.includes(part), part);
  assert.ok(ui.includes("onClick={() => setStep('confirm')}"), 'the first button only opens the confirmation');
  assert.equal((ui.match(/void go\(\)/g) ?? []).length, 1, 'one way to delete');
  assert.ok(ui.indexOf('void go()') > ui.indexOf('This cannot be undone'), 'and it is only inside the confirmation, after the list of what goes');
  assert.ok(!/localStorage|sessionStorage/.test(ui));
  assert.ok(fs.readFileSync('next.config.ts', 'utf8').includes("source: '/api/auth/:path*'"), '/api/auth/delete is covered by the private headers');
  assert.ok(fs.readFileSync('src/app/api/auth/delete/route.ts', 'utf8').includes('handleDeleteAccount'));
});

test('deleting a teacher anonymises their proposals, comments and decisions, withdraws open ones, and removes group membership and points', async (t0) => {
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const teacher = await addAdult(x, 'teach.private@example.com', ['teacher', 'moderator']);
  const other = await addAdult(x, 'other.private@example.com', ['teacher']);
  const ins = x.raw.prepare("INSERT INTO proposals (id, kind, question_id, task, group_key, proposer_user_id, reason, source_kind, source_ref, status, created_at, updated_at, decided_by_user) VALUES (?, 'retire', 'aaaaaaaaaaaa', 't', 'History|intermediate', ?, 'a reason here', 'caps', 'CAPS p1', ?, 1, 1, ?)");
  ins.run('p-open', teacher.userId, 'submitted', null);
  ins.run('p-done', teacher.userId, 'approved', null);
  ins.run('p-other', other.userId, 'approved', teacher.userId);
  x.raw.prepare('INSERT INTO group_moderators (group_key, user_id, appointed_by, appointed_at) VALUES (?, ?, ?, 1)').run('History|intermediate', teacher.userId, 'o');
  x.raw.prepare("INSERT INTO reputation_events (user_id, proposal_id, points, reason, created_at) VALUES (?, 'p-done', 10, 'x', 1)").run(teacher.userId);
  x.raw.prepare("INSERT INTO discussion_comments (id, question_id, user_id, body, created_at) VALUES ('c1', 'aaaaaaaaaaaa', ?, 'hello', 1)").run(teacher.userId);
  x.raw.exec("INSERT INTO questions (id, task, kind, source, status, created_at) VALUES ('aaaaaaaaaaaa', 't', 'mcq', 'curated', 'active', 1)");
  x.raw.prepare("INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, author, status, created_at) VALUES ('aaaaaaaaaaaa', 1, 'aaaaaaaaaaaa', 'q', '[]', 'a', ?, 'approved', 1)").run(`teacher:${teacher.userId}`);
  const r = await deleteAdultAccount(x.db, teacher.userId, NOW);
  assert.equal(r.ok, true);
  const one = (sql: string) => x.raw.prepare(sql).all().map((v) => ({ ...v }));
  assert.deepEqual(one("SELECT id, proposer_user_id AS u, status FROM proposals WHERE id <> 'p-other' ORDER BY id"), [{ id: 'p-done', u: ANONYMOUS_USER, status: 'approved' }, { id: 'p-open', u: ANONYMOUS_USER, status: 'withdrawn' }]);
  assert.deepEqual(one("SELECT decided_by_user AS d FROM proposals WHERE id = 'p-other'"), [{ d: ANONYMOUS_USER }]);
  assert.deepEqual(one("SELECT user_id AS u FROM discussion_comments"), [{ u: ANONYMOUS_USER }]);
  assert.deepEqual(one('SELECT author FROM question_versions'), [{ author: 'teacher' }]);
  assert.equal(one('SELECT * FROM group_moderators').length, 0);
  assert.equal(one('SELECT * FROM reputation_events').length, 0);
  assert.equal(JSON.stringify(one('SELECT * FROM proposals') ).includes(teacher.userId), false);
});
