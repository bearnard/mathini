// The ways /api/attempts tries to store one answer, best first. Columns added by later migrations (run_id 0014, question_version_id 0008,
// chosen 0010, marked_by and client_correct 0018) are only written when there is a value; if one is not there yet (migration not applied) the next,
// plainer insert still stores the answer. An answer is never lost. Pure, so the fallback order is tested.
export type Param = string | number | null;
export type InsertPlan = [string[], Param[]];

export function attemptInsertPlans(
  baseCols: string[],
  baseVals: Param[],
  extra: { questionVersionId: number | null; chosen: string | null; runId: string | null; marking?: { markedBy: string; clientCorrect: boolean } | null },
): InsertPlan[] {
  /** The staged plans for a given set of base columns (the original fallback chain). */
  const chain = (bc: string[], bv: Param[]): InsertPlan[] => {
    const cols = [...bc];
    const vals = [...bv];
    if (extra.questionVersionId !== null) { cols.push('question_version_id'); vals.push(extra.questionVersionId); }
    if (extra.chosen !== null) { cols.push('chosen'); vals.push(extra.chosen); }
    const plans: InsertPlan[] = [];
    // 1. everything, run included; 2. without the run column (0014 missing); 3. without chosen (0010 missing, keep the version); 4. the plain row.
    if (extra.runId) plans.push([[...cols, 'run_id'], [...vals, extra.runId]]);
    plans.push([cols, vals]);
    if (extra.chosen !== null && extra.questionVersionId !== null) plans.push([[...bc, 'question_version_id'], [...bv, extra.questionVersionId]]);
    if (cols.length > bc.length) plans.push([bc, bv]);
    return plans;
  };
  // With marking (0018): the whole chain with marked_by and client_correct first; if those columns are missing, the same chain without them.
  if (extra.marking) {
    return [
      ...chain([...baseCols, 'marked_by', 'client_correct'], [...baseVals, extra.marking.markedBy, extra.marking.clientCorrect ? 1 : 0]),
      ...chain(baseCols, baseVals),
    ];
  }
  return chain(baseCols, baseVals);
}
