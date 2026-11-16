import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter } from '../../../lib/server/admin/db';
import { allowDurable } from '../../../lib/server/adultAuth/rateLimit';
import { issueChallenges } from '../../../lib/server/exerciseChallenge';
import { isExerciseKind } from '../../../lib/shared/g5Exercises';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../lib/server/session';

export const dynamic = 'force-dynamic';
const CHALLENGE_REQUESTS_PER_HOUR = 60;

/** POST { kind, count? }: fresh signed challenges for a generated Grade 5 exercise (see exerciseChallenge.ts). Signed-in learners only. */
export async function POST(req: NextRequest) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    const body = (await req.json().catch(() => null)) as { kind?: unknown; count?: unknown } | null;
    if (!isExerciseKind(body?.kind)) return NextResponse.json({ error: 'Invalid request' }, { status: 400, headers });
    const { env } = getCloudflareContext();
    const db = d1Adapter(env.DB as never);
    const studentId = await verifyLiveSession(db, req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401, headers });
    const now = Date.now();
    if (!(await allowDurable(db, `exercise:${studentId}`, CHALLENGE_REQUESTS_PER_HOUR, 3_600_000, now))) {
      return NextResponse.json({ error: 'Too many requests. Wait a little.' }, { status: 429, headers: { ...headers, 'Retry-After': '120' } });
    }
    const count = typeof body?.count === 'number' ? body.count : 10;
    return NextResponse.json({ challenges: await issueChallenges(env.SESSION_SECRET, studentId, body!.kind as never, count, now) }, { headers });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers });
  }
}
