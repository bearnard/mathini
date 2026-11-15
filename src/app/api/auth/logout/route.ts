import { handleLogout, depsFromEnv } from '../../../../lib/server/adultAuth/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleLogout(req, depsFromEnv());
}
