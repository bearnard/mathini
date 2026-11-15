import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { removeComment } from '../../../../../../lib/server/moderation/discussion';

export const dynamic = 'force-dynamic';

/** POST {}. Header X-Admin-Action: comment-remove. The owner takes down any comment (the text is hidden, the row stays; removed_by records the owner's email). */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'comment-remove', 'comment-remove', async (db, _body, adminEmail) => {
    const r = await removeComment(db, { owner: adminEmail }, id, Date.now());
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
