import { adminGet, adminJson, adminWrite } from '../../../../lib/server/admin/http';
import { createPack, listPacks } from '../../../../lib/server/teacherReview/adminStore';

export const dynamic = 'force-dynamic';

/** Every review pack, newest first, with counts. */
export async function GET(req: Request) {
  return adminGet(req, 'reviews-list', async (db) => ({ packs: await listPacks(db) }), { cache: false });
}

/** POST { title, items: [{ kind: 'question', questionId, doubt } | { kind: 'lesson_line', file, anchorText, context?, doubt }] }. Header X-Admin-Action: review-create. */
export async function POST(req: Request) {
  return adminWrite(req, 'review-create', 'review-create', async (db, body, email) => {
    const b = body && typeof body === 'object' ? (body as { title?: unknown; items?: unknown }) : {};
    const r = await createPack(db, { title: b.title, items: b.items }, email);
    return r.ok ? adminJson(r) : adminJson({ error: r.error }, 400);
  }, { maxBytes: 64_000 });
}
