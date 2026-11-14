import { adminJson, adminWrite, invalidateAdminCache } from '../../../../../../lib/server/admin/http';
import { refreshItemFlags } from '../../../../../../lib/server/questions/itemAnalysis';

export const dynamic = 'force-dynamic';

/** POST (empty body). Recomputes the item-analysis flags now (the nightly job does the same). Needs X-Admin-Action: question-flags-refresh. */
export async function POST(req: Request) {
  return adminWrite(req, 'question-flags-refresh', 'question-flags-refresh', async (db) => {
    const r = await refreshItemFlags(db);
    invalidateAdminCache();
    return adminJson({ ok: true, flags: r.flags });
  });
}
