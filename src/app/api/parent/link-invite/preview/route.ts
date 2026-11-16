import { handleInvitePreview, depsFromEnv } from '../../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleInvitePreview(req, depsFromEnv());
}
