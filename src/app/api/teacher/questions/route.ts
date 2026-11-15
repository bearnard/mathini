import { handleBank, depsFromEnv } from '../../../../lib/server/moderation/http';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleBank(req, depsFromEnv());
}
