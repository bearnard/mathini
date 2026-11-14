import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb } from '../admin/testdb';
import { recordReviewAnswer, type ReviewDb } from './store';
import { sastDay } from './scheduler';

const sast = (d: number, h = 12) => Date.UTC(2026, 10, d, h - 2);

async function setup() {
  const t = await openTestDb();
  if (!t) return null;
  t.exec(`INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('s','C','h','s','d','r',6,1,1)`);
  const db: ReviewDb = {
    all: (sql, params) => t.db.all(sql, params) as never,
    run: async (sql, params) => { await t.db.batch([{ sql, params }]); },
  };
  const ans = (over: Partial<Parameters<typeof recordReviewAnswer>[1]> = {}) => ({ studentId: 's', qkey: 'aaaaaaaaaaaa', task: 'mains-electricity', subject: 'nst', section: 'x', grade: 6, isCorrect: false, now: sast(14), ...over });
  const rows = () => t.db.all<Record<string, number | null>>('SELECT * FROM review_items ORDER BY qkey');
  return { db, ans, rows };
}

test('a miss creates one row; a repeat miss updates it (no duplicates)', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.equal(await recordReviewAnswer(s.db, s.ans()), true);
  assert.equal(await recordReviewAnswer(s.db, s.ans({ now: sast(14, 18) })), true);
  const r = await s.rows();
  assert.equal(r.length, 1);
  assert.deepEqual([r[0].box, r[0].due_day, r[0].streak_correct, r[0].retired_at], [1, sastDay(sast(15)), 0, null]);
});

test('correct on a never-missed question, or with no qkey, or outside Grade 6, writes nothing', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.equal(await recordReviewAnswer(s.db, s.ans({ isCorrect: true })), false);
  assert.equal(await recordReviewAnswer(s.db, s.ans({ qkey: null })), false);
  assert.equal(await recordReviewAnswer(s.db, s.ans({ grade: 5 })), false);
  assert.equal((await s.rows()).length, 0);
});

test('miss then three on-time correct reviews retires it; early correct is ignored', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  await recordReviewAnswer(s.db, s.ans());
  assert.equal(await recordReviewAnswer(s.db, s.ans({ isCorrect: true, now: sast(14, 20) })), false); // same day: early
  await recordReviewAnswer(s.db, s.ans({ isCorrect: true, now: sast(15, 8) }));
  await recordReviewAnswer(s.db, s.ans({ isCorrect: true, now: sast(18, 8) }));
  let r = (await s.rows())[0];
  assert.deepEqual([r.box, r.streak_correct, r.retired_at], [3, 2, null]);
  await recordReviewAnswer(s.db, s.ans({ isCorrect: true, now: sast(25, 8) }));
  r = (await s.rows())[0];
  assert.equal(r.streak_correct, 3);
  assert.equal(r.retired_at, sast(25, 8));
});

test('rows are per learner and per question', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  await recordReviewAnswer(s.db, s.ans());
  await recordReviewAnswer(s.db, s.ans({ qkey: 'bbbbbbbbbbbb' }));
  assert.equal((await s.rows()).length, 2);
});
