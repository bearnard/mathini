import { handleSchoolClass } from '../../../../../../lib/server/schools/schoolHttp';
import { depsFromEnv } from '../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleSchoolClass(req, depsFromEnv(), (await ctx.params).id);
}
