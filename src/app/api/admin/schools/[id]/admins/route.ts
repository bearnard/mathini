import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { appointSchoolAdmin } from '../../../../../../lib/server/schools/schoolAdmins';

export const dynamic = 'force-dynamic';

/** POST { email }. Header X-Admin-Action: school-admin-appoint. The adult must already have signed in once. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'school-admin-appoint', 'school-admin-appoint', async (db, body, adminEmail) => {
    const input = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
    const r = await appointSchoolAdmin(db, id, input.email, adminEmail, Date.now());
    return r.ok ? adminJson({ ok: true }) : adminJson({ error: r.error }, r.status);
  });
}
