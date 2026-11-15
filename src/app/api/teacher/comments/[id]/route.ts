import { handleCommentRemove, depsFromEnv } from '../../../../../lib/server/moderation/http';
export const dynamic = 'force-dynamic';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  return handleCommentRemove(req, depsFromEnv(), (await params).id);
}
