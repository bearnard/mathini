import { adminGet } from '../../../../lib/server/admin/http';
import { PROPOSAL_STATUSES, type ProposalStatus } from '../../../../lib/shared/moderation';
import { ownerList } from '../../../../lib/server/moderation/views';

export const dynamic = 'force-dynamic';

/** GET ?status=waiting (default) | all | returned | approved | rejected | stale | withdrawn. Teacher proposals with the question they are about. Never cached. */
export async function GET(req: Request) {
  return adminGet(req, 'proposals', async (db, _f, url) => {
    const s = url.searchParams.get('status') ?? 'waiting';
    const status = s === 'waiting' || s === 'all' || (PROPOSAL_STATUSES as readonly string[]).includes(s) ? (s as ProposalStatus | 'all' | 'waiting') : 'waiting';
    return { proposals: await ownerList(db, status) };
  }, { cache: false });
}
