// HTTP handlers for the teacher application (ADR 0003 phase 3), written against injected dependencies so tests run them with a fake clock and database.
// The Next.js routes are one-liners that call these with depsFromEnv().
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { readCapped } from '../adultAuth/http';
import { applyAsTeacher, getOwnApplication } from './teachers';

export const MAX_BODY_BYTES = 2048;

export interface SchoolsDeps { db: AdminDb; now: number }
export const depsFromEnv = (): SchoolsDeps => ({ db: d1Adapter(getCloudflareContext().env.DB as never), now: Date.now() });

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
