import { handleClassBoard, leaderboardDepsFromEnv } from '../../../../../lib/server/leaderboard/http';

export const dynamic = 'force-dynamic';

/** GET: this week's board of one of the learner's own active classes (404 for any other class). */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return handleClassBoard(req, leaderboardDepsFromEnv(), (await ctx.params).id);
}
