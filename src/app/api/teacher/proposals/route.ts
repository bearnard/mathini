import { handleMine, handlePropose, depsFromEnv } from '../../../../lib/server/moderation/http';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleMine(req, depsFromEnv());
}

export async function POST(req: Request) {
  return handlePropose(req, depsFromEnv());
}
