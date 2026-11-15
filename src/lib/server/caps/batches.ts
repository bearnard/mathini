// Which question batches the generator may ask for, per subject, and the wording of each.
//
// The 2026-11 audit of the Grade 6 pools showed two template-caused error modes:
//   - the 'misconceptions' batch asked the model for "which statement is a misconception", and the model then keyed a TRUE
//     statement (38% of all hard errors came from stems of this kind, a 20.7% error rate against 6.4% for all other stems);
//   - the 'calculations' batch pushed invented arithmetic into subjects that have no calculations (History, languages...).
// So: the misconceptions batch is neutral (the key is always the TRUE answer; the typical errors are the distractors) and
// runs only for science and maths-type subjects; the calculations batch runs only for subjects that really calculate.
export type BatchType = 'definitions' | 'calculations' | 'application' | 'misconceptions';

export const BATCH_INSTRUCTIONS: Record<BatchType, string> = {
  definitions: 'Generate 10 multiple-choice questions testing DEFINITIONS and TERMINOLOGY. Focus on vocabulary and conceptual understanding. Avoid calculations.',
  calculations: 'Generate 10 multiple-choice questions requiring CALCULATIONS or step-by-step NUMERICAL REASONING. Check every calculation before writing the item.',
  application: 'Generate 10 multiple-choice questions that apply the topic to everyday situations that learners know. Use generic, plausible South African situations; do not state facts about specific real places, institutions or statistics.',
  misconceptions:
    'Generate 10 multiple-choice questions where the three WRONG options are the typical learner errors for this topic. Ask a neutral content question that has ONE true answer ("What is ...?", "Which ... is correct?", "How many ...?"). The correct option must always be the TRUE statement or correct value, and each wrong option a believable error. ' +
    'NEVER ask which statement is a misconception, mistake, myth, error, incorrect, false or wrong, NEVER ask "which is NOT", and never use a "a student says" frame: the keyed answer is always the correct fact, never the error.',
};
export const BATCH_ORDER: BatchType[] = ['definitions', 'calculations', 'application', 'misconceptions'];

/** Registry codes whose topics contain real calculations. Languages, History, Geography, Life Skills and the like do not. */
export const CALCULATION_SUBJECTS: ReadonlySet<string> = new Set(['math', 'ml', 'ps', 'acc', 'econ', 'ems', 'ns', 'nst']);

/** Registry codes where a typical-error batch is safe: the topic has right/wrong content that is checkable. */
export const MISCONCEPTION_SUBJECTS: ReadonlySet<string> = new Set(['math', 'ml', 'ps', 'ls', 'ns', 'nst', 'tech', 'acc', 'econ', 'ems']);

/** The legacy `grade6` code spans several subjects, so only its gr6- slugs are Maths. */
function isGrade6Maths(task: string): boolean {
  return task.startsWith('gr6-');
}

export function calculationsOkFor(task: string, code: string): boolean {
  if (code === 'grade6') return isGrade6Maths(task);
  return CALCULATION_SUBJECTS.has(code);
}

export function misconceptionsOkFor(task: string, code: string): boolean {
  if (code === 'grade6') return isGrade6Maths(task);
  return MISCONCEPTION_SUBJECTS.has(code);
}

/** The batches to generate for a task, in order. Always definitions and application. */
export function batchesFor(task: string, code: string): BatchType[] {
  return BATCH_ORDER.filter((b) => {
    if (b === 'calculations') return calculationsOkFor(task, code);
    if (b === 'misconceptions') return misconceptionsOkFor(task, code);
    return true;
  });
}
