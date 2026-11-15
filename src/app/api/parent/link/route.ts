import { handleLinkPin, depsFromEnv } from '../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleLinkPin(req, depsFromEnv());
}
