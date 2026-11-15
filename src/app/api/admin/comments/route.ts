import { adminGet, adminJson } from '../../../../lib/server/admin/http';
import { listCommentsForOwner } from '../../../../lib/server/moderation/discussion';

export const dynamic = 'force-dynamic';

/** GET ?question=<id> or ?proposal=<id>: the discussion thread, for the owner. Never cached. */
export async function GET(req: Request) {
  return adminGet(req, 'comments', async (db, _f, url) => {
    const q = url.searchParams.get('question'); const p = url.searchParams.get('proposal');
    const target = q && !p ? { questionId: q } : p && !q ? { proposalId: p } : null;
    if (!target) return adminJson({ error: 'Choose a question or a proposal' }, 400);
    const r = await listCommentsForOwner(db, target);
    return r.ok ? { comments: r.comments } : adminJson({ error: r.error }, r.status);
  }, { cache: false });
}
