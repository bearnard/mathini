import { adminGet } from '../../../../../lib/server/admin/http';
import { recentActions, reportQueue } from '../../../../../lib/server/questions/moderation';

export const dynamic = 'force-dynamic';

// The moderation queue: open reports grouped by question. Holds children's free-text notes, so it is never cached.
export async function GET(req: Request) {
  return adminGet(req, 'question-reports', async (db) => ({ queue: await reportQueue(db), recent: await recentActions(db) }), { cache: false });
}
