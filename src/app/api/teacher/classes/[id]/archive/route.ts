import { handleArchive, depsFromEnv } from '../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleArchive(req, depsFromEnv(), (await ctx.params).id);
}
