import { adminGet, adminJson } from '../../../../../lib/server/admin/http';
import { packResults } from '../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/** One pack: reviewers (no tokens, only their state), items, every response side by side, agreement and decisions. */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminGet(req, 'review-pack', async (db) => {
    if (!/^\d{1,9}$/.test(id)) return adminJson({ error: 'Not found' }, 404);
    return (await packResults(db, Number(id))) ?? adminJson({ error: 'Not found' }, 404);
  }, { cache: false });
}
