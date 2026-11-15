import { handleChildProgress, depsFromEnv } from '../../../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return handleChildProgress(req, depsFromEnv(), id);
}
