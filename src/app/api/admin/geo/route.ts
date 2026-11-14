import { adminGet } from '../../../../lib/server/admin/http';
import { geo } from '../../../../lib/server/admin/geo';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'geo', (db, f) => geo(db, f));
}
