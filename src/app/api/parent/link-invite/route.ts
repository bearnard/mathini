import { handleLinkInvite, depsFromEnv } from '../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleLinkInvite(req, depsFromEnv());
}
