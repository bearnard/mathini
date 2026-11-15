// The ways /api/attempts tries to store one answer, best first. Columns added by later migrations (run_id 0014, question_version_id 0008,
// chosen 0010) are only written when there is a value; if one is not there yet (migration not applied) the next, plainer insert still stores
// the answer. An answer is never lost. Pure, so the fallback order is tested.
export type Param = string | number | null;
export type InsertPlan = [string[], Param[]];

export function attemptInsertPlans(
  baseCols: string[],
  baseVals: Param[],
  extra: { questionVersionId: number | null; chosen: string | null; runId: string | null },
): InsertPlan[] {
  const cols = [...baseCols];
  const vals = [...baseVals];
  if (extra.questionVersionId !== null) { cols.push('question_version_id'); vals.push(extra.questionVersionId); }
  if (extra.chosen !== null) { cols.push('chosen'); vals.push(extra.chosen); }
  const plans: InsertPlan[] = [];
  // 1. everything, run included; 2. without the run column (0014 missing); 3. without chosen (0010 missing, keep the version); 4. the plain row.
  if (extra.runId) plans.push([[...cols, 'run_id'], [...vals, extra.runId]]);
  plans.push([cols, vals]);
  if (extra.chosen !== null && extra.questionVersionId !== null) plans.push([[...baseCols, 'question_version_id'], [...baseVals, extra.questionVersionId]]);
  if (cols.length > baseCols.length) plans.push([baseCols, baseVals]);
  return plans;
}
