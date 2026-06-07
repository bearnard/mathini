import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { generateItems } from '../../../../lib/server/gemini';

export const dynamic = 'force-dynamic';

// Grade 6 question pool target per task
const MIN_POOL_SIZE = 50;
// Max tasks to top up per cron invocation (stay within Worker CPU limits)
const MAX_TASKS_PER_RUN = 50;

const EMBED_MODEL = 'models/gemini-embedding-001';
const EMBED_DIMS = 768;
const SIMILARITY_THRESHOLD = 0.88;

type BatchType = 'definitions' | 'calculations' | 'application' | 'misconceptions';

const BATCH_INSTRUCTIONS: Record<BatchType, string> = {
  definitions: 'Generate 10 multiple-choice questions testing DEFINITIONS and TERMINOLOGY. Focus on vocabulary and conceptual understanding. Avoid calculations.',
  calculations: 'Generate 10 multiple-choice questions requiring CALCULATIONS or step-by-step NUMERICAL REASONING. Include working in explanations.',
  application: 'Generate 10 multiple-choice questions set in REAL-WORLD SOUTH AFRICAN CONTEXTS. Use real SA places, situations, food, or culture — no generic placeholders.',
  misconceptions: 'Generate 10 multiple-choice questions targeting common MISCONCEPTIONS. Wrong options should represent typical student errors. Explanations must correct the misconception.',
};

function buildBatchPrompt(taskKey: string, batchType: BatchType): string {
  return `You are a South African Grade 6 educator writing CAPS-aligned multiple-choice practice questions for: "${taskKey}".

${BATCH_INSTRUCTIONS[batchType]}

Requirements: exactly 4 options, exactly 1 correct answer verbatim in the options array, Grade 6 language (age 11–12), SA CAPS context.
Return JSON: { "items": [{ "prompt": "...", "options": ["A","B","C","D"], "answer": "A", "explanation": "..." }] }`;
}

type Embedding = number[];

function cosine(a: Embedding, b: Embedding): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function embedText(text: string, apiKey: string): Promise<Embedding> {
  const base = 'https://generativelanguage.googleapis.com/v1beta/models';
  const res = await fetch(`${base}/${EMBED_MODEL}:embedContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: { parts: [{ text }] },
      outputDimensionality: EMBED_DIMS,
    }),
  });
  if (!res.ok) throw new Error(`Embed error: ${res.status}`);
  const data = (await res.json()) as { embedding: { values: number[] } };
  return data.embedding.values;
}

export async function GET(req: NextRequest) {
  // Allow manual trigger with ?secret= for testing; cron invocations have no secret
  const secret = req.nextUrl.searchParams.get('secret');
  const { env } = getCloudflareContext();
  if (env.CRON_SECRET && secret !== env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = env.DB;
  const vectorize = env.QUESTIONS_IDX;
  const apiKey = env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'GEMINI_API_KEY not configured' }, { status: 500 });
  }

  // Fetch all Grade 6 task keys that need topping up
  const countRows = await db
    .prepare('SELECT task, COUNT(*) as cnt FROM item_cache GROUP BY task')
    .all<{ task: string; cnt: number }>();

  const countMap = new Map(
    (countRows.results ?? []).map((r) => [r.task, r.cnt]),
  );

  // Load all Grade 6 task keys from the existing pool or hardcode them
  // We derive the list from what's already seeded (tasks with < MIN_POOL_SIZE items)
  const tasks = Array.from(countMap.entries())
    .filter(([, cnt]) => cnt < MIN_POOL_SIZE)
    .map(([task]) => task)
    .slice(0, MAX_TASKS_PER_RUN);

  let totalInserted = 0;
  const BATCH_TYPES: BatchType[] = ['definitions', 'calculations', 'application', 'misconceptions'];

  for (const taskKey of tasks) {
    const needed = MIN_POOL_SIZE - (countMap.get(taskKey) ?? 0);
    if (needed <= 0) continue;

    const taskEmbeddings: Embedding[] = [];
    let taskInserted = 0;

    for (const batchType of BATCH_TYPES) {
      if (taskInserted >= needed) break;

      try {
        const prompt = buildBatchPrompt(taskKey, batchType);
        const items = await generateItems(prompt);

        for (const item of items) {
          if (taskInserted >= needed) break;

          const emb = await embedText(item.prompt, apiKey);

          // In-memory dedup within this cron run
          const memDup = taskEmbeddings.some((e) => cosine(emb, e) >= SIMILARITY_THRESHOLD);
          if (memDup) continue;

          // Vectorize dedup against existing questions
          let vectorDup = false;
          try {
            const matches = await vectorize.query(emb, {
              topK: 3,
              filter: { task: taskKey },
              returnMetadata: 'none',
              returnValues: false,
            });
            vectorDup = matches.matches.some((m) => m.score >= SIMILARITY_THRESHOLD);
          } catch {
            // Continue without Vectorize check if it fails
          }
          if (vectorDup) continue;

          const vid = Buffer.from(`${taskKey}|${item.prompt}`).toString('base64url').slice(0, 64);

          await vectorize.upsert([{ id: vid, values: emb, metadata: { task: taskKey } }]);
          await db
            .prepare(
              'INSERT OR IGNORE INTO item_cache (task, prompt, options, answer, explanation, created_at, vector_id, section) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            )
            .bind(taskKey, item.prompt, JSON.stringify(item.options), item.answer, item.explanation ?? '', Date.now(), vid, 'general')
            .run();

          taskEmbeddings.push(emb);
          taskInserted++;
          totalInserted++;
        }
      } catch {
        // Skip failed batches; cron will retry next week
      }
    }
  }

  return NextResponse.json({
    ok: true,
    tasksProcessed: tasks.length,
    questionsInserted: totalInserted,
  });
}
