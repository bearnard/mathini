// The serve-from-D1 switch (docs/notes/d1-serving-plan.md section 4.1). A row in serving_flags (migration 0011), read per request and
// cached for 30 s in the Worker, so it can be flipped (or turned OFF) without a deploy. EVERY failure means OFF: a missing table
// (migration not applied yet), a bad value, a D1 error. OFF is the behaviour that existed before this code.
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';

export interface ServingFlag {
  grades: number[];
  tasks: string[];
  exclude: string[];
}

export const FLAG_KEY = 'serve_from_d1';
export const FLAG_TTL_MS = 30_000;
/** After a failed read, stay OFF for a short while instead of hitting a broken D1 on every request. */
export const FLAG_ERROR_TTL_MS = 5_000;
export const OFF: ServingFlag = { grades: [], tasks: [], exclude: [] };

/** Tolerant parse: anything that is not the expected shape is OFF (never throws). */
export function parseFlag(raw: string | null | undefined): ServingFlag {
  if (!raw) return OFF;
  try {
    const v = JSON.parse(raw) as unknown;
    if (!v || typeof v !== 'object') return OFF;
    const o = v as Record<string, unknown>;
    const list = <T,>(x: unknown, ok: (e: unknown) => e is T): T[] => (Array.isArray(x) ? x.filter(ok) : []);
    return {
      grades: list(o.grades, (e): e is number => Number.isInteger(e)),
      tasks: list(o.tasks, (e): e is string => typeof e === 'string' && e.length > 0),
      exclude: list(o.exclude, (e): e is string => typeof e === 'string' && e.length > 0),
    };
  } catch {
    return OFF;
  }
}

let gradeOfTask: Map<string, number> | null = null;
/** The grade a task slug belongs to, from the generated curriculum registry; null when the slug is unknown. */
export function taskGrade(task: string): number | null {
  if (!gradeOfTask) {
    gradeOfTask = new Map();
    for (const key of Object.keys(TOPIC_NAMES)) {
      const [g, ...rest] = key.split('|');
      const slug = rest.join('|');
      if (!gradeOfTask.has(slug)) gradeOfTask.set(slug, Number(g));
    }
  }
  return gradeOfTask.get(task) ?? null;
}

/** Is this task served from D1? `exclude` always wins; then an explicit task; then its grade. */
export function isServedFromD1(flag: ServingFlag, task: string): boolean {
  if (flag.exclude.includes(task)) return false;
  if (flag.tasks.includes(task)) return true;
  const g = taskGrade(task);
  return g !== null && flag.grades.includes(g);
}

let cached: { at: number; ttl: number; flag: ServingFlag } | null = null;

/** Test hook: forget the cached flag. */
export function clearFlagCache(): void {
  cached = null;
}

/** The current flag. Never throws; OFF on any problem. */
export async function loadFlag(db: D1Database, now: number = Date.now()): Promise<ServingFlag> {
  if (cached && now - cached.at < cached.ttl) return cached.flag;
  try {
    const row = await db.prepare('SELECT value FROM serving_flags WHERE key = ?').bind(FLAG_KEY).first<{ value: string }>();
    cached = { at: now, ttl: FLAG_TTL_MS, flag: parseFlag(row?.value) };
  } catch {
    cached = { at: now, ttl: FLAG_ERROR_TTL_MS, flag: OFF };
  }
  return cached.flag;
}
