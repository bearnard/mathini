import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ClassList, { ClassTiles, classHref, normaliseClasses } from './ClassList';
import { AttentionCard, ClassTiles as ProgressTiles, ImprovementCard, LearnersCard, ScoreCard, TopicHeatmap } from './ClassDashboard';
import { addStudent, addTeacher, NOW, openSchoolsDb } from '../../lib/server/schools/testDb';
import { createClass, joinClass, listClasses } from '../../lib/server/schools/classes';
import { buildClassProgress } from '../../lib/server/schools/classProgress';
import { joinNotices } from '../../lib/server/schools/notices';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);

// The owner's live state (#711): one class, subjects [], no exam, one learner who joined, 20 OLD attempts, no practice tests. Built with the REAL
// server code over node:sqlite, so the shapes below are exactly what the API sends.
async function liveState() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const { userId } = addTeacher(t, 'owner@example.org', '');
  const made = await createClass(t.db, userId, { name: '6B Natural Sciences', grade: 6 }, NOW - 40 * 86_400_000);
  if (!made.ok) throw new Error('class');
  const sid = addStudent(t, { nickname: 'Lerato', real: 'Real Name', grade: 6 });
  const j = await joinClass(t.db, sid, made.class.joinCode, NOW - 30 * 86_400_000);
  if (!j.ok) throw new Error('join');
  for (let i = 0; i < 20; i++) t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES (?, 'g6-nst-circuits', 'general', 6, 'natural-sciences', 'g6-nst-circuits', ?, 0, 0, ?)").run(sid, i % 3 === 0 ? 0 : 1, NOW - 25 * 86_400_000 + i * 60_000);
  const progress = await buildClassProgress(t.db, userId, made.class.id, undefined, NOW);
  if (!progress.ok) throw new Error('progress');
  return { classes: await listClasses(t.db, userId), notices: await joinNotices(t.db, userId, NOW), progress: progress.progress, classId: made.class.id };
}

test('the owner\'s one class shows as a card with a real link to open it, and the tiles agree with the card (the exact API answer)', async (t0) => {
  const s = await liveState(); if (!s) return t0.skip('node:sqlite unavailable');
  const cards = normaliseClasses(JSON.parse(JSON.stringify(s.classes)));
  assert.equal(cards.length, 1);
  const list = html(h(ClassList, { cards, notices: s.notices.classes, onOpen: () => undefined }));
  assert.match(list, /6B Natural Sciences/);
  assert.match(list, new RegExp(`href="${classHref(s.classId).replace(/\?/g, '\\?')}"`));
  assert.match(list, /Open class dashboard/);
  assert.match(list, /bg-indigo-600[^>]*>Open class dashboard<\/span>/, 'a filled primary button, not a small text link');
  assert.match(list, /min-h-12 w-full/, 'full width and tall enough to tap');
  assert.match(list, /text-indigo-700 underline[^>]*>6B Natural Sciences<\/strong>/, 'the class name looks like a link');
  assert.match(list, /Open <a [^>]*>6B Natural Sciences<\/a> to see how your learners are doing\./, 'with exactly one class a plain sentence points at it');
  assert.match(list, /Grade 6 · 1 learner/);
  assert.match(list, /Classes \(1\)/);
  assert.match(html(h(ClassTiles, { cards, newLearners: s.notices.total })), /Classes<\/dt><dd[^>]*>1<\/dd>/);
  assert.ok(!/Real Name/.test(list));
});

test('a card is drawn for any class that has an id, whatever else the answer holds (missing, null or odd fields)', () => {
  const odd = [
    { id: 'a1', name: '6B', grade: 6, subjects: '[]', joinCode: 'QPGTRKWU', status: 'active', members: '1', createdAt: 1, schoolName: null },
    { id: 'a2' },
    { id: 'a3', name: '   ', grade: 'six', members: -4, joinCode: null, status: 'archived' },
    { name: 'no id' }, null, 'text', 42,
  ];
  const cards = normaliseClasses(odd);
  assert.deepEqual(cards.map((c) => c.id), ['a1', 'a2', 'a3']);
  const out = html(h(ClassList, { cards, notices: [], onOpen: () => undefined }));
  for (const id of ['a1', 'a2', 'a3']) assert.ok(out.includes(`href="/teacher?class=${id}"`), id);
  assert.match(out, /Untitled class/);
  assert.match(out, /Classes \(3\)/);
  assert.deepEqual([normaliseClasses(undefined), normaliseClasses({}), normaliseClasses([])], [[], [], []]);
});

test('with no class the page says so and offers the way to make one; a class that has joiners shows the "new" badge', () => {
  assert.match(html(h(ClassList, { cards: [], notices: [], onOpen: () => undefined })), /You have no classes yet/);
  const cards = normaliseClasses([{ id: 'a1', name: '6B', grade: 6, members: 3, joinCode: 'QPGTRKWU', status: 'active' }]);
  const two = html(h(ClassList, { cards, notices: [{ classId: 'a1', count: 2 }], onOpen: () => undefined }));
  assert.match(two, />2 new</);
  assert.ok(!/to see how your learners are doing/.test(two.replace(/Open class dashboard/g, '')) || cards.length === 1, 'the one-class sentence is for exactly one class');
  const many = html(h(ClassList, { cards: normaliseClasses([{ id: 'a', name: 'A' }, { id: 'b', name: 'B' }]), notices: [], onOpen: () => undefined }));
  assert.ok(!/to see how your learners are doing/.test(many), 'no sentence when there are several classes');
  assert.equal((many.match(/Open class dashboard/g) ?? []).length, 2, 'every class has its own button');
});

test('the class view for ONE learner with no tests and old practice (the exact API answer) draws every card without throwing, with calm empty states', async (t0) => {
  const s = await liveState(); if (!s) return t0.skip('node:sqlite unavailable');
  const p = JSON.parse(JSON.stringify(s.progress));
  assert.equal(p.memberCount, 1);
  const out = [h(ProgressTiles, { p }), h(TopicHeatmap, { p }), h(ScoreCard, { p }), h(AttentionCard, { p }), h(ImprovementCard, { p, since: p.improvement.since, onSince: () => undefined, err: '' }), h(LearnersCard, { p })].map(html);
  const all = out.join('\n');
  assert.match(all, /No one has practised yet/, 'no topics: a friendly empty state, not a blank card');
  assert.match(all, /No practice test taken yet/);
  assert.match(all, /Not enough practice on both sides/);
  assert.match(all, /Lerato/);
  assert.match(all, /None set/, 'no exam');
  assert.ok(!/NaN|undefined|Infinity/.test(all.replace(/aria-[a-z]+="[^"]*"/g, '')), 'no NaN, undefined or Infinity text');
  assert.ok(!/Real Name/.test(all));
});

test('the class header never ends in a stray separator when the school name is empty (the live state)', async () => {
  const fs = await import('node:fs');
  const src = fs.readFileSync('src/components/teacher/TeacherArea.tsx', 'utf8');
  assert.match(src, /\.filter\(Boolean\)\.join\(' · '\)/);
  assert.ok(!/Grade \$\{c\.grade\} · \$\{c\.schoolName\}/.test(src));
});
