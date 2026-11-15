import { adminJson, adminWrite } from '../../../../../../../../lib/server/admin/http';
import { suggestItemMerge } from '../../../../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/**
 * POST {}. Header X-Admin-Action: review-merge. Asks the AI for ONE merged version of the item from its reviewers' answers (names are never sent).
 * Answers { result: { merged, rationale, disagreements, source: 'agreement' | 'ai' | 'unavailable', findings } | null }. Nothing is saved or applied.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string; itemId: string }> }) {
  const { id, itemId } = await ctx.params;
  return adminWrite(req, 'review-merge', 'review-merge', async (db) => {
    if (!/^\d{1,9}$/.test(id) || !/^\d{1,9}$/.test(itemId)) return adminJson({ error: 'Not found' }, 404);
    const r = await suggestItemMerge(db, Number(id), Number(itemId));
    return r.ok ? adminJson({ result: r.result }) : adminJson({ error: r.error }, r.status);
  });
}
