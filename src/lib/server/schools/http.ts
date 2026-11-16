// HTTP handlers for the teacher application (ADR 0003 phase 3), written against injected dependencies so tests run them with a fake clock and database.
// The Next.js routes are one-liners that call these with depsFromEnv().
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { readCapped } from '../adultAuth/http';
import { applyAsTeacher, getOwnApplication } from './teachers';
import { verifyLiveSession } from '../session';
import { allowDurable, createLimiter, type Limiter } from '../adultAuth/rateLimit';
import { archiveClass, createClass, getClass, joinClass, leaveClass, listClasses, myClasses, regenerateCode, removeMember } from './classes';

export const MAX_BODY_BYTES = 2048;

export interface SchoolsDeps { db: AdminDb; now: number }
export const depsFromEnv = (): SchoolsDeps => ({ db: d1Adapter(getCloudflareContext().env.DB as never, getCloudflareContext().ctx), now: Date.now() });

async function body(req: Request): Promise<Record<string, unknown> | null> {
  const text = await readCapped(req, MAX_BODY_BYTES);
  if (text === null) return null;
  try {
    const v = text ? JSON.parse(text) : {};
    return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** POST { saceNumber, schoolName, province?, subjectsNote? } by a signed-in adult. Header X-Auth-Action: teacher-apply. Never grants the role. */
export async function handleApply(req: Request, deps: SchoolsDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'teacher-apply');
  if (bad) return authJson({ error: bad }, 403);
  try {
    const gate = await requireRole(req, deps.db, [], deps.now);
    if (!gate.ok) return gate.response;
    const b = await body(req);
    if (!b) return authJson({ error: 'invalid request' }, 400);
    const r = await applyAsTeacher(deps.db, gate.session.user.id, b, deps.now);
    return r.ok ? authJson({ ok: true, status: r.status }) : authJson({ error: r.error }, r.status);
  } catch (err) {
    console.error('teacher apply error:', err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

/** GET: the signed-in adult's own application (status, school, masked SACE number, the admin's note on a rejection), or null. */
export async function handleOwnApplication(req: Request, deps: SchoolsDeps): Promise<Response> {
  try {
    const gate = await requireRole(req, deps.db, [], deps.now);
    if (!gate.ok) return gate.response;
    return authJson({ application: await getOwnApplication(deps.db, gate.session.user.id) });
  } catch (err) {
    console.error('teacher application error:', err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

// ---------- classes (ADR 0003 phase 3, part 2) ----------

const joinBurst: Limiter = createLimiter(30, 10 * 60 * 1000);
const JOIN_PER_LEARNER = 10;
const JOIN_WINDOW_MS = 10 * 60 * 1000;

export interface ClassDeps extends SchoolsDeps { sessionSecret: string; ipBurst?: Limiter }
export const classDepsFromEnv = (): ClassDeps => {
  const { env } = getCloudflareContext();
  return { db: d1Adapter(env.DB as never, getCloudflareContext().ctx), now: Date.now(), sessionSecret: String(env.SESSION_SECRET ?? ''), ipBurst: joinBurst };
};

const ID = /^[0-9a-f-]{36}$/i;

/** Runs a teacher request: signed-in adult with the teacher role; writes also need the action header and a matching Origin. */
async function asTeacher(req: Request, deps: SchoolsDeps, action: string | null, run: (teacherId: string, b: Record<string, unknown>) => Promise<Response>): Promise<Response> {
  if (action) {
    const bad = checkWriteRequest(req, action);
    if (bad) return authJson({ error: bad }, 403);
  }
  try {
    const gate = await requireRole(req, deps.db, ['teacher'], deps.now);
    if (!gate.ok) return gate.response;
    const b = action ? await body(req) : {};
    if (!b) return authJson({ error: 'invalid request' }, 400);
    return await run(gate.session.user.id, b);
  } catch (err) {
    console.error(`teacher ${action ?? 'read'} error:`, err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

export const handleListClasses = (req: Request, deps: SchoolsDeps) => asTeacher(req, deps, null, async (tid) => authJson({ classes: await listClasses(deps.db, tid) }));
export const handleCreateClass = (req: Request, deps: SchoolsDeps) =>
  asTeacher(req, deps, 'class-create', async (tid, b) => {
    const r = await createClass(deps.db, tid, b, deps.now);
    return r.ok ? authJson({ class: r.class }, 201) : authJson({ error: r.error }, r.status);
  });
export const handleGetClass = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, null, async (tid) => {
    const c = ID.test(classId) ? await getClass(deps.db, tid, classId) : null;
    if (!c) return authJson({ error: 'Not found' }, 404);
    // learners who joined since the teacher last looked are marked new (the screen then calls /seen)
    const since = await seenAt(deps.db, tid, classId);
    return authJson({ class: { ...c, roster: c.roster.map((m) => ({ ...m, isNew: since !== null && m.joinedAt > since })) } });
  });
export const handleRegenerate = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, 'class-regenerate', async (tid) => {
    const r = await regenerateCode(deps.db, tid, classId);
    return r.ok ? authJson({ joinCode: r.joinCode }) : authJson({ error: r.error }, r.status);
  });
export const handleArchive = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, 'class-archive', async (tid) => {
    const r = await archiveClass(deps.db, tid, classId, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });
export const handleRemoveMember = (req: Request, deps: SchoolsDeps, classId: string, studentId: string) =>
  asTeacher(req, deps, 'class-remove', async (tid) => {
    const r = await removeMember(deps.db, tid, classId, studentId, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });

/** Runs a learner request: the learner's own session cookie (pp_session). */
async function asLearner(req: Request, deps: ClassDeps, action: string | null, run: (studentId: string, b: Record<string, unknown>) => Promise<Response>): Promise<Response> {
  if (action) {
    const bad = checkWriteRequest(req, action);
    if (bad) return authJson({ error: bad }, 403);
  }
  try {
    const cookie = /(?:^|;\s*)pp_session=([^;]+)/.exec(req.headers.get('cookie') ?? '')?.[1];
    const studentId = await verifyLiveSession(deps.db, cookie ? decodeURIComponent(cookie) : undefined, deps.sessionSecret);
    if (!studentId) return authJson({ error: 'Sign in first' }, 401);
    const b = action ? await body(req) : {};
    if (!b) return authJson({ error: 'invalid request' }, 400);
    return await run(studentId, b);
  } catch (err) {
    console.error(`classes ${action ?? 'read'} error:`, err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

const ipOf = (req: Request) => req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

/** POST { code }. Rate limited per learner (durable) and per address, so a code cannot be guessed. The notice text is returned so the app can show what was agreed to. */
export const handleJoin = (req: Request, deps: ClassDeps) =>
  asLearner(req, deps, 'class-join', async (sid, b) => {
    if (deps.ipBurst && !deps.ipBurst.allow(ipOf(req), deps.now)) return authJson({ error: 'Too many tries. Wait a few minutes.' }, 429);
    if (!(await allowDurable(deps.db, `class-join:${sid}`, JOIN_PER_LEARNER, JOIN_WINDOW_MS, deps.now))) return authJson({ error: 'Too many tries. Wait a few minutes.' }, 429);
    const r = await joinClass(deps.db, sid, b.code, deps.now);
    return r.ok ? authJson({ joined: r.joined, alreadyMember: r.alreadyMember }) : authJson({ error: r.error }, r.status);
  });
export const handleMyClasses = (req: Request, deps: ClassDeps) => asLearner(req, deps, null, async (sid) => authJson({ classes: await myClasses(deps.db, sid) }));
export const handleLeave = (req: Request, deps: ClassDeps, classId: string) =>
  asLearner(req, deps, 'class-leave', async (sid) => {
    const r = await leaveClass(deps.db, sid, classId, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });

// ---------- exam scopes (part 3) ----------
import { archiveScope, createScope, listScopes } from './scopes';
import { subjectsForGrade, topicsFor } from '../../shared/topicCatalog';

export const handleListScopes = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, null, async (tid) => {
    const list = ID.test(classId) ? await listScopes(deps.db, tid, classId) : null;
    return list ? authJson({ scopes: list }) : authJson({ error: 'Not found' }, 404);
  });
export const handleCreateScope = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, 'scope-create', async (tid, b) => {
    const r = await createScope(deps.db, tid, classId, b, deps.now);
    return r.ok ? authJson({ scope: r.scope }, 201) : authJson({ error: r.error }, r.status);
  });
export const handleArchiveScope = (req: Request, deps: SchoolsDeps, classId: string, scopeId: string) =>
  asTeacher(req, deps, 'scope-archive', async (tid) => {
    const r = await archiveScope(deps.db, tid, classId, scopeId, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });

/** GET ?grade=6 lists the subjects; ?grade=6&subject=nst lists the topics a scope can hold. The curriculum registry, behind the teacher role. */
export const handleCatalog = (req: Request, deps: SchoolsDeps) =>
  asTeacher(req, deps, null, async () => {
    const url = new URL(req.url);
    const grade = Number(url.searchParams.get('grade'));
    if (!Number.isInteger(grade) || grade < 4 || grade > 12) return authJson({ error: 'Choose a grade from 4 to 12' }, 400);
    const subject = url.searchParams.get('subject');
    if (!subject) return authJson({ subjects: subjectsForGrade(grade) });
    if (!/^[a-z][a-z0-9-]{0,29}$/.test(subject)) return authJson({ error: 'Unknown subject' }, 400);
    return authJson({ topics: topicsFor(grade, subject) });
  });

// ---------- class progress (part 4) ----------
import { buildClassProgress } from './classProgress';

/** GET ?since=YYYY-MM-DD (optional). The teacher's view of one of THEIR classes (ADR 0005 section 4): nicknames only, learners still in the class only. */
export const handleClassProgress = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, null, async (tid) => {
    const since = new URL(req.url).searchParams.get('since') ?? undefined;
    const r = await buildClassProgress(deps.db, tid, classId, since, deps.now);
    return r.ok ? authJson(r.progress) : authJson({ error: r.error }, r.status);
  });

// ---------- one learner (teacher view) ----------
import { loadLearnerDetail } from './learnerDetail';

export const LEARNER_VIEWS_PER_WINDOW = 120;
export const LEARNER_VIEW_WINDOW_MS = 10 * 60 * 1000;

/** GET: one learner of one of THEIR active classes, still a member: the same progress the learner sees, by nickname only. 120 views per teacher per 10 minutes (durable). */
export const handleLearnerProgress = (req: Request, deps: SchoolsDeps, classId: string, studentId: string) =>
  asTeacher(req, deps, null, async (tid) => {
    if (!(await allowDurable(deps.db, `teacher-learner:${tid}`, LEARNER_VIEWS_PER_WINDOW, LEARNER_VIEW_WINDOW_MS, deps.now))) return authJson({ error: 'Too many views. Wait a few minutes.' }, 429);
    const r = await loadLearnerDetail(deps.db, tid, classId, studentId, deps.now);
    return r.ok ? authJson(r.detail) : authJson({ error: r.error }, r.status);
  });

// ---------- new-learner notices (part 6) ----------
import { joinNotices, markJoinsSeen, seenAt } from './notices';

/** GET: how many learners joined each of the teacher's classes since they last looked. In-app only. */
export const handleNotices = (req: Request, deps: SchoolsDeps) => asTeacher(req, deps, null, async (tid) => authJson(await joinNotices(deps.db, tid, deps.now)));
/** POST {}. Header X-Auth-Action: class-seen. The teacher has looked at the class's learners. */
export const handleSeen = (req: Request, deps: SchoolsDeps, classId: string) =>
  asTeacher(req, deps, 'class-seen', async (tid) => {
    const r = await markJoinsSeen(deps.db, tid, classId, deps.now);
    return r.ok ? authJson({ ok: true }) : authJson({ error: r.error }, r.status);
  });
