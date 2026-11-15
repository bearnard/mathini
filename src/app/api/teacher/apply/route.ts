import { handleApply, depsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleApply(req, depsFromEnv());
}
