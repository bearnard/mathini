/**
 * CAPS question bank seed script.
 *
 * Generates 4 typed batches × 10 questions per task key, deduplicates
 * semantically via Vectorize (cosine ≥ 0.88 → reject), and inserts accepted
 * questions into D1.
 *
 * Task keys are discovered from the `task="..."` props in a grade's curriculum
 * components. Target a grade with `--grade N` (default 6). Each grade keeps its
 * own resumable progress file so grades can be seeded independently.
 *
 * All resources stay on Cloudflare + Gemini free tiers:
 *   - 768-dim embeddings → ~3.19M Vectorize dims (below 5M free limit)
 *
 * Run: GEMINI_API_KEY=xxx CF_ACCOUNT_ID=xxx CF_API_TOKEN=xxx npx tsx scripts/seed-questions.ts --grade 12
 *
 * CF_ACCOUNT_ID and CF_API_TOKEN need:
 *   - D1 write permission (Workers D1)
 *   - Vectorize read+write permission
 * Both are available in the Cloudflare dashboard → My Profile → API Tokens.
 */

import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";
import { Agent as UndiciAgent } from "undici";
import { registry } from "../src/lib/server/caps/registry";
import { getSections } from "../src/lib/server/caps/sections";
import { acceptItems } from "../src/lib/shared/questionQuality";
import { specsFromSlugs } from "../src/lib/server/caps/seedSlugs";
import { numericOkFor, FACT_GUARD } from "../src/lib/server/topUp";
import { batchesFor, BATCH_INSTRUCTIONS } from "../src/lib/server/caps/batches";
import { usableScope } from "../src/lib/server/caps/scope";
import { decimalPolicyFor } from "../src/lib/server/caps/formatPolicy";
import {
  AuthAbort, AuthError, HttpError, RunStats, createAuthGuard, isAuthStatus, parseOauthToken, processTaskItems, retryTransient, taskOutcome,
} from "../src/lib/server/seedRuntime";
import { execFileSync } from "node:child_process";
import os from "node:os";

// ── Config ─────────────────────────────────────────────────────────────────

const USE_LOCAL = process.argv.includes("--local");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_API_TOKEN = process.env.CF_API_TOKEN;

if (!CF_ACCOUNT_ID || !CF_API_TOKEN || (!USE_LOCAL && !GEMINI_API_KEY)) {
  console.error(
    USE_LOCAL
      ? "Required env vars in --local mode: CF_ACCOUNT_ID, CF_API_TOKEN"
      : "Required env vars: GEMINI_API_KEY, CF_ACCOUNT_ID, CF_API_TOKEN"
  );
  process.exit(1);
}

// Local model servers (used when --local flag is set).
// Generation runs on lemonade (OpenAI-compatible); embeddings stay on ollama.
const OLLAMA_BASE       = "http://localhost:11434";
const LEMONADE_BASE     = "http://localhost:13305";
const LEMONADE_KEY      = "lemonade";
const LOCAL_GEN_MODEL   = "Gemma-4-12B-it-GGUF";
const LOCAL_EMBED_MODEL = "embeddinggemma:latest";
// embeddinggemma outputs 768-dim vectors natively, matching the Vectorize index
// (the slice to EMBED_DIMS below is then a no-op). NOTE: switching embedding
// model changes the vector space — embeddings from the old model already in the
// index are not comparable, so dedup is only reliable within same-model vectors.

const D1_DATABASE_ID = "46f7b6a0-c555-4168-ae45-681dba2ceec2";
const VECTORIZE_INDEX = "preppals-questions";
const EMBED_MODEL = "gemini-embedding-001";
const GEN_MODEL = "gemini-3.5-flash";
const EMBED_DIMS = 768;
const SIMILARITY_THRESHOLD = 0.88;
const ITEMS_PER_BATCH = 10;
// gemini-3.5-flash free tier: 5 RPM, 20 RPD, 65K max output tokens/request
// Each task generates ~6K output tokens (40 questions × ~150 tokens).
// 8 tasks × 6K = 48K tokens — comfortably within the 65K output limit.
const TASKS_PER_GEN_CALL = 8;
// Local: gemma4:12b (~7.6GB) + embeddinggemma (~621MB) fit comfortably; keep a
// modest tasks-per-call so each request's output JSON stays well within the
// model's context window.
const LOCAL_TASKS_PER_GEN_CALL = 4;

// Gemini free-tier rate limits (rolling 60-second window)
const GEN_RPM  = 5;
const GEN_RPD  = 20;
const EMBED_RPM = 100;
const EMBED_RPD = 1000;
const RATE_WINDOW_MS  = 60_000;
const RATE_WINDOW_DAY = 24 * 60 * 60_000;

// Target grade — `--grade N` (default 6). Task keys are read from that grade's
// curriculum components.
function parseGradeArg(): number {
  const i = process.argv.indexOf("--grade");
  if (i === -1) return 6;
  const g = parseInt(process.argv[i + 1] ?? "", 10);
  if (!Number.isInteger(g) || g < 5 || g > 12) {
    console.error(`Invalid --grade "${process.argv[i + 1]}" — expected an integer 5–12.`);
    process.exit(1);
  }
  return g;
}

const GRADE = parseGradeArg();
const CURRICULUM_GLOB = `src/curriculum/grade${GRADE}/**/*.tsx`;

const SCRIPTS_DIR     = path.dirname(new URL(import.meta.url).pathname);
// Grade 6 keeps the legacy filename for backward compatibility; other grades
// get their own progress file so seeding stays independent and resumable.
const PROGRESS_FILE   = path.join(
  SCRIPTS_DIR,
  GRADE === 6 ? ".seed-progress.json" : `.seed-progress.grade${GRADE}.json`,
);
const DEBUG_LOG_FILE  = path.join(SCRIPTS_DIR, ".seed-debug.log");

function debugLog(msg: string): void {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(DEBUG_LOG_FILE, line);
}

// ── Types ───────────────────────────────────────────────────────────────────

interface GeneratedItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

type Embedding = number[];

interface Progress {
  done: string[];
  failed: string[];   // tasks where nothing was inserted or deduped — will retry
  totalInserted: number;
}

// ── Task prompt (all batch types in one call) ────────────────────────────────

/**
 * A pool-mode task to seed: the D1 task key (slug), its subject code (from the
 * component's apiPath), and the registry instruction describing its scope.
 */
interface TaskSpec {
  slug: string;
  code: string;
  instruction: string;
}

/**
 * Builds one generation prompt for a chunk of tasks from a SINGLE subject, so
 * the subject's registry preamble applies to all of them. Grounding comes from
 * the registry: the subject `getPreamble(grade)` plus each task's per-topic
 * instruction. The 4-typed-batch JSON contract is preserved for the parser.
 */
function buildTaskPrompt(specs: TaskSpec[], count: number): string {
  const code = specs[0].code;
  const preamble = registry[code].getPreamble(GRADE).replace(/\{count\}/g, String(count * 4));
  const topicList = specs
    .map((s, i) => `${i + 1}. "${s.slug}" — ${s.instruction}\n   Types to generate for this topic: ${batchesFor(s.slug, s.code).join(", ")}`)
    .join("\n");

  return `${preamble}

Generate questions for each of the following ${specs.length} topics. The quoted key is the topic ID you MUST reuse verbatim in the JSON; the text after the dash is the exact scope to cover — stay strictly within it.
${topicList}

${FACT_GUARD}

For EACH topic, generate ${count} questions of EACH type listed for THAT topic (the types differ by subject: never generate a type that is not listed for the topic). The types are:

1. DEFINITIONS — test vocabulary and conceptual understanding. Ask students to define a term or identify what something means. No calculations.
2. CALCULATIONS — ONLY where listed: require step-by-step numerical reasoning or formula application. Include working in the explanation.
3. APPLICATION — set in real-world South African contexts (local places, food, nature, culture). No generic "Country A/B" placeholders.
4. MISCONCEPTIONS — ONLY where listed. ${BATCH_INSTRUCTIONS.misconceptions}

Requirements for every question:
- Exactly 4 answer options
- Exactly 1 correct answer that appears verbatim in the options array
- A clear explanation of why the answer is correct
- Language appropriate for the grade level
- South African curriculum context (CAPS)

CRITICAL: The "answer" field must contain the EXACT full text of the correct option as it appears in the "options" array — NOT a letter like "A" or "B".

Return a JSON object keyed by the topic ID with this exact structure:
{
  "<topic-id>": {
    "definitions":    [{ "prompt": "What is trade?", "options": ["Exchange of goods","Making goods","Storing goods","Transporting goods"], "answer": "Exchange of goods", "explanation": "Trade is the exchange of goods or services." }],
    "calculations":   [{ "prompt": "...", "options": ["10","20","30","40"], "answer": "20", "explanation": "step-by-step working..." }],
    "application":    [{ "prompt": "...", "options": ["option text 1","option text 2","option text 3","option text 4"], "answer": "option text 2", "explanation": "..." }],
    "misconceptions": [{ "prompt": "...", "options": ["option text 1","option text 2","option text 3","option text 4"], "answer": "option text 1", "explanation": "..." }]
  }
}`;
}

// ── Rate limiter ─────────────────────────────────────────────────────────────

/**
 * Sliding-window rate limiter that knows the Gemini free-tier reset schedule.
 * Tracks outgoing request timestamps so it can predict exactly when quota
 * will free up — no guessing, no exponential backoff.
 */
class DailyQuotaError extends Error {}

class RateLimiter {
  private timestamps: number[] = [];
  private dailyTimestamps: number[] = [];

  constructor(
    private readonly rpm: number,
    private readonly rpd: number,
  ) {}

  /** Call before every API request. Waits for RPM; throws DailyQuotaError if RPD is exhausted. */
  async throttle(): Promise<void> {
    this.evict();

    if (this.dailyTimestamps.length >= this.rpd) {
      const oldest = this.dailyTimestamps[0];
      const resetsIn = RATE_WINDOW_DAY - (Date.now() - oldest);
      const h = Math.ceil(resetsIn / 3_600_000);
      throw new DailyQuotaError(`Daily quota exhausted (${this.rpd} RPD). Quota resets in ~${h}h — re-run the script then.`);
    }

    if (this.timestamps.length >= this.rpm) {
      const waitMs = RATE_WINDOW_MS - (Date.now() - this.timestamps[0]) + 200;
      console.log(`  ⏳ RPM window full (${this.timestamps.length}/${this.rpm}) — waiting ${Math.ceil(waitMs / 1000)}s...`);
      await sleep(waitMs);
      this.evict();
    }

    const now = Date.now();
    this.timestamps.push(now);
    this.dailyTimestamps.push(now);
  }

  /**
   * Call after a 429. Clears the local minute window and returns a full
   * RATE_WINDOW_MS wait — guaranteed to clear the server's rolling window
   * regardless of requests made in previous runs that we didn't track.
   */
  fullWindowReset(): number {
    this.timestamps = [];
    return RATE_WINDOW_MS + 500;
  }

  dailyRemaining(): number {
    this.evict();
    return this.rpd - this.dailyTimestamps.length;
  }

  /** Pre-populate daily usage from a known quota snapshot (e.g. from Gemini Studio). */
  preSeedDaily(used: number): void {
    // Spread timestamps evenly through the past 23 hours so they age out naturally
    const now = Date.now();
    const spread = Math.min(used, this.rpd);
    for (let i = 0; i < spread; i++) {
      this.dailyTimestamps.push(now - (spread - i) * Math.floor((23 * 3_600_000) / spread));
    }
  }

  private evict(): void {
    const minuteCutoff = Date.now() - RATE_WINDOW_MS;
    while (this.timestamps.length > 0 && this.timestamps[0] <= minuteCutoff) this.timestamps.shift();
    const dayCutoff = Date.now() - RATE_WINDOW_DAY;
    while (this.dailyTimestamps.length > 0 && this.dailyTimestamps[0] <= dayCutoff) this.dailyTimestamps.shift();
  }
}

const genLimiter   = new RateLimiter(GEN_RPM, GEN_RPD);
const embedLimiter = new RateLimiter(EMBED_RPM, EMBED_RPD);

// ── Gemini generation ───────────────────────────────────────────────────────

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

type BatchType = "definitions" | "calculations" | "application" | "misconceptions";
const BATCH_TYPES: BatchType[] = ["definitions", "calculations", "application", "misconceptions"];

/** The batch types the subject may use (no calculations outside calculating subjects; typical-error batch only for science and maths). */
const allowedTypes = (s: TaskSpec): Set<BatchType> => new Set(batchesFor(s.slug, s.code));

type TaskBatches = Record<BatchType, GeneratedItem[]>;
const emptyBatches = (): TaskBatches =>
  ({ definitions: [], calculations: [], application: [], misconceptions: [] });

/**
 * One generation call covers TASKS_PER_GEN_CALL tasks, returning a map of
 * taskKey → batches. Maximises RPD budget by packing multiple tasks per request.
 */
async function generateTasks(
  specs: TaskSpec[],
): Promise<Record<string, TaskBatches>> {
  const prompt = buildTaskPrompt(specs, ITEMS_PER_BATCH);

  // 429 / 5xx (the Gemini "503 high demand" spikes) / network errors are retried with exponential backoff and jitter, at most 4 attempts.
  // genLimiter.throttle() runs before EVERY attempt, so the free-tier RPM and daily budget are respected; a 429 also waits for the limiter's
  // full window. Out of attempts -> throws, and the caller marks the batch's tasks failed so a later run retries them.
  const data = await retryTransient(
    async () => {
      await genLimiter.throttle();
      const res = await fetch(
        `${GEMINI_BASE}/${GEN_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.9,
            },
          }),
        }
      );
      if (res.status === 429) throw new HttpError(429, "Gemini rate limit", genLimiter.fullWindowReset());
      if (!res.ok) throw new HttpError(res.status, `Gemini generation: ${await res.text()}`);
      return (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
    },
    {
      tries: 4,
      baseMs: 15_000,
      maxMs: 120_000,
      jitter: 0.3,
      onRetry: (attempt, waitMs, e) =>
        console.log(`\n  ⏳ Gemini ${e instanceof HttpError ? e.status : "network error"}: attempt ${attempt}/4 failed — waiting ${Math.ceil(waitMs / 1000)}s...`),
    },
  );

  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  const text = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();

  let parsed: Record<string, Partial<TaskBatches>>;
  try {
    parsed = JSON.parse(text);
  } catch {
    console.warn(`  ⚠️  JSON parse failed — skipping batch of ${specs.length} tasks`);
    return Object.fromEntries(specs.map((s) => [s.slug, emptyBatches()]));
  }

  const validate = (items: unknown): GeneratedItem[] =>
    (Array.isArray(items) ? items : []).filter(
      (it) =>
        it &&
        typeof it.prompt === "string" &&
        it.prompt.length > 10 &&
        Array.isArray(it.options) &&
        it.options.length === 4 &&
        it.options.every((o: unknown) => typeof o === "string") &&
        typeof it.answer === "string" &&
        it.options.includes(it.answer)
    );

  return Object.fromEntries(
    specs.map((s) => {
      const t = parsed[s.slug] ?? {};
      return [s.slug, {
        definitions:    validate(t.definitions),
        calculations:   allowedTypes(s).has("calculations") ? validate(t.calculations) : [],
        application:    validate(t.application),
        misconceptions: allowedTypes(s).has("misconceptions") ? validate(t.misconceptions) : [],
      }];
    })
  );
}

// ── Gemini batch embedding ───────────────────────────────────────────────────

/** Embeds multiple texts in a single batchEmbedContents request. */
async function embedBatch(texts: string[]): Promise<Embedding[]> {
  if (texts.length === 0) return [];

  return retryTransient(
    async () => {
      await embedLimiter.throttle();
      const res = await fetch(
        `${GEMINI_BASE}/${EMBED_MODEL}:batchEmbedContents?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            requests: texts.map((text) => ({
              model: `models/${EMBED_MODEL}`,
              content: { parts: [{ text }] },
              outputDimensionality: EMBED_DIMS,
            })),
          }),
        }
      );
      if (res.status === 429) throw new HttpError(429, "Embed rate limit", embedLimiter.fullWindowReset());
      if (!res.ok) throw new HttpError(res.status, `Embed: ${await res.text()}`);
      const data = (await res.json()) as { embeddings: { values: number[] }[] };
      return data.embeddings.map((e) => e.values);
    },
    {
      tries: 5,
      baseMs: 10_000,
      maxMs: 120_000,
      jitter: 0.3,
      onRetry: (attempt, waitMs, e) =>
        console.log(`\n  ⏳ embed ${e instanceof HttpError ? e.status : "network error"}: attempt ${attempt}/5 failed — waiting ${Math.ceil(waitMs / 1000)}s...`),
    },
  );
}

async function generateTasksLocal(
  specs: TaskSpec[],
  retries = 3
): Promise<Record<string, TaskBatches>> {
  const prompt = buildTaskPrompt(specs, ITEMS_PER_BATCH);

  for (let attempt = 0; attempt <= retries; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${LEMONADE_BASE}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${LEMONADE_KEY}` },
        body: JSON.stringify({
          model: LOCAL_GEN_MODEL,
          messages: [{ role: "user", content: prompt }],
          stream: false,
          response_format: { type: "json_object" },
        }),
        signal: AbortSignal.timeout(15 * 60_000),
        // undici's headersTimeout defaults to 5 min and fires before slow models finish
        dispatcher: new UndiciAgent({ headersTimeout: 30 * 60_000, bodyTimeout: 30 * 60_000 }),
      } as RequestInit);
    } catch (err) {
      const cause = err instanceof Error && (err as NodeJS.ErrnoException).cause
        ? ` (cause: ${(err as NodeJS.ErrnoException).cause})`
        : '';
      const msg = `  ⚠️  fetch error (attempt ${attempt + 1}/${retries + 1}): ${err}${cause}`;
      debugLog(`generateTasksLocal tasks=${specs.map((s) => s.slug).join(",")} ${msg}`);
      if (attempt < retries) {
        console.warn(`${msg} — retrying... if it's a timeout maybe increase it?`);
        await sleep(3000);
        continue;
      }
      throw err;
    }

    if (!res.ok) {
      const body = await res.text();
      debugLog(`generateTasksLocal tasks=${specs.map((s) => s.slug).join(",")} HTTP ${res.status}: ${body}`);
      throw new Error(`Ollama generation error: ${res.status} ${body}`);
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    let raw = data.choices?.[0]?.message?.content ?? "";
    debugLog(`generateTasksLocal tasks=${specs.map((s) => s.slug).join(",")} raw response length=${raw.length}`);
    // Strip any <think> reasoning tokens some local models emit (harmless no-op otherwise)
    raw = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
    raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();

    let parsed: Record<string, Partial<TaskBatches>>;
    try {
      parsed = JSON.parse(raw);
    } catch (parseErr) {
      debugLog(`generateTasksLocal tasks=${specs.map((s) => s.slug).join(",")} JSON parse error: ${parseErr}\nraw snippet: ${raw.slice(0, 500)}`);
      if (attempt < retries) {
        console.warn(`  ⚠️  JSON parse failed (attempt ${attempt + 1}) — retrying...`);
        continue;
      }
      console.warn(`  ⚠️  JSON parse failed after ${retries} retries — skipping batch`);
      return Object.fromEntries(specs.map((s) => [s.slug, emptyBatches()]));
    }

    const validate = (items: unknown): GeneratedItem[] =>
      (Array.isArray(items) ? items : []).filter(
        (it) =>
          it &&
          typeof it.prompt === "string" &&
          it.prompt.length > 10 &&
          Array.isArray(it.options) &&
          it.options.length === 4 &&
          it.options.every((o: unknown) => typeof o === "string") &&
          typeof it.answer === "string" &&
          it.options.includes(it.answer)
      );

    return Object.fromEntries(
      specs.map((s) => {
        const t = parsed[s.slug] ?? {};
        return [s.slug, {
          definitions:    validate(t.definitions),
          calculations:   allowedTypes(s).has("calculations") ? validate(t.calculations) : [],
          application:    validate(t.application),
          misconceptions: allowedTypes(s).has("misconceptions") ? validate(t.misconceptions) : [],
        }];
      })
    );
  }

  return Object.fromEntries(specs.map((s) => [s.slug, emptyBatches()]));
}

// ── Local (Ollama) embedding ─────────────────────────────────────────────────

/** Embeds multiple texts via embeddinggemma at 768 dims (matches the Vectorize index). */
async function embedBatchLocal(texts: string[]): Promise<Embedding[]> {
  if (texts.length === 0) return [];

  const res = await fetch(`${OLLAMA_BASE}/api/embed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LOCAL_EMBED_MODEL,
      input: texts,
    }),
  });

  if (!res.ok) {
    throw new Error(`Ollama embed error: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { embeddings: number[][] };
  // Matryoshka truncation: slice to 768 dims to match the Vectorize index.
  // (Ollama's options.embedding_dimension is not reliably honoured.)
  return data.embeddings.map((e) => e.slice(0, EMBED_DIMS));
}

function cosine(a: Embedding, b: Embedding): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

// ── Vectorize (Cloudflare REST API) ─────────────────────────────────────────

const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}`;

// Cloudflare auth. scripts/load-secrets.sh exports CF_TOKEN_SOURCE=wrangler-oauth when the token is wrangler's OAuth token. That token EXPIRES
// (about an hour), so it is re-read from wrangler's config on every refresh and refreshed (`wrangler whoami` does it) before the run, every
// 30 minutes, and on the first 401/403. A token the user supplied themselves (CF_API_TOKEN) cannot be refreshed: a 401/403 then aborts the run.
const TOKEN_REFRESHABLE = process.env.CF_TOKEN_SOURCE === "wrangler-oauth";
function readCfToken(): string {
  if (!TOKEN_REFRESHABLE) return CF_API_TOKEN as string;
  const cfg = path.join(process.env.WRANGLER_HOME ?? path.join(os.homedir(), ".config", ".wrangler"), "config", "default.toml");
  try {
    return parseOauthToken(fs.readFileSync(cfg, "utf8")) ?? (CF_API_TOKEN as string);
  } catch {
    return CF_API_TOKEN as string;
  }
}
async function refreshCfToken(): Promise<boolean> {
  if (!TOKEN_REFRESHABLE) return false;
  try {
    execFileSync("npx", ["wrangler", "whoami"], { stdio: "ignore", timeout: 90_000 });
    return true;
  } catch {
    return false;
  }
}
const authGuard = createAuthGuard({ readToken: readCfToken, refresh: refreshCfToken, maxAgeMs: 30 * 60_000, log: (m) => console.log(`  🔑 ${m}`) });
const runStats = new RunStats();

/** One Cloudflare REST call with the current token. 401/403 -> AuthError (the guard refreshes once, then aborts); other failures -> HttpError. */
async function cf(url: string, init: { method: string; headers?: Record<string, string>; body: string }): Promise<Response> {
  return authGuard.call(async (token) => {
    const res = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...(init.headers ?? {}), Authorization: `Bearer ${token}` } });
    if (isAuthStatus(res.status)) throw new AuthError(res.status, await res.text());
    return res;
  });
}

async function vectorizeQuery(
  embedding: Embedding,
  taskFilter: string,
  index: string,
  topK = 3
): Promise<{ id: string; score: number }[]> {
  const res = await cf(`${CF_BASE}/vectorize/v2/indexes/${index}/query`, {
    method: "POST",
    body: JSON.stringify({ vector: embedding, topK, filter: { task: taskFilter }, returnMetadata: "none", returnValues: false }),
  });

  if (!res.ok) {
    const err = await res.text();
    // Empty index returns 400 "no vectors" on first insert — treat as no matches
    if (res.status === 400 && err.includes("no vectors")) return [];
    throw new HttpError(res.status, `Vectorize query: ${err}`);
  }

  const data = (await res.json()) as {
    result?: { matches?: { id: string; score: number }[] };
  };
  return data.result?.matches ?? [];
}

async function vectorizeUpsert(
  id: string,
  embedding: Embedding,
  task: string,
  index: string
): Promise<void> {
  const res = await cf(`${CF_BASE}/vectorize/v2/indexes/${index}/upsert`, {
    method: "POST",
    headers: { "Content-Type": "application/x-ndjson" },
    body: JSON.stringify({ id, values: embedding, metadata: { task } }) + "\n",
  });
  if (!res.ok) throw new HttpError(res.status, `Vectorize upsert: ${await res.text()}`);
}

// ── D1 (Cloudflare REST API) ─────────────────────────────────────────────────

async function d1Insert(
  item: GeneratedItem & { task: string; vectorId: string; section?: string; quality_score?: number; quality_flags?: string[] },
): Promise<void> {
  const section = item.section ?? "general";
  const res = await cf(`${CF_BASE}/d1/database/${D1_DATABASE_ID}/query`, {
    method: "POST",
    body: JSON.stringify({
      sql: `INSERT OR IGNORE INTO item_cache
            (task, prompt, options, answer, explanation, created_at, vector_id, section, quality_score, quality_flags)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      params: [
        item.task,
        item.prompt,
        JSON.stringify(item.options),
        item.answer,
        item.explanation,
        Date.now(),
        item.vectorId,
        section,
        item.quality_score ?? null,
        JSON.stringify(item.quality_flags ?? []),
      ],
    }),
  });
  if (!res.ok) throw new HttpError(res.status, `D1 insert: ${await res.text()}`);
}

async function d1Query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  const res = await cf(`${CF_BASE}/d1/database/${D1_DATABASE_ID}/query`, { method: "POST", body: JSON.stringify({ sql, params }) });
  if (!res.ok) throw new HttpError(res.status, `D1 query: ${await res.text()}`);
  const data = (await res.json()) as { result: { results: T[] }[] };
  return data.result?.[0]?.results ?? [];
}

// ── Task discovery + registry grounding ──────────────────────────────────────

/**
 * Discovers the pool-mode tasks for the target grade: a component is pool-mode
 * only when it passes BOTH `task=` and `apiPath="/api/caps/<code>"` (static-bank
 * components without an apiPath are never served from D1, so they are skipped).
 * The subject `code` comes from the apiPath; the instruction is filled in later
 * from the registry by `groundTasks`.
 */
async function getPoolTasks(): Promise<TaskSpec[]> {
  const files = await glob(CURRICULUM_GLOB, {
    cwd: path.join(SCRIPTS_DIR, ".."),
  });

  const bySlug = new Map<string, TaskSpec>();
  for (const file of files) {
    const content = fs.readFileSync(path.join(SCRIPTS_DIR, "..", file), "utf8");
    const apiMatch = content.match(/apiPath="\/api\/caps\/([a-z0-9]+)"/);
    if (!apiMatch) continue; // static-bank component — not seeded
    const code = apiMatch[1];
    for (const m of content.matchAll(/task="([^"]+)"/g)) {
      bySlug.set(m[1], { slug: m[1], code, instruction: "" });
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => a.slug.localeCompare(b.slug));
}

/**
 * Resolves every task's registry instruction in place. There is NO fallback:
 * if a task's subject code isn't in the registry, or the slug has no instruction
 * under it, the run aborts. This enforces the invariant that every seeded task
 * is registry-grounded.
 */
function groundTasks(specs: TaskSpec[]): void {
  const missing: string[] = [];
  for (const s of specs) {
    const cfg = registry[s.code];
    if (!cfg) {
      missing.push(`${s.slug} — subject code "${s.code}" not in registry`);
      continue;
    }
    const instruction = usableScope(cfg.tasks[s.slug]);
    if (!instruction) {
      missing.push(`${s.slug} — no usable scope text under registry["${s.code}"].tasks (missing, or too short to name the content)`);
      continue;
    }
    s.instruction = instruction;
  }

  if (missing.length > 0) {
    console.error(
      `\n❌ ${missing.length} pool-mode task(s) for grade ${GRADE} have no registry entry — refusing to seed (no fallback):`,
    );
    for (const m of missing) console.error(`   - ${m}`);
    console.error(
      `\nEvery component with apiPath="/api/caps/<code>" must use a code in the registry and a slug present in that subject's tasks JSON.\n`,
    );
    process.exit(1);
  }
}

// ── Progress ─────────────────────────────────────────────────────────────────

function loadProgress(file: string): Progress {
  try {
    const p = JSON.parse(fs.readFileSync(file, "utf8")) as Partial<Progress>;
    return {
      done: p.done ?? [],
      failed: p.failed ?? [],
      totalInserted: p.totalInserted ?? 0,
    };
  } catch {
    return { done: [], failed: [], totalInserted: 0 };
  }
}

function saveProgress(p: Progress, file: string): void {
  fs.writeFileSync(file, JSON.stringify(p, null, 2));
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function vectorId(task: string, prompt: string): string {
  // Stable ID: base64url of "task|prompt" truncated to keep it reasonable
  const raw = `${task}|${prompt}`;
  return Buffer.from(raw).toString("base64url").slice(0, 64);
}

// ── Verify / sync progress against D1 ────────────────────────────────────────

async function verifyProgress(sync: boolean): Promise<void> {
  const taskKeys = (await getPoolTasks()).map((s) => s.slug);
  const progress = loadProgress(PROGRESS_FILE);
  const doneSet  = new Set(progress.done);

  console.log(`\n🔍 Querying D1 for actual row counts per task…`);
  const rows = await d1Query<{ task: string; cnt: number }>(
    `SELECT task, COUNT(*) AS cnt FROM item_cache GROUP BY task`
  );
  const d1Counts = new Map(rows.map((r) => [r.task, r.cnt]));

  const phantomDone: string[]   = []; // in done[] but 0 D1 rows
  const untrackedD1: string[]   = []; // has D1 rows but not in done[]
  const ok: string[]            = [];

  for (const key of taskKeys) {
    const cnt    = d1Counts.get(key) ?? 0;
    const isDone = doneSet.has(key);
    if (isDone && cnt === 0) phantomDone.push(key);
    else if (!isDone && cnt > 0) untrackedD1.push(`${key}(${cnt})`);
    else if (isDone && cnt > 0)  ok.push(`${key}(${cnt})`);
  }

  console.log(`\n  ✅ ${ok.length} tasks in sync`);

  if (phantomDone.length > 0) {
    console.log(`\n  ❌ ${phantomDone.length} phantom-done (progress says done, D1 has 0 rows):`);
    for (const k of phantomDone) console.log(`     - ${k}`);
  }

  if (untrackedD1.length > 0) {
    console.log(`\n  ⚠️  ${untrackedD1.length} untracked (D1 has rows, progress not marked done):`);
    for (const k of untrackedD1) console.log(`     - ${k}`);
  }

  if (!sync) {
    if (phantomDone.length > 0 || untrackedD1.length > 0) {
      console.log(`\nRun with --sync to reconcile the progress file.\n`);
    } else {
      console.log(`\nProgress file is in sync with D1. ✓\n`);
    }
    return;
  }

  // --sync: reconcile
  let changed = false;
  for (const key of phantomDone) {
    progress.done = progress.done.filter((k) => k !== key);
    if (!progress.failed.includes(key)) progress.failed.push(key);
    changed = true;
  }
  for (const entry of untrackedD1) {
    const key = entry.split("(")[0];
    if (!progress.done.includes(key)) {
      progress.done.push(key);
      progress.failed = progress.failed.filter((k) => k !== key);
    }
    changed = true;
  }
  // Recount totalInserted from D1
  progress.totalInserted = Array.from(d1Counts.values()).reduce((a, b) => a + b, 0);

  if (changed) {
    saveProgress(progress, PROGRESS_FILE);
    console.log(`\n✅ Progress file reconciled with D1.`);
    console.log(`   done: ${progress.done.length}, failed: ${progress.failed.length}, totalInserted: ${progress.totalInserted}\n`);
  } else {
    console.log(`\nProgress file is already in sync with D1. ✓\n`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const getArg = (flag: string) => {
    const i = args.indexOf(flag);
    return i !== -1 ? parseInt(args[i + 1] ?? "0", 10) : 0;
  };

  if (args.includes("--verify")) { await verifyProgress(false); return; }
  if (args.includes("--sync"))   { await verifyProgress(true);  return; }

  const tasksOverride = getArg("--tasks");
  const tasksPerCall = tasksOverride > 0
    ? tasksOverride
    : USE_LOCAL ? LOCAL_TASKS_PER_GEN_CALL : TASKS_PER_GEN_CALL;

  if (USE_LOCAL) {
    console.log(`🖥️  Local mode: gen=${LOCAL_GEN_MODEL}@lemonade (${tasksPerCall} tasks/call), embed=${LOCAL_EMBED_MODEL}@ollama (${EMBED_DIMS}d → ${VECTORIZE_INDEX})`);
  } else {
    const genUsed   = getArg("--gen-used");
    const embedUsed = getArg("--embed-used");
    if (genUsed > 0)   { genLimiter.preSeedDaily(genUsed);     console.log(`ℹ️  Pre-seeded gen quota: ${genUsed}/${GEN_RPD} used today`); }
    if (embedUsed > 0) { embedLimiter.preSeedDaily(embedUsed); console.log(`ℹ️  Pre-seeded embed quota: ${embedUsed}/${EMBED_RPD} used today`); }
  }

  // --slugs a,b,c: seed exactly these pools, resolved through the task index (works for the Grade 6 shell topics the component scan cannot see).
  const slugsIdx = args.indexOf("--slugs");
  const forcedSlugs = slugsIdx !== -1 ? args[slugsIdx + 1] ?? "" : "";
  const specs = forcedSlugs ? specsFromSlugs(forcedSlugs, GRADE) : await getPoolTasks();
  if (specs.length === 0) {
    console.warn(`\n⚠️  No pool-mode tasks found for grade ${GRADE} (glob: ${CURRICULUM_GLOB}). Nothing to seed.\n`);
    return;
  }
  groundTasks(specs); // aborts if any task is not registry-grounded — no fallback

  const progress = loadProgress(PROGRESS_FILE);
  const doneSet  = new Set(progress.done);

  // PREFLIGHT, before any generation quota is spent: refresh the Cloudflare token, then prove it works with one cheap D1 query.
  // If it does not, this throws AuthAbort and the run ends here with a clear message (see the catch at the bottom).
  if (TOKEN_REFRESHABLE) await authGuard.ensureFresh();
  await d1Query("SELECT 1 AS ok");
  console.log("  🔑 Cloudflare authorisation checked (D1 reachable)");

  // an explicit --slugs list is always (re)seeded, even if the progress file says it was done (that is the point after a purge)
  const remaining = forcedSlugs ? specs : specs.filter((s) => !doneSet.has(s.slug));
  if (progress.failed.length > 0) {
    console.log(`   ⚠️  ${progress.failed.length} previously failed tasks will be retried: ${progress.failed.join(", ")}`);
  }
  console.log(`\n📚 Grade ${GRADE} seed — ${specs.length} tasks total, ${remaining.length} remaining`);
  if (!USE_LOCAL) {
    console.log(`   Free-tier budget: ${GEN_RPD} gen requests/day × ${tasksPerCall} tasks/call = up to ${GEN_RPD * tasksPerCall} tasks per run`);
  }
  console.log();

  // Group remaining tasks by subject code, then chunk within each subject so
  // every generation call shares a single subject preamble (getPreamble).
  const byCode = new Map<string, TaskSpec[]>();
  for (const s of remaining) {
    const list = byCode.get(s.code);
    if (list) list.push(s);
    else byCode.set(s.code, [s]);
  }
  const chunks: TaskSpec[][] = [];
  for (const list of byCode.values()) {
    for (let i = 0; i < list.length; i += tasksPerCall) {
      chunks.push(list.slice(i, i + tasksPerCall));
    }
  }

  let batchNum = 0;
  for (const chunk of chunks) {
    batchNum++;
    console.log(`\n── Batch ${batchNum}/${chunks.length} [${chunk[0].code}]: ${chunk.map((s) => s.slug).join(", ")} ──`);

    process.stdout.write(`  generating ${chunk.length} tasks...`);
    let allBatches: Record<string, TaskBatches>;
    try {
      allBatches = USE_LOCAL
        ? await generateTasksLocal(chunk)
        : await generateTasks(chunk);
    } catch (err) {
      if (err instanceof DailyQuotaError) {
        console.log(`\n⛔ ${err.message}`);
        console.log(`   Progress saved — ${progress.done.length}/${specs.length} tasks complete.\n`);
        console.log(runStats.render({ totalInserted: progress.totalInserted, done: progress.done.length, failed: progress.failed.length }) + "\n");
        return;
      }
      console.log(` ⚠️  failed after retries: ${err} — marking these tasks for a later run`);
      debugLog(`batch=${chunk.map((s) => s.slug).join(",")} generation failed: ${err instanceof Error ? err.stack ?? err.message : err}`);
      for (const spec of chunk) if (!progress.failed.includes(spec.slug)) progress.failed.push(spec.slug);
      saveProgress(progress, PROGRESS_FILE);
      continue;
    }

    for (const spec of chunk) {
      const taskKey = spec.slug;
      const batches = allBatches[taskKey];
      const generated = BATCH_TYPES.flatMap((t) =>
        batches[t].map((item) => ({ ...item, batchType: t }))
      );
      // Quality gate (ADR 0003 section 1a): rejected questions are NEVER stored. Accepted ones carry their score and flags.
      const { accepted: allItems, rejected: qualityRejected } = acceptItems(generated, { numericOk: numericOkFor(taskKey, spec.code), decimalComma: decimalPolicyFor(taskKey, spec.code), rejectFalseStatementStems: true });
      console.log(`\n  [${taskKey}] got ${generated.length} items, ${qualityRejected.length} rejected by the quality validator`);
      const taskStats = runStats.for(taskKey);
      taskStats.generated += generated.length;
      taskStats.rejected += qualityRejected.length;

      if (allItems.length === 0) {
        // Generation returned nothing — don't mark done, let it retry next run
        console.warn(`  ⚠️  [${taskKey}] generation returned 0 items — will retry`);
        if (!progress.failed.includes(taskKey)) progress.failed.push(taskKey);
        saveProgress(progress, PROGRESS_FILE);
        continue;
      }

      let embeddings: Embedding[];
      try {
        embeddings = USE_LOCAL
          ? await embedBatchLocal(allItems.map((it) => it.prompt))
          : await embedBatch(allItems.map((it) => it.prompt));
      } catch (err) {
        console.warn(`  ⚠️  embed failed: ${err} — skipping task`);
        if (!progress.failed.includes(taskKey)) progress.failed.push(taskKey);
        saveProgress(progress, PROGRESS_FILE);
        continue;
      }

      // Determine sections for this task (empty = use 'general' for all)
      const taskSections = getSections(taskKey) ?? [];
      // If the task has sections, cycle through them; otherwise all 'general'
      const assignSection = (idx: number): string =>
        taskSections.length > 0 ? taskSections[idx % taskSections.length].slug : "general";

      // Dedup + insert (src/lib/server/seedRuntime.ts, unit-tested with fakes). An AuthAbort propagates out of here and ends the run; a failed
      // duplicate check never becomes an insert (the row is counted as not checked and retried on a later run).
      const before = taskStats.inserted;
      const stopped = await processTaskItems(
        taskKey,
        allItems,
        embeddings,
        {
          vectorQuery: (emb, task) => vectorizeQuery(emb, task, VECTORIZE_INDEX),
          vectorUpsert: (id, emb, task) => vectorizeUpsert(id, emb, task, VECTORIZE_INDEX),
          d1Insert: (row) => d1Insert(row),
          vectorId,
          cosine,
          log: (m) => console.warn(m),
          dot: (c) => process.stdout.write(c),
        },
        taskStats,
        { similarity: SIMILARITY_THRESHOLD, sectionFor: assignSection },
      );
      progress.totalInserted += taskStats.inserted - before;

      process.stdout.write("\n");
      console.log(`  [${taskKey}] +${taskStats.inserted} inserted, ${taskStats.deduped} deduped, ${taskStats.notChecked} not checked, ${taskStats.errors} errors${stopped ? `, STOPPED (${stopped})` : ""}`);

      if (taskOutcome(taskStats, stopped) === "done") {
        progress.done.push(taskKey);
        progress.failed = progress.failed.filter((k) => k !== taskKey);
      } else {
        if (!progress.failed.includes(taskKey)) progress.failed.push(taskKey);
        console.warn(`  ⚠️  [${taskKey}] not complete — will retry next run`);
      }
      saveProgress(progress, PROGRESS_FILE);
    }
  }

  console.log("\n" + runStats.render({ totalInserted: progress.totalInserted, done: progress.done.length, failed: progress.failed.length }));
  if (progress.failed.length > 0) {
    console.log(`   ⚠️  ${progress.failed.length} tasks need retry: ${progress.failed.join(", ")}`);
  }
  console.log();
}

main().catch((err) => {
  if (err instanceof AuthAbort) {
    console.error(`\n⛔ ${err.message}`);
    console.error("\n" + runStats.render());
    process.exit(3);
  }
  console.error("\n❌ Seed failed:", err);
  console.error("\n" + runStats.render());
  process.exit(1);
});
