import { handleCreateInvite, depsFromEnv } from '../../../../../lib/server/parents/http';

export const dynamic = 'force-dynamic';

/** From the learner's own screen: a link a parent can open to link this learner. Needs the learner's pp_session cookie. */
export async function POST(req: Request) {
  return handleCreateInvite(req, depsFromEnv());
}
