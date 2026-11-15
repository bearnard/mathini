import { handleListChildren, depsFromEnv } from '../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleListChildren(req, depsFromEnv());
}
