import { adminGet } from '../../../../lib/server/admin/http';
import { overview } from '../../../../lib/server/admin/queries';

export const dynamic = 'force-dynamic';

// requireAdmin() runs inside adminGet() before anything else (see lib/server/admin/http.ts).
export function GET(req: Request) {
  return adminGet(req, 'overview', (db, f) => overview(db, f));
}
