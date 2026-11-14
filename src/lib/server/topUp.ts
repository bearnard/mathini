// Pool top-up: keeps every pool in `pool_tasks` at its target size with questions that pass the quality validator.
// Called by the weekly cron (src/worker.ts -> runScheduled) and by the manual /api/cron/top-up route, with the same limits
// and the same code. All collaborators are injected, so it is tested with a fake generator and an in-memory sqlite D1.
//
// What changed from the first version (see the 2026-11 audit):
//   - the task list comes from pool_tasks (so a pool purged to zero rows IS refilled, and a deliberately empty pool is not),
//   - only SERVABLE rows count toward the target (rejected rows do not),
//   - the prompt is the subject's registry preamble + the task's CAPS instruction + the quality rules, for the right grade
//     (it used to be a generic Grade 6 string),
//   - every generated item passes acceptItems; rejects are never stored; a batch whose keys are mostly the longest option
//     is regenerated; a per-run budget caps API calls and accepted questions (Worker CPU and cost limits).
import { acceptItems, checkBatch, NUMERIC_SUBJECTS } from '../shared/questionQuality';
import { registry } from './caps/registry';
import { TASK_INDEX } from './caps/taskIndex.generated';
import { decimalPolicyFor } from './caps/formatPolicy';
import type { GeneratedItem } from './gemini';

export type BatchType = 'definitions' | 'calculations' | 'application' | 'misconceptions';

export const BATCH_INSTRUCTIONS: Record<BatchType, string> = {
  definitions: 'Generate 10 multiple-choice questions testing DEFINITIONS and TERMINOLOGY. Focus on vocabulary and conceptual understanding. Avoid calculations.',
  calculations: 'Generate 10 multiple-choice questions requiring CALCULATIONS or step-by-step NUMERICAL REASONING. Check every calculation before writing the item.',
  application: 'Generate 10 multiple-choice questions that apply the topic to everyday situations that learners know. Use generic, plausible South African situations; do not state facts about specific real places, institutions or statistics.',
  misconceptions: 'Generate 10 multiple-choice questions targeting common MISCONCEPTIONS. Wrong options must be the typical student errors. Ask each as a direct question; do not use a "a student says" frame.',
};
export const BATCH_ORDER: BatchType[] = ['definitions', 'calculations', 'application', 'misconceptions'];

export interface TopUpLimits {
  /** Pools to work on per run, biggest deficit first. */
  maxTasks: number;
  /** Stop after storing this many questions in one run. */
  maxAccepted: number;
  /** Stop after this many generate + embed calls in one run. */
  maxApiCalls: number;
  /**
   * Stop after this many external operations of ANY kind in one run (generate, embed, Vectorize query/upsert, every D1 statement).
   * Cloudflare limits subrequests and D1 queries per invocation (50 on the free plan), so the default fits the free plan;
   * raise it with the TOPUP_MAX_OPS variable (scheduled) or ?maxOps= (manual route) on a paid plan.
   */
  maxOps: number;
  /** Cosine similarity at or above which a question is a semantic duplicate. */
  similarity: number;
  /** A batch whose keys are mostly the longest option is regenerated at most this many times. */
  maxRegenerate: number;
}

export const DEFAULT_LIMITS: TopUpLimits = { maxTasks: 8, maxAccepted: 60, maxApiCalls: 200, maxOps: 45, similarity: 0.88, maxRegenerate: 2 };

interface VectorLike {
  query(values: number[], opts: { topK: number; filter: Record<string, string>; returnMetadata: 'none'; returnValues: false }): Promise<{ matches: { score: number }[] }>;
  upsert(vectors: { id: string; values: number[]; metadata: Record<string, string> }[]): Promise<unknown>;
}

export interface TopUpDeps {
  db: D1Database;
  generate: (prompt: string) => Promise<GeneratedItem[]>;
  /** Optional: with embed + vector, new questions are also checked for semantic duplicates and indexed. */
  embed?: (text: string) => Promise<number[]>;
  vector?: VectorLike | null;
  now?: () => number;
  log?: (line: string) => void;
}

export interface TopUpSummary {
  poolsBelowTarget: number;
  tasksWorked: number;
  accepted: number;
  rejected: number;
  rejectedByReason: Record<string, number>;
  apiCalls: number;
  /** Every external operation counted against maxOps. */
  ops: number;
  regenerated: number;
  skippedNoIndex: string[];
  stoppedBy: 'maxApiCalls' | 'maxAccepted' | 'maxOps' | null;
}

/** The Vectorize id of a question: same recipe as the original cron route, so existing vectors still line up. */
export function vectorIdFor(task: string, prompt: string): string {
  return Buffer.from(`${task}|${prompt}`).toString('base64url').slice(0, 64);
}

function cosine(a: number[], b: number[]): number {
  let dot = 0, ma = 0, mb = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; ma += a[i] * a[i]; mb += b[i] * b[i]; }
  return dot / (Math.sqrt(ma) * Math.sqrt(mb) || 1);
}

/** Numeric word problems are on topic in maths-like subjects; for the legacy grade6 code only the gr6- maths slugs. */
export function numericOkFor(task: string, code: string): boolean {
  if (code === 'grade6') return task.startsWith('gr6-');
  return NUMERIC_SUBJECTS.has(code);
}

/** The generation prompt for one task and batch type: registry preamble (with the quality rules) + CAPS scope. */
export function buildTopUpPrompt(task: string, batch: BatchType): string | null {
  const spec = TASK_INDEX[task];
  if (!spec) return null;
  const [code, grade] = spec;
  const cfg = registry[code];
  const instruction = cfg?.tasks[task];
  if (!cfg || !instruction) return null;
  const preamble = cfg.getPreamble(grade).replace(/\{count\}/g, '10');
  return `${preamble}

Topic "${task}": ${instruction}

${BATCH_INSTRUCTIONS[batch]}

Exactly 4 options, exactly 1 correct answer that is the EXACT text of one option (not a letter), a one or two sentence explanation that states the correct answer.
Return JSON: { "items": [{ "prompt": "...", "options": ["A","B","C","D"], "answer": "A", "explanation": "..." }] }`;
}

/** Pools below target, biggest deficit first. Counts SERVABLE rows only. */
export async function poolsBelowTarget(db: D1Database): Promise<{ task: string; target: number; servable: number }[]> {
  const res = await db
    .prepare(
      `SELECT p.task AS task, p.target AS target,
              (SELECT COUNT(*) FROM item_cache c WHERE c.task = p.task AND (c.quality_score IS NULL OR c.quality_score > 0)) AS servable
         FROM pool_tasks p WHERE p.enabled = 1`,
    )
    .all<{ task: string; target: number; servable: number }>();
  return (res.results ?? [])
    .filter((r) => r.servable < r.target)
    .sort((a, b) => b.target - b.servable - (a.target - a.servable) || a.task.localeCompare(b.task));
}

export async function runTopUp(deps: TopUpDeps, limits: TopUpLimits = DEFAULT_LIMITS): Promise<TopUpSummary> {
  const { db, generate, embed, vector } = deps;
  const now = deps.now ?? Date.now;
  const log = deps.log ?? (() => {});
  const summary: TopUpSummary = { poolsBelowTarget: 0, tasksWorked: 0, accepted: 0, rejected: 0, rejectedByReason: {}, apiCalls: 0, ops: 0, regenerated: 0, skippedNoIndex: [], stoppedBy: null };

  summary.ops++; // the pools query
  const below = await poolsBelowTarget(db);
  summary.poolsBelowTarget = below.length;
  const budgetLeft = () => {
    if (summary.ops >= limits.maxOps) { summary.stoppedBy = 'maxOps'; return false; }
    if (summary.apiCalls >= limits.maxApiCalls) { summary.stoppedBy = 'maxApiCalls'; return false; }
    if (summary.accepted >= limits.maxAccepted) { summary.stoppedBy = 'maxAccepted'; return false; }
    return true;
  };

  for (const pool of below) {
    if (summary.tasksWorked >= limits.maxTasks || !budgetLeft()) break;
    const spec = TASK_INDEX[pool.task];
    if (!spec) { summary.skippedNoIndex.push(pool.task); continue; }
    summary.tasksWorked++;
    let need = pool.target - pool.servable;
    summary.ops++;
    const existingRows = await db.prepare('SELECT prompt FROM item_cache WHERE task = ?').bind(pool.task).all<{ prompt: string }>();
    const prompts: string[] = (existingRows.results ?? []).map((r) => r.prompt);
    const embeddings: number[][] = [];
    const numericOk = numericOkFor(pool.task, spec[0]);
    const decimalComma = decimalPolicyFor(pool.task, spec[0]);

    for (const batchType of BATCH_ORDER) {
      if (need <= 0 || !budgetLeft()) break;
      const prompt = buildTopUpPrompt(pool.task, batchType);
      if (!prompt) break;
      let items: GeneratedItem[] = [];
      for (let attempt = 0; attempt <= limits.maxRegenerate; attempt++) {
        if (!budgetLeft()) break;
        summary.apiCalls++;
        summary.ops++;
        try { items = await generate(prompt); } catch { items = []; break; }
        if (!checkBatch(items).regenerate) break;
        summary.regenerated++; // the model ignored the length rule: try again
        items = attempt === limits.maxRegenerate ? items : [];
      }

      const { accepted, rejected } = acceptItems(items, { existingPrompts: prompts, numericOk, decimalComma });
      for (const r of rejected) {
        summary.rejected++;
        for (const x of r.reasons.filter((y) => y.severity === 'reject')) summary.rejectedByReason[x.code] = (summary.rejectedByReason[x.code] ?? 0) + 1;
      }

      for (const item of accepted) {
        if (need <= 0 || !budgetLeft()) break;
        let vectorId: string | null = null;
        if (embed) {
          summary.apiCalls++;
          summary.ops++;
          let emb: number[];
          try { emb = await embed(item.prompt); } catch { emb = []; }
          if (emb.length) {
            if (embeddings.some((e) => cosine(emb, e) >= limits.similarity)) { summary.rejected++; summary.rejectedByReason.semantic_duplicate = (summary.rejectedByReason.semantic_duplicate ?? 0) + 1; continue; }
            if (vector) {
              summary.ops++;
              try {
                const m = await vector.query(emb, { topK: 3, filter: { task: pool.task }, returnMetadata: 'none', returnValues: false });
                if (m.matches.some((x) => x.score >= limits.similarity)) { summary.rejected++; summary.rejectedByReason.semantic_duplicate = (summary.rejectedByReason.semantic_duplicate ?? 0) + 1; continue; }
              } catch { /* continue without the vector check */ }
              vectorId = vectorIdFor(pool.task, item.prompt);
              summary.ops++;
              try { await vector.upsert([{ id: vectorId, values: emb, metadata: { task: pool.task } }]); } catch { vectorId = null; }
            }
            embeddings.push(emb);
          }
        }
        summary.ops++;
        const res = await db
          .prepare('INSERT OR IGNORE INTO item_cache (task, prompt, options, answer, explanation, created_at, vector_id, section, quality_score, quality_flags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
          .bind(pool.task, item.prompt, JSON.stringify(item.options), item.answer, item.explanation ?? '', now(), vectorId, 'general', item.quality_score, JSON.stringify(item.quality_flags))
          .run();
        if ((res.meta?.changes ?? 1) > 0) {
          prompts.push(item.prompt);
          summary.accepted++;
          need--;
        }
      }
    }
  }

  log(`top-up: ${summary.poolsBelowTarget} pools below target, worked ${summary.tasksWorked}, stored ${summary.accepted}, rejected ${summary.rejected}, api calls ${summary.apiCalls}, ops ${summary.ops}${summary.stoppedBy ? `, stopped by ${summary.stoppedBy}` : ''}`);
  return summary;
}

const EMBED_MODEL = 'models/gemini-embedding-001';
const EMBED_DIMS = 768;

/** The Gemini embedding call used for semantic de-duplication. */
export function makeGeminiEmbed(apiKey: string): (text: string) => Promise<number[]> {
  return async (text: string) => {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${EMBED_MODEL}:embedContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: { parts: [{ text }] }, outputDimensionality: EMBED_DIMS }),
    });
    if (!res.ok) throw new Error(`Embed error: ${res.status}`);
    const data = (await res.json()) as { embedding: { values: number[] } };
    return data.embedding.values;
  };
}
