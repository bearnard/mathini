import { adminGet, adminJson, adminWrite } from '../../../../lib/server/admin/http';
import { appointModerator, candidates, listGroups, removeModerator } from '../../../../lib/server/moderation/groups';

export const dynamic = 'force-dynamic';

/** GET: every subject-and-phase group with its moderators (and whether it now approves on its own), and the teachers who can be appointed. */
export async function GET(req: Request) {
  return adminGet(req, 'moderators', async (db) => ({ groups: await listGroups(db), candidates: await candidates(db) }), { cache: false });
}

/** POST { action: 'appoint' | 'remove', groupKey, userId }. Header X-Admin-Action: moderator-manage. Only an approved teacher can be appointed. */
export async function POST(req: Request) {
  return adminWrite(req, 'moderators', 'moderator-manage', async (db, body, adminEmail) => {
    const b = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
    if (typeof b.groupKey !== 'string' || typeof b.userId !== 'string') return adminJson({ error: 'Choose a group and a teacher' }, 400);
    const r = b.action === 'appoint' ? await appointModerator(db, b.groupKey, b.userId, adminEmail, Date.now())
      : b.action === 'remove' ? await removeModerator(db, b.groupKey, b.userId) : null;
    if (!r) return adminJson({ error: 'Choose appoint or remove' }, 400);
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
