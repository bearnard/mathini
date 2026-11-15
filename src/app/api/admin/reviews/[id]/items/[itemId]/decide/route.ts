import { adminJson, adminWrite, invalidateAdminCache } from '../../../../../../../../lib/server/admin/http';
import { decideItem, type DecideInput } from '../../../../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/**
 * POST { decision: 'accept_merged' | 'accept_reviewer' | 'edit_accept' | 'keep_original' | 'ask_again', reviewerId?, proposal?, changeKind?, acknowledgeWarnings?, note? }.
 * Header X-Admin-Action: review-decide. Questions go through the question edit pipeline (validator, new version, audit row); lesson lines go to lesson_change_queue.
 * 400 bad input, 404 unknown, 409 already decided / question moved on / warnings to acknowledge, 422 the quality checker rejects it.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string; itemId: string }> }) {
  const { id, itemId } = await ctx.params;
  return adminWrite(req, 'review-decide', 'review-decide', async (db, body, email) => {
    if (!/^\d{1,9}$/.test(id) || !/^\d{1,9}$/.test(itemId)) return adminJson({ error: 'Not found' }, 404);
    const r = await decideItem(db, Number(id), Number(itemId), body && typeof body === "object" ? (body as DecideInput) : {}, email);
    if (r.ok) {
      invalidateAdminCache();
      return adminJson(r);
    }
    return adminJson({ error: r.error, findings: r.findings ?? null, needsAcknowledgement: r.needsAcknowledgement === true }, r.status);
  }, { maxBytes: 8192 });
}
