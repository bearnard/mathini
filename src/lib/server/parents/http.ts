// HTTP handlers for the parent features (ADR 0003 phase 2), written against injected dependencies so tests use a fake clock and database. Every
// route: custom action header + matching Origin on writes, a signed-in adult with the parent role, and (for anything about a child) a LINK between
// that adult and that child. A child who is not yours answers 404, exactly like one that does not exist.
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { readCapped } from '../adultAuth/http';
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../session';
import { setParentConsent } from './consent';
import { createInvite, isLinked, linkByInvite, linkByPin, listChildren, previewInvite, unlink, withActivity } from './links';
import { resetChildPin } from './pinReset';
import { loadChildProgress } from './progressSeam';

export const MAX_BODY_BYTES = 2048;

export interface ParentDeps {
  db: AdminDb;
  now: number;
  /** HMAC secret for the learner's pp_session cookie (only the invite maker needs it). */
  sessionSecret?: string;
  log?: (line: string) => void;
}

export function depsFromEnv(): ParentDeps {
  const { env } = getCloudflareContext();
  return { db: d1Adapter(env.DB as never), now: Date.now(), sessionSecret: (env as unknown as { SESSION_SECRET?: string }).SESSION_SECRET };
}

const CHILD_ID = /^[A-Za-z0-9-]{8,64}$/;
const notFound = () => authJson({ error: 'Not found' }, 404);
const failed = (deps: ParentDeps, what: string, err: unknown) => {
  (deps.log ?? ((l: string) => console.error(l)))(`parents: ${what} failed: ${err instanceof Error ? err.message : 'unknown'}`); // the message only: never a PIN, token or name
  return authJson({ error: 'Something went wrong. Try again.' }, 500);
};

async function body(req: Request): Promise<Record<string, unknown> | Response> {
  const text = await readCapped(req, MAX_BODY_BYTES);
  if (text === null) return authJson({ error: 'request too large' }, 413);
  try {
    const v = text ? JSON.parse(text) : {};
    return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : authJson({ error: 'invalid request' }, 400);
  } catch {
    return authJson({ error: 'invalid request' }, 400);
  }
}

/** The parent, for a write: action header and Origin first, then the session and role. */
async function parentWrite(req: Request, deps: ParentDeps, action: string) {
  const bad = checkWriteRequest(req, action);
  if (bad) return { ok: false as const, response: authJson({ error: bad }, 403) };
  return requireRole(req, deps.db, ['parent'], deps.now);
}

/** GET: the children linked to me. */
export async function handleListChildren(req: Request, deps: ParentDeps): Promise<Response> {
  try {
    const g = await requireRole(req, deps.db, ['parent'], deps.now);
    if (!g.ok) return g.response;
    return authJson({ children: await withActivity(deps.db, await listChildren(deps.db, g.session.user.id), deps.now) });
  } catch (err) {
    return failed(deps, 'list', err);
  }
}

/** POST { loginCode, pin, consent }. Links a child by the child's own code and PIN. */
export async function handleLinkPin(req: Request, deps: ParentDeps): Promise<Response> {
  try {
    const g = await parentWrite(req, deps, 'parent-link');
    if (!g.ok) return g.response;
    const b = await body(req);
    if (b instanceof Response) return b;
    const r = await linkByPin(deps.db, g.session.user.id, { loginCode: b.loginCode, pin: b.pin, consent: b.consent }, deps.now);
    return r.ok ? authJson({ ok: true, child: { id: r.studentId, displayName: r.displayName } }) : authJson({ error: r.error }, r.status);
  } catch (err) {
    return failed(deps, 'link by pin', err);
  }
}

/** POST { token, consent }. Links a child by an invite made on the child's screen. */
export async function handleLinkInvite(req: Request, deps: ParentDeps): Promise<Response> {
  try {
    const g = await parentWrite(req, deps, 'parent-link-invite');
    if (!g.ok) return g.response;
    const b = await body(req);
    if (b instanceof Response) return b;
    const r = await linkByInvite(deps.db, g.session.user.id, { token: b.token, consent: b.consent }, deps.now);
    return r.ok ? authJson({ ok: true, child: { id: r.studentId, displayName: r.displayName } }) : authJson({ error: r.error }, r.status);
  } catch (err) {
    return failed(deps, 'link by invite', err);
  }
}

/** POST { token }. Who a link on the child's screen is for (nickname and grade only), without using it. */
export async function handleInvitePreview(req: Request, deps: ParentDeps): Promise<Response> {
  try {
    const g = await parentWrite(req, deps, 'parent-link-invite-preview');
    if (!g.ok) return g.response;
    const b = await body(req);
    if (b instanceof Response) return b;
    const r = await previewInvite(deps.db, g.session.user.id, b.token, deps.now);
    return r.ok ? authJson({ ok: true, child: { displayName: r.displayName, grade: r.grade } }) : authJson({ error: r.error }, r.status);
  } catch (err) {
    return failed(deps, 'preview invite', err);
  }
}

/** GET: a linked child's progress (the same ProgressResponse the learner sees). 404 for a child that is not linked to me. */
export async function handleChildProgress(req: Request, deps: ParentDeps, studentId: string): Promise<Response> {
  try {
    const g = await requireRole(req, deps.db, ['parent'], deps.now);
    if (!g.ok) return g.response;
    if (!CHILD_ID.test(studentId)) return notFound();
    const child = (await listChildren(deps.db, g.session.user.id)).find((c) => c.id === studentId);
    if (!child) return notFound();
    const progress = await loadChildProgress(deps.db, studentId, deps.now);
    return progress ? authJson({ child, progress }) : notFound();
  } catch (err) {
    return failed(deps, 'progress', err);
  }
}

type ChildAction = (deps: ParentDeps, userId: string, studentId: string, b: Record<string, unknown>) => Promise<Response>;

async function childWrite(req: Request, deps: ParentDeps, studentId: string, action: string, run: ChildAction): Promise<Response> {
  try {
    const g = await parentWrite(req, deps, action);
    if (!g.ok) return g.response;
    if (!CHILD_ID.test(studentId) || !(await isLinked(deps.db, g.session.user.id, studentId))) return notFound();
    const b = await body(req);
    if (b instanceof Response) return b;
    return await run(deps, g.session.user.id, studentId, b);
  } catch (err) {
    return failed(deps, action, err);
  }
}

/** POST { give: boolean }. A parent gives or withdraws consent. */
export const handleChildConsent = (req: Request, deps: ParentDeps, studentId: string) =>
  childWrite(req, deps, studentId, 'parent-consent', async (d, userId, sid, b) => {
    if (typeof b.give !== 'boolean') return authJson({ error: 'invalid request' }, 400);
    await setParentConsent(d.db, userId, sid, b.give, d.now);
    return authJson({ ok: true, consent: b.give ? 'parent' : 'none' });
  });

/** POST. A new PIN, shown once. */
export const handleChildResetPin = (req: Request, deps: ParentDeps, studentId: string) =>
  childWrite(req, deps, studentId, 'parent-reset-pin', async (d, userId, sid) => {
    const r = await resetChildPin(d.db, userId, sid, d.now);
    return r.ok ? authJson({ ok: true, pin: r.pin }) : authJson({ error: r.error }, 429);
  });

/** POST. Stops being linked to this child. */
export const handleChildUnlink = (req: Request, deps: ParentDeps, studentId: string) =>
  childWrite(req, deps, studentId, 'parent-unlink', async (d, userId, sid) => {
    await unlink(d.db, userId, sid, d.now);
    return authJson({ ok: true });
  });

/** POST, from the CHILD's own signed-in screen: makes a link for a parent to open. Needs the learner's pp_session cookie. */
export async function handleCreateInvite(req: Request, deps: ParentDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'parent-invite');
  if (bad) return authJson({ error: bad }, 403);
  try {
    const cookie = req.headers.get('cookie') ?? '';
    const token = /(?:^|;\s*)pp_session=([^;]+)/.exec(cookie)?.[1];
    const studentId = deps.sessionSecret ? await verifyLiveSession(deps.db, token, deps.sessionSecret) : null;
    if (!studentId) return authJson({ error: 'Sign in first' }, 401);
    const r = await createInvite(deps.db, studentId, deps.now);
    return r.ok ? authJson({ ok: true, token: r.token, expiresAt: r.expiresAt }) : authJson({ error: r.error }, 429);
  } catch (err) {
    return failed(deps, 'invite', err);
  }
}
