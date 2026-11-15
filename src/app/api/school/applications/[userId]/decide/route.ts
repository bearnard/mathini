import { handleSchoolDecide } from '../../../../../../lib/server/schools/schoolHttp';
import { depsFromEnv } from '../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ userId: string }> }) {
  return handleSchoolDecide(req, depsFromEnv(), (await ctx.params).userId);
}
