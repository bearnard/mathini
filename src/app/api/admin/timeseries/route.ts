import { adminGet } from '../../../../lib/server/admin/http';
import { dailySeries } from '../../../../lib/server/admin/queries';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'timeseries', async (db, f) => ({ days: await dailySeries(db, f) }));
}
