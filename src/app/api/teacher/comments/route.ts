import { handleComment, handleComments, depsFromEnv } from '../../../../lib/server/moderation/http';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return handleComments(req, depsFromEnv());
}

export async function POST(req: Request) {
  return handleComment(req, depsFromEnv());
}
