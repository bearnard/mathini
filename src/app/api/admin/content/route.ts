import { adminGet } from '../../../../lib/server/admin/http';
import { content } from '../../../../lib/server/admin/content';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  return adminGet(req, 'content', (db, f) => content(db, f));
}
