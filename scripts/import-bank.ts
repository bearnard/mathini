/**
 * Static bank → D1 / Vectorize importer.
 *
 * Backfills the item_cache pool with each topic's curated static `bank` so a
 * topic is never empty before AI seeding runs. Items are embedded (Gemini or,
 * with --local, Ollama), deduplicated against the existing pool via Vectorize
 * (cosine ≥ 0.88) and within the batch, then inserted with INSERT OR IGNORE.
 *
 * The bank is read straight out of each curriculum .tsx: the file is transpiled
 * to CJS and its module-level data evaluated with every import stubbed, so the
 * exact array passed to `bank={…}` (incl. `items.map(...)` transforms) is used.
 *
 * NOTE: the embedding / dedup / D1 / Vectorize helpers mirror seed-questions.ts.
 * Kept self-contained on purpose so the seeder stays untouched; can be lifted
 * into a shared module later.
 *
 * Run: ./scripts/import-bank.sh [--grade 12] [--local] [--dry]   (sources secrets)
 *   or: GEMINI_API_KEY=… CF_ACCOUNT_ID=… CF_API_TOKEN=… npx tsx scripts/import-bank.ts …
 */
import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";
import { createRequire } from "module";
import esbuild from "esbuild";

// ── Args / env ────────────────────────────────────────────────────────────────
const USE_LOCAL = process.argv.includes("--local");
const DRY_RUN = process.argv.includes("--dry");
const GRADE = (() => {
  const i = process.argv.indexOf("--grade");
  if (i === -1) return 0; // 0 = all grades
  const g = parseInt(process.argv[i + 1] ?? "", 10);
  if (!Number.isInteger(g) || g < 5 || g > 12) {
    console.error(`Invalid --grade "${process.argv[i + 1]}" — expected an integer 5–12.`);
    process.exit(1);
  }
  return g;
})();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_API_TOKEN = process.env.CF_API_TOKEN;
if (!DRY_RUN && (!CF_ACCOUNT_ID || !CF_API_TOKEN || (!USE_LOCAL && !GEMINI_API_KEY))) {
  console.error(
    USE_LOCAL
      ? "Required env vars in --local mode: CF_ACCOUNT_ID, CF_API_TOKEN"
      : "Required env vars: GEMINI_API_KEY, CF_ACCOUNT_ID, CF_API_TOKEN",
  );
  process.exit(1);
}

// ── Config (mirrors seed-questions.ts) ─────────────────────────────────────────
const OLLAMA_BASE = "http://localhost:11434";
const LOCAL_EMBED_MODEL = "embeddinggemma:latest";
const D1_DATABASE_ID = "46f7b6a0-c555-4168-ae45-681dba2ceec2";
const VECTORIZE_INDEX = "preppals-questions";
const EMBED_MODEL = "gemini-embedding-001";
const EMBED_DIMS = 768;
const SIMILARITY_THRESHOLD = 0.88;
const EMBED_RPM = 100;
const EMBED_RPD = 1000;
const RATE_WINDOW_MS = 60_000;
const RATE_WINDOW_DAY = 24 * 60 * 60_000;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

const SCRIPTS_DIR = path.dirname(new URL(import.meta.url).pathname);
const PROJECT_DIR = path.join(SCRIPTS_DIR, "..");
const PROGRESS_FILE = path.join(SCRIPTS_DIR, ".import-bank-progress.json");

const CF_BASE = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}`;
const CF_HEADERS = {
  Authorization: `Bearer ${CF_API_TOKEN}`,
  "Content-Type": "application/json",
};

type Embedding = number[];
interface BankItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function vectorId(task: string, prompt: string): string {
  return Buffer.from(`${task}|${prompt}`).toString("base64url").slice(0, 64);
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

// ── Rate limiter (Gemini free tier) ────────────────────────────────────────────
class DailyQuotaError extends Error {}
class RateLimiter {
  private ts: number[] = [];
  private daily: number[] = [];
  constructor(private readonly rpm: number, private readonly rpd: number) {}
  private evict() {
    const m = Date.now() - RATE_WINDOW_MS;
    while (this.ts.length && this.ts[0] <= m) this.ts.shift();
    const d = Date.now() - RATE_WINDOW_DAY;
    while (this.daily.length && this.daily[0] <= d) this.daily.shift();
  }
  async throttle() {
    this.evict();
    if (this.daily.length >= this.rpd) {
      const h = Math.ceil((RATE_WINDOW_DAY - (Date.now() - this.daily[0])) / 3_600_000);
      throw new DailyQuotaError(`Daily embed quota exhausted (${this.rpd} RPD). Resets in ~${h}h.`);
    }
    if (this.ts.length >= this.rpm) {
      const wait = RATE_WINDOW_MS - (Date.now() - this.ts[0]) + 200;
      console.log(`  ⏳ embed RPM window full — waiting ${Math.ceil(wait / 1000)}s...`);
      await sleep(wait);
      this.evict();
    }
    const now = Date.now();
    this.ts.push(now);
    this.daily.push(now);
  }
}
const embedLimiter = new RateLimiter(EMBED_RPM, EMBED_RPD);

// ── Embedding ───────────────────────────────────────────────────────────────
async function embedBatch(texts: string[], retries = 5): Promise<Embedding[]> {
  if (texts.length === 0) return [];
  if (USE_LOCAL) {
    const res = await fetch(`${OLLAMA_BASE}/api/embed`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: LOCAL_EMBED_MODEL, input: texts }),
    });
    if (!res.ok) throw new Error(`Ollama embed error: ${res.status} ${await res.text()}`);
    const data = (await res.json()) as { embeddings: number[][] };
    return data.embeddings.map((e) => e.slice(0, EMBED_DIMS));
  }
  for (let attempt = 0; attempt <= retries; attempt++) {
    await embedLimiter.throttle();
    const res = await fetch(`${GEMINI_BASE}/${EMBED_MODEL}:batchEmbedContents?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: texts.map((text) => ({
          model: `models/${EMBED_MODEL}`,
          content: { parts: [{ text }] },
          outputDimensionality: EMBED_DIMS,
        })),
      }),
    });
    if (res.status === 429) {
      if (attempt === retries) throw new Error("Embed rate limit: max retries");
      console.log(`  ⏳ 429 — waiting ${RATE_WINDOW_MS / 1000}s...`);
      await sleep(RATE_WINDOW_MS + 500);
      continue;
    }
    if (!res.ok) throw new Error(`Gemini embed error: ${res.status} ${await res.text()}`);
    const data = (await res.json()) as { embeddings: { values: number[] }[] };
    return data.embeddings.map((e) => e.values);
  }
  throw new Error("Embed failed after retries");
}

// ── Vectorize + D1 ────────────────────────────────────────────────────────────
async function vectorizeQuery(embedding: Embedding, taskFilter: string, topK = 3): Promise<{ score: number }[]> {
  const res = await fetch(`${CF_BASE}/vectorize/v2/indexes/${VECTORIZE_INDEX}/query`, {
    method: "POST",
    headers: CF_HEADERS,
    body: JSON.stringify({ vector: embedding, topK, filter: { task: taskFilter }, returnMetadata: "none", returnValues: false }),
  });
  if (!res.ok) {
    const err = await res.text();
    if (res.status === 400 && err.includes("no vectors")) return [];
    throw new Error(`Vectorize query error: ${res.status} ${err}`);
  }
  const data = (await res.json()) as { result?: { matches?: { score: number }[] } };
  return data.result?.matches ?? [];
}

async function vectorizeUpsert(id: string, embedding: Embedding, task: string): Promise<void> {
  const res = await fetch(`${CF_BASE}/vectorize/v2/indexes/${VECTORIZE_INDEX}/upsert`, {
    method: "POST",
    headers: { ...CF_HEADERS, "Content-Type": "application/x-ndjson" },
    body: JSON.stringify({ id, values: embedding, metadata: { task } }) + "\n",
  });
  if (!res.ok) throw new Error(`Vectorize upsert error: ${res.status} ${await res.text()}`);
}

async function d1Insert(item: BankItem & { task: string; vectorId: string }): Promise<void> {
  const res = await fetch(`${CF_BASE}/d1/database/${D1_DATABASE_ID}/query`, {
    method: "POST",
    headers: CF_HEADERS,
    body: JSON.stringify({
      sql: `INSERT OR IGNORE INTO item_cache (task, prompt, options, answer, explanation, created_at, vector_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      params: [item.task, item.prompt, JSON.stringify(item.options), item.answer, item.explanation ?? "", Date.now(), item.vectorId],
    }),
  });
  if (!res.ok) throw new Error(`D1 insert error: ${res.status} ${await res.text()}`);
}

// ── Bank extraction from .tsx ──────────────────────────────────────────────────
const realRequire = createRequire(import.meta.url);
const React = realRequire("react");
const jsxRuntime = realRequire("react/jsx-runtime");
const stubProxy: unknown = new Proxy(function () {}, {
  get: (_t, prop) => (prop === "__esModule" ? false : stubProxy),
  apply: () => stubProxy,
  construct: () => stubProxy as object,
});
function smartRequire(spec: string): unknown {
  if (spec === "react") return React;
  if (spec === "react/jsx-runtime" || spec === "react/jsx-dev-runtime") return jsxRuntime;
  if (spec === "next/dynamic") return { __esModule: true, default: () => () => null };
  return stubProxy;
}

interface PoolBank {
  task: string;
  code: string;
  file: string;
  items: BankItem[];
}

function isValid(b: BankItem): boolean {
  return (
    !!b &&
    typeof b.prompt === "string" &&
    b.prompt.trim().length > 0 &&
    Array.isArray(b.options) &&
    b.options.length >= 2 &&
    b.options.every((o) => typeof o === "string") &&
    typeof b.answer === "string" &&
    b.options.includes(b.answer)
  );
}

async function extractPoolBanks(): Promise<{ banks: PoolBank[]; skippedItems: string[] }> {
  const pattern = GRADE > 0 ? `src/curriculum/grade${GRADE}/**/*.tsx` : "src/curriculum/grade*/**/*.tsx";
  const files = await glob(pattern, { cwd: PROJECT_DIR });
  const banks: PoolBank[] = [];
  const skippedItems: string[] = [];

  for (const rel of files) {
    const file = path.join(PROJECT_DIR, rel);
    const src = fs.readFileSync(file, "utf8");
    const apiMatch = src.match(/apiPath="\/api\/caps\/([a-z0-9]+)"/);
    const taskMatch = src.match(/task="([^"]+)"/);
    if (!apiMatch || !taskMatch) continue; // not pool-mode

    const bankVar = src.match(/\bbank=\{([A-Za-z_$][\w$]*)\}/)?.[1] ?? "bank";
    let raw: unknown;
    try {
      const { code } = await esbuild.transform(src + `\nexport { ${bankVar} as __bank };\n`, {
        loader: "tsx",
        format: "cjs",
        jsx: "automatic",
        logLevel: "silent",
      });
      const mod: { exports: { __bank?: unknown } } = { exports: {} };
      new Function("require", "module", "exports", code)(smartRequire, mod, mod.exports);
      raw = mod.exports.__bank;
    } catch (err) {
      console.warn(`  ⚠️  could not extract bank from ${rel}: ${(err as Error).message}`);
      continue;
    }

    const all = Array.isArray(raw) ? (raw as BankItem[]) : [];
    const items = all.filter((b) => {
      if (isValid(b)) return true;
      skippedItems.push(`${taskMatch[1]}: "${String(b?.prompt).slice(0, 60)}…"`);
      return false;
    });
    if (items.length > 0) banks.push({ task: taskMatch[1], code: apiMatch[1], file: rel, items });
  }
  return { banks, skippedItems };
}

// ── Progress ────────────────────────────────────────────────────────────────
function loadDone(): Set<string> {
  try {
    return new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8")).done ?? []);
  } catch {
    return new Set();
  }
}
function saveDone(done: Set<string>) {
  if (DRY_RUN) return;
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ done: [...done] }, null, 2));
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📦 Static-bank import — ${GRADE > 0 ? `grade ${GRADE}` : "all grades"}${USE_LOCAL ? " (local embeddings)" : ""}${DRY_RUN ? " [DRY RUN]" : ""}\n`);

  const { banks, skippedItems } = await extractPoolBanks();
  const totalItems = banks.reduce((n, b) => n + b.items.length, 0);
  console.log(`Discovered ${banks.length} pool topics, ${totalItems} valid bank items.`);
  if (skippedItems.length) {
    console.log(`⚠️  Skipped ${skippedItems.length} invalid item(s) (answer not in options / empty):`);
    skippedItems.slice(0, 10).forEach((s) => console.log(`     - ${s}`));
  }
  if (DRY_RUN) {
    console.log(`\n[DRY RUN] No embeddings or writes performed.\n`);
    return;
  }

  const done = loadDone();
  const todo = banks.filter((b) => !done.has(b.task));
  console.log(`${todo.length} topics to process (${done.size} already done)\n`);

  let inserted = 0, deduped = 0, errored = 0;
  for (const bank of todo) {
    process.stdout.write(`[${bank.code}/${bank.task}] embedding ${bank.items.length}…`);
    let embeddings: Embedding[];
    try {
      embeddings = await embedBatch(bank.items.map((it) => it.prompt));
    } catch (err) {
      if (err instanceof DailyQuotaError) {
        console.log(`\n⛔ ${err.message}\n   Progress saved — re-run to continue.\n`);
        return;
      }
      console.warn(` ⚠️  embed failed: ${err} — skipping topic`);
      continue;
    }

    const taskEmbeddings: Embedding[] = [];
    let ti = 0, td = 0, te = 0;
    for (let j = 0; j < bank.items.length; j++) {
      const item = bank.items[j];
      const emb = embeddings[j];
      // within-batch dedup
      if (taskEmbeddings.some((e) => cosine(emb, e) >= SIMILARITY_THRESHOLD)) { td++; continue; }
      // dedup against existing pool for this task
      try {
        const matches = await vectorizeQuery(emb, bank.task);
        if (matches.some((m) => m.score >= SIMILARITY_THRESHOLD)) { td++; continue; }
      } catch (err) {
        console.warn(`\n    ⚠️  Vectorize query failed: ${err} — inserting anyway`);
      }
      const vid = vectorId(bank.task, item.prompt);
      try {
        await d1Insert({ ...item, task: bank.task, vectorId: vid });
        await vectorizeUpsert(vid, emb, bank.task);
        taskEmbeddings.push(emb);
        ti++;
      } catch (err) {
        te++;
        console.warn(`\n    ⚠️  insert failed: ${err}`);
      }
    }
    console.log(` +${ti} inserted, ${td} deduped${te ? `, ${te} errors` : ""}`);
    inserted += ti; deduped += td; errored += te;
    if (te === 0) { done.add(bank.task); saveDone(done); }
  }

  console.log(`\n🎉 Import complete — ${inserted} inserted, ${deduped} deduped, ${errored} errors across ${todo.length} topics.\n`);
}

main().catch((err) => {
  console.error("\n❌ Import failed:", err);
  process.exit(1);
});
