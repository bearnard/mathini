import { handleReview, reviewJson } from '../../../lib/server/teacherReview/http';
import { loadReviewerPack, touchSeen } from '../../../lib/server/teacherReview/store';

export const dynamic = 'force-dynamic';

/** GET: the pack as this reviewer sees it. Needs X-Review-Action: load and the link in the X-Review-Token header (never in the URL, which request logs record). */
export async function GET(req: Request) {
  return handleReview(req, 'load', async ({ db, now, reviewer, pack }) => {
    await touchSeen(db, reviewer, now);
    return reviewJson(await loadReviewerPack(db, reviewer, pack));
  });
}
