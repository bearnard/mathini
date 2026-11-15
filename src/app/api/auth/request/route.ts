import { handleRequestLink, depsFromEnv } from '../../../../lib/server/adultAuth/http';
import { routeLimited } from '../../../../lib/server/edgeLimitRoute';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const limited = await routeLimited(req, 'auth-request');
  if (limited) return limited;
  return handleRequestLink(req, depsFromEnv());
}
