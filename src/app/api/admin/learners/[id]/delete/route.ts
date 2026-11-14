import { adminJson, adminWrite, invalidateAdminCache, validLearnerId } from '../../../../../../lib/server/admin/http';
import { deleteLearner } from '../../../../../../lib/server/admin/learners';

export const dynamic = 'force-dynamic';

/**
 * POST { "confirm": "<exact nickname>" }. Needs the Access assertion, the X-Admin-Action: delete header
 * and a same-origin Origin. Deletes the learner and everything linked to them in one batch, plus an
 * audit row (counts, admin email, time; no names).
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'learner-delete', 'delete', async (db, body, email) => {
    if (!validLearnerId(id)) return adminJson({ error: 'Not found' }, 404);
    const confirm = body && typeof body === 'object' ? (body as { confirm?: unknown }).confirm : undefined;
    const r = await deleteLearner(db, id, confirm, email);
    if (r.ok) invalidateAdminCache(); // counts and lists change: drop every cached answer
    return r.ok ? adminJson({ ok: true, deleted: r.deleted }) : adminJson({ error: r.error }, r.status);
  });
}
