import { handleSchoolBoard, leaderboardDepsFromEnv } from '../../../../../lib/server/leaderboard/http';

export const dynamic = 'force-dynamic';

/** GET: this week's board of a school the learner is in through a teacher's class (404 for any other school). */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleSchoolBoard(req, leaderboardDepsFromEnv(), (await ctx.params).id);
}
