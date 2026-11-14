import { adminJson, adminWrite, invalidateAdminCache } from '../../../../../../lib/server/admin/http';
import { reinstateQuestion } from '../../../../../../lib/server/questions/moderation';

export const dynamic = 'force-dynamic';

/** POST { "reason": "..." }. Needs the Access assertion, the X-Admin-Action: question-reinstate header and a same-origin Origin. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'question-reinstate', 'question-reinstate', async (db, body, email) => {
    const reason = body && typeof body === 'object' ? (body as { reason?: unknown }).reason : undefined;
    const r = await reinstateQuestion(db, id, reason, email);
    if (r.ok) invalidateAdminCache();
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
