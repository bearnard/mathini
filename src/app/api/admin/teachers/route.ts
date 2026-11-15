import { adminGet } from '../../../../lib/server/admin/http';
import { listApplications, type ApplicationStatus } from '../../../../lib/server/schools/teachers';

export const dynamic = 'force-dynamic';

/** GET ?status=pending|approved|rejected (optional). The only place the SACE number is shown. Never cached. */
export async function GET(req: Request) {
  return adminGet(req, 'teachers', async (db, _f, url) => {
    const s = url.searchParams.get('status');
    const status = s === 'pending' || s === 'approved' || s === 'rejected' ? (s as ApplicationStatus) : undefined;
    return { applications: await listApplications(db, status) };
  }, { cache: false });
}
