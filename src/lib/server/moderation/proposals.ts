// Teacher proposals (ADR 0003 sections 1 and 4). Server only; every caller sits behind a role check, and the role is checked again here.
//
// A proposal runs the automated checks first. A failing one is stored as 'returned' with the reasons and goes back to its author. A passing one
// is 'submitted' and waits for a decision. Approval rule: the OWNER decides until the group has MODERATOR_THRESHOLD moderators; from then on one
// moderator of that group is enough, never on their own proposal. Every decision carries a reason. An approved edit goes through editQuestion,
// so it is a new version with an audit row, and a change of meaning resets reviews, exactly as an owner edit does.
import type { AdminDb, Param } from '../admin/db';
import { checkQuestion, type Reason } from '../../shared/questionQuality';
import { cleanDecisionReason, LIMITS, MODERATOR_THRESHOLD, OPEN_STATUSES, parseProposalInput, POINTS, sourceNoteOf, type ProposalInput, type ProposalKind, type ProposalStatus, type SourceKind } from '../../shared/moderation';
import type { QuestionContent } from '../../shared/questionEdit';
import { decimalPolicyForTask, editQuestion } from '../questions/edit';
import { retireQuestion } from '../questions/moderation';
import { createCuratedQuestion } from '../questions/create';
import { groupIsSelfGoverning, isGroupModerator, isTeacherOrModerator, moderatorCount } from './groups';
import { topicInfo } from './topics';

const DAY = 86_400_000;
const OPEN_SQL = OPEN_STATUSES.map((s) => `'${s}'`).join(', ');
const parseJson = <T>(s: unknown): T | null => { try { return s == null ? null : (JSON.parse(String(s)) as T); } catch { return null; } };
const newId = () => crypto.randomUUID();

export interface ProposalRow {
  id: string; kind: ProposalKind; questionId: string | null; baseVersionId: number | null; task: string; groupKey: string; proposerUserId: string;
  proposed: QuestionContent | null; reason: string; sourceKind: SourceKind; sourceRef: string; status: ProposalStatus; findings: Reason[];
  createdAt: number; updatedAt: number; decidedAt: number | null; decidedBy: string | null; decisionReason: string | null; appliedQuestionId: string | null;
}
const rowOf = (r: Record<string, unknown>): ProposalRow => ({
  id: String(r.id), kind: r.kind as ProposalKind, questionId: (r.question_id as string | null) ?? null, baseVersionId: r.base_version_id == null ? null : Number(r.base_version_id),
  task: String(r.task), groupKey: String(r.group_key), proposerUserId: String(r.proposer_user_id), proposed: parseJson<QuestionContent>(r.proposed), reason: String(r.reason),
  sourceKind: r.source_kind as SourceKind, sourceRef: String(r.source_ref), status: r.status as ProposalStatus, findings: parseJson<Reason[]>(r.findings) ?? [],
  createdAt: Number(r.created_at), updatedAt: Number(r.updated_at), decidedAt: r.decided_at == null ? null : Number(r.decided_at), decidedBy: (r.decided_by as string | null) ?? null,
  decisionReason: r.status === 'applying' ? null : ((r.decision_reason as string | null) ?? null), appliedQuestionId: (r.applied_question_id as string | null) ?? null,
});
const COLS = 'id, kind, question_id, base_version_id, task, group_key, proposer_user_id, proposed, reason, source_kind, source_ref, status, findings, created_at, updated_at, decided_at, decided_by, decision_reason, applied_question_id';
const load = async (db: AdminDb, id: string): Promise<ProposalRow | null> => {
  const r = (await db.all<Record<string, unknown>>(`SELECT ${COLS} FROM proposals WHERE id = ?`, [id]))[0];
  return r ? rowOf(r) : null;
};

export type SubmitResult =
  | { ok: true; id: string; status: 'submitted'; warnings: Reason[] }
  | { ok: false; status: 400 | 403 | 404 | 409 | 422 | 429; error: string; id?: string; findings?: Reason[] };

interface Prepared { task: string; groupKey: string; questionId: string | null; findings: Reason[]; failing: boolean }

/** Validate against the live question bank and run the automated checks. Pure of writes. */
async function evaluate(db: AdminDb, input: ProposalInput): Promise<Prepared | { error: string; status: 400 | 404 | 409 }> {
  let task: string;
  let questionId = input.questionId;
  if (input.kind === 'new') task = input.task!;
  else {
    const q = (await db.all<{ task: string; kind: string; status: string; current_version_id: number | null; extra: string | null }>(
      'SELECT q.task, q.kind, q.status, q.current_version_id, v.extra FROM questions q LEFT JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ?', [input.questionId!]))[0];
    if (!q || q.current_version_id == null) return { status: 404, error: 'That question was not found' };
    if (q.status !== 'active') return { status: 409, error: 'That question is already retired' };
    if (q.kind !== 'mcq' || /"diagram"\s*:\s*true/.test(q.extra ?? '')) return { status: 400, error: 'Only plain multiple-choice questions can be proposed on. Questions with a diagram, order, label and explain questions stay in the code.' };
    if (input.kind === 'edit' && q.current_version_id !== input.baseVersionId) return { status: 409, error: 'This question has changed since you opened it. Reload it and propose again.' };
    task = q.task;
  }
  const topic = topicInfo(task);
  if (!topic) return { status: 400, error: 'Unknown topic' };
  let findings: Reason[] = [];
  if (input.content) {
    const others = (await db.all<{ prompt: string }>(
      `SELECT v.prompt FROM questions q2 JOIN question_versions v ON v.id = q2.current_version_id WHERE q2.task = ? AND q2.id <> ? AND q2.status = 'active' LIMIT 500`, [task, questionId ?? '']))
      .map((r) => r.prompt);
    findings = checkQuestion(input.content, { existingPrompts: others, decimalComma: decimalPolicyForTask(task) }).reasons;
    if (input.kind === 'edit') {
      const cur = (await db.all<{ prompt: string; options: string; answer: string }>('SELECT v.prompt, v.options, v.answer FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ?', [questionId!]))[0];
      if (cur && cur.prompt === input.content.prompt && cur.answer === input.content.answer && cur.options === JSON.stringify(input.content.options)) return { status: 400, error: 'Nothing has changed' };
    }
  }
  return { task, groupKey: topic.groupKey, questionId, findings, failing: findings.some((f) => f.severity === 'reject') };
}

const rejectsOf = (f: Reason[]) => f.filter((x) => x.severity === 'reject');

export async function submitProposal(db: AdminDb, userId: string, raw: unknown, now: number): Promise<SubmitResult> {
  if (!(await isTeacherOrModerator(db, userId))) return { ok: false, status: 403, error: 'Only approved teachers can propose changes' };
  const parsed = parseProposalInput(raw);
  if (!parsed.ok) return { ok: false, status: 400, error: parsed.error };
  const input = parsed.value;
  const open = Number((await db.all<{ n: number }>(`SELECT COUNT(*) AS n FROM proposals WHERE proposer_user_id = ? AND status IN (${OPEN_SQL})`, [userId]))[0]?.n ?? 0);
  if (open >= LIMITS.maxOpenPerTeacher) return { ok: false, status: 429, error: 'You have many proposals waiting. Wait for a decision or withdraw some first.' };
  const today = Number((await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM proposals WHERE proposer_user_id = ? AND created_at > ?', [userId, now - DAY]))[0]?.n ?? 0);
  if (today >= LIMITS.maxPerDay) return { ok: false, status: 429, error: 'That is enough proposals for one day. Try again tomorrow.' };
  const p = await evaluate(db, input);
  if ('error' in p) return { ok: false, status: p.status, error: p.error };
  if (p.questionId) {
    const dup = await db.all('SELECT 1 AS x FROM proposals WHERE question_id = ? AND proposer_user_id = ? AND status IN (' + OPEN_SQL + ')', [p.questionId, userId]);
    if (dup.length > 0) return { ok: false, status: 409, error: 'You already have a proposal waiting on this question. Revise or withdraw it.' };
  }
  const id = newId();
  const status: ProposalStatus = p.failing ? 'returned' : 'submitted';
  await db.batch([{
    sql: `INSERT INTO proposals (id, kind, question_id, base_version_id, task, group_key, proposer_user_id, proposed, reason, source_kind, source_ref, status, findings, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    params: [id, input.kind, p.questionId, input.baseVersionId, p.task, p.groupKey, userId, input.content ? JSON.stringify(input.content) : null, input.reason, input.sourceKind, input.sourceRef, status, p.findings.length ? JSON.stringify(p.findings) : null, now, now],
  }]);
  if (p.failing) return { ok: false, status: 422, error: 'The automated checks found problems. Your proposal is back with you: fix them and send it again.', id, findings: p.findings };
  return { ok: true, id, status: 'submitted', warnings: p.findings.filter((f) => f.severity === 'warn') };
}

/** The author fixes a returned proposal; it is checked again and goes to the queue when it passes. */
export async function reviseProposal(db: AdminDb, userId: string, id: string, raw: unknown, now: number): Promise<SubmitResult> {
  if (!(await isTeacherOrModerator(db, userId))) return { ok: false, status: 403, error: 'Only approved teachers can propose changes' };
  const cur = await load(db, id);
  if (!cur || cur.proposerUserId !== userId) return { ok: false, status: 404, error: 'Not found' };
  if (cur.status !== 'returned') return { ok: false, status: 409, error: 'Only a returned proposal can be revised' };
  const parsed = parseProposalInput({ ...(raw as object), kind: cur.kind, questionId: cur.questionId, ...(cur.kind === 'new' ? { task: cur.task } : {}), ...(cur.kind === 'edit' ? { baseVersionId: cur.baseVersionId } : {}) });
  if (!parsed.ok) return { ok: false, status: 400, error: parsed.error };
  const input = parsed.value;
  const p = await evaluate(db, input);
  if ('error' in p) return { ok: false, status: p.status, error: p.error };
  const status: ProposalStatus = p.failing ? 'returned' : 'submitted';
  await db.batch([{
    sql: "UPDATE proposals SET proposed = ?, reason = ?, source_kind = ?, source_ref = ?, status = ?, findings = ?, updated_at = ? WHERE id = ? AND proposer_user_id = ? AND status = 'returned'",
    params: [input.content ? JSON.stringify(input.content) : null, input.reason, input.sourceKind, input.sourceRef, status, p.findings.length ? JSON.stringify(p.findings) : null, now, id, userId],
  }]);
  if (p.failing) return { ok: false, status: 422, error: 'The automated checks still find problems.', id, findings: p.findings };
  return { ok: true, id, status: 'submitted', warnings: p.findings.filter((f) => f.severity === 'warn') };
}

export async function withdrawProposal(db: AdminDb, userId: string, id: string, now: number): Promise<{ ok: true } | { ok: false; status: 404 | 409; error: string }> {
  const cur = await load(db, id);
  if (!cur || cur.proposerUserId !== userId) return { ok: false, status: 404, error: 'Not found' };
  if (cur.status !== 'returned' && cur.status !== 'submitted') return { ok: false, status: 409, error: 'This proposal can no longer be withdrawn' };
  await db.batch([{ sql: "UPDATE proposals SET status = 'withdrawn', updated_at = ? WHERE id = ? AND proposer_user_id = ? AND status IN ('returned', 'submitted')", params: [now, id, userId] }]);
  return (await load(db, id))?.status === 'withdrawn' ? { ok: true } : { ok: false, status: 409, error: 'This proposal can no longer be withdrawn' };
}

export async function listMine(db: AdminDb, userId: string): Promise<ProposalRow[]> {
  return (await db.all<Record<string, unknown>>(`SELECT ${COLS} FROM proposals WHERE proposer_user_id = ? ORDER BY created_at DESC LIMIT 100`, [userId])).map(rowOf);
}

export type Actor = { kind: 'owner'; email: string } | { kind: 'moderator'; userId: string };

/** Can this actor decide this proposal right now? The one place the approval rule lives. */
export async function canDecide(db: AdminDb, actor: Actor, p: Pick<ProposalRow, 'groupKey' | 'proposerUserId'>): Promise<{ ok: true } | { ok: false; status: 403; error: string }> {
  if (actor.kind === 'owner') return { ok: true };
  if (!(await isGroupModerator(db, actor.userId, p.groupKey))) return { ok: false, status: 403, error: 'You are not a moderator of this group' };
  if (actor.userId === p.proposerUserId) return { ok: false, status: 403, error: 'You cannot decide your own proposal' };
  if (!groupIsSelfGoverning(await moderatorCount(db, p.groupKey))) return { ok: false, status: 403, error: 'This group does not have enough moderators yet, so the owner decides its proposals' };
  return { ok: true };
}

/** The queue: the owner sees every proposal waiting; a moderator sees those in their self-governing groups that they may decide. */
export async function queueFor(db: AdminDb, actor: Actor): Promise<ProposalRow[]> {
  if (actor.kind === 'owner') return (await db.all<Record<string, unknown>>(`SELECT ${COLS} FROM proposals WHERE status = 'submitted' ORDER BY created_at LIMIT 200`, [])).map(rowOf);
  const rows = (await db.all<Record<string, unknown>>(
    `SELECT ${COLS} FROM proposals WHERE status = 'submitted' AND proposer_user_id <> ? AND group_key IN (SELECT group_key FROM group_moderators WHERE user_id = ?)
       AND (SELECT COUNT(*) FROM group_moderators g WHERE g.group_key = proposals.group_key) >= ? ORDER BY created_at LIMIT 200`,
    [actor.userId, actor.userId, MODERATOR_THRESHOLD])).map(rowOf);
  return rows;
}

export const proposalById = load;

export type DecideResult = { ok: true; status: 'approved' | 'rejected'; versionId?: number; questionId?: string } | { ok: false; status: 400 | 403 | 404 | 409 | 422; error: string; findings?: Reason[] };

export async function decideProposal(db: AdminDb, actor: Actor, id: string, decision: unknown, rawReason: unknown, now: number): Promise<DecideResult> {
  if (decision !== 'approve' && decision !== 'reject') return { ok: false, status: 400, error: 'Choose approve or reject' };
  const reason = cleanDecisionReason(rawReason);
  if (!reason) return { ok: false, status: 400, error: `Give a reason (${LIMITS.decisionMin} to ${LIMITS.decisionMax} characters)` };
  const p = await load(db, id);
  if (!p) return { ok: false, status: 404, error: 'Not found' };
  const allowed = await canDecide(db, actor, p);
  if (!allowed.ok) return allowed;
  if (p.status !== 'submitted') return { ok: false, status: 409, error: 'This proposal is no longer waiting for a decision' };
  const by = actor.kind === 'owner' ? 'owner' : 'moderator';
  const byUser: Param = actor.kind === 'owner' ? null : actor.userId;
  const label = actor.kind === 'owner' ? actor.email : `moderator:${actor.userId}`;

  if (decision === 'reject') {
    const claim = `claim:${newId()}`;
    await db.batch([{ sql: "UPDATE proposals SET status = 'rejected', decided_at = ?, decided_by = ?, decided_by_user = ?, decision_reason = ?, updated_at = ? WHERE id = ? AND status = 'submitted'", params: [now, by, byUser, claim, now, id] }]);
    const r = (await db.all<{ decision_reason: string }>('SELECT decision_reason FROM proposals WHERE id = ?', [id]))[0];
    if (r?.decision_reason !== claim) return { ok: false, status: 409, error: 'This proposal is no longer waiting for a decision' };
    await db.batch([{ sql: 'UPDATE proposals SET decision_reason = ? WHERE id = ? AND decision_reason = ?', params: [reason, id, claim] }]);
    return { ok: true, status: 'rejected' };
  }

  // Approve: claim it first so two decisions cannot both apply, then apply, then record.
  const claim = `claim:${newId()}`;
  await db.batch([{ sql: "UPDATE proposals SET status = 'applying', decision_reason = ?, updated_at = ? WHERE id = ? AND status = 'submitted'", params: [claim, now, id] }]);
  const claimed = (await db.all<{ status: string; decision_reason: string }>('SELECT status, decision_reason FROM proposals WHERE id = ?', [id]))[0];
  if (claimed?.status !== 'applying' || claimed.decision_reason !== claim) return { ok: false, status: 409, error: 'This proposal is no longer waiting for a decision' };
  const release = (status: ProposalStatus) => db.batch([{ sql: 'UPDATE proposals SET status = ?, decision_reason = NULL, updated_at = ? WHERE id = ? AND decision_reason = ?', params: [status, now, id, claim] }]);

  const author = `teacher:${p.proposerUserId}`;
  const note = sourceNoteOf(p.sourceKind, p.sourceRef, p.reason);
  let appliedVersion: number | null = null;
  let appliedQuestion: string | null = p.questionId;
  try {
    if (p.kind === 'edit') {
      const c = p.proposed!;
      const r = await editQuestion(db, p.questionId!, { expectedVersionId: p.baseVersionId, ...c, sourceNote: note, changeKind: 'wording', acknowledgeWarnings: true }, label, now, author);
      if (!r.ok) {
        if (r.status === 409 || r.status === 404) { await release('stale'); return { ok: false, status: 409, error: 'The question changed after this proposal was written, so it is now out of date.' }; }
        await release('submitted');
        return { ok: false, status: 422, error: r.error, findings: r.findings };
      }
      appliedVersion = r.versionId;
    } else if (p.kind === 'retire') {
      const r = await retireQuestion(db, p.questionId!, `Teacher proposal: ${p.reason}`.slice(0, 300), label, now);
      if (!r.ok) { await release('stale'); return { ok: false, status: 409, error: 'That question is no longer active, so this proposal is out of date.' }; }
    } else {
      const r = await createCuratedQuestion(db, p.task, p.proposed!, note, author, now);
      if (!r.ok) { await release('stale'); return { ok: false, status: 409, error: r.error }; }
      appliedVersion = r.versionId;
      appliedQuestion = r.questionId;
    }
  } catch (e) {
    await release('submitted');
    throw e;
  }

  const finish = [
    { sql: "UPDATE proposals SET status = 'approved', decided_at = ?, decided_by = ?, decided_by_user = ?, decision_reason = ?, applied_version_id = ?, applied_question_id = ?, updated_at = ? WHERE id = ? AND decision_reason = ?", params: [now, by, byUser, reason, appliedVersion, appliedQuestion, now, id, claim] as Param[] },
    { sql: "INSERT OR IGNORE INTO reputation_events (user_id, proposal_id, points, reason, created_at) SELECT proposer_user_id, id, ?, ?, ? FROM proposals WHERE id = ? AND status = 'approved'", params: [POINTS[p.kind], `Accepted ${p.kind} proposal`, now, id] as Param[] },
  ];
  if (appliedVersion != null && appliedQuestion) {
    finish.push({
      sql: "INSERT OR REPLACE INTO question_verified (question_id, version_id, verified_at, via, proposal_id, verified_by) SELECT ?, ?, ?, 'proposal', id, 'teacher' FROM proposals WHERE id = ? AND status = 'approved'",
      params: [appliedQuestion, appliedVersion, now, id] as Param[],
    });
  }
  await db.batch(finish);
  return { ok: true, status: 'approved', versionId: appliedVersion ?? undefined, questionId: appliedQuestion ?? undefined };
}

/** An explicit teacher-verified mark on the CURRENT version (owner, or a moderator of the question's group). Any later edit makes it unverified. */
export async function verifyQuestion(db: AdminDb, actor: Actor, questionId: string, now: number): Promise<{ ok: true } | { ok: false; status: 403 | 404 | 409; error: string }> {
  const q = (await db.all<{ task: string; status: string; current_version_id: number | null }>('SELECT task, status, current_version_id FROM questions WHERE id = ?', [questionId]))[0];
  if (!q || q.current_version_id == null) return { ok: false, status: 404, error: 'Not found' };
  if (q.status !== 'active') return { ok: false, status: 409, error: 'This question is retired' };
  const topic = topicInfo(q.task);
  if (actor.kind === 'moderator') {
    if (!topic || !(await isGroupModerator(db, actor.userId, topic.groupKey))) return { ok: false, status: 403, error: 'You are not a moderator of this group' };
    if (!groupIsSelfGoverning(await moderatorCount(db, topic.groupKey))) return { ok: false, status: 403, error: 'This group does not have enough moderators yet, so the owner decides' };
  }
  await db.batch([{ sql: "INSERT OR REPLACE INTO question_verified (question_id, version_id, verified_at, via, proposal_id, verified_by) VALUES (?, ?, ?, 'review', NULL, ?)", params: [questionId, q.current_version_id, now, actor.kind === 'owner' ? 'owner' : 'moderator'] }]);
  return { ok: true };
}
