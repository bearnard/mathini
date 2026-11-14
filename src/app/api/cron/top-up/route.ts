import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { generateItems } from '../../../../lib/server/gemini';
import { DEFAULT_LIMITS, makeGeminiEmbed, runTopUp } from '../../../../lib/server/topUp';
import { limitsFromEnv } from '../../../../lib/server/scheduled';

export const dynamic = 'force-dynamic';

// Manual trigger for the top-up that the weekly scheduled handler runs (src/worker.ts -> runScheduled). Same code, same budget.
// Protected by ?secret= when CRON_SECRET is set.
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const { env } = getCloudflareContext();
  if (env.CRON_SECRET && secret !== env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'GEMINI_API_KEY not configured' }, { status: 500 });
  }

  // Optional per-call overrides for a bigger manual refill on a paid plan: ?maxOps=&maxAccepted=&maxTasks= (capped).
  const n = (name: string, max: number): number | undefined => {
    const v = Number(req.nextUrl.searchParams.get(name));
    return Number.isInteger(v) && v > 0 ? Math.min(v, max) : undefined;
  };
  const limits = limitsFromEnv(env as never, {
    ...(n('maxOps', 900) ? { maxOps: n('maxOps', 900)! } : {}),
    ...(n('maxAccepted', 400) ? { maxAccepted: n('maxAccepted', 400)! } : {}),
    ...(n('maxTasks', 40) ? { maxTasks: n('maxTasks', 40)! } : {}),
    ...(n('maxOps', 900) ? { maxApiCalls: Math.max(DEFAULT_LIMITS.maxApiCalls, n('maxOps', 900)!) } : {}),
  });
  const summary = await runTopUp(
    { db: env.DB, generate: (prompt) => generateItems(prompt, apiKey), embed: makeGeminiEmbed(apiKey), vector: env.QUESTIONS_IDX },
    limits,
  );
  return NextResponse.json({ ok: true, ...summary });
}
