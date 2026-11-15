import { handleLearnerProgress, depsFromEnv } from '../../../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, ctx: { params: Promise<{ id: string; studentId: string }> }) {
  const { id, studentId } = await ctx.params;
  return handleLearnerProgress(req, depsFromEnv(), id, studentId);
}
