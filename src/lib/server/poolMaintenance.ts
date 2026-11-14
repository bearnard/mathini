// Planning for pool purge / top-up (ADR 0003 section 1a). Pure: no I/O, so the plan is unit-tested and the CLI
// (scripts/pool-maintenance.ts) is a thin wrapper. The default mode of the CLI is a DRY RUN that prints this plan.

export interface PoolRowLite {
  id: number;
  task: string;
  vector_id: string | null;
  quality_score: number | null;
}

export type Action = 'purge' | 'fix' | 'keep';

export interface TriageRow {
  action: Action;
  task: string;
}

export interface PoolPlan {
  task: string;
  /** purge / fix from the triage file, or 'ids' for rows named in an ids file only. */
  action: Action | 'ids';
  rowsBefore: number;
  deleteIds: number[];
  deleteVectorIds: string[];
  rowsAfter: number;
  /** Rows the pool can still serve (score NULL or above 0). */
  servableAfter: number;
  /** How many questions the top-up must generate to reach the target. */
  toGenerate: number;
}

export interface PlanOptions {
  triage: TriageRow[];
  actions: Action[];
  rows: PoolRowLite[];
  /** Specific item_cache ids to delete (hard-error-ids.txt, defect-row-ids.txt). */
  ids?: number[];
  target?: number;
}

export function parseTriageCsv(csv: string): TriageRow[] {
  const lines = csv.split(/\r?\n/).filter((l) => l.trim());
  const head = lines[0].split(',');
  const ai = head.indexOf('action'), ti = head.indexOf('task');
  if (ai < 0 || ti < 0) throw new Error('triage CSV needs "action" and "task" columns');
  return lines.slice(1).map((l) => {
    const c = l.split(',');
    const action = c[ai] as Action;
    if (!['purge', 'fix', 'keep'].includes(action)) throw new Error(`bad action "${c[ai]}"`);
    return { action, task: c[ti] };
  });
}

export function parseIds(text: string): number[] {
  return text.split(/\s+/).filter(Boolean).map((x) => {
    const n = Number(x);
    if (!Number.isInteger(n) || n <= 0) throw new Error(`bad id "${x}"`);
    return n;
  });
}

export function planMaintenance(opts: PlanOptions): PoolPlan[] {
  const target = opts.target ?? 50;
  const idSet = new Set(opts.ids ?? []);
  const byTask = new Map<string, PoolRowLite[]>();
  for (const r of opts.rows) (byTask.get(r.task) ?? byTask.set(r.task, []).get(r.task)!).push(r);

  const actionOf = new Map<string, Action>();
  for (const t of opts.triage) if (opts.actions.includes(t.action)) actionOf.set(t.task, t.action);

  const tasks = new Set<string>([...actionOf.keys()]);
  for (const r of opts.rows) if (idSet.has(r.id)) tasks.add(r.task);

  const plans: PoolPlan[] = [];
  for (const task of [...tasks].sort()) {
    const rows = byTask.get(task) ?? [];
    const action = actionOf.get(task);
    const doomed = rows.filter((r) => (action === 'purge' ? true : idSet.has(r.id) || (action === 'fix' && r.quality_score === 0)));
    const doomedIds = new Set(doomed.map((r) => r.id));
    const left = rows.filter((r) => !doomedIds.has(r.id));
    const servable = left.filter((r) => r.quality_score === null || r.quality_score > 0).length;
    plans.push({
      task,
      action: action ?? 'ids',
      rowsBefore: rows.length,
      deleteIds: doomed.map((r) => r.id).sort((a, b) => a - b),
      deleteVectorIds: doomed.map((r) => r.vector_id).filter((v): v is string => !!v),
      rowsAfter: left.length,
      servableAfter: servable,
      toGenerate: Math.max(0, target - servable),
    });
  }
  return plans;
}

export function summarise(plans: PoolPlan[]) {
  return {
    pools: plans.length,
    rowsToDelete: plans.reduce((n, p) => n + p.deleteIds.length, 0),
    vectorsToDelete: plans.reduce((n, p) => n + p.deleteVectorIds.length, 0),
    toGenerate: plans.reduce((n, p) => n + p.toGenerate, 0),
    emptiedPools: plans.filter((p) => p.rowsAfter === 0).length,
  };
}

const chunk = <T,>(a: T[], n: number): T[][] => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));

/** SQL files for a plan: deletes in chunks of 200 ids, and enabling every touched pool in pool_tasks so the top-up refills it. */
export function sqlForPlan(plans: PoolPlan[], now: number): { deletes: string[]; poolTasks: string } {
  const ids = plans.flatMap((p) => p.deleteIds);
  const deletes = chunk(ids, 200).map((c) => `DELETE FROM item_cache WHERE id IN (${c.join(',')});`);
  const values = plans.map((p) => `('${p.task.replace(/'/g, "''")}', 50, 1, ${now})`).join(',\n  ');
  const poolTasks = plans.length
    ? `INSERT INTO pool_tasks (task, target, enabled, created_at) VALUES\n  ${values}\nON CONFLICT(task) DO UPDATE SET enabled = 1;`
    : '';
  return { deletes, poolTasks };
}

/** SELECT used to back up exactly the rows about to be deleted. */
export function backupSql(ids: number[]): string[] {
  return chunk(ids, 200).map((c) => `SELECT * FROM item_cache WHERE id IN (${c.join(',')});`);
}

export type Mode = { kind: 'dry-run' } | { kind: 'local' } | { kind: 'remote' } | { kind: 'error'; message: string };

/** The safety rules. Dry run unless --apply; production only with --remote AND --confirm-prod=<the database id>. */
export function decideMode(argv: string[], databaseId: string): Mode {
  const has = (f: string) => argv.includes(f);
  const apply = has('--apply');
  const remote = has('--remote');
  const confirm = argv.find((a) => a.startsWith('--confirm-prod='))?.slice('--confirm-prod='.length);
  if (has('--local') && remote) return { kind: 'error', message: 'use either --local or --remote, not both' };
  if (!apply) return remote || confirm ? { kind: 'error', message: '--remote/--confirm-prod only make sense with --apply (the default is a dry run that changes nothing)' } : { kind: 'dry-run' };
  if (remote) {
    if (confirm !== databaseId) return { kind: 'error', message: `refusing to touch production: --remote needs --confirm-prod=${databaseId}` };
    return { kind: 'remote' };
  }
  return { kind: 'local' };
}
