import { adminGet } from '../../../../lib/server/admin/http';
import { devices } from '../../../../lib/server/admin/audience';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'devices', (db, f) => devices(db, f));
}
