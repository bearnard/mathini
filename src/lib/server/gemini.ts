import { getCloudflareContext } from '@opennextjs/cloudflare';
import { Mp3Encoder } from '@breezystack/lamejs';
import { katexError } from './latexCheck';
import { acceptItems } from '../shared/questionQuality';
import { registerAiStatements } from './questions/register';

/**
 * Reads the Gemini API key from the server environment. In production the key
 * is a Cloudflare secret exposed on the Worker env; locally it comes from
 * `.dev.vars` (loaded by initOpenNextCloudflareForDev). The key is NEVER sent
 * to the client.
 */
export function getGeminiKey(): string {
  const fromProcess = process.env.GEMINI_API_KEY;
  if (fromProcess) {
    return fromProcess;
  }

  const { env } = getCloudflareContext();
  const key = env.GEMINI_API_KEY;
  if (!key) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  return key;
}

const BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

const ITEM_SCHEMA = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prompt: { type: 'string' },
          options: { type: 'array', items: { type: 'string' } },
          answer: { type: 'string' },
          explanation: { type: 'string' },
        },
        required: ['prompt', 'options', 'answer', 'explanation'],
      },
    },
  },
  required: ['items'],
} as const;

export interface GeneratedItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

/**
 * Calls Gemini to generate a batch of practice items as validated JSON. Pass `apiKey` when running outside a request
 * (the scheduled handler has no request context for getGeminiKey to read from). This only checks the SHAPE; quality
 * rules (length tell, scratchpad explanations, duplicates...) are applied by acceptItems before anything is stored.
 */
export async function generateItems(prompt: string, apiKey?: string): Promise<GeneratedItem[]> {
  const key = apiKey ?? getGeminiKey();
  const res = await fetch(`${BASE}/gemini-3.5-flash:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: ITEM_SCHEMA,
        temperature: 1.0,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Gemini error: ${res.status}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini returned no content');
  }

  const parsed = JSON.parse(text) as { items?: GeneratedItem[] };
  const items = parsed.items ?? [];

  return items.filter(
    (it) =>
      it &&
      typeof it.prompt === 'string' &&
      Array.isArray(it.options) &&
      it.options.length === 4 &&
      it.options.every((o) => typeof o === 'string') &&
      typeof it.answer === 'string' &&
      it.options.includes(it.answer),
  );
}

/** Calls Gemini TTS and returns 24kHz mono 16-bit PCM bytes. */
export async function synthesizePcm(text: string): Promise<Uint8Array> {
  const key = getGeminiKey();
  const res = await fetch(
    `${BASE}/gemini-2.5-flash-preview-tts:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Lees hierdie Afrikaanse teks stadig en duidelik voor vir 'n kind wat Afrikaans leer: ${text}`,
              },
            ],
          },
        ],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
        },
      }),
    },
  );

  if (!res.ok) {
    throw new Error(`Gemini TTS error: ${res.status}`);
  }

  const data = (await res.json()) as {
    candidates?: {
      content?: { parts?: { inlineData?: { data?: string } }[] };
    }[];
  };
  const b64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!b64) {
    throw new Error('Gemini TTS returned no audio');
  }

  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

/**
 * Encodes raw PCM (mono, 16-bit, little-endian) to MP3. MP3 is ~8x smaller
 * than WAV and, unlike Opus/WebM, plays in every browser including iOS/Safari,
 * which matters for school tablets. Encoded once, then cached in D1.
 */
export function pcmToMp3(pcm: Uint8Array, sampleRate = 24000, kbps = 48): Uint8Array {
  const samples = new Int16Array(pcm.buffer, pcm.byteOffset, Math.floor(pcm.byteLength / 2));
  const encoder = new Mp3Encoder(1, sampleRate, kbps);
  const chunks: Uint8Array[] = [];
  const blockSize = 1152;

  for (let i = 0; i < samples.length; i += blockSize) {
    const block = samples.subarray(i, i + blockSize);
    const encoded = encoder.encodeBuffer(block);
    if (encoded.length > 0) {
      chunks.push(new Uint8Array(encoded));
    }
  }

  const tail = encoder.flush();
  if (tail.length > 0) {
    chunks.push(new Uint8Array(tail));
  }

  const total = chunks.reduce((sum, c) => sum + c.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }

  return out;
}

/** Returns the D1 binding, or null if it is not configured (e.g. some dev setups). */
export function getDb(): D1Database | null {
  try {
    return getCloudflareContext().env.DB ?? null;
  } catch {
    return null;
  }
}

/** Returns the R2 audio bucket, or null if it is not configured. */
export function getBucket(): R2Bucket | null {
  try {
    return getCloudflareContext().env.AUDIO ?? null;
  } catch {
    return null;
  }
}

/** Derives a stable R2 object key from the text (SHA-256 hex). */
async function audioKey(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const hex = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return `tts/${hex}.mp3`;
}

/**
 * Looks up cached MP3 audio for an exact text. The D1 row holds the R2 key;
 * the bytes are fetched from R2. Returns null on miss or error.
 */
export async function getCachedAudio(text: string): Promise<Uint8Array | null> {
  const db = getDb();
  const bucket = getBucket();
  if (!db || !bucket) {
    return null;
  }

  try {
    const row = await db
      .prepare('SELECT r2_key FROM tts_cache WHERE text = ?')
      .bind(text)
      .first<{ r2_key: string }>();
    if (!row?.r2_key) {
      return null;
    }

    const obj = await bucket.get(row.r2_key);
    if (!obj) {
      return null;
    }

    return new Uint8Array(await obj.arrayBuffer());
  } catch {
    return null;
  }
}

/** Stores MP3 audio in R2 and a reference row in D1. Best-effort. */
export async function putCachedAudio(text: string, mp3: Uint8Array): Promise<void> {
  const db = getDb();
  const bucket = getBucket();
  if (!db || !bucket) {
    return;
  }

  try {
    const key = await audioKey(text);
    await bucket.put(key, mp3, {
      httpMetadata: { contentType: 'audio/mpeg' },
    });
    await db
      .prepare(
        'INSERT OR REPLACE INTO tts_cache (text, r2_key, mime, created_at) VALUES (?, ?, ?, ?)',
      )
      .bind(text, key, 'audio/mpeg', Date.now())
      .run();
  } catch {
    // best-effort cache; ignore write failures
  }
}

/**
 * Persists generated items so they can serve as a server-side fallback pool. Every item goes through the quality
 * validator first: rejected items are never stored; accepted ones are stored with their quality score and flags.
 */
export async function persistItems(task: string, items: GeneratedItem[]): Promise<void> {
  const db = getDb();
  if (!db || items.length === 0) {
    return;
  }

  try {
    const existing = await db.prepare('SELECT prompt FROM item_cache WHERE task = ?').bind(task).all<{ prompt: string }>();
    const { accepted } = acceptItems(items, { existingPrompts: (existing.results ?? []).map((r) => r.prompt), validateMath: katexError });
    if (accepted.length === 0) return;
    const now = Date.now();
    const stmt = db.prepare(
      'INSERT OR IGNORE INTO item_cache (task, prompt, options, answer, explanation, created_at, section, quality_score, quality_flags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    );
    const batch = accepted.map((it) =>
      stmt.bind(task, it.prompt, JSON.stringify(it.options), it.answer, it.explanation ?? '', now, 'general', it.quality_score, JSON.stringify(it.quality_flags)),
    );
    // The rows and their registration in questions / question_versions go in one batch; if the registration cannot run, the plain inserts still do.
    const registration = accepted.flatMap((it) => registerAiStatements({ task, section: 'general', prompt: it.prompt, options: it.options, answer: it.answer, explanation: it.explanation }).map((st) => db.prepare(st.sql).bind(...st.params)));
    try {
      await db.batch([...batch, ...registration]);
    } catch {
      await db.batch(batch);
    }
  } catch {
    // best-effort persistence; ignore write failures
  }
}

/** Pulls a random set of previously generated items for a task from D1. */
export async function fallbackItems(task: string, count: number): Promise<GeneratedItem[]> {
  const db = getDb();
  if (!db) {
    return [];
  }

  try {
    const res = await db
      .prepare(
        'SELECT prompt, options, answer, explanation FROM item_cache WHERE task = ? AND (quality_score IS NULL OR quality_score > 0) ORDER BY RANDOM() LIMIT ?',
      )
      .bind(task, count)
      .all<{ prompt: string; options: string; answer: string; explanation: string }>();

    return (res.results ?? []).map((r) => ({
      prompt: r.prompt,
      options: JSON.parse(r.options) as string[],
      answer: r.answer,
      explanation: r.explanation,
    }));
  } catch {
    return [];
  }
}
