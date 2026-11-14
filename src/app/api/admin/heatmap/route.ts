import { adminGet } from '../../../../lib/server/admin/http';
import { heatmap } from '../../../../lib/server/admin/geo';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'heatmap', (db, f) => heatmap(db, f));
}
