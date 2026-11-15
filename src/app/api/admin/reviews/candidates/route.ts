import { adminGet } from '../../../../../lib/server/admin/http';
import { findCandidates, type CandidateFilters } from '../../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/** Questions to put in a pack: ?subject=&grade=&language=afrikaans|isixhosa|english&needsCheck=1&ids=a,b&limit=. */
export async function GET(req: Request) {
  return adminGet(req, 'reviews-candidates', async (db, _f, url) => {
    const p = url.searchParams;
    const lang = p.get('language');
    const f: CandidateFilters = {
      subject: p.get('subject')?.slice(0, 60) || undefined,
      grade: p.get('grade') && /^\d{1,2}$/.test(p.get('grade')!) ? Number(p.get('grade')) : undefined,
      language: lang === 'afrikaans' || lang === 'isixhosa' || lang === 'english' ? lang : undefined,
      needsCheck: p.get('needsCheck') === '1',
      ids: p.get('ids')?.split(',').map((x) => x.trim()).filter(Boolean),
      limit: p.get('limit') && /^\d{1,3}$/.test(p.get('limit')!) ? Number(p.get('limit')) : 100,
    };
    return { candidates: await findCandidates(db, f) };
  }, { cache: false });
}
