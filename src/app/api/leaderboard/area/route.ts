import { handleAreaBoard, leaderboardDepsFromEnv } from '../../../../lib/server/leaderboard/http';

export const dynamic = 'force-dynamic';

/** GET ?level=district|province: SCHOOLS ranked by average weekly points per active learner. Never a child. */
export async function GET(req: Request) {
  return handleAreaBoard(req, leaderboardDepsFromEnv());
}
