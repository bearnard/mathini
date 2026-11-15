import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { inviteReviewer } from '../../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/**
 * POST { displayName, note?, days? }. Header X-Admin-Action: review-invite.
 * The answer carries the token ONCE (the page builds the link from it and shows it for copying). Only its hash is stored, so it cannot be shown again.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'review-invite', 'review-invite', async (db, body) => {
    if (!/^\d{1,9}$/.test(id)) return adminJson({ error: 'Not found' }, 404);
    const b = body && typeof body === 'object' ? (body as { displayName?: unknown; note?: unknown; days?: unknown }) : {};
    const r = await inviteReviewer(db, Number(id), b);
    return r.ok ? adminJson({ ok: true, reviewerId: r.reviewerId, token: r.token, expiresAt: r.expiresAt }) : adminJson({ error: r.error }, r.status);
  });
}
