import { adminGet } from '../../../../lib/server/admin/http';
import { live } from '../../../../lib/server/admin/live';

export const dynamic = 'force-dynamic';

// Live is "right now": never cached.
export function GET(req: Request) {
  return adminGet(req, 'live', (db) => live(db), { cache: false });
}
