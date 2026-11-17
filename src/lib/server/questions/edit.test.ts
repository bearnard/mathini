import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { resolveCanonicalId } from './store';
import { adminDbOf, openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';
import type { AdminDb } from '../admin/db';
import { decimalPolicyForTask, editQuestion, questionDetail, restoreVersion } from './edit';

const TASK = 'early-indigenous-medicine';
const EMAIL = 'owner@example.org';
const P = 'Which plant was used to treat burns in early medicine?';
const base = (over: Record<string, unknown> = {}) => ({
  expectedVersionId: 0, prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used for burns and skin problems.',
  sourceNote: 'checked against the lesson', changeKind: 'wording', acknowledgeWarnings: false, ...over,
});
const seed = (t: TestD1, prompt = P, source: 'curated' | 'ai' = 'curated', over: Partial<{ options: string[]; answer: string; kind: string; extra: Record<string, unknown> }> = {}) =>
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: over.kind ?? 'mcq', source, prompt, options: over.options ?? ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: over.answer ?? 'Aloe', explanation: 'Aloe was used for burns and skin problems.', extra: over.extra ?? {}, author: source === 'ai' ? 'ai' : 'seed' }).join('\n'));
const id = (prompt = P) => makeQkey(TASK, prompt);
const cur = (t: TestD1, prompt = P) => (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(id(prompt)) as { v: number }).v;
const count = (t: TestD1, table: string, where = '1=1') => (t.raw.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE ${where}`).get() as { n: number }).n;
const ok = (r: Awaited<ReturnType<typeof editQuestion>>) => { assert.equal(r.ok, true, JSON.stringify(r)); return r as Extract<typeof r, { ok: true }>; };
const status = (r: Awaited<ReturnType<typeof editQuestion>>) => (r.ok ? 200 : r.status);

async function setup(extra: Parameters<typeof seed>[1] = P, source: 'curated' | 'ai' = 'curated') {
  const t = await openQuestionsDb();
  if (!t) return null;
  seed(t, extra, source);
  return { t, db: adminDbOf(t), v: cur(t, extra) };
}

test('a good edit: new version, pointer, audit row, same id; the new wording resolves to the old id', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const r = ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, prompt: 'Which plant did early healers use on burns?', explanation: 'Aloe has been used on burns and skin problems for a very long time.' }), EMAIL, 1000));
  assert.equal(r.versionNo, 2);
  const q = s.t.raw.prepare('SELECT current_version_id AS v, source FROM questions WHERE id = ?').get(id()) as { v: number; source: string };
  assert.equal(q.v, r.versionId);
  assert.equal(q.source, 'curated');
  const v = s.t.raw.prepare('SELECT prompt, author, status, source_note, qkey FROM question_versions WHERE id = ?').get(r.versionId) as Record<string, string>;
  assert.deepEqual({ ...v }, { prompt: 'Which plant did early healers use on burns?', author: 'owner', status: 'approved', source_note: 'checked against the lesson', qkey: makeQkey(TASK, 'Which plant did early healers use on burns?') });
  const a = s.t.raw.prepare('SELECT from_version_id, to_version_id, change_kind, admin_email, reviews_reset FROM question_edits').all() as Record<string, unknown>[];
  assert.deepEqual(a.map((x) => ({ ...x })), [{ from_version_id: s.v, to_version_id: r.versionId, change_kind: 'wording', admin_email: EMAIL, reviews_reset: 0 }]);
  assert.equal(await resolveCanonicalId(s.t.db, makeQkey(TASK, 'Which plant did early healers use on burns?')), id());
});

test('the edit closes the question\'s open reports and flags (and only that question\'s)', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  seed(s.t, 'Another question about early medicine?');
  const rep = (qid: string, student: string) => s.t.raw.prepare("INSERT INTO question_reports (question_id, task, student_id, reason, status, created_at) VALUES (?, ?, ?, 'typo', 'open', 1)").run(qid, TASK, student);
  rep(id(), 's1'); rep(id(), 's2'); rep(id('Another question about early medicine?'), 's1');
  s.t.raw.prepare("INSERT INTO question_flags (question_id, version_id, kind, value, n, status, computed_at) VALUES (?, ?, 'too_hard', 0.1, 40, 'open', 1)").run(id(), s.v);
  ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 2000));
  assert.equal(count(s.t, 'question_reports', `question_id = '${id()}' AND status = 'actioned' AND resolved_at = 2000`), 2);
  assert.equal(count(s.t, 'question_reports', "status = 'open'"), 1);
  assert.equal(count(s.t, 'question_flags', "status = 'resolved'"), 1);
});

test('wording edits leave review boxes alone; a change of MEANING (chosen, or forced by a changed answer) resets the active ones and records how many', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const rev = (student: string, q: string, box: number, retired: number | null = null) => {
    s.t.raw.exec(`INSERT OR IGNORE INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('${student}', '${student}-c', 'h', 's', '${student}', 'n', 6, 1, 1)`);
    s.t.raw.prepare('INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, streak_correct, retired_at, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)').run(student, q, TASK, 'his', box, 1, 2, retired, 1, 1);
  };
  rev('a', id(), 3); rev('b', id(), 2); rev('c', id(), 3, 9); rev('a', 'other-key', 3);
  ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'Aloe has been used on burns and skin problems for a long time.' }), EMAIL, 10));
  assert.equal(count(s.t, 'review_items', 'box = 3'), 3, 'wording fix: untouched');
  const v2 = cur(s.t);
  // the key changes, but the editor says "wording": the answer change forces a reset anyway
  const r = ok(await editQuestion(s.db, id(), base({ expectedVersionId: v2, answer: 'Rubber', options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], explanation: 'Rubber is a stand-in answer used for this test question only.', sourceNote: 'key was wrong' }), EMAIL, 20));
  assert.equal(r.reviewsReset, 2);
  const boxes = s.t.raw.prepare('SELECT student_id, qkey, box, streak_correct FROM review_items ORDER BY student_id, qkey').all() as { student_id: string; qkey: string; box: number; streak_correct: number }[];
  assert.deepEqual(boxes.filter((b) => b.qkey === id()).map((b) => [b.student_id, b.box, b.streak_correct]), [['a', 1, 0], ['b', 1, 0], ['c', 3, 2]]);
  assert.equal(boxes.find((b) => b.qkey === 'other-key')!.box, 3);
  const a = s.t.raw.prepare("SELECT change_kind, reviews_reset FROM question_edits ORDER BY id DESC LIMIT 1").get() as { change_kind: string; reviews_reset: number };
  assert.deepEqual({ ...a }, { change_kind: 'meaning', reviews_reset: 2 });
});

test('input is validated: no reason, key not among the options, too few options, wrong kind of change, bad id', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const e = (over: Record<string, unknown>) => editQuestion(s.db, id(), base({ expectedVersionId: s.v, ...over }), EMAIL, 1);
  assert.equal(status(await e({ sourceNote: 'x' })), 400);
  assert.equal(status(await e({ answer: 'Not an option' })), 400);
  assert.equal(status(await e({ options: ['Aloe'] })), 400);
  assert.equal(status(await e({ changeKind: 'typo' })), 400);
  assert.equal(status(await e({ prompt: '' })), 400);
  assert.equal(status(await editQuestion(s.db, 'nothex', base({ expectedVersionId: s.v }), EMAIL, 1)), 404);
  assert.equal(status(await editQuestion(s.db, 'abcdefabcdef', base({ expectedVersionId: s.v }), EMAIL, 1)), 404);
  assert.equal(count(s.t, 'question_versions'), 1);
});

test('the quality checker BLOCKS reject-level problems and returns the findings; nothing is written', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const r = await editQuestion(s.db, id(), base({ expectedVersionId: s.v, options: ['Aloe', 'Aloe', 'Plastic', 'Cement'] }), EMAIL, 1);
  assert.equal(status(r), 422);
  assert.ok(!r.ok && r.findings?.some((f) => f.severity === 'reject' && f.code === 'duplicate_options'));
  const strong = await editQuestion(s.db, id(), base({ expectedVersionId: s.v, answer: 'The aloe plant, which grows wild on dry hillsides', options: ['The aloe plant, which grows wild on dry hillsides', 'Rubber', 'Plastic', 'Cement'] }), EMAIL, 2);
  assert.equal(status(strong), 422);
  assert.equal(count(s.t, 'question_versions'), 1);
  assert.equal(count(s.t, 'question_edits'), 0);
});

test('warn-level findings need an acknowledgement, which is then recorded in the audit row', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const edit = (ack: boolean) => editQuestion(s.db, id(), base({ expectedVersionId: s.v, answer: 'Aloe from the garden', options: ['Aloe from the garden', 'Rubber tyres', 'Plastic bags', 'Cement mix'], acknowledgeWarnings: ack }), EMAIL, 3);
  const first = await edit(false);
  assert.equal(status(first), 409);
  assert.ok(!first.ok && first.needsAcknowledgement === true && first.findings?.some((f) => f.severity === 'warn'));
  assert.equal(count(s.t, 'question_versions'), 1);
  const r = ok(await edit(true));
  assert.ok(r.warnings.length > 0);
  const a = s.t.raw.prepare('SELECT findings FROM question_edits').get() as { findings: string };
  assert.ok(JSON.parse(a.findings).some((f: { severity: string }) => f.severity === 'warn'));
});

test('a stale edit (someone edited first) and a retired question are refused', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 1));
  const stale = await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'A different explanation of the same fact about aloe.' }), EMAIL, 2);
  assert.equal(status(stale), 409);
  s.t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(id());
  assert.equal(status(await editQuestion(s.db, id(), base({ expectedVersionId: cur(s.t), explanation: 'Yet another version of the explanation text.' }), EMAIL, 3)), 409);
  assert.equal(count(s.t, 'question_versions'), 2);
});

test('only plain multiple-choice questions: other kinds and diagram items are refused; no change is refused', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Put these in order please');
  t.raw.prepare("UPDATE questions SET kind = 'order' WHERE id = ?").run(id('Put these in order please'));
  seed(t, 'Label the picture please', 'curated', { extra: { diagram: true } });
  seed(t);
  const db = adminDbOf(t);
  assert.equal(status(await editQuestion(db, id('Put these in order please'), base({ expectedVersionId: cur(t, 'Put these in order please'), prompt: 'Put these in order please' }), EMAIL, 1)), 400);
  assert.equal(status(await editQuestion(db, id('Label the picture please'), base({ expectedVersionId: cur(t, 'Label the picture please'), prompt: 'Label the picture please' }), EMAIL, 1)), 400);
  const same = await editQuestion(db, id(), base({ expectedVersionId: cur(t) }), EMAIL, 1);
  assert.equal(status(same), 400);
  assert.ok(!same.ok && same.error === 'Nothing has changed');
});

test('a new wording that is already an alias of another question (an older wording of it) is refused', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t); seed(t, 'Older wording of the other question?');
  const db = adminDbOf(t);
  const other = id('Older wording of the other question?');
  ok(await editQuestion(db, other, base({ expectedVersionId: cur(t, 'Older wording of the other question?'), prompt: 'Newer wording of the other question?' }), EMAIL, 1));
  const before = count(t, 'question_versions');
  const r = await editQuestion(db, id(), base({ expectedVersionId: cur(t), prompt: 'Older wording of the other question?' }), EMAIL, 2);
  assert.equal(status(r), 409);
  assert.equal(count(t, 'question_versions'), before);
});

test('copying the exact prompt of another live question is stopped by the checker (near duplicate)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t); seed(t, 'The other question in this topic?');
  const r = await editQuestion(adminDbOf(t), id(), base({ expectedVersionId: cur(t), prompt: 'The other question in this topic?' }), EMAIL, 1);
  assert.equal(status(r), 422);
  assert.ok(!r.ok && r.findings?.some((f) => f.code === 'near_duplicate'));
});

test('an AI-pool question that a human edits becomes curated', async (t0) => {
  const s = await setup(P, 'ai'); if (!s) return t0.skip('node:sqlite unavailable');
  ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 1));
  assert.equal((s.t.raw.prepare('SELECT source FROM questions WHERE id = ?').get(id()) as { source: string }).source, 'curated');
});

test('a concurrent edit between the checks and the batch makes the batch a no-op: nothing half-applied', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  s.t.raw.prepare("INSERT INTO question_reports (question_id, task, student_id, reason, status, created_at) VALUES (?, ?, 's1', 'typo', 'open', 1)").run(id(), TASK);
  const racing: AdminDb = {
    all: (sql, params) => s.db.all(sql, params),
    batch: async (statements) => {
      // somebody else's edit lands first
      s.t.raw.prepare("INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, author, status, created_at) VALUES (?, 2, ?, ?, '[\"Aloe\",\"Rubber\"]', 'Aloe', 'theirs', '{}', 'owner', 'approved', 5)").run(id(), id(), P);
      s.t.raw.prepare('UPDATE questions SET current_version_id = (SELECT MAX(id) FROM question_versions) WHERE id = ?').run(id());
      return s.db.batch(statements);
    },
  };
  const r = await editQuestion(racing, id(), base({ expectedVersionId: s.v, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 9);
  assert.equal(status(r), 409);
  assert.equal(count(s.t, 'question_versions'), 2, 'only theirs');
  assert.equal(count(s.t, 'question_edits'), 0, 'no audit row');
  assert.equal(count(s.t, 'question_reports', "status = 'open'"), 1, 'reports not closed');
});

// ---------- restore ----------
test('restore writes a NEW version that copies an older one, audited as a restore; wrong version or already-current is refused', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const v1 = s.v;
  const e = ok(await editQuestion(s.db, id(), base({ expectedVersionId: v1, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 1));
  const r = ok(await restoreVersion(s.db, id(), { expectedVersionId: e.versionId, versionId: v1, reason: 'the first wording was better' }, EMAIL, 2));
  assert.equal(r.versionNo, 3);
  const row = s.t.raw.prepare('SELECT explanation, author, source_note FROM question_versions WHERE id = ?').get(r.versionId) as { explanation: string; author: string; source_note: string };
  assert.equal(row.explanation, 'Aloe was used for burns and skin problems.');
  assert.match(row.source_note, /^restore of v1: the first wording was better$/);
  assert.equal(count(s.t, 'question_versions'), 3, 'nothing deleted');
  const a = s.t.raw.prepare("SELECT change_kind, reason FROM question_edits ORDER BY id DESC LIMIT 1").get() as { change_kind: string; reason: string };
  assert.deepEqual({ ...a }, { change_kind: 'restore', reason: 'the first wording was better' });
  assert.equal(status(await restoreVersion(s.db, id(), { expectedVersionId: r.versionId, versionId: v1, reason: 'again' }, EMAIL, 3)), 400);
  s.t.raw.exec("INSERT INTO questions (id, task, source, status, current_version_id, created_at) VALUES ('aaaaaaaaaaaa', 't', 'curated', 'active', NULL, 1)");
  assert.equal(status(await restoreVersion(s.db, id(), { expectedVersionId: r.versionId, versionId: 99999, reason: 'no such' }, EMAIL, 4)), 404);
});

test('restoring a different key resets the review boxes like a meaning edit', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const v1 = s.v;
  s.t.raw.exec("INSERT OR IGNORE INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('a', 'a-c', 'h', 's', 'a', 'n', 6, 1, 1)");
  const e = ok(await editQuestion(s.db, id(), base({ expectedVersionId: v1, answer: 'Rubber', explanation: 'Rubber is a stand-in answer used for this test question only.', sourceNote: 'tested' }), EMAIL, 1));
  s.t.raw.prepare('INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, streak_correct, created_at, updated_at) VALUES (?,?,?,?,3,1,2,1,1)').run('a', id(), TASK, 'his');
  const r = ok(await restoreVersion(s.db, id(), { expectedVersionId: e.versionId, versionId: v1, reason: 'the old key was right' }, EMAIL, 2));
  assert.equal(r.reviewsReset, 1);
});

// ---------- detail + policy ----------
test('questionDetail gives the current wording, the history newest first, and the audit trail; unknown ids give null', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  ok(await editQuestion(s.db, id(), base({ expectedVersionId: s.v, explanation: 'Aloe was used on burns and also for other skin problems.' }), EMAIL, 5));
  const d = (await questionDetail(s.db, id()))!;
  assert.equal(d.editable, true);
  assert.deepEqual(d.versions.map((v) => [v.versionNo, v.current]), [[2, true], [1, false]]);
  assert.equal(d.current.versionNo, 2);
  assert.equal(d.edits.length, 1);
  assert.equal(d.edits[0].by, EMAIL);
  assert.equal(await questionDetail(s.db, 'abcdefabcdef'), null);
  s.t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(id());
  assert.equal((await questionDetail(s.db, id()))!.editable, false);
});

test('decimal policy: Grade 6 maths rejects a decimal point, other maths warns, everything else is unchecked', () => {
  assert.equal(decimalPolicyForTask('gr6-capacity-t4'), 'reject');
  assert.equal(decimalPolicyForTask('early-indigenous-medicine'), undefined);
  assert.equal(decimalPolicyForTask('no-such-task'), undefined);
});
