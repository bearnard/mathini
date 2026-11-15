import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { decideProposal } from '../../../../../../lib/server/moderation/proposals';

export const dynamic = 'force-dynamic';

/**
 * POST { decision: 'approve' | 'reject', reason }. Header X-Admin-Action: proposal-decide. The owner can decide any proposal; the reason is required.
 * An approved proposal is applied through the same pipeline as an owner edit (new version, audit row, review reset on a change of meaning).
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'proposal-decide', 'proposal-decide', async (db, body, adminEmail) => {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return adminJson({ error: 'Not found' }, 404);
    const b = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
    const r = await decideProposal(db, { kind: 'owner', email: adminEmail }, id, b.decision, b.reason, Date.now());
    return r.ok ? adminJson({ ok: true, status: r.status, versionId: r.versionId, questionId: r.questionId }) : adminJson({ error: r.error, findings: r.findings }, r.status);
  });
}
