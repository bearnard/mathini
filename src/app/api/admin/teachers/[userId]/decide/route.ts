import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { decideApplication } from '../../../../../../lib/server/schools/teachers';

export const dynamic = 'force-dynamic';

/**
 * POST { decision: 'approve' | 'reject' | 'revoke', note?, schoolId? }. Header X-Admin-Action: teacher-decide. This is the ONLY way the teacher role is granted:
 * approve grants it (and links the school) in one batch; revoke removes it and archives the teacher's classes.
 */
export async function POST(req: Request, ctx: { params: Promise<{ userId: string }> }) {
  const { userId } = await ctx.params;
  return adminWrite(req, 'teacher-decide', 'teacher-decide', async (db, body, adminEmail) => {
    if (!/^[0-9a-f-]{36}$/i.test(userId)) return adminJson({ error: 'Not found' }, 404);
    const input = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
    const r = await decideApplication(db, userId, input, adminEmail, Date.now());
    return r.ok ? adminJson({ ok: true, status: r.status, schoolId: r.schoolId }) : adminJson({ error: r.error }, r.status);
  });
}
