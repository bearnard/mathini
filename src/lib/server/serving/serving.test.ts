import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from '../questions/sql';
import { createVersion } from '../questions/store';
import { openQuestionsDb } from '../questions/testQuestionsDb';
import type { TestD1 } from '../testD1';
import { FLAG_TTL_MS, OFF, clearFlagCache, isServedFromD1, loadFlag, parseFlag, taskGrade } from './flags';
import { ID_TTL_MS, clearServedCache, fetchServedItems, pickIds, servePool } from './served';
import { resolveFromD1 } from './review';

beforeEach(() => { clearFlagCache(); clearServedCache(); });

const TASK = 'early-indigenous-medicine'; // a real Grade 6 slug
const setFlag = (t: TestD1, v: object | string) => t.raw.prepare("UPDATE serving_flags SET value = ? WHERE key = 'serve_from_d1'").run(typeof v === 'string' ? v : JSON.stringify(v));
const curated = (t: TestD1, prompt: string, over: Partial<{ options: string[]; answer: string; kind: string; extra: Record<string, unknown>; section: string; task: string }> = {}) =>
  t.raw.exec(registerQuestionSql({ task: over.task ?? TASK, section: over.section ?? 'general', kind: over.kind ?? 'mcq', source: 'curated', prompt, options: over.options ?? ['yes', 'no', 'maybe'], answer: over.answer ?? 'yes', explanation: 'because', extra: over.extra ?? {}, author: 'seed' }).join('\n'));
const pool = (t: TestD1, prompt: string, over: Partial<{ score: number | null; task: string; section: string }> = {}) => {
  const r = t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section, quality_score) VALUES (?,?,?,?,?,?,?,?)').run(over.task ?? TASK, prompt, '["a","b","c"]', 'a', 'because', 1, over.section ?? 'general', over.score === undefined ? null : over.score);
  const itemId = Number(r.lastInsertRowid);
  t.raw.exec(registerQuestionSql({ task: over.task ?? TASK, section: over.section ?? 'general', kind: 'mcq', source: 'ai', prompt, options: ['a', 'b', 'c'], answer: 'a', explanation: 'because', extra: {}, legacyItemId: itemId, author: 'ai' }).join('\n'));
  return itemId;
};
const qid = (prompt: string, task = TASK) => makeQkey(task, prompt);

// ---------- flag ----------
test('parseFlag: anything that is not the expected shape is OFF, and bad entries are dropped', () => {
  for (const bad of [null, undefined, '', 'nope', '[]', '42', 'null', '{"grades":"6"}']) assert.deepEqual(parseFlag(bad as string | null), OFF, String(bad));
  assert.deepEqual(parseFlag('{"grades":[6,"x",7.5],"tasks":["a",3,""],"exclude":["b"]}'), { grades: [6], tasks: ['a'], exclude: ['b'] });
});

test('isServedFromD1: exclude wins, then an explicit task, then the task grade; unknown tasks are never served by grade', () => {
  assert.equal(taskGrade(TASK), 6);
  assert.equal(taskGrade('no-such-task-slug'), null);
  assert.equal(isServedFromD1(OFF, TASK), false);
  assert.equal(isServedFromD1({ grades: [6], tasks: [], exclude: [] }, TASK), true);
  assert.equal(isServedFromD1({ grades: [7], tasks: [], exclude: [] }, TASK), false);
  assert.equal(isServedFromD1({ grades: [], tasks: [TASK], exclude: [] }, TASK), true);
  assert.equal(isServedFromD1({ grades: [6], tasks: [TASK], exclude: [TASK] }, TASK), false);
  assert.equal(isServedFromD1({ grades: [6], tasks: [], exclude: [] }, 'no-such-task-slug'), false);
});

test('every Grade 6 task slug is known to the flag by grade (so flipping grade 6 covers all of it)', async () => {
  const { GRADE6_BANKS } = await import('../../../curriculum/grade6/reviewBanks');
  // The nine Grade 6 History lessons hidden in Wave B (and the four lessons listed below) are out of the task index (nothing is practised or topped up for them) but their code banks stay for old review cards.
  const hidden = new Set(['what-is-history', 'historical-sources', 'investigating-community', 'timelines-change', 'british-take-cape', 'frontier-peoples', 'frontier-conflicts', 'trekboers-migration', 'ancient-medicine',
    // hidden invented lessons: three Geography lessons and the seasons lesson (not Grade 6 CAPS)
    'temperate-polar', 'vegetation-adaptations', 'migration-impact', 'day-night-seasons']);
  const missing = Object.keys(GRADE6_BANKS).filter((tk) => !hidden.has(tk) && taskGrade(tk) !== 6);
  assert.deepEqual(missing, []);
});

test('loadFlag: default row is OFF; flips are seen after the 30 s cache; a missing table or a D1 error is OFF and never throws', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  assert.deepEqual(await loadFlag(t.db, 1_000), OFF);
  setFlag(t, { grades: [6], tasks: [], exclude: [] });
  assert.deepEqual(await loadFlag(t.db, 1_000 + FLAG_TTL_MS - 1), OFF, 'still cached');
  assert.deepEqual(await loadFlag(t.db, 1_000 + FLAG_TTL_MS), { grades: [6], tasks: [], exclude: [] });
  clearFlagCache();
  t.raw.exec('DROP TABLE serving_flags'); // migration 0011 not applied yet
  assert.deepEqual(await loadFlag(t.db, 5), OFF);
});

// ---------- selection ----------
test('pickIds: curated first, then clean AI, then warn-level AI; respects count; never invents ids', () => {
  const rows = [
    ...Array.from({ length: 3 }, (_, i) => ({ id: `c${i}`, section: 's', source: 'curated' as const, clean: 1 })),
    ...Array.from({ length: 3 }, (_, i) => ({ id: `a${i}`, section: 's', source: 'ai' as const, clean: 1 })),
    ...Array.from({ length: 3 }, (_, i) => ({ id: `w${i}`, section: 's', source: 'ai' as const, clean: 0 })),
  ];
  const ids = pickIds(rows, 20);
  assert.equal(ids.length, 9);
  assert.deepEqual(ids.slice(0, 3).sort(), ['c0', 'c1', 'c2']);
  assert.deepEqual(ids.slice(3, 6).sort(), ['a0', 'a1', 'a2']);
  assert.deepEqual(ids.slice(6).sort(), ['w0', 'w1', 'w2']);
  assert.equal(pickIds(rows, 4).length, 4);
  assert.equal(new Set(ids).size, ids.length);
});

// ---------- serving ----------
test('served items carry the canonical id and the version; AI items keep their item_cache id, curated ones have none', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Curated question one?');
  const itemId = pool(t, 'Pool question one?');
  const items = await fetchServedItems(t.db, TASK, 20);
  assert.equal(items.length, 2);
  const c = items.find((i) => i.prompt === 'Curated question one?')!;
  const a = items.find((i) => i.prompt === 'Pool question one?')!;
  assert.equal(c.qid, qid('Curated question one?'));
  assert.equal(c.id, undefined);
  assert.equal(a.id, itemId);
  assert.ok(c.vid > 0 && a.vid > 0);
  assert.deepEqual(c.options, ['yes', 'no', 'maybe']);
  assert.equal(items[0].prompt, 'Curated question one?', 'curated first');
});

test('what is NOT served: retired, rejected AI rows, non-multiple-choice, diagram items, versions that are not approved, other tasks, other sections when filtered', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Keep me?');
  curated(t, 'Retire me?');
  curated(t, 'Order me', { kind: 'order' });
  curated(t, 'Diagram me?', { extra: { diagram: true } });
  curated(t, 'Other task?', { task: 'other-task' });
  curated(t, 'Other section?', { section: 'zzz' });
  pool(t, 'Rejected AI row?', { score: 0 });
  pool(t, 'Warn AI row?', { score: 50 });
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(qid('Retire me?'));
  curated(t, 'Proposed only?');
  t.raw.prepare("UPDATE question_versions SET status = 'proposed' WHERE question_id = ?").run(qid('Proposed only?'));
  const all = (await fetchServedItems(t.db, TASK, 40)).map((i) => i.prompt).sort();
  assert.deepEqual(all, ['Keep me?', 'Other section?', 'Warn AI row?']);
  clearServedCache();
  assert.deepEqual((await fetchServedItems(t.db, TASK, 40, 'zzz')).map((i) => i.prompt), ['Other section?']);
});

test('a curated question linked to a retired (score 0) pool row is still served: the quality filter is for AI rows only', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const itemId = pool(t, 'Seed copy?', { score: 0 });
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt: 'Linked curated?', options: ['a', 'b'], answer: 'a', explanation: '', extra: {}, author: 'seed' }).join('\n'));
  t.raw.prepare('UPDATE questions SET legacy_item_id = ? WHERE id = ?').run(itemId + 1000, qid('Linked curated?'));
  t.raw.prepare('INSERT INTO item_cache (id, task, prompt, options, answer, explanation, created_at, quality_score) VALUES (?,?,?,?,?,?,?,0)').run(itemId + 1000, TASK, 'Linked curated?', '["a","b"]', 'a', '', 1);
  const items = (await fetchServedItems(t.db, TASK, 40)).map((i) => i.prompt);
  assert.ok(items.includes('Linked curated?'));
  assert.ok(!items.includes('Seed copy?'));
});

test('an edit is served immediately (content is read by id), a retire only after the id cache expires', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Original wording?');
  const id = qid('Original wording?');
  assert.equal((await fetchServedItems(t.db, TASK, 20, undefined, 1_000))[0].prompt, 'Original wording?');
  const cur = t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(id) as { v: number };
  const r = await createVersion(t.db, { questionId: id, expectedVersionId: cur.v, fields: { prompt: 'Better wording?', options: ['yes', 'no'], answer: 'yes', explanation: 'fixed' }, author: 'owner', now: 2 });
  assert.equal(r.ok, true);
  const after = await fetchServedItems(t.db, TASK, 20, undefined, 1_500);
  assert.equal(after[0].prompt, 'Better wording?', 'new text at once');
  assert.equal(after[0].qid, id, 'same stable id');
  assert.notEqual(after[0].vid, cur.v);
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(id);
  assert.equal((await fetchServedItems(t.db, TASK, 20, undefined, 1_600)).length, 0, 'retired: the content query drops it at once');
  curated(t, 'Added later?');
  assert.equal((await fetchServedItems(t.db, TASK, 20, undefined, 1_700)).length, 0, 'a new question waits for the id cache');
  assert.equal((await fetchServedItems(t.db, TASK, 20, undefined, 1_000 + ID_TTL_MS)).length, 1, 'then it appears');
});

// ---------- the route helper ----------
test('FLAG OFF: servePool returns exactly what fetchPoolItems returned before, and ignores the questions table', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Only in questions?');
  pool(t, 'Pool one?'); pool(t, 'Pool two?', { score: 90 }); pool(t, 'Rejected?', { score: 0 });
  const { fetchPoolItems } = await import('../poolStore');
  const before = await fetchPoolItems(t.db, TASK, 20);
  const got = await servePool(t.db, TASK, 20);
  assert.equal(got.length, 2);
  assert.deepEqual(got.map((i) => i.prompt).sort(), before.map((i) => i.prompt).sort());
  assert.ok(got.every((i) => !('qid' in i)));
});

test('FLAG ON for the grade: served from D1 (curated first); a task with nothing registered, or any error, falls back to item_cache', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'From questions?');
  pool(t, 'Pool one?');
  setFlag(t, { grades: [6], tasks: [], exclude: [] });
  const on = await servePool(t.db, TASK, 20);
  assert.equal(on.length, 2);
  assert.ok(on.every((i) => 'qid' in i));
  // a Grade 6 task with only an unregistered pool row
  t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at) VALUES (?,?,?,?,?,?)').run('ecosystems', 'Unregistered?', '["a","b"]', 'a', '', 1);
  const fb = await servePool(t.db, 'ecosystems', 20);
  assert.deepEqual(fb.map((i) => i.prompt), ['Unregistered?']);
  assert.ok(!('qid' in fb[0]));
  // D1 trouble on the new path (questions table gone): still answers from item_cache
  t.raw.exec('DROP TABLE question_versions');
  clearServedCache();
  const err = await servePool(t.db, TASK, 20);
  assert.deepEqual(err.map((i) => i.prompt), ['Pool one?']);
});

test('exclude switches one task back to the old path while its grade stays on', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'From questions?');
  pool(t, 'Pool one?');
  setFlag(t, { grades: [6], tasks: [], exclude: [TASK] });
  const got = await servePool(t.db, TASK, 20);
  assert.deepEqual(got.map((i) => i.prompt), ['Pool one?']);
});

// ---------- review ----------
test('review: OFF gives nothing; ON resolves by canonical id, so an EDITED question is found with its new wording', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Review me?');
  const id = qid('Review me?');
  assert.deepEqual(await resolveFromD1(t.db, [{ qkey: id, task: TASK }]), {});
  setFlag(t, { grades: [6], tasks: [], exclude: [] });
  clearFlagCache();
  let got = await resolveFromD1(t.db, [{ qkey: id, task: TASK }]);
  assert.equal(got[id].prompt, 'Review me?');
  assert.equal(got[id].id, 0);
  const v = (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(id) as { v: number }).v;
  await createVersion(t.db, { questionId: id, expectedVersionId: v, fields: { prompt: 'Review me, reworded?', options: ['yes', 'no'], answer: 'yes', explanation: '' }, author: 'owner', now: 3 });
  got = await resolveFromD1(t.db, [{ qkey: id, task: TASK }]);
  assert.equal(got[id].prompt, 'Review me, reworded?', 'the schedule key (the original id) still resolves to the new text');
  assert.notEqual(makeQkey(TASK, 'Review me, reworded?'), id, 'which is exactly what the browser could not do by hashing');
});

test('review: retired questions, tasks that are not switched on, and unknown ids are not resolved; D1 errors give {}', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Gone?');
  curated(t, 'Elsewhere?', { task: 'ecosystems' });
  setFlag(t, { grades: [], tasks: [TASK], exclude: [] });
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(qid('Gone?'));
  const got = await resolveFromD1(t.db, [{ qkey: qid('Gone?'), task: TASK }, { qkey: qid('Elsewhere?', 'ecosystems'), task: 'ecosystems' }, { qkey: 'deadbeef0000', task: TASK }]);
  assert.deepEqual(got, {});
  t.raw.exec('DROP TABLE questions');
  clearFlagCache();
  assert.deepEqual(await resolveFromD1(t.db, [{ qkey: 'x', task: TASK }]), {});
});

test('review never resolves an order / label / explain question from D1 (it would be shown as plain multiple choice); those stay with the code bank', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Put these in order please', { kind: 'order', options: ['first', 'second', 'third'], answer: 'first' });
  curated(t, 'Explain why the Moon changes shape', { kind: 'explain' });
  curated(t, 'A normal multiple choice question?');
  setFlag(t, { grades: [6], tasks: [], exclude: [] });
  const ids = ['Put these in order please', 'Explain why the Moon changes shape', 'A normal multiple choice question?'].map((p) => qid(p));
  const got = await resolveFromD1(t.db, ids.map((qkey) => ({ qkey, task: TASK })));
  assert.deepEqual(Object.keys(got), [ids[2]]);
});

// ---------- teacher-verified preference (ADR 0003 section 4) ----------
test('pickIds: teacher-verified questions come first inside each band, and the others still follow (a preference, not a filter)', () => {
  const rows = [
    ...Array.from({ length: 6 }, (_, i) => ({ id: `c${i}`, section: 's', source: 'curated' as const, clean: 1, verified: i < 2 ? 1 : 0 })),
    ...Array.from({ length: 4 }, (_, i) => ({ id: `a${i}`, section: 's', source: 'ai' as const, clean: 1, verified: i === 3 ? 1 : 0 })),
  ];
  for (let k = 0; k < 20; k++) {
    const ids = pickIds(rows, 20);
    assert.deepEqual(ids.slice(0, 2).sort(), ['c0', 'c1']);
    assert.equal(ids.length, 10);
    assert.equal(ids[6], 'a3', 'verified AI row leads the AI band');
    assert.deepEqual(pickIds(rows, 2).sort(), ['c0', 'c1']);
  }
});

test('serving prefers the current version being verified; an edit afterwards makes it unverified; without the 0020 table serving still works', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const { readFileSync } = await import('node:fs');
  for (const p of ['Q one?', 'Q two?', 'Q three?', 'Q four?']) curated(t, p);
  // before 0020 exists: the plain query is used
  assert.equal((await fetchServedItems(t.db, TASK, 20)).length, 4);
  clearServedCache();
  t.raw.exec(readFileSync('migrations/0020_moderation.sql', 'utf8'));
  const cur = (p: string) => (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(qid(p)) as { v: number }).v;
  const verify = (p: string, version = cur(p)) => t.raw.prepare("INSERT OR REPLACE INTO question_verified (question_id, version_id, verified_at, via, verified_by) VALUES (?, ?, 1, 'review', 'owner')").run(qid(p), version);
  verify('Q three?'); verify('Q four?', cur('Q four?') + 99); // the second names a version that is not the current one: not verified
  for (let k = 0; k < 15; k++) {
    clearServedCache();
    const first: string = (await fetchServedItems(t.db, TASK, 1))[0].prompt;
    assert.equal(first, 'Q three?');
  }
  clearServedCache();
  assert.equal((await fetchServedItems(t.db, TASK, 20)).length, 4, 'nothing is excluded');
});

// ---------- review reads D1 whatever the practice flag says (#872) ----------
import { NOT_RETIRED_QUESTION_SQL } from '../review/due';

test('review with ignoreFlag: an EDITED question resolves from D1 even with the practice flag OFF or the grade not switched on; an excluded task is left to the code banks', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Which planet is closest to the Sun?');
  const id = qid('Which planet is closest to the Sun?');
  const v = (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(id) as { v: number }).v;
  await createVersion(t.db, { questionId: id, expectedVersionId: v, fields: { prompt: 'Which planet is nearest to the Sun?', options: ['Mercury', 'Venus'], answer: 'Mercury', explanation: 'Mercury orbits closest.' }, author: 'owner', now: 3 });
  // flag OFF: the practice path leaves it to the code bank, but the review reads D1
  assert.deepEqual(await resolveFromD1(t.db, [{ qkey: id, task: TASK }]), {});
  clearFlagCache();
  let got = await resolveFromD1(t.db, [{ qkey: id, task: TASK }], { ignoreFlag: true });
  assert.equal(got[id].prompt, 'Which planet is nearest to the Sun?', 'the current text, found by the stable id although the new wording hashes to another qkey');
  assert.notEqual(makeQkey(TASK, 'Which planet is nearest to the Sun?'), id);
  // grade 7 only switched on: still resolved for a Grade 6 task
  setFlag(t, { grades: [7], tasks: [], exclude: [] });
  clearFlagCache();
  got = await resolveFromD1(t.db, [{ qkey: id, task: TASK }], { ignoreFlag: true });
  assert.equal(Object.keys(got).length, 1);
  // the owner excluded this task: not resolved
  setFlag(t, { grades: [6], tasks: [], exclude: [TASK] });
  clearFlagCache();
  assert.deepEqual(await resolveFromD1(t.db, [{ qkey: id, task: TASK }], { ignoreFlag: true }), {});
});

test('review due set: a card whose question is retired in D1 is NOT due (the review endpoint and /progress share one predicate), an edited active one is', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  curated(t, 'Edited but active?');
  curated(t, 'Retired later?');
  t.raw.exec('PRAGMA foreign_keys = OFF');
  const ins = (k: string) => t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES ('s1', ?, ?, 'nst', 'general', 1, 1, 0, 1, 1)").run(k, TASK);
  ins(qid('Edited but active?'));
  ins(qid('Retired later?'));
  ins('0123456789ab'); // no such question in D1: the client decides (code bank), the server does not hide it
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(qid('Retired later?'));
  const due = (t.raw.prepare(`SELECT qkey FROM review_items WHERE student_id = 's1' AND retired_at IS NULL AND due_day <= 5 AND ${NOT_RETIRED_QUESTION_SQL} ORDER BY qkey`).all() as { qkey: string }[]).map((r) => r.qkey).sort();
  assert.deepEqual(due, [qid('Edited but active?'), '0123456789ab'].sort());
});

test('review end to end (#872): an edited question whose old qkey no longer matches ANY code bank still shows, from D1, with the flag OFF', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const { resolveCandidates } = await import('../../client/review/resolve');
  curated(t, 'Seen from above the north pole, which way do the planets orbit?', { options: ['Anticlockwise', 'Clockwise', 'It varies'], answer: 'Anticlockwise' });
  const id = qid('Seen from above the north pole, which way do the planets orbit?');
  const v = (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(id) as { v: number }).v;
  await createVersion(t.db, { questionId: id, expectedVersionId: v, fields: { prompt: 'Seen from above the Sun’s north pole, in which direction do all the planets orbit the Sun?', options: ['Anticlockwise', 'Clockwise', 'It varies'], answer: 'Anticlockwise', explanation: 'They all go the same way.' }, author: 'owner', now: 3 });
  const candidates = [{ qkey: id, task: TASK, subject: 'nst', section: 'general' }];
  const pool = await resolveFromD1(t.db, candidates, { ignoreFlag: true });
  const r = await resolveCandidates({ dueCount: 1, candidates, pool }, {}, 10); // no code bank at all: the old behaviour here was "gone" / nothing to show
  assert.equal(r.questions.length, 1);
  assert.match(r.questions[0].item.prompt, /Sun’s north pole/);
  assert.deepEqual(r.gone, []);
  // and the old way (flag OFF, no pool entry, no code bank) finds nothing, which is the bug
  const old = await resolveCandidates({ dueCount: 1, candidates, pool: await resolveFromD1(t.db, candidates) }, {}, 10);
  assert.equal(old.questions.length, 0);
});
