import { handleSummaryPrefGet, handleSummaryPrefSet, depsFromEnv } from '../../../../lib/server/parents/summaryHttp';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleSummaryPrefGet(req, depsFromEnv());
}

export async function POST(req: Request) {
  return handleSummaryPrefSet(req, depsFromEnv());
}
