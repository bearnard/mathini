import { handleNotices, depsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleNotices(req, depsFromEnv());
}
