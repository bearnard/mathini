import { adminGet } from '../../../../lib/server/admin/http';
import { LEARNER_SORTS, learnersToCsv, listLearners, type LearnerSort } from '../../../../lib/server/admin/learners';

export const dynamic = 'force-dynamic';

/**
 * GET /api/admin/learners?search=&sort=&dir=&limit=   -> JSON list (nickname, grade, figures; no real names)
 * GET /api/admin/learners?format=csv[&names=1]        -> CSV download; real name and school only with names=1
 */
export function GET(req: Request) {
  return adminGet(
    req,
    'learners',
    async (db, f, url) => {
      const q = url.searchParams;
      const sort = q.get('sort');
      const opts = {
        search: (q.get('search') ?? '').slice(0, 60),
        sort: (LEARNER_SORTS as readonly string[]).includes(sort ?? '') ? (sort as LearnerSort) : undefined,
        dir: q.get('dir') === 'asc' ? ('asc' as const) : ('desc' as const),
        limit: Math.min(Number(q.get('limit')) || 200, 1000),
      };
      if (q.get('format') !== 'csv') return listLearners(db, f, opts);
      const names = q.get('names') === '1';
      const { learners } = await listLearners(db, f, { ...opts, limit: 1000, includePrivate: names });
      const stamp = new Date().toISOString().slice(0, 10);
      return new Response(learnersToCsv(learners, names), {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          // The file name warns when the file holds personal information about minors.
          'Content-Disposition': `attachment; filename="learners-${stamp}${names ? '-PERSONAL-DATA' : ''}.csv"`,
          'Cache-Control': 'no-store',
        },
      });
    },
    { cache: false },
  );
}

