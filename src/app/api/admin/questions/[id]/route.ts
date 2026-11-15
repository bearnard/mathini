import { adminGet, adminJson } from '../../../../../lib/server/admin/http';
import { questionDetail } from '../../../../../lib/server/questions/edit';

export const dynamic = 'force-dynamic';

/** The question as the edit form needs it: current wording, history and audit trail. Never cached. */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminGet(req, 'question-detail', async (db) => {
    const d = await questionDetail(db, id);
    return d ?? adminJson({ error: 'Not found' }, 404);
  }, { cache: false });
}
