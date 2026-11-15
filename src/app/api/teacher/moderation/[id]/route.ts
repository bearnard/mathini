import { handleModDecide, depsFromEnv } from '../../../../../lib/server/moderation/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleModDecide(req, depsFromEnv(), (await ctx.params).id);
}
