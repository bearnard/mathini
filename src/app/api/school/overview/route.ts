import { handleSchoolOverview } from '../../../../lib/server/schools/schoolHttp';
import { depsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleSchoolOverview(req, depsFromEnv());
}
