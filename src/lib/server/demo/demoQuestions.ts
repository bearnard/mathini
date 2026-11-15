// The public landing-page demo ("Try it now", GET /api/demo?grade=N): 3 CURATED multiple-choice questions for a grade, from a mix of subjects, read-only.
// It records nothing: no attempts, runs, review items or events, and it never looks at a session. The answer and explanation ARE sent, so the page can mark
// the questions itself; they are demo questions only.
//
// Cost shape: one D1 read per grade per few minutes. A POOL of up to POOL_SIZE questions per grade is cached for POOL_TTL_S (the Cloudflare Cache API, with an
// in-memory copy where the Cache API does not exist), and each request picks its own 3 from that pool at random, so visitors still see different questions.
// Any D1 problem, or fewer than 3 usable questions, falls back to (or is topped up from) the small static set in demoStatic.ts.
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { DEMO_GRADES, STATIC_DEMO, type DemoQuestion } from './demoStatic';

export type { DemoQuestion } from './demoStatic';
export { DEMO_GRADES } from './demoStatic';

export const DEMO_COUNT = 3;
export const POOL_SIZE = 15;
export const POOL_TTL_S = 300;
/** Tasks asked about in one read (a D1 statement allows 100 bind variables; this stays far below). */
const TASKS_PER_READ = 14;
/** At most this many D1 reads to fill one pool. */
const MAX_READS = 2;
const CACHE_URL = (grade: number) => `https://demo-cache.internal/pool/v1?grade=${grade}`;

export const isDemoGrade = (n: number): boolean => (DEMO_GRADES as readonly number[]).includes(n);

export type Rng = () => number;

export function shuffle<T>(a: readonly T[], rng: Rng = Math.random): T[] {
  const out = [...a];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export interface TaskInfo {
  task: string;
  subject: string;
}

/** Subjects left out of the demo: a visitor who does not speak the language cannot judge the questions, so the demo stays with subjects anyone can try. */
export const DEMO_SKIPPED_SUBJECTS = /isixhosa|afrikaans/i;

/** The topics of a grade with their subject titles, from the generated curriculum names. */
export function tasksForGrade(grade: number): TaskInfo[] {
  const out: TaskInfo[] = [];
  for (const [key, [, subject]] of Object.entries(TOPIC_NAMES)) {
    const [g, ...rest] = key.split('|');
    if (Number(g) === grade && !DEMO_SKIPPED_SUBJECTS.test(subject)) out.push({ task: rest.join('|'), subject });
  }
  return out;
}

/** Up to `n` tasks, taken round-robin over the grade's subjects (in random order) so the pool is a mix of subjects. */
export function pickTasks(tasks: readonly TaskInfo[], n: number, rng: Rng = Math.random): TaskInfo[] {
  const bySubject = new Map<string, TaskInfo[]>();
  for (const t of tasks) bySubject.set(t.subject, [...(bySubject.get(t.subject) ?? []), t]);
  const queues = shuffle([...bySubject.values()].map((q) => shuffle(q, rng)), rng);
  const out: TaskInfo[] = [];
  while (out.length < n && queues.some((q) => q.length > 0)) {
    for (const q of queues) {
      const t = q.shift();
      if (t && out.length < n) out.push(t);
    }
  }
  return out;
}

interface Row {
  id: string;
  task: string;
  prompt: string;
  options: string;
  answer: string;
  explanation: string | null;
  extra: string | null;
}

/** Prompts that point at a picture or a table the demo cannot show. */
const NEEDS_PICTURE = /\b(diagram|picture|image|figure|photograph|photo|illustration|shown (below|above)|(map|graph|table|chart) (below|above))\b/i;

/** A D1 row as a demo question, or null when it is not suitable (not plain MCQ, no explanation, key not among the options, needs a picture). */
export function toDemoQuestion(r: Row, subjectOf: (task: string) => string): DemoQuestion | null {
  try {
    const options = JSON.parse(r.options) as unknown;
    if (!Array.isArray(options) || options.length < 3 || options.length > 6 || !options.every((o) => typeof o === 'string' && o.trim() !== '')) return null;
    const opts = options as string[];
    if (new Set(opts).size !== opts.length || !opts.includes(r.answer)) return null;
    const explanation = (r.explanation ?? '').trim();
    if (explanation.length < 10) return null;
    const extra = JSON.parse(r.extra || '{}') as Record<string, unknown>;
    if (extra.diagram || extra.image || extra.hotspots) return null;
    const prompt = r.prompt.trim();
    if (!prompt || prompt.length > 400 || NEEDS_PICTURE.test(prompt)) return null;
    return { id: r.id, subject: subjectOf(r.task), prompt, options: opts, answer: r.answer, explanation };
  } catch {
    return null;
  }
}

const SQL_BASE = `SELECT q.id AS id, q.task AS task, v.prompt AS prompt, v.options AS options, v.answer AS answer, v.explanation AS explanation, v.extra AS extra
  FROM questions q JOIN question_versions v ON v.id = q.current_version_id
  WHERE q.status = 'active' AND q.kind = 'mcq' AND q.source = 'curated' AND v.status = 'approved'`;
const SQL_NOT_FLAGGED = ` AND NOT EXISTS (SELECT 1 FROM question_flags f WHERE f.question_id = q.id AND f.status = 'open' AND f.kind = 'negative_discrimination')`;

/** The raw rows for some tasks (curated, active, approved). A question whose key analysis is flagged as suspect is skipped when the flags table exists. */
async function readRows(db: D1Database, tasks: string[]): Promise<Row[]> {
  const marks = tasks.map(() => '?').join(',');
  const tail = ` AND q.task IN (${marks}) ORDER BY RANDOM() LIMIT 80`;
  try {
    return (await db.prepare(SQL_BASE + SQL_NOT_FLAGGED + tail).bind(...tasks).all<Row>()).results ?? [];
  } catch {
    // an old deployment without question_flags: read without that filter
    return (await db.prepare(SQL_BASE + tail).bind(...tasks).all<Row>()).results ?? [];
  }
}

/** Reads a fresh pool for a grade from D1: up to POOL_SIZE suitable questions, at most two per topic, from a mix of subjects. Throws if D1 fails.
 *  Topics are sampled, and some topics have no registered curated questions, so if the first read is thin a second sample of OTHER topics is read. */
export async function readPool(db: D1Database, grade: number, rng: Rng = Math.random): Promise<DemoQuestion[]> {
  const infos = tasksForGrade(grade);
  const subject = new Map(infos.map((t) => [t.task, t.subject]));
  const seen = new Set<string>();
  const perTask = new Map<string, number>();
  const pool: DemoQuestion[] = [];
  let remaining = infos;
  for (let round = 0; round < MAX_READS && pool.length < POOL_SIZE / 2 && remaining.length > 0; round++) {
    const tasks = pickTasks(remaining, TASKS_PER_READ, rng);
    const tried = new Set(tasks.map((t) => t.task));
    remaining = remaining.filter((t) => !tried.has(t.task));
    for (const r of shuffle(await readRows(db, tasks.map((t) => t.task)), rng)) {
      const q = toDemoQuestion(r, (t) => subject.get(t) ?? 'Mixed');
      if (!q || seen.has(q.prompt) || (perTask.get(r.task) ?? 0) >= 2) continue;
      seen.add(q.prompt);
      perTask.set(r.task, (perTask.get(r.task) ?? 0) + 1);
      pool.push(q);
      if (pool.length >= POOL_SIZE) break;
    }
  }
  return pool;
}

/** Three questions from a pool: different subjects first, then any; the options of each are shuffled so the key is not always in the same place. Pure. */
export function chooseDemo(pool: readonly DemoQuestion[], count: number, rng: Rng = Math.random): DemoQuestion[] {
  const mixed = shuffle(pool, rng);
  const picked: DemoQuestion[] = [];
  const subjects = new Set<string>();
  for (const q of mixed) {
    if (picked.length < count && !subjects.has(q.subject)) {
      picked.push(q);
      subjects.add(q.subject);
    }
  }
  for (const q of mixed) if (picked.length < count && !picked.includes(q)) picked.push(q);
  return shuffle(picked, rng).map((q) => ({ ...q, options: shuffle(q.options, rng) }));
}

/** What the pool cache needs: the Cloudflare Cache API shape (caches.default), so tests can pass a fake. */
export interface PoolCache {
  match(req: Request): Promise<Response | undefined>;
  put(req: Request, res: Response): Promise<void>;
}

const memory = new Map<number, { at: number; pool: DemoQuestion[] }>();
export const clearDemoMemory = (): void => memory.clear();

/** The Worker's edge cache, or null where there is none (Node, tests). */
export const edgeCache = (): PoolCache | null => {
  const c = (globalThis as { caches?: { default?: PoolCache } }).caches;
  return c?.default ?? null;
};

export interface DemoResult {
  grade: number;
  source: 'd1' | 'static' | 'mixed';
  questions: DemoQuestion[];
}

export interface DemoDeps {
  db?: D1Database | null;
  cache?: PoolCache | null;
  now?: number;
  rng?: Rng;
}

/** The pool for a grade: edge cache, then memory, then D1. Never caches an empty pool or a failure. Throws only when D1 does. */
async function cachedPool(grade: number, deps: DemoDeps): Promise<DemoQuestion[]> {
  const now = deps.now ?? Date.now();
  const cache = deps.cache === undefined ? edgeCache() : deps.cache;
  if (cache) {
    try {
      const hit = await cache.match(new Request(CACHE_URL(grade)));
      if (hit) {
        const pool = (await hit.json()) as DemoQuestion[];
        if (Array.isArray(pool) && pool.length > 0) return pool;
      }
    } catch {
      /* a cache problem is just a miss */
    }
  } else {
    const m = memory.get(grade);
    if (m && now - m.at < POOL_TTL_S * 1000) return m.pool;
  }
  if (!deps.db) throw new Error('no database');
  const pool = await readPool(deps.db, grade, deps.rng);
  if (pool.length > 0) {
    if (cache) {
      try {
        await cache.put(new Request(CACHE_URL(grade)), new Response(JSON.stringify(pool), { headers: { 'Content-Type': 'application/json', 'Cache-Control': `public, max-age=${POOL_TTL_S}` } }));
      } catch {
        /* not cached this time */
      }
    } else {
      memory.set(grade, { at: now, pool });
    }
  }
  return pool;
}

/** The three demo questions for a grade. D1 problems fall back to the static set; fewer than three curated questions are topped up from it. Never throws. */
export async function loadDemo(grade: number, deps: DemoDeps = {}): Promise<DemoResult> {
  const rng = deps.rng ?? Math.random;
  let pool: DemoQuestion[] = [];
  try {
    pool = await cachedPool(grade, deps);
  } catch {
    pool = [];
  }
  const fromD1 = chooseDemo(pool, DEMO_COUNT, rng);
  if (fromD1.length >= DEMO_COUNT) return { grade, source: 'd1', questions: fromD1 };
  const have = new Set(fromD1.map((q) => q.prompt));
  const filler = chooseDemo((STATIC_DEMO[grade] ?? []).filter((q) => !have.has(q.prompt)), DEMO_COUNT - fromD1.length, rng);
  const questions = [...fromD1, ...filler];
  return { grade, source: fromD1.length === 0 ? 'static' : 'mixed', questions };
}
