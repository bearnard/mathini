import { adminGet, adminJson, validLearnerId } from '../../../../../lib/server/admin/http';
import { learnerDetail } from '../../../../../lib/server/admin/learners';

export const dynamic = 'force-dynamic';

// No real name, school, age, login code or PIN in this response (see ./private for the opt-in details).
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminGet(
    req,
    'learner',
    async (db, f) => {
      if (!validLearnerId(id)) return adminJson({ error: 'Not found' }, 404);
      return (await learnerDetail(db, id, f)) ?? adminJson({ error: 'Not found' }, 404);
    },
    // Never cached: it holds one child's data, and after a deletion it must not be served from memory.
    { cache: false },
  );
}
