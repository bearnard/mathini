import { adminJson, adminWrite, invalidateAdminCache } from '../../../../../../lib/server/admin/http';
import { restoreVersion } from '../../../../../../lib/server/questions/edit';

export const dynamic = 'force-dynamic';

/** POST { expectedVersionId, versionId, reason }: writes a NEW version that copies an older one. Same protection as edit (X-Admin-Action: question-restore). */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'question-restore', 'question-restore', async (db, body, email) => {
    const r = await restoreVersion(db, id, body, email);
    if (r.ok) {
      invalidateAdminCache();
      return adminJson({ ok: true, versionId: r.versionId, versionNo: r.versionNo, reviewsReset: r.reviewsReset });
    }
    return adminJson({ error: r.error }, r.status);
  });
}
