import { handleOverview, leaderboardDepsFromEnv } from '../../../lib/server/leaderboard/http';

export const dynamic = 'force-dynamic';

/** GET: the signed-in learner's scoped boards and personal bests (docs/notes/leaderboard.md). The old global board is gone: nobody sees strangers. */
export async function GET(req: Request) {
  return handleOverview(req, leaderboardDepsFromEnv());
}
