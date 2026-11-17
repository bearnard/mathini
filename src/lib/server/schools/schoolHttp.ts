// HTTP handlers for a school admin (ADR 0003 section 6), against injected dependencies so tests use a fake clock and database. The routes are one-liners.
// The school is ALWAYS checked against the caller's own appointments (school_admins), never trusted from the request.
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { readCapped } from '../adultAuth/http';
import { buildClassProgress } from './classProgress';
import { buildSchoolProgress, canAdminSchool, recommendAsSchoolAdmin, pendingForSchool, schoolsOfAdmin } from './schoolAdmins';
import type { SchoolsDeps } from './http';

type Handler = (user: { userId: string; email: string }, schoolId: string, schools: { id: string; name: string }[]) => Promise<Response>;

/** Signed-in adult with the school_admin role who really runs the chosen school (?school=, default their first). */
async function asSchoolAdmin(req: Request, deps: SchoolsDeps, run: Handler): Promise<Response> {
  try {
    const gate = await requireRole(req, deps.db, ['school_admin'], deps.now);
    if (!gate.ok) return gate.response;
    const user = { userId: gate.session.user.id, email: gate.session.user.email };
    const schools = await schoolsOfAdmin(deps.db, user.userId);
    if (schools.length === 0) return authJson({ error: 'Not allowed' }, 403);
    const asked = new URL(req.url).searchParams.get('school');
    const schoolId = asked ?? schools[0].id;
    if (!(await canAdminSchool(deps.db, user.userId, schoolId))) return authJson({ error: 'Not found' }, 404);
    return await run(user, schoolId, schools);
  } catch (err) {
    console.error('school admin error:', err);
    return authJson({ error: 'unavailable' }, 503);
  }
}

/** GET ?school= : the schools this adult runs, the pending teacher applications naming the chosen school (masked SACE) and its school-level progress. */
export const handleSchoolOverview = (req: Request, deps: SchoolsDeps) =>
  asSchoolAdmin(req, deps, async (_u, schoolId, schools) => {
    const [applications, progress] = await Promise.all([pendingForSchool(deps.db, schoolId), buildSchoolProgress(deps.db, schoolId, deps.now)]);
    return authJson({ schools, schoolId, applications, progress });
  });

/** GET ?school=&since= : one class of the chosen school, the same view its teacher has (nicknames only). */
export const handleSchoolClass = (req: Request, deps: SchoolsDeps, classId: string) =>
  asSchoolAdmin(req, deps, async (_u, schoolId) => {
    const since = new URL(req.url).searchParams.get('since') ?? undefined;
    const r = await buildClassProgress(deps.db, { schoolId }, classId, since, deps.now);
    return r.ok ? authJson(r.progress) : authJson({ error: r.error }, r.status);
  });

/** POST { decision: 'recommend' | 'not_recommend', note? } with ?school= . Header X-Auth-Action: school-decide. Records a recommendation only: it never grants the teacher role (the owner does, in /admin/teachers). */
export async function handleSchoolDecide(req: Request, deps: SchoolsDeps, targetUserId: string): Promise<Response> {
  const bad = checkWriteRequest(req, 'school-decide');
  if (bad) return authJson({ error: bad }, 403);
  return asSchoolAdmin(req, deps, async (user, schoolId) => {
    const text = await readCapped(req, 2048);
    let b: Record<string, unknown> = {};
    try { const v = text ? JSON.parse(text) : {}; if (v && typeof v === 'object' && !Array.isArray(v)) b = v as Record<string, unknown>; else return authJson({ error: 'invalid request' }, 400); } catch { return authJson({ error: 'invalid request' }, 400); }
    const r = await recommendAsSchoolAdmin(deps.db, user, schoolId, targetUserId, b.decision, b.note, deps.now);
    return r.ok ? authJson({ ok: true, verdict: r.verdict }) : authJson({ error: r.error }, r.status);
  });
}
