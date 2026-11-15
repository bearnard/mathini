import { handleMe, depsFromEnv } from '../../../../lib/server/adultAuth/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleMe(req, depsFromEnv());
}
