import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { verifyQuestion } from '../../../../../../lib/server/moderation/proposals';

export const dynamic = 'force-dynamic';

/** POST {}. Header X-Admin-Action: question-verify. Marks the CURRENT version teacher-verified; any later edit makes it unverified again. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'question-verify', 'question-verify', async (db) => {
    if (!/^[0-9a-f]{12}$/.test(id)) return adminJson({ error: 'Not found' }, 404);
    const r = await verifyQuestion(db, { kind: 'owner', email: 'owner' }, id, Date.now());
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
