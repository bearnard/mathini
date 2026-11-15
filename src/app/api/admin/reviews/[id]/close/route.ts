import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { closePack } from '../../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/** POST {}. Header X-Admin-Action: review-close. No more invitations; existing links keep working until they expire or are revoked. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'review-close', 'review-close', async (db) => {
    if (!/^\d{1,9}$/.test(id)) return adminJson({ error: 'Not found' }, 404);
    return (await closePack(db, Number(id))) ? adminJson({ ok: true }) : adminJson({ error: 'Not found' }, 404);
  });
}
