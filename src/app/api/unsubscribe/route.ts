import { handleUnsubscribe, depsFromEnv } from '../../../lib/server/parents/summaryHttp';

export const dynamic = 'force-dynamic';

// POST only (no GET): a mail scanner opening the link cannot unsubscribe anyone by accident.
export async function POST(req: Request) {
  return handleUnsubscribe(req, depsFromEnv());
}
