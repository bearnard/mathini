// Stable question identity and versions (ADR 0003 section 3). Server only.
//
// A question's id is the qkey of its ORIGINAL prompt and never changes. Edits add a row to question_versions and move
// questions.current_version_id. Each version also stores the qkey of its own prompt (an alias), so a client that hashes the
// edited wording still reaches the same question. attempts and review_items always store the CANONICAL id.
import { makeQkey, isQkey } from '../../shared/qkey';
import { linkLegacyItemSql, questionIdFor, registerQuestionSql, type SeedQuestion } from './sql';

export interface QuestionVersion {
  id: number;
  versionNo: number;
  qkey: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  extra: Record<string, unknown>;
  sourceNote: string | null;
  author: string;
  status: string;
  createdAt: number;
}

export interface ResolvedQuestion {
  id: string;
  task: string;
  section: string;
  kind: string;
  source: 'curated' | 'ai';
  status: 'active' | 'retired';
  legacyItemId: number | null;
  version: QuestionVersion;
}

interface QuestionRow {
  id: string; task: string; section: string; kind: string; source: 'curated' | 'ai'; status: 'active' | 'retired';
  legacy_item_id: number | null;
  v_id: number; version_no: number; qkey: string; prompt: string; options: string; answer: string; explanation: string;
  extra: string; source_note: string | null; author: string; v_status: string; v_created_at: number;
}

const SELECT_CURRENT = `SELECT q.id, q.task, q.section, q.kind, q.source, q.status, q.legacy_item_id,
    v.id AS v_id, v.version_no, v.qkey, v.prompt, v.options, v.answer, v.explanation, v.extra, v.source_note, v.author,
    v.status AS v_status, v.created_at AS v_created_at
  FROM questions q JOIN question_versions v ON v.id = q.current_version_id`;

function parseJson<T>(text: string, fallback: T): T {
  try { return JSON.parse(text) as T; } catch { return fallback; }
}

function toResolved(r: QuestionRow): ResolvedQuestion {
  const options = parseJson<unknown>(r.options, []);
  return {
    id: r.id, task: r.task, section: r.section, kind: r.kind, source: r.source, status: r.status, legacyItemId: r.legacy_item_id,
    version: {
      id: r.v_id, versionNo: r.version_no, qkey: r.qkey, prompt: r.prompt,
      options: Array.isArray(options) ? (options as string[]) : [],
      answer: r.answer, explanation: r.explanation, extra: parseJson<Record<string, unknown>>(r.extra, {}),
      sourceNote: r.source_note, author: r.author, status: r.v_status, createdAt: r.v_created_at,
    },
  };
}

/**
 * Any qkey (the original id OR any version's alias) -> the canonical question id. Null when no question is registered
 * for it (e.g. a curated question that was never seeded): callers then keep using the qkey they were given.
 */
export async function resolveCanonicalId(db: D1Database, qkey: string): Promise<string | null> {
  if (!isQkey(qkey)) return null;
  const direct = await db.prepare('SELECT id FROM questions WHERE id = ?').bind(qkey).first<{ id: string }>();
  if (direct) return direct.id;
  const alias = await db.prepare('SELECT question_id FROM question_versions WHERE qkey = ? ORDER BY id DESC LIMIT 1').bind(qkey).first<{ question_id: string }>();
  return alias?.question_id ?? null;
}

/** The question and its CURRENT version, by canonical id or by any alias qkey. Null if unknown. Retired questions resolve too. */
export async function resolveQuestion(db: D1Database, idOrQkey: string): Promise<ResolvedQuestion | null> {
  const id = await resolveCanonicalId(db, idOrQkey);
  if (!id) return null;
  const row = await db.prepare(`${SELECT_CURRENT} WHERE q.id = ?`).bind(id).first<QuestionRow>();
  return row ? toResolved(row) : null;
}

/**
 * Registers an item_cache row as a question (lazy, idempotent). Used by /api/attempts for pool items answered before the
 * backfill reached them. Returns the canonical id, or null when the row does not exist.
 */
export async function ensureQuestionForItem(db: D1Database, task: string, itemId: number, now: number): Promise<string | null> {
  const row = await db
    .prepare('SELECT id, prompt, options, answer, explanation, section FROM item_cache WHERE id = ? AND task = ?')
    .bind(itemId, task)
    .first<{ id: number; prompt: string; options: string; answer: string; explanation: string; section: string }>();
  if (!row) return null;
  const options = parseJson<unknown>(row.options, null);
  if (!Array.isArray(options)) return null;
  const q: SeedQuestion = {
    task, section: row.section || 'general', kind: 'mcq', source: 'ai', prompt: row.prompt, options: options as string[],
    answer: row.answer, explanation: row.explanation ?? '', extra: {}, legacyItemId: row.id, author: 'ai',
  };
  const id = questionIdFor(q);
  const exists = await db.prepare('SELECT id FROM questions WHERE id = ?').bind(id).first<{ id: string }>();
  if (exists) {
    await db.prepare(linkLegacyItemSql(id, row.id)).run();
    return id;
  }
  // registerQuestionSql stamps created_at from SQLite's clock; `now` is accepted for symmetry with the other helpers.
  void now;
  await db.batch(registerQuestionSql(q).map((s) => db.prepare(s)));
  return id;
}

export interface VersionFields {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
  extra?: Record<string, unknown>;
}

export type CreateVersionResult =
  | { ok: true; questionId: string; versionId: number; versionNo: number }
  | { ok: false; reason: 'not_found' | 'retired' | 'stale' | 'qkey_collision' | 'invalid' };

/**
 * An edit: adds the next version, moves the current pointer to it, KEEPS the question id. review_items and attempts are never
 * touched, so schedules cannot orphan. `expectedVersionId` is the version the editor saw; a newer edit makes this fail with
 * 'stale' instead of silently overwriting it. A new prompt whose qkey already belongs to ANOTHER question is refused.
 * No route calls this yet.
 */
export async function createVersion(
  db: D1Database,
  args: { questionId: string; expectedVersionId: number; fields: VersionFields; author: string; sourceNote?: string | null; now: number },
): Promise<CreateVersionResult> {
  const { questionId, expectedVersionId, fields, author, now } = args;
  if (!fields.prompt.trim() || !fields.answer.trim() || !Array.isArray(fields.options) || !author.trim()) return { ok: false, reason: 'invalid' };

  const cur = await db
    .prepare('SELECT q.task, q.status, q.current_version_id, v.version_no FROM questions q LEFT JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ?')
    .bind(questionId)
    .first<{ task: string; status: string; current_version_id: number | null; version_no: number | null }>();
  if (!cur) return { ok: false, reason: 'not_found' };
  if (cur.status === 'retired') return { ok: false, reason: 'retired' };
  if (cur.current_version_id !== expectedVersionId || cur.version_no == null) return { ok: false, reason: 'stale' };

  const qkey = makeQkey(cur.task, fields.prompt);
  const clash = await db
    .prepare('SELECT 1 AS x FROM questions WHERE id = ? AND id <> ? UNION SELECT 1 FROM question_versions WHERE qkey = ? AND question_id <> ? LIMIT 1')
    .bind(qkey, questionId, qkey, questionId)
    .first<{ x: number }>();
  if (clash) return { ok: false, reason: 'qkey_collision' };

  const versionNo = cur.version_no + 1;
  try {
    const out = await db.batch([
      db
        .prepare(
          `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at)
           SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved', ?
           WHERE EXISTS (SELECT 1 FROM questions WHERE id = ? AND status = 'active' AND current_version_id = ?)`,
        )
        .bind(questionId, versionNo, qkey, fields.prompt, JSON.stringify(fields.options), fields.answer, fields.explanation ?? '', JSON.stringify(fields.extra ?? {}), args.sourceNote ?? null, author, now, questionId, expectedVersionId),
      db
        .prepare(
          `UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ? AND version_no = ?)
           WHERE id = ? AND status = 'active' AND current_version_id = ?
             AND EXISTS (SELECT 1 FROM question_versions WHERE question_id = ? AND version_no = ?)`,
        )
        .bind(questionId, versionNo, questionId, expectedVersionId, questionId, versionNo),
    ]);
    const inserted = Number((out[0] as { meta?: { changes?: number } }).meta?.changes ?? 0);
    const moved = Number((out[1] as { meta?: { changes?: number } }).meta?.changes ?? 0);
    if (inserted !== 1 || moved !== 1) return { ok: false, reason: 'stale' };
  } catch {
    // UNIQUE (question_id, version_no): a concurrent edit took this number. The batch rolled back.
    return { ok: false, reason: 'stale' };
  }
  const v = await db.prepare('SELECT id FROM question_versions WHERE question_id = ? AND version_no = ?').bind(questionId, versionNo).first<{ id: number }>();
  return { ok: true, questionId, versionId: v!.id, versionNo };
}

/** Retire (leaves practice and review; history stays) or reinstate. No route calls this yet. */
export async function setQuestionStatus(db: D1Database, questionId: string, status: 'active' | 'retired', now: number): Promise<boolean> {
  const r = await db
    .prepare('UPDATE questions SET status = ?, retired_at = ? WHERE id = ? AND status <> ?')
    .bind(status, status === 'retired' ? now : null, questionId, status)
    .run();
  return Number(r.meta?.changes ?? 0) === 1;
}

export interface AttemptIdentity {
  /** The id to store in attempts.qkey and review_items.qkey: canonical when registered, otherwise the qkey as given. */
  qkey: string | null;
  /** attempts.question_version_id, or null when unknown. */
  versionId: number | null;
}

/**
 * Called by /api/attempts. Never throws into the caller's flow (the route wraps it): resolves the canonical id, lazily
 * registers a pool item, and picks the version the learner saw (a client-sent version id only if it belongs to the question).
 */
export async function identifyAttempt(
  db: D1Database,
  a: { task: string; qkey: string | null; itemId?: number | null; clientVersionId?: number | null; now: number },
): Promise<AttemptIdentity> {
  let canonical: string | null = null;
  if (a.itemId) canonical = await ensureQuestionForItem(db, a.task, a.itemId, a.now);
  if (!canonical && a.qkey) canonical = await resolveCanonicalId(db, a.qkey);
  if (!canonical) return { qkey: a.qkey, versionId: null };

  if (a.clientVersionId) {
    const own = await db.prepare('SELECT id FROM question_versions WHERE id = ? AND question_id = ?').bind(a.clientVersionId, canonical).first<{ id: number }>();
    if (own) return { qkey: canonical, versionId: own.id };
  }
  const cur = await db.prepare('SELECT current_version_id FROM questions WHERE id = ?').bind(canonical).first<{ current_version_id: number | null }>();
  return { qkey: canonical, versionId: cur?.current_version_id ?? null };
}
