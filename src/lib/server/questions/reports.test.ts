import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { parseReportBody, submitReport, REPORT_LIMIT_PER_HOUR, REPORT_LIMIT_PER_DAY, type ReportInput } from './reports';
import { openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';

const TASK = 'earth-moon-movement';
const P = 'Which movement of Earth gives us day and night?';
const QK = makeQkey(TASK, P);
const seed = (t: TestD1) => t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt: P, options: ['Rotation', 'Orbit'], answer: 'Rotation', explanation: '', extra: {}, author: 'seed' }).join('\n'));
const input = (over: Partial<ReportInput> = {}): ReportInput => ({ task: TASK, reason: 'wrong_answer', note: null, qkey: QK, itemId: null, promptSnapshot: null, ...over });
const rows = (t: TestD1) => t.raw.prepare('SELECT * FROM question_reports ORDER BY id').all() as Record<string, unknown>[];

test('parseReportBody accepts a valid report and strips control characters from the note', () => {
  const r = parseReportBody({ task: TASK, reason: 'typo', note: '  spelling\u0000 of  "rotation"\n is off ', qkey: QK });
  assert.ok(r.ok);
  if (r.ok) { assert.equal(r.value.note, 'spelling of "rotation" is off'); assert.equal(r.value.reason, 'typo'); }
});

test('parseReportBody refuses bad reasons, long notes, a missing question, odd tasks and non-objects', () => {
  assert.equal(parseReportBody(null).ok, false);
  assert.equal(parseReportBody({ task: TASK, reason: 'rude', qkey: QK }).ok, false);
  assert.equal(parseReportBody({ task: TASK, reason: 'other', qkey: QK, note: 'x'.repeat(201) }).ok, false);
  assert.equal(parseReportBody({ task: TASK, reason: 'other', qkey: QK, note: 'x'.repeat(200) }).ok, true);
  assert.equal(parseReportBody({ task: TASK, reason: 'other' }).ok, false);
  assert.equal(parseReportBody({ task: TASK, reason: 'other', qkey: 'zzz' }).ok, false);
  assert.equal(parseReportBody({ task: '../x', reason: 'other', qkey: QK }).ok, false);
  assert.equal(parseReportBody({ task: TASK, reason: 'other', qkey: QK, note: 5 }).ok, false);
  const long = parseReportBody({ task: TASK, reason: 'other', qkey: QK, prompt: 'p'.repeat(900) });
  assert.ok(long.ok && long.value.promptSnapshot!.length === 300);
});

test('a report on a registered question stores the canonical id and the version shown, and never a snapshot or a name', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t);
  const r = await submitReport(t.db, 's1', input({ note: 'I think it is revolution', promptSnapshot: 'ignored' }), 1000);
  assert.deepEqual(r, { ok: true });
  const [row] = rows(t);
  assert.equal(row.question_id, QK);
  assert.ok(row.version_id);
  assert.equal(row.student_id, 's1');
  assert.equal(row.note, 'I think it is revolution');
  assert.equal(row.prompt_snapshot, null);
  assert.equal(row.status, 'open');
  assert.deepEqual(Object.keys(row).filter((k) => /name|nick|code|pin/i.test(k)), []);
});

test('a report on an UNREGISTERED question is keyed by its qkey and keeps the unverified snapshot', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const other = makeQkey('some-g9-task', 'What is 2+2?');
  await submitReport(t.db, 's1', input({ task: 'some-g9-task', qkey: other, promptSnapshot: 'What is 2+2?' }), 1000);
  const [row] = rows(t);
  assert.equal(row.question_id, other);
  assert.equal(row.version_id, null);
  assert.equal(row.prompt_snapshot, 'What is 2+2?');
});

test('a pool item reported by item id is registered on the fly and the report points at its question and version', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const id = Number(t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section) VALUES (?,?,?,?,?,?,?)').run('mains-electricity', 'What does a fuse do?', '["a","b"]', 'a', '', 1, 'general').lastInsertRowid);
  await submitReport(t.db, 's1', input({ task: 'mains-electricity', qkey: null, itemId: id }), 1000);
  const [row] = rows(t);
  assert.equal(row.question_id, makeQkey('mains-electricity', 'What does a fuse do?'));
  assert.ok(row.version_id);
});

test('the same learner repeating the same open report is idempotent; a different reason or learner adds a row', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t);
  await submitReport(t.db, 's1', input(), 1000);
  await submitReport(t.db, 's1', input(), 2000);
  assert.equal(rows(t).length, 1);
  await submitReport(t.db, 's1', input({ reason: 'typo' }), 3000);
  await submitReport(t.db, 's2', input(), 3000);
  assert.equal(rows(t).length, 3);
});

test('rate limit: the 11th report in an hour and the 31st in a day are refused with 429, per learner', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t);
  const reasons = ['wrong_answer', 'confusing', 'typo', 'not_in_syllabus', 'other'] as const;
  const now = 100 * 3_600_000;
  // 10 distinct reports within the hour (5 reasons x 2 questions)
  for (let i = 0; i < REPORT_LIMIT_PER_HOUR; i++) {
    const k = makeQkey(TASK, `Another question ${Math.floor(i / 5)}?`);
    const r = await submitReport(t.db, 's1', input({ qkey: k, reason: reasons[i % 5] }), now + i);
    assert.ok(r.ok, `report ${i}`);
  }
  const blocked = await submitReport(t.db, 's1', input({ reason: 'other', note: 'again' }), now + 20);
  assert.deepEqual(blocked, { ok: false, status: 429, error: 'You have sent a lot of reports. Please try again later.' });
  assert.equal((await submitReport(t.db, 's2', input(), now + 20)).ok, true, 'another learner is unaffected');
  assert.equal((await submitReport(t.db, 's1', input(), now + 3_700_000)).ok, true, 'allowed again after the hour');

  // daily cap
  const t2 = await openQuestionsDb(); if (!t2) return;
  for (let i = 0; i < REPORT_LIMIT_PER_DAY; i++) {
    t2.raw.prepare("INSERT INTO question_reports (question_id, task, student_id, reason, status, created_at) VALUES (?, 't', 's9', 'other', 'dismissed', ?)").run(`${i}`.padStart(12, '0'), now - 2 * 3_600_000 - i);
  }
  const day = await submitReport(t2.db, 's9', input(), now);
  assert.equal(day.ok, false);
  assert.equal((day as { status: number }).status, 429);
});
