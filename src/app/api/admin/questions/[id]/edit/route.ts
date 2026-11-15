import { adminJson, adminWrite, invalidateAdminCache } from '../../../../../../lib/server/admin/http';
import { editQuestion } from '../../../../../../lib/server/questions/edit';

export const dynamic = 'force-dynamic';

/**
 * POST { expectedVersionId, prompt, options[], answer, explanation, sourceNote, changeKind: 'wording' | 'meaning', acknowledgeWarnings? }.
 * Needs the Access assertion, the X-Admin-Action: question-edit header and a same-origin Origin. Multiple-choice questions only.
 * 400 bad input, 404 unknown, 409 stale / retired / warnings need acknowledging / clash, 422 the quality checker rejects it.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return adminWrite(
    req,
    'question-edit',
    'question-edit',
    async (db, body, email) => {
      const r = await editQuestion(db, id, body, email);
      if (r.ok) {
        invalidateAdminCache();
        return adminJson({ ok: true, versionId: r.versionId, versionNo: r.versionNo, reviewsReset: r.reviewsReset, warnings: r.warnings });
      }
      return adminJson({ error: r.error, findings: r.findings ?? null, needsAcknowledgement: r.needsAcknowledgement === true }, r.status);
    },
    { maxBytes: 8192 },
  );
}
