// Serving practice questions from D1: the CURRENT approved version of every registered question (docs/notes/d1-serving-plan.md 4.1, 4.2).
//
// Cost shape: the id list of a task is cached 60 s per Worker and sampled in JavaScript; the content of the ~20 picked questions is read by
// id on EVERY request. So an edit shows up on the next fetch and a retire / new question within a minute.
// Only plain multiple-choice questions are served from here (order, label and diagram items stay in the code banks and top up on the client).
import { SCORE_CLEAN } from '../../shared/questionQuality';
import { fetchPoolItems, type PoolItem } from '../poolStore';
import { isServedFromD1, loadFlag } from './flags';

export const ID_TTL_MS = 60_000;
/** Product choice (owner question 1 in the plan): curated questions come first, the AI pool fills up to `count`. */
export const CURATED_FIRST = true;

export interface ServedItem {
  id?: number;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  section: string;
  /** Canonical question id (survives edits) and the version served. */
  qid: string;
  vid: number;
}

interface IdRow {
  id: string;
  section: string;
  source: 'curated' | 'ai';
  clean: number;
}

const idCache = new Map<string, { at: number; rows: IdRow[] }>();

/** Test hook. */
export function clearServedCache(): void {
  idCache.clear();
}

async function taskIds(db: D1Database, task: string, now: number): Promise<IdRow[]> {
  const hit = idCache.get(task);
  if (hit && now - hit.at < ID_TTL_MS) return hit.rows;
  const res = await db
    .prepare(
      `SELECT q.id AS id, q.section AS section, q.source AS source,
              CASE WHEN c.quality_score IS NULL OR c.quality_score >= ${SCORE_CLEAN} THEN 1 ELSE 0 END AS clean
       FROM questions q LEFT JOIN item_cache c ON c.id = q.legacy_item_id
       WHERE q.task = ? AND q.status = 'active' AND q.kind = 'mcq'
         AND (q.source = 'curated' OR c.quality_score IS NULL OR c.quality_score > 0)`,
    )
    .bind(task)
    .all<IdRow>();
  const rows = res.results ?? [];
  idCache.set(task, { at: now, rows });
  return rows;
}

function shuffle<T>(a: T[], rng: () => number): T[] {
  const out = [...a];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Which ids to serve: curated first (when CURATED_FIRST), then clean AI rows, then warn-level AI rows; random inside each band. Pure. */
export function pickIds(rows: IdRow[], count: number, rng: () => number = Math.random, curatedFirst: boolean = CURATED_FIRST): string[] {
  const curated = shuffle(rows.filter((r) => r.source === 'curated'), rng);
  const aiClean = shuffle(rows.filter((r) => r.source === 'ai' && r.clean === 1), rng);
  const aiWarn = shuffle(rows.filter((r) => r.source === 'ai' && r.clean !== 1), rng);
  const ordered = curatedFirst ? [...curated, ...aiClean, ...aiWarn] : [...shuffle([...curated, ...aiClean], rng), ...aiWarn];
  return ordered.slice(0, count).map((r) => r.id);
}

interface ContentRow {
  id: string;
  section: string;
  legacy_item_id: number | null;
  vid: number;
  prompt: string;
  options: string;
  answer: string;
  explanation: string;
  extra: string;
}

/** The current approved version of each question id, in the order given. Rows that cannot be played as multiple choice are left out. */
export async function currentVersions(db: D1Database, ids: string[]): Promise<ServedItem[]> {
  if (ids.length === 0) return [];
  const res = await db
    .prepare(
      `SELECT q.id AS id, q.section AS section, q.legacy_item_id AS legacy_item_id, v.id AS vid, v.prompt, v.options, v.answer, v.explanation, v.extra
       FROM questions q JOIN question_versions v ON v.id = q.current_version_id
       WHERE q.id IN (${ids.map(() => '?').join(',')}) AND q.status = 'active' AND v.status = 'approved'`,
    )
    .bind(...ids)
    .all<ContentRow>();
  const byId = new Map((res.results ?? []).map((r) => [r.id, r]));
  const out: ServedItem[] = [];
  for (const id of ids) {
    const r = byId.get(id);
    if (!r) continue;
    try {
      const options = JSON.parse(r.options) as unknown;
      if (!Array.isArray(options) || options.length < 2) continue;
      const extra = JSON.parse(r.extra || '{}') as { diagram?: boolean };
      if (extra.diagram) continue;
      const item: ServedItem = { prompt: r.prompt, options: options as string[], answer: r.answer, explanation: r.explanation ?? '', section: r.section, qid: r.id, vid: Number(r.vid) };
      if (r.legacy_item_id != null) item.id = Number(r.legacy_item_id);
      out.push(item);
    } catch {
      /* a row whose JSON is bad is skipped, like poolStore does */
    }
  }
  return out;
}

/** Practice questions for a task from D1. May return fewer than `count` (or none): the caller falls back. */
export async function fetchServedItems(db: D1Database, task: string, count: number, section?: string, now: number = Date.now(), rng: () => number = Math.random): Promise<ServedItem[]> {
  const rows = await taskIds(db, task, now);
  const wanted = section ? rows.filter((r) => r.section === section) : rows;
  return currentVersions(db, pickIds(wanted, count, rng));
}

/**
 * What /api/caps returns. Flag OFF (the default), a task that is not switched on, an empty result or ANY error: exactly the old behaviour
 * (item_cache through fetchPoolItems). Never throws because of the new path.
 */
export async function servePool(db: D1Database, task: string, count: number, section?: string): Promise<(PoolItem | ServedItem)[]> {
  try {
    const flag = await loadFlag(db);
    if (isServedFromD1(flag, task)) {
      const served = await fetchServedItems(db, task, count, section);
      if (served.length > 0) return served;
    }
  } catch {
    /* fall through to the old path */
  }
  return fetchPoolItems(db, task, count, section);
}
