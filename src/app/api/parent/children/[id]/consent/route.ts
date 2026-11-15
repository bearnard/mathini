import { handleChildConsent, depsFromEnv } from '../../../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return handleChildConsent(req, depsFromEnv(), id);
}
