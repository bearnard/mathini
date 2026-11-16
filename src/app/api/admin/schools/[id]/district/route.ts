import { adminJson, adminWrite } from '../../../../../../lib/server/admin/http';
import { setSchoolDistrict } from '../../../../../../lib/server/schools/schoolAdmins';

export const dynamic = 'force-dynamic';

/** POST { district }. Header X-Admin-Action: school-district-set. An empty district clears it. */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(req, 'school-district-set', 'school-district-set', async (db, body) => {
    const input = body && typeof body === 'object' ? (body as Record<string, unknown>) : {};
    const r = await setSchoolDistrict(db, id, input.district);
    return r.ok ? adminJson({ ok: true, district: r.district }) : adminJson({ error: r.error }, r.status);
  });
}
