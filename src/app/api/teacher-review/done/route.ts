import { handleReview, reviewJson } from '../../../../lib/server/teacherReview/http';
import { markDone } from '../../../../lib/server/teacherReview/store';

export const dynamic = 'force-dynamic';

/** POST: the reviewer is finished. Needs X-Review-Action: done and X-Review-Token. */
export async function POST(req: Request) {
  return handleReview(req, 'done', async ({ db, now, reviewer }) => {
    await markDone(db, reviewer, now);
    return reviewJson({ ok: true });
  });
}
