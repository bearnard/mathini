import { handleJoin, classDepsFromEnv } from '../../../../lib/server/schools/http';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  return handleJoin(req, classDepsFromEnv());
}
