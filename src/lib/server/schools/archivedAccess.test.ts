import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, NOW, newTestId } from './testDb';
import { archiveClass, createClass, getClass, joinClass, listClasses, regenerateCode, removeMember } from './classes';
import { archiveScope, createScope, listScopes } from './scopes';
import { buildClassProgress } from './classProgress';
import { loadLearnerDetail } from './learnerDetail';
import { joinNotices, markJoinsSeen } from './notices';
import { buildSchoolProgress } from './schoolAdmins';

// Privacy: once a class is archived the teacher gets nothing about its learners, and the class stays in the list only as "archived".
test('an archived class gives its teacher no roster, progress, learner detail or learner count, on every teacher path', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const teacher = addTeacher(t, 't1@example.invalid').userId;
  const r = await createClass(t.db, teacher, { name: '6B Natural Sciences', grade: 6, subjects: ['nst'] }, NOW, newTestId);
  assert.ok(r.ok);
  const c = (r as Extract<typeof r, { ok: true }>).class;
  const sid = addStudent(t, { id: 'student-archived-0001', nickname: 'Zed' });
  await joinClass(t.db, sid, c.joinCode, NOW);
  const scope = await createScope(t.db, teacher, c.id, { subject: 'nst', title: 'Term test', tasks: [], examDate: new Date(NOW + 5 * 86_400_000).toISOString().slice(0, 10) }, NOW, newTestId);

  // While active everything works (so the refusals below are caused by archiving, not by a bad fixture).
  assert.equal((await getClass(t.db, teacher, c.id))?.roster.length, 1);
  assert.equal((await listClasses(t.db, teacher))[0].members, 1);
  assert.ok((await buildClassProgress(t.db, teacher, c.id, undefined, NOW + 1000)).ok);
  assert.ok((await loadLearnerDetail(t.db, teacher, c.id, sid, NOW + 1000)).ok);
  assert.ok((await markJoinsSeen(t.db, teacher, c.id, NOW)).ok);
  assert.ok(Array.isArray(await listScopes(t.db, teacher, c.id)));
  void scope;

  assert.ok((await archiveClass(t.db, teacher, c.id, NOW + 5)).ok);

  assert.equal(await getClass(t.db, teacher, c.id), null, 'roster');
  const list = await listClasses(t.db, teacher);
  assert.equal(list.length, 1, 'still listed');
  assert.equal(list[0].status, 'archived');
  assert.equal(list[0].members, 0, 'no learner count');
  const prog = await buildClassProgress(t.db, teacher, c.id, undefined, NOW + 1000);
  assert.deepEqual(prog.ok ? null : prog.status, 404, 'class progress');
  const sch = await buildClassProgress(t.db, { schoolId: 'x' }, c.id, undefined, NOW + 1000);
  assert.equal(sch.ok, false, 'school-admin class progress');
  const det = await loadLearnerDetail(t.db, teacher, c.id, sid, NOW + 1000);
  assert.deepEqual(det.ok ? null : det.status, 404, 'learner detail');
  const seen = await markJoinsSeen(t.db, teacher, c.id, NOW);
  assert.deepEqual(seen.ok ? null : seen.status, 404, 'mark seen');
  assert.equal(await listScopes(t.db, teacher, c.id), null, 'scopes list');
  const mk = await createScope(t.db, teacher, c.id, { subject: 'nst', title: 'x', tasks: [], examDate: new Date(NOW + 86_400_000).toISOString().slice(0, 10) }, NOW, newTestId);
  assert.equal(mk.ok, false, 'create scope');
  const rm = await removeMember(t.db, teacher, c.id, sid, NOW);
  assert.deepEqual(rm.ok ? null : rm.status, 404, 'remove learner');
  const rg = await regenerateCode(t.db, teacher, c.id);
  assert.equal(rg.ok, false, 'new code');
  if (scope.ok) { const as = await archiveScope(t.db, teacher, c.id, scope.scope.id, NOW); assert.equal(as.ok, false, 'archive scope'); }
  const n = await joinNotices(t.db, teacher, NOW + 1000);
  assert.equal(n.total, 0, 'no join notices');
  const sp = await buildSchoolProgress(t.db, 'x', NOW);
  assert.ok(sp === null || sp.classes.length === 0, 'school overview');
  // The learner's own history is untouched.
  assert.equal((t.raw.prepare('SELECT COUNT(*) n FROM class_members WHERE left_at IS NULL').get() as { n: number }).n, 1);
});
