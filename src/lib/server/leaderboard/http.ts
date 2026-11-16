// HTTP handlers of the scoped leaderboard, against injected dependencies (the routes are one-liners). Every handler identifies the learner from the
// pp_session cookie ONLY: there is no parameter that names another learner. Not signed in: 401. A board the learner may not see (not their class, not
// their school, an archived class, an unknown id): 404, the same answer as "no such board", so ids cannot be probed.
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { verifyLiveSession } from '../session';
import { areaBoard, classBoard, overview, schoolBoard } from './boards';

export interface LeaderboardDeps { db: AdminDb; now: number; sessionSecret: string }
export const leaderboardDepsFromEnv = (): LeaderboardDeps => {
  const { env, ctx } = getCloudflareContext();
  return { db: d1Adapter(env.DB as never, ctx), now: Date.now(), sessionSecret: String(env.SESSION_SECRET ?? '') };
};

const HEADERS = { 'Cache-Control': 'private, no-store' };
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: HEADERS });
const NOT_FOUND = () => json({ error: 'Not found' }, 404);

async function asLearner(req: Request, deps: LeaderboardDeps, run: (studentId: string) => Promise<Response>): Promise<Response> {
  try {
    const cookie = /(?:^|;\s*)pp_session=([^;]+)/.exec(req.headers.get('cookie') ?? '')?.[1];
    const studentId = await verifyLiveSession(deps.db, cookie ? decodeURIComponent(cookie) : undefined, deps.sessionSecret);
    if (!studentId) return json({ error: 'Sign in first' }, 401);
    return await run(studentId);
  } catch (err) {
    console.error('leaderboard error:', err);
    return json({ error: 'unavailable' }, 503);
  }
}

/** GET /api/leaderboard: the learner's own class and school list and personal bests. No other child appears in it. */
export const handleOverview = (req: Request, deps: LeaderboardDeps) => asLearner(req, deps, async (sid) => json(await overview(deps.db, sid, deps.now)));

/** GET /api/leaderboard/class/:id */
export const handleClassBoard = (req: Request, deps: LeaderboardDeps, classId: string) =>
  asLearner(req, deps, async (sid) => {
    const b = await classBoard(deps.db, sid, classId, deps.now);
    return b ? json({ board: b }) : NOT_FOUND();
  });

/** GET /api/leaderboard/school/:id */
export const handleSchoolBoard = (req: Request, deps: LeaderboardDeps, schoolId: string) =>
  asLearner(req, deps, async (sid) => {
    const b = await schoolBoard(deps.db, sid, schoolId, deps.now);
    return b ? json({ board: b }) : NOT_FOUND();
  });

/** GET /api/leaderboard/area?level=district|province[&school=ID]: schools only. */
export const handleAreaBoard = (req: Request, deps: LeaderboardDeps) =>
  asLearner(req, deps, async (sid) => {
    const url = new URL(req.url);
    const level = url.searchParams.get('level');
    if (level !== 'district' && level !== 'province') return json({ error: 'Not found' }, 404);
    const r = await areaBoard(deps.db, sid, level, url.searchParams.get('school'), deps.now);
    return r ? json(r) : NOT_FOUND();
  });
