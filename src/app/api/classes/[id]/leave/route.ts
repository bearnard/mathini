import { handleLeave, classDepsFromEnv } from '../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleLeave(req, classDepsFromEnv(), (await ctx.params).id);
}
