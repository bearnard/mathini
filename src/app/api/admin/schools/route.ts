import { adminGet } from '../../../../lib/server/admin/http';
import { listSchoolsForAdmin } from '../../../../lib/server/schools/schoolAdmins';

export const dynamic = 'force-dynamic';

/** GET: every school with its teacher and class counts and its school admins. Never cached. */
export async function GET(req: Request) {
  return adminGet(req, 'schools', async (db) => ({ schools: await listSchoolsForAdmin(db) }), { cache: false });
}
