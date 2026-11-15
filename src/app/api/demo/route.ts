import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { routeLimited } from '../../../lib/server/edgeLimitRoute';
import { isDemoGrade, loadDemo } from '../../../lib/server/demo/demoQuestions';

export const dynamic = 'force-dynamic';

/**
 * GET /api/demo?grade=5..12: three curated multiple-choice questions for the landing page's "Try it now" demo. PUBLIC and READ-ONLY: no session is read, and
 * nothing is recorded (no attempts, runs, review items or events). The key and the explanation are in the answer so the page can mark the demo itself.
 * Rate-limited per IP at the edge (EDGE_PER_IP); the question pool is cached at the edge for a few minutes (see demoQuestions.ts); any D1 problem
 * answers from a small static set, so the demo always works.
 */
export async function GET(req: NextRequest) {
  const headers = { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' };
  const limited = await routeLimited(req, 'demo');
  if (limited) return limited;
  const grade = Number(req.nextUrl.searchParams.get('grade'));
  if (!Number.isInteger(grade) || !isDemoGrade(grade)) {
    return NextResponse.json({ error: 'Pick a grade from 5 to 12.' }, { status: 400, headers });
  }
  let db: D1Database | null = null;
  try {
    db = getCloudflareContext().env.DB ?? null;
  } catch {
    db = null;
  }
  return NextResponse.json(await loadDemo(grade, { db }), { headers });
}
