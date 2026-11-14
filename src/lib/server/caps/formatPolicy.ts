// Number-format policy for generated questions (ADR 0003 section 1a follow-up): South African CAPS writes decimals with a comma
// (3,5 km; R18,50) and times with a colon (14:30). The Grade 6 maths lessons and curated banks use it, so a pool row with a decimal
// point is inconsistent for the learner.
//
//   'reject' = Grade 6 maths (everything there is already converted): never stored, never served.
//   'warn'   = maths-type tasks of Grades 7-12 (math, ml): their lessons are not converted yet, so rows with a point are only served after clean
//              rows, not hidden (that would gut half of those pools).
//   undefined = not checked: IT and CAT (code, versions, IP addresses), sciences (LaTeX), languages, everything else, and Grade 6 non-maths tasks.
import type { DecimalPolicy } from '../../shared/questionQuality';

export function decimalPolicyFor(task: string, code: string): DecimalPolicy | undefined {
  if (code === 'grade6') return task.startsWith('gr6-') ? 'reject' : undefined;
  if (code === 'math' || code === 'ml') return 'warn';
  return undefined;
}
