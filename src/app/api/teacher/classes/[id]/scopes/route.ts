import { handleListScopes, handleCreateScope, depsFromEnv } from '../../../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleListScopes(req, depsFromEnv(), (await ctx.params).id);
}

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleCreateScope(req, depsFromEnv(), (await ctx.params).id);
}
