import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { revokeReviewer } from '../../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/** POST { reviewerId }. Header X-Admin-Action: review-revoke. The link stops working at once. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'review-revoke', 'review-revoke', async (db, body) => {
    const rid = body && typeof body === 'object' ? Number((body as { reviewerId?: unknown }).reviewerId) : NaN;
    if (!/^\d{1,9}$/.test(id) || !Number.isInteger(rid)) return adminJson({ error: 'Not found' }, 404);
    return (await revokeReviewer(db, Number(id), rid)) ? adminJson({ ok: true }) : adminJson({ error: 'Reviewer not found' }, 404);
  });
}
