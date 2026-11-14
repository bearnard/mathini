// Backfill of item_cache.quality_score / quality_flags with the validator (migration 0007). Pure: takes rows, returns the
// score of each row and the SQL to store it. scripts/backfill-quality.ts is the CLI. Near-duplicates are judged per task
// in id order (the earlier question keeps its place, the later copy is flagged), exactly as the insert-time check does.
import { checkQuestion, DECIMAL_POINT_RE, flagsOf } from '../shared/questionQuality';
import { decimalPolicyFor } from './caps/formatPolicy';
import { numericOkFor } from './topUp';
import { TASK_INDEX } from './caps/taskIndex.generated';

export interface BackfillRow {
  id: number;
  task: string;
  prompt: string;
  options: string;
  answer: string;
  explanation: string | null;
}

export interface Scored {
  id: number;
  score: number;
  flags: string[];
}

export interface ScoreOptions {
  /** Apply the decimal-comma format rule (caps/formatPolicy.ts). Default true; false reproduces the scores from before the rule existed. */
  decimalRule?: boolean;
}

export function scoreRows(rows: readonly BackfillRow[], opts: ScoreOptions = {}): Scored[] {
  const byTask = new Map<string, BackfillRow[]>();
  for (const r of rows) (byTask.get(r.task) ?? byTask.set(r.task, []).get(r.task)!).push(r);
  const out: Scored[] = [];
  for (const [task, list] of byTask) {
    list.sort((a, b) => a.id - b.id);
    const code = TASK_INDEX[task]?.[0];
    const numericOk = code ? numericOkFor(task, code) : true; // unknown tasks: do not flag drift
    const decimalComma = code && opts.decimalRule !== false ? decimalPolicyFor(task, code) : undefined;
    const seen: string[] = [];
    for (const r of list) {
      let options: string[] = [];
      try { const o = JSON.parse(r.options); if (Array.isArray(o)) options = o; } catch { /* leave empty: bad_shape */ }
      const res = checkQuestion({ prompt: r.prompt, options, answer: r.answer, explanation: r.explanation }, { existingPrompts: seen, numericOk, decimalComma });
      seen.push(r.prompt);
      out.push({ id: r.id, score: res.score, flags: flagsOf(res) });
    }
  }
  return out.sort((a, b) => a.id - b.id);
}

/** UPDATE statements, one per row, in files of at most `perFile` statements (D1 accepts large files, but small ones are easy to retry). */
export function updateSql(scored: readonly Scored[], perFile = 500): string[] {
  const files: string[] = [];
  for (let i = 0; i < scored.length; i += perFile) {
    files.push(
      scored
        .slice(i, i + perFile)
        .map((s) => `UPDATE item_cache SET quality_score = ${s.score}, quality_flags = '${JSON.stringify(s.flags).replace(/'/g, "''")}' WHERE id = ${s.id};`)
        .join('\n'),
    );
  }
  return files;
}

export function bandCounts(scored: readonly Scored[]) {
  return {
    total: scored.length,
    rejected: scored.filter((s) => s.score === 0).length,
    warn: scored.filter((s) => s.score > 0 && s.score < 80).length,
    clean: scored.filter((s) => s.score >= 80).length,
  };
}

// ── targeted backfill: only the rows the decimal-comma rule can change ─────────────────────────────────────────────────────────

export interface StoredRow extends BackfillRow {
  quality_score?: number | null;
}

/** Does any text of this row contain a decimal point (digit.digit)? */
export function hasDecimalPoint(r: BackfillRow): boolean {
  let options: string[] = [];
  try { const o = JSON.parse(r.options); if (Array.isArray(o)) options = o.filter((x): x is string => typeof x === 'string'); } catch { /* none */ }
  return [r.prompt, ...options, r.answer, r.explanation ?? ''].some((t) => DECIMAL_POINT_RE.test(t));
}

export interface DecimalReportRow {
  grade: number;
  policy: 'reject' | 'warn';
  /** Rows in these pools that contain a decimal point. */
  affected: number;
  /** ...of which the new rule changes the stored score. */
  changed: number;
  /** Score before -> after, counted by band: clean (80+), warn (1-79), rejected (0). */
  transitions: Record<string, number>;
  tasks: Record<string, number>;
}

const band = (score: number | null | undefined) => (score === null || score === undefined ? 'unscored' : score === 0 ? 'rejected' : score >= 80 ? 'clean' : 'warn');

/**
 * Targeted backfill for the decimal-comma rule: re-scores EVERY row (near-duplicates need the whole task) with the new rule, but returns
 * UPDATEs only for rows that contain a decimal point in a task the rule covers AND whose stored score changes. The stored score is
 * the row's quality_score if given, else what the validator gave BEFORE the rule (the same number the production backfill stored).
 */
export function targetedDecimalUpdates(rows: readonly StoredRow[]): { updates: Scored[]; report: DecimalReportRow[] } {
  const after = new Map(scoreRows(rows).map((s) => [s.id, s]));
  const before = new Map(scoreRows(rows, { decimalRule: false }).map((s) => [s.id, s]));
  const updates: Scored[] = [];
  const groups = new Map<string, DecimalReportRow>();
  for (const r of rows) {
    const code = TASK_INDEX[r.task]?.[0];
    const grade = TASK_INDEX[r.task]?.[1];
    const policy = code ? decimalPolicyFor(r.task, code) : undefined;
    if (!policy || grade === undefined || !hasDecimalPoint(r)) continue;
    const key = `${grade}|${policy}`;
    const g = groups.get(key) ?? { grade, policy, affected: 0, changed: 0, transitions: {}, tasks: {} };
    groups.set(key, g);
    g.affected++;
    g.tasks[r.task] = (g.tasks[r.task] ?? 0) + 1;
    const now = after.get(r.id)!;
    const was = r.quality_score ?? before.get(r.id)!.score;
    if (now.score !== was) {
      g.changed++;
      const t = `${band(was)} -> ${band(now.score)}`;
      g.transitions[t] = (g.transitions[t] ?? 0) + 1;
      updates.push(now);
    }
  }
  return { updates: updates.sort((a, b) => a.id - b.id), report: [...groups.values()].sort((a, b) => a.grade - b.grade) };
}
