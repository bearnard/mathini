import { handleRemoveMember, depsFromEnv } from '../../../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string; studentId: string }> }) {
  const { id, studentId } = await ctx.params;
  return handleRemoveMember(req, depsFromEnv(), id, studentId);
}
