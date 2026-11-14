import { adminGet, adminJson, validLearnerId } from '../../../../../../lib/server/admin/http';
import { learnerPrivate } from '../../../../../../lib/server/admin/learners';

export const dynamic = 'force-dynamic';

/** Real name, school and age of ONE learner. Only requested when the admin clicks "Show private details"; never cached. */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminGet(
    req,
    'learner-private',
    async (db) => {
      if (!validLearnerId(id)) return adminJson({ error: 'Not found' }, 404);
      return (await learnerPrivate(db, id)) ?? adminJson({ error: 'Not found' }, 404);
    },
    { cache: false },
  );
}
