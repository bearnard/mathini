import { adminGet } from '../../../../lib/server/admin/http';
import { funnel } from '../../../../lib/server/admin/audience';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'funnel', (db, f) => funnel(db, f));
}
