/**
 * Evaluate local Ollama models for question generation quality.
 *
 * Sends the seed-questions prompt for one task to each available local model
 * and prints a quality report comparing:
 *   - JSON parse success
 *   - Valid question counts per batch type
 *   - Answer-in-options integrity
 *   - Sample question from each batch type
 *   - Response latency
 *
 * Usage:
 *   npx tsx scripts/eval-local-models.ts [--task <task-key>] [--count <n>]
 *
 * Defaults: task=what-is-trade, count=2 (questions per type)
 */

export {};  // treat as ES module to avoid global scope collisions

const OLLAMA_BASE = "http://localhost:11434/v1";

const MODELS = [
  "qwen3-coder:30b",
  "qwen3.6:27b-q4_K_M",
  "gemma4:e4b",
];

const BATCH_TYPES = ["definitions", "calculations", "application", "misconceptions"] as const;
type BatchType = typeof BATCH_TYPES[number];

interface GeneratedItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

type TaskBatches = Record<BatchType, GeneratedItem[]>;

// ── Prompt ───────────────────────────────────────────────────────────────────

function buildPrompt(taskKey: string, count: number): string {
  return `You are a South African educator writing CAPS-aligned multiple-choice practice questions.

Generate questions for the following topic: "${taskKey}"

Generate ${count} questions of EACH of the following 4 types (${count * 4} questions total):

1. DEFINITIONS — test vocabulary and conceptual understanding. Ask students to define a term or identify what something means. No calculations.
2. CALCULATIONS — require step-by-step numerical reasoning or formula application. Include working in the explanation.
3. APPLICATION — set in real-world South African contexts (local places, food, nature, culture). No generic "Country A/B" placeholders.
4. MISCONCEPTIONS — target common student errors. Distractors should represent typical mistakes; explanations must correct the misconception.

Requirements for every question:
- Exactly 4 answer options
- Exactly 1 correct answer that appears verbatim in the options array
- A clear explanation of why the answer is correct
- Language appropriate for the grade level
- South African curriculum context (CAPS)

CRITICAL: The "answer" field must contain the EXACT full text of the correct option as it appears in the "options" array — NOT a letter like "A" or "B".

Return ONLY a JSON object with this exact structure (no markdown, no explanation, just JSON):
{
  "definitions":    [{ "prompt": "What is trade?", "options": ["Exchange of goods","Making goods","Storing goods","Transporting goods"], "answer": "Exchange of goods", "explanation": "Trade is the exchange of goods or services." }],
  "calculations":   [{ "prompt": "...", "options": ["10","20","30","40"], "answer": "20", "explanation": "..." }],
  "application":    [{ "prompt": "...", "options": ["option text 1","option text 2","option text 3","option text 4"], "answer": "option text 2", "explanation": "..." }],
  "misconceptions": [{ "prompt": "...", "options": ["option text 1","option text 2","option text 3","option text 4"], "answer": "option text 1", "explanation": "..." }]
}`;
}

// ── Validate ─────────────────────────────────────────────────────────────────

interface ValidationResult {
  valid: GeneratedItem[];
  invalid: number;
  reasons: string[];
}

function validateItems(items: unknown): ValidationResult {
  const result: ValidationResult = { valid: [], invalid: 0, reasons: [] };
  if (!Array.isArray(items)) {
    result.reasons.push("not an array");
    return result;
  }
  for (const it of items) {
    const issues: string[] = [];
    if (!it || typeof it !== "object") { issues.push("not an object"); }
    else {
      if (typeof it.prompt !== "string" || it.prompt.length < 10) issues.push("prompt too short");
      if (!Array.isArray(it.options) || it.options.length !== 4) issues.push("options not length 4");
      else if (!it.options.every((o: unknown) => typeof o === "string")) issues.push("options not all strings");
      if (typeof it.answer !== "string") issues.push("answer not string");
      else if (Array.isArray(it.options) && !it.options.includes(it.answer)) issues.push("answer not in options");
      if (typeof it.explanation !== "string") issues.push("no explanation");
    }
    if (issues.length === 0) {
      result.valid.push(it as GeneratedItem);
    } else {
      result.invalid++;
      result.reasons.push(...issues);
    }
  }
  return result;
}

// ── API call ─────────────────────────────────────────────────────────────────

interface ModelResult {
  model: string;
  latencyMs: number;
  parseOk: boolean;
  parseError?: string;
  rawLength: number;
  batches: Record<BatchType, ValidationResult>;
  totalValid: number;
  totalInvalid: number;
  thinkingTokens?: number;
}

async function evalModel(model: string, taskKey: string, count: number): Promise<ModelResult> {
  const prompt = buildPrompt(taskKey, count);
  const start = Date.now();

  const res = await fetch(`${OLLAMA_BASE}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      stream: false,
      // Ask for JSON output if model supports it
      response_format: { type: "json_object" },
    }),
  });

  const latencyMs = Date.now() - start;

  if (!res.ok) {
    const err = await res.text();
    return {
      model,
      latencyMs,
      parseOk: false,
      parseError: `HTTP ${res.status}: ${err.slice(0, 200)}`,
      rawLength: 0,
      batches: Object.fromEntries(BATCH_TYPES.map((t) => [t, { valid: [], invalid: 0, reasons: [] }])) as unknown as Record<BatchType, ValidationResult>,
      totalValid: 0,
      totalInvalid: 0,
    };
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };

  let raw = data.choices?.[0]?.message?.content ?? "";

  // Strip thinking tags (qwen3 models emit <think>...</think>)
  const thinkMatch = raw.match(/<think>([\s\S]*?)<\/think>/i);
  const thinkingTokens = thinkMatch ? Math.round(thinkMatch[1].length / 4) : undefined;
  raw = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();

  // Strip markdown code fences
  raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();

  const rawLength = raw.length;

  let parsed: Partial<TaskBatches>;
  let parseOk = true;
  let parseError: string | undefined;

  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    parseOk = false;
    parseError = String(e).slice(0, 200);
    parsed = {};
  }

  const batches = Object.fromEntries(
    BATCH_TYPES.map((t) => [t, validateItems((parsed as Record<string, unknown>)[t])])
  ) as Record<BatchType, ValidationResult>;

  const totalValid = BATCH_TYPES.reduce((s, t) => s + batches[t].valid.length, 0);
  const totalInvalid = BATCH_TYPES.reduce((s, t) => s + batches[t].invalid, 0);

  return { model, latencyMs, parseOk, parseError, rawLength, batches, totalValid, totalInvalid, thinkingTokens };
}

// ── Display ───────────────────────────────────────────────────────────────────

function printReport(results: ModelResult[], taskKey: string, count: number) {
  const hr = "─".repeat(70);
  console.log(`\n${"═".repeat(70)}`);
  console.log(`  Local model evaluation — task: "${taskKey}" — ${count} Q/type requested`);
  console.log(`${"═".repeat(70)}\n`);

  for (const r of results) {
    console.log(`${hr}`);
    console.log(`  Model: ${r.model}`);
    console.log(`  Latency: ${(r.latencyMs / 1000).toFixed(1)}s  |  Raw response: ${r.rawLength} chars${r.thinkingTokens ? `  |  Thinking: ~${r.thinkingTokens} tokens` : ""}`);

    if (!r.parseOk) {
      console.log(`  ❌ JSON parse FAILED: ${r.parseError}`);
      console.log();
      continue;
    }

    console.log(`  ✅ JSON parsed OK`);
    console.log();

    const maxValid = count * 4;
    const bar = (n: number) => "█".repeat(n) + "░".repeat(Math.max(0, count - n));

    for (const type of BATCH_TYPES) {
      const bv = r.batches[type];
      const n = bv.valid.length;
      console.log(`  [${type.padEnd(14)}] ${bar(n)} ${n}/${count} valid${bv.invalid > 0 ? ` (${bv.invalid} invalid: ${[...new Set(bv.reasons)].join(", ")})` : ""}`);

      if (n > 0) {
        const q = bv.valid[0];
        console.log(`    Q: ${q.prompt.slice(0, 80)}${q.prompt.length > 80 ? "…" : ""}`);
        console.log(`    A: ${q.answer}`);
        console.log(`    💡 ${q.explanation.slice(0, 100)}${q.explanation.length > 100 ? "…" : ""}`);
      }
      console.log();
    }

    const pct = maxValid > 0 ? Math.round((r.totalValid / maxValid) * 100) : 0;
    const verdict = pct === 100 ? "🟢 PERFECT" : pct >= 75 ? "🟡 GOOD" : pct >= 50 ? "🟠 PARTIAL" : "🔴 POOR";
    console.log(`  Overall: ${r.totalValid}/${maxValid} valid (${pct}%) ${verdict}`);
    console.log();
  }

  // Summary table
  console.log(`${"═".repeat(70)}`);
  console.log(`  Summary`);
  console.log(`${"─".repeat(70)}`);
  console.log(`  ${"Model".padEnd(30)} ${"Valid".padStart(6)} ${"Latency".padStart(10)}`);
  console.log(`  ${"─".repeat(30)} ${"─".repeat(6)} ${"─".repeat(10)}`);
  for (const r of results) {
    const maxValid = count * 4;
    const score = r.parseOk ? `${r.totalValid}/${maxValid}` : "PARSE FAIL";
    console.log(`  ${r.model.padEnd(30)} ${score.padStart(6)} ${`${(r.latencyMs / 1000).toFixed(1)}s`.padStart(10)}`);
  }
  console.log(`${"═".repeat(70)}\n`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const getStr = (flag: string, def: string) => {
    const i = args.indexOf(flag);
    return i !== -1 ? (args[i + 1] ?? def) : def;
  };
  const getNum = (flag: string, def: number) => {
    const v = parseInt(getStr(flag, String(def)), 10);
    return isNaN(v) ? def : v;
  };

  const taskKey = getStr("--task", "what-is-trade");
  const count = getNum("--count", 2);

  console.log(`\n🔍 Evaluating ${MODELS.length} local models for task: "${taskKey}" (${count} questions/type)\n`);

  // Run models sequentially to avoid overloading the local GPU
  const results: ModelResult[] = [];
  for (const model of MODELS) {
    process.stdout.write(`  Testing ${model}... `);
    try {
      const r = await evalModel(model, taskKey, count);
      results.push(r);
      const status = r.parseOk ? `✅ ${r.totalValid}/${count * 4} valid` : "❌ parse fail";
      console.log(`${status} (${(r.latencyMs / 1000).toFixed(1)}s)`);
    } catch (err) {
      console.log(`❌ Error: ${err}`);
      results.push({
        model,
        latencyMs: 0,
        parseOk: false,
        parseError: String(err),
        rawLength: 0,
        batches: Object.fromEntries(BATCH_TYPES.map((t) => [t, { valid: [], invalid: 0, reasons: [] }])) as unknown as Record<BatchType, ValidationResult>,
        totalValid: 0,
        totalInvalid: 0,
      });
    }
  }

  printReport(results, taskKey, count);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
