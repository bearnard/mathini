import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { signSession } from '../session';
import { RefusingMailer, type Mail, type Mailer } from '../adultAuth/mailer';
import { createLimiter } from '../adultAuth/rateLimit';
import { MOCK_PROGRESS } from '../../shared/progressMock';
import type { ProgressResponse } from '../../shared/progressTypes';
import { DEFAULT_MAX_OPS, MAX_PARENTS_PER_RUN, errorText, isSummaryDay, MAX_ATTEMPTS, budgetOf, runWeeklySummary, type SummaryDeps } from './summaryJob';
import { buildSummary, childLines, childWeekFrom, escapeHtml, isSendDay, LEGACY_TOKEN_UNTIL, makeUnsubscribeToken, sastDate, TOKEN_TTL_DAYS, verifyUnsubscribeToken, weekKey, type ChildWeek } from './summaryEmail';
import { handleSummaryPrefGet, handleSummaryPrefSet, handleUnsubscribe, type SummaryHttpDeps } from './summaryHttp';
import { addAdult, addStudent, openParentsDb, type ParentsTestDb } from './testDb';

const DAY = 86_400_000;
const SUN = Date.UTC(2026, 10, 15, 3, 30); // Sunday 15 November 2026, 05:30 in South Africa
const SECRET = 'summary-test-secret';
const ORIGIN = 'https://scholar.hibbins.org';
const WEEK = '2026-11-15';

// ---------- the week ----------

test('the week is the Sunday (South African time): Sunday, Monday and Tuesday share a key, and only those days send', () => {
  assert.deepEqual(sastDate(SUN), { date: '2026-11-15', weekday: 0 });
  assert.equal(weekKey(SUN), WEEK);
  assert.equal(weekKey(SUN + DAY), WEEK, 'Monday');
  assert.equal(weekKey(SUN + 2 * DAY), WEEK, 'Tuesday');
  assert.equal(weekKey(SUN + 6 * DAY), WEEK, 'the next Saturday');
  assert.equal(weekKey(SUN + 7 * DAY), '2026-11-22', 'the next Sunday starts a new week');
  assert.ok(isSendDay(SUN) && isSendDay(SUN + DAY) && isSendDay(SUN + 2 * DAY));
  for (let d = 3; d <= 6; d++) assert.ok(!isSendDay(SUN + d * DAY), `day ${d}`);
  // the South African day starts two hours before the UTC one
  assert.equal(sastDate(Date.UTC(2026, 10, 14, 22, 30)).weekday, 0, 'Saturday 22:30 UTC is already Sunday 00:30 in South Africa');
  assert.equal(sastDate(Date.UTC(2026, 10, 14, 21, 59)).weekday, 6);
});

// ---------- what it says ----------

const progress = (over: Partial<ProgressResponse> = {}): ProgressResponse => ({ ...JSON.parse(JSON.stringify(MOCK_PROGRESS)), displayName: 'Lerato', grade: 6, ...over });

test('a child\'s week: practice days, tests this week with the change, improving topics, topics needing attention, next step', () => {
  const p = progress();
  p.consistency = { daysPractisedLast14: 6, streakDays: 3 };
  p.tests = [
    { runId: 'r1', kind: 'mock_test', scopeKey: 'k', scopeLabel: 'Term 3 Mock Test', scorePct: 72, nCorrect: 18, nItems: 25, finishedAt: new Date(SUN - DAY).toISOString(), changeSinceLast: 8 },
    { runId: 'r0', kind: 'quiz', scopeKey: 'q', scopeLabel: 'Old quiz', scorePct: 50, nCorrect: 5, nItems: 10, finishedAt: new Date(SUN - 10 * DAY).toISOString(), changeSinceLast: null },
  ];
  p.subjects = [{ subject: 'nst', label: 'Natural Sciences', masteryPct: 60, level: 'getting_there', topics: [
    { task: 'a', label: 'Electric circuits', level: 'getting_there', accuracyPct: 70, attempts: 30, trend: [], changePoints: 12, practiseHref: '/app' },
    { task: 'b', label: 'Solar system', level: 'learning', accuracyPct: 46, attempts: 12, trend: [], changePoints: -4, practiseHref: '/app' },
    { task: 'c', label: 'Matter', level: 'learning', accuracyPct: 30, attempts: 20, trend: [], changePoints: 2, practiseHref: '/app' },
    { task: 'd', label: 'Untried topic', level: 'not_started', accuracyPct: null, attempts: 0, trend: [], changePoints: null, practiseHref: '/app' },
  ] }];
  p.nextStep = { kind: 'weak_topic', title: 'Practise Matter', reason: 'It is the weakest topic.', href: '/app', cta: 'Go' };
  const w = childWeekFrom(p, { days: 4, answers: 52 }, SUN);
  assert.deepEqual([w.name, w.grade, w.daysThisWeek, w.answersThisWeek, w.quiet], ['Lerato', 6, 4, 52, false]);
  assert.deepEqual(w.tests, [{ label: 'Term 3 Mock Test', scorePct: 72, changePoints: 8 }], 'only this week\'s tests');
  assert.deepEqual(w.improving, [{ label: 'Electric circuits', points: 12 }, { label: 'Matter', points: 2 }]);
  assert.deepEqual(w.attention.map((a) => a.label), ['Matter', 'Solar system'], 'weakest first; an untried topic is not "needs attention"');
  assert.deepEqual(w.nextStep, { title: 'Practise Matter', reason: 'It is the weakest topic.' });
  const lines = childLines(w).lines;
  assert.equal(lines[0], 'Practised on 4 of the last 7 days (52 answers).');
  assert.equal(lines[1], 'Tests this week: Term 3 Mock Test 72%, up 8 points since last time.');
  // Matter is in both measures (risen, still low): it appears once, in its own line; no topic is in two lists.
  assert.ok(lines.includes('Getting better: Electric circuits (up 12 points).'));
  assert.ok(lines.includes('Improving, but still needs practice: Matter (up 2 points, recent accuracy 30%).'));
  assert.ok(lines.includes('Needs attention: Solar system (recent accuracy 46%).'));
  assert.ok(lines.includes('Next step: Practise Matter. It is the weakest topic.'));
});

test('a quiet child, no tests and singular words read right; all caught up gives no next step', () => {
  const p = progress();
  p.consistency = { daysPractisedLast14: 0, streakDays: 0 };
  p.tests = []; p.subjects = [];
  p.nextStep = { kind: 'all_caught_up', title: 'All caught up', reason: 'Nothing is due.', href: null, cta: '' };
  const w = childWeekFrom(p, { days: 0, answers: 0 }, SUN);
  assert.ok(w.quiet && w.nextStep === null);
  const l = childLines(w).lines;
  assert.deepEqual(l, ['No practice in the last 7 days.', 'No tests this week.']);
  const one = childLines({ ...w, daysThisWeek: 1, answersThisWeek: 1, tests: [{ label: 'Quiz', scorePct: 72.5, changePoints: 1 }, { label: 'Other', scorePct: 40, changePoints: 0 }, { label: 'Third', scorePct: 10, changePoints: -2.5 }] }).lines;
  assert.equal(one[0], 'Practised on 1 of the last 7 days (1 answer).');
  assert.equal(one[1], 'Tests this week: Quiz 72,5%, up 1 point since last time; Other 40%, the same as last time; Third 10%, down 2,5 points since last time.');
});

const kid = (name: string, over: Partial<ChildWeek> = {}): ChildWeek => ({ name, grade: 6, daysThisWeek: 3, answersThisWeek: 40, tests: [], improving: [], attention: [], nextStep: null, quiet: false, ...over });

test('the message: plain text and simple HTML say the same, escape every name, carry the unsubscribe link and the POPIA wording, and show no raw values', () => {
  const evil = kid('<script>alert("x")</script> & "Bo"', { attention: [{ label: '<b>Matter</b>', accuracyPct: 40 }] });
  const m = buildSummary([evil, kid('Thando')], { siteUrl: 'https://scholar.hibbins.org/', unsubscribeUrl: 'https://scholar.hibbins.org/unsubscribe#TOKEN' });
  assert.ok(!m.html.includes('<script>') && !m.html.includes('<b>Matter') && m.html.includes('&lt;script&gt;'), 'names are escaped in the HTML');
  assert.ok(m.html.includes('&amp;') && m.html.includes('&quot;Bo&quot;'));
  assert.ok(m.text.includes('https://scholar.hibbins.org/unsubscribe#TOKEN') && m.html.includes('href="https://scholar.hibbins.org/unsubscribe#TOKEN"'));
  assert.ok(m.text.includes('https://scholar.hibbins.org/parent') && !m.text.includes('org//parent'));
  for (const part of ['once a week', 'consent as their parent or guardian', 'only uses', 'Stop these emails any time with one click', 'Resend']) assert.ok(m.text.includes(part), part);
  assert.ok(!/undefined|NaN|\[object|null/.test(m.text + m.html));
  const textLines = (s: string) => s.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2));
  const htmlLines = [...m.html.matchAll(/<li[^>]*>(.*?)<\/li>/g)].map((x) => x[1]);
  assert.deepEqual(htmlLines, textLines(m.text).map(escapeHtml), 'the same lines in both');
  assert.match(m.html, /^<!doctype html>/);
  assert.equal(buildSummary([kid('Lerato')], { siteUrl: 'https://x.org', unsubscribeUrl: 'u' }).subject, 'PrepPals: how Lerato did this week');
  assert.equal(buildSummary([kid('A'), kid('B')], { siteUrl: 'https://x.org', unsubscribeUrl: 'u' }).subject, 'PrepPals: how A and B did this week');
  assert.equal(buildSummary([kid('A'), kid('B'), kid('C')], { siteUrl: 'https://x.org', unsubscribeUrl: 'u' }).subject, 'PrepPals: your weekly summary');
});

test('the unsubscribe token: only we can make one, it names the parent, a learner session token or another secret never passes', async () => {
  const id = '11111111-2222-4333-8444-555555555555';
  const t = await makeUnsubscribeToken(id, SECRET, SUN);
  assert.match(t, /^11111111-2222-4333-8444-555555555555\.\d+\.[0-9a-f]{64}$/);
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN), id);
  assert.equal(await verifyUnsubscribeToken(t, 'other-secret', SUN), null);
  const [uid, exp, sig] = t.split('.');
  assert.equal(await verifyUnsubscribeToken(`${uid}2.${exp}.${sig}`, SECRET, SUN), null, 'a different id with the same signature');
  assert.equal(await verifyUnsubscribeToken(`${uid}.${Number(exp) + 1}.${sig}`, SECRET, SUN), null, 'the expiry is signed: a longer one cannot be written in');
  assert.equal(await verifyUnsubscribeToken(t.slice(0, -1) + (t.endsWith('0') ? '1' : '0'), SECRET, SUN), null, 'one character changed');
  assert.equal(await verifyUnsubscribeToken(await signSession(id, SECRET), SECRET, SUN), null, 'the learner-session signature over the same id is not an unsubscribe token');
  for (const bad of ['', 'nodot', '.', `${id}.`, `.${sig}`, 'x'.repeat(300), null, undefined, 42, { a: 1 }, `${id}.${'g'.repeat(64)}`, `${id}.abc.${sig}`, `${id}.${exp}`.slice(0, 40)]) assert.equal(await verifyUnsubscribeToken(bad, SECRET, SUN), null, String(bad));
});

test('an unsubscribe link works for a year after the email, and not a day longer', async () => {
  const id = '11111111-2222-4333-8444-555555555555';
  const t = await makeUnsubscribeToken(id, SECRET, SUN);
  assert.equal(TOKEN_TTL_DAYS, 365);
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN + DAY), id, 'the next day');
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN + 364 * DAY), id, 'a year less a day');
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN + 365 * DAY), id, 'the last valid day');
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN + 367 * DAY), null, 'expired');
  assert.equal(await verifyUnsubscribeToken(t, SECRET, SUN + 3 * 365 * DAY), null);
  // each weekly email carries a fresh one, so a parent who keeps getting emails always has a working link
  const next = await makeUnsubscribeToken(id, SECRET, SUN + 200 * DAY);
  assert.equal(await verifyUnsubscribeToken(next, SECRET, SUN + 500 * DAY), id);
  assert.notEqual(next, t);
});

test('the first emails\' tokens (no expiry inside) still work until a year after the weekly email went live, then not', async () => {
  const id = '11111111-2222-4333-8444-555555555555';
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const legacySig = [...new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`weekly-summary-unsubscribe:v1:${id}`)))].map((b) => b.toString(16).padStart(2, '0')).join('');
  const legacy = `${id}.${legacySig}`;
  assert.equal(await verifyUnsubscribeToken(legacy, SECRET, SUN), id);
  assert.equal(await verifyUnsubscribeToken(legacy, SECRET, LEGACY_TOKEN_UNTIL - 1), id);
  assert.equal(await verifyUnsubscribeToken(legacy, SECRET, LEGACY_TOKEN_UNTIL), null, 'after the cut-off date a token with no expiry is refused');
  assert.equal(await verifyUnsubscribeToken(legacy, 'other-secret', SUN), null);
  assert.equal(await verifyUnsubscribeToken(`${id}.${'0'.repeat(64)}`, SECRET, SUN), null);
  assert.ok(LEGACY_TOKEN_UNTIL - SUN <= 366 * DAY, 'the legacy window is one year');
});

// ---------- the job ----------

type Sent = Mail & { at: number };
const recorder = (failures: { n: number } = { n: 0 }): { mailer: Mailer; sent: Sent[]; failures: { n: number } } => {
  const sent: Sent[] = [];
  return { sent, failures, mailer: { async send(m) { if (failures.n > 0) { failures.n -= 1; throw new Error('resend responded 500'); } sent.push({ ...m, at: 0 }); } } };
};

const attemptsFor = (x: ParentsTestDb, student: string, days: number[], per = 5) => {
  const put = x.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES (?, 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, ?)");
  for (const d of days) for (let i = 0; i < per; i++) put.run(student, i % 2, SUN - d * DAY - i * 60_000);
};
const link = (x: ParentsTestDb, user: string, student: string) => x.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, ?, 'pin', 1)").run(user, student);

async function world() {
  const x = await openParentsDb(); if (!x) return null;
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821', { name: 'Tiger Kid', consent: SUN - 5 * DAY, version: 'v1' });
  await addStudent(x, 'student-0002', 'EAGLE-1111', '1111', { name: 'Eagle Kid', consent: SUN - 5 * DAY, version: 'v1' });
  await addStudent(x, 'student-0003', 'LION-2222', '2222', { name: 'Lion Kid', consent: null });
  await addStudent(x, 'student-0004', 'ZEBRA-3333', '3333', { name: 'Zebra Kid', consent: SUN - DAY, version: 'v1' });
  attemptsFor(x, 'student-0001', [1, 2, 4]);
  attemptsFor(x, 'student-0002', [0, 3]);
  attemptsFor(x, 'student-0003', [1]);
  const mum = await addAdult(x, 'mum@example.com'); const dad = await addAdult(x, 'dad@example.com');
  link(x, mum.userId, 'student-0001'); link(x, mum.userId, 'student-0003');
  link(x, dad.userId, 'student-0002');
  const deps = (mailer: Mailer, over: Partial<SummaryDeps> = {}): SummaryDeps => ({ db: x.db, mailer, now: SUN, secret: SECRET, siteUrl: ORIGIN, log: () => undefined, ...over });
  return { ...x, mum, dad, deps };
}
const status = (x: ParentsTestDb, user: string, week = WEEK) => x.raw.prepare('SELECT status, attempts, children FROM summary_sent WHERE user_id = ? AND week = ?').get(user, week) as { status: string; attempts: number; children: number } | undefined;

test('the job emails each parent with a consenting linked child, about that parent\'s own children only, once', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder();
  const res = await runWeeklySummary(w.deps(r.mailer));
  assert.deepEqual([res.sent, res.skipped, res.failed, res.reason], [2, 0, 0, null]);
  assert.deepEqual(r.sent.map((m) => m.to).sort(), ['dad@example.com', 'mum@example.com']);
  const mum = r.sent.find((m) => m.to === 'mum@example.com')!;
  const dad = r.sent.find((m) => m.to === 'dad@example.com')!;
  assert.ok(mum.text.includes('Tiger Kid') && !mum.text.includes('Eagle Kid') && !mum.text.includes('Lion Kid'), 'mum: her consenting child only (Lion Kid has no consent on file)');
  assert.ok(dad.text.includes('Eagle Kid') && !dad.text.includes('Tiger Kid'), 'dad: his own child only');
  assert.ok(!(mum.text + mum.html + dad.text + dad.html).includes('Zebra Kid'), 'an unlinked child never appears');
  assert.match(mum.text, /Practised on 3 of the last 7 days \(15 answers\)\./);
  assert.match(dad.text, /Practised on 2 of the last 7 days \(10 answers\)\./);
  assert.deepEqual([status(w, w.mum.userId)?.status, status(w, w.mum.userId)?.children, status(w, w.dad.userId)?.status], ['sent', 1, 'sent']);
  for (const m of [mum, dad]) {
    assert.ok(m.headers && /^<https:\/\/scholar\.hibbins\.org\/api\/unsubscribe\?token=[^>]+>$/.test(m.headers['List-Unsubscribe']) && m.headers['List-Unsubscribe-Post'] === 'List-Unsubscribe=One-Click');
  }
  const tokenOf = (m: Mail) => /unsubscribe\?token=([^>]+)>/.exec(m.headers?.['List-Unsubscribe'] ?? '')![1];
  assert.equal(await verifyUnsubscribeToken(tokenOf(mum), SECRET, SUN), w.mum.userId, "mum's link unsubscribes mum");
  assert.equal(await verifyUnsubscribeToken(tokenOf(dad), SECRET, SUN), w.dad.userId);
  assert.ok(mum.text.includes(`${ORIGIN}/unsubscribe#${tokenOf(mum)}`), 'the page link carries the same token');
  console.log(`weekly summary: 2 parents, 2 children, ${res.ops} calls`);
});

test('safe to run again: a second run, Monday\'s catch-up and Tuesday send nothing more; the next Sunday is a new week', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder();
  await runWeeklySummary(w.deps(r.mailer));
  assert.equal(r.sent.length, 2);
  for (const now of [SUN, SUN + 1000, SUN + DAY, SUN + 2 * DAY]) assert.equal((await runWeeklySummary(w.deps(r.mailer, { now }))).sent, 0);
  assert.equal(r.sent.length, 2, 'no second copy');
  attemptsFor(w, 'student-0001', [-6, -5]); // practice in the new week
  const next = await runWeeklySummary(w.deps(r.mailer, { now: SUN + 7 * DAY }));
  assert.ok(next.sent >= 1);
  assert.ok(status(w, w.mum.userId, '2026-11-22'));
});

test('two runs at the same moment (overlapping cron invocations) still send each parent exactly one email', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder();
  const [a, b, c] = await Promise.all([runWeeklySummary(w.deps(r.mailer)), runWeeklySummary(w.deps(r.mailer)), runWeeklySummary(w.deps(r.mailer, { now: SUN + DAY }))]);
  assert.equal(a.sent + b.sent + c.sent, 2);
  assert.equal(r.sent.length, 2);
  assert.deepEqual(r.sent.map((m) => m.to).sort(), ['dad@example.com', 'mum@example.com']);
});

test('it does nothing on other days, without a mail key, or without a secret, and claims nobody', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder();
  assert.equal((await runWeeklySummary(w.deps(r.mailer, { now: SUN + 3 * DAY }))).reason, 'not-send-day');
  assert.equal((await runWeeklySummary(w.deps(new RefusingMailer()))).reason, 'no-mail');
  assert.equal((await runWeeklySummary(w.deps(r.mailer, { secret: undefined }))).reason, 'no-secret');
  assert.equal((w.raw.prepare('SELECT COUNT(*) AS n FROM summary_sent').get() as { n: number }).n, 0);
  assert.equal(r.sent.length, 0);
});

test('left out: unsubscribed parents, a parent whose child\'s consent was withdrawn, an unlinked child, and anyone who is not a parent', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder();
  w.raw.prepare('INSERT INTO summary_prefs (user_id, unsubscribed_at, updated_at) VALUES (?, 1, 1)').run(w.mum.userId);
  w.raw.prepare('UPDATE students SET parent_consent_at = NULL WHERE id = ?').run('student-0002'); // dad's child: consent withdrawn
  const teacher = await addAdult(w, 't@example.com', ['teacher']); link(w, teacher.userId, 'student-0004');
  const res = await runWeeklySummary(w.deps(r.mailer));
  assert.equal(res.sent, 0);
  assert.equal(r.sent.length, 0);
  w.raw.prepare('UPDATE summary_prefs SET unsubscribed_at = NULL WHERE user_id = ?').run(w.mum.userId);
  w.raw.prepare('UPDATE parent_links SET unlinked_at = 5 WHERE user_id = ?').run(w.mum.userId);
  assert.equal((await runWeeklySummary(w.deps(r.mailer))).sent, 0, 'an unlinked child');
  w.raw.prepare('UPDATE parent_links SET unlinked_at = NULL WHERE user_id = ? AND student_id = ?').run(w.mum.userId, 'student-0001');
  assert.equal((await runWeeklySummary(w.deps(r.mailer))).sent, 1, 'switched back on and linked again');
});

test('a parent whose children have been quiet gets no email (skipped, and not retried)', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  w.raw.prepare('DELETE FROM attempts WHERE student_id = ?').run('student-0002');
  const r = recorder();
  const res = await runWeeklySummary(w.deps(r.mailer));
  assert.deepEqual([res.sent, res.skipped], [1, 1]);
  assert.equal(status(w, w.dad.userId)?.status, 'skipped');
  assert.equal((await runWeeklySummary(w.deps(r.mailer, { now: SUN + DAY }))).skipped, 0, 'skipped is final for the week');
});

test('a failed send is retried on the next run, never duplicated, and given up after 3 tries; the log has no address or name', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const lines: string[] = [];
  const r = recorder({ n: 2 }); // the first two sends fail
  const first = await runWeeklySummary(w.deps(r.mailer, { log: (l) => lines.push(l) }));
  assert.deepEqual([first.sent, first.failed], [0, 2]);
  assert.deepEqual([status(w, w.mum.userId)?.status, status(w, w.mum.userId)?.attempts], ['failed', 1]);
  assert.ok(lines.some((l) => /a send failed: Error: resend responded 500/.test(l)));
  assert.ok(!lines.join('\n').match(/example\.com|Tiger|Eagle|unsubscribe/), lines.join('\n'));
  const second = await runWeeklySummary(w.deps(r.mailer, { now: SUN + DAY }));
  assert.deepEqual([second.sent, second.failed], [2, 0]);
  assert.deepEqual([status(w, w.mum.userId)?.status, status(w, w.mum.userId)?.attempts], ['sent', 2]);
  assert.equal((await runWeeklySummary(w.deps(r.mailer, { now: SUN + 2 * DAY }))).sent, 0);
  // give up after MAX_ATTEMPTS
  const w2 = await world(); if (!w2) return;
  const always = recorder({ n: 99 });
  for (let i = 0; i < MAX_ATTEMPTS + 2; i++) await runWeeklySummary(w2.deps(always.mailer, { now: SUN + (i % 3) * DAY + i * 1000 }));
  assert.equal(status(w2, w2.mum.userId)?.attempts, MAX_ATTEMPTS, 'three tries, no more');
  assert.equal(always.sent.length, 0);
});

test('at most N parents per run, and a hard budget of database and mail calls: it stops cleanly, gives the claim back, and carries on the next run', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  for (let i = 0; i < 4; i++) {
    const p = await addAdult(w, `extra${i}@example.com`);
    await addStudent(w, `student-1${i}00`, `COD${i}-1000`, '1234', { name: `Kid ${i}`, consent: SUN - DAY, version: 'v1' });
    attemptsFor(w, `student-1${i}00`, [1]);
    link(w, p.userId, `student-1${i}00`);
  }
  const r = recorder();
  const a = await runWeeklySummary(w.deps(r.mailer, { maxParents: 2 }));
  assert.deepEqual([a.sent, a.reason], [2, 'cap']);
  const b = await runWeeklySummary(w.deps(r.mailer, { maxParents: 2, now: SUN + DAY }));
  assert.deepEqual([b.sent, b.reason], [2, 'cap']);
  assert.equal(new Set(r.sent.map((m) => m.to)).size, 4, 'different parents each time');

  // a budget too small for everyone
  const w2 = await world(); if (!w2) return;
  const r2 = recorder();
  const small = await runWeeklySummary(w2.deps(r2.mailer, { maxOps: 22 }));
  assert.equal(small.reason, 'budget');
  assert.ok(small.ops <= 22, `used ${small.ops}`);
  const pending = w2.raw.prepare("SELECT COUNT(*) AS n FROM summary_sent WHERE status = 'pending'").get() as { n: number };
  assert.equal(pending.n, 0, 'no parent is left claimed-but-unsent');
  const rest = await runWeeklySummary(w2.deps(r2.mailer, { now: SUN + DAY }));
  assert.equal(r2.sent.length, 2, 'both parents were emailed in the end');
  assert.equal(new Set(r2.sent.map((m) => m.to)).size, 2, 'and nobody twice');
  assert.ok(small.sent + rest.sent === 2);
  for (const m of r2.sent) assert.ok(/Practised on \d of the last 7 days/.test(m.text), 'never a half-empty summary');
});

test('the paid-plan defaults: far above the free plan, below the 10 000 subrequests Workers Paid allows, and a whole week of parents is sent in one run', async (t0) => {
  assert.ok(DEFAULT_MAX_OPS > 50 && DEFAULT_MAX_OPS < 10_000, 'above the free-plan 50 and well under the paid 10 000');
  assert.ok(MAX_PARENTS_PER_RUN >= 100);
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  for (let i = 0; i < 6; i++) {
    const p = await addAdult(w, `bulk${i}@example.com`);
    await addStudent(w, `student-2${i}00`, `CODB${i}-1000`, '1234', { name: `Kid B${i}`, consent: SUN - DAY, version: 'v1' });
    attemptsFor(w, `student-2${i}00`, [1]);
    link(w, p.userId, `student-2${i}00`);
  }
  const r = recorder();
  const res = await runWeeklySummary(w.deps(r.mailer));
  assert.equal(res.reason, null, 'neither the budget nor the cap was reached');
  assert.equal(res.sent, 8, 'every eligible parent in one run (the world has two, plus the six added)');
  assert.equal(new Set(r.sent.map((m) => m.to)).size, 8);
  assert.ok(res.ops <= DEFAULT_MAX_OPS, `used ${res.ops}`);
});

test('a failed send is kept in last_error (short, no address or link), the next parent is still reached, and the run logs its ops', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const lines: string[] = [];
  const failing = { async send() { throw new TypeError('fetch failed for https://api.resend.com/emails to mum@example.com'); } };
  const res = await runWeeklySummary(w.deps(failing as never, { log: (l: string) => lines.push(l) } as never));
  assert.equal(res.failed, 2, 'both eligible parents were tried even though the first send failed');
  const rows = w.raw.prepare("SELECT status, attempts, last_error FROM summary_sent ORDER BY user_id").all() as { status: string; attempts: number; last_error: string | null }[];
  assert.equal(rows.length, 2);
  for (const r of rows) {
    assert.equal(r.status, 'failed');
    assert.equal(r.attempts, 1);
    assert.match(String(r.last_error), /^TypeError: fetch failed/);
    assert.ok(String(r.last_error).length <= 200);
    assert.ok(!/@|https?:/.test(String(r.last_error)), `no address or link kept: ${r.last_error}`);
  }
  assert.ok(lines.some((l) => /ops \d+ of \d+/.test(l)), 'one line per run with the ops used');
  assert.ok(lines.some((l) => l.includes('a send failed: TypeError: fetch failed')));
});

test('a later successful send clears last_error, so a sent row never shows an old failure', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const r = recorder({ n: 2 }); // the first two sends fail, the retries succeed
  const first = await runWeeklySummary(w.deps(r.mailer));
  assert.deepEqual([first.sent, first.failed], [0, 2]);
  const failed = w.raw.prepare("SELECT status, last_error FROM summary_sent").all() as { status: string; last_error: string | null }[];
  assert.ok(failed.every((x) => x.status === 'failed' && /resend responded 500/.test(String(x.last_error))), 'the reason is kept after a failure');
  const second = await runWeeklySummary(w.deps(r.mailer, { now: SUN + DAY }));
  assert.deepEqual([second.sent, second.failed], [2, 0]);
  const sent = w.raw.prepare("SELECT status, attempts, last_error FROM summary_sent").all() as { status: string; attempts: number; last_error: string | null }[];
  assert.ok(sent.every((x) => x.status === 'sent' && x.attempts === 2 && x.last_error === null), JSON.stringify(sent));
});

test('a send is still recorded as sent when the last_error column is missing (no second mail)', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  w.raw.exec('ALTER TABLE summary_sent DROP COLUMN last_error');
  const r = recorder();
  const res = await runWeeklySummary(w.deps(r.mailer));
  assert.equal(res.sent, 2);
  const again = await runWeeklySummary(w.deps(r.mailer, { now: SUN + DAY }));
  assert.equal(again.sent, 0, 'nobody is mailed twice');
  assert.equal(r.sent.length, 2);
});

test('errorText: name and message, at most 200 characters, no address and no link', () => {
  assert.equal(errorText(new Error('resend responded 422')), 'Error: resend responded 422');
  const long = errorText(new Error('x'.repeat(500)));
  assert.equal(long.length, 200);
  assert.ok(!/@|https?:/.test(errorText(new Error('to a@b.co via http://x.test/y?t=SECRET'))));
  assert.equal(errorText('boom'), 'string: boom');
});

test('the failure is still recorded when the last_error column does not exist yet (migration 0026 not applied)', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  w.raw.exec('ALTER TABLE summary_sent DROP COLUMN last_error');
  const failing = { async send() { throw new Error('nope'); } };
  const res = await runWeeklySummary(w.deps(failing as never));
  assert.equal(res.failed, 2);
  const n = (w.raw.prepare("SELECT COUNT(*) AS n FROM summary_sent WHERE status = 'failed'").get() as { n: number }).n;
  assert.equal(n, 2);
});

test('the budget counter counts every call and refuses past the limit', async () => {
  const b = budgetOf({ all: async () => [], batch: async () => undefined }, 3);
  await b.db.all('x'); await b.db.batch([]); b.use();
  await assert.rejects(b.db.all('x'), /budget/);
  assert.throws(() => b.assertWhole(), /budget/);
  assert.equal(b.used(), 3);
  await b.raw.batch([]); // the uncounted handle still works, to give a claim back
});

test('the cron is wired: one daily trigger; Sunday to Tuesday (SAST) run the summary, other days the daily job', () => {
  const wr = fs.readFileSync('wrangler.jsonc', 'utf8');
  assert.ok(wr.includes('"crons": ["0 3 * * *"]'), 'free plan: a single cron trigger');
  const worker = fs.readFileSync('src/worker.ts', 'utf8');
  assert.ok(worker.includes('isSummaryDay(controller.scheduledTime)') && worker.includes('runWeeklySummaryFromEnv') && worker.includes('runScheduled(env)'));
  // 2026-11-15 is a Sunday; 03:00 UTC is 05:00 SAST
  assert.equal(isSummaryDay(Date.UTC(2026, 10, 15, 3)), true);
  assert.equal(isSummaryDay(Date.UTC(2026, 10, 16, 3)), true);
  assert.equal(isSummaryDay(Date.UTC(2026, 10, 17, 3)), true);
  assert.equal(isSummaryDay(Date.UTC(2026, 10, 18, 3)), false);
  assert.equal(isSummaryDay(Date.UTC(2026, 10, 21, 3)), false);
});

// ---------- the switches ----------

const sh = (x: ParentsTestDb, over: Partial<SummaryHttpDeps> = {}): SummaryHttpDeps => ({ db: x.db, now: SUN, secret: SECRET, log: () => undefined, ...over });

test('one-click unsubscribe works from the page (token in the body) and from a mail client (token in the query, form body), and only by POST', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const tok = await makeUnsubscribeToken(w.mum.userId, SECRET, SUN);
  const viaPage = await handleUnsubscribe(new Request(`${ORIGIN}/api/unsubscribe`, { method: 'POST', body: JSON.stringify({ token: tok }) }), sh(w));
  assert.equal(viaPage.status, 200);
  const row = () => w.raw.prepare('SELECT unsubscribed_at, updated_at FROM summary_prefs WHERE user_id = ?').get(w.mum.userId) as { unsubscribed_at: number; updated_at: number };
  assert.equal(row().unsubscribed_at, SUN);
  const dadTok = await makeUnsubscribeToken(w.dad.userId, SECRET, SUN);
  const oneClick = await handleUnsubscribe(new Request(`${ORIGIN}/api/unsubscribe?token=${dadTok}`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'List-Unsubscribe=One-Click' }), sh(w, { now: SUN + 5 }));
  assert.equal(oneClick.status, 200);
  const again = await handleUnsubscribe(new Request(`${ORIGIN}/api/unsubscribe`, { method: 'POST', body: JSON.stringify({ token: tok }) }), sh(w, { now: SUN + 999 }));
  assert.equal(again.status, 200);
  assert.equal(row().unsubscribed_at, SUN, 'unsubscribing twice keeps the first time');
  const r = recorder();
  assert.equal((await runWeeklySummary(w.deps(r.mailer))).sent, 0, 'neither parent is emailed after unsubscribing');
  assert.equal(fs.readFileSync('src/app/api/unsubscribe/route.ts', 'utf8').includes('export async function GET'), false, 'there is no GET: a mail scanner cannot unsubscribe anyone');
});

test('unsubscribe refuses forged, foreign and malformed tokens (400), a missing secret (503) and floods (429), and changes nothing', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const post = (body: unknown, url = `${ORIGIN}/api/unsubscribe`) => new Request(url, { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) });
  const good = await makeUnsubscribeToken(w.mum.userId, SECRET, SUN);
  for (const bad of [{ token: await makeUnsubscribeToken(w.mum.userId, 'other', SUN) }, { token: await signSession(w.mum.userId, SECRET) }, { token: `${w.mum.userId}.${'0'.repeat(64)}` }, { token: 5 }, {}, 'not json']) {
    const res = await handleUnsubscribe(post(bad), sh(w));
    assert.equal(res.status, 400, JSON.stringify(bad));
  }
  assert.equal((w.raw.prepare('SELECT COUNT(*) AS n FROM summary_prefs').get() as { n: number }).n, 0);
  assert.equal((await handleUnsubscribe(post({ token: good }), sh(w, { secret: undefined }))).status, 503);
  assert.equal((await handleUnsubscribe(post('x'.repeat(5000)), sh(w))).status, 413);
  const lim = createLimiter(2, 60_000);
  const codes: number[] = [];
  for (let i = 0; i < 4; i++) codes.push((await handleUnsubscribe(post({ token: 'nope' }), sh(w, { limiter: lim }))).status);
  assert.deepEqual(codes, [400, 400, 429, 429]);
});

test('an expired unsubscribe link is refused (400) by the handler and changes nothing; the parent can still use the switch on /parent', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const old = await makeUnsubscribeToken(w.mum.userId, SECRET, SUN - 400 * DAY);
  const res = await handleUnsubscribe(new Request(`${ORIGIN}/api/unsubscribe`, { method: 'POST', body: JSON.stringify({ token: old }) }), sh(w));
  assert.equal(res.status, 400);
  assert.match((await res.json() as { error: string }).error, /not valid or has expired/);
  assert.equal((w.raw.prepare('SELECT COUNT(*) AS n FROM summary_prefs').get() as { n: number }).n, 0);
  const fresh = await makeUnsubscribeToken(w.mum.userId, SECRET, SUN - 300 * DAY);
  assert.equal((await handleUnsubscribe(new Request(`${ORIGIN}/api/unsubscribe`, { method: 'POST', body: JSON.stringify({ token: fresh }) }), sh(w))).status, 200, 'a link from 300 days ago still works');
});

test('a signed-in parent can switch the weekly email off and on; teachers and signed-out visitors cannot; writes need the header and Origin', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const get = (cookie?: string) => handleSummaryPrefGet(new Request(`${ORIGIN}/api/parent/summary`, { headers: cookie ? { cookie } : {} }), sh(w));
  const set = (cookie: string | undefined, body: unknown, action: string | null = 'parent-summary', origin = ORIGIN) =>
    handleSummaryPrefSet(new Request(`${ORIGIN}/api/parent/summary`, { method: 'POST', headers: { origin, ...(action ? { 'x-auth-action': action } : {}), ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) }), sh(w));
  assert.deepEqual(await (await get(w.mum.cookie)).json(), { subscribed: true }, 'on by default');
  assert.equal((await get()).status, 401);
  const teacher = await addAdult(w, 't@example.com', ['teacher']);
  assert.equal((await get(teacher.cookie)).status, 403);
  assert.equal((await set(teacher.cookie, { subscribed: false })).status, 403);
  assert.equal((await set(w.mum.cookie, { subscribed: false }, null)).status, 403);
  assert.equal((await set(w.mum.cookie, { subscribed: false }, 'parent-summary', 'https://evil.example')).status, 403);
  assert.equal((await set(w.mum.cookie, { subscribed: 'no' })).status, 400);
  assert.equal((await set(w.mum.cookie, { subscribed: false })).status, 200);
  assert.deepEqual(await (await get(w.mum.cookie)).json(), { subscribed: false });
  assert.deepEqual(await (await get(w.dad.cookie)).json(), { subscribed: true }, "mum's switch is hers alone");
  assert.equal((await set(w.mum.cookie, { subscribed: true })).status, 200);
  assert.deepEqual(await (await get(w.mum.cookie)).json(), { subscribed: true });
});

// ---------- headers and pages ----------

test('0017 is additive; the unsubscribe page and API are private and untracked; the pages keep the token out of storage', () => {
  const sql = fs.readFileSync('migrations/0017_parent_summary.sql', 'utf8').replace(/--.*$/gm, '');
  assert.ok(!/\b(DROP|ALTER|DELETE|UPDATE|INSERT|REPLACE)\b/i.test(sql));
  for (const m of sql.matchAll(/CREATE\s+(TABLE|INDEX)\s+(?!IF NOT EXISTS)/gi)) assert.fail(`not idempotent: ${m[0]}`);
  assert.ok(/status\s+TEXT\s+NOT NULL CHECK \(status IN \('pending', 'sent', 'skipped', 'failed'\)\)/.test(sql) && /PRIMARY KEY \(user_id, week\)/.test(sql));
  const cfg = fs.readFileSync('next.config.ts', 'utf8');
  for (const src of ["'/unsubscribe'", "'/api/unsubscribe'"]) assert.ok(cfg.includes(`source: ${src}`), src);
  assert.ok(fs.readFileSync('src/lib/seo/publicPaths.ts', 'utf8').includes("'/unsubscribe'"));
  const page = fs.readFileSync('src/components/parents/UnsubscribePage.tsx', 'utf8');
  assert.ok(!/localStorage|sessionStorage|document\.cookie/.test(page) && page.includes('replaceState'));
  assert.match(fs.readFileSync('src/app/unsubscribe/page.tsx', 'utf8'), /index: false/);
});

test('a topic is never in both "Getting better" and "Needs attention": the QA case (Electric Circuits up 20 points, 45,6% recent accuracy)', () => {
  const w: ChildWeek = { name: 'QA', grade: 6, daysThisWeek: 1, answersThisWeek: 126, tests: [], improving: [{ label: 'Electric Circuits', points: 20 }], attention: [{ label: 'Electric Circuits', accuracyPct: 45.6 }], nextStep: { title: 'Practise Electric Circuits', reason: 'Most help here.' }, quiet: false };
  const { lines } = childLines(w);
  assert.ok(lines.includes('Improving, but still needs practice: Electric Circuits (up 20 points, recent accuracy 45,6%).'));
  assert.ok(!lines.some((l) => l.startsWith('Getting better') || l.startsWith('Needs attention')), 'the topic is not repeated under either heading');
  const mentions = lines.filter((l) => /Electric Circuits/.test(l) && !l.startsWith('Next step'));
  assert.equal(mentions.length, 1);
  const mail = buildSummary([w], { siteUrl: 'https://x.test', unsubscribeUrl: 'https://x.test/u' });
  assert.equal((mail.text.match(/Electric Circuits \(up/g) ?? []).length, 1);
  assert.equal((mail.html.match(/Electric Circuits \(up/g) ?? []).length, 1);
});

test('lists with different topics keep their own headings; an unknown accuracy still reads', () => {
  const w: ChildWeek = { name: 'QA', grade: 6, daysThisWeek: 2, answersThisWeek: 30, tests: [], improving: [{ label: 'A', points: 5 }, { label: 'B', points: 1 }], attention: [{ label: 'B', accuracyPct: null }, { label: 'C', accuracyPct: 40 }], nextStep: null, quiet: false };
  const { lines } = childLines(w);
  assert.ok(lines.includes('Getting better: A (up 5 points).'));
  assert.ok(lines.includes('Improving, but still needs practice: B (up 1 point).'));
  assert.ok(lines.includes('Needs attention: C (recent accuracy 40%).'));
});

test('the 2-day rule reaches the email: a topic whose rise was in one sitting has changePoints null, so it is not "getting better"', () => {
  const p = progress();
  p.subjects = [{ subject: 'nst', label: 'NST', masteryPct: 40, level: 'learning', topics: [
    { task: 'a', label: 'Electric Circuits', level: 'learning', accuracyPct: 45.6, attempts: 85, trend: [], changePoints: null, practiseHref: '/app' },
  ] }];
  const w = childWeekFrom(p, { days: 1, answers: 85 }, SUN);
  assert.deepEqual(w.improving, []);
  assert.ok(childLines(w).lines.includes('Needs attention: Electric Circuits (recent accuracy 45,6%).'));
});
