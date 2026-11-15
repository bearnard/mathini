// HTTP handlers for the teacher side of proposals and discussion (ADR 0003 sections 1 and 4). The Next.js routes are one-liners over these.
// Every request: a signed-in adult with the teacher or moderator role; writes also need the action header and a matching Origin. A parent or a
// learner gets 403 (401 with no sign-in). Errors are plain text for the teacher; nothing here ever returns learner data.
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { readCapped } from '../adultAuth/http';
import { topicQuestions } from './bank';
import { listComments, postComment, removeComment, type Target } from './discussion';
import { listMine, proposalById, reviseProposal, submitProposal, withdrawProposal } from './proposals';
import { reputationOf } from './groups';

export const MAX_BODY_BYTES = 8192;
export interface ModDeps { db: AdminDb; now: number }
export const depsFromEnv = (): ModDeps => ({ db: d1Adapter(getCloudflareContext().env.DB as never), now: Date.now() });

const ID = /^[0-9a-f-]{36}$/;
const TASK = /^[A-Za-z0-9][A-Za-z0-9_\-]{1,120}$/;

async function body(req: Request): Promise<Record<string, unknown> | null> {
  const text = await readCapped(req, MAX_BODY_BYTES);
  if (text === null) return null;
  try { const v = text ? JSON.parse(text) : {}; return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null; } catch { return null; }
}

async function asTeacher(req: Request, deps: ModDeps, action: string | null, run: (userId: string, b: Record<string, unknown>) => Promise<Response>): Promise<Response> {
  if (action) { const bad = checkWriteRequest(req, action); if (bad) return authJson({ error: bad }, 403); }
  try {
    const gate = await requireRole(req, deps.db, ['teacher', 'moderator'], deps.now);
    if (!gate.ok) return gate.response;
    const b = action ? await body(req) : {};
    if (!b) return authJson({ error: 'invalid request' }, 400);
    return await run(gate.session.user.id, b);
  } catch (err) {
    console.error(`proposals ${action ?? 'read'} error:`, err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

/** GET ?task=<topic>: the questions in a topic, to pick one to propose on. */
export const handleBank = (req: Request, deps: ModDeps) =>
  asTeacher(req, deps, null, async (uid) => {
    const task = new URL(req.url).searchParams.get('task') ?? '';
    if (!TASK.test(task)) return authJson({ error: 'Choose a topic' }, 400);
    const r = await topicQuestions(deps.db, uid, task);
    return r ? authJson(r) : authJson({ error: 'Unknown topic' }, 404);
  });

/** GET: my proposals and my points. */
export const handleMine = (req: Request, deps: ModDeps) =>
  asTeacher(req, deps, null, async (uid) => authJson({ proposals: await listMine(deps.db, uid), points: await reputationOf(deps.db, uid) }));

/** POST { kind, questionId?, baseVersionId?, task?, content?, reason, sourceKind, sourceRef }. A failing automated check answers 422 with the reasons. */
export const handlePropose = (req: Request, deps: ModDeps) =>
  asTeacher(req, deps, 'proposal-create', async (uid, b) => {
    const r = await submitProposal(deps.db, uid, b, deps.now);
    return r.ok ? authJson({ id: r.id, status: r.status, warnings: r.warnings }, 201) : authJson({ error: r.error, id: r.id, findings: r.findings }, r.status);
  });

/** POST { ...same fields }: fix a returned proposal. */
export const handleRevise = (req: Request, deps: ModDeps, id: string) =>
  asTeacher(req, deps, 'proposal-revise', async (uid, b) => {
    if (!ID.test(id)) return authJson({ error: 'Not found' }, 404);
    const r = await reviseProposal(deps.db, uid, id, b, deps.now);
    return r.ok ? authJson({ id: r.id, status: r.status, warnings: r.warnings }) : authJson({ error: r.error, id: r.id, findings: r.findings }, r.status);
  });

export const handleWithdraw = (req: Request, deps: ModDeps, id: string) =>
  asTeacher(req, deps, 'proposal-withdraw', async (uid) => {
    if (!ID.test(id)) return authJson({ error: 'Not found' }, 404);
    const r = await withdrawProposal(deps.db, uid, id, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });

/** One proposal, for its author only (the owner and moderators read it through the admin side). */
export const handleOne = (req: Request, deps: ModDeps, id: string) =>
  asTeacher(req, deps, null, async (uid) => {
    const p = ID.test(id) ? await proposalById(deps.db, id) : null;
    return p && p.proposerUserId === uid ? authJson({ proposal: p }) : authJson({ error: 'Not found' }, 404);
  });

const targetOf = (url: URL): Target | null => {
  const q = url.searchParams.get('question'); const p = url.searchParams.get('proposal');
  if (q && !p) return { questionId: q };
  if (p && !q) return { proposalId: p };
  return null;
};

/** GET ?question=<id> or ?proposal=<id>: the discussion thread. */
export const handleComments = (req: Request, deps: ModDeps) =>
  asTeacher(req, deps, null, async (uid) => {
    const t = targetOf(new URL(req.url));
    if (!t) return authJson({ error: 'Choose a question or a proposal' }, 400);
    const r = await listComments(deps.db, uid, t);
    return r.ok ? authJson({ comments: r.comments }) : authJson({ error: r.error }, r.status);
  });

/** POST { question | proposal, body }. */
export const handleComment = (req: Request, deps: ModDeps) =>
  asTeacher(req, deps, 'comment-create', async (uid, b) => {
    const t: Target | null = typeof b.question === 'string' && b.proposal == null ? { questionId: b.question } : typeof b.proposal === 'string' && b.question == null ? { proposalId: b.proposal } : null;
    if (!t) return authJson({ error: 'Choose a question or a proposal' }, 400);
    const r = await postComment(deps.db, uid, t, b.body, deps.now);
    return r.ok ? authJson({ id: r.id }, 201) : authJson({ error: r.error }, r.status);
  });

export const handleCommentRemove = (req: Request, deps: ModDeps, id: string) =>
  asTeacher(req, deps, 'comment-remove', async (uid) => {
    const r = await removeComment(deps.db, { userId: uid }, id, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });
