import { adminJson, adminWrite } from '../../../../../../../../lib/server/admin/http';
import { revokeSchoolAdmin } from '../../../../../../../../lib/server/schools/schoolAdmins';

export const dynamic = 'force-dynamic';

/** POST {}. Header X-Admin-Action: school-admin-revoke. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string; userId: string }> }) {
  const { id, userId } = await ctx.params;
  return adminWrite(req, 'school-admin-revoke', 'school-admin-revoke', async (db) => {
    const r = await revokeSchoolAdmin(db, id, userId, Date.now());
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
