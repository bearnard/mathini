import { handleArchiveScope, depsFromEnv } from '../../../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string; scopeId: string }> }) {
  const { id, scopeId } = await ctx.params;
  return handleArchiveScope(req, depsFromEnv(), id, scopeId);
}
