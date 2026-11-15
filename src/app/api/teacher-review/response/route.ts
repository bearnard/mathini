import { handleReview, reviewJson } from '../../../../lib/server/teacherReview/http';
import { saveResponse } from '../../../../lib/server/teacherReview/store';

export const dynamic = 'force-dynamic';

/** POST one answer (autosave). Needs X-Review-Action: save and X-Review-Token. 400 bad input, 404 item not in this pack. */
export async function POST(req: Request) {
  return handleReview(req, 'save', async ({ db, now, reviewer, body }) => {
    const r = await saveResponse(db, reviewer, body, now);
    return r.ok ? reviewJson({ ok: true, answered: r.answered }) : reviewJson({ error: r.error }, r.status);
  });
}
